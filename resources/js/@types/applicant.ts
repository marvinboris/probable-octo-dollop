export type Applicant = {
    id: string;
    first_name: string;
    last_name: string;
    job: string;
    city: string;
    country: string;
    degree: string;
    experience: number;
    email: string;
    photo?: string;
    password?: string;
    password_confirmation?: string;
    resume?: string;
    phone: string;
    biography: string;
    availability: number;
    birthdate?: string;
    gender?: string;
    marital_status?: string;
    nationality?: string;
    nid_number?: string;
    nid_validity?: string;
    address?: string;
    trainings?: ApplicantTraining[];
    certificates?: ApplicantCertificate[];
    skills?: ApplicantSkill[];
    languages?: ApplicantLanguage[];
    job_history?: ApplicantJob[];
};

export type ApplicantTraining = {
    diploma: string;
    school: string;
    year: string;
    specialty: string;
};

export type ApplicantCertificate = {
    name: string;
    organization: string;
    year: string;
};

export type ApplicantSkill = {
    name: string;
};

export type ApplicantLanguage = {
    name: string;
    level: string;
};

export type ApplicantJob = {
    position: string;
    company: string;
    field: string;
    period_start: string;
    period_end: string;
};
