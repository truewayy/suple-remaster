import useUserQuery from "hooks/useUserQuery";
import styled from "@emotion/styled";
import { useState } from "react";
import { subStr } from "utils/subStr";
import Modal from "./Modal";
import PostingDetail from "./PostingDetail";
import EditPosting from "./EditPosting";

const MyPosting = ({ row }) => {
  const { RemovePost } = useUserQuery();
  const { remove } = RemovePost(row.post_key);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const onDelete = () => {
    window.confirm("게시글을 삭제하시겠습니까?") && remove();
  };

  return (
    <div>
      <MyPostingWrapper>
        <PostingTitle onClick={() => setViewModal(true)}>
          {subStr(row.title, 11)}
        </PostingTitle>
        <PostingContent>{subStr(row.content, 30)}</PostingContent>
        <ButtonGroup>
          <EditButton onClick={() => setEditModal(true)}>수정</EditButton>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
        </ButtonGroup>
      </MyPostingWrapper>

      <Modal
        isOpen={viewModal}
        onRequestClose={() => setViewModal(false)}
        width={500}
      >
        <PostingDetail setModal={setViewModal} row={row} />
      </Modal>
      <Modal
        isOpen={editModal}
        onRequestClose={() => setEditModal(false)}
        id="edit"
        width={600}
      >
        <EditPosting setModal={setViewModal} row={row} />
      </Modal>
    </div>
  );
};

export default MyPosting;

const MyPostingWrapper = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  padding: 15px;
  border-radius: 15px;
  margin-top: 10px;
  &:hover {
    border-color: #00a0e9;
  }
`;

const PostingTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  width: 160px;
  &:hover {
    cursor: pointer;
  }
`;

const PostingContent = styled.div`
  font-size: 14px;
  font-weight: 200;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: auto;
`;

const EditButton = styled.div`
  font-size: 12px;
  cursor: pointer;
  color: #a3a3a3;
  &:hover {
    color: #222;
  }
`;

const DeleteButton = styled(EditButton)`
  padding-left: 10px;
`;
