import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 106fr auto;
`;

export const Content = styled.div`
  width: 100%;

  padding: 61px 124px;

  > h2 {
    font: normal 500 36px/47px "Roboto Slab", sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin: 24px 0 40px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 50vh;
  padding-right: 16px;
  overflow-y: auto;

  display: grid;
  grid-template-areas:
    "title rating"
    "textArea textArea "
    "tagsSection tagsSection"
    "footer footer";
  gap: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    border-radius: 9999px;
  }

  > .tagsSection {
    width: 100%;
    margin-top: -32px;

    grid-area: tagsSection;

    > .tags {
      margin-top: -32px;
      padding: 16px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 40px;

  grid-area: footer;

  > #exclude {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`;
