import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import logo from "../assets/logo.png";
import {
  EuiHeader,
  EuiText,
  EuiTextColor,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
} from "@elastic/eui";
import { useAppSelector } from "../app/hooks";
import { firebaseAuth } from "../lib/firebase";
import {
  getCreatMeetingBreadCrumbs,
  getOneOnOneMeetingBreadCrumbs,
  getVideoConferenceBreadCrumbs,
  getMyMeetingsBreadCrumbs,
} from "../lib/breadCrumbs";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = useAppSelector((zoom) => zoom.auth.userInfo?.name);
  const [breadCrumbs, setBreadCrumbs] = useState([{ text: "Dashboard" }]);
  const [isResponsive, setIsResponsive] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    signOut(firebaseAuth);
  };

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/create")
      setBreadCrumbs(getCreatMeetingBreadCrumbs(navigate));
    else if (pathname === "/create1on1")
      setBreadCrumbs(getOneOnOneMeetingBreadCrumbs(navigate));
    else if (pathname === "/videocon")
      setBreadCrumbs(getVideoConferenceBreadCrumbs(navigate));
    else if (pathname == "/mymeetings")
      setBreadCrumbs(getMyMeetingsBreadCrumbs(navigate));
  }, [location, navigate]);

  const section = [
    {
      items: [
        <Link to="/dashboard">
          <EuiText>
            <img src={logo} alt="" />
          </EuiText>
        </Link>,
      ],
    },
    {
      items: [
        <>
          {username ? (
            <EuiText>
              <h3>
                Welcome Back,
                <EuiTextColor> {username} </EuiTextColor>
              </h3>
            </EuiText>
          ) : null}
        </>,
      ],
    },
    {
      items: [
        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          direction="row"
          style={{ gap: "2vw" }}
        >
          <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
            <EuiButton onClick={logout} fill size="s">
              {" "}
              Log Out
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>,
      ],
    },
  ];
  const responsiveSection = [
    {
      items: [
        <Link to="/dashboard">
          <EuiText>
            <h2 style={{ padding: "0 1vw", color: "white" }}>
              Dev<span style={{ color: "#62CDFF" }}>Meets</span>
            </h2>
          </EuiText>
        </Link>,
      ],
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 480) setIsResponsive(true);
  }, []);

  return (
    <>
      <EuiHeader
        style={{ minHeight: "8vh" }}
        theme="dark"
        sections={isResponsive ? responsiveSection : section}
      />
      <EuiHeader
        style={{ minHeight: "8vh" }}
        theme="dark"
        sections={[{ breadcrumbs: breadCrumbs }]}
      />
    </>
  );
};

export default Header;
