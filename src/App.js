import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Header from "./components/Header";
import Tab from "./components/Tab";
import AllPage from "./components/page/AllPage";
import FavoritePage from "./components/page/FavoritePage";
import { Layout } from "./components/style/Layout";

const config = require("./config/dev.js");
const apiServiceKey = config.apiServiceKey;

const cities = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];

function App() {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectCity, setSelectCity] = useState("서울");
  const [tab, setTab] = useState(0);

  const allCities = tab === 0;

  const fetchData = async city => {
    const getParameters = {
      serviceKey: apiServiceKey,
      returnType: "json",
      numOfRows: "100",
      pageNo: "1",
      sidoName: city,
      ver: "1.0",
    };

    try {
      setError(null);
      setApiData(null);
      setLoading(true);

      const response = await axios.get(
        `/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters["serviceKey"]}&returnType=${getParameters["returnType"]}&numOfRows=${getParameters["numOfRows"]}&pageNo=${getParameters["pageNo"]}&sidoName=${getParameters["sidoName"]}&ver=${getParameters["ver"]}`
      );

      setApiData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const cityChange = e => {
    const value = e.target.value;
    setSelectCity(value);
  };

  useEffect(() => {
    fetchData(selectCity);
  }, [selectCity]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!apiData) return null;

  return (
    <div className="App">
      <Layout>
        <Header
          cities={cities}
          cityChange={cityChange}
          selectCity={selectCity}
          tab={tab}
        />

        {allCities ? <AllPage apiData={apiData} /> : <FavoritePage />}

        <Tab tab={tab} setTab={setTab} />
      </Layout>
    </div>
  );
}

export default App;
