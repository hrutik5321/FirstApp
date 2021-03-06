import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageScreen = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
