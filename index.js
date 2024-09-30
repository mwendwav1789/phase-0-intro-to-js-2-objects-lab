// Write your solution in this file!
// Function to update an employee object with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee, // Spread operator to create a clone of the original employee object
    [key]: value, // Add the new key-value pair
  };
}

// Function to update an employee object with a new key-value pair (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; // Directly modify the original employee object
  return employee;
}

// Function to delete a key from an employee object (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // Clone the original employee object
  delete newEmployee[key]; // Delete the key from the clone
  return newEmployee;
}

// Function to delete a key from an employee object (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; // Directly modify the original employee object
  return employee;
}

// Example usage:
const employee = {
  name: "John Doe",
  role: "Developer",
};

// 1) Non-destructive update
const updatedEmployee = updateEmployeeWithKeyAndValue(
  employee,
  "salary",
  50000
);
console.log("Updated Employee (non-destructive):", updatedEmployee); // { name: "John Doe", role: "Developer", salary: 50000 }
console.log("Original Employee:", employee); // { name: "John Doe", role: "Developer" }

// 2) Destructive update
destructivelyUpdateEmployeeWithKeyAndValue(employee, "salary", 50000);
console.log("Updated Employee (destructive):", employee); // { name: "John Doe", role: "Developer", salary: 50000 }

// 3) Non-destructive delete
const employeeWithoutRole = deleteFromEmployeeByKey(employee, "role");
console.log("Employee without role (non-destructive):", employeeWithoutRole); // { name: "John Doe", salary: 50000 }
console.log("Original Employee:", employee); // { name: "John Doe", role: "Developer", salary: 50000 }

// 4) Destructive delete
destructivelyDeleteFromEmployeeByKey(employee, "role");
console.log("Employee without role (destructive):", employee); // { name: "John Doe", salary: 50000 }
