"use client";
import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { Divider } from "antd";
import { PageHeader } from "@ant-design/pro-layout";

import { selectSearchedItems } from "@/redux/github/selectors";

import { DefaultLayout } from "@/layout";
import RepoCard from "@/components/RepoCard";

import { repoType } from "@/types";

const Repository = () => {
  let router = useRouter();
  let { repositoryId = "" } = useParams();
  const [repo, setRepo] = useState<repoType>();

  const repoList = useSelector(selectSearchedItems);

  useEffect(() => {
    const current = repoList.result.items.find(
      ({ id }: { id: string }) => id == repositoryId
    );
    setRepo(current);
  }, [repoList, repositoryId]);

  return (
    <DefaultLayout>
      <PageHeader
        ghost={false}
        onBack={() => router.push("/")}
        title="Github App"
        subTitle="Repository Search"
        className="appHeader"
      />
      <Divider />
      <RepoCard item={repo} />
    </DefaultLayout>
  );
};

export default Repository;
