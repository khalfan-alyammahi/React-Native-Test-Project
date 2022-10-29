import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export type MessageBoxType = {
  MessageText: string;
  WhoSend: number;
};

const MessageBox: React.FC<MessageBoxType> = ({ WhoSend, MessageText }) => {
  return (
    <SafeAreaView style={{ marginLeft: 16 }}>
      <View
        style={{
          width: 235,
          height: 100,
          padding: 10,
          backgroundColor: WhoSend == 1 ? "#F6F6F6" : "#5DB075",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: WhoSend == 1 ? "#E8E8E8" : "transparent",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: WhoSend == 0 ? "flex-end" : "auto",
          marginRight: WhoSend == 0 ? 16 : 0,
        }}
      >
        <Text
          style={[
            styles.MessageText,
            { color: WhoSend == 1 ? "black" : "white" },
          ]}
        >
          {MessageText}
        </Text>
      </View>
      <View
        style={[
          styles.triangle,
          {
            borderTopColor: WhoSend == 1 ? "#F6F6F6" : "#5DB075",
            borderRightWidth: WhoSend == 1 ? 20 : 0,
            borderLeftWidth: WhoSend == 0 ? 20 : 0,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            alignSelf: WhoSend == 0 ? "flex-end" : "auto",
            marginRight: WhoSend == 0 ? 16 : 0,
          },
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
    top: -10,
  },
  MessageText: {
    fontSize: 14,
    fontWeight: "normal",
    width: 203,
    height: 72,
  },
});
