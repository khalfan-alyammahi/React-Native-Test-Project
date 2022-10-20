import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";

interface Photos {
  imageUrl: string;
}

const Photos: React.FC<Photos> = ({ imageUrl }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.photo}
      />
      <Text style={styles.header}>Header</Text>
    </SafeAreaView>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: { justifyContent: "center", marginBottom: 20 },
  photo: {
    width: 370,
    height: 240,
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 5,
  },
  header: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
});
