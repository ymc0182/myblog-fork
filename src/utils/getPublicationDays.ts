export function getPublicationDays(puDate: Date, upDate?: Date){
  const dateToCompare = upDate || puDate;
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - dateToCompare.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return Math.floor(daysDifference);
}