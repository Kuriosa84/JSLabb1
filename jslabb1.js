//Asa Kwarnmark
//Giltiga personnummer är på formen 'ÅÅMMDDSSSS'. Det antas att personen med personnumret är yngre än 100 år.

function birthday(ssn) {
    var month = getMonth(ssn);
    var day = getDay(ssn);
    var currentDate = new Date();
    var currentMonth = 1 + currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(currentMonth == month && currentDay == day) {
        return true;
    }
    return false;
}

function age(ssn) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var result = Math.abs(currentYear - getYear(ssn)) % 100;
    if(!hasHadBirthdayThisYear(ssn)) {
        result -= 1;
        if(result <= 0) {
            result = 99;
        }
    }
    return result;
}

function over18(persons) {
    var result = [];
    for(var i=0; i<persons.length; i++) {
        if(isValidNumber(persons[i].ssn) && age(persons[i].ssn) >= 18) {
            result.push(persons[i]);
        }
    }
    return result;
}

function hasHadBirthdayThisYear(ssn) {
    var month = getMonth(ssn);
    var day = getDay(ssn);
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    
    if (currentMonth > month) {
        return true;
    } else if (currentMonth < month) {
        return false;
    } else {
        if(currentDay >= day) {
            return true;
        } else {
            return false;
        }
    }
}

function isValidNumber(ssn) {
    if( !/\d{10}/.test(ssn) ) {
        return false;
    }
    var month = getMonth(ssn);
    if(month > 12 || month < 1) {
        return false;
    }
    var day = getDay(ssn);
    if(day < 1) {
        return false;
    }
    switch(month) {
        case 2: if( (isLeapYear(ssn) && day > 29) || (!isLeapYear(ssn) && day > 28) ) {
            return false;
        }
        break;
        case 4: case 6: case 9: case 11: if(day > 30) {
            return false;
        }
        break;
        default: if(day > 31) {
            return false;
        }
    }
    var nrArray = ssn.split('');
    var validationSum = 0;
    for(var i=0; i<nrArray.length; i++) {
        if(i % 2 === 0) {
            validationSum += digitSum(2 * Number(nrArray[i]));
        } else {
            validationSum += Number(nrArray[i]);
        }
    }
    return (validationSum % 10 === 0);
}

//För heltal upp till 99
function digitSum(nr) {
    return Math.floor(nr / 10) + (nr % 10);
}

//Gäller innan år 2100...
function isLeapYear(ssn) {
    return Number(ssn.substring(0,2)) % 4 === 0;
}

function getYear(ssn) {
    return Number(ssn.substring(0,2));
}

function getMonth(ssn) {
    return Number(ssn.substring(2,4));
}

function getDay(ssn) {
    return Number(ssn.substring(4,6));
}