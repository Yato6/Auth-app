import { useState } from "react";
import { useForm } from "react-hook-form";
import { onSubmit } from "../Components/API";
import {
  Wrapper,
  FormBox,
  Switch,
  Loading,
} from "../styled-components/Login.styled";

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
        {/* <p>{change ? "Dark Theme" : ""}</p>
        <span>{change ? "[beta]" : ""}</span>
        <Switch>
          <input
            onChange={() => {
              if (change) {
                setChange(false);
              } else {
                setChange(true);
              }
            }}
            type="checkbox"
          ></input>
        </Switch> */}
        {/* <h1>Login</h1> */}
        <h2>Авторизация</h2>
        <input
          {...register("username", { required: true })}
          type="text"
          placeholder="Имя пользователя"
          value={loginValue}
          onChange={(e) => {
            setLoginValue(e.target.value);
          }}
        />
        {errors.username && <i>Введите имя пользователя!</i>}
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Пароль"
          value={passwordValue}
          onChange={(e) => {
            setPasswordValue(e.target.value);
          }}
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
