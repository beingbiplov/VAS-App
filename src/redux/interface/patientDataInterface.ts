interface addressInterface {
  street: string;
  city: string;
  provience: string;
}

interface paymentInterface {
  insurenceId: string;
  memberId: string;
  insurenceProvider: string;
}

export interface patientDataInterface {
  firstName: string;
  lastname: string;
  email: string;
  date_of_birth: string;
  gender: string;
  ethnicity: string;
  address: addressInterface;
  payment: paymentInterface;
  document: File;
}
