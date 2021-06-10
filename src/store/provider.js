import React, { useReducer, createContext } from "react";

export const ContactContext = createContext();

let initialState = {
  details:[
    {
      name:"XYZ",
      subtitle:"Full-Stack developer working with Javscript and it's frameworks",
      website:"example.com"
    }
  ],
};

const reducer = (state,action) => {
  switch(action.type){
    case "submit":
      return {
        details: [action.payload],
      };
    default:
      throw new Error();
  }
};

function ContactContextProvider(props){
  const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <ContactContext.Provider value={[state, dispatch]}>
        {props.children}
      </ContactContext.Provider>
    );
  };
export default ContactContextProvider