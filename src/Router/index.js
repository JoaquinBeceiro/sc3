import React from "react";
import { Switch, Route } from "react-router-dom";
import { MainScreen, AboutScreen } from "../Screens";
import { WrapperComponent } from "../Components";

export default function App() {
  return (
    <Switch>
      <Route path="/about">
        <WrapperComponent>
          <AboutScreen />
        </WrapperComponent>
      </Route>
      <Route path="/">
        <WrapperComponent>
          <MainScreen />
        </WrapperComponent>
      </Route>
    </Switch>
  );
}
