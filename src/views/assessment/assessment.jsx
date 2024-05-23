import React from "react";
import { Card, Row, Col,Button } from "antd";
import checklist from "../../assets/Checklist.png";
import officegirlsm from "../../assets/officegirlsm.png";
import officegirllg from "../../assets/officegirllg.png";

export default function Assessment(props) {
  return (
    <>
      <Card className="ml-3 bg-[linear-gradient(74deg,_#0A66C2_6.27%,_#5994CE_90.96%)] !p-0 shadow-2xl" style={{height:255}}>
        <Row>
          <Col span={12} className="p-5">
            <div className="h-20 w-20 bg-white content-center p-5">
              <img src={checklist} className="h-12 w-10"></img>
            </div>
          </Col>
          <Col span={5} className="flex">
            <img src={officegirlsm} className="h-24 w-20 "></img>
          </Col>
          <Col span={7}>
            <img src={officegirllg} className=" absolute -top-16 h-52 w-54"></img>
          </Col>
          <Col span={24}>
            <h1 className=" text-white font-bold text-3xl">0033</h1>
          </Col>
          <Col span={16}>
          <span className=" text-white text-lg mt-4">New Assessment's</span>
          </Col>
          <Col span={8}>
          <Button className="rounded-none">View Details</Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}
