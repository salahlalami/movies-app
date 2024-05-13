import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout className="site-layout">
      <Content className="contentLayout">{children}</Content>
    </Layout>
  );
};

export default DefaultLayout;
