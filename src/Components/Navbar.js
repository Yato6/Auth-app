import { logOut } from "../Components/History";
import { Navigation, StyledLink } from "../styled-components/Navbar.styled";

export const Navbar = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <StyledLink to={"/Account"}>Личный Кабинет</StyledLink>
        </li>
        <li>
          <StyledLink to={"/Weather"}>Погода</StyledLink>
        </li>
      </ul>
      <button onClick={() => logOut()}>Выйти</button>
    </Navigation>
  );
};
