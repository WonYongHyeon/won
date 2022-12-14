import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import MypageMarketUI from "./Market.presenter";
import {
  FETCH_USEDITEMS_COUNT_I_BOUGHT,
  FETCH_USEDITEMS_COUNT_I_PICKED,
  FETCH_USEDITEMS_COUNT_I_SOLD,
  FETCH_USEDITEMS_I_BOUGHT,
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USEDITEMS_I_SOLD,
} from "./Market.query";

declare const window: typeof globalThis & {
  Kakao: any;
};

export default function MypageMarket() {
  const [nowPage, setNowPage] = useState(1);
  const [gifticonImg, setGifticonImg] = useState("");
  const [gifticonId, setGifticonId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const { data: buyData, refetch: refetchBuyData } = useQuery(
    FETCH_USEDITEMS_I_BOUGHT,
    {
      variables: {
        search: "",
        page: 1,
      },
    }
  );
  const { data: buyCount } = useQuery(FETCH_USEDITEMS_COUNT_I_BOUGHT);

  const { data: soldData, refetch: refetchSoldData } = useQuery(
    FETCH_USEDITEMS_I_SOLD,
    {
      variables: {
        search: "",
        page: 1,
      },
    }
  );
  const { data: soldCount } = useQuery(FETCH_USEDITEMS_COUNT_I_SOLD);

  const { data: pickedData, refetch: refetchPickedData } = useQuery(
    FETCH_USEDITEMS_I_PICKED,
    {
      variables: {
        search: "",
        page: 1,
      },
    }
  );
  const { data: pickedCount } = useQuery(FETCH_USEDITEMS_COUNT_I_PICKED);

  const onChangeOnePage = () => {
    setNowPage(1);
  };

  const onClickBuyList = (id: string, imgUrl: string) => () => {
    setGifticonImg(imgUrl);
    setGifticonId(id);
    setModalVisible(true);
    setScrollY(window.scrollY);
  };

  const onClickModalCancel = () => {
    setGifticonImg("");
    setModalVisible(false);
  };

  const onClickShare = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init("e9296fe33b397dd0a03600f2bea162bf");
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "???????????? ?????????????????????.",
          imageUrl: `https://storage.googleapis.com/${gifticonImg}`,
          link: {
            mobileWebUrl: `https://juniorwon.shop/${gifticonId}`,
            webUrl: `https://juniorwon.shop/${gifticonId}`,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (modalVisible) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [modalVisible]);

  return (
    <MypageMarketUI
      scrollY={scrollY}
      buyData={buyData}
      buyCount={buyCount}
      soldData={soldData}
      soldCount={soldCount}
      pickedData={pickedData}
      pickedCount={pickedCount}
      nowPage={nowPage}
      setNowPage={setNowPage}
      refetchBuyData={refetchBuyData}
      refetchSoldData={refetchSoldData}
      refetchPickedData={refetchPickedData}
      onChangeOnePage={onChangeOnePage}
      onClickBuyList={onClickBuyList}
      gifticonImg={gifticonImg}
      modalVisible={modalVisible}
      onClickModalCancel={onClickModalCancel}
      onClickShare={onClickShare}
    ></MypageMarketUI>
  );
}
