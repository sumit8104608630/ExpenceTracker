
let textInput =document.getElementById("text");
const historyContainer = document.querySelector('#history');
let amountInput =document.getElementById("amount");

let option=document.getElementById("type");
let expenseAmountValue=document.getElementById("expenseAmount");
let incomeAmountValue=document.getElementById("incomeAmount")
let totalAmount=document.getElementById("totalAmount");
const income=(textInput,amountInput)=>{
let currentAmount=Number(totalAmount.innerText)
let incomeAmount=Number(amountInput);
let totalIncome=incomeAmount+currentAmount;



if(totalIncome<0){
    return alert("Gareeb")
}else{
    totalAmount.innerText=totalIncome
    incomeAmountValue.innerText=totalIncome
    let historyIncome=document.createElement("span");
    historyIncome.innerText=textInput
    let historyIncomeValue=document.createElement("span");
    historyIncomeValue.innerText=incomeAmount
    historyIncomeValue.classList.add("plus");
    let historyLi=document.createElement("li")
    let now=new Date;
    const formatDate=now.toLocaleString('en-US', {
            dateStyle: 'medium',  // e.g., "Jan 10, 2025"
            timeStyle: 'short'    // e.g., "12:34 PM"
          });
    let todayDate=document.createElement("span")
    todayDate.innerText=formatDate
    historyLi.appendChild(todayDate)
    historyLi.appendChild(historyIncome);
    historyLi.appendChild(historyIncomeValue);
    historyLi.classList.add("historyItems")
    document.getElementById("transaction-list").appendChild(historyLi)

}

}
const expense = (textInput, amountInput) => {
    let currentAmount = Number(totalAmount.innerText);
    let expenseAmount = Number(amountInput);
    let totalIncome = currentAmount - expenseAmount;

    if (totalIncome < 0) {
        return alert("Gareeb");
    } else {
        totalAmount.innerText = totalIncome;
        incomeAmountValue.innerText = `${totalIncome}`;

        // Update the current expense amount
        let currentExpense = Number(expenseAmountValue.innerText);
        expenseAmountValue.innerText = currentExpense + expenseAmount;

        // Add to history
        let historyExpenseTest = document.createElement("span");
        historyExpenseTest.innerText = textInput;

        let historyExpenseValue = document.createElement("span");
        historyExpenseValue.innerText = expenseAmount;
        historyExpenseValue.classList.add("minus");

        let historyLi = document.createElement("li");

        let now = new Date();
        const formatDate = now.toLocaleString('en-US', {
            dateStyle: 'medium',  // e.g., "Jan 10, 2025"
            timeStyle: 'short'    // e.g., "12:34 PM"
        });

        let todayDate = document.createElement("span");
        todayDate.innerText = formatDate;

        historyLi.appendChild(todayDate);
        historyLi.appendChild(historyExpenseTest);
        historyLi.appendChild(historyExpenseValue);
        historyLi.classList.add("historyItems");

        document.getElementById("transaction-list").appendChild(historyLi);
    }
};

const addTransition=()=>{
    if([option.value,amountInput.value].some(item=>item=="")){return}


    if(option.value==="income"){
        const listItem=historyContainer.querySelectorAll("li");
        if(listItem.length>1){
            historyContainer.classList.add("history"); 
        }
        else{
            historyContainer.classList.remove(  'history');
        }
       return income(textInput.value,amountInput.value);
    }
    else{

        return expense(textInput.value,amountInput.value)

    }
}