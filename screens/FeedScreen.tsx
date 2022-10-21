import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import ListMessage from "../components/ListMessage";
import DATA from "../DATA";
import { SignUpProps } from "./SignUpScreen";

const Header: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <View style={styles.headerConatiner}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: "600" }}>Feed</Text>
      <TouchableOpacity>
        <Text style={styles.text}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

function SearchBar() {
  return (
    <View style={styles.SearchBarConatiner}>
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        placeholderTextColor={"#BDBDBD"}
      />
    </View>
  );
}

function List() {
  return (
    <View style={styles.ListContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ListMessage
            title={item.title}
            subtitle={item.subTitle}
            time={item.time}
            imageUrl={item.url}
          />
        )}
        style={styles.flatList}
        contentContainerStyle={{
          alignItems: "center",
          margin: 10,
          marginLeft: 20,
        }}
      />
    </View>
  );
}

function square() {
  return <View style={styles.squareContainer}></View>;
}

const FeedScreen: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {Header({ navigation })}
      {SearchBar()}
      {List()}
      <ScrollView>{square()}</ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;

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
    marginTop: 10,
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
