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
}

export enum Actions{
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
