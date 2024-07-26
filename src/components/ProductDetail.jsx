import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [post, setPost] = useState({
    boardTitle: "",
    boardContent: "",
    boardPrice: 0,
    boardImg: "",
    boardCreatedTime: "",
  });

  const { id } = useParams();
  const backurl = process.env.REACT_APP_BACK_URL;
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(backurl + `board/${id}`); // 백엔드에서 데이터를 가져오는 URL로 변경
        setPost(response.data); // 받아온 데이터를 다 넣어줌.
        const blob = URL.createObjectURL(response.data.boardImg); // boardImg내용이 blob://http....이런 형식으로 되어있어서 이미지 url로 변경함.

        setPost((prev) => ({
          ...prev, // 다른 데이터는 동일하게 놓고
          boardImg: blob, // 이미지만 다르게 바꿈.
        }));
        console.log(response.data);
      } catch (error) {
        console.error("There was an error fetching the post!", error);
      }
    };

    fetchPost();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const url = process.env.REACT_APP_BACK_URL;
  const handleDelete = async () => {
    try {
      await axios.delete(url + `board/delete/${post.id}`); // 해당 URL로 수정
      navigate("/");
    } catch (error) {
      console.error("There was an error deleting the post!", error);
    }
  };

  const handleEdit = () => {
    navigate(`/update/${post.id}`);
  };
  return (
    <PostWrapper>
      <PostHeader>
        <ButtonsWrapper>
          <EditButton onClick={handleEdit}>수정</EditButton>
          <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        </ButtonsWrapper>
      </PostHeader>
      <PostImage src={post.boardImg} alt="Post Image" />
      <PostTitle>{post.boardTitle}</PostTitle>
      <PostContent>{post.boardContents}</PostContent>
      <PostPrice>{`가격: ${post.boardPrice} 원`}</PostPrice>
      <PostCreatedTime>{`작성 날짜: ${new Date(
        post.boardCreatedTime
      ).toLocaleString()}`}</PostCreatedTime>
    </PostWrapper>
  );
};

export default ProductDetail;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const PostHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const EditButton = styled(Button)`
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #f44336;
  color: white;

  &:hover {
    background-color: #d32f2f;
  }
`;

const PostImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit: cover;
`;

const PostTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  white-space: pre-line;
`;

const PostPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostCreatedTime = styled.div`
  font-size: 14px;
  color: gray;
`;
