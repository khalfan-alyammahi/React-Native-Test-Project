import Reactl, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import CheckBox from "../components/CheckBox";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

export interface SignUpProps {
  navigation: NativeStackNavigationProp<RootStackParams, "SignUp", "Login">;
}

export interface ScreenProps {
  setPasswordVisibilty: (active: boolean) => void;
  PasswordVisibilty: boolean;
}

export type Props = SignUpProps & ScreenProps;

const Header: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <View style={styles.HeaderContainer}>
      <Entypo name="cross" size={20} color={"#BDBDBD"} />
      <Text style={styles.SignUp}>Sign Up</Text>
      <Text style={styles.login} onPress={() => navigation.navigate("Login")}>
        Login
      </Text>
    </View>
  );
};
// we have to fix the problem here but later
const Body: React.FC<Props> = ({
  PasswordVisibilty,
  setPasswordVisibilty,
  navigation,
}) => {
  const [text, setText] = useState("Show");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const details = {
    name: Name,
    email: Email,
    password: Password,
  };

  return (
    <View style={styles.BodyContainer}>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        placeholderTextColor={"#BDBDBD"}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        keyboardType={"email-address"}
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
      <CheckBox
        CheckText={
          "I would like to receive your newsletter and other promotional information."
        }
        style={styles.checkBox}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("Feed");
          console.log(details);
        }}
      >
        <Text style={styles.ButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.ButtonText, { color: "#5DB075", marginTop: 19 }]}>
          Forgot your password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const SignUpScreen: React.FC<SignUpProps> = ({ navigation }) => {
  const [PasswordVisibilty, setPasswordVisibilty] = useState(true);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {Header({ navigation })}
      {Body({ PasswordVisibilty, setPasswordVisibilty, navigation })}
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    marginTop: 20,
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  SignUp: {
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
