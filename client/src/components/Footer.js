import React from 'react'
import '../helpers/styles.scss'

const Footer= () =>
    <footer>
    <div className="footer-main">
        <div className="container">
            <div className="row">
                <div className="col s12 m3">
                    <span className="footer-copyright">© 2018 Elevate Export Finance Corp.</span>
                </div>
                <div className="col s12 m3">
                    <span className="phone">Phone: (833) 203-4426</span>
                </div>
                <div className="col s12 m3">
                    <span className="phone">Email: info@elevatefinance.ca</span>
                </div>
                <div className="col s12 m3">
                        <span className="social-sites">
                            <a id="twitter-logo" href="https://twitter.com/ElevateExport"><img src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_30,h_30,al_c,q_80,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp" alt="No Logo"/></a>
                            <a id="linkedin-logo" href="https://www.linkedin.com/company/elevate-export-finance-corp/"><img src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_30,h_30,al_c,q_80,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp" alt="No Logo"/></a>
                        </span>
                </div>
            </div>
        </div>
    </div>
    </footer>;

export default Footer;