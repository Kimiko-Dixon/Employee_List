// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  let isAddEmployee = true;

  // Check if the salary is a number
   const validSalary = function(inputSalary)
    {
      if (isNaN(inputSalary))
      {
        inputSalary = 0;
      }
      
      return parseInt(inputSalary);
    }

    // Create an employee object
    const Employee = function(firstName, lastName, salary)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = validSalary(salary);
    }
  
  // Array to hold the list of employee information
  const employeesArray = [];

  //Create a new employee object
  while(isAddEmployee)
  {
    
    // Assign values to the properties
    const firstName = prompt("Enter First Name: ");
    const lastName = prompt("Enter Last Name: ");
    const salary = (prompt("Enter Salary: "));

    const employee = new Employee(firstName, lastName, salary);

    // Add employee object to the array
    employeesArray.push(employee);

    // Continuation condition
    isAddEmployee = window.confirm("Do you want to add another employee?");
  }

  return employeesArray;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  
  let sum = 0;

  // Add salaries together
  for (const employee of employeesArray)
  {
    sum += employee.salary;
  }

  // Calculate average
  const average = sum / employeesArray.length;

  // Display salary rounded 2 decimal places
  console.log(`The average employee salary between out ${employeesArray.length} employee(s) is $${average.toFixed(2)}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  // Generate a random number as the index
  const pickedEmployee = Math.floor(Math.random() * employeesArray.length);

  // Display the employee's name at the random index
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
