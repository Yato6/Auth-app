import styled from "styled-components";

export const AboutMain = styled.div`
  height: 780px;
  width: 100%;
  display: flex;
  background-color: #e6e6e6;
`;

export const AnnouncedList = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  width: 300px;
  height: 730px;
  background-color: #212121;

  h1 {
    font-weight: initial;
    background-color: #ffd500;
    font-size: 18px;
    color: white;
    margin: 15px 0;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
  }
`;

export const EmptyContent = styled.div`
  width: calc(100% - 600px);
`;

export const PopularAnimeList = styled.div`
  background: #212121;
  width: 300px;
  height: 730px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;

  span {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    display: block;
    font-weight: 400;
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  h1 {
    font-weight: initial;
    background-color: #ffd500;
    font-size: 18px;
    color: white;
    margin: 15px 0;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
  }
`;

export const FirstPopularAnime = styled.div`
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  color: #ffd500;
  cursor: pointer;
  width: 100%;
  height: 111px;
  background-image: url("https://anime-fans.ru/wp-content/uploads/2021/05/Magicheskaya-bitva.-Glavnyj-personae-po-imeni-Itadori.jpg");

  background-size: 100%;
  overflow: hidden;

  :hover {
    transform: rotate(0deg) scale(1.1, 1.1);
    box-shadow: 5px 5px 0px #a5a5a5;
    z-index: 999;
    transition: transform 300ms linear 0ms, box-shadow 300ms linear 0ms,
      z-index 300ms linear 0ms;
  }
`;

export const SecondPopularAnime = styled.div`
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  margin-top: 25px;
  color: #ffd500;
  cursor: pointer;
  width: 100%;
  height: 111px;
  background-image: url("https://i.ytimg.com/vi/Zn9AcBVmM5E/maxresdefault.jpg");
  background-size: 100%;
  overflow: hidden;

  :hover {
    transform: rotate(0deg) scale(1.1, 1.1);
    box-shadow: 5px 5px 0px #a5a5a5;
    z-index: 999;
    transition: transform 300ms linear 0ms, box-shadow 300ms linear 0ms,
      z-index 300ms linear 0ms;
  }
`;

export const ThirdPopularAnime = styled.div`
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  margin-top: 25px;
  color: #ffd500;
  cursor: pointer;
  width: 100%;
  height: 111px;
  background-image: url("https://images8.alphacoders.com/834/thumb-1920-834392.jpg");
  background-size: 100%;
  overflow: hidden;

  :hover {
    transform: rotate(0deg) scale(1.1, 1.1);
    box-shadow: 5px 5px 0px #a5a5a5;
    z-index: 999;
    transition: transform 300ms linear 0ms, box-shadow 300ms linear 0ms,
      z-index 300ms linear 0ms;
  }
`;

export const FourthPopularAnime = styled.div`
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  margin-top: 25px;
  color: #ffd500;
  cursor: pointer;
  width: 100%;
  height: 111px;
  background-image: url("https://slovnet.ru/wp-content/uploads/2018/08/6-44.jpg");
  background-size: 100%;
  overflow: hidden;

  :hover {
    transform: rotate(0deg) scale(1.1, 1.1);
    box-shadow: 5px 5px 0px #a5a5a5;
    z-index: 999;
    transition: transform 300ms linear 0ms, box-shadow 300ms linear 0ms,
      z-index 300ms linear 0ms;
  }
`;

export const FifthPopularAnime = styled.div`
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  margin-top: 25px;
  color: #ffd500;
  cursor: pointer;
  width: 100%;
  height: 111px;
  background-image: url("https://images5.alphacoders.com/782/thumb-1920-782993.png");
  background-size: 100%;
  overflow: hidden;

  :hover {
    transform: rotate(0deg) scale(1.1, 1.1);
    box-shadow: 5px 5px 0px #a5a5a5;
    z-index: 999;
    transition: transform 300ms linear 0ms, box-shadow 300ms linear 0ms,
      z-index 300ms linear 0ms;
  }
`;
