import styled from 'styled-components';

//APP

export const StyledApp = styled.div`
  width: 99vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  border: 1px solid red;
`;

export const AppTitle = styled.h1`
  flex: 1 1 10%;
  margin: 0 auto;
`;

//SEARCHBAR

export const StyledSearchBar = styled.div`
  border: 1px solid green;
  width: 20%;
  flex: 1 1 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;

export const StyledP = styled.p`
  flex: 0 1 50%;
  font-size: 12px;
  text-align: center;
`;

export const StyledInput = styled.input`
  flex: 0 1 50%;
  margin-top: 1%;
  border-radius: 5px;
`;

//RESULTS

export const StyledResults = styled.div`
  flex: 0 1 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid blue;
`;

export const ResultsTitle = styled.h1`

`