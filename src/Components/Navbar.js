import { logOut } from "../Components/History";
import { Navigation, StyledLink } from "../styled-components/Navbar.styled";

export const Navbar = () => {
  return (
    <Navigation>
      <ul>
        <li>Главная</li>
        <li>
          <StyledLink to={"/Account"}>Информация</StyledLink>
        </li>
        <li>Личный Кабинет</li>
        <li>
          <StyledLink to={"/Weather"}>Погода</StyledLink>
        </li>
      </ul>
      <button onClick={() => logOut()}>Выйти</button>
    </Navigation>
  );
};
