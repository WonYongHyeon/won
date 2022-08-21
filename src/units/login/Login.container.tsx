import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./Login.types";
import { ChangeEvent } from "react";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { AccessToken } from "../../commons/store";

const schema = yup.object({
  email: yup.string().required("필수입력사항입니다.").email(),
  password: yup
    .string()
    .required("필수입력사항입니다.")
    .min(6, "6자 이상으로 작성해주세요"),
});

export default function Login() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(AccessToken);
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("email", event.target.value);
    trigger("email");
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("password", event.target.value);
    trigger("password");
  };

  const onClickLogin = async (data: IFormData) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      setAccessToken(result.data.loginUser.accessToken);
      router.push("/");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  const onClickCancel = () => {
    router.back();
  };

  return (
    <LoginUI
      onClickLogin={onClickLogin}
      onClickCancel={onClickCancel}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    ></LoginUI>
  );
}
