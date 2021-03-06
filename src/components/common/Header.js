import React, { useEffect } from "react";
import { UserInterface } from "./UserInterface";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 32px;
  height: 80px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = (props) => {
  const { onGetUserData, ...rest } = props;

  useEffect(() => {
    onGetUserData();
  }, [onGetUserData]);

  return (
    <HeaderWrapper>
      <span>SVG Logo</span>
      <UserInterface {...rest} />
    </HeaderWrapper>
  );
};
