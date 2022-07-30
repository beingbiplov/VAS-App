import moment from "moment";

export const stringToDate = (dateValue: string): object | string => {
  if (dateValue) {
    let date = moment(dateValue, "YYYY-MM-DD");
    return date;
  }
  return "";
};
