/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import FooterDev from "./FooterDev";
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
          <FooterDev />
      </Container>
  );
};

export default App;
