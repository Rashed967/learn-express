export type Guardian = {
  fatherName: string;
  fatherOcupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOcupation: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuarndian = {
  name: string;
  ocupation: string;
  contactno: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNO: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuarndian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
