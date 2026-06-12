const RegisterForm = () => {
    return (
        <div className="registerForm">
            <h1>Regisztráció</h1>
            <p className="subTitle">Add meg az e-mail címed és jelszavad a regisztrációhoz!</p>
            <div id="textInputs">
                <div id="nameRow">
                    <div className="inputField">
                        <label htmlFor="lastName">Vezetéknév<span>*</span></label>
                        <div className="inputFieldBackground">
                            <input name="lastName" type="text" placeholder="Teszt"/>
                        </div>
                    </div>
                    <div className="inputField">
                        <label htmlFor="firstName">Keresztnév<span>*</span></label>
                        <div className="inputFieldBackground">
                            <input name="firstName" type="text" placeholder="Elek"/>
                        </div>
                    </div>
                </div>
                <div className="inputField">
                    <label htmlFor="email">Email cím<span>*</span></label>
                    <div className="inputFieldBackground">
                        <input name="email" type="email" placeholder="example@mail.com"/>
                    </div>
                </div>
                <div className="inputField">
                    <label htmlFor="password">Jelszó<span>*</span></label>
                    <div className="inputFieldBackground">
                        <input name="password" type="password" placeholder="********"/>
                    </div>
                </div>
            </div>
            <div className="checkField">
                <input name="accept" type="checkbox" className="checkbox"/>
                <label htmlFor="accept">Fiók létrehozásával elfogadja a <a href="">Felhasználási feltételeket</a>, és az <a href="">Adatvédelmi irányelveinket</a></label>
            </div>
            <div id="submitButton" className="inputFieldBackground">
                <button className="bigButton">Regisztráció</button>
            </div>
            <p id="hasAccount">Már van fiókja? <a href="">Bejelentkezés</a></p>
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