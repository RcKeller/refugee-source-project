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


//import firebase from 'firebase';
//import ReactFireMixin from 'reactfire';


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

//    /////
//    COMPONENT
//    /////
const styles = {
    radioButton: {
        margin: 15,
    },
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
                primary: '',
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

    /*
    Every field has a custom error and validation.
    Seems long and redundant, but it's more readable
    and extensible this way. Why have a dozen separate field components?
    */
    checkLang:function(e) {
        this.setState({ formLanguage: e.target.value });
    },
    
    //  The next 3 required fields are validated:
    checkName:function(e) {
        console.log("TARGET:", e.target);
        if (e.target.id === 'name'
            & e.target.value.length > 8) {
            var temp = this.state.form;
            temp.name = e.target.value;
            this.setState({
                errorName: '',
                form: temp
            });
        } else {
            this.setState({errorName: 'Required' });
        }
    },
    checkAddress:function(e) {
        if (e.target.id === 'address'
            & e.target.value.split(' ').length > 4) {
            var temp = this.state.form;
            temp.address = e.target.value;
            this.setState({
                errorAddress: '',
                form: temp
            });
        } else {
            this.setState({ errorAddress: 'Required' });
        }
    },
    checkDescription:function(e) {
        if (e.target.id === 'description'
                & e.target.value.length > 60) {
            var temp = this.state.form;
            temp.description = e.target.value;
            this.setState({
                errorDescription: '',
                form: temp
            });
        } else {
            this.setState({ errorDesc: 'Required (60 character minimum)' });
        }
    },
    /////
    checkServices:function(e) {
        var temp = this.state.form;
        if (e.target.value.length > 6) {
            temp.services = e.target.value;
            this.setState({form: temp});
        }
    },
    checkHours:function(e) {
        var temp = this.state.form;
        if (e.target.value.length > 4) {
            temp.hours = e.target.value;
            this.setState({form: temp});
        }
    },
    checkLink:function(e) {
        var temp = this.state.form;
        if (e.target.value.length > 8) {
            temp.link = e.target.value;
            this.setState({form: temp});
        }
    },
    checkPhone:function(e) {
        var temp = this.state.form;
        if (e.target.value.phone >= 9) {
            temp.phone = e.target.value;
            this.setState({form: temp});
        }
    },
    

    render:function() {
        console.log("FORM STATE:", this.state);
        return (
            <Container>
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
                        </RadioButtonGroup>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={12}>
                        <TextField
                            id="name"
                            onChange={this.checkName}
                            floatingLabelText="Service Name"
                            errorText={this.state.errorName}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            id="address"
                            onChange={this.checkAddress}
                            floatingLabelText="Address"
                            errorText={this.state.errorAddress}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            id="description"
                            onChange={this.checkDescription}
                            floatingLabelText="Description (1 paragraph)"
                            errorText={this.state.errorDescription}
                            multiLine={true}
                            rows={2}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={12}>
                        <TextField
                            onChange={this.checkServices}
                            floatingLabelText="All Services Offered"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={12}>
                        <TextField
                            onChange={this.checkHours}
                            floatingLabelText="Hours"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            onChange={this.checkLink}
                            floatingLabelText="Web Link"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            onChange={this.checkPhone}
                            floatingLabelText="Phone"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                </Row>
                
            </Container>
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

export default AddForm;
