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


//import firebase from 'firebase';
//import ReactFireMixin from 'reactfire';


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

//    /////
//    COMPONENT
//    /////
const styles = {
    center: {
        textAlign: 'center'
    }
};
var Form = React.createClass ({
    getInitialState:function() {
        return({
            content: {
                title: '',
                description: '',
                form: {
                    field1: ''
                }
            }
        });
    },

//    componentWillMount:function() {
//        var path = 'main/' + this.props.lang + '/submit';
//        var ref = firebase.database().ref(path);
//        this.bindAsObject(ref, 'content');
//    },

    render:function() {
        return (
            <Card>
                <CardTitle title={this.state.content.title}
                    style={styles.center}/>
                <CardText>
                    {this.state.content.description}
                </CardText>
            </Card>
        );
    }
});
/*
Catholic Community Services of Western Washingtonaddclose
address: 
"1610 South King Street, Seattle, WA 98144"
description: 
"Catholic services available in King County"
hours: 
"M-F 10am-4pm"
link: 
"http://www.dioceserroseattle.org/"
name: 
"Catholic Community Services of Western Washington"
phone: 
2063233152
primary: 
"Resettlement"
services: 
"Resettlement, Education"
*/

export default Form;
