import React, { useEffect, useState } from "react";
import ProductListItem from "../ProductListItem";
import api from "../../api/api";
import * as S from "./ProductList.style";
import { Link } from "react-router-dom";

function ProductList({ productType }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.products
      .getProducts(productType)
      .then((products) => setProducts(products));
  }, [productType]);
  return (
    <S.Wrapper>
      <S.List>
        {products.map((product) => (
          <S.ListItem key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductListItem product={product} />
            </Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Wrapper>
  );
}

export default ProductList;
