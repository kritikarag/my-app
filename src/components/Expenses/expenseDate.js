import './expenseDate';
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
    return(
        <div name="expense-date">
            <div name="expense-date_month">{month}</div>
            <div name="expense-date_year">{day}</div>
            <div name="expense-date_day">{year}</div>
        </div>
    );
}

export default ExpenseDate;