export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'San Francisco'
};
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'San Francisco'
};
const studentsList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const trHead: HTMLTableRowElement = document.createElement('tr');

const thFirstName: HTMLTableCellElement = document.createElement('th');
thFirstName.innerHTML = 'firstName';
const thLastName: HTMLTableCellElement = document.createElement('th');
thLastName.innerHTML = 'lastName';
const thAge: HTMLTableCellElement = document.createElement('th');
thAge.innerHTML = 'age';
const thLocation: HTMLTableCellElement = document.createElement('th');
thLocation.innerHTML = 'location';

trHead.appendChild(thFirstName);
trHead.appendChild(thLastName);
trHead.appendChild(thAge);
trHead.appendChild(thLocation);
thead.appendChild(trHead);
table.appendChild(thead);

studentsList.forEach((student: Student) => {
    const trBody: HTMLTableRowElement = document.createElement('tr');
    const tdFirstName: HTMLTableCellElement = document.createElement('td');
    tdFirstName.innerHTML = student.firstName;
    const tdLastName: HTMLTableCellElement = document.createElement('td');
    tdLastName.innerHTML = student.lastName;
    const tdAge: HTMLTableCellElement = document.createElement('td');
    tdAge.innerHTML = student.age.toString();
    const tdLocation: HTMLTableCellElement = document.createElement('td');
    tdLocation.innerHTML = student.location;

    trBody.appendChild(tdFirstName);
    trBody.appendChild(tdLastName);
    trBody.appendChild(tdAge);
    trBody.appendChild(tdLocation);
    tbody.appendChild(trBody);
});
table.appendChild(tbody);
document.body.appendChild(table);
