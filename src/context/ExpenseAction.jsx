//   deletetrans
export const deletetrans = (id) => {
  return id;
};

//   savetrans
export const savetrans = (text, amount) => {
  return { id: crypto.randomUUID(), text: text, amount: +amount };
};

// edittrans
export const edittrans = (transactions) => {
  return transactions;
};

// updatetrans
export const updatetrans = (transactions) => {
  return transactions;
};
