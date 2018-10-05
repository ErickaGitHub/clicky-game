import React from "react";
import Form from "./components";

const App = () => <Form />;

export default App;

import React, { Component } from "react";
import styled from 'react-emotion'
import Gameboard from './components/Memoryboard'
import Header from './components/Header'

const Content = styled('div')({
  marginTop: 50,
})

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Content>
              <Memoryboard>

              </Memoryboard>
            </Content>
        </div>
    );
  }
}

export default App;