export default function useFormatDate() {
  const formatDate = date => new Date(date).toJSON().split("T")[0]

  return formatDate
}
