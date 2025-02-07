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
    <div className="flex justify-center !bg-white dark:!bg-black text-black dark:!text-white">
      <Row gutter={[16,16]} className="!mx-[2rem]">
            <Col span={24} className="p-4">
              <h1 className="text-xl">HR Employee</h1>  
              <p className="text-sm">
                Enjoy your selecting potential candidates Tracking and
                Management System.
              </p>
            </Col>
            <Row className="my-2" gutter={[16,16]}>
            <Col xs={24} md={14}>
              <Application />
            </Col>
            <Col xs={24} md={10}>
              <Assessment />
            </Col>
            </Row>
            <Col xs={24} md={16} className="!p-0">
              <InterviewInfo />
              <Col xs={24} md={24} className="h-4"></Col>
              <Postedjobs />
              <Col xs={24} md={24} className="h-4"></Col>
              <Candidatestatus />
            </Col>
            <Col xs={24} md={8}>
              <Col xs={24} className="!p-0">
                {" "}
                <CalendarInfo />
              </Col>
              <Col span={24}>
                {" "}
                <Upcomings />
              </Col>
              <Col span={24}>
                <Activity />
              </Col>
              <Col span={24}>
                {" "}
                <Hiringcandidates />
              </Col>
            </Col>
      </Row>
      </div>
    </>
  );
}
