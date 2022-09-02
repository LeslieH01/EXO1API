import * as React from 'react';
import setting from '../../../setting.png';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './styles.css';
const BouttonD = () => {

    return (
        <Stack className='mainContainer' direction="row" spacing={1}>
            <Button >
                <div className="set">
                    <img src={setting} className="set-logo" alt="setlogo" />
                </div>
                <div className="set">
                    <p className="btnD">
                        AJOUTER UN PROFIL D'APPLI...
                    </p>
                </div>
            </Button>
        </Stack>
    );
}

export default BouttonD;