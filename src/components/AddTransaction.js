import React from "react";
import "./AddTransaction.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { newTransaction } from "./Store/Slices/TransactionsSlice";

const AddTransaction = () => {
  let dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const addData = (data) => {
    reset();
    let id = Math.random() * 10000
    let newData = {...data, id}
    dispatch(newTransaction(newData))
  }
  return (
    <div className="addTransactionMain">
      <form onSubmit={handleSubmit(addData)}>
        <input type="text" {...register('purpose', {required : true})} placeholder="Enter Purpose of Transaction"></input>
        <input type="number" {...register('amount', {required : true})} placeholder="Enter Amount"></input>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
