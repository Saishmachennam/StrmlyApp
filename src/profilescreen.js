import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Make sure you have this configured

const userId = 'cn7vDFJw4CSmOyZfxWro';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUser(userSnap.data());
        } else {
          console.warn('No such user!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>User profile not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePic }} style={styles.image} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.bio}>Bio: {user.bio}</Text>
      <Text style={styles.joinedAt}>
        Joined: {new Date(user.joinedAt.seconds * 1000).toDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  image: {
    width: 120, height: 120, borderRadius: 60, marginBottom: 20
  },
  name: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 5
  },
  email: {
    fontSize: 16, marginBottom: 5
  },
  bio: {
    fontSize: 16, fontStyle: 'italic', marginBottom: 5
  },
  joinedAt: {
    fontSize: 14, color: '#666'
  },
  text: {
    fontSize: 18, fontWeight: '500'
  }
});
