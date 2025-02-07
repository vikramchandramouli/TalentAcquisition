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
      className="bg-white dark:!bg-gray-400/20 dark:!border-gray-400/20 !shadow-lg !shadow-[#c4c4b9] dark:!shadow-gray-400/20"
        title={
          <>
            <Row className="m-2 text-black dark:!text-white" gutter={[16,16]}>
              <Col span={24} className="h-3"></Col>
              <Col  span={5}>
                <span className="text-xl">Posted Jobs</span>
              </Col>
              {/* <Col span={}></Col> */}
              <Col  span={5} >
                {/* <button className="mt-1 font-normal tracking-wide  border-b-2 border-[#0A66C2] text-[#0A66C2] cursor-pointer">
                  View All
                </button> */}
              </Col>
              <Col span={3}></Col>
              <Col span={7}>
                <Search
                  placeholder="Search"
                  className="h-8 rounded-none shadow-2xl float-right"
                  suffix={
                    <SearchOutlined
                      style={{
                        color: "rgba(0,0,0,.45)",
                      }}
                    />
                  }
                />
              </Col>
              <Col span={3} className="ml-2">
                <Button className="flex rounded-sm float-right shadow-lg dark:!shadow-gray-400/10 text-black dark:!text-white dark:!bg-gray-400/20 dark:!border-gray-400/20" size="medium">
                  <img className="w-3 h-3 mt-1 mr-1" src={filter}></img>
                  <span className="ml-1">Filter</span>
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
                    <Row gutter={[16, 16]} className="text-black dark:!text-white">
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                          title={
                            <>
                              <div className="flex flex-col text-center text-black dark:!text-white">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5"
                                    src={python}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal">
                                    Python Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light">
                                  #001
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                              <span className="text-black dark:!text-white text-small">
                                <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                              </span>
                              <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                            </div>
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                          className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                          title={
                            <>
                              <div className="flex flex-col text-center text-black dark:!text-white">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5"
                                    src={Angular}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal">
                                    Angular Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light">
                                  #002
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                              <span className="text-black dark:!text-white text-small">
                                <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                              </span>
                              <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                            </div>
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                          className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                          title={
                            <>
                              <div className="flex flex-col text-center text-black dark:!text-white">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5"
                                    src={java}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal">
                                    Java Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light">
                                  #003
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                            <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                            <span className="text-black dark:!text-white text-small">
                              <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                            </span>
                            <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                          </div>
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                          className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                          title={
                            <>
                              <div className="flex flex-col text-center text-black dark:!text-white">
                                <div className="flex">
                                  <img className="h-5 w-5 ml-1" src={UI}></img>
                                  <span className="text-sm ml-1 font-normal">
                                    UI/UX Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light">
                                  #004
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                              <span className="text-black dark:!text-white text-small">
                                <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                              </span>
                              <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                            </div>
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                children: (
                  <>
                  <Row gutter={[16, 16]} className="text-black dark:!text-white">
                    <Col xs={12} md={6}>
                      <Card
                        className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                        title={
                          <>
                            <div className="flex flex-col text-center text-black dark:!text-white">
                              <div className="flex">
                                <img
                                  className="h-5 w-5"
                                  src={python}
                                ></img>
                                <span className="text-sm ml-1 font-normal">
                                  Python Developers
                                </span>
                              </div>
                              <span className="text-sm font-light">
                                #001
                              </span>
                            </div>
                          </>
                        }
                        actions={[
                          <div>
                            <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                            <span className="text-black dark:!text-white text-small">
                              <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                            </span>
                            <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                          </div>
                        ]}
                      >
                        <Row>
                          <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                        className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                        title={
                          <>
                            <div className="flex flex-col text-center text-black dark:!text-white">
                              <div className="flex">
                                <img
                                  className="h-5 w-5"
                                  src={Angular}
                                ></img>
                                <span className="text-sm ml-1 font-normal">
                                  Angular Developers
                                </span>
                              </div>
                              <span className="text-sm font-light">
                                #002
                              </span>
                            </div>
                          </>
                        }
                        actions={[
                          <div>
                            <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                            <span className="text-black dark:!text-white text-small">
                              <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                            </span>
                            <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                          </div>
                        ]}
                      >
                        <Row>
                          <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                        className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                        title={
                          <>
                            <div className="flex flex-col text-center text-black dark:!text-white">
                              <div className="flex">
                                <img
                                  className="h-5 w-5"
                                  src={java}
                                ></img>
                                <span className="text-sm ml-1 font-normal">
                                  Java Developers
                                </span>
                              </div>
                              <span className="text-sm font-light">
                                #003
                              </span>
                            </div>
                          </>
                        }
                        actions={[
                          <div>
                          <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                          <span className="text-black dark:!text-white text-small">
                            <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                          </span>
                          <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                        </div>
                        ]}
                      >
                        <Row>
                          <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                        className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                        title={
                          <>
                            <div className="flex flex-col text-center text-black dark:!text-white">
                              <div className="flex">
                                <img className="h-5 w-5 ml-1" src={UI}></img>
                                <span className="text-sm ml-1 font-normal">
                                  UI/UX Developers
                                </span>
                              </div>
                              <span className="text-sm font-light">
                                #004
                              </span>
                            </div>
                          </>
                        }
                        actions={[
                          <div>
                            <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                            <span className="text-black dark:!text-white text-small">
                              <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                            </span>
                            <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                          </div>
                        ]}
                      >
                        <Row>
                          <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                key: "3",
                label: "Completed Jobs",
                children: (
                  <>
                  <Row gutter={[16, 16]} className="text-black dark:!text-white">
                    <Col xs={12} md={6}>
                      <Card
                        className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                        title={
                          <>
                            <div className="flex flex-col text-center text-black dark:!text-white">
                              <div className="flex">
                                <img
                                  className="h-5 w-5"
                                  src={python}
                                ></img>
                                <span className="text-sm ml-1 font-normal">
                                  Python Developers
                                </span>
                              </div>
                              <span className="text-sm font-light">
                                #001
                              </span>
                            </div>
                          </>
                        }
                        actions={[
                          <div>
                            <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                            <span className="text-black dark:!text-white text-small">
                              <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                            </span>
                            <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                          </div>
                        ]}
                      >
                        <Row>
                          <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                        className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                        title={
                          <>
                            <div className="flex flex-col text-center text-black dark:!text-white">
                              <div className="flex">
                                <img
                                  className="h-5 w-5"
                                  src={Angular}
                                ></img>
                                <span className="text-sm ml-1 font-normal">
                                  Angular Developers
                                </span>
                              </div>
                              <span className="text-sm font-light">
                                #002
                              </span>
                            </div>
                          </>
                        }
                        actions={[
                          <div>
                            <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                            <span className="text-black dark:!text-white text-small">
                              <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                            </span>
                            <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                          </div>
                        ]}
                      >
                        <Row>
                          <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                        className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                        title={
                          <>
                            <div className="flex flex-col text-center text-black dark:!text-white">
                              <div className="flex">
                                <img
                                  className="h-5 w-5"
                                  src={java}
                                ></img>
                                <span className="text-sm ml-1 font-normal">
                                  Java Developers
                                </span>
                              </div>
                              <span className="text-sm font-light">
                                #003
                              </span>
                            </div>
                          </>
                        }
                        actions={[
                          <div>
                          <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                          <span className="text-black dark:!text-white text-small">
                            <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                          </span>
                          <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                        </div>
                        ]}
                      >
                        <Row>
                          <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
                        className="card_title dark:!bg-gray-400/20 dark:!border-gray-400/20"
                        title={
                          <>
                            <div className="flex flex-col text-center text-black dark:!text-white">
                              <div className="flex">
                                <img className="h-5 w-5 ml-1" src={UI}></img>
                                <span className="text-sm ml-1 font-normal">
                                  UI/UX Developers
                                </span>
                              </div>
                              <span className="text-sm font-light">
                                #004
                              </span>
                            </div>
                          </>
                        }
                        actions={[
                          <div>
                            <ArrowUpOutlined className="w-5 text-black dark:!text-white " />
                            <span className="text-black dark:!text-white text-small">
                              <span className="text-[#0A66C2] mr-1 dark:!text-white">28%</span>vs Last month
                            </span>
                            <span className="text-black dark:!text-white text-small font-light">  6 mins ago</span>
                          </div>
                        ]}
                      >
                        <Row>
                          <Col span={24} className="m-auto text-center text-black dark:!text-white">
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
            ]}
          />
        </>
      </Card>
    </>
  );
}
