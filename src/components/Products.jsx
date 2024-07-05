import styled from "styled-components";
import React from "react";

function Products() {
  return (
    <div>
      <ProductsArea>
        <ProductsHeader>
          오늘의 상품
          <div className="product-crud">
            <button>추가</button>
            <button>삭제</button>
            <button>수정</button>
          </div>
        </ProductsHeader>
        <ProductCards>AAAAAA</ProductCards>
      </ProductsArea>
    </div>
  );
}

export default Products;

const ProductsArea = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid pink;
  height: 500px; /// << 임시 크기. 나중에 변환...
`;
const ProductsHeader = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
`;

const ProductCards = styled.div`
  display: flex;
  border: 2px solid blue;
  width: 100%;
`;
