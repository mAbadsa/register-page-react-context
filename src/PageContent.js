import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function PageContent(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles = {
      backgroundColor: isDarkMode ? "#222" : "#f5f5f5",
      width: "100%",
      height: "100vw",
    };
    return <div style={styles}>{props.children}</div>;
}

export default PageContent;
