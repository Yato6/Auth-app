import { Navbar } from "../Components/Navbar";
import { AccountInfo, AboutAccount } from "../styled-components/Account.styled";

const Account = () => {
  return (
    <AccountInfo>
      <Navbar />
      <AboutAccount>
        <p>Информация</p>
      </AboutAccount>
    </AccountInfo>
  );
};

export default Account;
