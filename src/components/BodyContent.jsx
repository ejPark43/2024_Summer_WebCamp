import React from "react";
import styled from "styled-components";
import Products from "./Products";
import BannerSlider from "./BannerSlider";

function BodyContent() {
  return (
    // <div>
    <MainBody>
      <div className="body-center">
        <BannerSlider />

        <Banner>
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/237e17f5cbe07edc8fff.png"
            alt="banner"
          />
        </Banner>
        <Products />
      </div>
    </MainBody>
    // </div>
  );
}

export default BodyContent;

const MainBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .body-center {
    display: flex;
    width: 72%;

    flex-direction: column;
  }
`;
const Banner = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 30px;
  > img {
    width: 100%;
  }
`;
