function tambah() {
	let input1 = parseInt(document.getElementById("input1").value);
	let input2 = parseInt(document.getElementById("input2").value);
	let output = input1 + input2;
	document.getElementById("output").value = output;
}

function kurang() {
	let input1 = parseInt(document.getElementById("input1").value);
	let input2 = parseInt(document.getElementById("input2").value);
	let output = input1 - input2;
	document.getElementById("output").value = output;
}

function kali() {
	let input1 = parseInt(document.getElementById("input1").value);
	let input2 = parseInt(document.getElementById("input2").value);
	let output = input1 * input2;
	document.getElementById("output").value = output;
}

function bagi() {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    if (input2 === 0) {
        alert("Angka kedua tidak boleh nol!");
    } else {
        let output = input1 / input2;
        document.getElementById("output").value = output;
    }
}
    
function reset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("output").value = "";
}