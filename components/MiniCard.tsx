import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, View } from "react-native";

interface MiniCard {
  ImageUrl: string;
  details: string;
  price: string;
}

const MiniCard: React.FC<MiniCard> = ({ ImageUrl, details, price }) => {
  return (
    <SafeAreaView
      style={{
        width: 110,
        height: 200,
        justifyContent: "center",
        marginRight: 5,
      }}
    >
      <Image
        source={{
          uri: ImageUrl,
        }}
        style={styles.MiniCardImage}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>{details}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  details: {
    fontSize: 14,
    marginBottom: 5,
  },
  detailsContainer: {},
  price: {
    fontSize: 14,
    fontWeight: "600",
  },

  MiniCardImage: {
    width: 110,
    height: 110,
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 5,
  },
});
