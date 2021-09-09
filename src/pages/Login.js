import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormBox, Switch, Wrapper } from "./Login.styled";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
          {...register("firstName")}
          required
          type="text"
          placeholder="Имя пользователя"
        ></input>
        <input
          {...register("Password")}
          required
          type="password"
          placeholder="Пароль"
        ></input>
        {errors.exampleRequired && console.log(" This field is required")}
        <input type="submit" value="Войти"></input>
      </FormBox>
    </Wrapper>
  );
};

export default Login;
