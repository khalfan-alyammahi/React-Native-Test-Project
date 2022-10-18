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
import MiniCard from "../components/MiniCard";
import { SignUpProps } from "./SignUpScreen";

const listingMiniCar = [
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    imageUrl:
      "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    details: "Item #1 Name Goes Here",
    price: "$19.99",
  },
];

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

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <ScrollView>
        {/* Hot Deals */}
        <Text style={styles.bodyText}>Hot Deals</Text>
        <FlatList
          horizontal
          data={listingMiniCar}
          renderItem={({ item }) => (
            <MiniCard
              ImageUrl={item.imageUrl}
              details={item.details}
              price={item.price}
            />
          )}
        />
        {/*  Tending  */}
        <Text style={styles.bodyText}>Trending</Text>
        <FlatList
          horizontal
          data={listingMiniCar}
          renderItem={({ item }) => (
            <MiniCard
              ImageUrl={item.imageUrl}
              details={item.details}
              price={item.price}
            />
          )}
        />
        {/* Deals - not sure how to create it because it's not shown in
      the UI design */}
        <Text style={styles.bodyText}>Deals</Text>
        <FlatList
          horizontal
          data={listingMiniCar}
          renderItem={({ item }) => (
            <MiniCard
              ImageUrl={item.imageUrl}
              details={item.details}
              price={item.price}
            />
          )}
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
