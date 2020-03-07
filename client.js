let employeeArray = [];
const maxMonthlyBudget = 20000;

$(document).ready(readyNow)

function readyNow() {
    console.log('in readyNow');

    //append employees to DOM upon page load
    appendEmployee();

    //call clickEvent function when "Submit" button is clicked
    $('#btn-add').on('click', clickEvent);
}

function addEmployee(firstName, lastName, id, title, salary) {
    console.log('in addEmployee');
    let employeeObject = { firstName, lastName, id, title, salary }
    employeeArray.push(employeeObject);

}

function clickEvent(event) {
    console.log('in clickEvent');
    event.preventDefault();
    //set variables to inputs
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#numberIDInput').val();
    let title = $('#jobTitleInput').val();
    let salary = $('#annualSalaryInput').val();


    //add employees
    addEmployee(firstName, lastName, id, title, salary);
    console.log('All employees:', employeeArray);

    //append employees to the DOM
    appendEmployee();

    //clear inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#numberIDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');

    //run calculateMonthlyBudget
    calculateMonthlyBudget();
}

function appendEmployee() {
    console.log('in appendEmployee');
    let $tbody = $('#employee-data');
    //empty tr element
    $tbody.empty();
    for(let employee of employeeArray) {
        let $tr = $(`<tr><td>${employee.id}</td><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.title}</td><td>${employee.salary}</td></tr>`);
        $tbody.append($tr);
    }
}

function calculateMonthlyBudget() {
    console.log('in calculateMonthlyBudget');
    let totalMonthlyBudget = 0;
    for (let employee of employeeArray) {
        totalMonthlyBudget += Math.round(Number(employee.salary)/12);
    } //end for loop
    let el = $('#budgetOut');
    el.empty();
    el.append(totalMonthlyBudget);
    //if statement to test budget against max budget
    if(totalBudget > maxMonthlyBudget) {}
}