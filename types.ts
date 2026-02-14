
// Added UserIntent enum required by StepIntent.tsx
export enum UserIntent {
  ChangeJobs = 'change_jobs',
  CareerConsult = 'career_consult',
  Hiring = 'hiring'
}

export enum EducationLevel {
  HighSchool = 'high_school',
  Vocational = 'vocational',
  University = 'university',
  Other = 'other'
}

export enum Timing {
  Within1Month = 'within_1_month',
  Within3Months = 'within_3_months',
  Sometime = 'sometime'
}

export enum SalaryExpectation {
  Under300 = 'under_300',
  Under450 = 'under_450',
  Over450 = 'over_450'
}

export interface FormData {
  age: number | string;
  education: EducationLevel | '';
  timing: Timing | '';
  salary: SalaryExpectation | '';
  hasHealthIssue: boolean | null;
  name: string;
  email: string;
  phone: string;
  // Added missing fields used in StepIntent and StepConcerns components
  intent: UserIntent | '';
  concerns: string[];
}

export const INITIAL_DATA: FormData = {
  age: '',
  education: '',
  timing: '',
  salary: '',
  hasHealthIssue: null,
  name: '',
  email: '',
  phone: '',
  // Initialized missing fields
  intent: '',
  concerns: []
};

export interface StepProps {
  data: FormData;
  updateData: (fields: Partial<FormData>) => void;
  onNext: () => void;
  onBack?: () => void;
}
