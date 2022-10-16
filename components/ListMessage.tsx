import React from "react";

import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";

function ListMessage({ imageUrl, title, subtitle, time }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
          <Text style={{ marginRight: 45, fontSize: 14, color: "#BDBDBD" }}>
            {time}
          </Text>
        </View>

        <Text style={{ fontSize: 14 }}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
}

export default ListMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  image: { width: 50, height: 50, borderRadius: 5, marginRight: 10 },
});
