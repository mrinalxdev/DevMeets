import React from "react";
import { EuiComboBox, EuiFormRow } from "@elastic/eui";

const UsersMeetName = ({
  label,
  options,
  onChange,
  selectedOptions,
  isClearable,
  placeholder,
  singleSelection = false,
  isInvalid,
  error,
}: {
  label: string;
  options: any;
  onChange: any;
  selectedOptions: any;
  isClearable: boolean;
  placeholder: string;
  singleSelection?: { asPlainText: boolean } | boolean;
  isInvalid: boolean;
  error: Array<string>;
}) => {
  return (
    <EuiFormRow label={label} isInvalid={isInvalid} error={error}>
      <EuiComboBox
        options={options}
        onChange={onChange}
        selectedOptions={selectedOptions}
        isClearable={isClearable}
        placeholder={placeholder}
        singleSelection = {singleSelection}
        isInvalid={isInvalid}
      />
    </EuiFormRow>
  );
};

export default UsersMeetName;
