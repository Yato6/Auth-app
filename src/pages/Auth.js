import { useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../Components/History";
import {
  Wrapper,
  FormBox,
  Loading,
  RegistrationForm,
} from "../styled-components/Auth.styled";
import axios from "axios";
import { useCookies } from "react-cookie";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cookies, setCookies] = useCookies(["user"]);
  const [loading, setLoading] = useState("uncompleted");
  const [state, setState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  async function onSubmit(data) {
    try {
      await axios.get("http://localhost:8000/users").then((res) => {
        res.data.forEach((i) => {
          if (data.username === i.login && data.password === i.password) {
            setLoading("completed");
            setCookies("user", data.username, { path: "/" });
            setTimeout(() => {
              logIn();
            }, 1700);
          } else {
            setState(true);
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function onRegistration(data) {
    try {
      if (data.createPassword === data.confirmPassword) {
        await axios.post("http://localhost:8000/users", {
          login: data.createUsername,
          password: data.confirmPassword,
        });
        setIsVisible(false);
      } else {
        alert("пароли не совпадают!");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Wrapper>
      <button
        hidden={loading === "completed"}
        onClick={() => {
          if (!isVisible) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }}
      >
        {isVisible ? "Авторизация" : "Регистрация"}
      </button>
      {isVisible ? (
        <>
          <RegistrationForm onSubmit={handleSubmit(onRegistration)}>
            <h2>Регистрация</h2>

            <input
              {...register("createUsername", { required: true })}
              type="text"
              placeholder="Имя пользователя"
            ></input>
            {errors.createUsername && <i>Обязательное поле</i>}
            <input
              {...register("createPassword", { required: true })}
              type="password"
              placeholder="Придумайте пароль"
            ></input>
            {errors.createPassword && <i>Обязательное поле</i>}
            <input
              {...register("confirmPassword", { required: true })}
              type="password"
              placeholder="Подтвердите пароль"
            ></input>
            {errors.confirmPassword && <i>Обязательное поле</i>}
            <input type="submit"></input>
          </RegistrationForm>
        </>
      ) : (
        <>
          <Loading hidden={loading === "uncompleted"}>
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
            {state === true ? (
              <h3>Неверное имя пользователя или пароль!</h3>
            ) : (
              <h2>Авторизация</h2>
            )}

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
            <input type="submit" value="Войти" />
          </FormBox>
        </>
      )}
    </Wrapper>
  );
};

export default Auth;
