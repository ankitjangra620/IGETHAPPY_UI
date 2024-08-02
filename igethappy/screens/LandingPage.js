import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import ConfigurationIconLabelSe from "../components/ConfigurationIconLabelSe";
import Monotone13User from "../components/Monotone13User";
import Type8StateDefaultImage from "../components/Type8StateDefaultImage";
import Level4HappySizexl from "../components/Level4HappySizexl";
import { Border, Color, FontFamily } from "../GlobalStyles";

const LandingPage = () => {
  return (
    <View style={styles.landingPage}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <ConfigurationIconLabelSe
          configurationIconLabelSePosition="absolute"
          configurationIconLabelSeBackgroundColor="#efefef"
          configurationIconLabelSeWidth={381}
          configurationIconLabelSeTop={702}
          configurationIconLabelSeLeft={0}
          configurationIconLabelSeHeight={87}
          showStateLayer={false}
          icon={require("../assets/icon.png")}
          labelText="Home"
          icon1={require("../assets/icon1.png")}
          showIcon={false}
          labelText1="Explore"
          stateLayerVisible={false}
          icon2={require("../assets/icon2.png")}
          labelText2="Get Care"
          stateLayerVisible1={false}
          icon3={require("../assets/icon3.png")}
          labelText3="Logs"
          stateLayerVisible2={false}
          icon4={require("../assets/icon4.png")}
          labelText4="Profile"
          showStateLayer1={false}
          showIcon1
        />
        <Image
          style={styles.monotone41UserHealthPlus}
          resizeMode="cover"
          source={require("../assets/monotone41-user-health-plus.png")}
        />
        <Monotone13User />
        <Image
          style={[styles.monotone10HomeIcon, styles.monotone10HomeIconLayout]}
          resizeMode="cover"
          source={require("../assets/monotone10-home.png")}
        />
        <Image
          style={styles.monotone11SearchIcon}
          resizeMode="cover"
          source={require("../assets/monotone11-search.png")}
        />
        <Image
          style={[
            styles.monotone100ChartAscending,
            styles.monotone10HomeIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/monotone100-chart-ascending.png")}
        />
        <Text style={styles.july25HelloContainer}>
          <Text style={styles.blankLine}> </Text>
          <Text style={styles.july25}>{`July 25
`}</Text>
          <Text style={styles.blankLine}>Hello, Shreya!</Text>
        </Text>
        <Text style={[styles.howAreYou, styles.neutralLayout]}>
          How are you feeling today?
        </Text>
        <Text style={[styles.neutral, styles.neutralLayout]}>neutral</Text>
        <View style={styles.groupItem} />
        <Type8StateDefaultImage
          type8StateDefaultImageTyp={require("../assets/avatar.png")}
          type8StateDefaultIconPosition="absolute"
          type8StateDefaultIconWidth={71}
          type8StateDefaultIconHeight={71}
          type8StateDefaultIconTop={61}
          type8StateDefaultIconLeft={285}
        />
        <Image
          style={styles.igetuLogo1Icon}
          resizeMode="cover"
          source={require("../assets/igetu-logo-1.png")}
        />
        <Level4HappySizexl
          level4HappySizexlLevel4Ha={require("../assets/emotion.png")}
          level4HappySizexlPosition="absolute"
          level4HappySizexlWidth={50}
          level4HappySizexlHeight={51}
          level4HappySizexlTop={540}
          level4HappySizexlLeft={94}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-15.png")}
        />
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.rectangle1} />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.leftArrow1Icon}
          resizeMode="cover"
          source={require("../assets/leftarrow-1.png")}
        />
        <Text style={[styles.happyMemories, styles.rectanglePosition]}>
          Happy Memories
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    width: 345,
    left: 16,
    position: "absolute",
  },
  monotone10HomeIconLayout: {
    height: 31,
    width: 31,
    top: 715,
    position: "absolute",
  },
  neutralLayout: {
    lineHeight: 25,
    textAlign: "left",
    letterSpacing: 1,
  },
  rectanglePosition: {
    top: 182,
    position: "absolute",
  },
  groupChild: {
    top: 434,
    backgroundColor: "#ded7fa",
    height: 224,
    borderRadius: Border.br_13xl,
  },
  monotone41UserHealthPlus: {
    height: "3.93%",
    width: "8.14%",
    top: "90.62%",
    right: "45.93%",
    bottom: "5.45%",
    left: "45.93%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  monotone10HomeIcon: {
    left: 25,
  },
  monotone11SearchIcon: {
    left: 100,
    width: 30,
    height: 30,
    top: 715,
    position: "absolute",
  },
  monotone100ChartAscending: {
    left: 250,
  },
  blankLine: {
    color: Color.colorBlack,
  },
  july25: {
    color: "#a0a0a0",
  },
  july25HelloContainer: {
    top: 38,
    fontSize: 24,
    lineHeight: 16,
    width: 169,
    height: 97,
    textAlign: "left",
    letterSpacing: 1,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    left: 29,
    position: "absolute",
  },
  howAreYou: {
    top: 455,
    left: 53,
    fontSize: 20,
    width: 306,
    height: 100,
    color: Color.colorBlack,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 25,
    position: "absolute",
  },
  neutral: {
    top: 489,
    left: 167,
    fontSize: 13,
    width: 86,
    color: Color.colorBlack,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 25,
    position: "absolute",
    height: 30,
  },
  groupItem: {
    top: 512,
    left: 187,
    borderStyle: "solid",
    borderColor: Color.colorIndigo,
    borderRightWidth: 2,
    width: 2,
    height: 21,
    position: "absolute",
  },
  igetuLogo1Icon: {
    top: 0,
    left: 144,
    width: 91,
    height: 34,
    position: "absolute",
  },
  groupInner: {
    top: 534,
    height: 63,
  },
  rectangle: {
    left: 92,
    borderRadius: 24,
    backgroundColor: "#cdcdcd",
    width: 275,
    height: 190,
    opacity: 0.48,
  },
  rectangle1: {
    top: 172,
    left: 28,
    backgroundColor: "#d2d2d2",
    width: 327,
    height: 211,
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  image3Icon: {
    top: 170,
    left: 12,
    width: 330,
    height: 220,
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  leftArrow1Icon: {
    top: 272,
    left: 302,
    width: 23,
    height: 15,
    position: "absolute",
  },
  happyMemories: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.m3LabelMediumProminent,
    color: "#fff",
    width: 191,
    height: 25,
    lineHeight: 25,
    textAlign: "left",
    letterSpacing: 1,
    left: 29,
    top: 182,
  },
  rectangleParent: {
    top: 23,
    left: -2,
    width: 381,
    height: 789,
    position: "absolute",
  },
  landingPage: {
    borderRadius: 40,
    backgroundColor: "#eceae8",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LandingPage;
