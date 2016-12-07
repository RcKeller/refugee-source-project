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
import {Row, Col} from 'react-grid-system';


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
            slideIndex: 0,      //Which tab you're on
            content: {
                map: {},
                directory: {}
            }
            
        });
    },
    componentWillMount: function() {
        var path = "main/" + this.props.lang + "/home";
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
            <Row>
              <Col sm={12}>
                    <Card style={adaptiveDirection}>
                      <CardTitle title={this.state.content.directory.title}
                        style={styles.header} />
                      <CardText>
                        <p>
                          {this.state.content.directory.description}
                        </p>
                      <Directory 
                          lang={this.props.lang}
                          isRTL={this.props.isRTL}
                          content={this.state.content.directory}
                      />
                      </CardText>
                </Card>
              </Col>
            </Row>            
        );
    }
});

export default Home;
