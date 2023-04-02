import React, { useState, useEffect } from "react";
import {
  EuiProvider,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiBasicTable,
  EuiCopy,
  EuiButtonIcon,
  EuiBadge,
} from "@elastic/eui";
import { Link } from "react-router-dom";
import moment from "moment";
import { MeetingType } from "../lib/Types";
import { query, where, getDocs } from "firebase/firestore";
import { useAppSelector } from "../app/hooks";
import useAuth from "../hooks/useAuth";
import { meetingRef } from "../lib/firebase";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
// import EditFlyout from '../components/EditFlyout'

const MyMeeting = () => {
  const navigate = useNavigate();
  useAuth();
  const [meetings, setMeetings] = useState<any>([]);
  const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);

  useEffect(() => {
    
    if (uid) {
      const getUsersMeetings = async () => {
        const firestoreQuery = query(meetingRef);
        const fetchedMeetings = await getDocs(firestoreQuery);
        if (fetchedMeetings.docs.length) {
          const myMeetings: Array<MeetingType> = [];
          fetchedMeetings.forEach((meeting) => {
            const data = meeting.data() as MeetingType;
            if (data.createdBy === uid) myMeetings.push(data);
            else if (data.meetingType === "anyone-can-join")
              myMeetings.push(data);
            else {
              const index = data.invitedUsers.findIndex(
                (user : string) => user === uid
              );

              if (index! == -1) {
                myMeetings.push(data);
              }
            }
          });
          setMeetings(myMeetings)
        }
    }
    
        getUsersMeetings();
    }
  }, [uid]);

  const columns = [
    {
      field: "meetingName",
      name: "Meeting Name",
    },
    {
      field: "meetingType",
      name: "Meeting Type",
    },
    {
      field: "meetingDate",
      name: "Meeting Date",
    },
    {
      field: "",
      name: "Status",
      render: (meeting: MeetingType) => {
        if (meeting.status) {
          if (meeting.meetingDate === moment().format("L")) {
            return (
              <EuiBadge color="success">
                <Link
                  style={{ color: "black" }}
                  to={`/join/${meeting.meetingId}`}
                >
                  Join
                </Link>
              </EuiBadge>
            );
          } else if (
            moment(meeting.meetingDate).isBefore(moment().format("L"))
          ) {
            return <EuiBadge color="default">Ended</EuiBadge>;
          } else {
            return <EuiBadge color="primary">Upcoming</EuiBadge>;
          }
        } else {
          return (
            <EuiBadge color="danger" arial-label="Cancelled">
              Cancelled
            </EuiBadge>
          );
        }
      },
    },
    {
      field: "meetingId",
      name: "Copy Link ",
      render: (meetingId: string) => {
        return (
          <EuiCopy
            textToCopy={`${process.env.REACT_APP_HOST}/join/${meetingId}`}
          >
            {(copy: any) => (
              <EuiButtonIcon
                iconType="copy"
                onClick={copy}
                aria-label="Meeting Link"
              />
            )}
          </EuiCopy>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />

      <EuiFlexGroup justifyContent="center" style={{ margin: "1rem" }}>
        <EuiFlexItem>
          <EuiPanel>
            <EuiBasicTable items={meetings} columns={columns} />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
      {/* {showEditFlyout && (
        <EditFlyout closeFlyout={closeEditFlyout} meetings={editMeeting} />
      )} */}
    </div>
  );
};

export default MyMeeting;
