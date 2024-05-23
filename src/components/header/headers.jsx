import React from 'react';
import { Layout,Input,Row,Col } from 'antd';
import { SearchOutlined  } from '@ant-design/icons'
import logo from "../../assets/logo.png"
import day from "../../assets/day.png"
import surface from "../../assets/surface.png"
import setting from "../../assets/setting.png"
import notification from "../../assets/notification.png"
import message from "../../assets/message.png"
import user from "../../assets/user.png"

const { Header, Content, Footer } = Layout;
const Headers = () => {
    const Search=Input
  return (
    <>
    <Row>
      <Header className="sticky top-0 z-10 w-full flex items-center bg-white shadow-2xl !p-0">
        <Col span={18} className="flex">
        <img src={logo} className="w-25 h-10 me-10 ms-2"></img>
    <Search
      placeholder="Search"
      className="w-64 ms-10 rounded-none shadow-2xl"
      suffix={
        <SearchOutlined 
          style={{
            color: 'rgba(0,0,0,.45)',
          }}
        />
      }
    />
      </Col>
      <Col span={6} className="flex">
    <img src={day} className="w-5 h-5 m-5"></img>
    <img src={surface} className="w-5 h-5 m-5"></img>
    <img src={message} className="w-5 h-5 m-5"></img>
    <img src={notification} className="w-5 h-5 m-5"></img>
    <img src={setting} className="w-5 h-5 m-5"></img>
    <img src={user} className="w-5 h-5 m-5"></img>
    </Col>  
      </Header>
      </Row>
      </>
  );
};
export default Headers;