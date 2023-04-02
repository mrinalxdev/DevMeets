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

const Docs = () => {
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
          direction="column"
          style={{ margin: "7vh 10vw" }}
        >
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"React"}
              description="React Documentation"
              onClick={() => navigate("/ReactDocs")}
              paddingSize="xl"
              style={{width: '80vw'}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"Javascript"}
              description="Javascript Documentation"
              onClick={() => navigate("/JsDocs")}
              paddingSize="xl"
              style={{width: '80vw'}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"NextJs"}
              description="NextJs Documentation"
              onClick={() => navigate("/NextDocs")}
              paddingSize="xl"
              style={{width: '80vw'}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"TypeScript"}
              description="TypeScript Documentation"
              onClick={() => navigate("/TypeScriptDocs")}
              paddingSize="xl"
              style={{width: '80vw'}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"Java"}
              description="Java Documentation"
              onClick={() => navigate("/JavaDocs")}
              paddingSize="xl"
              style={{width: '80vw'}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="10rem" alt="image" src={create} />}
              title={"R"}
              description="R Documentation"
              onClick={() => navigate("/RDocs")}
              paddingSize="xl"
              style={{width: '80vw'}}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
        
      </div>
    </EuiProvider>
  );
};

export default Docs;
