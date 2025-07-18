// src/screens/LoginScreen.js
import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "1062766537969-3asll1gn6jb0ojjjt3ur57nc5o8l2sub.apps.googleusercontent.com",
    androidClientId: '1062766537969-hh9h2j30chj4flepjc3j3mqo4c78btav.apps.googleusercontent.com'
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          console.log("Logged in successfully!");
        })
        .catch((error) => {
          console.error("Login error", error);
        });
    }
  }, [response]);

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Sign in with Google"
        disabled={!request}
        onPress={() => promptAsync()}
      />
    </View>
  );
}
