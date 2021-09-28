import React from "react";
import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import {
  AboutMain,
  AnnouncedList,
  EmptyContent,
  FifthPopularAnime,
  FirstAnnouncedAnime,
  FirstPopularAnime,
  FourthPopularAnime,
  InsideEmpty,
  PopularAnimeList,
  SecondPopularAnime,
  ThirdPopularAnime,
} from "../styled-components/Main.styled";

const Main = () => {
  const [state, setState] = useState(false);
  console.log(state);
  return (
    <>
      <Navbar />
      <AboutMain>
        <AnnouncedList>
          <h1>Анонсировано</h1>
          <FirstAnnouncedAnime
            onClick={() => {
              if (!state) {
                setState(true);
              } else {
                setState(false);
              }
            }}
          >
            <span>Блич: Тысячалетняя кровавая война</span>
          </FirstAnnouncedAnime>
        </AnnouncedList>

        <EmptyContent>
          <InsideEmpty>
            <p>Some Info</p>
          </InsideEmpty>
        </EmptyContent>
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
    </>
  );
};

export default Main;
