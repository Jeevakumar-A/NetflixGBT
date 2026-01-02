const Validation = (name,email,password) => {
    const isValidName = /^[a-zA-Z][a-zA-Z0-9._-]{4,19}$/.test(name);
    const isValidemail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email);
    const isValidpassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
if (!isValidName) return "UserName is incorrect";
if (!isValidemail) return "Email is incorrect";
if (!isValidpassword) return "Password is incorrect";


return null;
}


export default Validation
