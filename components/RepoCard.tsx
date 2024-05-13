import React from "react";
import { Card, Typography, Button } from "antd";
import {
  HeartOutlined,
  StarOutlined,
  GithubOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { github } from "@/redux/github/actions";
import { selectFavorList } from "@/redux/github/selectors";

import { repoType } from "@/types";

const { Paragraph } = Typography;

const Action = ({
  text,
  icon,
  onClick = () => {},
}: {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div className="actionContainer" onClick={onClick}>
      <div className="actionIcon">
        {icon}
        <div className="actionText">{text}</div>
      </div>
    </div>
  );
};

const FavorIcon = ({ repoId }: { repoId: any }) => {
  const dispatch: any = useDispatch();
  const favorList = useSelector(selectFavorList);
  const favorToggle = () => {
    dispatch(
      github.favorToggle({
        repoId,
      })
    );
  };

  return (
    <Button
      type="text"
      icon={
        <HeartOutlined
          style={{
            color: favorList.includes(repoId) ? "red" : "grey",
            fontSize: "16px",
          }}
        />
      }
      onClick={favorToggle}
    />
  );
};

const RepoCard = ({ item }: { item: repoType | undefined }) => {
  let router = useRouter();
  let pathname = usePathname();

  return (
    <Card
      title={item?.full_name}
      extra={<FavorIcon repoId={item?.id} />}
      className="repoCard"
      style={{ minHeight: pathname != "/" ? "500px" : "auto" }}
      actions={[
        <Action
          text={
            item?.stargazers_count +
            (item && item.stargazers_count > 1 ? " stars" : " stars")
          }
          key="star"
          icon={<StarOutlined />}
        />,
        <Action
          text={item?.language || "Unknow"}
          key="language"
          icon={<GithubOutlined />}
        />,
        pathname == "/" ? (
          <Action
            text={"Open"}
            key="openCard"
            icon={<ArrowsAltOutlined />}
            onClick={() => {
              router.push(`/repository/${item?.id}`);
            }}
          />
        ) : (
          <Action
            text={"Close"}
            key="closeCard"
            icon={<ArrowsAltOutlined />}
            onClick={() => {
              router.push(`/`);
            }}
          />
        ),
      ]}
    >
      <Paragraph ellipsis={{ rows: 2 }}>
        Link : <a href={item?.html_url}>{item?.html_url}</a>
      </Paragraph>
      <Paragraph ellipsis={{ rows: 3 }}>
        Description : {item?.description}
      </Paragraph>
    </Card>
  );
};

export default RepoCard;