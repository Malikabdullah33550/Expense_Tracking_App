import { createSlice } from "@reduxjs/toolkit";

const TransactionSlice = createSlice({
  // needs 3 things. name, initial state and lastly reducers
  name: "transactions",
  initialState: {
    transactions: [],
    income: 0,
    expense: 0,
  },
  reducers: {
    newTransaction: (state, action) => {
        state.transactions.push(action.payload)
        let income = 0;
        let expense = 0;
        state.transactions.forEach((item) => {
            if(+item.amount> 0){
                income += +item.amount
            } else {
                expense += +item.amount;
            }
        })
        state.income = income;
        state.expense = expense;
    },
    deleteTransaction: (state, action) => {
      let id = action.payload
      state.transactions = state.transactions.filter(item => item.id !== id)
      let income = 0;
        let expense = 0;
        state.transactions.forEach((item) => {
            if(+item.amount> 0){
                income += +item.amount
            } else {
                expense += +item.amount;
            }
        })
        state.income = income;
        state.expense = expense;

    }
    // define all your function here
    // function format is like this function nameOfFunction(state,action){}
    // action.payload contains your date from the UI
  },
});


export const {newTransaction, deleteTransaction} = TransactionSlice.actions;
export default TransactionSlice.reducer;