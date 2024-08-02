import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const LogoImg = require('../assets/igetu.png');
const AvatarImg = require('../assets/avatar1.png');
const MemoImg = require('../assets/image3.png');
const FeelImg = require('../assets/feeling.png');

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.dateText}>July 25</Text>
          <Text style={styles.welcomeText}>Hello, Shreya!</Text>
        </View>
        <Image source={AvatarImg} style={styles.avatar} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={MemoImg} style={styles.image} />
        <Text style={styles.imageText}>Happy Memories</Text>
      </View>
      <View style={styles.feelingContainer}>
        <Text style={styles.feelingText}>How are you feeling today?</Text>
        <Image source={FeelImg} style={styles.feelingsImage} />
        <Text style={styles.feelingStatus}>neutral</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: 789,
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: 18,
    color: '#666',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  avatar: {
    width: 71,
    height: 71,
    position: 'absolute',
    left: 270.53,
    borderRadius: 20,
  },
  imageContainer: {
    marginVertical: 20,
  },
  logo: {
    width: 91,
    height: 34,
    left: 142,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 330,
    height: 220,
    borderRadius: 10,
  },
  imageText: {
    fontSize: 16,
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#fff',
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
  },
  feelingContainer: {
    width: 345,
    height: 224,
    Top: 457,
    Left: 14,
    Radius: 32,
    alignItems: 'center',
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#DED7FA',
  },
  feelingText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  feelingsImage: {
    width: 344.5,
    height: 63,
    top: 52,
  },
  feelingStatus: {
    fontWeight: 'bold',
    top: -70,
    marginTop: 10,
    fontSize: 16,
  },
});
