// VARIABLES
var start,
	end,
	delta,
	k1lastClick = 0,
	k2lastClick = 0,
	k3lastClick = 0,
	k4lastClick = 0,
	k5lastClick = 0,
	k6lastClick = 0,
	k7lastClick = 0,
	k8lastClick = 0,
	k9lastClick = 0,
	k10lastClick = 0,
	k11lastClick = 0,
	k12lastClick = 0,
	lastClick = 0,
	k1 = 0,
	k2 = 0,
	k3 = 0,
	k4 = 0,
	k5 = 0,
	k6 = 0,
	k7 = 0,
	k8 = 0,
	k9 = 0,
	k10 = 0,
	k11 = 0,
	k12 = 0;
var append = "",
	screen = "";
var flag = false;

// EVENTLISTNERS

// 	backspace
document.getElementById("backspace").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("backspace").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		screen = screen.slice(0, -1);
	} else {
		screen = "";
	}
	document.getElementById("screen").innerHTML = screen;
});

// 1. key1
document.getElementById("key1").addEventListener("click", function () {
	screen += "1";
	document.getElementById("screen").innerHTML = screen;
});
// 2. key2
document.getElementById("key2").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key2").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		if (end - k2lastClick < 1000) {
			if (k2 % 3 == 0) {
				append = "a";
				k2 += 1;
			} else if (k2 % 3 == 1) {
				append = "b";
				k2 += 1;
			} else {
				append = "c";
				k2 += 1;
			}
		} else {
			k2 = 0;
			append = "a";
			k2 += 1;
		}
		k2lastClick = end;
	} else {
		append = "2";
	}
	flag = true;
	k2lastClick = end;
	lastClick = end;
});

// 3. key3
document.getElementById("key3").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key3").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		if (end - k3lastClick < 1000) {
			if (k3 % 3 == 0) {
				append = "d";
				k3 += 1;
			} else if (k3 % 3 == 1) {
				append = "e";
				k3 += 1;
			} else {
				append = "f";
				k3 += 1;
			}
		} else {
			k3 = 0;
			append = "d";
			k3 += 1;
		}
		k3lastClick = end;
	} else {
		append = "3";
	}
	flag = true;
	k3lastClick = end;
	lastClick = end;
});

// 4. key4
document.getElementById("key4").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key4").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		if (end - k4lastClick < 1000) {
			if (k4 % 3 == 0) {
				append = "g";
				k4 += 1;
			} else if (k4 % 3 == 1) {
				append = "h";
				k4 += 1;
			} else {
				append = "i";
				k4 += 1;
			}
		} else {
			k4 = 0;
			append = "g";
			k4 += 1;
		}
		k4lastClick = end;
	} else {
		append = "4";
	}
	flag = true;
	k4lastClick = end;
	lastClick = end;
});

// 5. key5
document.getElementById("key5").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key5").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		if (end - k5lastClick < 1000) {
			if (k5 % 3 == 0) {
				append = "j";
				k5 += 1;
			} else if (k5 % 3 == 1) {
				append = "k";
				k5 += 1;
			} else {
				append = "l";
				k5 += 1;
			}
		} else {
			k5 = 0;
			append = "j";
			k5 += 1;
		}
		k5lastClick = end;
	} else {
		append = "5";
	}
	flag = true;
	k5lastClick = end;
	lastClick = end;
});

// 6. key6
document.getElementById("key6").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key6").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		if (end - k6lastClick < 1000) {
			if (k6 % 3 == 0) {
				append = "m";
				k6 += 1;
			} else if (k6 % 3 == 1) {
				append = "n";
				k6 += 1;
			} else {
				append = "o";
				k6 += 1;
			}
		} else {
			k6 = 0;
			append = "m";
			k6 += 1;
		}
		k6lastClick = end;
	} else {
		append = "6";
	}
	flag = true;
	k6lastClick = end;
	lastClick = end;
});

// 7. key7
document.getElementById("key7").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key7").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		if (end - k7lastClick < 1000) {
			if (k7 % 4 == 0) {
				append = "p";
				k7 += 1;
			} else if (k7 % 4 == 1) {
				append = "q";
				k7 += 1;
			} else if (k7 % 4 == 2) {
				append = "r";
				k7 += 1;
			} else {
				append = "s";
				k7 += 1;
			}
		} else {
			k7 = 0;
			append = "p";
			k7 += 1;
		}
		k7lastClick = end;
	} else {
		append = "7";
	}
	flag = true;
	k7lastClick = end;
	lastClick = end;
});

// 8. key8
document.getElementById("key8").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key8").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		if (end - k8lastClick < 1000) {
			if (k8 % 3 == 0) {
				append = "t";
				k8 += 1;
			} else if (k8 % 3 == 1) {
				append = "u";
				k8 += 1;
			} else {
				append = "v";
				k8 += 1;
			}
		} else {
			k8 = 0;
			append = "t";
			k8 += 1;
		}
		k8lastClick = end;
	} else {
		append = "8";
	}
	flag = true;
	k8lastClick = end;
	lastClick = end;
});

// 9. key9
document.getElementById("key9").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key9").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		if (end - k9lastClick < 1000) {
			if (k9 % 4 == 0) {
				append = "w";
				k9 += 1;
			} else if (k9 % 4 == 1) {
				append = "x";
				k9 += 1;
			} else if (k9 % 4 == 2) {
				append = "y";
				k9 += 1;
			} else {
				append = "z";
				k9 += 1;
			}
		} else {
			k9 = 0;
			append = "w";
			k9 += 1;
		}
		k9lastClick = end;
	} else {
		append = "9";
	}
	flag = true;
	k9lastClick = end;
	lastClick = end;
});

// 10. key10
document.getElementById("key10").addEventListener("mousedown", function () {
	start = new Date().getTime();
});
document.getElementById("key10").addEventListener("mouseup", function () {
	end = new Date().getTime();
	delta = end - start;
	if (delta < 500) {
		append = "*";
	} else {
		append = "+";
	}
	screen += append;
	document.getElementById("screen").innerHTML = screen;
});

// 11. key11
document.getElementById("key11").addEventListener("click", function () {
	append = "0";
	screen += append;
	document.getElementById("screen").innerHTML = screen;
});

// 12. key 12
document.getElementById("key12").addEventListener("click", function () {
	append = "#";
	screen += append;
	document.getElementById("screen").innerHTML = screen;
});

// FUNCTIONS

window.setInterval(function checkToAppend() {
	console.log("hey");
	var currentTime = new Date().getTime();
	if (currentTime - lastClick >= 1000 && flag == true) {
		screen += append;
		document.getElementById("screen").innerHTML = screen;
		flag = false;
	}
}, 50);
