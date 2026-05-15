import { securePassword, verifyPassword, hashPassword } from './crypto.js';

const password = "mySecretPassword";
const secured = securePassword(password);
console.log("Secured:", secured);

const salt = secured.substring(0, 20);
const hash1 = hashPassword(password, salt);
const hash2 = hashPassword(password, salt);
console.log("Same password same hash:", hash1 === hash2);

const modifiedHash = hashPassword("mySecretPassworD", salt);
console.log("Modified password different hash:", hash1 !== modifiedHash);

console.log("Verify correct:", verifyPassword(password, secured));
console.log("Verify wrong:", verifyPassword("wrong", secured));
