
import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children}</h1>;


const Wrapper = styled('header')({
  width: '100%',
  height: 120,
  boxShadow: '0 2px 2px 2px rgba(0,0,0,.3)',
  textAlign: 'center',
  padding: '10px 10px 10px 10px',
  backgroundColor: 'salmon'
})


const Title = () => (
  <HeaderWrapper>
    <h1>Welcome!</h1>
  </HeaderWrapper>
)

export default Title