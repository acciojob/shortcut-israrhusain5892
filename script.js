function shortcut(s1, s2) {
  // your code here
	let string="";
	string+=s1.slice(0,1)+s2.slice(0,1);
	return string;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
