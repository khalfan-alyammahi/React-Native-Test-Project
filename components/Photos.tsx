import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";

interface Photos {
  imageUrl: string;
  subtitle: string;
  time: string;
  title: string;
}

const Photos: React.FC<Photos> = ({ imageUrl, title, subtitle, time }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.photo}
      />
      <View style={{ marginLeft: 16 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
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
    backgroundColor: "white",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#BDBDBD",
  },
});
