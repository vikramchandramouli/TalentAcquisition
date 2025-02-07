import React, { useState } from "react";
import { Card, Row, Col, Button, Modal } from "antd";
import checklist from "../../assets/Checklist.png";
import officegirlsm from "../../assets/officegirlsm.png";
import officegirllg from "../../assets/officegirllg.png";

export default function Assessment(props) {
  const [openModal, setOpenModal] = useState(false);
  const subPoints = ["Technical Screening", "HR Interview Round"];
  const Points = [
    {
      title: "Coding Challenge / Online Assessment",
      description:
        "A timed coding test on platforms like HackerRank, LeetCode, or Codility to evaluate problem-solving skills.",
    },
    {
      title: "System Design Round",
      description:
        "For experienced candidates, assessing their ability to design scalable and efficient applications.",
    },
    {
      title: "Pair Programming",
      description:
        "A live coding session with an interviewer to test collaboration and problem-solving skills.",
    },
    {
      title: "Behavioral Interview ",
      description:
        "Evaluates communication, teamwork, and problem-solving approach using STAR (Situation, Task, Action, Result) methodology.",
    },
    {
      title: "Project Discussion / Take-Home Assignment",
      description:
        "A practical coding task related to real-world use cases, allowing candidates to showcase their skills.",
    },
    {
      title: "Managerial Round",
      description:
        "An interview with a senior manager or tech lead to assess leadership, vision, and cultural fit.",
    },
    {
      title: "Final Decision / Offer Negotiation",
      description:
        "The last step where compensation, role expectations, and benefits are discussed before making an offer.",
    },
  ];
  return (
    <>
      <Card className=" bg-card-blue dark:!bg-gray-400/20  dark:!border-gray-400/20 !shadow-lg !shadow-[#c4c4b9] dark:!shadow-gray-400/20">
        <Row>
          {/* Icon Section */}
          <Col span={12} className="p-4">
            <div className="h-20 w-20 bg-white flex items-center justify-center p-5 rounded-full">
              {checklist ? (
                <img src={checklist} className="h-12 w-12" alt="Icon" />
              ) : (
                <CheckCircleOutlined className="text-blue-500 text-4xl" />
              )}
            </div>
          </Col>

          {/* Small Image */}
          <Col span={6} className="flex">
            <img
              src={officegirlsm}
              className="h-24 w-20"
              alt="Small Illustration"
            />
          </Col>

          {/* Large Image */}
          <Col span={6} className="relative">
            <img
              src={officegirllg}
              className="absolute -top-16 h-52 w-56"
              alt="Large Illustration"
            />
          </Col>

          {/* Count */}
          <Col span={24} className="mt-2 text-black dark:!text-white">
            <h1 className="!text-black dark:!text-white font-bold text-3xl">
              0033
            </h1>
          </Col>

          {/* Title */}
          <Col span={12} className="mt-5 text-black dark:!text-white">
            <span className="text-black dark:!text-white text-xl">
              Assessments
            </span>
          </Col>

          {/* Button */}
          <Col span={12} className="mt-3 text-black dark:!text-white ">
            <Button
              shape="round"
              className="bg-white font-medium float-end"
              onClick={() => setOpenModal(!openModal)}
            >
              View Details
            </Button>
          </Col>
          <Col span={24} className="mt-1">
            <ul className="list-disc pl-5 my-[4px] text-black dark:!text-white text-sm">
              {subPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card>
      <Modal
        open={openModal}
        footer={null}
        className="assessmentModal  "
        width={"50%"}
        title={
          <>
            <h1 className="text-black dark:!text-white font-bold text-3xl">
              Assessments
            </h1>
          </>
        }
        onCancel={() => setOpenModal(false)}
      >
        <div className="m-5">
          <Row>
            <Col span={24}>
              <ul className="list-disc">
                {Points?.map((data) => {
                  return (
                    <>
                      <li className="text-black dark:!text-white font-bold">
                        {data?.title}
                      </li>
                      <p className="p-2 text-black dark:!text-white">
                        {data?.description}
                      </p>
                    </>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
}
