export interface ILinks {
    url: string;
    text: string;
    type: string;
    icon?: JSX.Element;
}

export interface IHeaderState {
    firstName: string;
    lastName: string;
    designations: string[];
    address: string;
    links: ILinks[];
}

export interface IGlobalState {
    header: IHeaderState;
    companyName: string;
    companyPerson: string;
    companyAddress: string;
    job_portal: string;
    position: string;
    para1: string;
    para2: string;
    para3: string;
    para4: string;
    para5: string;
    company_message: string;
    name: string;
    contactNumber: string;
    address_line_1: string;
    address_line_2: string;
    zipcode: number;
    email: string;
}

export enum Actions {
    CHANGE_COMPANY_NAME = 'CHANGE_COMPANY_NAME',
    CHANGE_COMPANY_ADDRESS = 'CHANGE_COMPANY_ADDRESS',
    CHANGE_COMPANY_PERSON = 'CHANGE_COMPANY_PERSON',
    CHANGE_PARA1 = 'CHANGE_PARA1',
    CHANGE_PARA2 = 'CHANGE_PARA2',
    CHANGE_PARA3 = 'CHANGE_PARA3',
    CHANGE_PARA4 = 'CHANGE_PARA4',
    CHANGE_PARA5 = 'CHANGE_PARA5',
    CHANGE_JOB_PORTAL = 'CHANGE_JOB_PORTAL',
    CHANGE_POSITION = 'CHANGE_POSITION',
    CHANGE_COMPANY_MESSAGE = 'CHANGE_COMPANY_MESSAGE'
}

export interface IActionType {
    type: Actions;
    payload: Partial<IGlobalState>;
}

export enum linkTypes {
    mail = 'mail',
    github = 'github',
    mobile = 'mobile',
    linkedin = 'linkedin',
    datacamp = 'datacamp'
}

export const enum editorIds {
    hiring_name = "hiring_name",
    company_name = "company_name",
    company_address = "company_address",
    job_portal = "job_portal",
    position = "position",
    para1 = "para1",
    para2 = "para2",
    para3 = "para3",
    para4 = "para4",
    para5 = "para5",
    company_message = "company_message",
    name = 'name',
    email = 'email',
    contactNumber = 'contactNumber',
    addressLine1 = 'Address'
}

/**
 * A function to store data in the local storage for a given key
 * @param {string} key this will be used to store the data in the local storage
 * @param {T} data genric data but will be stored as a string 
 */
export function saveToLocalStorage(key: string, data: string) {
    window.localStorage.setItem(key, data);
}

/**
 * A function to retrieve the data for the key passed
 * @param {string} key this will be used to retrieve data from the local storage 
 * @returns {string} data for the key passed
 */
export function retrieveFromLocalStorage(key: string): string {
    return window.localStorage.getItem(editorIds.company_address)
}