export const dateStringToPrettyDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
};