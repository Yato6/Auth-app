import { useState } from "react";
import { useForm } from "react-hook-form";
import { onSubmit } from "../Components/API";
import { Wrapper, FormBox, Loading } from "../styled-components/Login.styled";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [change, setChange] = useState(false);
  return (
    <Wrapper>
      <Loading change={change}>
        <p>Загрузка</p>
      </Loading>
      <FormBox change={change} onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <h2>Авторизация</h2>
        <input
          {...register("username", { required: true })}
          value={loginValue}
          onChange={(e) => {
            setLoginValue(e.target.value);
          }}
          type="text"
          placeholder="Имя пользователя"
        />
        {errors.username && <i>Введите имя пользователя!</i>}
        <input
          {...register("password", { required: true })}
          value={passwordValue}
          onChange={(e) => {
            setPasswordValue(e.target.value);
          }}
          type="password"
          placeholder="Пароль"
        />
        {errors.password && <i>Введите Пароль!</i>}
        <input
          onClick={() => {
            if (loginValue && passwordValue) {
              setChange(true);
            }
          }}
          type="submit"
          value="Войти"
        ></input>
      </FormBox>
    </Wrapper>
  );
};

export default Auth;
