import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
const Search = styled.form``;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 30px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 75vw;
  margin: 0 auto;
  max-width: 560px;
`;
const SearchInputIcon = styled(SearchIcon)`
  color: gray;
`;
const SearchInputArea = styled.input`
  flex: 1;
  padding: 10px 20px;
  border: none;
  font-size: medium;
  &:focus {
    outline-width: 20px;
  }
`;
const SearchInputMic = styled(MicIcon)``;

const SearchButtons = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  width: 100%;
`;

const SearchButton = styled(Button)`
  margin: 5px !important;
  padding: 7px 15px;
  border: 1px solid white;
  background-color: #f8f8f8 !important;
  text-transform: inherit;
  color: #5f6368;
`;

const SearchHiddenButtons = styled.div`
  display: none !important;
`;

const SearchPresenter = ({ hideButton = false }) => {
  const [state, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };
  return (
    <Search>
      <SearchInputContainer>
        <SearchInputIcon />
        <SearchInputArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchInputMic />
      </SearchInputContainer>
      {!hideButton ? (
        <SearchButtons>
          <SearchButton type="submit" onClick={search} variant="outlined">
            Google Search
          </SearchButton>
          <SearchButton variant="outlined">I'm Feeling Lucky</SearchButton>
        </SearchButtons>
      ) : (
        <SearchHiddenButtons>
          <SearchButton type="submit" onClick={search} variant="outlined">
            Google Search
          </SearchButton>
          <SearchButton variant="outlined">I'm Feeling Lucky</SearchButton>
        </SearchHiddenButtons>
      )}
    </Search>
  );
};

export default SearchPresenter;
