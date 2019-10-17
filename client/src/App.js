import React from "react";
import "./App.css";
import { styled } from "baseui";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, Header, Footer, ContentBody } from "./components";

const App = styled("div", () => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh"
}));

export default function() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <App className="App">
          <Header/>
          <ContentBody/>
          <Footer/>
        </App>
      </AuthProvider>
    </BrowserRouter>
  );
}