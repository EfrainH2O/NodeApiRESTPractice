import crypto from 'node:crypto';

export const generateSalt = () => crypto.randomBytes(10).toString('hex');

export const hashPassword = (password, salt) => crypto.createHash('sha256').update(salt + password).digest('hex');

export const securePassword = (password) => {
    const salt = generateSalt();
    return salt + hashPassword(password, salt);
};

export const verifyPassword = (password, securedPassword) => {
    const salt = securedPassword.substring(0, 20);
    const originalHash = securedPassword.substring(20);
    return hashPassword(password, salt) === originalHash;
};
