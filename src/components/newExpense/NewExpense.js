import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from "react";

const NewExpense = (props) => {

    const [displayForm, setDisplayForm] = useState(false);

    const onBtnClick = () => {
        setDisplayForm(true);
    }

    const stopEditing = () => {
        setDisplayForm(false);
    }


    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onExpense(expenseData);
        setDisplayForm(false);
    }

    return <div className='new-expense'>
        { !displayForm && (<button onClick={onBtnClick}>Add new expense</button>) }
        { displayForm && (<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditing}/>)}
    </div>
};

export default NewExpense;