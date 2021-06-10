import React, { useContext } from "react";

import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";
import {ContactContext} from "../store/provider";
import { ScatterPlot } from "@material-ui/icons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor:'gold',
    width:'80%',
    marginLeft:25,
    marginTop:25
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
    textTransform: "uppercase",
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  name: {
    fontSize: 20,
    fontFamily: 'Lato Italic',
    fontWeight:'ultrabold'
  },
  subtitle: {
    fontSize: 10,
    justifySelf: "flex-end",
    fontFamily: "Lato",
    color:'grey',
    fontWeight:'bold',
    paddingTop:4
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "green",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
});

function Header(props){
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>{props.details.name}</Text>
        <Text style={styles.subtitle}>{props.details.subtitle}</Text>
      </View>
    </View>
  );
}
export default Header;
