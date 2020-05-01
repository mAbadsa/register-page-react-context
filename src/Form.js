import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";
const words = {
  arabic: {
    email: "البريد الإلكتروني",
    password: "كلمةالمرور",
    remember: "تذكرنى",
    signIn: "تسجيل الدخول",
  },
  english: {
    email: "Email",
    password: "Password",
    remember: "Remember Me",
    signIn: "Sign In",
  },
  spanish: {
    email: "correo electrónico",
    password: "Contraseña",
    remember: "Recuérdame",
    signIn: "Registrarse",
  },
};
class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, password, remember, signIn } = words[language];
    const arabicStyle = {
      direction: language === "arabic" ? "rtl" : "ltr",
      textAlign: language === "arabic" ? "right" : "left",
      right: 0,
    };
    return (
      <main className={classes.main} style={arabicStyle}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select
            labelId="language"
            id="language"
            value={language}
            className={classes.select}
            onChange={changeLanguage}
            fullWidth
          >
            <MenuItem value="arabic">العربية</MenuItem>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="spanish">Española</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                htmlFor="email"
                className={language === "arabic" && classes.labelArbic}
                style={{ right: language === "arabic" && 0 }}
              >
                {email}
              </InputLabel>
              <Input id="email" name="email" autoFocus></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel
                className={language === "arabic" && classes.labelArbic}
                htmlFor="password"
                style={{ right: language === "arabic" && 0 }}
              >
                {password}
              </InputLabel>
              <Input id="password" name="password"></Input>
            </FormControl>
            <FormControlLabel
              style={{ marginRight: language === "arabic" && -11 + "px" }}
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);
