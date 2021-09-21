import { logOut } from "../Components/History";
import { Navigation } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <Navigation>
      <ul>
        <li>Главная</li>
        <li>Информация</li>
        <li>Личный Кабинет</li>
      </ul>
      <button onClick={() => logOut()}>Выйти</button>
    </Navigation>
  );
};
