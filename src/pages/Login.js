import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../Components/History";
import { Wrapper, FormBox, Switch } from "../styled-components/Login.styled";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.get("./users.json").then((res) => {
      if (
        (data.username === res.data[0].login &&
          data.password === res.data[0].password) ||
        (data.username === res.data[1].login &&
          data.password === res.data[1].password)
      ) {
        logIn();
      } else {
        alert("Такого пользователя, не существует");
      }
    });
  };

  const [change, setChange] = useState(false);

  return (
    <Wrapper change={change}>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <p>{change ? "Dark Theme" : ""}</p>
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
        </Switch>
        <h1>Login</h1>
        <h2>Авторизация</h2>
        <input
          {...register("username", { required: true }, { RegExp: /@/ })}
          type="text"
          placeholder="Имя пользователя"
        />
        {errors.username && <i>Введите имя пользователя!</i>}
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Пароль"
        />
        {errors.password && <i>Введите пароль!</i>}
        <input type="submit" value="Войти"></input>
      </FormBox>
    </Wrapper>
  );
};

export default Login;
