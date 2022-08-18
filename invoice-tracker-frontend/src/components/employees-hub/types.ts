export type columnTypes = {
  id: boolean;
  nationalId: boolean;
  englishName: boolean;
  arabicName: boolean;
  englishAddress: boolean;
  arabicAddress: boolean;
  jobTitle: boolean;
  joiningDate: boolean;
  endDate: boolean;
  allowedBalance: boolean;
  remainingBalance: boolean;
  billable: boolean;
  isDisabled: boolean;
  team: boolean;
  fulltime: boolean;
};

export type employeeType = {
  id: number;
  nationalId: string;
  englishName: string;
  arabicName: string;
  englishAddress: string;
  arabicAddress: string;
  jobTitle: string;
  joiningDate: Date;
  endDate: Date;
  allowedBalance: number;
  remainingBalance: number;
  billable: boolean;
  isDisabled: boolean;
  team: string[];
  fulltime: boolean;
};

export type employeesType = {
  employees: {
    id: number;
    nationalId: string;
    englishName: string;
    arabicName: string;
    englishAddress: string;
    arabicAddress: string;
    jobTitle: string;
    joiningDate: Date;
    endDate: Date;
    allowedBalance: number;
    remainingBalance: number;
    billable: boolean;
    isDisabled: boolean;
    team: string[];
    fulltime: boolean;
  }[];
};

export default columnTypes;
