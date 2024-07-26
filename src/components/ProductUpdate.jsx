import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { uploadToS3 } from "../api/awss3";

const ProductUpdate = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    boardTitle: "",
    boardContents: "",
    boardPrice: 0,
    boardImg: "",
    boardCreatedTime: "",
  });

  const [nameCounter, setNameCounter] = useState(0);
  const [describeField, setDescribeField] = useState(0);
  const [newImgPath, setNewImgPath] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const navigate = useNavigate();
  const photoInput = useRef();

  const url = process.env.REACT_APP_BACK_URL;
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(url + `board/${id}`); // 백엔드에서 데이터를 가져오는 URL로 변경
        const data = response.data;
        setProduct(data);
        setNameCounter(data.boardTitle.length);
        setDescribeField(data.boardContents.length);
      } catch (error) {
        console.error("There was an error fetching the product!", error);
      }
    };

    fetchProduct();
  }, [id]);

  const writeName = (e) => {
    setNameCounter(e.target.value.length);
    setProduct((prevProduct) => ({
      ...prevProduct,
      boardTitle: e.target.value,
    }));
  };

  const writeDescription = (e) => {
    setDescribeField(e.target.value.length);
    setProduct((prevProduct) => ({
      ...prevProduct,
      boardContents: e.target.value,
    }));
  };

  const writePrice = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      boardPrice: e.target.value,
    }));
  };

  const handleImageClick = () => {
    photoInput.current.click();
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewImgPath(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const submitPost = async (event) => {
    event.preventDefault();

    let img = product.boardImg; // 기본값으로 기존에 가지고 있던 이미지를 사용
    if (selectedFile) {
      try {
        const result = await uploadToS3(selectedFile, true);
        console.log("t선택된 이미지파일: " + result.imageUrl);
        img = result.imageUrl;
        alert("파일 업로드 성공!");
      } catch (error) {
        console.error("파일 업로드 실패:", error);
        alert("파일 업로드 실패!");
      }
    }
    const updatedProduct = {
      id: id, // ensure that id is included
      boardTitle: product.boardTitle,
      boardContents: product.boardContents,
      boardPrice: product.boardPrice,
      boardImg: img, // imgPath: product.imgPath,
      boardCreatedTime: product.boardCreatedTime,
    };

    const backurl = process.env.REACT_APP_BACK_URL;
    try {
      // 백엔드측에서 @RequestBody를 통해 BoardDTO 객체를 받기 때문에 formdata대신에 JSON형식으로 데이터 보내야함!!!!
      await axios.post(backurl + `board/update`, updatedProduct, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate(`/`);
    } catch (error) {
      console.error("There was an error updating the post!", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitPost}>
        <MainBody>
          <div className="body-center">
            <h1 className="update-title"> 상품 내용 수정</h1>
            <UploadImgBox className="box">
              <PartTitle>
                상품이미지 <span>(0/12)</span>
              </PartTitle>
              <div className="img-box">
                <div className="img-upload" onClick={handleImageClick}>
                  <img
                    src={newImgPath || product.boardImg}
                    alt="product"
                    className="img-image"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={photoInput}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
                상품 이미지는 pc에서는 1:1, 모바일에서는 1:1.23 비율로 보여져요.
              </div>
            </UploadImgBox>
            <div className="box name-box">
              <PartTitle>상품명</PartTitle>
              <div className="name-box-input">
                <input
                  value={product.boardTitle}
                  placeholder="상품명을 입력해주세요."
                  onChange={writeName}
                  maxLength={40}
                />
                <span>{nameCounter}/40</span>
              </div>
            </div>
            <div className="box describe-box">
              <PartTitle>설명</PartTitle>
              <div className="describe-box-input">
                <textarea
                  value={product.boardContents}
                  placeholder={`브랜드, 모델명, 구매 시기, 하자 유무 등 상품 설명을 최대한 자세히 적어주세요.
전화번호, sns 계정 등 개인정보 입력은 제한될 수 있어요.
안전하고 건전한 거래 환경을 위해 과학기술정보통신부, 한국인터넷증흥원과 번개장터(주)가 함께합니다.
              `}
                  onChange={writeDescription}
                  maxLength={2000}
                ></textarea>
                <span>{describeField}/2000</span>
              </div>
            </div>
            <div className="box price-box">
              <PartTitle>가격</PartTitle>
              <div>
                <input
                  value={product.boardPrice} // 나중에 정상적인 값 넣기 !!
                  type="number"
                  placeholder="가격을 입력해주세요."
                  onChange={writePrice}
                  min="10"
                  max="99999999"
                />
              </div>
            </div>
            <div className="box date-box">
              <PartTitle>작성 날짜</PartTitle>
              <div>
                <input
                  value={new Date(product.boardCreatedTime).toLocaleString()}
                  type="text"
                  readOnly
                />
              </div>
            </div>
            <SubmitBtns>
              <button
                onClick={() => {
                  navigate(`/view/${id}`);
                }}
                className="cancel-btn"
              >
                취소하기
              </button>
              <button type="submit" className="submit-btn">
                수정하기
              </button>
            </SubmitBtns>
          </div>
        </MainBody>
      </form>
    </div>
  );
};

export default ProductUpdate;

const MainBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .body-center {
    display: flex;
    width: 72%;
    height: 100%;
    flex-direction: column;
    .update-title {
      display: flex;
      border-bottom: 2px solid #e8e8e8;
    }
    .box {
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e8e8e8;
    }
    .name-box {
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      .name-box-input {
        display: flex;
        justify-content: space-between;
        width: 100%;
        > input {
          padding: 10px;
          width: 70%;
          outline: none !important;
        }
        > span {
          width: 40px;
          align-items: center;
          padding: 3px;
          margin-left: 20px;
        }
      }
    }
    .describe-box {
      .describe-box-input {
        display: flex;
        flex-direction: column;
        width: 80%;
        padding-top: 10px;
        > textarea {
          padding: 10px;
          border: 1px solid gray;
          resize: none;
          outline: none;
          height: 160px;
          width: 100%;
        }
        > span {
          display: flex;
          justify-content: flex-end;
          width: 102%;
        }
      }
    }
    .price-box {
      > div {
        > input {
          outline: none;
          border: 1px solid gray;
          padding: 10px;
          width: 200px;
        }
      }
    }
    .date-box {
      > div {
        > input {
          outline: none;
          border: 1px solid gray;
          padding: 10px;
          width: 200px;
          background-color: #f4f4f4;
        }
      }
    }
    > button {
      align-self: flex-end;
      margin-top: 30px;
      height: 40px;
      outline: none;
      border: none;
      color: white;
      cursor: pointer;
      width: 300px;
      background-color: #f5443b;
      &:hover {
        background-color: #c82921;
      }
    }
  }
`;

const UploadImgBox = styled.div`
  display: flex;
  flex-direction: row;
  .img-box {
    color: gray;
    font-size: 13px;
    padding-top: 10px;
    .img-upload {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      width: 190px;
      height: 190px;
      margin-bottom: 20px;
      cursor: pointer;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const PartTitle = styled.div`
  display: flex;
  width: 160px;
  height: 40px;
  align-items: center;
  > span {
    margin: 2px 3px;
    font-size: 13px;
    color: gray;
  }
`;

const SubmitBtns = styled.div`
  display: flex;
  justify-content: end;
  .cancel-btn,
  .submit-btn {
    width: 300px;
    margin-left: 10px;
    align-self: flex-end;
    margin-top: 30px;
    height: 40px;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;

    /* border: 2px solid black; */
    background-color: #f5443b;
    &:hover {
      background-color: #c82921;
    }
  }
`;
