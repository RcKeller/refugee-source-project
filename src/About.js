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
import {Card, CardTitle, CardText} from 'material-ui/Card';

//    /////
//    COMPONENT
//    /////
const styles = {
    center: {
        textAlign: 'center'
    }
};
var About = React.createClass ({
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
        var path = 'main/' + this.props.lang + '/about';
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },

    render:function() {
        console.log("ABOUT STATE", this.state);
        console.log("ABOUT PROPS:", this.props);
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

export default About;
