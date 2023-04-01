import React, { useState } from "react";
import { EuiProvider } from '@elastic/eui'
import Header from '../../components/Header'
import "./index.css";
import { GameStateContext } from "./helpers/Contexts";
import Menu from "./QuizComp/Menu";
import MainQuiz from "./QuizComp/MainQuiz";
import EndScreen from "./QuizComp/EndScreen";

const Quiz = () => {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <EuiProvider colorMode='dark'>
      <Header />
      <div className="App">
        <GameStateContext.Provider
          value={{
            gameState,
            setGameState,
            userName,
            setUserName,
            score,
            setScore,
          }}
        >
          {gameState === "menu" && <Menu />}
          {gameState === "playing" && <MainQuiz />}
          {gameState === "finished" && <EndScreen />}
        </GameStateContext.Provider>
      </div>
    </EuiProvider>
  );
};

export default Quiz;
