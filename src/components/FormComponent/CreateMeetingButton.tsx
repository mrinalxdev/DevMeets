import React from 'react'
import { EuiButton, EuiFlexItem, EuiFlexGroup } from '@elastic/eui'
import { useNavigate } from 'react-router-dom'

const CreateMeetingButton = ( { createMeeting } : {
    createMeeting : () => void
} ) => {

    const navigate = useNavigate()

  return (
    <EuiFlexGroup>
        <EuiFlexItem grow={false}>
            <EuiButton fill color='danger' onClick={() => navigate('/dashboard')}>
                Cancel
            </EuiButton>
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
            <EuiButton fill onClick={createMeeting}>
                Submit
            </EuiButton>
        </EuiFlexItem>
    </EuiFlexGroup>
  )
}

export default CreateMeetingButton