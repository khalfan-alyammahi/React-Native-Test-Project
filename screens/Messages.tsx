import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState, useCallback } from "react";
import MessageBox from "../components/MessageBox";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.Back}>Back</Text>
      <Text style={styles.HeaderTitle}>Messages</Text>
      <Text style={styles.Filter}>Filter</Text>
    </View>
  );
};

const Messages = () => {
  const [text, setText] = useState("");
  const [messagesArray, setMessagesList] = useState<
    { id: number; message: string }[]
  >([
    {
      id: 0,
      message: "Hello how are your doing",
    },
    {
      id: 1,
      message: "I'm fine how are you",
    },
    {
      id: 0,
      message: "we shou'ld hangout sometimes",
    },
    {
      id: 1,
      message: "yea sure, it's been a long time since we hangout together",
    },
  ]);

  const messagesList = () => {
    const [refreshing, setRefreshing] = useState(false);

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      sleep(2000).then(() => setRefreshing(false));
    }, []);

    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {messagesArray.map((data) => (
          <MessageBox WhoSend={data.id} MessageText={data.message} />
        ))}
      </ScrollView>
    );
  };
  const MessageInput = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          width: 370,
          height: 50,
          justifyContent: "space-between",
          backgroundColor: "#F6F6F6",
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "#E8E8E8",
          alignItems: "center",
          padding: 10,
          alignSelf: "center",
        }}
      >
        <TextInput
          placeholder="Message here..."
          placeholderTextColor={"#BDBDBD"}
          onChangeText={(text) => {
            setMessageText(text);
          }}
        />
        <MaterialCommunityIcons
          name="arrow-up-circle"
          size={30}
          color={"#5DB075"}
          onPress={() =>
            setMessagesList((prevList) => [
              ...prevList,
              { id: 0, message: messageText },
            ])
          }
        />
      </View>
    );
  };
  const [messageText, setMessageText] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {Header()}
      {messagesList()}
      {MessageInput()}
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  HeaderContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  Back: {
    fontSize: 16,
    color: "#5DB075",
  },
  Filter: {
    fontSize: 16,
    color: "#5DB075",
  },
  HeaderTitle: {
    fontSize: 30,
    fontWeight: "600",
  },
});
function setRefreshing(arg0: boolean): void {
  throw new Error("Function not implemented.");
}
