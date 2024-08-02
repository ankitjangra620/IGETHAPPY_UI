import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Monotone13User = () => {
  return (
    <View style={styles.monotone13User}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.vector} />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    height: "58.39%",
    width: "58.39%",
    top: "54.19%",
    right: "20.65%",
    bottom: "-12.58%",
    left: "20.97%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  vector: {
    height: "39.68%",
    width: "39.68%",
    top: "17.74%",
    right: "30.32%",
    bottom: "42.58%",
    left: "30%",
    borderRadius: Border.br_1215xl,
    borderStyle: "solid",
    borderColor: Color.colorIndigo,
    borderWidth: 2,
    position: "absolute",
  },
  monotone13User: {
    top: 715,
    left: 326,
    width: 31,
    height: 31,
    position: "absolute",
  },
});

export default Monotone13User;
