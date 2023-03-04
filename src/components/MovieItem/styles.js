import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: red;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px;
  border-radius: 10px;

  border: ${({ theme, isNew }) =>
    isNew ? `dashed 3px ${theme.COLORS.GRAY_300}` : "none"};

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  > input,
  button {
    background: none;
    border: none;
    outline: none;
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK_300};
    width: 24px;
    height: 24px;
  }
`;
