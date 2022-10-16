import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";

interface CheckBox {
  isChecked: Boolean;
}

function CheckBox<CheckBox>({ CheckText, style }) {
  const [Pressed, setIsPrerssed] = useState(false);
  return (
    <SafeAreaView style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={() => setIsPrerssed(!Pressed)}>
        <View
          style={[
            {
              backgroundColor: Pressed ? "silver" : "#F6F6F6",
              borderColor: Pressed ? "white" : "silver",
            },
            styles.checkBox,
          ]}
        ></View>
      </TouchableWithoutFeedback>
      <Text>{CheckText}</Text>
    </SafeAreaView>
  );
}

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  checkBox: {
    width: 16,
    height: 16,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
  },
});
