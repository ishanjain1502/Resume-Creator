import React, { useContext, useState } from "react";
import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Header from "./Header";
import Address from './Address'


const styles = StyleSheet.create({
  page: {
  },
  container: {
    flex: 1,
    flexDirection: "row",
    "@media max-width: 400": {
      flexDirection: "column",
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0,
    },
    "@media orientation: landscape": {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    textAlign: "center",
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: "gray",
    borderStyle: "dashed",
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
});

Font.register({
  family: "Open Sans",
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

// Create Document Component
const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <Header {...props}/>
    <Address/>
  </Page>
);
function Pdf(props) {
  let details;
  
  return (
    <Document
      author="Luke Skywalker"
      keywords="awesome, resume, start wars"
      subject="The resume of Luke Skywalker"
      title="Resume"
    >
      <Resume size="A4" details={props.details}
       />
    </Document>
  );
}
export default Pdf;