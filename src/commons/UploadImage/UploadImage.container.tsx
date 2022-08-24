import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import UploadsImageUI from "./UploadImage.presenter";
import { UPLOAD_FILE } from "./UploadImage.query";
import { IUploadsImageProps } from "./UploadImage.types";

export default function UploadImage(props: IUploadsImageProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      props.onChangeFiles(props.index, result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  }

  return (
    <UploadsImageUI
      fileRef={fileRef}
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
