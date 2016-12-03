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
            errorDesc: 'Required (60 character minimum)',
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
            this.setState({ errorName: '' });
        } else {
            this.setState({ errorName: 'Required' });
        }
    },
    checkAddress:function(e) {
        if (e.target.id === 'address'
            & e.target.value.split(' ').length > 4) {
            this.setState({ errorAddress: '' });
        } else {
            this.setState({ errorAddress: 'Required' });
        }
    },
    checkDesc:function(e) {
        if (e.target.id === 'description'
                & e.target.value.length > 60) {
            this.setState({ errorDesc: '' });
        } else {
            this.setState({ errorDesc: 'Required (60 character minimum)' });
        }
    },
    /////
    checkServices:function(e) {
//        var previousState = this.state;
//        if (e.target.value.length > 6) {
//            this.setState( previousState=>{
//                previousState.form.services=e.target.value;
//                return previousState;
//            });
//        }

        var temp = this.state.form;
        if (e.target.value.length > 6) {
            temp.services = e.target.value;
            this.setState({form: temp});
        }
    },
//    checkHours:function(e) {
//        if e.target.value.length > 3) {
//            this.setState({ errorDesc: '' });
//        } else {
//            this.setState({ errorDesc: 'Required (60 character minimum)' });
//        }
//    },
//    checkLink:function(e) {
//        if (e.target.id === 'description'
//            & e.target.value.length > 60) {
//            this.setState({ errorDesc: '' });
//        } else {
//            this.setState({ errorDesc: 'Required (60 character minimum)' });
//        }
//    },
//    checkPhone:function(e) {
//        if (e.target.id === 'description'
//            & e.target.value.length > 60) {
//            this.setState({ ph: '' });
//        } else {
//            this.setState({ errorDesc: 'Required (60 character minimum)' });
//        }
//    },
    

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
                            floatingLabelText="Service Name"
                            errorText={this.state.errorName}
                            onChange={this.checkName}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            id="address"
                            floatingLabelText="Address"
                            errorText={this.state.errorAddress}
                            onChange={this.checkAddress}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            id="description"
                            floatingLabelText="Description (1 paragraph)"
                            errorText={this.state.errorDesc}
                            onChange={this.checkDesc}
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
                            floatingLabelText="Hours"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            floatingLabelText="Web Link"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
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
