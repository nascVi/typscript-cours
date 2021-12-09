// The format of the date would be only numbers and slashes, then the file here'd been necessary.

export const dateStringToDate = (dateString: string): Date => {
  // Tue Oct 19 2021
  const dateParts = dateString.split(' ').map((value: string): string => {
    return value;
  }); // {'24','12','2021'}
  return new Date(dateParts[3]);
};
