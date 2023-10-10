import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { DustCardContainer } from "../style/DustCardContainer";
import DustCard from "../DustCard";

export default function FavoritePage() {
  const bookmarks = useSelector(state => state.bookmarks);

  return (
    <DustCardContainer>
      {bookmarks.length > 0 ? (
        bookmarks.map((dust, idx) => {
          return <DustCard key={idx} dust={dust} />;
        })
      ) : (
        <p style={{ textAlign: "center", marginTop: "100px" }}>
          즐겨찾기가 없습니다.
        </p>
      )}
    </DustCardContainer>
  );
}
