import React from "react";
import styled from "styled-components";
import Products from "./Products";
function BodyContent() {
  return (
    <div>
      <MainBody>
        <div className="body-center">
          <Slider>캐러셀</Slider>
          <Banner>배너</Banner>
          <Products />
        </div>
        {/* <ProductsBody>aa</ProductsBody> */}
      </MainBody>
    </div>
  );
}

export default BodyContent;

const MainBody = styled.div`
  display: flex;
  border: 2px solid black;
  align-items: center;
  flex-direction: column;

  .body-center {
    display: flex;
    width: 85%;

    flex-direction: column;
  }
`;
const Slider = styled.div`
  display: flex;
  border: 2px solid gold;
  height: 300px;
`;
const Banner = styled.div`
  display: flex;
  border: 2px solid red;
  height: 200px;
`;
// const ProductsBody = styled.div`
//   display: flex;
//   border: 1px solid blue;

//   height: 50vh;
// `;
