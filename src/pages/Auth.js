import { useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../Components/History";
import { Wrapper, FormBox, Loading } from "../styled-components/Auth.styled";
import axios from "axios";
import { useCookies } from "react-cookie";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cookies, setCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState("uncompleted");
  const [state, setState] = useState(false);

  async function onSubmit(data) {
    try {
      await axios.get("./users.json").then((res) => {
        res.data.users.forEach((i) => {
          if (data.username === i.login && data.password === i.password) {
            setLoading("completed");
            console.log(data.username);
            setCookie("user", data.username, { path: "/" });
            setTimeout(() => {
              logIn();
            }, 1500);
          } else {
            setState(true);
          }
        });
      });
    } catch (e) {
      console.log("Ошибка: ");
    }
  }

  return (
    <Wrapper>
      <Loading>
        <p>Загрузка</p>
      </Loading>
      <FormBox
        change={state === true}
        onChange={(e) => {
          setState(e.target.value);
        }}
        hidden={loading === "completed"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Login</h1>
        <h2>Авторизация</h2>
        <input
          {...register("username", { required: true })}
          type="text"
          placeholder="Имя пользователя"
        />
        {errors.username && <i>Пожалуйста, введите имя пользователя</i>}
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Пароль"
        />
        {errors.password && <i>Пожалуйста, введите пароль</i>}
        <input type="submit" value="Войти"></input>
        <a href="/">регистрация</a>
      </FormBox>
    </Wrapper>
  );
};

export default Auth;
