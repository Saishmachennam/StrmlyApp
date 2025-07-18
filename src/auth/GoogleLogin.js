// src/auth/GoogleLogin.js
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GoogleLogin({ navigation }) {
  const handleLogin = () => {
    // Simulate login logic (successful or failed)
    // Even if login fails, navigate to Home
    navigation.replace('Reels');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to StrmlyApp</Text>
      <Button title="Login with Google" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 }
});
