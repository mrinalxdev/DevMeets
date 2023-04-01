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

const Engage = () => {
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
              title={"Quiz"}
              description="Take the quiz on mixed topics"
              onClick={() => navigate("/quiz")}
              paddingSize="xl"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"Docs"}
              description="Read the Docs of some of the most used tools!"
              onClick={() => navigate("/docs")}
              paddingSize="xl"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </EuiProvider>
  );
};

export default Engage;
