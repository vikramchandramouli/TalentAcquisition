import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

import { Card, Row, Col, Select } from "antd";
const Application = (props) => {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];

  return (
    <>
      <Card
      className=" shadow-2xl"
        title={
          <>
            <Row>
              <Col xs={24} md={7} className="mt-1">
                {" "}
                <span className=" text-base font-medium">Application's Info</span>
              </Col>
              <Col xs={24} md={13} className="flex mt-2">
                <div className="h-4 w-4 rounded-sm bg-[#277ACC]"></div>
                <span className="ml-2 mr-2 text-small"> Received</span>

                <div className="h-4 w-4 ml-2 rounded-sm bg-[#002B55BD]"></div>
                <span className="ml-2 text-small"> Processed</span>
              </Col>
              <Col xs={24} md={4} className="float-right">
                {" "}
                <Select
                  defaultValue="Month"
                  style={{
                    width: 90,
                  }}
                  options={[
                    {
                        value: "Year",
                        label: "Year",
                      },
                    {
                      value: "Month",
                      label: "Month",
                    },
                    {
                      value: "Date",
                      label: "Date",
                    }
                  ]}
                />
              </Col>
            </Row>
          </>
        }
      >
        <ResponsiveContainer width="100%" height={150}>
          <ComposedChart
            width={500}
            height={250}
            data={data}
            margin={{
              top: 0,
              right: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default Application;
