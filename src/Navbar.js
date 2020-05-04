import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

const content = {
  arabic: {
    search: "بحث",
    title: "عنوان التطبيق",
    flag: "🇵🇸",
  },
  english: {
    search: "Search",
    title: "App title",
    flag: "🇬🇧",
  },
  spanish: {
    search: "Buscar",
    title: "Título de la aplicación",
    flag: "🇪🇸",
  },
};

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(languageContext);
  const { classes } = props;
  const { search, title, flag } = content[language];
  const arabicStyle = {
    direction: language === "arabic" ? "rtl" : "ltr",
    textAlign: language === "arabic" ? "right" : "left",
    right: 0,
  };
  return (
    <div className={classes.root} style={arabicStyle}>
      <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span role="img" aria-label="flage">
              {flag}
            </span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            {title} {language === "arabic" ? "العربية" : language}
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={search + "..."}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={{ paddingRight: language === "arabic" && 23 + "px" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(styles)(Navbar);
