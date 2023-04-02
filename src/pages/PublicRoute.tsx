import React from 'react'
import '@elastic/eui/dist/eui_theme_light.css';

import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText } from '@elastic/eui';

import { EuiButton } from '@elastic/eui'
import { useNavigate } from 'react-router-dom';
import {
    EuiProvider,
} from "@elastic/eui";

const PublicRoute = () => {
    const navigate = useNavigate();

    return (
        <EuiProvider colorMode="dark">
            <EuiFlexGroup justifyContent="center" alignItems='center' style={{ width: '100vw', height: '100vh' }}>
                <EuiPanel paddingSize='xl' style={{ padding: "50px 60px", maxWidth: "800px", borderRadius: "30px", height: "200px" }}>
                    <EuiFlexGroup justifyContent='center' direction='column' alignItems='center'>
                        <EuiFlexItem grow={false}>
                            <EuiText style={{ fontSize: '80px', marginBottom: "30px", fontWeight: "700" }}>
                                Dev<span style={{ color: "blue" }}>Meets</span>
                            </EuiText>
                        </EuiFlexItem>

                        <EuiFlexItem grow={false}>
                            <EuiButton onClick={()=>{navigate('/login')}} fill style={{ width: '100px ' }}>Login</EuiButton>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexGroup>
        </EuiProvider>
    );
};

export default PublicRoute;






