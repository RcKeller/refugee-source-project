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
import RaisedButton from 'material-ui/RaisedButton';


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
    }
};
var AddForm = React.createClass ({

    getInitialState:function() {
        return({
            errorName: 'Required',
            errorAddress: 'Required',
            errorDescription: 'Required (60 character minimum)',
            form: {
                name: '',
                address: '',
                description: '',
                services: '',
                hours: '',
                link: '',
                phone: ''
            },
            formLanguage: 'en',
            content: {
                title: '',
                description: '',
                form: {
                    field1: ''
                }
            }
        });
    },
    
    submit:function() {
        console.log("Submitting:", this.state.form);
        console.log("Selected Lang:", this.state.formLanguage);
        var path = "submissions/" + this.state.formLanguage;
        var ref = firebase.database().ref(path);
        ref.push(this.state.form);
    },

    /*
    Every field has a function for processing
    Seems long and redundant, but it's more readable and extensible this way. Why have a dozen separate field components?
    */
    checkLang:function(e) {
        //Radio buttons don't need validation
        this.setState({ formLanguage: e.target.value });
    },
    
    //  The next 3 required fields are validated:
    checkName:function(e) {
        var temp = this.state.form;
        if (e.target.value.length > 8) {
            
            temp.name = e.target.value;
            this.setState({
                errorName: '',
                form: temp
            });
        } else {
            this.setState({
                errorName: 'Required',
                form: temp
            });
        }
    },
    checkAddress:function(e) {
        var temp = this.state.form;
        if (e.target.value.split(' ').length > 4) {
            temp.address = e.target.value;
            this.setState({
                errorAddress: '',
                form: temp
            });
        } else {
            this.setState({
                errorAddress: 'Required',
                form: temp
            });
        }
    },
    checkDescription:function(e) {
        var temp = this.state.form;
        if (e.target.value.length > 60) {
            temp.description = e.target.value;
            this.setState({
                errorDescription: '',
                form: temp
            });
        } else {
            this.setState({
                errorDesc: 'Required (60 character minimum)',
                form: temp
            });
        }
    },
    /*
    The following fields are optional and don't undergo validation.
    This is because an admin will review them, and to reduce code overhead.
    */
    checkServices:function(e) {
        var temp = this.state.form;
        temp.services = e.target.value;
        this.setState({form: temp});
    },
    
    checkHours:function(e) {
        var temp = this.state.form;
        temp.hours = e.target.value;
        this.setState({form: temp});
    },
    checkPhone:function(e) {
        var temp = this.state.form;
        temp.phone = e.target.value;
        this.setState({form: temp});
    },
    checkLink:function(e) {
        var temp = this.state.form;
        temp.link = e.target.value;
        this.setState({form: temp});
    },
    

    render:function() {
        return (
            <Container style={styles.form}>
                <Row>
                    <Col sm={12}>
                        <RadioButtonGroup name="Language" 
                            defaultSelected="en"
                            onChange={this.checkLang}>
                            <RadioButton
                              value="en"
                              label="English"
                              style={styles.radioButton}
                              />
                            <RadioButton
                              value="ar"
                              label="Arabic"
                              style={styles.radioButton}
                              />
                            <RadioButton
                              value="sp"
                              label="Spanish"
                              style={styles.radioButton}
                              />
                            <RadioButton
                              value="ch"
                              label="Chinese"
                              style={styles.radioButton}
                              />
                            <RadioButton
                              value="kh"
                              label="Khmer (Cambodian)"
                              style={styles.radioButton}
                              />
                            <RadioButton
                              value="sm"
                              label="Somali"
                              style={styles.radioButton}
                              />
                            <RadioButton
                              value="rs"
                              label="Russian"
                              style={styles.radioButton}
                              />
                        </RadioButtonGroup>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={12} md={6}>
                        <TextField
                            id="name"
                            onChange={this.checkName}
                            floatingLabelText="Service Name"
                            errorText={this.state.errorName}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField
                            id="address"
                            onChange={this.checkAddress}
                            floatingLabelText="Address"
                            errorText={this.state.errorAddress}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                <Row>
                    
                </Row>
                    <Col sm={12} md={6}>
                        <TextField
                            id="description"
                            onChange={this.checkDescription}
                            floatingLabelText="Description (1 paragraph)"
                            errorText={this.state.errorDescription}
                            multiLine={true}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField
                            onChange={this.checkServices}
                            floatingLabelText="All Services Offered"
                            hintText="Optional"
                            multiLine={true}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <TextField
                            onChange={this.checkHours}
                            floatingLabelText="Hours"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <TextField
                            onChange={this.checkPhone}
                            floatingLabelText="Phone"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12} lg={4}>
                        <TextField
                            onChange={this.checkLink}
                            floatingLabelText="Web Link"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                </Row>
                
                <RaisedButton
                    label="Submit Directory Entry"
                    onTouchTap={this.submit}
                    primary={true}
                    fullWidth={true}
                    style={styles.submit}/>

                
            </Container>
        );
    }
});

export default AddForm;
