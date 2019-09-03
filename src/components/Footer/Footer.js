import React from 'react';
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="copyright">Copyright 2019, EDYS LAB</div>
                <div className="designBy"><a href='https://github.com/Markules'>Design By Markules</a></div>
            </div>
        )
    }
}

export default Footer
