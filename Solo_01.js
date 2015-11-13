function Employee(name, id, salary, rating) {
	this.name = name;
	this.id = id;
	this.salary = salary;
	this.rating = rating;

}

var atticus = new Employee("Atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);


var employees = [];
employees.push(atticus);
employees.push(jem);
employees.push(boo);
employees.push(scout);


function reward(Employee) {
	var sti = 0
	var totalBonus = 0
	var id = Employee.id
	var rating = Employee.rating;
	var longTerm = id.length;
	var salary = parseInt(Employee.salary);

	if (rating === 3) {
		sti = 4
	} else if (rating === 4) {
		sti = 6
	} else if (rating === 5) {
		sti = 10
	} else if (rating <= 2) {
		sti = 0
	}
	console.log(salary);
	if (longTerm >= 4) {
		sti += 5;
	}

	if (salary > 65000) {
		sti -= 1;
	}

	if (sti >= 13) {
		sti = 13;
	}

	return [Employee.name, sti, Math.ceil(salary + sti * salary / 100), Math.ceil(sti * salary / 100)];
}

for (var i = 0; i < employees.length; i++) {
	console.log(reward(employees[i]));
}






// Evaluating Employee Data

// Write a function that consumes one employee object, and returns another object that contains

//     employees name
//     percentage of STI the employee is to receive
//     adjusted annual compensation (base annual + STI)
//     employee's total bonus rounded to the nearest dollar

// See instructions for calculating the STI below.
// Calculating an employee's STI

//     Those who have a rating of a 2 or below should not receive a bonus.
//     Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
//     Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
//     Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
//     If they have 4 employee numbers, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
//     However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
//     No bonus can be above 13% total.