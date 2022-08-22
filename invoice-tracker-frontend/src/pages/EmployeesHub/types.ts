export type employeeFilterType = {
  id?: number;
  nationalId?: string;
  englishName?: string;
  arabicName?: string;
  englishAddress?: string;
  arabicAddress?: string;
  jobTitle?: string;
  joiningDate?: Date;
  endDate?: Date;
  allowedBalance?: number;
  remainingBalance?: number;
  billable?: boolean;
  isDisabled?: boolean;
  team?: string[];
  fulltime?: boolean;
};
