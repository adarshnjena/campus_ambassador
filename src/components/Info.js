import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "../utils";
function Info({ num_of_paid_registrations }) {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>
              {num_of_paid_registrations < 10 ? 0 : ""}
              {num_of_paid_registrations}
            </Digit>
            <InfoContainer>
              <Title>Paid Registrations</Title>
              <SubTitle>Step towards Incentives</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>00</Digit>
            <InfoContainer>
              <Title>Tasks Completed</Title>
              <SubTitle>Work Hard</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 80%;
  width: 25vw;
  margin-top: 10px;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90vw;
  }
`;

const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: black;
`;
const SubTitle = styled.h5`
  font-size: 13px;
  color: #333333;
  font-weight: normal;
`;

export default Info;
