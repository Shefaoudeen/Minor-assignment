/* Control Flow */
/* Learn how to control the flow of a program using conditional statements and loops. */

/*Use if-else statements to implement decision-making.*/

let x = 20;

if (x % 2 == 0) {
  console.log(`${x} is an even number.`);
} else {
  console.log(`${x} is an odd number`);
}

/*Create a loop to iterate over an array and display each element.*/

let depts = ["ECE", "CSE", "IT", "EIE", "EEE", "CHEM", "MECH", "CIVIL"];

for (let i = 0; i < depts.length; i++) {
  console.log(`${depts[i]}\n`);
}

/*Use switch case statements to handle multiple conditions.*/

var mark = 95;

switch (mark) {
  case mark > 90:
    console.log(`You scored a S rank`);
    break;

  case mark > 80:
    console.log(`You scored an A rank`);
    break;

  case mark > 70:
    console.log(`You scored a B rank`);
    break;

  case mark > 60:
    console.log(`You scored a C rank`);
    break;

  case mark > 55:
    console.log(`You scored a D rank`);
    break;

  case mark > 50:
    console.log(`You scored a E rank`);
    break;

  case mark > 0:
    console.log(`You have failed`);
    break;

  default:
    console.log(`You scored a S rank`);
    break;
}
