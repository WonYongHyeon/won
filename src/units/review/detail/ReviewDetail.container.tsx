import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./ReviewDetail.query";
import { NextRouter, useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./ReviewDetail.presenter";
import Swal from "sweetalert2";

export default function ReviewDetail() {
  const router: NextRouter = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query?.id,
    },
  });

  const onClickLikeImage = () => {
    likeBoard({
      variables: {
        boardId: router.query?.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query?.id,
          },
        },
      ],
    });
  };

  const onClickDislikeImage = () => {
    dislikeBoard({
      variables: {
        boardId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.id,
          },
        },
      ],
    });
  };

  const onClickDeleteButton = () => {
    deleteBoard({
      variables: { boardId: router.query.id },
    });
    Swal.fire({
      icon: "success",
      text: "게시글이 삭제되었습니다.",
    });
    router.push("/review");
  };

  const onClickListButton = () => {
    router.push("/review");
  };

  const onClickEditButton = () => {
    router.push(`/review/${router.query.id}/edit`);
  };

  console.log(data);

  return (
    <BoardDetailUI
      data={data}
      onClickDeleteButton={onClickDeleteButton}
      onClickListButton={onClickListButton}
      onClickEditButton={onClickEditButton}
      onClickLikeImage={onClickLikeImage}
      onClickDislikeImage={onClickDislikeImage}
    />
  );
}
