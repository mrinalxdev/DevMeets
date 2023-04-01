import { useState } from "react";
import { EuiProvider, EuiFlexGroup, EuiForm, EuiSpacer } from "@elastic/eui";
import moment from "moment";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import UserNameField from "../components/FormComponent/UserNameField";
import UsersMeetName from "../components/FormComponent/UsersMeetName";
import MeetDateField from "../components/FormComponent/MeetDateField";
import CreateMeetingButton from "../components/FormComponent/CreateMeetingButton";
import useAuth from "../hooks/useAuth";
import useFetchUsers from "../hooks/useFetchUsers";
import { FieldErrorType, UserType } from "../lib/Types";
import { generateMeetingId } from "../lib/generateMeetingId";
import { meetingRef } from "../lib/firebase";
import { useAppSelector } from "../app/hooks";
import useToast from '../hooks/useToast'

const OneOnOneMeeting = () => {
  useAuth();
  const [users] = useFetchUsers();
  const [createToast]  = useToast()
  const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);
  const [meetingName, setMeetingName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<Array<UserType>>([]);
  const [startDate, setStartDate] = useState(moment());
  const navigate = useNavigate();
  const [showErrors, setShowErrors] = useState<{
    meetingName: FieldErrorType;
    meetingUser: FieldErrorType;
  }>({
    meetingName: {
      show: false,
      message: [],
    },
    meetingUser: {
      show: false,
      message: [],
    },
  });

  const onUserChange = (selectedOptions:  Array<UserType>) => {
    setSelectedUsers(selectedOptions);
  };

  const validateForm = () => {
    let errors = false;
    const clonedShowErrors = { ...showErrors };

    if (!meetingName.length) {
      clonedShowErrors.meetingName.show = true;
      clonedShowErrors.meetingName.message = ["Please Enter a Valid Name"];
      errors = true;
    } else {
      clonedShowErrors.meetingName.show = false;
      clonedShowErrors.meetingName.message = [];
    }
    if (!selectedUsers.length) {
      clonedShowErrors.meetingUser.show = true;
      clonedShowErrors.meetingUser.message = ["Please Enter a Valid User"];
    } else {
      clonedShowErrors.meetingUser.show = false;
      clonedShowErrors.meetingUser.message = [];
    }
    setShowErrors(clonedShowErrors);
    return errors;
  };

  const createMeeting = async () => {
    if (!validateForm()) {
      const meetingId = generateMeetingId();
      await addDoc(meetingRef, {
        createdBy: uid,
        meetingId,
        meetingName,
        meetingType: "1-on-1",
        invitedUsers: [selectedUsers[0]?.uid],
        meetingDate: startDate.format("L"),
        maxUsers: 1,
        status: true,
      });
      createToast({
        title : 'You are Assigned with Meet', type : "success",
      })
      navigate("/dashboard");
    }
  };

  return (

      <div
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <Header />
        <EuiFlexGroup justifyContent="center" alignItems="center">
          <EuiForm>
            <UserNameField
              label="Meeting Name"
              placeholder="Meeting Name"
              value={meetingName}
              setMeetingName={setMeetingName}
              isInvalid={showErrors.meetingName.show}
              error={showErrors.meetingName.message}
            />
            <UsersMeetName
              label=" Invite for the Meet"
              placeholder="Invite for 1 on 1 "
              options={users}
              onChange={onUserChange}
              selectedOptions={selectedUsers}
              singleSelection={{ asPlainText: true }}
              isClearable={false}
              isInvalid={showErrors.meetingUser.show}
              error={showErrors.meetingUser.message}
            />
            <MeetDateField selected={startDate} setStartDate={setStartDate} />
            <EuiSpacer />
            <CreateMeetingButton createMeeting={createMeeting} />
          </EuiForm>
        </EuiFlexGroup>
      </div>
    
  );
};

export default OneOnOneMeeting;
