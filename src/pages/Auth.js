import { useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../Components/History";
import {
  Wrapper,
  FormBox,
  Loading,
  RegistrationForm,
  Completed,
} from "../styled-components/Auth.styled";
import axios from "axios";
import { useCookies } from "react-cookie";

const Auth = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [cookies, setCookies] = useCookies(["user"]);
  const [loading, setLoading] = useState("uncompleted");
  const [state, setState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [registration, setRegistration] = useState("");

  async function onSubmit(data) {
    try {
      await axios.get("http://localhost:8000/users").then((res) => {
        res.data.forEach((i) => {
          if (data.username === i.login && data.password === i.password) {
            setLoading("completed");
            console.log(res);
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
        await axios
          .post("http://localhost:8000/users", {
            login: data.createUsername,
            password: data.confirmPassword,
          })
          .then(() => {
            setTimeout(() => {
              setRegistration("successfully");
            }, 1500);
            setTimeout(() => {
              setIsVisible(false);
              setRegistration("");
              setValue("createUsername", "");
              setValue("createPassword", "");
              setValue("confirmPassword", "");
            }, 3000);
          });
      } else {
        alert("Пароли не совпадают!");
      }
    } catch (err) {
      console.log(err);
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
          <Completed hidden={registration === ""}>
            <svg
              stroke="#58FA58"
              strokeWidth="6"
              strokeDashoffset="0"
              strokeDasharray="0"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <polyline fill="none" points="10,60 40,85 85,15 " />
            </svg>
            <p>Успешно!</p>
          </Completed>
          <RegistrationForm
            onSubmit={handleSubmit(onRegistration)}
            hidden={registration === "successfully"}
          >
            <h2>Регистрация</h2>

            <input
              {...register("createUsername", {
                required: true,
                minLength: { value: 3, message: "минимум 3 символа!" },
              })}
              required
              type="text"
              placeholder="Имя пользователя"
            ></input>
            {errors.createUsername?.message && (
              <i>{errors.createUsername?.message}</i>
            )}
            {/* {errors.createUsername && <i>Обязательное поле</i>} */}
            <input
              {...register("createPassword", {
                required: true,
                minLength: { value: 3, message: "минимум 3 символа!" },
              })}
              required
              type="password"
              placeholder="Придумайте пароль"
            ></input>
            {errors.createPassword?.message && (
              <i>{errors.createPassword?.message}</i>
            )}
            <input
              {...register("confirmPassword", {
                minLength: {
                  required: true,
                  value: 3,
                  message: "минимум 3 символа!",
                },
              })}
              required
              type="password"
              placeholder="Подтвердите пароль"
            ></input>
            {errors.confirmPassword?.message && (
              <i>{errors.confirmPassword?.message}</i>
            )}
            <input type="submit" onClick={() => {}}></input>
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
