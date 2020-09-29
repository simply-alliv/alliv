import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#315DE8",
    },
    background: {
      default: "white",
    },
  },
  typography: {
    fontFamily: ["Nunito"].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
    },
  },
})

export default theme
