import { useState } from "react";
import {
  EuiProvider,
  EuiFlexGroup,
  EuiForm,
  EuiSpacer,
  EuiFormRow,
  EuiSwitch,
} from "@elastic/eui";
import moment from "moment";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import MeetingMaximumUsers from "../components/FormComponent/MeetingMaximumUsers"
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
import useToast from "../hooks/useToast";

const VideoConference = () => {
  useAuth();
  const [users] = useFetchUsers();
  const [createToast] = useToast();
  const navigate = useNavigate();
  const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);
  const [meetingName, setMeetingName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<Array<UserType>>([]);
  const [startDate, setStartDate] = useState(moment());
  const [size, setSize] = useState(1);
  const [anyoneCanJoin, setAnyoneCanJoin] = useState(false);
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

  const onUserChange = (selectedOptions: Array<UserType>) => {
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
        meetingType: anyoneCanJoin ? "anyone-can-join" : "video-conference ",
        invitedUsers: anyoneCanJoin
          ? []
          : selectedUsers.map((user: UserType) => user.uid),
        meetingDate: startDate.format("L"),
        maxUsers: anyoneCanJoin ? 100 : size,
        status: true,
      });
      createToast({
        title: anyoneCanJoin
          ? "You are assigned with a meet of Video Conference"
          : "Video Conference Created",
        type: "success",
      });
      navigate("/dashboard");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <EuiFlexGroup justifyContent="center" alignItems="center">
        <EuiForm>
          <EuiFormRow display="columnCompressedSwitch" label="Anyone Can Join">
            <EuiSwitch
              showLabel={false}
              label="Anycan can join"
              checked={anyoneCanJoin}
              onChange={(e) => setAnyoneCanJoin(e.target.checked)}
            />
          </EuiFormRow>
          <UserNameField
            label="Meeting Name"
            placeholder="Meeting Name"
            value={meetingName}
            setMeetingName={setMeetingName}
            isInvalid={showErrors.meetingName.show}
            error={showErrors.meetingName.message}
          />

          {anyoneCanJoin ? (
            <MeetingMaximumUsers value={size} setValue={setSize}  />
          ) : (
            <UsersMeetName
              label=" Invite for the Meet"
              placeholder="Invite for 1 on 1 "
              options={users}
              onChange={onUserChange}
              selectedOptions={selectedUsers}
              singleSelection={false}
              isClearable={false}
              isInvalid={showErrors.meetingUser.show}
              error={showErrors.meetingUser.message}
            />
          )}

          <MeetDateField selected={startDate} setStartDate={setStartDate} />
          <EuiSpacer />
          <CreateMeetingButton createMeeting={createMeeting} />
        </EuiForm>
      </EuiFlexGroup>
    </div>
  );
};

export default VideoConference;
