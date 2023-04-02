import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiProvider, EuiGlobalToastList } from "@elastic/eui";
import { Routes, Route } from "react-router-dom";
import MyMeeting from "./pages/MyMeeting";
import Meeting from "./pages/Meeting";
import UserDashboard from "./pages/UserDashboard";
import UserLogin from "./pages/UserLogin";
import PublicRoute from "./pages/PublicRoute";
import CreateMeeting from "./pages/CreateMeeting";
import OneOnOneMeeting from "./pages/OneOnOneMeeting";
import VideoConference from "./pages/VideoConference";
import ErrorPage from "./pages/ErrorPage";
import Quiz from "./pages/Quiz/Quiz";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./app/hooks";
import { setToasts } from "./app/slices/MeetingSlice";
import Engage from "./pages/Engage";
import Docs from "./pages/Docs";
import ReactDocs from "./pages/Docs/ReactDocs";
import JsDocs from "./pages/Docs/JsDocs";
import NextDocs from "./pages/Docs/NextDocs";
import TypeScriptDocs from "./pages/Docs/TypeScriptDocs";
import JavaDocs from "./pages/Docs/JavaDocs";
import RDocs from "./pages/Docs/RDocs";

function App() {
  const toasts = useAppSelector((zoom) => zoom.meetings.toasts);
  const dispatch = useDispatch();

  const removeToast = (removeToast: { id: string }) => {
    dispatch(
      setToasts(
        toasts.filter((toast: { id: string }) => toast.id !== removeToast.id)
      )
    );
  };

  return (
    <EuiProvider>
      <Routes>
        <Route path="/" element={<PublicRoute />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/create" element={<CreateMeeting />} />
        <Route path="/create1on1" element={<OneOnOneMeeting />} />
        <Route path="/videocon" element={<VideoConference />} />
        <Route path="/mymeetings" element={<MyMeeting />} />
        <Route path="/meetings" element={<Meeting />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/docs" element={< Docs/>} />
        <Route path="/ReactDocs" element={< ReactDocs/>} />
        <Route path="/JsDocs" element={< JsDocs/>} />
        <Route path="/NextDocs" element={< NextDocs/>} />
        <Route path="/TypeScriptDocs" element={< TypeScriptDocs/>} />
        <Route path="/JavaDocs" element={< JavaDocs/>} />
        <Route path="/RDocs" element={< RDocs/>} />
      </Routes>

      <EuiGlobalToastList
        toasts={toasts}
        dismissToast={removeToast}
        toastLifeTimeMs={2000}
      />
    </EuiProvider>
  );
}

export default App;
