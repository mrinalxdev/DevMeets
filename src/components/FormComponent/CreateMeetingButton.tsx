import React from "react";
import { EuiButton, EuiFlexItem, EuiFlexGroup } from "@elastic/eui";
import { useNavigate } from "react-router-dom";

const CreateMeetingButton = ({
  createMeeting,
  isEdit = false,
  closeFlyout,
}: {
  createMeeting: () => {};
  isEdit?: boolean;
  closeFlyout?: () => {};
}) => {
  const navigate = useNavigate();

  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton
          fill
          color="danger"
          onClick={() => (isEdit ? closeFlyout!() : navigate("/"))}
        >
          Cancel
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton fill onClick={createMeeting}>
        {isEdit ? "Edit Meeting" : "Create Meeting"}
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default CreateMeetingButton;
