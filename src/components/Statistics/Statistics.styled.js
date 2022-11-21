import styled from '@emotion/styled';

export const StatisticTittle = styled.h2`
  padding: ${p => p.theme.padding.l};
  font-size: ${p => p.theme.fontSizes.xml};
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.cardSecondTextColor};
  margin-bottom: ${p => p.theme.space[0]};
`;

export const StatisticList = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[0]};
  list-style: none;
  margin-bottom: ${p => p.theme.space[0]};
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64px;
  padding: ${p => p.theme.padding.m} 0;
  outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
  background-color: red;
  :nth-of-type(2) {
    background-color: blue;
  }
  :nth-of-type(3) {
    background-color: green;
  }
  :nth-of-type(4) {
    background-color: yellow;
  }
  :nth-of-type(5) {
    background-color: orange;
  }
`;

export const StatisticLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
`;

export const StatisticPercent = styled.span`
  font-size: ${p => p.theme.fontSizes.xml};
  color: ${p => p.theme.colors.white};
`;
