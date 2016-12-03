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


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {Tabs, Tab} from 'material-ui/Tabs';
//  Removed Swipeable Views for compatibility.
import Paper from 'material-ui/Paper';

import ServiceMap from './ServiceMap';
import Directory from './Directory';


//    /////
//    COMPONENT
//    /////
var Home = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return({
            slideIndex: 0,      //Which tab you're on
            content: {
                map: {},
                directory: {}
            },
            filters: {
                stateside: false,
//                citizen: false,
//                nationality: [''],  //Multiple nationalities.
//                gender: '',
//                lowIncome: true,
//                service: {          //Seeking these services:
//                    food: true,
//                    shelter: true,
//                    housing: true,
//                    immigration: true,
//                    resettlement: true,
//                    esl: true,
//                    employment: true,
//                    childcare: true,
//                    healthcare: true,
//                    mental: true,
//                    addiction: true,
//                }
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
                    <Tabs style={{direction: 'ltr'}} isRtl={false}>
                        <Tab label={this.state.content.map.title}>
                            <Col sm={12}>
                                <Paper style={adaptiveDirection}>
                                    <ServiceMap 
                                        lang={this.props.lang}
                                        isRTL={this.props.isRTL}
                                        content={this.state.content.map}
                                        filters={this.state.filters}  />
                                </Paper>
                            </Col>
                        </Tab>
                        <Tab label={this.state.content.directory.title}>
                            <Col sm={12}>
                                <Paper style={adaptiveDirection}>
                                    <Directory 
                                        lang={this.props.lang}
                                        isRTL={this.props.isRTL}
                                        content={this.state.content.directory}
                                        filters={this.state.filters}  />
                                </Paper>
                            </Col>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>            
        );
    }
});

export default Home;
