import React from 'react';
import { Editor } from './Editor/Editor';
import { GlobalStateContext } from './GlobalState/StateContext';
import { RenderedView } from './RenderedCover/RenderedView';

export function App() {

    return(
        <GlobalStateContext>
            <main id="root_main"><RenderedView /></main>
            <aside id="root_aside"><Editor /></aside>
        </GlobalStateContext>
    );
}
