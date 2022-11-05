import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import Card from "../components/Card";
import DummyListOne from "../DATA";
import { SignUpProps } from "./SignUpScreen";

interface SearchBarProps {
  setText: (active: string) => void;
}

const Header: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <View style={styles.headerConatiner}>
      <TouchableOpacity onPress={() => console.log("Go Back")}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: "600" }}>Content</Text>
      <TouchableOpacity>
        <Text style={styles.text}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const SearchBar = ({}) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.SearchBarConatiner}>
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        placeholderTextColor={"#BDBDBD"}
        onChangeText={(text) => setText(text)}
      />
      <ScrollView style={{ height: text != "" ? 300 : 0 }}>
        <View style={{ marginTop: 20 }}>
          {DummyListOne.filter((val) => {
            if (text == "") {
              return null;
            } else if (
              val.title.toLowerCase().includes(text.toLocaleLowerCase())
            ) {
              return val.title;
            }
          }).map((val) => {
            return (
              <View style={{ marginBottom: 5 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "normal",
                    margin: 13,
                    marginLeft: 20,
                  }}
                >
                  {val.title}
                </Text>
                <View
                  style={{
                    height: 1,
                    width: 353,
                    backgroundColor: "#E5E5E5",
                    alignSelf: "center",
                  }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const List = () => {
  return (
    <View style={styles.ListContainer}>
      <FlatList
        data={DummyListOne}
        renderItem={({ item }) => (
          <Card
            ImageUrl={item.url}
            title={item.title}
            subTitle={item.subTitle}
            time={item.time}
          />
        )}
      />
    </View>
  );
};

const Content: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {Header({ navigation })}
      {SearchBar({})}
      {List()}
    </SafeAreaView>
  );
};

export default Content;

const styles = StyleSheet.create({
  flatList: {
    marginRight: 20,
  },
  headerConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
    marginTop: Platform.OS == "android" ? 20 : 0,
  },
  text: {
    fontSize: 16,
    color: "#5DB075",
  },
  textInput: {
    backgroundColor: "#F6F6F6",
    width: 370,
    height: 50,
    alignSelf: "center",
    borderRadius: 30,
    padding: 10,
  },
  ListContainer: {
    marginTop: 0,
  },
  SearchBarConatiner: {
    marginTop: 50,
    marginBottom: 20,
  },
  squareContainer: {
    width: 370,
    height: 277.98,
    backgroundColor: "#F0F0F0",
    alignSelf: "center",
  },
});
