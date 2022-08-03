import { stringToDate } from "../utils/utils";

export const userInfo = {
  username: "vyagutta@vyagutta.com",
  Password: "vyagutta",
};

export const patientMockData = {
  firstName: "Jon",
  lastname: "Doe",
  email: "jondoe@email.com",
  DOB: stringToDate("1980-08-08"),
  gender: "male",
  ethnicity: "Asian",
  address: {
    street: "45ST",
    city: "Bhanktapur",
    provience: "Provience3",
  },
  payment: {
    insurenceId: "QWE12",
    memberId: "12SD",
    InsurenceProvider: "Insurence",
  },
  document: {} as File,
};
