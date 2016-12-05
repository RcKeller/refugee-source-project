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
import Paper from 'material-ui/Paper';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import AddForm from './AddForm';
import LoginForm from './LoginForm';

//    /////
//    COMPONENT
//    /////
const styles = {
    center: {
        textAlign: 'center'
    }
};
var Submit = React.createClass ({
    mixins: [ReactFireMixin],
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

    componentWillMount:function() {
        var path = 'main/' + this.props.lang + '/submit';
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },

    render:function() {
        return (
          <div>
            <Card>
                <CardTitle title={this.state.content.title}
                    style={styles.center}/>
                <CardText>
                    {this.state.content.description}
                    <Paper>
                        <AddForm />
                    </Paper>
                </CardText>
            </Card>
            <Card>
              <CardText>
                <LoginForm />
              </CardText>
            </Card>
          </div>
        );
    }
});

export default Submit;
