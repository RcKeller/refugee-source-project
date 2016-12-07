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

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


//    /////
//    COMPONENT
//    /////
const styles = {
    card: {
      marginTop: 50, padding: 0
    },
    header: {
      textAlign: 'center',
      margin: 0, padding: 0
    },
    content: {
      margin: 0, padding: 5
    },
    button: {
      width: '100%',
      marginTop: 25
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
            <Card style={styles.card}>
            <CardTitle title='Staff Login' style={styles.header}/>
              <CardText style={styles.content}>
                <Row>
                    <Col sm={12} md={4}>
                        <TextField
                            onChange={this.checkUser}
                            floatingLabelText="Admin E-Mail"
                            fullWidth={true}
                          />
                    </Col>
                    <Col sm={12} md={4}>
                        <TextField type='password'
                            onChange={this.checkPassword}
                            floatingLabelText="Password"
                            fullWidth={true}
                          />
                    </Col>
                    <Col sm={12} md={4}>
                      <FlatButton
                        secondary={true}
                        label="Login"
                        onTouchTap={this.submit}
                        style={styles.button}
                      />
                    </Col>
                </Row>
            </CardText>
            </Card>
        );
    }
});

export default LoginForm;
