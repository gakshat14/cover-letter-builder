import React, { useContext } from 'react';
import { HeaderLinks } from './HeaderLinks';
import './header.css';
import { linkTypes } from '../../constants';
import { StateContext } from '../../GlobalState/StateContext';

const linksIcon = {
    [linkTypes.mail]: <i className="fa fa-envelope">&nbsp;&nbsp;</i>,
    [linkTypes.github]: <i className="fa fa-github"></i>,
    [linkTypes.mobile]: <i className="fa fa-mobile"></i>,
    [linkTypes.linkedin]: <i className="fa fa-linkedin"></i>,
    [linkTypes.datacamp]: <svg viewBox="0 0 26 34" height="15" width="15">
        <path d="M14.001 25.028v-7.224l11.393-6.498-2.77-1.588-8.623 4.918V7.391c0-.491-.265-.95-.69-1.194L2.938.245a1.974 1.974 0 00-2.006.06A1.98 1.98 0 000 1.992v20.375c0 .69.35 1.321.934 1.687a1.973 1.973 0 002.002.061l8.317-4.743v6.457c0 .494.266.952.695 1.196l10.658 6.067 2.771-1.589-11.376-6.475zm-2.748-16.84v8.016l-8.504 4.85V3.31l8.504 4.88z" fill="#000" fillRule="evenodd"></path>
    </svg>
}

export function Header() {

    const { state } = useContext(StateContext)

    function renderDesignation(): string {
        let designationString = '';
        state.header.designations.map((designation, index) => {
            if (index !== 0) {
                designationString += ` · `;
            }
            designationString += designation;
        })
        return designationString;
    }

    return (
        <header>
            <h1><span>{state.header.firstName}</span> {state.header.lastName}</h1>
            <h2>{renderDesignation().toUpperCase()}</h2>
            <address>{state.header.address}</address>
            <ul className='links'>{state.header.links.map((link) => <HeaderLinks key={`header_link_${link.type}`} {...link} icon={link.icon ? link.icon : linksIcon[link.type]} />)}</ul>
        </header>
    )
}
