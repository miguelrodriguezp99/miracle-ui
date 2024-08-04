import React from "react";
import "./components/styles/global.css";
import "./App.css";

import { Tabs, Tab } from "@components/tabs/src";
import { CameraIcon } from "./icons/CameraIcon";
import { UserIcon } from "./icons/UserIcon";
import { VolumeHighIcon } from "./icons/VolumeHighIcon";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <div style={{ marginTop: "10px" }}>
        <Tabs size="sm">
          <Tab title="Photos" key="photos">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </Tab>
          <Tab title="N.Y" key="videos">
            <div className="content">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </Tab>
          <Tab title="Links" key="links">
            <div className="content">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </Tab>
        </Tabs>
        <Tabs variant="solid" color="primary">
          <Tab
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                  width: "100%",
                  gap: "3px",
                }}
              >
                <CameraIcon />
                <span>Photos</span>
              </div>
            }
            key="photos"
          >
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </Tab>
          <Tab
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",

                  justifyContent: "center",
                  width: "100%",
                  gap: "3px",
                }}
              >
                <VolumeHighIcon />
                <span>Volumes</span>
              </div>
            }
            key="videos"
          >
            <div className="content">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </Tab>
          <Tab
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                  width: "100%",
                  gap: "3px",
                }}
              >
                <UserIcon />
                <span>Users</span>
              </div>
            }
            key="links"
          >
            <div className="content">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </Tab>
        </Tabs>

        <Tabs size="lg" radius="full">
          <Tab title="Photos" key="photos">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </Tab>
          <Tab title="N.Y" key="videos">
            <div className="content">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </Tab>
          <Tab title="Links" key="links">
            <div className="content">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
