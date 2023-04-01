import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiProvider, EuiGlobalToastList } from "@elastic/eui";
import { Routes, Route } from "react-router-dom";
import MyMeeting from "./pages/MyMeeting";
import UserDashboard from "./pages/UserDashboard";
import UserLogin from "./pages/UserLogin";
import CreateMeeting from "./pages/CreateMeeting";
import OneOnOneMeeting from "./pages/OneOnOneMeeting";
import VideoConference from "./pages/VideoConference";
import ErrorPage from "./pages/ErrorPage";
import Quiz from "./pages/Quiz/Quiz";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./app/hooks";
import { setToasts } from "./app/slices/MeetingSlice";

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
        <Route path="/" element={"Hello this is Public Route"} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/create" element={<CreateMeeting />} />
        <Route path="/create1on1" element={<OneOnOneMeeting />} />
        <Route path="/videocon" element={<VideoConference />} />
        <Route path="/mymeetings" element={<MyMeeting />} />
        <Route path="/meetings" element={"This is Meeting Section"} />
        <Route path="/engage" element={"This is Engage Page"} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<ErrorPage />} />
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
