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

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
import Nav from './Nav';

//    /////
//    COMPONENT
//    /////
const styles = {
    gateway: {
        marginTop: 100,
        textAlign: 'center'
    },
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
    
};
var Gateway = React.createClass ({
    mixins: [ReactFireMixin],

    getInitialState:function() {
        var mobileView = (window.innerWidth < 768);
        return({
            lang: '',
            isRTL: '',
            theme: '',
            mobile: mobileView,
            nav: !mobileView,
            content: {
                header: '...',
                disclaimer: '...',
                nav: {}
            }
        });
    },
    /*
    Material-UI is a bit weird. You can't pass args for buttons.
    Thus, separate anonymous functions
    */
    
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
    
    componentWillUpdate:function() {
        var theme = getMuiTheme({
            spacing: spacing,
            fontFamily: 'Roboto, sans-serif',
            direction: (this.state.isRTL ? 'rtl' : 'ltr'),
            isRtl: this.state.isRTL,
            palette: {
                primary1Color: green500,
                primary2Color: green700,
                primary3Color: grey400,
                accent1Color: blueA200,
                accent2Color: blueA400,
                accent3Color: blueA100,
                textColor: darkBlack,
                secondaryTextColor: (0, fade)(darkBlack, 0.54),
                alternateTextColor: white,
                canvasColor: white,
                borderColor: grey300,
                disabledColor: (0, fade)(darkBlack, 0.3),
                pickerHeaderColor: green500,
                clockCircleColor: (0, fade)(darkBlack, 0.07),
                shadowColor: fullBlack
            }
        });
        this.setState({theme: theme});
    },
    
    render:function() {
        console.log(this.isRtl);
        var containerStyle = {paddingTop: 100};
        if (this.state.isRTL) {
            containerStyle.paddingRight = this.state.nav ? styles.drawer.width : 20;
        } else {
            containerStyle.paddingLeft = this.state.nav ? styles.drawer.width : 20;
        }
        
        return (
            <div>
            {this.state.lang ?
                <MuiThemeProvider muiTheme={this.theme} isRtl={true}>
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
                         openSecondary={this.state.isRTL}
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
                </MuiThemeProvider>
            
             :
                <Card style={styles.gateway}>
                    <CardTitle title="Language" />
                    <CardActions>
                        <RaisedButton secondary={true} label="English"
                            onTouchTap={() => this.setLang('en')} />
                        <RaisedButton secondary={true} label="العربية"
                            onTouchTap={function() {
                                this.setLang('ar');
                                this.setRTL();
                            }.bind(this)}/>
                        <RaisedButton secondary={true} label="Language-C" disabled={true}
                            onTouchTap={() => this.setLang('cc')} />
                        <RaisedButton secondary={true} label="Language-D" disabled={true}
                            onTouchTap={() => this.setLang('dd')} />
                        <RaisedButton secondary={true} id='fr' label="français" disabled={true}
                            onTouchTap={() => this.setLang('fr')} />
                        <RaisedButton secondary={true} id='sp' label="español" disabled={true}
                            onTouchTap={() => this.setLang('sp')} />

                    </CardActions>
                </Card>
                
            }
            </div>
            
        );
    }
});


export default Gateway;
