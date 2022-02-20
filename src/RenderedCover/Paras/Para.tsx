import React, { useContext } from 'react';
import { StateContext } from '../../GlobalState/StateContext';

export function Para() {
    const {state} = useContext(StateContext)
    function returnParaString(paraString: string) {
        // para 1 contains <job_position> and <job_portal>
        // other paras might contain <company_name>
        // other paras might contain <company_specific_message>
        let newString = paraString;
        if (state.job_portal) {
            newString = newString.replace('<job_portal>', state.job_portal);
        }

        if(state.position) {
            newString = newString.replace('<job_position>', state.position);
        }

        if(state.companyName) {
            newString = newString.replace('<company_name>', state.companyName);
        }

        if(state.company_message) {
            newString = newString.replace('<company_message>', state.company_message);
        }

        return newString;
    }
    return(
        <>
            <p>{returnParaString(state.para1)}</p>
            <p>{returnParaString(state.para2)}</p>
            <pre>{returnParaString(state.para3)}</pre>
            <p>{returnParaString(state.para4)}</p>
            <p>{returnParaString(state.para5)}</p>
        </>
    );
}
