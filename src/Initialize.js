/* jshint esnext:true */
/*
globals
React:false, ReactDOM: false,
$:false,
firebase:false, firebaseui:false,
Materialize:false,
document:false, window:false, console:false, alert:false, user:false
*/

/*
Initializes:
* Firebase
* Language Selection and Routing
* Mobile Listeners
*/

//    /////
//    IMPORT DEPENDENCIES
//    /////
import React from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import FirebaseConfig from './FirebaseConfig';
firebase.initializeApp(FirebaseConfig);

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';



import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import {
    green500, green700, grey400,
    blueA100, blueA200, blueA400,
    grey300,
    white, darkBlack, fullBlack, fullWhite
} from 'material-ui/styles/colors';


//    /////
//    MISC COMPONENTS
//    /////
//  Grid System:
import {Container} from 'react-grid-system';
//  Custom Components:
import BaseTheme from './BaseTheme';
var theme = getMuiTheme(BaseTheme);
import Gateway from './Gateway';
import Nav from './Nav';

import App from './App';



//    /////
//    COMPONENT
//    /////
var Initialize = React.createClass ({
    getInitialState:function() {
        var theme = getMuiTheme(BaseTheme);
        var mobileView = (window.innerWidth < 768);
        return {
            mobile: mobileView,
            nav: !mobileView,
            lang: '',
            isRTL: '',
            baseTheme: BaseTheme,
            theme: theme,
            processedTheme: false
        };
    },
    
    setLang:function(language) {
        this.setState({
            lang: language,
            isRTL: ((language == 'ar') ? true : false)
        });
    },
    setRTL:function() {
        document.documentElement.dir = 'rtl';   //IE9 compatibility.
        this.setState({
            isRTL: true
        });
    },
    
    /*
    Material-UI Drawers are consistent w/ guidelines, but do not operate like
    traditional side-navs. I've overriden basic styles and added listeners
    for mobile view to adapt this component.
    */
    navToggle:function() {
        this.setState({nav: !this.state.nav});
    },
    componentWillMount:function() {
        window.addEventListener('resize', this.resize);
    },
    resize:function() {
        var mobileView = (window.innerWidth < 768);
        this.setState({
            mobile: mobileView,
            nav: !mobileView,
        });
    },
    
    componentWillUpdate:function() {
        if (!this.state.themeProcessed & this.state.isRTL !== '') {
            var temp = this.state.theme;
            temp.isRtl = (this.state.isRTL ? true : false);
            temp.direction = (this.state.isRTL ? 'rtl' : 'ltr');
            var theme = getMuiTheme(temp);
            this.setState({
                baseTheme: temp,
                theme: theme,
                themeProcessed: true
            });
        }
    },
    
    render:function() {
        //  FOR DEVELOPMENT:
        /*
        In order to pass lang, mobile and nav, we render children
        as clones with additional props. This allows us to pass data down routes.
        Think this is weird? It's actually from the React docs...
        */
//        console.log("STATE:", this.state);
        return (
            <MuiThemeProvider muiTheme={this.state.theme}>
                {!this.state.lang ?
                    <Container>
                        <Gateway
                            setLang={this.setLang}
                            setRTL={this.setRTL}/>
                    </Container>
                :
                    <div>
                    {
                        React.cloneElement(
                            this.props.children, {
                            lang: this.state.lang,
                            isRTL: this.state.isRTL,
                            content: this.state.content
                        })
                    }
                    </div>
                }
            </MuiThemeProvider>
        );
    }
});

export default Initialize;
