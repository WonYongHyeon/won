import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from "sweetalert2";
import ItemDetailUI from "./ItemDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./ItemDetail.queries";
import { IItemDetailProps } from "./ItemDetail.types";

export default function ItemDetail(props: IItemDetailProps) {
  const router = useRouter();

  const { data: loginUserId } = useQuery(FETCH_USER_LOGGED_IN);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: router.query.id,
        },
      });
      props.useditemRefetch();
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  const onClickMoveEditPage = () => {
    router.push(`/markets/${router.query.id}/edit`);
  };

  const onClickMoveItemListPage = () => {
    router.push("/markets");
  };

  const onClickDeleteItem = async () => {
    await deleteUseditem({
      variables: {
        useditemId: props.data.fetchUseditem._id,
      },
    });
    router.push("/markets");
  };

  const onClickBuyItem = async () => {
    if (!data?.fetchUserLoggedIn) {
      Swal.fire({
        icon: "error",
        text: "로그인 후에 이용가능합니다.",
      });
      return;
    }

    Swal.fire({
      icon: "info",
      text: `해당 물품의 가격은 ${props.data.fetchUseditem.price}원 입니다.
      정말 구입하시겠습니까?`,
      showCancelButton: true,
    }).then((response) => {
      if (response.isConfirmed) {
        createPointTransactionOfBuyingAndSelling({
          variables: {
            useritemId: props.data.fetchUseditem._id,
          },
        });
        Swal.fire({
          icon: "success",
          text: "결제가 완료되었습니다.",
        }).then(() => {
          router.push("/mypage");
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "결제가 취소되었습니다.",
        });
      }
    });
  };

  return (
    <ItemDetailUI
      loginUserId={loginUserId}
      data={props.data}
      onClickPick={onClickPick}
      onClickMoveEditPage={onClickMoveEditPage}
      onClickMoveItemListPage={onClickMoveItemListPage}
      onClickDeleteItem={onClickDeleteItem}
      onClickBuyItem={onClickBuyItem}
    ></ItemDetailUI>
  );
}
