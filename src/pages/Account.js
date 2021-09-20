import { logOut } from "../Components/History";
import { AccountInfo, AboutAccount } from "./Account.styled";

const Account = () => {
  return (
    <AccountInfo>
      <AboutAccount><p>Информация</p>
      <button onClick={() => logOut()}>Выйти</button>
      </AboutAccount>
    </AccountInfo>
  );
};

export default Account;
