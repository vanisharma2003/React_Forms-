// React validations are written here....
const validateform=({name,email,password,age,dob,gender,course})=>{
const errors={};
if(!name) errors.name="Name is Required";
if(!email) errors.email="Email is Required";
if(!password) errors.password="Password is Required";
else{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if(password.length<6) errors.password="Password should be greater than six characters";
    else if(!passwordRegex.test(password)){
        errors.password="Password must contain an uppercase letter, lower case letter and a special character"
    }
}
if(!age) errors.age="Age is Required";
if(!dob) errors.dob="Date of birth is Required";
if(!gender) errors.gender="Please select gender";
if(!course) errors.course="Please select course";
return errors
}
export default validateform;