/* jshint esnext:true */
/*
globals
React:false, ReactDOM: false,
$:false,
firebase:false, firebaseui:false,
Materialize:false,
document:false, window:false, console:false, alert:false, user:false
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
const styles = {
    //The following appBar styles could not be applied by MUItheme.
    appBar: {
        height: 65,
        position: 'fixed',
        top: 0
    },
    header: {
        //For bidi/rtl support
        paddingRight: 10,
        paddingLeft: 10
    },
    drawer: {
        width: 200,
        marginTop: 65
    },
    container: {
        paddingTop: 100
    },
    footer: {
        width: "100%",
        position: "fixed",
        bottom: 65,
        textAlign: "center"
    }
};   //Right-to-Left

var Initialize = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
//        var theme = getMuiTheme(BaseTheme);
        var mobileView = (window.innerWidth < 768);
        return {
            mobile: mobileView,
            nav: !mobileView,
            lang: '',
            isRTL: '',
            theme: BaseTheme,
            processedTheme: false,
            content: {
                header: '...',
                disclaimer: '...',
                nav: {}
            }
        };
    },
    
    setLang:function(language) {
        var path = 'main/' + language + '/app';
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
        this.setState({
            lang: language
        });
    },
    setRTL:function() {
        document.documentElement.dir = 'rtl';
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
        if (!this.state.themeProcessed) {
            var temp = this.state.theme;
            temp.isRtl = (this.state.isRTL ? true : false);
            temp.direction = (this.state.isRTL ? 'rtl' : 'ltr');
            this.setState
            var theme = getMuiTheme(BaseTheme);
        }
    },
    
    render:function() {
        //  FOR DEVELOPMENT:
        /*
        In order to pass lang, mobile and nav, we render children
        as clones with additional props. This allows us to pass data down routes.
        Think this is weird? It's actually from the React docs...
        */
        console.log("STATE:", this.state);
        var containerStyle = {
            paddingTop: 100,
            paddingLeft: ((this.state.nav & !this.state.isRTL) ? styles.drawer.width : 20),
            paddingRight: ((this.state.nav & this.state.isRTL) ? styles.drawer.width : 20)
        };
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                {!this.state.lang ?
                    <Container>
                        <Gateway
                            setLang={this.setLang}
                            setRTL={this.setRTL}/>
                    </Container>
                :
                <div>
                    <AppBar
                        title={<span style={styles.header}>{this.state.content.header}</span>}
                        onTouchTap={this.navToggle}
                        style={styles.appBar}
                        zDepth={2}
                        />
                
                    <Drawer
                        open={this.state.nav}
                        docked={true}
                        containerStyle={styles.drawer}
                        zDepth={1}
                        >

                        <Nav 
                            lang={this.state.lang}
                            content={this.state.content.nav}/>

                        <Paper zDepth={5} style={styles.footer}>
                            <em>
                                {this.state.content.disclaimer}
                            </em>
                        </Paper>
                    </Drawer>

                    <Container style={containerStyle}>
                        {
                        React.cloneElement(
                            this.props.children, {
                                lang: this.state.lang,
                                isRTL: this.state.isRTL,
                                content: this.state.content
                            })
                        }
                        
                    </Container>

                </div>
                }
            </MuiThemeProvider>
        );
    }
});

export default Initialize;
