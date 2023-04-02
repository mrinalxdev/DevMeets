import { BreadCrumbsType } from "./Types";
import { NavigateFunction } from "react-router-dom";

export const getCreatMeetingBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/dashboard");
    },
  },
  { text: "Generate Meeting" },
];


export const getOneOnOneMeetingBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/dashboard");
    },
  },
  {
    text: "Create Meeting",
    href: "#",
    onClick: () => {
      navigate("/create");
    },
  },
  {
    text: "Create 1 on 1 Meeting",
  },
];

export const getVideoConferenceBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/dashboard");
    },
  },
  {
    text: "Generate Meeting",
    href: "#",
    onClick: () => {
      navigate("/videocon");
    },
  },
  {
    text: "Video Conference",
  },
];

export const getMyMeetingsBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/dashboard");
    },
  },
  {
    text: "My Meeting",
  },
];