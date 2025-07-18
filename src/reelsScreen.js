// src/reelsScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import { db } from './firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // For icons

const screenHeight = Dimensions.get('window').height;

const ReelsScreen = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = collection(db, 'reels');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReels(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;

  return (
    <FlatList
      data={reels}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: item.videoUrl }}
            style={styles.video}
            useNativeControls={false}
            resizeMode="cover"
            isLooping
            shouldPlay
          />

          {/* Action buttons */}
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="heart" size={30} color="#fff" />
              <Text style={styles.iconText}>Like</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="comment" size={28} color="#fff" />
              <Text style={styles.iconText}>Comment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="share-social" size={28} color="#fff" />
              <Text style={styles.iconText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToInterval={screenHeight}
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    height: screenHeight,
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    flex: 1,
  },
  actionContainer: {
    position: 'absolute',
    right: 15,
    bottom: 100,
    alignItems: 'center',
  },
  iconButton: {
    marginBottom: 25,
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default ReelsScreen;
