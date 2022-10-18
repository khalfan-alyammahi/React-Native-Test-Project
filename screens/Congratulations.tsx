import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
const Congratulations = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.congratulationContainer}>
        <Text style={styles.mainText}>Congratulations!</Text>
        <Text style={styles.subText}>
          Consequat velit qui adipisicing sunt do reprehenderit ad laborum
          tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
          duis sit esse aliqua esse ex dolore esse. Consequat velit qui
          adipisicing sunt.
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.SecondartActionsText}>Secondary Action</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Congratulations;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 338,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#5DB075",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#5DB075",
    alignItems: "center",
    justifyContent: "center",
  },
  congratulationContainer: {
    width: 370,
    height: 363,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  subText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#666666",
    textAlign: "center",
    marginBottom: 40,
  },
  SecondartActionsText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#5DB075",
    marginTop: 20,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
});
