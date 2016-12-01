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


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';

//    /////
//    MISC COMPONENTS
//    /////
//  Grid System:
import {Container} from 'react-grid-system';
//  Custom Components:
import Gateway from './Gateway';
import Nav from './Nav';



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

var App = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return {
//            mobile: mobileView,
//            nav: !mobileView,
//            lang: '',
//            isRTL: '',
            content: {
                app: {
                    header: '...',
                    disclaimer: '...',
                    nav: {}
                }
            }
        };
    },
    componentWillMount: function() {
        var path = "main/" + this.props.lang;
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },
    
    
    render:function() {
        //  FOR DEVELOPMENT:
        /*
        In order to pass lang, mobile and nav, we render children
        as clones with additional props. This allows us to pass data down routes.
        Think this is weird? It's actually from the React docs...
        */
        var containerStyle = {
            paddingTop: 100,
            paddingLeft: ((this.props.nav & !this.props.isRTL) ? styles.drawer.width : 20),
            paddingRight: ((this.props.nav & this.props.isRTL) ? styles.drawer.width : 20)
        };
        return (
            <div>
                    <AppBar
                        title={<span style={styles.header}>{this.state.content.app.header}</span>}
                        onTouchTap={this.props.navToggle}
                        style={styles.appBar}
                        zDepth={2}
                        />
                
                    <Drawer
                        open={this.props.nav}
                        docked={true}
                        containerStyle={styles.drawer}
                        zDepth={1}
                        >

                        <Nav 
                            lang={this.props.lang}
                            content={this.state.content.app.nav}/>

                        <Paper zDepth={5} style={styles.footer}>
                            <em>
                                {this.state.content.app.disclaimer}
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
        );
    }
});

//openSecondary={this.props.isRTL}

export default App;
