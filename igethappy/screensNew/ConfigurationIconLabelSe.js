import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize, Padding, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ConfigurationIconLabelSe = ({
  configurationIconLabelSePosition,
  configurationIconLabelSeBackgroundColor,
  configurationIconLabelSeWidth,
  configurationIconLabelSeTop,
  configurationIconLabelSeLeft,
  configurationIconLabelSeHeight,
  showStateLayer,
  icon,
  labelText,
  icon1,
  showIcon,
  labelText1,
  stateLayerVisible,
  icon2,
  labelText2,
  stateLayerVisible1,
  icon3,
  labelText3,
  stateLayerVisible2,
  icon4,
  labelText4,
  showStateLayer1,
  showIcon1,
}) => {
  const navigationBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", configurationIconLabelSePosition),
      ...getStyleValue(
        "backgroundColor",
        configurationIconLabelSeBackgroundColor
      ),
      ...getStyleValue("width", configurationIconLabelSeWidth),
      ...getStyleValue("top", configurationIconLabelSeTop),
      ...getStyleValue("left", configurationIconLabelSeLeft),
      ...getStyleValue("height", configurationIconLabelSeHeight),
    };
  }, [
    configurationIconLabelSePosition,
    configurationIconLabelSeBackgroundColor,
    configurationIconLabelSeWidth,
    configurationIconLabelSeTop,
    configurationIconLabelSeLeft,
    configurationIconLabelSeHeight,
  ]);

  return (
    <View style={[styles.configurationiconLabelSe, navigationBarStyle]}>
      <View style={styles.navItemFlexBox}>
        <View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
          {showStateLayer && (
            <View style={styles.stateLayer}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={icon}
              />
            </View>
          )}
        </View>
        <Text style={[styles.labelText, styles.labelFlexBox]}>{labelText}</Text>
      </View>
      <View style={[styles.navItem2, styles.navItemFlexBox]}>
        <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
          <View style={styles.stateLayer}>
            {showIcon && (
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={icon1}
              />
            )}
          </View>
        </View>
        <Text style={[styles.labelText1, styles.labelFlexBox]}>
          {labelText1}
        </Text>
      </View>
      <View style={[styles.navItem2, styles.navItemFlexBox]}>
        <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
          {stateLayerVisible && (
            <View style={styles.stateLayer}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={icon2}
              />
            </View>
          )}
        </View>
        <Text style={[styles.labelText1, styles.labelFlexBox]}>
          {labelText2}
        </Text>
      </View>
      <View style={[styles.navItem2, styles.navItemFlexBox]}>
        <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
          {stateLayerVisible1 && (
            <View style={styles.stateLayer}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={icon3}
              />
            </View>
          )}
        </View>
        <Text style={[styles.labelText1, styles.labelFlexBox]}>
          {labelText3}
        </Text>
      </View>
      <View style={[styles.navItem2, styles.navItemFlexBox]}>
        <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
          {stateLayerVisible2 && (
            <View style={styles.stateLayer}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={icon4}
              />
            </View>
          )}
        </View>
        <Text style={[styles.labelText1, styles.labelFlexBox]}>
          {labelText4}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainerFlexBox: {
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  labelFlexBox: {
    marginTop: 4,
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    alignSelf: "stretch",
  },
  navItemFlexBox: {
    paddingBottom: Padding.p_base,
    paddingTop: Padding.p_xs,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    overflow: "hidden",
  },
  stateLayer: {
    width: 64,
    height: 32,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: Color.schemesSecondaryContainer,
    overflow: "hidden",
  },
  labelText: {
    fontWeight: "600",
    fontFamily: FontFamily.m3LabelMediumProminent,
    color: Color.schemesOnSurface,
  },
  iconContainer1: {
    width: 32,
    flexDirection: "row",
  },
  labelText1: {
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.schemesOnSurfaceVariant,
  },
  navItem2: {
    marginLeft: 8,
  },
  configurationiconLabelSe: {
    backgroundColor: Color.schemesSurfaceContainer,
    width: 412,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    flexDirection: "row",
  },
});

export default ConfigurationIconLabelSe;
