import React from 'react';
import { Header } from './Header/Header';
import { Salutation } from './Salutation/Salutation';
import { Para } from './Paras/Para';
import { Footer } from './Footer/Footer';

export function RenderedView() {
    return (
        <>
            <Header />
            <main id='render_main'>
                <Salutation />
                <Para />
                <Footer />
            </main>
        </>
    );
}
