import React from "react";
import { DustCardContainer } from "../style/DustCardContainer";
import DustCard from "../DustCard";

export default function AllPage({ apiData }) {
  return (
    <DustCardContainer>
      {apiData.response.body.items.map((dust, idx) => {
        return <DustCard key={idx} dust={dust} />;
      })}
    </DustCardContainer>
  );
}
