import { Card, Row, Col, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import filter from "../../assets/filter.png";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

export default function Candidatestatus(props) {
  const Search = Input;
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    <>
      <Card
        className="candidate"
        title={
          <>
            <Row>
              <Col span={24} className="h-6"></Col>
              <Col xs={8} md={6}>
                <h1 className="text-xl font-normal">Candidate Status</h1>
              </Col>
              <Col xs={5} md={4} className="mt-1">
                <div className="inline-block border-b-2 border-[#0A66C2] font-medium text-[#0A66C2]">
                  View All
                </div>
              </Col>
              <Col md={3}></Col>
              <Col xs={8} md={8}>
                <Search
                  placeholder="Search"
                  className="w-64 h-10 rounded-none shadow-xl"
                  suffix={
                    <SearchOutlined
                      style={{
                        color: "rgba(0,0,0,.45)",
                      }}
                    />
                  }
                />
              </Col>
              <Col xs={24} md={3}>
                <Button className="flex rounded-sm" size="large">
                  <img className="w-3 h-3 mt-1 mr-1" src={filter}></img>
                  <span className="ml-q">Filter</span>
                </Button>
              </Col>
              <Col span={24} className="h-8"></Col>
            </Row>
          </>
        }
      >
        <Row>
          <Col span={24}>
            <div
              className="ag-theme-quartz" // applying the grid theme
              style={{ height: 420 }} // the grid will fill the size of the parent container
            >
              <AgGridReact rowData={rowData} columnDefs={colDefs} />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
