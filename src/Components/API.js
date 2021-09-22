import axios from "axios";
import { logIn, logOut } from "./History";

export const onSubmit = (data) => {
  try {
    setTimeout(() => {
      axios.get("./users.json").then((res) => {
        if (
          data.username === res.data[0].login &&
          data.password === res.data[0].password
        ) {
          logIn();
        } else {
          alert("Такого пользователя не существует!");
          logOut();
        }
      });
    }, 1000);
  } catch (e) {}
};
