import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import MypagePasswordUI from "./Password.presenter";
import { LOGIN_USER, RESET_USER_PASSWORD } from "./Password.queries";
import { IFormData, IMypagePasswordProps } from "./Password.types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  password: yup.string().required("필수입력사항입니다."),
  passwordEdit: yup
    .string()
    .required("필수입력사항입니다.")
    .min(6, "6자 이상으로 작성해주세요"),
  passwordConfirm: yup
    .string()
    .required()
    .oneOf([yup.ref("passwordEdit"), null], "비밀번호가 일치하지 않습니다."),
});

export default function MypagePassword(props: IMypagePasswordProps) {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [loginUser] = useMutation(LOGIN_USER);

  const { register, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickEditPassword = async (data: any) => {
    try {
      await loginUser({
        variables: {
          email: props.email,
          password: data.password,
        },
      });

      await resetUserPassword({
        variables: {
          password: data.passwordEdit,
        },
      });

      Swal.fire({
        icon: "success",
        text: "비밀번호 변경에 성공했습니다.",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: "현재 비밀번호가 틀립니다.",
      });
    }
  };

  return (
    <MypagePasswordUI
      onClickEditPassword={onClickEditPassword}
      register={register}
      handleSubmit={handleSubmit}
    ></MypagePasswordUI>
  );
}
