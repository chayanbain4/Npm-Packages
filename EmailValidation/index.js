/**
* @param {string} email  - The email address to validation
* @returns {Boolean} - Returns true if the email is valid
**/


function validateEmail(email) {
    const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email);
}

module.exports=validateEmail;