import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { themeColor, hoverEffect } from "../utils";

function Ranks({ rank }) {
  return (
    <RankCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <RankText>Rank</RankText>
        <Rank>{rank}</Rank>
        <RankIncrease>out of 300 CAs</RankIncrease>
      </CardContent>
    </RankCard>
  );
}

const RankCard = styled.div`
  height: 80%;
  width: 25vw;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: ${themeColor};
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

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const RankText = styled.h3`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Rank = styled.h2`
  text-align: center;
  font-weight: 950;
  font-size: 25px;
`;

const RankIncrease = styled.h5`
  font-size: 15px;
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default Ranks;
