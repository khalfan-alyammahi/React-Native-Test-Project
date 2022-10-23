import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MessageBox from "../components/MessageBox";

const Header = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.Back}>Back</Text>
      <Text style={styles.HeaderTitle}>Messages</Text>
      <Text style={styles.Filter}>Filter</Text>
    </View>
  );
};

const Messages = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {Header()}
      <MessageBox
        WhoSend="not-me"
        MessageText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis."
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  HeaderContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  Back: {
    fontSize: 16,
    color: "#5DB075",
  },
  Filter: {
    fontSize: 16,
    color: "#5DB075",
  },
  HeaderTitle: {
    fontSize: 30,
    fontWeight: "600",
  },
});
