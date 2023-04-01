import React from "react";
import { EuiFormRow, EuiFieldNumber } from "@elastic/eui";

const MeetingMaximumUsers = ({
  value,
  setValue,
}: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <EuiFormRow label="Maximum People">
      <EuiFieldNumber
        placeholder="Maximum People"
        min={0}
        max={50}
        value={value}
        onChange={(e) => {
          if (!e.target.value.length || +e.target.value === 0) setValue(1);
          else if (+e.target.value > 50) setValue(50);
          else setValue(+e.target.value);
        }}
      />
    </EuiFormRow>
  );
};

export default MeetingMaximumUsers;
