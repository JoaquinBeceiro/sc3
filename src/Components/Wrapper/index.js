import React from "react";
import { ContainerComponent, NavComponent } from "../index";

const WrapperComponent = props => {
  return (
    <>
      <NavComponent />
      <ContainerComponent>{props.children}</ContainerComponent>
    </>
  );
};

export default WrapperComponent;
