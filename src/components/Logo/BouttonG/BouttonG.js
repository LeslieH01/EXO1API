import * as React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './styles.css';

const BouttonG = () => {

    return (
        <Stack className='mainContainer' direction="row" spacing={2}>
            <div className="setG">
                <Button startIcon={<ReorderIcon />}>Logo</Button>
            </div>
        </Stack>
    );
}

export default BouttonG;