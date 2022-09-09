// var a = {
//     firstname: 'muhammad',
//     lastname: 'usman',
//     age: 19,
// }

// var div = document.createElement('div');

let div = document.querySelector('body');

let userData = [
    { id: 1, fName: "user 4", fatherName: "user1fahter", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
    { id: 2, fName: "user 2", fatherName: "user2fahter", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
    { id: 3, fName: "user 5", fatherName: "user3fahter", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
    { id: 4, fName: "user 3", fatherName: "user4fahter", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
    { id: 5, fName: "user 1", fatherName: "user5fahter", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
]

let tableHeader = ['ID', 'Name', 'FatherName', 'Email', 'Address', 'Destination', 'Experience', 'Salary'];

let table = document.createElement('table');
let head = document.createElement('tr');

tableHeader.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    head.appendChild(header);
});

table.appendChild(head);

userData.forEach(uData => {
    let row = document.createElement('tr');

    Object.values(uData).forEach(text => {
       
    let tData = document.createElement('td');
    let textNode = document.createTextNode(text);
    tData.appendChild(textNode);
    row.appendChild(tData);

    });
    table.appendChild(row);
});

div.appendChild(table);