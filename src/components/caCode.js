import React from "react";
import styled from "styled-components";
import { hoverEffect, darkThemeColor } from "../utils";

function CaCodeCard({ ca_code }) {
  return (
    <CaCodeDiv>
      <CardContent>
        <CaText>Your Code : -</CaText>
        <CaCodeText>
          <Code>{ca_code}</Code>
        </CaCodeText>
      </CardContent>
    </CaCodeDiv>
  );
}

const CaCodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 25vw;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: ${darkThemeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90vw;
    margin: auto;
    margin-top: 20px;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const CaText = styled.h3`
  font-size: 18px;
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Code = styled.h2`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;

const CaCodeText = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default CaCodeCard;
