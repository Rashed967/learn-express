import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuarndian,
  Student,
  UserName,
} from './student.interface';

// username schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// guardian shcema

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOcupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOcupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

// local guardian schema
const localGuardianSchema = new Schema<LocalGuarndian>({
  name: { type: String, required: true },
  ocupation: { type: String, required: true },
  contactno: { type: String, required: true },
  address: { type: String, required: true },
});

// student schema

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'male'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNO: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

// student model
export const StudentModel = model<Student>('Student', studentSchema);
