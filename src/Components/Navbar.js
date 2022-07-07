import { logOut } from "../Components/History";
import { Navigation, StyledLink } from "../styled-components/Navbar.styled";
import { Cookies, useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies] = useCookies(["user"]);

  return (
    <Navigation>
      <ul>
        <li>
          <StyledLink to={"/Main"}>Главная</StyledLink>
        </li>
        <li>
          <StyledLink to={"/Account"}>Личный Кабинет</StyledLink>
        </li>
        <li>
          <StyledLink to={"/Weather"}>Погода</StyledLink>
        </li>
      </ul>
      <button
        onClick={() => {
          logOut();
          localStorage.removeItem("token");
        }}
      >
        Выйти
      </button>
    </Navigation>
  );
};
