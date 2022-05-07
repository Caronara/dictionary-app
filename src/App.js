import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

let theme = createTheme({ palette: { primary: { main: "#000000" } } });

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <header className="header">Dictionary</header>
          <main>
            <Dictionary />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
