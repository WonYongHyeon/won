import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import SignupUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./Signup.types";
import Swal from "sweetalert2";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  name: yup.string().required(),
});

export default function Signup() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onClickSignup = async (data: IFormData) => {
    try {
      await createUser({
        variables: {
          ...data,
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

  return (
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSignup={onClickSignup}
    ></SignupUI>
  );
}
