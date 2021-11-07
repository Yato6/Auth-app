import { useCookies } from "react-cookie";
import { logOut } from "../Components/History";
import { Navbar } from "../Components/Navbar";
import { AccountInfo, AboutAccount } from "../styled-components/Account.styled";

const Account = () => {
  const [cookies] = useCookies(["user"]);

  const user = (user) => {
    if (user) {
      return (
        <AccountInfo>
          <Navbar />
          <AboutAccount>
            <p>Account page</p>
            <h3>Добро пожаловать, {cookies.user}</h3>
          </AboutAccount>
        </AccountInfo>
      );
    } else {
      logOut();
    }
  };
  return <>{user(cookies.user)}</>;
};

export default Account;
