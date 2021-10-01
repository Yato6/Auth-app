import { useCookies } from "react-cookie";
import { Navbar } from "../Components/Navbar";
import { AccountInfo, AboutAccount } from "../styled-components/Account.styled";


const Account = ({history}) => {
  const [cookie] = useCookies(["user"]);
  const redirect = () => history.push('/Auth');

  const user = (user) => {
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
    } else {
      redirect()
    }
  };
  return <div>{user(cookie.user)}</div>;
}

export default Account;
