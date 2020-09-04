import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Home__Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
`;

const Home__Header__Left = styled.div``;

const Home__Header__Right = styled.div`
  display: flex;
  align-items: center;
  min-width: 13vw;
  justify-content: space-between;
  .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;

const Home__Header_Link = styled(Link)`
  margin-right: 20px;
  text-decoration: inherit;
  color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

const Home__Body = styled.div`
  flex: 1;
  display: flex;
  margin-top: 10%;
  flex-direction: column;
`;

const LOGO_IMG = styled.img`
  object-fit: contain;
  height: 200px;
`;

const Home__InputContainer = styled.div``;

const HomePresenter = () => {
  return (
    <Home>
      <Home__Header>
        <Home__Header__Left>
          <Home__Header_Link to="/about">About</Home__Header_Link>
          <Home__Header_Link to="/store">Store</Home__Header_Link>
        </Home__Header__Left>
        <Home__Header__Right>
          <Home__Header_Link to="/gmail">Gmail</Home__Header_Link>
          <Home__Header_Link to="/images">Images</Home__Header_Link>
          <AppIcon />
          <Avatar />
        </Home__Header__Right>
      </Home__Header>
      <Home__Body>
        <LOGO_IMG src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
        <Home__InputContainer></Home__InputContainer>
      </Home__Body>
    </Home>
  );
};

export default HomePresenter;
