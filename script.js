let total = 0;

function addExpense() {
  let name = document.getElementById("expenseName").value;
  let amount = document.getElementById("expenseAmount").value;

  if (name === "" || amount === "") {
    alert("Please enter both name and amount");
    return;
  }

  amount = parseFloat(amount);

  // Create list item
  let li = document.createElement("li");
  li.innerHTML = `${name} <span>$${amount}</span>`;

  document.getElementById("expenseList").appendChild(li);

  // Update total
  total += amount;
  document.getElementById("totalAmount").textContent = total;

  // Clear inputs
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}
