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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

export interface SignUpProps {
  navigation: NativeStackNavigationProp<RootStackParams, "SignUp", "Login">;
}

export interface ScreenProps {
  setPasswordVisibilty: (active: boolean) => void;
  PasswordVisibilty: boolean;
}

export interface emailValidation {
  text: string;
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
  const [Namevalidated, setNameValidated] = useState(true);
  const [EmailValidated, setEmailValidated] = useState(true);
  const [PasswordValidated, setPasswordValidated] = useState(true);

  const details = {
    name: Name,
    email: Email,
    password: Password,
  };
  const checkNameValidation = (text: string) => {
    if (text.trim().length >= 4) {
      setNameValidated(true);
    } else {
      setNameValidated(false);
    }
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
  return (
    <View style={styles.BodyContainer}>
      <View>
        <TextInput
          placeholder="Name"
          style={[
            styles.textInput,
            { marginBottom: Namevalidated == true ? 20 : 10 },
          ]}
          placeholderTextColor={"#BDBDBD"}
          onChangeText={(text) => {
            setName(text);
            checkNameValidation(text);
          }}
        />
        {Namevalidated == true ? null : (
          <Text style={styles.errorMessage}>
            User Name Must be more than 4 characters
          </Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Email"
          style={[
            styles.textInput,
            { marginBottom: EmailValidated == true ? 20 : 10 },
          ]}
          keyboardType={"email-address"}
          placeholderTextColor={"#BDBDBD"}
          onChangeText={(text) => {
            setEmail(text);
            checkEmailValidation(text);
          }}
        />
        {EmailValidated == true ? null : (
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
            marginBottom: 20,
          }}
        >
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#BDBDBD"}
            secureTextEntry={PasswordVisibilty}
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
        {PasswordValidated == true ? null : (
          <Text style={styles.errorMessage}>
            Passwrod must be more than 8 character
          </Text>
        )}
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
  },
  errorMessage: {
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
});
