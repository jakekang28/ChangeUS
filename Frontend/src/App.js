import styled from "styled-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./GlobalStyles";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";
import QuizDashboardPage from "./quiz-dashboard/QuizDashboardPage";
import QuizSolvePage from "./quiz-solve/QuizSolvePage";
import CharacterSelectionPage from "./pages/character-selection/CharacterSelectionPage";
import IntroPage from "./pages/intro/IntroPage";
import QuestionScreen from "./quiz-solve/components/QuestionScreen";
import AnswerScreen from "./quiz-solve/components/AnswerScreen";
import CommentScreen from "./quiz-solve/components/CommentScreen";
import { useEffect, useState } from "react";
import { useSessionStorage } from "./hook/useSessionStorage";
import { PrivateRoute } from "./PrivateRoute";
import NavBar from "./components/NavBar";
import AddChallenge from "./pages/challenges/AddChallenge";
import ChallengeDashboardPage from "./pages/challenges/ChallengeDashboardPage";
import ChallengeMain from "./pages/challenges/ChallengeMain";

function App() {
  const [user, setUser] = useState(() => sessionStorage.getItem("user"));
  // sessionStorage가 변경될 때 상태 업데이트
  useEffect(() => {
    const handleStorageChange = () => {
      setUser(sessionStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Container className="App">
      <BrowserRouter>
        <RecoilRoot>
          <MainContainer>
            <GlobalStyle />

            <Routes>
              <Route path="/" element={<MainPage />} />

              {/* <Route
                path="/login"
                element={user ? <Navigate to="/main" replace /> : <LoginPage />}
              /> */}

              
                <Route path="/main" element={<MainPage />} />
              
              <Route
                path="/character-selection"
                element={<CharacterSelectionPage />}
              />

              {/* 퀴즈 관련 화면 */}
              <Route path="/quiz-dashboard" element={<QuizDashboardPage />} />
              <Route path="/quiz-solve" element={<QuizSolvePage />} />
              <Route path="/quiz-solve/1" element={<QuestionScreen />} />
              <Route path="/quiz-solve/2" element={<AnswerScreen />} />
              <Route path="/quiz-solve/3" element={<CommentScreen />} />
              <Route path="/quiz-solve/4" element={<QuestionScreen />} />
              <Route path="/quiz-solve/5" element={<AnswerScreen />} />
              <Route path="/quiz-solve/6" element={<CommentScreen />} />
              <Route path="/challenge-post" element={<AddChallenge/>} />
              <Route path="/challenges-dashboard" element={<ChallengeDashboardPage/>}/>
              <Route path="/challenges-main" element={<ChallengeMain/>}/>
            </Routes>

            {window.location.pathname.includes("dashboard") && <NavBar />}
          </MainContainer>
        </RecoilRoot>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  min-width: 360px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
