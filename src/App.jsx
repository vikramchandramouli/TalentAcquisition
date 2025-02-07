import React from "react";
import { Layout } from "antd";
import Full from "./views/Full";
import Headers from "./components/header/headers";
import Sidebar from "./components/sidebar/sidebar";
import { Content } from "antd/es/layout/layout";

function App() {
  const { Header, Content } = Layout;
  return (
    <>
      <Layout className="bg-white dark:!bg-black h-screen max-h-screen overflow-x-hidden overflow-y-hidden">
        <Header className="bg-white dark:!bg-black">
          <Headers />
        </Header>
        <Layout className="h-screen max-h-screen overflow-y-auto">
          <Content className="overflow-y-auto overflow-x-hidden">
            <Full />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
