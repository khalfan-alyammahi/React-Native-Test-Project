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
} from "react-native";
import MiniCard from "../components/MiniCard";
import { SignUpProps } from "./SignUpScreen";

import DummyListTwo from "../DATA2";

const Header: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <View style={styles.headerConatiner}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: "600" }}>Market</Text>
      <TouchableOpacity>
        <Text style={styles.text}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const SearchBar = () => {
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
          {DummyListTwo.filter((val) => {
            if (text == "") {
              return null;
            } else if (
              val.details.toLowerCase().includes(text.toLocaleLowerCase())
            ) {
              return val.details;
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
                  {val.details}
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

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <ScrollView>
        {/* Hot Deals */}
        <Text style={styles.bodyText}>Hot Deals</Text>
        <FlatList
          horizontal
          data={DummyListTwo}
          renderItem={({ item }) => (
            <MiniCard
              ImageUrl={item.imageUrl}
              details={item.details}
              price={item.price}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{ height: 1, width: "100%", backgroundColor: "#E5E5E5" }}
        ></View>
        {/*  Trending  */}
        <Text style={styles.bodyText}>Trending</Text>
        <FlatList
          horizontal
          data={DummyListTwo}
          renderItem={({ item }) => (
            <MiniCard
              ImageUrl={item.imageUrl}
              details={item.details}
              price={item.price}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{ height: 1, width: "100%", backgroundColor: "#E5E5E5" }}
        ></View>
        {/* Deals - not sure how to create it because it's not shown in
      the UI design */}
        <Text style={styles.bodyText}>Deals</Text>
        <FlatList
          horizontal
          data={DummyListTwo}
          renderItem={({ item }) => (
            <MiniCard
              ImageUrl={item.imageUrl}
              details={item.details}
              price={item.price}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const Market: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {Header({ navigation })}
      {SearchBar()}
      {Body()}
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({
  bodyContainer: { marginLeft: 16 },
  headerConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
  },
  bodyText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "normal",
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
  SearchBarConatiner: {
    marginTop: 50,
  },
});
