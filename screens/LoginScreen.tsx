import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import CheckBox from "../components/CheckBox";
import { SignUpProps, Props } from "./SignUpScreen";

function Header() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.Login}>Login</Text>
    </View>
  );
}

// we have to fix the problem here but later
const Body: React.FC<Props> = ({
  PasswordVisibilty,
  setPasswordVisibilty,
  navigation,
}) => {
  const [text, setText] = useState("Show");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const details = {
    email: Email,
    password: Password,
  };
  return (
    <View style={styles.BodyContainer}>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        placeholderTextColor={"#BDBDBD"}
        onChangeText={(text) => setEmail(text)}
      />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F6F6F6",
          justifyContent: "space-between",
          alignItems: "center",
          width: 370,
          height: 50,
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#BDBDBD"}
          secureTextEntry={PasswordVisibilty}
          textAlign={"left"}
          onChangeText={(text) => setPassword(text)}
        />

        <Text
          style={{ color: "#5DB075", fontSize: 16 }}
          onPress={() => {
            setPasswordVisibilty(!PasswordVisibilty);
            text == "Show" ? setText("UnShow") : setText("Show");
          }}
        >
          {text}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("Feed");
          console.log(details);
        }}
      >
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.ButtonText, { color: "#5DB075", marginTop: 19 }]}>
          Forgot your password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [PasswordVisibilty, setPasswordVisibilty] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {Header()}
      {Body({ PasswordVisibilty, setPasswordVisibilty, navigation })}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  BodyContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  buttonContainer: {
    width: 370,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#5DB075",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  ButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  checkBox: {
    margin: 20,
  },
  HeaderContainer: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Login: {
    fontSize: 30,
    color: "black",
    fontWeight: "500",
  },
  login: {
    fontSize: 16,
    color: "#5DB075",
  },
  textInput: {
    width: 370,
    height: 50,
    backgroundColor: "#F6F6F6",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
