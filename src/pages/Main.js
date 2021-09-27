import React from "react";
import { Navbar } from "../Components/Navbar";
import {
  AboutMain,
  AnnouncedList,
  EmptyContent,
  FifthPopularAnime,
  FirstAnnouncedAnime,
  FirstPopularAnime,
  FourthPopularAnime,
  PopularAnimeList,
  SecondPopularAnime,
  ThirdPopularAnime,
} from "../styled-components/Main.styled";

const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <AboutMain>
        <AnnouncedList>
          <h1>//Анонсировано//</h1>
          <FirstAnnouncedAnime>
            <span>Блич: Тысячалетняя кровавая война</span>
          </FirstAnnouncedAnime>
        </AnnouncedList>

        <EmptyContent></EmptyContent>
        <PopularAnimeList>
          <h1>Популярное</h1>
          <FirstPopularAnime>
            <span>Магическая Битва</span>
          </FirstPopularAnime>
          <SecondPopularAnime>
            <span>Ван-Пис</span>
          </SecondPopularAnime>
          <ThirdPopularAnime>
            <span>Тетрадь Смерти</span>
          </ThirdPopularAnime>
          <FourthPopularAnime>
            <span>Атака Титанов</span>
          </FourthPopularAnime>
          <FifthPopularAnime>
            <span>Коносуба</span>
          </FifthPopularAnime>
        </PopularAnimeList>
      </AboutMain>
    </div>
  );
};

export default Main;
