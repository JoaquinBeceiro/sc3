import React from 'react';
import { Container } from '@material-ui/core';


const ContainerComponent = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default ContainerComponent;
