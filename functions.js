const isNotNull = (str) => str;

const hasRightLength = (str) => str.length < 9;

const hasUpperCaseCharacter = (str) => {
    for (let char of str) {
        if(char == char.toUpperCase()) {
            return true;
        }
    }
};

const hasLowerCaseCharacter = (str) => {
    for (let char of str) {
        if(char == char.toLowerCase()) {
            return true;
        }
    }
};

const hasDigit = (str) => {
    const regex = new RegExp(/\d+/g);

    return regex.test(str);
}

const minimumConditionsReached = conditions => {
    const trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    return minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};