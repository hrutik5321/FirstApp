import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go To Components"
      />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go To List"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go To Image"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go To Counter Page"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go To ColoPage"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
