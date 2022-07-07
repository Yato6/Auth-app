import { useCookies } from "react-cookie";
import useSWR from "swr";
import { fetcher } from "../Components/Fetcher";
import { logOut } from "../Components/History";
import { Navbar } from "../Components/Navbar";
import { AccountInfo, AboutAccount } from "../styled-components/Account.styled";

const Account = () => {
  const { data, error } = useSWR("/users", fetcher);
  const [cookies] = useCookies(["user"]);

  if (error) {
    return (
      <div>
        Что-то пошло не так...
        <button onClick={() => logOut()}></button>
      </div>
    );
  }

  if (!data) {
    const user = () => {
      if (!localStorage.token) {
        logOut();
      }
    };
    return <div>{user(cookies.user)}</div>;
  }

  return (
    <AccountInfo>
      <Navbar />
      <AboutAccount>
        <p>Account page</p>
        <h3>Добро пожаловать, {cookies.user}</h3>
      </AboutAccount>
    </AccountInfo>
  );
};

export default Account;
