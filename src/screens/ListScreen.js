import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "Age 20" },
    { name: "Friend #2", age: "Age 20" },
    { name: "Friend #3", age: "Age 20" },
    { name: "Friend #4", age: "Age 20" },
    { name: "Friend #5", age: "Age 20" },
    { name: "Friend #6", age: "Age 20" },
    { name: "Friend #8", age: "Age 20" },
  ];
  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={friends}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 20,
  },
  viewStyle: {
    borderColor: "black",
  },
});

export default ListScreen;
