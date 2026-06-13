import TextInput from "./form/TextInput.tsx";
import googleIcon from "../assets/google-icon.svg";
import xIcon from "../assets/x-icon.svg";
import Divider from "./form/Divider.tsx";
import SubmitButton from "./buttons/SubmitButton.tsx";
import SocialButton from "./buttons/SocialButton.tsx";

const RegisterForm = () => {
    return (
        <div className="registerForm">
            <h1>Regisztráció</h1>
            <p className="subTitle">Add meg az e-mail címed és jelszavad a regisztrációhoz!</p>
            <div id="textInputs">
                <div id="nameRow">
                    <TextInput type="text" name="lastName" label="Vezetéknév" placeholder="Teszt" required />
                    <TextInput type="text" name="firstName" label="Keresztnév" placeholder="Elek" required />
                </div>
                <TextInput type="email" name="email" label="Email cím" placeholder="example@mail.com" required />
                <TextInput type="password" name="password" label="Jelszó" placeholder="********" required />
            </div>
            <div className="checkField">
                <input id="accept" name="accept" type="checkbox" className="checkbox"/>
                <label htmlFor="accept">Fiók létrehozásával elfogadja a <a href="">Felhasználási feltételeket</a>, és az <a href="">Adatvédelmi irányelveinket</a></label>
            </div>
            <SubmitButton id="submitButton" text="Regisztráció" />
            <p id="hasAccount">Már van fiókja? <a href="">Bejelentkezés</a></p>
            <Divider />
            <div id="socialsRow">
                <SocialButton image={googleIcon} imageAlt="google icon" text="Google fiókkal" />
                <SocialButton image={xIcon} imageAlt="x icon" text="X fiókkal" />
            </div>
        </div>
    )
}

export default RegisterForm;