// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  let isAddEmployee = true;

   const validSalary = function(inputSalary)
    {
      if (isNaN(inputSalary))
      {
        inputSalary = 0;
      }
      
      return parseInt(inputSalary);
    }

    const Employee = function(firstName, lastName, salary)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = validSalary(salary);
    }
  
  const employeesArray = [];

  while(isAddEmployee)
  {
    
    const firstName = prompt("Enter First Name: ");
    const lastName = prompt("Enter Last Name: ");
    const salary = (prompt("Enter Salary: "));

    const employee = new Employee(firstName, lastName, salary);

    employeesArray.push(employee);

    isAddEmployee = window.confirm("Do you want to add another employee?");
  }

  return employeesArray;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  
  let sum = 0;
  for (const employee of employeesArray)
  {
    sum += employee.salary;
  }

  const average = sum / employeesArray.length;

  console.log(`The average employee salary between out ${employeesArray.length} employee(s) is $${average.toFixed(2)}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  const pickedEmployee = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations to ${employeesArray[pickedEmployee].firstName} ${employeesArray[pickedEmployee].lastName}, our random drawing winner! `)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
