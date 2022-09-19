export interface IData {
  writer: string;
  title: string;
  contents: string;
  likeCount: number;
  dislikeCount: number;
  createdAt: Date;
  images: string[];
}

export interface IBoardDetailProps {
  data: {
    fetchBoard: IData;
  };
}

export interface IBoardDetailUIProps {
  data: {
    fetchBoard: IData;
  };
  onClickListButton: () => void;
  onClickEditButton: () => void;
  onClickDeleteButton: () => void;
  onClickLikeImage: () => void;
  onClickDislikeImage: () => void;
}
