import './expenseDate.css';
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const date = props.date.toLocaleString('en-US',{month:'2-digit'});
    const year = props.date.getfullYear();
    return(
        <div name='expense-date'>
            <div name='expense-date_month'>{month}</div>
            <div name='expense-date_year'>{date}</div>
            <div name='expense-date_day'>{year}</div>
        </div>
    );
}

export default ExpenseDate;