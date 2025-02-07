import { Card, Row, Col, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import filter from "../../assets/filter.png";
import React, { useState,useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

export default function Candidatestatus(props) {
  const Search = Input;
  const [rowData, setRowData] = useState([
    { Jobid: "#001", Name: "John Doe", Position: "Designer", level1: "6/10", level2: "7/10", level3: "3/10", level4: "...", totalmarks: "...", status: "Active", action: "" },
    { Jobid: "#002", Name: "John Smith", Position: "Angular Developer", level1: "6/10", level2: "5/10", level3: "5/10", level4: "8/10", totalmarks: "24/40", status: "Hired", action: "" },
    { Jobid: "#003", Name: "Johnson Smith", Position: "Python Developer", level1: "6/10", level2: "7/10", level3: "3/10", level4: "...", totalmarks: "...", status: "Active", action: "" },
    { Jobid: "#004", Name: "Stella", Position: "Python Developer", level1: "6/10", level2: "2/10", level3: "", level4: "", totalmarks: "", status: "Active", action: "" },
    { Jobid: "#005", Name: "Randy", Position: "IOS Developer", level1: "6/10", level2: "7/10", level3: "3/10", level4: "...", totalmarks: "...", status: "Active", action: "" },
    { Jobid: "#006", Name: "John Doe", Position: "Junior Designer", level1: "6/10", level2: "7/10", level3: "3/10", level4: "...", totalmarks: "...", status: "Active", action: "" },
    { Jobid: "#007", Name: "Alice Brown", Position: "React Developer", level1: "8/10", level2: "7/10", level3: "9/10", level4: "6/10", totalmarks: "30/40", status: "Hired", action: "" },
    { Jobid: "#008", Name: "Michael Johnson", Position: "Data Analyst", level1: "7/10", level2: "6/10", level3: "5/10", level4: "...", totalmarks: "...", status: "Active", action: "" },
    { Jobid: "#009", Name: "Sophia Williams", Position: "Full Stack Developer", level1: "9/10", level2: "8/10", level3: "7/10", level4: "9/10", totalmarks: "33/40", status: "Hired", action: "" },
    { Jobid: "#010", Name: "Liam Martinez", Position: "Backend Developer", level1: "7/10", level2: "8/10", level3: "6/10", level4: "...", totalmarks: "...", status: "Active", action: "" },
    { Jobid: "#011", Name: "Olivia Wilson", Position: "UI/UX Designer", level1: "8/10", level2: "7/10", level3: "9/10", level4: "6/10", totalmarks: "30/40", status: "Hired", action: "" },
    { Jobid: "#012", Name: "Ethan Anderson", Position: "DevOps Engineer", level1: "6/10", level2: "5/10", level3: "7/10", level4: "...", totalmarks: "...", status: "Active", action: "" },
    { Jobid: "#013", Name: "Emma Thomas", Position: "Java Developer", level1: "8/10", level2: "7/10", level3: "8/10", level4: "9/10", totalmarks: "32/40", status: "Hired", action: "" },
    { Jobid: "#014", Name: "Daniel White", Position: "Android Developer", level1: "7/10", level2: "6/10", level3: "5/10", level4: "...", totalmarks: "...", status: "Active", action: "" }
]);

  const [colDefs, setColDefs] = useState([
    { field: "Jobid",headerName:"Job ID" },
    { field: "Name",headerName:"Name" },
    { field: "Position",headerName:"Position" },
    { field: "level1",headerName:"1st Level" },
    { field: "level2",headerName:"2nd Level" },
    { field: "level3",headerName:"3rd Level" },
    { field: "level4",headerName:"4th Level" },
    { field: "totalmarks",headerName:"Total Marks" },
    { field: "status",headerName:"Status" },
    { field: "actions",headerName:"Actions" },

  ]);

  const autoSizeStrategy = {
    type: 'fitGridWidth',
    defaultMinWidth: 100,

};

  return (
    <>
      <Card
        className="!shadow-sm [#c4c4b9] bg-white dark:!bg-gray-400/20 dark:!border-gray-400/20 "
        title={
            <>
              <Row className="m-2 text-black dark:!text-white" gutter={[16,16]}>
                <Col span={24} className="h-3"></Col>
                <Col  span={5}>
                  <span className="text-xl">Candidate Status</span>
                </Col>
                {/* <Col span={1}></Col> */}
                <Col  span={8} >
                  {/* <button className="mt-1 font-normal tracking-wide  border-b-2 border-[#0A66C2] text-[#0A66C2] cursor-pointer">
                    View All
                  </button> */}
                </Col>
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
                <Button className="flex rounded-sm float-right shadow-lg dark:!shadow-gray-400/10 text-black dark:!text-white dark:!bg-gray-400/20 dark:!border-gray-400/20">
                  <img className="w-3 h-3 mt-1 mr-1" src={filter}></img>
                  <span className="ml-1">Filter</span>
                </Button>
                </Col>
              </Row>
            </>
          }
      >
        <Row>
          <Col span={24}>
            <div
              className="ag-theme-quartz" // applying the grid theme
              style={{ height: 450 }} // the grid will fill the size of the parent container
            >
              <AgGridReact rowData={rowData} columnDefs={colDefs} autoSizeStrategy={autoSizeStrategy} />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
