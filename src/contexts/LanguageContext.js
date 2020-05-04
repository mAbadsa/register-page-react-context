import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("arabic");
  const changeLanguage = (evt) => setLanguage(evt.target.value);
  return (
    <LanguageContext.Provider
      value={{language, changeLanguage: changeLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}
