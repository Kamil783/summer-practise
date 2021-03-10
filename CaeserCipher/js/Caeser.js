function shift_letter(letter, shift){

    var unVal = letter.charCodeAt(0);
    shift = parseInt(shift);

  	if(unVal >= 65 && unVal <= 90){
      	unVal = ((unVal - 65 + shift) % 26);
		if (unVal < 0) unVal = 91 + unVal;
		else unVal += 65;
    }
  	if(unVal >= 97 && unVal <= 122){
      unVal = ((unVal - 97 + shift) % 26);
    if (unVal < 0) unVal = 123 + unVal;
    else unVal += 97;
    }
    if(unVal >= 1040 && unVal <= 1071){
      unVal = ((unVal - 1040 + shift) % 32);
    if (unVal < 0) unVal = 1072 + unVal;
    else unVal += 1040;
    }
    if(unVal >= 1072 && unVal <= 1103){
      	unVal = ((unVal - 1072 + shift) % 32);
		if (unVal < 0) unVal = 1104 + unVal;
		else unVal += 1072;
    }

  	return String.fromCharCode(unVal);
}

function code(text, shift){
    var codedText = "";
    for (var i=0; i<text.length; i++){
      codedText += shift_letter(text[i], shift);
    }
	return codedText;
}

function decode(text, shift){
	return code(text, -shift);
}

function encrypt1(){  
    let shift = document.getElementById('shift').value;
    let text = document.getElementById('speech').value;
    document.getElementById('out').value = code(text,shift);
}

function encrypt2(){  
    let shift = document.getElementById('shift').value;
    let text = document.getElementById('in').value;
    document.getElementById('out2').value = code(text,shift);
}

function decrypt1(){  
    let shift = document.getElementById('shift').value;
    let text = document.getElementById('speech').value;
    document.getElementById('out').value = decode(text,shift);
}

function decrypt2(){  
    let shift = document.getElementById('shift').value;
    let text = document.getElementById('in').value;
    document.getElementById('out2').value = decode(text,shift);
}