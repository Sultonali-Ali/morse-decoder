const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letterNumeric = '';
    let letterMorse = '';
    let result = '';

    for(let i = 0; i < expr.length / 10; i++) {
        letterNumeric = expr.substr(i * 10, 10);
        if (letterNumeric === '**********') {
            result += ' ';
        } else {
            for (let j = 0; j < letterNumeric.length / 2; j++) {
                if (letterNumeric.substr(j * 2, 2) === '10') {
                    letterMorse += '.';
                } else if (letterNumeric.substr(j * 2, 2) === '11') {
                    letterMorse += '-';
                }
            }
            result += MORSE_TABLE[letterMorse];
            letterMorse = '';
        }

    }
    return result;
}

module.exports = {
    decode
};
