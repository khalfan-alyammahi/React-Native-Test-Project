import React from "react";
import { View, StyleSheet, Image, SafeAreaView, Text } from "react-native";

interface Card {
  ImageUrl: string;
  title: string;
  subTitle: string;
  time: string;
}

const Card: React.FC<Card> = ({ ImageUrl, title, subTitle, time }) => {
  return (
    <SafeAreaView
      style={{
        marginBottom: 10,
      }}
    >
      <Image
        source={{
          uri: ImageUrl,
        }}
        style={styles.cardImage}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardImage: {
    width: 370,
    height: 240,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 5,
  },

  detailsContainer: {
    marginLeft: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },

  time: {
    color: "#BDBDBD",
    fontSize: 14,
  },

  subTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
});
