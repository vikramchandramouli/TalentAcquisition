import React, { useState } from "react";
import { Col, Row, Button, Modal } from "antd";
export default function Upcomings(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Upcomings = [
    {
      date: "07",
      month: "Feb",
      title: "Interview with Designer",
      createdby: "Stella",
      time: "10 AM to 11 AM",
    },
    {
      date: "07",
      month: "Feb",
      title: "Interview with PMO",
      createdby: "Stephen",
      time: "10 AM to 11 AM",
    },
    {
      date: "07",
      month: "Feb",
      title: "Interview with Net. Admin",
      createdby: "Stella",
      time: "10 AM to 11 AM",
    },
    {
      date: "08",
      month: "Feb",
      title: "Technical Screening",
      createdby: "Michael",
      time: "9 AM to 10 AM",
    },
    {
      date: "08",
      month: "Feb",
      title: "HR Interview Round",
      createdby: "Sarah",
      time: "11 AM to 12 PM",
    },
    {
      date: "09",
      month: "Feb",
      title: "Final Round with CEO",
      createdby: "John",
      time: "3 PM to 4 PM",
    },
    {
      date: "10",
      month: "Feb",
      title: "Onboarding Session",
      createdby: "Emily",
      time: "2 PM to 3 PM",
    },
  ];

  return (
    <>
      <Row>
        <Col span={24} className="h-6"></Col>
        <Col span={24} className="flex flex-row justify-between">
          <h1 className="mt-1 text-xl font-medium tracking-wide">Upcomings</h1>
          <span className="mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2] cursor-pointer" onClick={()=>setIsModalOpen(!isModalOpen)}>
            View All
          </span>
        </Col>
        <Col span={24} className="h-6"></Col>
        <Col span={6}>
          <div className="h-14 w-14 rounded-md bg-[#0B74AD26] text-center flex-col content-center">
            <h1 className="text-md font-medium text-[#0B74AD]">07</h1>
            <span className="text-[#0B74AD] text-md">Feb</span>
          </div>
        </Col>
        <Col span={14} className="ml-2">
          <h1 className="font-medium text-md">Interview with designer</h1>
          <span className="text-md font-light">
            Created by <span className="text-[#0B74AD]">Stella</span>
          </span>
          <h1 className="text-small mt-1 font-light">10 AM to 11 AM</h1>
        </Col>
        <Col span={3}>
          <Button className="ml-1" type="primary">
            Details
          </Button>
        </Col>
        <Col span={24} className="h-6"></Col>
        <Col span={6}>
          <div className="h-14 w-14 rounded-md bg-[#C0C1C1] text-center flex-col content-center">
            <h1 className="text-md font-medium text-black">07</h1>
            <span className="text-black text-md">Feb</span>
          </div>
        </Col>
        <Col span={14} className="ml-2">
          <h1 className="font-medium text-md">Interview with PMO</h1>
          <span className="text-md font-light">
            Created by <span className="text-[#0B74AD]">Stephen</span>
          </span>
          <h1 className="text-small mt-1 font-light">10 AM to 11 AM</h1>
        </Col>
        <Col span={3}>
          <Button className="ml-1" type="primary">
            Details
          </Button>
        </Col>
        <Col span={24} className="h-6"></Col>
        <Col span={6}>
          <div className="h-14 w-14 rounded-md bg-[#C0C1C1] text-center flex-col content-center">
            <h1 className="text-md font-medium text-black">07</h1>
            <span className="text-black text-md">Feb</span>
          </div>
        </Col>
        <Col span={14} className="ml-2">
          <h1 className="font-medium text-md">Interview with Net. Admin</h1>
          <span className="text-md font-light">
            Created by <span className="text-[#0B74AD]">Stella</span>
          </span>
          <h1 className="text-small mt-1 font-light">01 PM to 02 PM</h1>
        </Col>
        <Col span={3}>
          <Button className="ml-1" type="primary">
            Details
          </Button>
        </Col>
      </Row>
      <Modal
        open={isModalOpen}
        footer={null}
        className="assessmentModal"
        width={"35%"}
        title={
          <>
            <h1 className="text-black dark:!text-white font-bold text-3xl">
              Upcomings
            </h1>
          </>
        }
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="m-5">
          <Row>
            <Col span={24}>
                {Upcomings?.map((data,i) => {
                  return (
                    <div key={i}>
                    <Row className="m-2 text-black dark:!text-white">
                        <Col span={5}>
                          <div className="h-14 w-14 rounded-md bg-[#0B74AD26] text-center flex-col content-center">
                            <h1 className="text-md font-medium text-[#0B74AD]">
                              {data?.date}
                            </h1>
                            <span className="text-[#0B74AD] text-md">{data?.month}</span>
                          </div>
                        </Col>
                        <Col span={14} className="ml-2">
                          <h1 className="font-medium text-md">
                          {data?.title}
                          </h1>
                          <span className="text-md font-light">
                            Created by{" "}
                            <span className="text-[#0B74AD]">{data?.createdby}</span>
                          </span>
                          <h1 className="text-small mt-1 font-light">
                          {data?.time}
                          </h1>
                        </Col>
                        <Col span={3}>
                          <Button className="ml-1" type="primary">
                            Details
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
}
