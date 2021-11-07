import { useState } from "react";
import { Wrapper, Loading, Completed } from "../styled-components/Auth.styled";
import RegForm from "./RegistrationForm";
import AuthForm from "./AuthForm";

const Auth = () => {
  const [loading, setLoading] = useState("uncompleted");
  const [state, setState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [registration, setRegistration] = useState("");

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
          <RegForm
            registration={registration}
            setRegistration={setRegistration}
            setIsVisible={setIsVisible}
          />
        </>
      ) : (
        <>
          <Loading hidden={loading === "uncompleted"}>
            <p>Загрузка</p>
          </Loading>
          <AuthForm
            state={state}
            setState={setState}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Auth;
