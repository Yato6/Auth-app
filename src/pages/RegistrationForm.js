import { useForm } from "react-hook-form";
import { axiosInstance } from "../Components/Api";
import { RegistrationForm } from "../styled-components/Auth.styled";

const RegForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onRegistration(data) {
    try {
      if (data.createPassword === data.confirmPassword) {
        await axiosInstance
          .post("/users", {
            login: data.createUsername,
            password: data.confirmPassword,
          })
          .then(() => {
            setTimeout(() => {
              props.setRegistration("successfully");
            }, 1500);
            setTimeout(() => {
              props.setIsVisible(false);
              props.setRegistration("");
              reset();
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
    <RegistrationForm
      onSubmit={handleSubmit(onRegistration)}
      hidden={props.registration === "successfully"}
    >
      <h2>Sign up</h2>

      <input
        {...register("createUsername", {
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
      <input type="submit"></input>
    </RegistrationForm>
  );
};

export default RegForm;
