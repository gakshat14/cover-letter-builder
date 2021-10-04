import React, { useContext } from 'react';
import { StateContext } from '../../GlobalState/StateContext';

export function Salutation() {
    const { state } = useContext(StateContext);
    return (
        <>
            Dear {state.companyPerson},
            <br />
            {state.companyName}
            <br />
            <pre>
                {state.companyAddress}
            </pre>
        </>
    );
}