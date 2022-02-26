import React, { useContext } from 'react';
import { StateContext } from '../../GlobalState/StateContext';

export function Footer() {
    const { state } = useContext(StateContext);
    return (
        <footer>
            Kind Regards,
            <br />
            {state.name}
            <br />
            <a href="tel:+447880835937">+447880835937</a>
        </footer>
    );
}