import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { CiStreamOn } from "react-icons/ci";
import Selector from "../Component/Selector/Selector";
import AudioStreamsChart from "../Component/Chart/AudioStreamsChart";

function Analytics() {
  const options = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Selected: ${selectedOption.label}`);
  };

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <div className="col-lg-3">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <div className="Ds_card An_card">
                    <div className="card">
                      <div className="Ds_icon">
                        <CiStreamOn className="icons" />
                      </div>
                      <p>Audio Streams</p>
                      <h1>5</h1>
                    </div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <div className="Ds_card An_card mt-4">
                    <div className="card">
                      <div className="Ds_icon">
                        <CiStreamOn className="icons" />
                      </div>
                      <p>Audio Streams</p>
                      <h1>5</h1>
                    </div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <div className="Ds_card An_card mt-4">
                    <div className="card">
                      <div className="Ds_icon">
                        <CiStreamOn className="icons" />
                      </div>
                      <p>Audio Streams</p>
                      <h1>5</h1>
                    </div>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          </Row>
        <div className="row mt-4">
        <div className="col-lg-12">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="chart_area">
                  <div className="chart_top_content">
                    <h3>
                    Audio Streams: <span>1,20,000.00</span>
                    </h3>
                    <div>
                      <Selector
                        options={options}
                        onChange={handleChange}
                        placeholder="This Year"
                        value={selectedOption}
                      />
                    </div>
                  </div>
                  <AudioStreamsChart className="chart" />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
            </Tab.Content>
          </div>
          </div>
      </Tab.Container>
    </>
  );
}

export default Analytics;
