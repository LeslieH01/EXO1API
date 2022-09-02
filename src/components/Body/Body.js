import * as React from 'react';
import './styles.css';
import Logo from '../Logo/Logo';

import ListeG from '../ListeG/ListeG';

const Body = () => {

    return (
        <div className="body">
            <Logo />
            <br />
            <div className="listeD">
                <ListeG />
            </div>

        </div>
    );
}

export default Body;