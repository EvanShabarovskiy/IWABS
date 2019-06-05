import React from 'react';
import { Link } from '../_General/Link';
import links from '../../assets/data/links';
import Menu from '../_General/Menu';

const Footer = () => 
    <footer id="main-footer">
        <section className="company">
            <img src="/images/logo.png" className="logo" />
            <p className="company-name">
                КОМУНАЛЬНЕ ПІДПРИЄМСТВО "РІВНЕНСЬКИЙ ОБЛАСНИЙ ЦЕНТР СЛУЖБИ КРОВІ"
                РІВНЕНСЬКОЇ ОБЛАСНОЇ РАДИ
            </p>
        </section>
        <h4 className="author">створено</h4>
        <div className="developer-contacts">
            <p className="developer-number">
                <i className="fas fa-phone icon"></i>
                <span className="number">+38(068)458-86-57</span>
            </p>
            <p className="developer-email">
                <i className="fas fa-envelope icon"></i>
                sergiy.bobovskiy16@gmail.com
            </p>
        </div>
        <Menu menuId="footer-menu" links={links.filter(link => !link.private)} />
        <span className="footer-line"></span>
        <p className="copyright">
            <i className="fas fa-copyright icon"></i>
            <span className="number">{new Date().getFullYear()}. </span>
            всі права захищені. політика конфіденційності
        </p>
    </footer>;

export default Footer;
