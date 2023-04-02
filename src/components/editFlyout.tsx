// import {
//   EuiFlyout,
//   EuiFlyoutBody,
//   EuiFlyoutHeader,
//   EuiForm,
//   EuiFormRow,
//   EuiSpacer,
//   EuiSwitch,
//   EuiTitle,
// } from "@elastic/eui";
// import { firebaseDB } from "../lib/firebase";
// import React, { useState, useEffect } from "react";
// import { FieldErrorType, MeetingType, UserType } from "../lib/Types";
// import { useAppSelector } from "../app/hooks";
// import moment from "moment";
// import useFetchUsers from "../hooks/useFetchUsers";
// import useAuth from "../hooks/useAuth";
// import useToast from "../hooks/useToast";
// import { doc, updateDoc } from "firebase/firestore";
// import CreateMeetingButton from "./FormComponent/CreateMeetingButton";
// import MeetDateField from "./FormComponent/MeetDateField";
// import MeetingMaximumUsers from "./FormComponent/MeetingMaximumUsers";
// import UserNameField from "./FormComponent/UserNameField";
// import UsersMeetName from "./FormComponent/UsersMeetName";


// const EditFlyout = ({
//   closeFlyout,
//   meetings,
// }: {
//   closeFlyout: any;
//   meetings: MeetingType;
// }) => {
//   useAuth();
//   const [users] = useFetchUsers();
//   const [createToast] = useToast();

//   // const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);
//   const [meetingName, setMeetingName] = useState(meetings.meetingName)
//   const [selectedUsers, setSelectedUsers] = useState<Array<UserType>>([]);
//   const [startDate, setStartDate] = useState(moment(meetings.meetingDate));
//   const [size, setSize] = useState(1);
//   const [status, setStatus] = useState(false);
//   const [meetingType] = useState(meetings.meetingType);
//   // const [anyoneCanJoin, setAnyoneCanJoin] = useState(false);
//   const [showErrors] = useState<{
//     meetingName: FieldErrorType;
//     meetingUser: FieldErrorType;
//   }>({
//     meetingName: {
//       show: false,
//       message: [],
//     },
//     meetingUser: {
//       show: false,
//       message: [],
//     },
//   });

//   useEffect(() => {
//     if (users) {
//       const foundUsers: Array<UserType> = [];
//       meetings.invitedUsers.forEach(( users : string ) => {
//         const findUser = users.find(
//           (tempUser: UserType) => tempUser.uid === users
//         );
//         if (findUser) foundUsers.push(findUser);
//       });
//       setSelectedUsers(foundUsers)
//     }
//   }, [meetings, users]);

//   const onUserChange = (selectedOptions: Array<UserType>) => {
//     setSelectedUsers(selectedOptions);
//   };

//   // const validateForm = () => {
//   //   let errors = false;
//   //   const clonedShowErrors = { ...showErrors };

//   //   if (!meetingName.length) {
//   //     clonedShowErrors.meetingName.show = true;
//   //     clonedShowErrors.meetingName.message = ["Please Enter a Valid Name"];
//   //     errors = true;
//   //   } else {
//   //     clonedShowErrors.meetingName.show = false;
//   //     clonedShowErrors.meetingName.message = [];
//   //   }
//   //   if (!selectedUsers.length) {
//   //     clonedShowErrors.meetingUser.show = true;
//   //     clonedShowErrors.meetingUser.message = ["Please Enter a Valid User"];
//   //   } else {
//   //     clonedShowErrors.meetingUser.show = false;
//   //     clonedShowErrors.meetingUser.message = [];
//   //   }
//   //   setShowErrors(clonedShowErrors);
//   //   return errors;
//   // };

//   const editMeeting = async () => {
//     const editedMeeting = {
//       ...meetings,
//       meetingName,
//       meetingType,
//       invitedUsers: selectedUsers.map((user: UserType) => user.uid),
//       maxUsers: size,
//       meetingDate: startDate.format("L"),
//       status: !status,
//     };
//     delete editedMeeting.docId;
//     const docRef = doc(firebaseDB, "meetings", meetings.docId!);
//     await updateDoc(docRef, editedMeeting);
//     createToast({ title: "Meeting updated successfully.", type: "success" });
//     closeFlyout(true);
//   };

//   return (
//     <EuiFlyout ownFocus onClose={() => closeFlyout()}>
//     <EuiFlyoutHeader hasBorder>
//       <EuiTitle size="m">
//         <h2>{meetings.meetingName}</h2>
//       </EuiTitle>
//     </EuiFlyoutHeader>
//     <EuiFlyoutBody>
//       <EuiForm>
//         <UserNameField
//           label="Meeting name"
//           isInvalid={showErrors.meetingName.show}
//           error={showErrors.meetingName.message}
//           placeholder="Meeting name"
//           value={meetingName}
//           setMeetingName={setMeetingName}
//         />
//         {meetingType === "anyone-can-join" ? (
//           <MeetingMaximumUsers value={size} setValue={setSize} />
//         ) : (
//           <UsersMeetName
//             label="Invite Users"
//             isInvalid={showErrors.meetingUser.show}
//             error={showErrors.meetingUser.message}
//             options={users}
//             onChange={onUserChange}
//             selectedOptions={selectedUsers}
//             singleSelection={
//               meetingType === "1-on-1" ? { asPlainText: true } : false
//             }
//             isClearable={false}
//             placeholder="Select a Users"
//           />
//         )}
//         <MeetDateField selected={startDate} setStartDate={setStartDate} />
//         <EuiFormRow display="columnCompressedSwitch" label="Cancel Meeting">
//           <EuiSwitch
//             showLabel={false}
//             label="Cancel Meeting"
//             checked={status}
//             onChange={(e) => setStatus(e.target.checked)}
//           />
//         </EuiFormRow>
//         <EuiSpacer />
//         <CreateMeetingButton
//           createMeeting={editMeeting}
//           isEdit
//           closeFlyout={closeFlyout}
//         />
//       </EuiForm>
//     </EuiFlyoutBody>
//   </EuiFlyout>
//   );
// };

// export default EditFlyout;
import React from 'react'

const editFlyout = () => {
  return (
    <div>editFlyout</div>
  )
}

export default editFlyout