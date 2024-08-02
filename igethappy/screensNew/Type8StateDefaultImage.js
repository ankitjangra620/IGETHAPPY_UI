import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Type8StateDefaultImage = ({
  type8StateDefaultImageTyp,
  type8StateDefaultIconPosition,
  type8StateDefaultIconWidth,
  type8StateDefaultIconHeight,
  type8StateDefaultIconTop,
  type8StateDefaultIconLeft,
}) => {
  const avatarIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", type8StateDefaultIconPosition),
      ...getStyleValue("width", type8StateDefaultIconWidth),
      ...getStyleValue("height", type8StateDefaultIconHeight),
      ...getStyleValue("top", type8StateDefaultIconTop),
      ...getStyleValue("left", type8StateDefaultIconLeft),
    };
  }, [
    type8StateDefaultIconPosition,
    type8StateDefaultIconWidth,
    type8StateDefaultIconHeight,
    type8StateDefaultIconTop,
    type8StateDefaultIconLeft,
  ]);

  return (
    <Image
      style={[styles.type8StatedefaultIcon, avatarIconStyle]}
      resizeMode="cover"
      source={type8StateDefaultImageTyp}
    />
  );
};

const styles = StyleSheet.create({
  type8StatedefaultIcon: {
    borderRadius: Border.br_1215xl,
    width: 128,
    height: 128,
    overflow: "hidden",
  },
});

export default Type8StateDefaultImage;
