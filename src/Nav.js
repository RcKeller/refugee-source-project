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
import {Link} from 'react-router';

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {List, ListItem} from 'material-ui/List';

import {blueA400} from 'material-ui/styles/colors';

import Home from 'material-ui/svg-icons/action/home';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import Language from 'material-ui/svg-icons/action/language';
import Portrait from 'material-ui/svg-icons/image/portrait';

//    /////
//    COMPONENT
//    /////
const styles = {
    list: {
        overflowY: 'auto'
    },
    link: {
        textDecoration: 'none'
    }
};

const iconColor = blueA400;

var Nav = React.createClass ({
    refresh: function () {
        window.location.reload();
      },
    
    render:function() {
        /*
        Submission is only available in english.
        It is not available in other languages, both for content reasons
        and because every service center supports english.
        */
        return (
            <List style={styles.list}>
                <ListItem primaryText={this.props.content.language}
                    leftIcon={<Language color={iconColor}/>}
                    onTouchTap={this.refresh}
                    />
            
                <Link to="/" style={styles.link}>
                    <ListItem primaryText={this.props.content.home}
                        leftIcon={<Home color={iconColor}/>}
                        />
                </Link>
                {(this.props.lang === 'en') &&
                  <Link to="/submit" style={styles.link}>
                      <ListItem primaryText={this.props.content.submission}
                          leftIcon={<ContentPaste color={iconColor}/>}
                          />
                  </Link>
                }
                <Link to="/about" style={styles.link}>
                    <ListItem primaryText={this.props.content.about}
                        leftIcon={<Portrait color={iconColor}/>} />
                </Link>
            
            </List>
        );
    }
});

export default Nav;
