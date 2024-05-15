import { useEffect, useState } from "react";
import { List } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { films } from "@/redux/films/actions";
import { selectSearchedItems, selectFavorList } from "@/redux/films/selectors";

import FilmCard from "@/components/FilmCard";

import { favorType, filmType } from "@/types";

const FilmList = ({
  favorState,
  movieType,
  year,
  titleToSearch,
}: {
  favorState: favorType;
  movieType: string | null;
  year: number | null;
  titleToSearch: string;
}) => {
  const dispatch: any = useDispatch();

  const { result: searchResult, isLoading } = useSelector(selectSearchedItems);
  const favorList = useSelector(selectFavorList);

  useEffect(() => {
    dispatch(
      films.search({
        options: {
          s: titleToSearch,
          page: 1,
          type: movieType,
          y: year,
        },
      })
    );
  }, [movieType, year, titleToSearch]);

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={searchResult.items}
      loading={isLoading}
      renderItem={(item: filmType) => (
        <List.Item>
          <FilmCard item={item} />
        </List.Item>
      )}
      pagination={{
        onChange: (page) => {
          dispatch(
            films.search({
              options: {
                s: titleToSearch,
                type: movieType,
                y: year,
                page,
              },
            })
          );
        },
        total: parseInt(searchResult.total),
        pageSize: 10,
        showSizeChanger: false,
      }}
    />
  );
};

export default FilmList;
