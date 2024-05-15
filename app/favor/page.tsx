"use client";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Divider } from "antd";
import { PageHeader } from "@ant-design/pro-layout";

import { DefaultLayout } from "@/layout";

import { List } from "antd";

import { selectFavorList } from "@/redux/films/selectors";

import FilmCard from "@/components/FilmCard";

import { filmType } from "@/types";

const FavorMovies = () => {
  let router = useRouter();
  const favorList = useSelector(selectFavorList);
  return (
    <DefaultLayout>
      <PageHeader
        ghost={false}
        onBack={() => router.push("/")}
        title="Favor Movies"
        className="appHeader"
        style={{ marginBottom: 50 }}
      />
      <Divider />
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
        dataSource={favorList}
        renderItem={(item: filmType) => (
          <List.Item>
            <FilmCard item={item} />
          </List.Item>
        )}
        pagination={{
          total: parseInt(favorList.length),
          pageSize: 10,
          showSizeChanger: false,
        }}
      />
    </DefaultLayout>
  );
};

export default FavorMovies;
