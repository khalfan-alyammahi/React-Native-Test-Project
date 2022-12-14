import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import Card from "../components/Card";
import ListMessage from "../components/ListMessage";
import Photos from "../components/Photos";

import { FlashList } from "@shopify/flash-list";
import DATA from "../DATA";

const PhotosList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Photos
          imageUrl={item.url}
          title={item.title}
          subtitle={item.subTitle}
          time={item.time}
        />
      )}
      // estimatedItemSize={76}
    />
  );
};

const PostsList = () => {
  return (
    <FlashList
      data={DATA}
      renderItem={({ item }) => (
        <ListMessage
          imageUrl={item.url}
          title={item.title}
          subtitle={item.subTitle}
          time={item.time}
        />
      )}
      estimatedItemSize={78}
      horizontal={false}
    />
  );
};

const Profile = () => {
  const [Whichbutton, setButton] = useState("Posts");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
      }}
    >
      <View style={styles.greenBackground}>
        <SafeAreaView style={styles.profileContainer}>
          <Text style={styles.settings}>Settings</Text>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.logout}>Logout</Text>
        </SafeAreaView>
        <Image
          source={{
            uri: "https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
          }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.profileDetailsContainer}>
        <Text style={styles.profileName}>Victoria Robertson</Text>
        <Text style={styles.amantrgeoshere}>A mantra goes here</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          position: "relative",
          top: 125,
          width: 366,
          height: 50,
          borderWidth: 1,
          borderColor: "#E5E5E5",
          borderRadius: 100,
          backgroundColor: "#F6F6F6",
        }}
      >
        <TouchableOpacity
          style={[
            styles.PostsContainer,
            { backgroundColor: Whichbutton == "Posts" ? "white" : "#F6F6F6" },
          ]}
          onPress={() => setButton("Posts")}
        >
          <Text
            style={[
              styles.Posts,
              { color: Whichbutton == "Posts" ? "#5DB075" : "#BDBDBD" },
            ]}
          >
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.PhotosContainer,
            { backgroundColor: Whichbutton == "Photos" ? "white" : "#F6F6F6" },
          ]}
          onPress={() => setButton("Photos")}
        >
          <Text
            style={[
              styles.Photos,
              { color: Whichbutton == "Photos" ? "#5DB075" : "#BDBDBD" },
            ]}
          >
            Photos
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: 160,
          width: 400,
          height: Platform.OS == "android" ? 270 : 400,
        }}
      >
        {Whichbutton == "Posts" ? PostsList() : PhotosList()}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  amantrgeoshere: {
    fontSize: 16,
    fontWeight: "600",
  },
  greenBackground: {
    width: "100%",
    height: 254,
    backgroundColor: "#5DB075",
    justifyContent: "center",
  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 5,
    borderColor: "white",
    alignSelf: "center",
    top: 30,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
    alignItems: "center",
  },
  profile: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
  },
  profileName: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 10,
  },
  profileDetailsContainer: {
    alignItems: "center",
    top: 70,
  },
  settings: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
  },
  logout: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
  },
  PostsContainer: {
    marginRight: 20,
    width: 171.5,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  PhotosContainer: {
    width: 171.5,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  Posts: {
    fontSize: 16,
    fontWeight: "600",
  },
  Photos: {
    fontSize: 16,
    fontWeight: "600",
  },
});
