import { Actions, IActionType, IGlobalState } from '../constants';

export function reducer(state: IGlobalState, action: IActionType): IGlobalState {
    switch (action.type) {
        case Actions.CHANGE_COMPANY_NAME:
            return {...state, companyName: action.payload.companyName}
        case Actions.CHANGE_COMPANY_PERSON:
            return {...state, companyPerson: action.payload.companyPerson}
        case Actions.CHANGE_COMPANY_ADDRESS:
            return {...state, companyAddress: action.payload.companyAddress}
        case Actions.CHANGE_JOB_PORTAL:
            return {...state, job_portal: action.payload.job_portal}
        case Actions.CHANGE_POSITION:
            return {...state, position: action.payload.position}
        case Actions.CHANGE_PARA1:
            return {...state, para1: action.payload.para1}
        case Actions.CHANGE_PARA2:
            return {...state, para2: action.payload.para2}
        case Actions.CHANGE_PARA3:
            return {...state, para3: action.payload.para3}
        case Actions.CHANGE_PARA4:
            return {...state, para4: action.payload.para4}
        case Actions.CHANGE_PARA5:
            return {...state, para5: action.payload.para5}
        case Actions.CHANGE_COMPANY_MESSAGE:
            return {...state, company_message: action.payload.company_message}
        default:
            return state;
    }
}