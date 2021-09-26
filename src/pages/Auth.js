import { useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../Components/History";
import { Wrapper, FormBox, Loading } from "../styled-components/Login.styled";
import axios from "axios";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    try {
      axios.get("./users.json").then((res) => {
        if (
          (data.username === res.data[0].login &&
            data.password === res.data[0].password) ||
          (data.username === res.data[1].login &&
            data.password === res.data[1].password)
        ) {
          setLoading("completed");
          setTimeout(() => {
            logIn();
          }, 2300);
        } else if (
          data.username !== res.data.login &&
          data.password !== res.data.password
        ) {
          setLoading("Error");
        }
      });
    } catch (e) {
      console.log("Ошибка:");
    }
  }

  const [loading, setLoading] = useState("uncompleted");

  return (
    <Wrapper>
      <Loading change={loading === "completed"}>
        <p>Загрузка</p>
      </Loading>
      <FormBox
        change={loading === "Error"}
        onChange={(e) => {
          setLoading(e.target.value);
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
        {errors.username && <i>Введите имя пользователя!</i>}
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Пароль"
        />
        {errors.password && <i>Введите Пароль!</i>}
        <input type="submit" value="Войти"></input>
      </FormBox>
    </Wrapper>
  );
};

export default Auth;
