import React, { useReducer } from "react";
import { editorIds, IActionType, IGlobalState, linkTypes } from "../constants";
import { reducer } from "./Reducer";

export const StateContext = React.createContext({
    state: null as IGlobalState,
    dispatch: null as (value: IActionType) => void,
});

const initialLinks = [
    {
        type: linkTypes.mobile,
        url: "tel:+44 7880 835937",
        text: "+44 7880 835937",
    },
    {
        type: linkTypes.mail,
        url: "mailto:akshatg1274@hotmail.com",
        text: "akshatg1274@hotmail.com",
    },
    {
        type: linkTypes.github,
        url: "https://github.com/gakshat14",
        text: "gakshat14",
    },
    {
        type: linkTypes.linkedin,
        url: "https://www.linkedin.com/in/gakshat14/",
        text: "gakshat14",
    },
    {
        type: linkTypes.datacamp,
        url: "https://www.datacamp.com/profile/akshatoverload",
        text: "akshatoverload",
    },
];

console.log(editorIds.company_name);

const initialState: IGlobalState = {
    header: {
        firstName: "Akshat",
        lastName: "Gupta",
        designations: ["Software Engineer", "Neophyte Data Scientist"],
        address: "705A, Chantry Court, Denmark St., Bristol - BS1 5DH",
        links: initialLinks,
    },
    companyName: "",
    companyPerson: "Hiring manager",
    companyAddress: "",
    para1: window.localStorage.getItem(editorIds.para1) ?? "",
    para2: window.localStorage.getItem(editorIds.para2) ?? "",
    para3: window.localStorage.getItem(editorIds.para3) ?? "",
    para4: window.localStorage.getItem(editorIds.para4) ?? "",
    para5: window.localStorage.getItem(editorIds.para5) ?? "",
    job_portal: "",
    position: "",
    company_message: "",
};

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export function GlobalStateContext(props: IProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {props.children}
        </StateContext.Provider>
    );
}
