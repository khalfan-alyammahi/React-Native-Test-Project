import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import { loadAndroidRawResource } from "react-native-svg/lib/typescript/LocalSvg";
import ListMessage from "../components/ListMessage";
import DummyListOne from "../DATA";
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
  const [text, setText] = useState("");
  return (
    <View style={styles.SearchBarConatiner}>
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        placeholderTextColor={"#BDBDBD"}
        onChangeText={(text) => setText(text)}
      />
      <ScrollView
        style={{
          height: text != "" ? 300 : 0,
        }}
      >
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
}

function List() {
  return (
    <View style={styles.ListContainer}>
      <FlatList
        data={DummyListOne}
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
        showsVerticalScrollIndicator={false}
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
      <View
        style={{
          height: 356,
          marginBottom: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {List()}
      </View>

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
