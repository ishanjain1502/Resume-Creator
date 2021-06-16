import React, { useContext } from "react";

import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ContactContext } from "../store/provider";
import { StylesProvider } from "@material-ui/styles";
import { findByLabelText } from "@testing-library/dom";
import { WrapText } from "@material-ui/icons";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "black",
    color: "hoeydew",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    width: "40%",
    margin:20
  },
  link: {
    color: "white",
    fontSize: 12,
  },
  text: {
    color: "white",
    fontSize: 12,
  },
});

function Address() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Link style={styles.link} href="#">
          gxyz@gmail.com
        </Link>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>xx00xx00xx</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>India</Text>
      </View>
      <View style={styles.box}>
        <Link style={styles.link} href="#">
          gulshanaggarwal333@gmail.com
        </Link>
      </View>
    </View>
  );
}
export default Address;
