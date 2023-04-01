import React from "react";
import {
  EuiProvider,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiSpacer,
  EuiText,
  EuiButton,
  EuiPanel,
} from "@elastic/eui";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { firebaseAuth, userRef } from "../lib/firebase";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../app/slices/AuthSlice";
import animation from "../assets/animation.gif";
import logo from "../assets/logo.png";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/dashboard')
  })


  const login = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName, email, uid },
    } = await signInWithPopup(firebaseAuth, provider);
    if (email) {
      const firestoreQuery = query(userRef, where("uid", "==", uid));
      const fetchedUsers = await getDocs(firestoreQuery);
      if (fetchedUsers.docs.length === 0) {
        await addDoc(userRef, {
          uid,
          name: displayName,
          email,
        });
      }
    }
    dispatch(setUser({ uid, name: displayName, email }));
    navigate("/dashboard");
  };

  return (
    <EuiProvider colorMode="dark">
      <EuiFlexGroup
        alignItems="center"
        justifyContent="center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <EuiFlexItem grow={false}>
          <EuiPanel paddingSize="xl">
            <EuiFlexGroup justifyContent="center" alignItems="center">
              <EuiFlexItem>
                <EuiImage
                  src={animation}
                  alt="DevMeet"
                  size="550px"
                  style={{ borderRadius: "20px 140px" }}
                />
              </EuiFlexItem>
              <EuiFlexItem style={{ borderRadius: "30px" }}>
                <EuiImage src={logo} alt="DevMeet" size="230px" />
                <EuiSpacer size="xs" />
                <EuiText textAlign="center" grow={false}>
                  <h3>Lets make your day more productive.</h3>
                </EuiText>
                <EuiSpacer size="l" />
                <EuiButton fill onClick={login} style= {{ textDecoration : 'none'}}>
                  Login With Google
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
};

export default UserLogin;
