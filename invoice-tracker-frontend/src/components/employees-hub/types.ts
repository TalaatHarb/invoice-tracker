export type employeeType = {
  id: number;
  employeeId:number;
  nationalId: string;
  englishName: string;
  arabicName: string;
  email:string;
  mobileNumber:string;
  englishAddress: string;
  arabicAddress: string;
  jobTitle: string;
  joiningDate: Date;
  endDate: Date;
  allowedBalance: number;
  remainingBalance: number;
  billable: boolean;
  disabled: boolean;
  team: {id:number;
  name:string}[];
  fullTime: boolean;
  resigned:boolean
};
