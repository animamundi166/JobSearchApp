export const transformResponse = (item) => {
  return {
    id: item.id,
    profession: item.profession,
    town: item.town.title,
    worktime: item.type_of_work.title,
    minPayment: item.payment_from,
    maxPayment: item.payment_to,
    currency: item.currency,
    description: item.vacancyRichText,
  }
}