import React from "react";
import { Row, Col } from "antd";
import Application from "./applicationinfo/application";
import Assessment from "./assessment/assessment";
import InterviewInfo from "./Interviews/interviewInfo";
import CalendarInfo from "./Interviews/calendar";
import Upcomings from "./upcomings/upcomings";
import Postedjobs from "./postedjob/postedjobs";
import Activity from "./activity/activity";
import Hiringcandidates from "./hirincandidates/hiringcandidates";
import Candidatestatus from "./candidatestatus/candidatestatus";

export default function Full(props) {
  return (
    <>
      <Row className="container mx-10">
        <Col xs={24} md={24}>
          <h1 className="text-xl">HR Employee</h1>
        </Col>
        <Col xs={24} md={24}>
          <p className="text-sm mt-3">
            Enjoy your selecting potential candidates Tracking and Management
            System.
          </p>
        </Col>
        <Col xs={24} md={24} className="h-10"></Col>
        <Col xs={24} md={14}>
          <Application />
        </Col>
        <Col xs={24} md={0} className="h-8"></Col>
        <Col xs={24} md={9}>
          <Assessment />
        </Col>
        <Col xs={24} md={24} className="h-4"></Col>
        <Col xs={24} md={16}>
          <InterviewInfo />
          <Col xs={24} md={24} className="h-4"></Col>
          <Postedjobs />
          <Col xs={24} md={24} className="h-4"></Col>
          <Candidatestatus />
        </Col>
        <Col xs={24} md={7} className="ml-4">
          <Col xs={23}>
            {" "}
            <CalendarInfo />
          </Col>
          <Col span={23}>
            {" "}
            <Upcomings />
          </Col>
          <Col span={23}>
            <Activity />
          </Col>
          <Col span={23}>
            {" "}
            <Hiringcandidates />
          </Col>
        </Col>
      </Row>
    </>
  );
}
