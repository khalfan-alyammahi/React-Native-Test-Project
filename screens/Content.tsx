import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import { SignUpProps } from "./SignUpScreen";

const listing = [
  {
    url: "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    title: "Header",
    subTitle:
      "Hell want to use your yacht, and I dont want this thing smelling like fish",
    time: "8m ago ",
  },
  {
    url: "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    title: "Header",
    subTitle:
      "Hell want to use your yacht, and I dont want this thing smelling like fish",
    time: "8m ago ",
  },
  {
    url: "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    title: "Header",
    subTitle:
      "Hell want to use your yacht, and I dont want this thing smelling like fish",
    time: "8m ago ",
  },
  {
    url: "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    title: "Header",
    subTitle:
      "Hell want to use your yacht, and I dont want this thing smelling like fish",
    time: "8m ago ",
  },
];

const Header: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <View style={styles.headerConatiner}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: "600" }}>Content</Text>
      <TouchableOpacity>
        <Text style={styles.text}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const SearchBar = () => {
  return (
    <View style={styles.SearchBarConatiner}>
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        placeholderTextColor={"#BDBDBD"}
      />
    </View>
  );
};

const List = () => {
  return (
    <View style={styles.ListContainer}>
      <FlatList
        data={listing}
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
      {SearchBar()}
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
  },
  squareContainer: {
    width: 370,
    height: 277.98,
    backgroundColor: "#F0F0F0",
    alignSelf: "center",
  },
});
