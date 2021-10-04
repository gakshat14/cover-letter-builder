import React from 'react';
import { Header } from './Header/Header';
import { Salutation } from './Salutation/Salutation';
import {Para} from './Paras/Para';

export function RenderedView() {
    return(
        <>
            <Header />
            <main id='render_main'>
                <Salutation />
                <Para />
                Kind Regards,
                <br />
                Akshat Gupta
                <br />
                <a href="tel:+447880835937">+447880835937</a>
            </main>
        </>
    );
}
