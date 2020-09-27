export const validate = values => {
    const errors = {}

    if(!values.fullname){
      errors.fullname = "Required";
    }else if (Number(values.fullname.length) < 2) {
      errors.fullname = "Invalid name";
    }

    if(!values.phone){
      errors.phone = "Required"
    }else if (!(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g.test(values.phone))) {
      errors.phone = "Invalid phone number";
    }else if (Number(values.phone.length) <6){
      errors.phone = "Invalid phone number";
    }
  
    if (!values.email) {
      errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    if(!values.password) {
      errors.password = "Required";
    }else if (Number(values.password.length) < 5) {
      errors.password = "Password must not be less than 5";
    }

    if(!values.account_type) { 
      errors.account_type = "Required";
    }

    if(!values.date) {
      errors.date = "Required";
    }

    if(!values.aim) {
      errors.aim = "Required";
    }
    if(!values.start_time) {
      errors.start_time = "Required";
    }

    if(!values.end_time) {
      errors.end_time = "Required";
    }

    if(!values.hospital) {
      errors.hospital = "Required";
    }

    if(!values.amount) {
      errors.amount = "Required";
    }
  
    return errors
  }
