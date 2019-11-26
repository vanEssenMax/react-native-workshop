import React from 'react';
import NavFooter from "./components/NavFooter";
import {Container, Content, Header, Title, Body} from "native-base";

const App = () => {
  return (
      <Container>
          <Header>
              <Body>
                  <Title>Geweldige Applicatie</Title>
              </Body>
          </Header>
          <Content>
          </Content>
          <NavFooter />
      </Container>
  );
};

export default App;
