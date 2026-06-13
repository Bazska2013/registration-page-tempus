import tempusLogo from "../assets/tempus-logo.svg";

const RegisterBackground = () => {
    return (
        <aside className="registerBackground">
            <div id="tempusLogo">
                <img src={tempusLogo} alt="tempus logo"/>
                <p>Közös küldetés</p>
            </div>
        </aside>
    )
}

export default RegisterBackground;