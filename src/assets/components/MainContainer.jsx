import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import Header from './Header.jsx';
import Main from './Main.jsx';

function MainContainer() {
  return (
    <>
        <Container style={{ width: "800px"}}>
            <Stack direction="column">
              <Header/>
              <Main/>
            </Stack>
        </Container>
    </>
  )
};

export default MainContainer;
