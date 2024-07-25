function generatePersonalNumber(employees) {
    let employeeData = {};

    employees.forEach(name => {
        const personalNum = name.length;

        employeeData[name] = personalNum;
    });

    for (const employee in employeeData) {
        console.log(`Name: ${employee} -- Personal Number: ${employeeData[employee]}`)
    }
}

let employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

generatePersonalNumber(employees);