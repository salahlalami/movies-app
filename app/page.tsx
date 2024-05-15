"use client";
import { useState } from "react";
import { Divider, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { PageHeader } from "@ant-design/pro-layout";
import { useDebounce } from "ahooks";

import { DefaultLayout } from "@/layout";

import FilmList from "@/components/FilmList";
import SearchMovie from "@/components/SearchMovie";
import MovieTypeSelect from "@/components/MovieTypeSelect";
import YearSelect from "@/components/YearSelect";

import { favorType } from "@/types";

const Home = () => {
  let router = useRouter();
  const [favorState, setFavorState] = useState<favorType>("all");
  const [movieTypeState, setMovieTypeState] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const [valToSearch, setValToSearch] = useState<string>("Pokemon");

  const titleToSearch = useDebounce(valToSearch, { wait: 600 });

  const handleMovieTypeChange = (value: string) => {
    setMovieTypeState(value);
  };
  const handleYearChange = (value: number | null) => {
    setYear(value);
  };

  const handleSearchChange = (e: any) => {
    setValToSearch(e.target.value);
  };

  return (
    <DefaultLayout>
      <PageHeader
        ghost={false}
        title="Movies App"
        subTitle="Movies , Series , Episodes"
        extra={[
          <SearchMovie key="SearchMovie" handleChange={handleSearchChange} />,
          <YearSelect key="YearSelect" handleChange={handleYearChange} />,
          <MovieTypeSelect
            key="MovieTypeSelect"
            handleChange={handleMovieTypeChange}
          />,
          <Button
            key="favorMovies"
            danger
            shape="circle"
            icon={<HeartOutlined />}
            onClick={() => router.push("/favor")}
          />,
        ]}
        className="appHeader"
      />
      <Divider />
      <FilmList
        favorState={favorState}
        movieType={movieTypeState}
        year={year}
        titleToSearch={titleToSearch}
      />
    </DefaultLayout>
  );
};

export default Home;
