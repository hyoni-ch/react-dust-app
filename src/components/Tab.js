import React, { useState } from "react";
import { BsStarFill, BsMapFill } from "react-icons/bs";

export default function Tab({ setTab }) {
  const [isActiveTab1, setIsActiveTab1] = useState(true); // tab1을 기본적으로 active로 설정

  const toggleTab1 = () => {
    setIsActiveTab1(true); // tab1을 활성화
    setTab(0); // setTab을 호출하여 선택한 탭을 설정
  };

  const toggleTab2 = () => {
    setIsActiveTab1(false); // tab2를 활성화하고 tab1을 비활성화
    setTab(1); // setTab을 호출하여 선택한 탭을 설정
  };

  return (
    <div className="tab">
      <div
        className={`sub-tab tab1 ${isActiveTab1 ? "tab__active" : ""}`}
        onClick={toggleTab1}
      >
        <BsMapFill size="20" />
        전체보기
      </div>
      <div
        className={`sub-tab tab2 ${isActiveTab1 ? "" : "tab__active"}`}
        onClick={toggleTab2}
      >
        <BsStarFill size="22" />
        즐겨찾기
      </div>
    </div>
  );
}
