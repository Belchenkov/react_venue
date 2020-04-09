import React from 'react';
import Button from '@material-ui/core/Button';

import ticket_icon from '../../resources/images/icons/ticket.png';

const MyButton = ({ text, bck, color, link }) => {
    return (
        <Button
            href={link}
            variant="contained"
            size="small"
            style={{
                background: bck,
                color: color
            }}
        >
            <img src={ticket_icon} className="iconImage" alt="button" />
            {text}
        </Button>
    );
};

export default MyButton;
