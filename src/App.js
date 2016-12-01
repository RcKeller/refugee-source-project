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

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const nearbyIcon = <IconLocationOn />;



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
};

var App = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        var mobileView = (window.innerWidth < 768);
        return {
            mobile: mobileView,
            nav: !mobileView,
            lang: 'en',
            isRTL: false,
            selectedIndex: 0,
            content: {
                header: '...',
                disclaimer: '...',
                nav: {}
            }
        };
    },
    
    setRTL:function() {
        document.documentElement.dir = 'rtl';   //IE9 compatibility.
        this.setState({
            isRTL: true
        });
    },
    
    select:function(i) {
        this.setState({selectedIndex: i});
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
        
        var path = 'main/' + this.state.lang + '/app';
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },
    resize:function() {
        var mobileView = (window.innerWidth < 768);
        this.setState({
            mobile: mobileView,
            nav: !mobileView,
        });
    },
    
    render:function() {
        //  FOR DEVELOPMENT:
        /*
        In order to pass lang, mobile and nav, we render children
        as clones with additional props. This allows us to pass data down routes.
        Think this is weird? It's actually from the React docs...
        */
        console.log("PROPS", this.props);
        console.log("ROUTE PATH", this.props.location);
        console.log("STATE", this.state);
        var containerStyle = {paddingTop: 100};
        if (this.state.isRTL) {
            containerStyle.paddingRight = this.state.nav ? styles.drawer.width : 20;
        } else {
            containerStyle.paddingLeft = this.state.nav ? styles.drawer.width : 20;
        }
        var enIndex = 0;
        var arIndex = 0;
        return (
            
            
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
                
                <Paper zDepth={1}>
                    <BottomNavigation
                        selectedIndex={this.state.selectedIndex}
                    >
                        <BottomNavigationItem
                            label="English"
                            icon={nearbyIcon}
                            onTouchTap={()=>this.select(0)}
                            />
                        <BottomNavigationItem
                            label="Arabic"
                            icon={nearbyIcon}
                            onTouchTap={()=>this.select(1)}
                            />
                    </BottomNavigation>
                </Paper>

            </div>
        );
    }
});

export default App;
