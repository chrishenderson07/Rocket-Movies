import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  cursor: pointer;

  svg {
    stroke: ${({ theme }) => theme.COLORS.PINK_300};
    fill: ${({ theme }) => theme.COLORS.PINK_300};

    margin: 6px 0 15px 0;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 24px;
  }
`;
