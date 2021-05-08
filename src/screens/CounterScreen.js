import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  let [count, setCount] = useState(0);

  return (
    <View>
      <Button onPress={() => setCount(count + 1)} title="Increase" />
      <Button onPress={() => setCount(count - 1)} title="Decrease" />
      <Text>Counter Screen {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
