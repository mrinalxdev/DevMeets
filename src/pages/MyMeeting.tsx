import React, { useState, useEffect } from "react";
import { EuiProvider, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiBasicTable } from "@elastic/eui";
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

  const columns = [
    { 
      field : 'meetingName',
      name : 'Meeting Name',
    },
    {
      field : 'meetingType',
      name : 'Meeting Type',
    },
    {
      field : 'meetingDate', 
      name : 'Meeting Date'
    },
    {
      field : '',
      name : 'Status',
    },
    {
      field : '',
      name :'Edit'
    },
    {
      field : 'meetingId',
      name : 'Copy Link '
    }
  ]


  return (
    
      <div
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <Header />

        <EuiFlexGroup justifyContent='center' style={{ margin : '1rem'}}>
            <EuiFlexItem>
                <EuiPanel>
                    <EuiBasicTable 
                    items= {meetings}
                    columns= {columns}
                    />
                </EuiPanel>
            </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    
  );
};

export default MyMeeting;
