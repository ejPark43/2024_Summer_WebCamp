import React from "react";
import styled from "styled-components";
function CreateBody() {
  return (
    <div>
      <MainBody>
        <div className="body-center">
          <UploadImgBox>
            <PartTitle>
              상품이미지 <span>(0/12)</span>
            </PartTitle>
            <div className="img-box-upload">상품업로드</div>
          </UploadImgBox>
          <PartTitle>상품명</PartTitle>
          <br />
          <PartTitle>카테고리</PartTitle>
          <br />
          <PartTitle>상품상태</PartTitle>
          <br />
          <PartTitle>설명</PartTitle>
          <br />
          <br />
          <PartTitle>가격</PartTitle>
        </div>
      </MainBody>
    </div>
  );
}

export default CreateBody;
const MainBody = styled.div`
  display: flex;
  /* border: 2px solid black; */
  align-items: center;
  flex-direction: column;
  /* margin-top: 185px; */
  .body-center {
    display: flex;
    width: 72%;
    height: 100%;
    border: 1px solid black;

    flex-direction: column;
  }
`;
const UploadImgBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 30px;
  border: 2px solid red;

  .img-box-upload {
  }
  /* height: 200px; */
`;
const PartTitle = styled.div`
  display: flex;
  width: 160px;
  border: 2px solid gold;
`;
