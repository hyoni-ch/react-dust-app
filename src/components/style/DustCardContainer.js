import styled from "styled-components";

export const DustCardContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: inherit;

  // 스크롤바 전체
  &::-webkit-scrollbar {
    width: 7px;
  }

  // 스크롤바 막대
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 25px;
  }

  // 스크롤바 막대 외부 (뒷 배경)
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
