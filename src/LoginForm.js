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
import {Container, Row, Col} from 'react-grid-system';

import firebase from 'firebase';
// Reactfire is used for binding content references, but since this component is push-only, we don't need the reactfire mixin - firebase methods suffice.

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


//    /////
//    COMPONENT
//    /////
const styles = {
    form: {
        margin: 30
    },
    radioButton: {
        margin: 15,
    },
    submit: {
        marginTop: 30,
        marginBottom: 30
    },
    button: {
      position: 'absolute',
      right: 0
    }
};
var LoginForm = React.createClass ({

    getInitialState:function() {
        return({
            form: {
                email: '',
                password: ''
            }
        });
    },
    
    submit:function() {
      console.log("submitting login!")
      this.props.login(this.state);
    },
  
    checkUser:function(e) {
        var temp = this.state.form;
        temp.email = e.target.value;
        this.setState({form: temp});
    },
    checkPassword:function(e) {
        var temp = this.state.form;
        temp.password = e.target.value;
        this.setState({form: temp});
    },
    

    render:function() {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <TextField
                            onChange={this.checkUser}
                            floatingLabelText="Admin E-Mail"
                          />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <TextField
                            onChange={this.checkPassword}
                            floatingLabelText="Password"
                          />
                    </Col>
                    <Col sm={12} lg={4}>
                      <FlatButton
                        secondary={true}
                        label="Login"
                        onTouchTap={this.submit}
                      />
                    </Col>
                </Row>
            </Container>
        );
    }
});

export default LoginForm;
