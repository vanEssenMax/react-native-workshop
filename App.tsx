import React, {Fragment} from 'react';
import NavFooter from "./NavFooter";
import {Container, Content, Header, Title, Body} from "native-base";

const App = () => {
  return (
      <Container>
          <Header>
              <Body>
                  <Title>Geweldige Applicatie</Title>
              </Body>
          </Header>
          <Content padder>

          </Content>
          <NavFooter />
      </Container>
  );
};

export default App;
