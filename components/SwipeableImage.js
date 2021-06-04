import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SwipeableImage({ drink }) {

  return (
    <View>
      <Image source={{ uri: drink.strDrinkThumb }} style={styles.photo} />
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          <Text style={[styles.textPrimary, styles.textShadow]}>
            {drink.strDrink}
          </Text>
        </View>

        <View style={styles.textRow}>
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {drink.strCategory}
          </Text>
        </View>

        <View style={styles.textRow}>
          <FontAwesome name="heart" size={20} color="white"></FontAwesome>
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {drink.strGlass}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: "80vh",
    resizeMode: "cover",
    borderRadius: 20,
  },
  textContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    // top: '100%'
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textPrimary: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "white",
    marginLeft: 10,
    fontSize: 25,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.80)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
