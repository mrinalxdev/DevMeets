import React, { useState, useEffect } from "react";
import { EuiProvider, EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";
import { MeetingType } from "../lib/Types";
import { query, where, getDocs } from "firebase/firestore";
import { useAppSelector } from "../app/hooks";
import useAuth from "../hooks/useAuth";
import { meetingRef } from "../lib/firebase";
import Header from "../components/Header";

const MyMeeting = () => {
  useAuth();
  const [meetings, setMeetings] = useState<Array<MeetingType>>([]);
  const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);

  useEffect(() => {
    if (uid) {
      const getMyMeetings = async () => {
        const firestoreQuery = query(meetingRef, where("createdBy", "==", uid));
        const fetchedMeetings = await getDocs(firestoreQuery);

        if (fetchedMeetings.docs.length) {
          const myMeetings: Array<MeetingType> = [];
          fetchedMeetings.forEach((meeting) => {
            myMeetings.push({
              docId: meeting.id,
              ...(meeting.data() as MeetingType),
            });
          });
          setMeetings(myMeetings);
        }
      };
      console.log({ meetings });
      getMyMeetings();
    }
  }, [uid]);

  return (
    <EuiProvider colorMode="dark">
      <div
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <Header />

        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiPanel>
                    
                </EuiPanel>
            </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </EuiProvider>
  );
};

export default MyMeeting;
