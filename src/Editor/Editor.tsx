import React, { useContext } from 'react';
import { Actions } from '../constants';
import { StateContext } from '../GlobalState/StateContext';

const enum editorIds {
    hiring_name = 'hiring_name',
    company_name = 'company_name',
    company_address = 'company_address',
    job_portal = 'job_portal',
    position = 'position',
    para1 = 'para1',
    para2 = 'para2',
    para3 = 'para3',
    para4 = 'para4',
    para5 = 'para5',
    company_message = 'company_message'
}

export function Editor() {

    const {state, dispatch} = useContext(StateContext);

    function onFieldChange(e: React.ChangeEvent<any>) {
        switch (e.target.id) {
            case editorIds.company_address:
                dispatch({type: Actions.CHANGE_COMPANY_ADDRESS, payload: {companyAddress: e.target.value}})
                break;
            case editorIds.company_name:
                dispatch({type: Actions.CHANGE_COMPANY_NAME, payload: {companyName: e.target.value}})
                break;
            case editorIds.hiring_name:
                dispatch({type: Actions.CHANGE_COMPANY_PERSON, payload: {companyPerson: e.target.value}})
                break;
            case editorIds.job_portal:
                dispatch({type: Actions.CHANGE_JOB_PORTAL, payload: {job_portal: e.target.value}})
                break;
            case editorIds.position:
                dispatch({type: Actions.CHANGE_POSITION, payload: {position: e.target.value}})
                break;
            case editorIds.para1:
                dispatch({type: Actions.CHANGE_PARA1, payload: {para1: e.target.value}})
                break;
            case editorIds.para2:
                dispatch({type: Actions.CHANGE_PARA2, payload: {para2: e.target.value}})
                break;
            case editorIds.para3:
                dispatch({type: Actions.CHANGE_PARA3, payload: {para3: e.target.value}})
                break;
            case editorIds.para4:
                dispatch({type: Actions.CHANGE_PARA4, payload: {para4: e.target.value}})
                break;
            case editorIds.para5:
                dispatch({type: Actions.CHANGE_PARA5, payload: {para5: e.target.value}})
                break;
            case editorIds.company_message:
                dispatch({type: Actions.CHANGE_COMPANY_MESSAGE, payload: {company_message: e.target.value}})
                break;
            default:
                break;
        }
    }

    return (
        <form action="">
            <div className="form-group">
                <label htmlFor={editorIds.hiring_name}>Hiring person</label>
                <input onChange={onFieldChange} value={state.companyPerson} type="text" id={editorIds.hiring_name} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.company_name}>Company Name</label>
                <input onChange={onFieldChange} value={state.companyName} type="text" id={editorIds.company_name} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.company_address}>Address</label>
                <textarea onChange={onFieldChange} value={state.companyAddress} name="company_address" id={editorIds.company_address} cols={30} rows={10} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.job_portal}>Job Portal</label>
                <input onChange={onFieldChange} value={state.job_portal} type="text" id={editorIds.job_portal} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.position}>Position</label>
                <input onChange={onFieldChange} value={state.position} type="text" id={editorIds.position} />
            </div>
            <ul>
                <li>Add {'<company_name>'} where you want to add company name</li>
                <li>Add {'<job_portal>'} to add job portal dynamically</li>
                <li>Add {'<job_position>'} to add job position</li>
                <li>Add {'<company_message>'} where you want to add company specific message</li>
            </ul>
            <div className="form-group">
                <label htmlFor={editorIds.company_message}>company specific information/ or place to fill in {'<company_message>'}</label>
                <textarea onChange={onFieldChange} value={state.company_message} name="intro_para" id={editorIds.company_message} cols={30} rows={10} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.para1}>Intro para</label>
                <textarea onChange={onFieldChange} value={state.para1} name="intro_para" id={editorIds.para1} cols={30} rows={10} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.para2}>Why good fit</label>
                <textarea onChange={onFieldChange} value={state.para2} name="why_good_fit" id={editorIds.para2} cols={30} rows={10} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.para3}>why did you choose what you choose</label>
                <textarea onChange={onFieldChange} value={state.para3} name="make_more_valid" id={editorIds.para3} cols={30} rows={10} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.para4}>Talk about your analytical skills</label>
                <textarea onChange={onFieldChange} value={state.para4} name="make_more_valid" id={editorIds.para4} cols={30} rows={10} />
            </div>
            <div className="form-group">
                <label htmlFor={editorIds.para5}>Final Begging para</label>
                <textarea onChange={onFieldChange} value={state.para5} name="final_para" id={editorIds.para5} cols={30} rows={10} />
            </div>
        </form>
    )
}
