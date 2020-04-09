import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="footer_logo_venue font_righteous">
                    The Venue
                </div>
                <div className="footer_copyright">
                    The venue 2020. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
