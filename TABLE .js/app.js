// var a = {
//     firstname: 'muhammad',
//     lastname: 'usman',
//     age: 19,
// }

// var div = document.createElement('div');

let div = document.querySelector('body');

var userData = [
    { ID: 1, fName: "user 1", fatherName: "user 1 fater", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
    { ID: 2, fName: "user 2", fatherName: "user 2 fater", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
    { ID: 3, fName: "user 3", fatherName: "user 3 fater", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
    { ID: 4, fName: "user 4", fatherName: "user 4 fater", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
    { ID: 5, fName: "user 5", fatherName: "user 5 fater", email: "abc@gmail.com", address: "xyz road karachi", designation: "Manager", experience: "3 Years experience", salary: 000, },
]

let tableheader = [Id, FName, FatherName, Email, Address, Destination, Experience, Salary];

let table = document.createElement('table');
let thead = document.createElement('tr');

tableheader.forEach(headerText => {
    let  header = document.createElement('th');
    let textNode = document.createTextNode(headertext);
    header.appendChild(textNode);
    thead.appendChild(header);
});

table.appendChild(thead);

userData.forEach(udata => {
    let trow = document.createElement('tr');

    Object.values(udata).forEach(text => {
       
    let tData = document.createElement('td');
    let textnode = document.createTextNode(text);
    tData.appendChild(textNode);
    trow.appendChild(tData);

    });
    table.appendChild('trow');
});

div.appendChild(table);