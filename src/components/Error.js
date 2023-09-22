import React from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import { Layout } from "./style/Layout";

export default function Error() {
  return (
    <Layout style={{ alignItems: "center" }}>
      <p>Error!</p>
      <BiSolidErrorCircle size="100" />
    </Layout>
  );
}
