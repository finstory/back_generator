require('dotenv').config(); // Load environment variables from .env file
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Function to generate a license key using JWT
function generateLicenseKey(username) {

    // Payload to be encoded in the license key
    const payload = {
        user: username,
        createdAt: new Date().toISOString()
    };

    // Generate a token with the secret key from .env
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '30d'  // License key valid for 30 days
    });

    return token;
}

console.log(generateLicenseKey("facu_neutral"));

// Function to verify the license key
async function verifyLicenseKey(token) {
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded.user)
        console.log('Valid key, details:', decoded);
        return true;
    } catch (err) {
        if (err.message === 'invalid username') console.error('Invalid username:', err.message);
        else console.error('Invalid or expired key:', err.message);
        return false;
    }
}

verifyLicenseKey(process.env.PASSWORD, process.env.USERNAME);
// Example of generating and verifying a license key
// try {
//     // Generate a license key with the correct password
//     const licenseKey = generateLicenseKey('secret_password'); // Replace with the password from .env
//     console.log('Generated License Key:', licenseKey);

//     // Verify the license key
//     const isValid = verifyLicenseKey(licenseKey);

//     if (isValid) {
//         console.log('Access granted to the application.');
//         // Add the main logic of the application here
//     } else {
//         console.log('Access denied.');
//         process.exit(1); // Exit the application if the key is invalid
//     }
// } catch (err) {
//     console.error(err.message);
// }
