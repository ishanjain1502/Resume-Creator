import React, { useContext } from "react";
// import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "./components/Pdf";
import ContactContextProvider from "./store/provider";
import Input from "./components/Input";
import { ContactContext } from "./store/provider";

function Temp() {
  const [state, dispatch] = useContext(ContactContext);
  return (
    <div className="app-container">
      <Input />
      <PDFViewer width={600} height={550}>
        <Pdf details={state.details[0]}/>
      </PDFViewer>
    </div>
  );
}

function App() {
  return (
    <ContactContextProvider>
      <Temp />
    </ContactContextProvider>
  );
}

export default App;
