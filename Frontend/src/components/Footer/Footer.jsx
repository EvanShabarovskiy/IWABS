import React from 'react';
import { Link } from '../_General/Link';
import { links } from '../../assets/constants/data/links';

const Footer = () => 
    <footer id="main-footer">
        <h4 className="awesome-title">awesome deweloper</h4>
        <div className="developer-contacts">
            <p className="developer-number">+38(068)458-86-57</p>
            <p className="developer-email">sergiy.bobovskiy16@gmail.com</p>
        </div>
        <div className="footer-menu">
            {links.map(({ to, active, label }, i) => (
                <Link key={i} active={active} to={to} label={label} />
            ))}
        </div>
        <span className="footer-line"></span>
        <p className="copyright">&copy; Copyright {new Date().getFullYear()}, All rights reserved</p>
    </footer>;

export default Footer;
