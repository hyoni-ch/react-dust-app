import styled from "styled-components";

export const DustCardBox = styled.div`
  height: 150px;
  padding: 10px 15px 10px 15px;
  margin: 15px 25px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: default;
  line-height: 0.5rem;

  .cityName {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .stationName {
      font-size: 1.3rem;
    }

    .favorite {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .result {
    text-align: center;
    line-height: 0.1rem;
    font-size: 0.9rem;
    .grade {
      font-size: 1.8rem;
      background-color: #fff;
      border-radius: 10px;
      padding: 30px;
      width: 50%;
      margin: 0 auto;
    }
  }
`;
