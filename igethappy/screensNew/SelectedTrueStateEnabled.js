import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SelectedTrueStateEnabled = ({
  labelText = "Label",
  selectedTrueStateEnabledPosition,
  selectedTrueStateEnabledMarginLeft,
  showStateLayer,
  icon,
  showIcon,
}) => {
  const buildingBlocksNavItemStyle = useMemo(() => {
    return {
      ...getStyleValue("position", selectedTrueStateEnabledPosition),
      ...getStyleValue("marginLeft", selectedTrueStateEnabledMarginLeft),
    };
  }, [selectedTrueStateEnabledPosition, selectedTrueStateEnabledMarginLeft]);

  return (
    <View
      style={[
        styles.selectedtrueStateenabled,
        styles.stateLayerFlexBox,
        buildingBlocksNavItemStyle,
      ]}
    >
      <View style={[styles.iconContainer, styles.stateLayerFlexBox]}>
        {showStateLayer && (
          <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
            {showIcon && (
              <Image style={styles.icon} resizeMode="cover" source={icon} />
            )}
          </View>
        )}
      </View>
      <Text style={styles.labelText}>{labelText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stateLayerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    width: 64,
    height: 32,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_9xs,
  },
  iconContainer: {
    borderRadius: Border.br_base,
    backgroundColor: Color.schemesSecondaryContainer,
    overflow: "hidden",
  },
  labelText: {
    alignSelf: "stretch",
    fontSize: FontSize.m3LabelMedium_size,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.m3LabelMediumProminent,
    color: Color.schemesOnSurface,
    textAlign: "center",
    marginTop: 4,
  },
  selectedtrueStateenabled: {
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_base,
    flex: 1,
  },
});

export default SelectedTrueStateEnabled;
