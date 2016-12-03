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
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import ServiceMap from './ServiceMap';
import Directory from './Directory';


//    /////
//    COMPONENT
//    /////
const styles = {
    views: {
        padding: 10
    }
};
var Submit = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return({
            content: {
                title: '',
                description: '',
                image: {
                    source: '',
                    title: '',
                    description: ''
                }
            }
        });
    },

    componentWillMount:function() {
        var path = 'main/' + this.props.lang + '/submit';
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },

    render:function() {
        console.log("FORM STATE", this.state);
        console.log("FORM PROPS:", this.props);
        return (
            <Card>
                <CardTitle title={this.state.content.title} />
                <CardText>
                    {this.state.content.description}
                </CardText>
            </Card>
        );
    }
});

export default Submit;
