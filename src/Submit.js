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
            content: {}
        });
    },
    
    ComponentWillMount:function() {
        var path = 'main/' + this.props.lang + '/about';
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },

    render:function() {
        return(
        <Card style={styles.card}>
            <CardTitle title="Placeholder" subtitle="About"/>
            <CardText>
                Language: {this.props.lang}
            </CardText>
        </Card>
        );
    }
});

export default Submit;
