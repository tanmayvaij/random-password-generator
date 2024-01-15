"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
// Characters
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+-=";
const allCharacters = upperCaseCharacters + lowerCaseCharacters + numbers + symbols;
// selects a random number from 0 to length
const randomNumber = (length) => Math.floor(Math.random() * length);
// selects a random character from string
const getRandomCharacter = (charString) => charString[randomNumber(charString.length - 1)];
//   generate a random password
const generatePassword = () => {
    const charStringList = [
        upperCaseCharacters,
        upperCaseCharacters,
        lowerCaseCharacters,
        lowerCaseCharacters,
        numbers,
        numbers,
        symbols,
        symbols,
        allCharacters,
        allCharacters,
        allCharacters,
        allCharacters,
    ];
    return charStringList
        .map((charString) => getRandomCharacter(charString))
        .join("");
};
exports.generatePassword = generatePassword;
//# sourceMappingURL=index.js.map