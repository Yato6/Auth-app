import axios from "axios";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { logIn } from "../Components/History";
import { FormBox } from "../styled-components/Auth.styled";

const AuthForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [, setCookies] = useCookies(["user"]);

  async function onSubmit(data) {
    try {
      await axios.get("http://localhost:8000/users").then((res) => {
        res.data.forEach((i) => {
          if (data.username === i.login && data.password === i.password) {
            props.setLoading("completed");
            setCookies("user", data.username, { path: "/" });
            setTimeout(() => {
              logIn();
            }, 1700);
          } else {
            setTimeout(() => {
              props.setState(true);
            }, 500);
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <FormBox
      change={props.state === true}
      onChange={(e) => {
        props.setState(e.target.value);
      }}
      hidden={props.loading === "completed"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {props.state === true ? (
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
  );
};

export default AuthForm;
