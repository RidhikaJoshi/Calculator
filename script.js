let str = "";
let res = document.getElementById("res");
let ac = document.getElementById("AC");
let zero = document.getElementById("zero");
let doublezero = document.getElementById("double-zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let del = document.getElementById("delete");
let mod = document.getElementById("mod");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let equal = document.getElementById("equal");
let decimal = document.getElementById("decimal");

ac.onclick = () => {
	str = "";
	res.innerHTML = 0;
};
zero.onclick = () => {
	str += "0";
	res.innerHTML = str;
};
doublezero.onclick = () => {
	str += "00";
	res.innerHTML = str;
};
one.onclick = () => {
	str += "1";
	res.innerHTML = str;
};
two.onclick = () => {
	str += "2";
	res.innerHTML = str;
};
three.onclick = () => {
	str += "3";
	res.innerHTML = str;
};
four.onclick = () => {
	str += "4";
	res.innerHTML = str;
};
five.onclick = () => {
	str += "5";
	res.innerHTML = str;
};
six.onclick = () => {
	str += "6";
	res.innerHTML = str;
};
seven.onclick = () => {
	str += "7";
	res.innerHTML = str;
};
eight.onclick = () => {
	str += "8";
	res.innerHTML = str;
};
nine.onclick = () => {
	str += "9";
	res.innerHTML = str;
};
del.onclick = () => {
	str = str.slice(0, -1);
	if (str == "") res.innerHTML = 0;
	else res.innerHTML = str;
};
function isDigit(ch) {
	if (ch >= "0" && ch <= "9") return true;
	else return false;
}
mod.onclick = () => {
	if (str == "") {
		str += "0";
		str += "%";
	} else if (!isDigit(str[str.length - 1])) {
		str = str.slice(0, -1);
		str += "%";
	} else str += "%";
	res.innerHTML = str;
};
divide.onclick = () => {
	if (str == "") {
		str += "0";
		str += "/";
	} else if (!isDigit(str[str.length - 1])) {
		str = str.slice(0, -1);
		str += "/";
	} else str += "/";
	res.innerHTML = str;
};
multiply.onclick = () => {
	if (str == "") {
		str += "0";
		str += "*";
	} else if (!isDigit(str[str.length - 1])) {
		str = str.slice(0, -1);
		str += "*";
	} else str += "*";
	res.innerHTML = str;
};
add.onclick = () => {
	if (str == "") {
		str += "0";
		str += "+";
	} else if (!isDigit(str[str.length - 1])) {
		str = str.slice(0, -1);
		str += "+";
	} else str += "+";
	res.innerHTML = str;
};
subtract.onclick = () => {
	if (str == "") {
		str += "0";
		str += "-";
	} else if (!isDigit(str[str.length - 1])) {
		str = str.slice(0, -1);
		str += "-";
	} else str += "-";
	res.innerHTML = str;
};
decimal.onclick = () => {
	if (str == "") {
		str += "0";
		str += ".";
	} else if (!isDigit(str[str.length - 1])) {
		str += "0";
		str += ".";
	} else str += ".";
	res.innerHTML = str;
};
function isDigit(str) {
	return !isNaN(str) && !isNaN(parseFloat(str));
}
equal.onclick = () => {
	if (str == "") {
		res.innerHTML = 0;
		str = "";
	} else if (str[str.length - 1] == ".") {
		str = str.slice(0, -1);
		str = String(eval(str));
		res.innerHTML = String(eval(str));
	} else if (isDigit(str)) {
		res.innerHTML = str;
	} else if (!isDigit(str[str.length - 1])) {
		res.innerHTML = "Syntax Error";
		setTimeout(() => {
			res.innerHTML = 0;
		}, 1000);
		str = "";
	} else {
		res.innerHTML = String(eval(str));
		str = String(eval(str));
		if (str == "Infinity") {
			setTimeout(() => {
				res.innerHTML = 0;
			}, 1000);
			str = "";
		}
		console.log(typeof str);
	}
};
