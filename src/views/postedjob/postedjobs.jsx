import React from "react";
import { Row, Col, Card, Input, Button, Tabs } from "antd";
import { SearchOutlined, ArrowUpOutlined } from "@ant-design/icons";
import filter from "../../assets/filter.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import UI from "../../assets/UI.png";
import Angular from "../../assets/Angular.png";
export default function Postedjobs(props) {
  const Search = Input;
  return (
    <>
      <Card
      className=" shadow-2xl"
        title={
          <>
            <Row className="mb-2">
              <Col span={24} className="h-6"></Col>
              <Col xs={8} md={5} className="mt-1">
                <span className="text-xl">Posted Jobs</span>
              </Col>
              <Col xs={4} md={3} className="mt-2">
                <span className=" font-normal tracking-wide inline-block border-b-2 border-[#0A66C2] text-[#0A66C2]">
                  View All
                </span>
              </Col>
              <Col xs={0} md={5}></Col>
              <Col xs={8} md={8}>
                <Search
                  placeholder="Search"
                  className="w-64 h-10 rounded-none shadow-2xl"
                  suffix={
                    <SearchOutlined
                      style={{
                        color: "rgba(0,0,0,.45)",
                      }}
                    />
                  }
                />
              </Col>
              <Col xs={24} md={3}>
                <Button className="flex rounded-sm" size="large">
                  <img className="w-3 h-3 mt-1 mr-1" src={filter}></img>
                  <span className="ml-q">Filter</span>
                </Button>
              </Col>
            </Row>
          </>
        }
      >
        <>
          <Tabs
            defaultActiveKey="1"
            type="card"
            items={[
              {
                key: "1",
                label: "Active Jobs",
                children: (
                  <>
                    <Row gutter={[16, 16]}>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title"
                          title={
                            <>
                              <div className="flex">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={python}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal">
                                    Python Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2">
                                  #001
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small">
                                <span className="text-[#0A66C2]">28%</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center">
                              <span className="text-sm">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#D9E4EF] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold text-[#0A66C2]">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={Angular}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal">
                                    Angular Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2">
                                  #002
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small">
                                <span className="text-[#0A66C2]">28%</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center">
                              <span className="text-sm">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#73A1FB] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={java}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal">
                                    Java Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2">
                                  #003
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small">
                                <span className="text-[#0A66C2]">28%</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center">
                              <span className="text-sm">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#2F73A0] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img className="h-5 w-5 ml-1" src={UI}></img>
                                  <span className="text-sm ml-1 font-normal">
                                    UI/UX Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2">
                                  #004
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small">
                                <span className="text-[#0A66C2]">28%</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center">
                              <span className="text-sm">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#0A66C2] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </>
                ),
              },
              {
                key: "2",
                label: "Inactive Jobs",
              },
              {
                key: "3",
                label: "Completed Jobs",
              },
            ]}
          />
        </>
      </Card>
    </>
  );
}
