import React from "react";
import logo1 from "../../assets/sidebarlogos/1.png";
import logo2 from "../../assets/sidebarlogos/2.png";
import logo3 from "../../assets/sidebarlogos/3.png";
import logo4 from "../../assets/sidebarlogos/4.png";
import logo5 from "../../assets/sidebarlogos/5.png";
import logo6 from "../../assets/sidebarlogos/6.png";
import logo7 from "../../assets/sidebarlogos/7.png";
import logo8 from "../../assets/sidebarlogos/8.png";
import logo9 from "../../assets/sidebarlogos/9.png";
import { Layout, Menu,Row,Col } from "antd";
import Full from "../../views/Full";

const { Sider,Content } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("", "1", <img src={logo1} className="w-6 h-6"></img>),
  getItem("", "2", <img src={logo2} className="w-6 h-6"></img>),
  getItem("", "3", <img src={logo3} className="w-6 h-6"></img>),
  getItem("", "4", <img src={logo4} className="w-6 h-6"></img>),
  getItem("", "5", <img src={logo5} className="w-6 h-6"></img>),
  getItem("", "6",<img src={logo6} className="w-6 h-6"></img>),
  getItem("", "7", <img src={logo7} className="w-6 h-6"></img>),
  getItem("", "8", <img src={logo8} className="w-6 h-6"></img>),
  getItem("", "9",<img src={logo9} className="w-6 h-6"></img>),
];
const Sidebar = () => {

  return (
    <Layout className=" min-h-screen mt-14">
      <Sider className="!min-w-20 !max-w-20 !w-20 rounded-tr-3xl !bg-white shadow-2xl">
        <Menu mode="inline" items={items} className="my-3"/>
      </Sider>
      <Content>
        <Full/>
      </Content>
    </Layout>
  );
};
export default Sidebar;
