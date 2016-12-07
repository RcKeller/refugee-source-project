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

import {Card, CardTitle, CardText} from 'material-ui/Card';


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import Directory from './Directory';


//    /////
//    COMPONENT
//    /////
const styles = {
  header: {
    textAlign: 'center'
  },
  description: {
    padding: 20
  }
};

var Home = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return({
            content: {
              title: '',
              description: ''
            },
            directory: {}
            
        });
    },
    componentWillMount: function() {
        var path = "main/" + this.props.lang + "/home/directory";
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },
    
    handleSlide:function(value) {
        this.setState({
            slideIndex: value,
        });
    },
    
    render:function() {
        //Tabs are overriden inline, Material-UI is not RTL compatible.
        var adaptiveDirection = {
            direction: (this.props.isRTL ? 'rtl' : 'inherit')
        };
        return (
            <Card style={adaptiveDirection}>
              <CardTitle title={this.state.content.title}
                style={styles.header} />
              <CardText>
                  {this.state.content.description}
              </CardText>
              <Directory 
                  lang={this.props.lang}
                  isRTL={this.props.isRTL}
              />
              
        </Card>          
        );
    }
});

export default Home;
