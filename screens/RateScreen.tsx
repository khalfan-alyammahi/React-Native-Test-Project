import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const RateScreen = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [id, setId] = useState<number[]>([-1]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rateContainer}>
        <View style={styles.starContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              setClicked(!clicked);
              setId([0]);
            }}
          >
            <MaterialCommunityIcons
              name="star"
              size={40}
              color={id[0] == 0 && clicked ? "#FFB84E" : "black"}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              setClicked(true);

              setId([0, 1]);
            }}
          >
            <MaterialCommunityIcons
              name="star"
              size={40}
              color={id[1] == 1 ? "#FFB84E" : "black"}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              setClicked(true);

              setId([0, 1, 2]);
            }}
          >
            <MaterialCommunityIcons
              name="star"
              size={40}
              color={id[2] == 2 ? "#FFB84E" : "black"}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              setClicked(true);

              setId([0, 1, 2, 3]);
            }}
          >
            <MaterialCommunityIcons
              name="star"
              size={40}
              color={id[3] == 3 ? "#FFB84E" : "black"}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              setClicked(true);

              setId([0, 1, 2, 3, 4]);
            }}
          >
            <MaterialCommunityIcons
              name="star"
              size={40}
              color={id[4] == 4 ? "#FFB84E" : "black"}
            />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            Rate our app
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "normal",
              color: "#666666",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum
            tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
            duis sit esse aliqua esse ex dolore esse. Consequat velit qui
            adipisicing sunt.
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              I love it!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#5DB075",
                textAlign: "center",
                marginTop: 16,
              }}
            >
              Don’t like the app? Let us know.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5DB075",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#5DB075",
    width: 311,
    height: 51,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  rateContainer: {
    width: 370,
    height: 427,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  starContainer: {
    marginTop: 32,
    flexDirection: "row",
  },
});
