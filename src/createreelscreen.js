// src/screens/CreateReelScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { addReel } from "../utils/addReel";

const CreateReelScreen = () => {
  const [caption, setCaption] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleUpload = async () => {
    if (!caption || !videoUrl) {
      Alert.alert("Error", "Please enter both video URL and caption");
      return;
    }

    await addReel(videoUrl, caption, "saishma_c");
    Alert.alert("Success", "Reel uploaded successfully");
    setCaption("");
    setVideoUrl("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter video URL"
        value={videoUrl}
        onChangeText={setVideoUrl}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter caption"
        value={caption}
        onChangeText={setCaption}
        style={styles.input}
      />
      <Button title="Upload Reel" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});

export default CreateReelScreen;
