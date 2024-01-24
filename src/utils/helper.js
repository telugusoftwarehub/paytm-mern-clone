import { loginForm } from "../configs/forms/login-form";

export const dateConverter = (param) => {
    //logic
    console.log("Date Converter Helper")
}


export const validate = (event) => {

    loginForm.forEach((field) => {
        if(field.name === event.target.name) {
            if((field.validations.indexOf('required') !== -1) && event.target.value === "") {
                field.isValid = false;
            }
        }
        // console.log("field", field, event.target)
    })
    // console.log("999", event)
}
