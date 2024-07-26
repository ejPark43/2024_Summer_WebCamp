import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function ProductCard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/board/")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);

        // if (response.data.boardImg.charAt(0) == "b") {
        //   const blob = URL.createObjectURL(response.data.boardImg); // boardImg내용이 blob://http....이런 형식으로 되어있어서 이미지 url로 변경함.

        //   setPosts((prev) => ({
        //     ...prev, // 다른 데이터는 동일하게 놓고
        //     boardImg: blob, // 이미지만 다르게 바꿈.
        //   }));
        // }
      })
      .catch((error) => {
        console.error("There was an error fetching the board list!", error);
      });
  }, []);

  // 날짜 string 변환 mm.dd 형식으로..
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}.${day}`;
  };

  return (
    <CardContainer>
      {posts &&
        posts.map((product) => (
          <Card
            key={product.id}
            onClick={() => {
              navigate(`/view/${product.id}`);
            }}
          >
            <img src={product.boardImg} alt="example"></img>
            <div>
              <div className="product-title">{product.boardTitle}</div>
              <div className="product-info">
                <div className="product-info-price">{product.boardPrice}원</div>
                <span className="product-info-date">
                  {formatDate(product.boardCreatedTime)}
                </span>
              </div>
            </div>
          </Card>
        ))}
    </CardContainer>
  );
}

export default ProductCard;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  /* overflow: scroll; */
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  height: 270px;
  margin-bottom: 15px;
  width: 190px;
  margin-right: 1vw;
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
