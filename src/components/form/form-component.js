import { useState } from "react";

const FormComponent = ({params}) => {
    const { type, options, name, label } = params;
    const [element, setElement] = useState("")
    let formElement = "";

    switch(type) {
        case "text":
            // setElement(<input type={type} />)
            formElement = <input type={type} />;
            break
        case "select":
            formElement = <select>
               {options.length > 0 && options.map((el) => {
                return <option value={el.value}>{el.label}</option>
               })}
            </select>
            break
        case "password":
            formElement = <input type={type} />
            break
        case "file":
            formElement = <input type={type} />
            break
        case "radio":
            formElement = (
                <div>
                    <input type={type} name={name} /> {label}
                </div>
            )
            break
    }

    return formElement
}

export default FormComponent;