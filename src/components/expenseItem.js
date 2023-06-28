import './expenseItem.css';
import ExpenseDate from './expenseDate';
function ExpenseItem(props){ 
    
    return (
        <div className="expense-item">
            <div>
                {props.date.toISOString()}
            </div>
            <div className="expense-item_description">
                <h3>{props.title}</h3>
            </div>
            <div className="expense-item_price">
                ${props.amount}
            </div>
        </div>
    );
}

export default ExpenseItem;