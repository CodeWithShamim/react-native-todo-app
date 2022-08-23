import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View style={tw`bg-red-400`}>
      <Text style={tw`font-bold`}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
