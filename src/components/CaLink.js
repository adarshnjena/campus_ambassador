import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { cardShadow, hoverEffect, themeColor } from "../utils";

function CaLink() {
  return (
    <YourProjects>
      <Project>
        <Detail>
          <Title>
            To transform a spectacle like Adhyaaya into reality, it takes will,
            determination and action.
          </Title>
          <SubTitle>Adhyaaya CA Dashboard</SubTitle>
        </Detail>
      </Project>
      <Link to="/tasks" className="no-underline">
        <AllProject>Start Now</AllProject>{" "}
      </Link>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 20vh;
  width: 100%;
  background-color: white;
  margin: 20px 0 0 20px;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 90vw;
    margin: 0;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProject = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default CaLink;
