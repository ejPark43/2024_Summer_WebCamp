import React from "react";
import styled from "styled-components";
function ProductCard() {
  return (
    <CardContainer>
      <Card>
        <img
          src="https://image.yes24.com/goods/122341966/XL"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 농담곰 인형</div>
          <div className="product-info">
            <div className="product-info-price">15,000원</div>
            <span className="product-info-date">20시간 전</span>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://www.cabfoods.co.za/wp-content/uploads/2022/01/cabfoods-red-balls.jpg"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 빨간색 사탕 100g</div>
          <div className="product-info">
            <div className="product-info-price">1,500원</div>
            <span className="product-info-date">2일 전</span>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://images.kolonmall.com/Prod_Img/CJ/2021/LM6/J3TEA21703GYM_LM6.jpg"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 후드티 L 사이즈 한번착용</div>
          <div className="product-info">
            <div className="product-info-price">39,000원</div>
            <span className="product-info-date">2일 전</span>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://cafe24.poxo.com/ec01/caugoal/HOvhRhvOk+Cp2KY4JuusApBEsWvYruGVAbdz52LHiENksA8W3TaoewJFskko+jVmcS1ZNIdKGwI+OqgEy0y13A==/_/web/product/big/202303/17ba32cd8ae577a90eb99c14c909bf94.jpg"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> MLB 볼캡 모자</div>
          <div className="product-info">
            <div className="product-info-price">50,000원</div>
            <span className="product-info-date">3일 전</span>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg"
          alt="example"
        ></img>
        <div>
          <div className="product-title">미개봉 샴푸 M</div>
          <div className="product-info">
            <div className="product-info-price">12,000원</div>
            <span className="product-info-date">5일 전</span>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 중고 카메라</div>
          <div className="product-info">
            <div className="product-info-price">150,000원</div>
            <span className="product-info-date">1주 전</span>
          </div>
        </div>
      </Card>
    </CardContainer>
  );
}

export default ProductCard;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  /* overflow: scroll; */
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  height: 270px;
  margin-bottom: 15px;
  width: 190px;
  cursor: pointer;
  > img {
    width: 190px;
    height: 190px;
  }
  .product-title {
    display: flex;
    /* border: 2px solid red; */
    height: 40px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }
  .product-info {
    display: flex;
    flex-direction: row;
    /* border: 2px solid green; */
    justify-content: space-between;
    height: 40px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    .product-info-price {
      font-weight: bold;
    }
    .product-info-date {
      color: gray;
    }
  }
`;
