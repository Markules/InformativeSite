import React from 'react';
import './ContentTab.css';
import Content from '../Content/Content';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class ContentTab extends React.Component {
    render() {
        return (
     
            <div className="contentTab">
                <Content />
            </div>
      
        )
    }
}

export default ContentTab
