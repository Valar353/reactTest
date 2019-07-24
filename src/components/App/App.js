import React from 'react';
import style from './App.module.css';
import Header from '../Header/Header';
import ProfileContainer from '../../containers/ProfileContainer';
import ContentContainer from '../../containers/ContentContainer';
import Footer from "../Footer/Footer";
import Page404 from '../../components/404/404';
// import DashboardContainer from "../../containers/DashboardContainer";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Agreement from "../Agreement/Agreement";

export default class App extends React.Component {
    render() {
        // const svg = this.initSVG();
        const {showProfile, showOverlay} = this.props.state.options;
        return (
            <Router>
                {/*{svg}*/}
                <Header/>
                <Switch>
                    <Route path="/" exact component={ContentContainer}/>
                    <Route path="/agreement" exact component={Agreement}/>
                    <Route component={Page404}/>
                </Switch>

                {showOverlay &&
                <div className={style.overlay}>
                    <div className={style.overlayWrapper}>
                        {showProfile &&
                        <ProfileContainer/>
                        }

                    </div>
                </div>
                }
                <Footer/>
                {/*<DashbsoardContainer />*/}
            </Router>
        );
    }

    // initSVG = () => {
    //     return (
    //         <svg style={{display: 'none'}}>
    //             <symbol id="coinIcon" xmlns="http://www.w3.org/2000/svg">
    //                 <circle cx="11" cy="11" r="11" fill="#fdbe39"/>
    //                 <path
    //                     d="M8.29 8a3.38 3.38 0 0 1 2 .52 2 2 0 0 1 .79 1.7 2.48 2.48 0 0 1-2.63 2.46h-.33l-.83-.22v1.87c0 1 .09 1 1.19 1.15v.34H5.2v-.34c1-.1 1.08-.18 1.08-1.17V9.48c0-1.07-.13-1.09-1.08-1.19V8zm-1 4a2.24 2.24 0 0 0 .88.16A1.71 1.71 0 0 0 10 10.21a1.71 1.71 0 0 0-1.87-1.85 1 1 0 0 0-.67.15c-.1.08-.14.22-.14.55zM15.21 8a3.36 3.36 0 0 1 2 .52 2 2 0 0 1 .8 1.7 2.49 2.49 0 0 1-2.64 2.46h-.33l-.82-.22v1.87c0 1 .08 1 1.18 1.15v.34h-3.29v-.34c1-.1 1.08-.18 1.08-1.17V9.48c0-1.07-.13-1.09-1.08-1.19V8zm-1 4a2.14 2.14 0 0 0 .87.16 1.7 1.7 0 0 0 1.8-1.92A1.7 1.7 0 0 0 15 8.36a1 1 0 0 0-.67.15c-.1.08-.13.22-.13.55z"/>
    //                 <path
    //                     d="M7.72 8a3.4 3.4 0 0 1 2 .52 2 2 0 0 1 .79 1.7 2.49 2.49 0 0 1-2.61 2.41h-.32l-.83-.22v1.87c0 1 .08 1 1.19 1.15v.34H4.63v-.34c1-.1 1.08-.18 1.08-1.17V9.48c0-1.07-.13-1.09-1.08-1.19V8zm-1 4a2.24 2.24 0 0 0 .88.16 1.71 1.71 0 0 0 1.8-1.92 1.71 1.71 0 0 0-1.85-1.88 1.11 1.11 0 0 0-.67.14c-.09.09-.13.23-.13.56zM14.63 8a3.38 3.38 0 0 1 2 .52 2 2 0 0 1 .79 1.7 2.49 2.49 0 0 1-2.64 2.46h-.32l-.83-.22v1.87c0 1 .09 1 1.19 1.15v.34h-3.28v-.34c1-.1 1.08-.18 1.08-1.17V9.48c0-1.07-.13-1.09-1.08-1.19V8zm-1 4a2.24 2.24 0 0 0 .88.16 1.71 1.71 0 0 0 1.8-1.92 1.71 1.71 0 0 0-1.87-1.85 1.09 1.09 0 0 0-.67.14c-.1.09-.14.23-.14.56z"
    //                     fill="#5576ff"/>
    //             </symbol>
    //             <symbol viewBox="-10 -10 40 40" id="offlineIcon" xmlns="http://www.w3.org/2000/svg">
    //                 <circle cx="10" cy="10" r="10" fill="#512d30"/>
    //                 <circle cx="10" cy="10" r="5" fill="#ff1117"/>
    //             </symbol>
    //             <symbol viewBox="-10 -10 40 40" id="onlineIcon" xmlns="http://www.w3.org/2000/svg">
    //                 <circle cx="10" cy="10" r="10" fill="#24461f"/>
    //                 <circle cx="10" cy="10" r="5" fill="#5d984b"/>
    //             </symbol>
    //             <symbol viewBox="-148.5 -148.5 772.2 772.2" id="closeIcon" xmlns="http://www.w3.org/2000/svg">
    //                 <path
    //                     d="M405.6 69.6C360.7 24.7 301.1 0 237.6 0s-123.1 24.7-168 69.6S0 174.1 0 237.6s24.7 123.1 69.6 168 104.5 69.6 168 69.6 123.1-24.7 168-69.6 69.6-104.5 69.6-168-24.7-123.1-69.6-168zm-19.1 316.9c-39.8 39.8-92.7 61.7-148.9 61.7s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7 0-297.8C128.5 48.9 181.4 27 237.6 27s109.1 21.9 148.9 61.7c82.1 82.1 82.1 215.7 0 297.8z"/>
    //                 <path
    //                     d="M342.3 132.9c-5.3-5.3-13.8-5.3-19.1 0l-85.6 85.6-85.6-85.6c-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1l85.6 85.6-85.6 85.6c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.6-85.6 85.6 85.6c2.6 2.6 6.1 4 9.5 4 3.5 0 6.9-1.3 9.5-4 5.3-5.3 5.3-13.8 0-19.1l-85.4-85.6 85.6-85.6c5.3-5.3 5.3-13.8 0-19.1z"/>
    //             </symbol>
    //         </svg>
    //     );
    // }
}