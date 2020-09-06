import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";

const SearchPage = styled.div``;
const SearchPageHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  z-index: 100;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 1px solid lightgrey;
`;

const SearchPageOptions = styled.div``;

const SearchPageHeaderBody = styled(Search)``;

const SearchPageResults = styled.div``;

// Search google api: https://developers.google.com/custom-search/v1/overview
// cse.google.com/cse/create/new

const GOOGLE_IMG = styled.img`
  object-fit: contain;
  height: 50px;
  margin-right: 50px;
`;

const SearchPagePresenter = () => {
  const [state, dispatch] = useStateValue();
  const term = state.term;

  const { data } = useGoogleSearch(term);

  return (
    <SearchPage>
      <SearchPageHeader>
        <Link to="/">
          <GOOGLE_IMG
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </Link>
        <SearchPageHeaderBody hideButton={true} />
        <SearchPageOptions />
      </SearchPageHeader>
      <SearchPageResults></SearchPageResults>
    </SearchPage>
  );
};

export default SearchPagePresenter;
