export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString("es-PE", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};


export const formatDateFromObject = (date: { seconds: number, nanos: number }) => {
  return new Date(date.seconds * 1000).toLocaleDateString("es-PE", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}