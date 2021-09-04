import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
// import FormControl from './../CodeCarry/FormControl'
import Home from './../CodeCarry/Home';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <div><Home/></div>}/>
          <Route exact path="/home" component={() => <div><Home/></div>}/>
          <Route exact path="/about" component={() => <div>voice to text</div>}/>
          <Route exact path="/voicetotext" component={() => <div>voice to text</div>}/>
          <Route exact path="/blog" component={() => <div>blog</div>}/>
          <Route exact path="/contact" component={() => <div>contact</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;