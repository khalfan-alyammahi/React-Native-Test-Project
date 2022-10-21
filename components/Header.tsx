import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons name="camera" size={16} color={"#BDBDBD"} />
      <Text style={styles.signOrLoginText}>Sign Up</Text>
      <Text style={styles.login}>Login</Text>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signOrLoginText: {
    fontSize: 30,
    color: "black",
  },
  login: {
    fontSize: 16,
    color: "#5DB075",
  },
});
