import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // Se pueden usar tanto state individuales (comentados) o multiples (no comentados). Preferiblemente individual

  const [enteredTitle, setEnteredTitle] = useState(""); // Se inializa a vacio porque al principio siempre esta vacio
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //    enteredTitle: '',
  //    enteredAmount: '',
  //    enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //    ...userInput, // Lo que hace es coger key y value del object y con el de abajo hace override en el title
    //    enteredTitle: event.target.value,
    // });
    // If your state update depends on the previous state use this function form (Es igual que las demas)
    // setUserInput((prevState) => {
    //    return { ...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //    ...userInput, // Lo que hace es coger key y value del object y con el de abajo hace override en el title
    //    enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //    ...userInput, // Lo que hace es coger key y value del object y con el de abajo hace override en el title
    //    enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // hace que no se refresque la pagina al hacer submit

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Para pasar datos de un hijo al padre utilizamos una funcion creada en el padre mediante props
    props.onSaveExpenseData(expenseData);
    // vaciamos el input una vez hecho submit (metemos la variable en el value del input)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
