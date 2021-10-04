import React from 'react';
import { ILinks } from '../../constants';

export function HeaderLinks(props: ILinks) {
    return (
        <li>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                {props.icon}
                &nbsp;&nbsp;{props.text}
            </a>
        </li>
    );
}
