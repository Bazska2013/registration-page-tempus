interface SubmitButtonProps {
    id?: string;
    text: string;
}

const SubmitButton = ({id, text} : SubmitButtonProps) => {
    return (
        <div id={id} className="inputFieldBackground">
            <button className="bigButton">{text}</button>
        </div>
    )
}

export default SubmitButton;