module.exports = function toReadable(number) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 21) {
        if (number == 0) {
            return ones[number];
        } else if (number == 1) {
            return ones[number];
        } else if (number == 2) {
            return ones[number];
        } else if (number == 3) {
            return ones[number];
        } else if (number == 4) {
            return ones[number];
        } else if (number == 5) {
            return ones[number];
        } else if (number == 6) {
            return ones[number];
        } else if (number == 7) {
            return ones[number];
        } else if (number == 8) {
            return ones[number];
        } else if (number == 9) {
            return ones[number];
        } else if (number == 10) {
            return ones[number];
        } else if (number == 11) {
            return ones[number];
        } else if (number == 12) {
            return ones[number];
        } else if (number == 13) {
            return ones[number];
        } else if (number == 14) {
            return ones[number];
        } else if (number == 15) {
            return ones[number];
        } else if (number == 16) {
            return ones[number];
        } else if (number == 17) {
            return ones[number];
        } else if (number == 18) {
            return ones[number];
        } else if (number == 19) {
            return ones[number];
        } else if (number == 20) {
            return 'twenty';
        }
    }
    if (number > 19 && number < 100) {
        let numString = number.toString();
        if (numString[1] == 0) {
            console.log(`${tens[+numString[0]]}`);
            return tens[+numString[0]];
        } else
            console.log(`${tens[+numString[0]]} ${ones[+numString[1]]}`);
        return `${tens[+numString[0]]} ${ones[+numString[1]]}`;
    }

    if (number > 99 && number < 1000) {
        let numStringH = number.toString();
        let hundred = 'hundred';
        if (numStringH[1] == 0 && numStringH[2] == 0) {
            console.log(`${ones[+numStringH[0]]} ${hundred}`);
            return `${ones[+numStringH[0]]} ${hundred}`;
        } else if (numStringH.substring(numStringH.length - 2) < 20) {
            return `${ones[+numStringH[0]]} ${hundred} ${ones[+numStringH.substring(numStringH.length - 2)]}`;
        } else if (numStringH[2] == 0) {
            return `${ones[+numStringH[0]]} ${hundred} ${tens[+numStringH[1]]}`;
        } else
            return `${ones[+numStringH[0]]} ${hundred} ${tens[+numStringH[1]]} ${ones[+numStringH[2]]}`;
    }

}

