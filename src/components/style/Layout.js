import styled from "styled-components";

export const Layout = styled.div`
  .header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    p {
      display: flex;
      align-items: center;
    }

    select {
      font-family: "NanumSquareNeo-Variable";
      font-size: 0.9rem;
      border: none;
    }
  }

  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: 640px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  margin: 100px auto;

  .tab {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 50px;
    font-size: 0.9rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .sub-tab {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
    }

    .tab__active {
      border-radius: 10px 10px 0 0;
      box-sizing: border-box;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      border: 1px solid #eee;
      background-color: #fff;
      height: 60px;
    }
  }

  @media (max-width: 420px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
  }

  @media (min-width: 420px) and (max-height: 660px) {
    height: 90vh;
    min-height: 420px;
  }
`;
