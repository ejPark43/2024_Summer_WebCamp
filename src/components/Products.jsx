import styled from "styled-components";
import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div>
      <ProductsArea>
        <ProductsHeader>
          <h2 className="product-suggest">오늘의 상품</h2>
          <div className="product-crud">
            <div>추가</div>
            <div>삭제</div>
            <div>수정</div>
          </div>
        </ProductsHeader>
        <ProductCards>
          <ProductCard />
        </ProductCards>
      </ProductsArea>
    </div>
  );
}

export default Products;

const ProductsArea = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid pink; */
  height: 500px; /// << 임시 크기. 나중에 변환...
`;
const ProductsHeader = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  height: 70px;
  align-items: center;
  .product-suggest {
    display: flex;
    /* font-size: 60px; */
    font-weight: 400;
    color: #333333;
  }
  .product-crud {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    margin-right: 10px;
    /* border: 2px solid red; */
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #333333;
      /* border-radius: 4px; */
      width: 50px;
      height: 30px;
      cursor: pointer;
      transition: 0.1s;
      &:hover {
        border-bottom: 1px solid #f5443b;
        color: #f5443b;
      }
    }
  }
`;

const ProductCards = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  width: 100%;
`;
