import React from "react";
import { Card, Row, Col,Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import user1 from "../../assets/User1.png";
import user2 from "../../assets/User2.png";
import Calendar from "../../assets/Calendar.png";
import Clock from "../../assets/Clock.png";
export default function InterviewInfo(props) {
  return (
    <>
       <Card
       className="shadow-2xl"
      title={
        <Row>
          <Col span={24} className="h-6"></Col>
          <Col span={23} className="mb-2">
            <h1 className="tracking-wide font-semibold">Today Interviews Meetings Info</h1>
          </Col>
          <Col span={1} className="mb-2">
            <MoreOutlined className="float-right font-bold text-lg" />
          </Col>
        </Row>
      }
    >
      <div className=" flex overflow-x-auto p-4">
        <div style={{ flex: '0 0 auto', marginRight: '1rem',maxWidth:600 }}>
          <Card className="!p-0">
            <Row>
              <Col span={10} className="flex-col">
                <div className="h-20 w-20 rounded-full m-auto">
                  <img src={user1} alt="User 1"></img>
                </div>
                <h1 className="mt-3 text-center">John Smith</h1>
                <h1 className="mt-1 text-center">Senior Python Developer</h1>
                <Row className="mt-3">
                  <Col span={12}>
                    <img className="h-5 w-5" src={Calendar} alt="Calendar"></img>
                    <span className="mt-2 text-sm text-[#0A66C2]">19th Feb 2024</span>
                  </Col>
                  <Col span={12}>
                    <img className="h-5 w-5" src={Clock} alt="Clock"></img>
                    <span className="mt-2 text-sm text-[#0A66C2]">10.30 AM</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={14}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <span>1st Level: 7/10</span>
                  </Col>
                  <Col span={12}>
                    <span>Interviewer: Stella</span>
                  </Col>
                  <Col span={12}>
                    <span>2nd Level: 6/10</span>
                  </Col>
                  <Col span={12}>
                    <span>Interviewer: Smith</span>
                  </Col>
                  <Col span={12}>
                    <span>3rd Level: Waiting</span>
                  </Col>
                  <Col span={12}>
                    <span>Interviewer: Stephen</span>
                  </Col>
                  <Col span={12}>
                    <span>Meet Via: G-Meet</span>
                  </Col>
                  <Col span={12}>
                    <span>Attendees: Johnson</span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} className="h-5 w-5"></Col>
                  <Col span={12}>
                    <Button className="text-[#0A66C2] text-sm rounded-none border-[#0A66C2]">Reschedule Meeting</Button>
                  </Col>
                  <Col span={12}>
                    <Button type="primary" className="text-sm rounded-none">Join Meeting</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>

        <div style={{ flex: '0 0 auto', marginRight: '1rem' ,maxWidth:600 }}>
          <Card className="!p-0" style={{ minWidth: '300px' }}>
            <Row>
              <Col span={10} className="flex-col">
                <div className="h-20 w-20 rounded-full m-auto">
                  <img src={user2} alt="User 2"></img>
                </div>
                <h1 className="mt-3 text-center">Maria</h1>
                <h1 className="mt-1 text-center">Senior Python Developer</h1>
                <Row className="mt-3">
                  <Col span={12}>
                    <img className="h-5 w-5" src={Calendar} alt="Calendar"></img>
                    <span className="mt-2 text-sm text-[#0A66C2]">19th Feb 2024</span>
                  </Col>
                  <Col span={12}>
                    <img className="h-5 w-5" src={Clock} alt="Clock"></img>
                    <span className="mt-2 text-sm text-[#0A66C2]">10.30 AM</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={14}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <span>1st Level: 7/10</span>
                  </Col>
                  <Col span={12}>
                    <span>Interviewer: Stella</span>
                  </Col>
                  <Col span={12}>
                    <span>2nd Level: 6/10</span>
                  </Col>
                  <Col span={12}>
                    <span>Interviewer: Smith</span>
                  </Col>
                  <Col span={12}>
                    <span>3rd Level: Waiting</span>
                  </Col>
                  <Col span={12}>
                    <span>Interviewer: Stephen</span>
                  </Col>
                  <Col span={12}>
                    <span>Meet Via: G-Meet</span>
                  </Col>
                  <Col span={12}>
                    <span>Attendees: Johnson</span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} className="h-5 w-5"></Col>
                  <Col span={12}>
                    <Button className="text-[#0A66C2] text-sm rounded-none border-[#0A66C2]">Reschedule Meeting</Button>
                  </Col>
                  <Col span={12}>
                    <Button type="primary" className="text-sm rounded-none">Join Meeting</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </Card> 
    </>
  );
}
