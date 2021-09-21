import { Navbar } from "../Components/Navbar";
import { AccountInfo, AboutAccount } from "./Account.styled";

const Account = () => {
  return (
    <AccountInfo>
       <Navbar />
      <AboutAccount ><p>Информация</p>
      </AboutAccount>
    </AccountInfo>
  );
};

export default Account;
