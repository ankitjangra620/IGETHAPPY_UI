import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Level4HappySizexl = ({
  level4HappySizexlLevel4Ha,
  level4HappySizexlPosition,
  level4HappySizexlWidth,
  level4HappySizexlHeight,
  level4HappySizexlTop,
  level4HappySizexlLeft,
}) => {
  const emotionIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", level4HappySizexlPosition),
      ...getStyleValue("width", level4HappySizexlWidth),
      ...getStyleValue("height", level4HappySizexlHeight),
      ...getStyleValue("top", level4HappySizexlTop),
      ...getStyleValue("left", level4HappySizexlLeft),
    };
  }, [
    level4HappySizexlPosition,
    level4HappySizexlWidth,
    level4HappySizexlHeight,
    level4HappySizexlTop,
    level4HappySizexlLeft,
  ]);

  return (
    <Image
      style={[styles.level4HappySizexl, emotionIconStyle]}
      resizeMode="cover"
      source={level4HappySizexlLevel4Ha}
    />
  );
};

const styles = StyleSheet.create({
  level4HappySizexl: {
    borderRadius: Border.br_2449xl,
    width: 48,
    height: 48,
  },
});

export default Level4HappySizexl;
