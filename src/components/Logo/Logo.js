import React from "react";

/** notre composants Logo utilise les 2 */
import BouttonG from "./BouttonG/BouttonG";
import BouttonD from "./BouttonD/BouttonD";

import './styles.css'

const Logo = () => {
    return (
        <>
            <div className="logo">
                <p>Application</p>
                <div className="elt">
                    <BouttonG />
                </div>
                <div className="elt">
                    <div className="btnD">
                        <BouttonD />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Logo;