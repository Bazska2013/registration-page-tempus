import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";

interface TextInputProps {
    type: string,
    name: string,
    label: string,
    placeholder?: string,
    required?: boolean,
}

const TextInput = ({type, name, label, placeholder = "", required = false}: TextInputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className="inputField">
            <label htmlFor={name}>{label}{required ? <span>*</span> : <></>}</label>
            <div className="inputFieldBackground">
                <input name={name} type={showPassword ? "text" : type} placeholder={placeholder}/>
                {type === "password" &&
                    (showPassword ? (
                        <button onClick={() => setShowPassword(!showPassword)} className="showPassword">
                            <Eye className="eyeIcon" />
                        </button>
                    ) : (
                        <button onClick={() => setShowPassword(!showPassword)} className="showPassword">
                            <EyeOff className="eyeIcon" />
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default TextInput;