const RegisterForm = () => {
    return (
        <div className="registerForm">
            <h1>Regisztráció</h1>
            <p>Add meg az e-mail címed és jelszavad a regisztrációhoz!</p>
            <div id="textInputs">
                <div id="nameRow">
                    <div className="inputField">
                        <label htmlFor="lastName">Vezetéknév<span>*</span></label>
                        <input name="lastName" type="text" placeholder="Teszt"/>
                    </div>
                    <div className="inputField">
                        <label htmlFor="firstName">Keresztnév<span>*</span></label>
                        <input name="firstName" type="text" placeholder="Elek"/>
                    </div>
                </div>
                <div className="inputField">
                    <label htmlFor="email">Email cím<span>*</span></label>
                    <input name="email" type="email" placeholder="example@mail.com"/>
                </div>
                <div className="inputField">
                    <label htmlFor="password">Jelszó<span>*</span></label>
                    <input name="password" type="email" placeholder="********"/>
                </div>
            </div>
            <input name="accept" type="text" className="checkbox"/>
            <label htmlFor="accept">Fiók létrehozásával elfogadja a <a>Felhasználási feltételeket</a>, és az <a>Adatvédelmi irányelveinket</a></label>
            <button className="submitButton">Regisztráció</button>
            <p>Már van fiókja? <a>Bejelentkezés</a></p>
            <div className="orDivider">
                <div className="line"></div>
                <div className="text">Vagy</div>
                <div className="line"></div>
            </div>
            <div id="socialsRow">
                <button className="socialButton">Google fiókkal</button>
                <button className="socialButton">X fiókkal</button>
            </div>
        </div>
    )
}

export default RegisterForm;