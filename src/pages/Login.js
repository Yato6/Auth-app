import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormBox, Switch, Wrapper } from "./Login.styled";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
     if (data.userName === "Vlad" && data.password === "123") {
      alert("Здравствуйте, Владислав!");
    } 
  };


  const [change, setChange] = useState(false);
  


  return (
    <Wrapper change={change}>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <p>{change ? "Dark Theme" : ""}</p>
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
          {...register("userName", {required: true})}
          type="text"
          placeholder="Имя пользователя"
        />
        {errors.userName && <i>Введите имя пользователя!</i>}

        <input {...register("password", {required: true})} type="password" placeholder="Пароль" />
        {errors.password && <i>Введите пароль!</i>}
        <input type="submit" value="Войти"></input>
      </FormBox>
    </Wrapper>
  );
};

export default Login;
