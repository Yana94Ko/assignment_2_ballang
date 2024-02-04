import React from "react";
import Page from "../../components/Page";
import ProductList from "../../components/ProductList";

function HomePage() {
  return (
    <Page width={"75%"}>
      <ProductList productType="default" />
    </Page>
  );
}

export default HomePage;
