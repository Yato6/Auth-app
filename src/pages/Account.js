import { useCookies } from "react-cookie";
import { Navbar } from "../Components/Navbar";
import { AccountInfo, AboutAccount } from "../styled-components/Account.styled";

const Account = (user) => {
  const [cookie] = useCookies(["user"]);
  if (user) {
    return (
      <AccountInfo>
        <Navbar />
        <AboutAccount>
          <p>Account page</p>
          <h3>Добро пожаловать, {cookie.user}</h3>
        </AboutAccount>
      </AccountInfo>
    );
  }
};

export default Account;
