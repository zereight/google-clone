import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
`;

const HomeHeaderLeft = styled.div``;

const HomeHeaderRight = styled.div`
  display: flex;
  align-items: center;
  min-width: 13vw;
  justify-content: space-between;
  .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;

const HomeHeaderLink = styled(Link)`
  margin-right: 20px;
  text-decoration: inherit;
  color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

const HomeBody = styled.div`
  flex: 1;
  display: flex;
  margin-top: 10%;
  flex-direction: column;
`;

const LOGOIMG = styled.img`
  object-fit: contain;
  height: 200px;
`;

const HomeInputContainer = styled.div``;

const HomePresenter = () => {
  return (
    <Home>
      <HomeHeader>
        <HomeHeaderLeft>
          <HomeHeaderLink to="/about">About</HomeHeaderLink>
          <HomeHeaderLink to="/store">Store</HomeHeaderLink>
        </HomeHeaderLeft>
        <HomeHeaderRight>
          <HomeHeaderLink to="/gmail">Gmail</HomeHeaderLink>
          <HomeHeaderLink to="/images">Images</HomeHeaderLink>
          <AppIcon />
          <Avatar />
        </HomeHeaderRight>
      </HomeHeader>
      <HomeBody>
        <LOGOIMG src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F277027375874594F09" />
        <HomeInputContainer>
          <Search hideButton={false} />
        </HomeInputContainer>
      </HomeBody>
    </Home>
  );
};

export default HomePresenter;
