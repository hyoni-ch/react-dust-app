import React from "react";
import Spinner from "../assets/images/Spin-1s-200px.gif";
import { Layout } from "./style/Layout";

export default function Loading() {
  return (
    <Layout style={{ alignItems: "center" }}>
      <p className="msg">Loading...</p>
      <img src={Spinner} alt="로딩" width="150px" />
    </Layout>
  );
}
