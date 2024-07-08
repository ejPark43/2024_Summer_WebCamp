import React from "react";
import styled from "styled-components";
function ProductCard() {
  return (
    <CardContainer>
      <Card>
        <img
          src="https://img.freepik.com/free-photo/opened-backpack-with-school-supplies_23-2148224209.jpg"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 글자길어지면자르기 ...</div>
          <div className="product-info">
            <div className="product-info-price">40,000원</div>
            <span className="product-info-date">3일 전</span>
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
          src="https://d2opxh93rbxzdn.cloudfront.net/original/2X/4/40cfa8ca1f24ac29cfebcb1460b5cafb213b6105.png"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 글자길어지면자르기 ...</div>
          <div className="product-info">
            <div className="product-info-price">40,000원</div>
            <span className="product-info-date">3일 전</span>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://d2opxh93rbxzdn.cloudfront.net/original/2X/4/40cfa8ca1f24ac29cfebcb1460b5cafb213b6105.png"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 글자길어지면자르기 ...</div>
          <div className="product-info">
            <div className="product-info-price">40,000원</div>
            <span className="product-info-date">3일 전</span>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://d2opxh93rbxzdn.cloudfront.net/original/2X/4/40cfa8ca1f24ac29cfebcb1460b5cafb213b6105.png"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 글자길어지면자르기 ...</div>
          <div className="product-info">
            <div className="product-info-price">40,000원</div>
            <span className="product-info-date">3일 전</span>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://d2opxh93rbxzdn.cloudfront.net/original/2X/4/40cfa8ca1f24ac29cfebcb1460b5cafb213b6105.png"
          alt="example"
        ></img>
        <div>
          <div className="product-title"> 글자길어지면자르기 ...</div>
          <div className="product-info">
            <div className="product-info-price">40,000원</div>
            <span className="product-info-date">3일 전</span>
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
