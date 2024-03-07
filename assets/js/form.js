function validateForm(){
    var formValue = document.getElementById('validationForm');
    var firstName = formValue.elements['firstname'].value;
    var lastName = formValue.elements['lastname'].value;
    var passWord = formValue.elements['password'].value;
    var confirmPassword = formValue.elements['confirmpassword'].value;
    
    console.log(passWord.length);
    
    if (firstName == null || firstName == ''){
        alert('Firstname cannot be empty');
    } else if (lastName == null || lastName == ''){
        alert('Lastname cannot be empty');
    } else if (passWord.length < 6){
        alert('Password is too small')
    } else if (passWord != confirmPassword){
        alert('password mismatched')
    } else {
        alert('Login Successfull')
    }
}