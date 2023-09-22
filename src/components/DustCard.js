import React, { useState, useEffect } from "react";
import { DustCardBox } from "./style/DustCardBox";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../actions/bookmark";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function DustCard({ dust }) {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks);
  const [favorited, setFavorited] = useState(false);

  const onClickFavorite = () => {
    setFavorited(!favorited);
    if (!favorited) {
      dispatch(addBookmark(dust));
    } else {
      dispatch(removeBookmark(dust.stationName));
    }
  };

  const dustGrade = dust => {
    switch (dust.pm10Grade) {
      case "1":
        return { gradeColor: "#6799FF", gradeStr: "좋음" };
      case "2":
        return { gradeColor: "#16C79A", gradeStr: "보통" };
      case "3":
        return { gradeColor: "#FFE400", gradeStr: "한때나쁨" };
      case "4":
        return { gradeColor: "#FF7012", gradeStr: "나쁨" };
      case "5":
        return { gradeColor: "#FF0000", gradeStr: "매우나쁨" };
      default:
        return { gradeColor: "#ABABAB", gradeStr: "알수없음" };
    }
  };

  useEffect(() => {
    bookmarks.map(item => {
      if (
        item.sidoName === dust.sidoName &&
        item.stationName === dust.stationName
      ) {
        setFavorited(true);
      }
    });
  }, []);

  return (
    <>
      <DustCardBox style={{ backgroundColor: dustGrade(dust).gradeColor }}>
        <div className="cityName">
          <p>
            <span className="stationName">{dust.stationName}</span>{" "}
            {dust.sidoName}
          </p>
          <div onClick={onClickFavorite} className="favorite">
            {favorited ? <BsStarFill size="21" /> : <BsStar size="21" />}
          </div>
        </div>
        <div className="result">
          <div className="grade" style={{ color: dustGrade(dust).gradeColor }}>
            {dustGrade(dust).gradeStr}
          </div>
          <p>미세먼지 수치 : {dust.pm10Value}</p>
          <p>({dust.dataTime} 기준)</p>
        </div>
      </DustCardBox>
    </>
  );
}
