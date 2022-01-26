import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils";
function Badge({ content, painding = false, done = false, late = false }) {
  return (
    <Div painding={painding} done={done} late={late}>
      {content}
    </Div>
  );
}

const Div = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
  ${({ painding }) =>
    painding &&
    `
        background-color:#ffff0041;
        color:#ffc300;
    `}
  ${({ done }) =>
    done &&
    `
        background-color:#70e00041;
        color:#70e000;
    `}

${({ late }) =>
    late &&
    `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;

export default Badge;
