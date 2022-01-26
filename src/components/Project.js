import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor, hoverColor } from "../utils";
import projectData from "../utils/taskData";
import Badge from "./Badge";

function Task({ seeAll }) {
  var size = projectData().size;
  if (seeAll) {
    size = 5;
  }
  return (
    <YourProject>
      {projectData()
        .slice(0, size)
        .map((proj) => {
          return (
            <Project>
              <ProjectDetails to={"/"}>
                <Avatar>
                  <img src={proj.img} alt="" />
                </Avatar>
                <Detail>
                  <Title>{proj.title}</Title>
                  <SubTitle>{proj.subtitle}</SubTitle>
                </Detail>
              </ProjectDetails>
              <Badge
                content={`${proj.status ? "Done" : "Painding"}`}
                done={proj.status}
                late={proj.late}
                painding={`${!proj.status && !proj.late ? true : false}`}
              />
            </Project>
          );
        })}
      {seeAll ? (
        <Link to="/tasks">
          <AllProject>See all tasks</AllProject>{" "}
        </Link>
      ) : (
        <></>
      )}
    </YourProject>
  );
}

const YourProject = styled.div`
  height: 100%;
  width: 98%;
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
    margin: auto;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  border-radius: 10px;
  &:hover {
    background-color: ${hoverColor};
  }
`;
const ProjectDetails = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
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

export default Task;
