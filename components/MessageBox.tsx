import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export type MessageBoxType = {
  MessageText: string;
  WhoSend: string;
};

const MessageBox: React.FC<MessageBoxType> = ({ WhoSend, MessageText }) => {
  return (
    <SafeAreaView style={{ marginLeft: 16 }}>
      <View
        style={{
          width: 235,
          height: 126,
          backgroundColor: WhoSend == "Me" ? "#F6F6F6" : "#5DB075",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: WhoSend == "Me" ? "#E8E8E8" : "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={[
            styles.MessageText,
            { color: WhoSend == "Me" ? "black" : "white" },
          ]}
        >
          {MessageText}
        </Text>
      </View>
      <View
        style={[
          styles.triangle,
          { borderTopColor: WhoSend == "Me" ? "#F6F6F6" : "#5DB075" },
        ]}
      />
    </SafeAreaView>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderTopWidth: 25,
    borderRightWidth: 20,
    borderRightColor: "transparent",
    top: -5,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  MessageText: {
    fontSize: 14,
    fontWeight: "normal",
    width: 203,
    height: 72,
  },
});
