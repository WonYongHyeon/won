import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import SignupUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./Signup.types";
import Swal from "sweetalert2";
import { ChangeEvent } from "react";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  name: yup.string().required(),
});

export default function Signup() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, setValue, trigger } = useForm<IFormData>({
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
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("name", event.target.value);
    trigger("name");
  };

  const onClickSignup = async (data: IFormData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      Swal.fire({
        icon: "success",
        text: "회원가입에 성공했습니다.",
      }).then(() => {
        router.push("/login");
      });
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
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSignup={onClickSignup}
      onClickCancel={onClickCancel}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
    ></SignupUI>
  );
}
