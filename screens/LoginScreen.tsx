import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { SignUpProps, Props } from "./SignUpScreen";
import DummyAccounts from "../AccountData";

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
  const [EmailValidated, setEmailValidated] = useState(true);
  const [PasswordValidated, setPasswordValidated] = useState(true);
  type accountprop = {
    email: string;
    password: string;
  };
  const checkAccount = (account: { email: string; password: string }) => {
    for (let i = 0; i < DummyAccounts.length; i++) {
      if (
        account.email == DummyAccounts[i].email &&
        account.password == DummyAccounts[i].password
      ) {
        return true;
      }
    }
    return false;
  };

  const checkEmailValidation = (text: string) => {
    if (
      text.includes("@gmail.com") ||
      text.includes("@hotmail.com") ||
      text.includes("@yahoo.com")
    ) {
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
  };
  const checkPasswordValidation = (text: string) => {
    if (text.trim().length >= 8) {
      setPasswordValidated(true);
    } else {
      setPasswordValidated(false);
    }
  };

  const details = {
    email: Email,
    password: Password,
  };
  return (
    <View style={styles.BodyContainer}>
      <View>
        <TextInput
          placeholder="Email"
          style={[
            styles.textInput,
            { marginBottom: EmailValidated == true ? 20 : 10 },
          ]}
          placeholderTextColor={"#BDBDBD"}
          onChangeText={(text) => {
            setEmail(text);
            checkEmailValidation(text);
          }}
        />
        {EmailValidated ? null : (
          <Text style={styles.errorMessage}>
            Email Must include @gmail.com or @hotmail.com or @yahoo.com
          </Text>
        )}
      </View>
      <View>
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
            marginBottom: PasswordValidated == true ? 20 : 10,
          }}
        >
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#BDBDBD"}
            secureTextEntry={PasswordVisibilty}
            textAlign={"left"}
            onChangeText={(text) => {
              setPassword(text);
              checkPasswordValidation(text);
            }}
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
        {PasswordValidated ? null : (
          <Text style={styles.errorMessage}>
            Password must be more than 8 character
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          if (checkAccount(details) == false) {
            alert("Account does not exsist");
          } else {
            navigation.navigate("Feed");
            console.log(details);
          }
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

const LoginScreen: React.FC<SignUpProps> = ({ navigation }) => {
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
  },
  errorMessage: {
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
});
