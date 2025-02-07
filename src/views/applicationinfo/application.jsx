import React, { useState ,useEffect} from "react";
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

  const[isDark,setIsDark]=useState(localStorage.getItem("theme") === "dark")

  
  const data = [
    {
      Month: "January",
      Applied: 800,
      Processed: 590,
    },
    {
      Month: "February",
      Processed: 868,
      Applied: 967,

    },
    {
      Month: "March",
      Applied: 1397,
      Processed: 1098,
    },
    {
      Month: "April",
      Applied: 1480,
      Processed: 1200,
    },
    {
      Month: "May",
      Applied: 1520,
      Processed: 1108,
    }
  ];

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
}, []);

console.log("dark",isDark)
  return (
    <>
      <Card
      className="ant-card bg-white text-black dark:!text-white dark:!bg-gray-400/20 contact-card dark:!border-gray-400/20 !shadow-lg !shadow-[#c4c4b9] dark:!shadow-gray-400/20"
        title={
          <>
            <Row className="flex justify-between">
              <Col md={10} className="mt-1">
                {" "}
                <h1 className="text-black dark:!text-white ">Application's Info</h1>
              </Col>
              <Col md={14} className="flex mt-2 justify-end">
                <div className="h-4 w-4 mx-1 mt-[3px] rounded-sm bg-[#ff7300]"></div>
                <span className="mx-2 text-small  text-black dark:!text-white"> Applied</span>

                <div className="h-4 w-4 mx-1 mt-[3px] rounded-sm bg-[#413ea0]"></div>
                <span className="mx-2 text-small  text-black dark:!text-white"> Processed</span>
              </Col>
            </Row>
          </>
        }
      >
        <ResponsiveContainer width="100%" height={200}>
          <ComposedChart
            data={data}
            margin={{
              top: 0,
              right: 20,
              left: 20,
            }}
            
          >
            <XAxis dataKey="Month" tick={{fill:isDark?"white":"black"}} />
            <YAxis tick={{fill:isDark?"white":"black"}}/>
            <Tooltip />
            <Bar dataKey="Applied" fill="#ff7300" dot={false} />
            <Bar dataKey="Processed" fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default Application;
