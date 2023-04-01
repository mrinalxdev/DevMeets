import React from "react";
import {
  EuiProvider,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiCard,
} from "@elastic/eui";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import create from "../assets/create.svg";

const CreateMeeting = () => {
  useAuth();
  const navigate = useNavigate();

  return (
    <EuiProvider colorMode="dark">
      <div
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <Header />
        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          style={{ margin: "7vh 10vw" }}
        >
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"Create 1 On 1 Meeting"}
              description="Generate a meeting for 1 on 1 meet with other user"
              onClick={() => navigate("/create1on1")}
              paddingSize="xl"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"Create Video Conference"}
              description="Generate a meet for group conference for your upcoming project !"
              onClick={() => navigate("/videocon")}
              paddingSize="xl"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </EuiProvider>
  );
};

export default CreateMeeting;
