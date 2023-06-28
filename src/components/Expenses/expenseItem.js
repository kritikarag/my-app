import './expenseItem.css';
import ExpenseDate from './expenseDate';
import Card from '../UI/card';
function ExpenseItem(props){ 
    
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item_description">
                <h3>{props.title}</h3>
            </div>
            <div className="expense-item_price">
                ${props.amount}
            </div>
        </Card>
    );
}

export default ExpenseItem;