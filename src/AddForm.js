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
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

//    /////
//    COMPONENT
//    /////
const styles = {
    center: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto'
//        textAlign: 'center'
    }
};
var AddForm = React.createClass ({
    getInitialState:function() {
        return({
            errorService: 'Required',
            errorAddress: 'Required',
            errorDesc: 'Required (60 character minimum)',
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
    checkService:function(event) {
        console.log("TARGET:", event.target);
        if (event.target.id === 'service'
            & event.target.value.length > 8) {
            this.setState({ errorService: '' });
        } else {
            this.setState({ errorService: 'Required' });
        }
    },
    checkAddress:function(event) {
        if (event.target.id === 'address'
            & event.target.value.split(' ').length > 4) {
            this.setState({ errorAddress: '' });
        } else {
            this.setState({ errorAddress: 'Required' });
        }
    },
    checkDesc:function(event) {
        if (event.target.id === 'description'
                & event.target.value.length > 60) {
            this.setState({ errorDesc: '' });
        } else {
            this.setState({ errorDesc: 'Required (60 character minimum)' });
        }
    },

    render:function() {
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <TextField
                            id="service"
                            floatingLabelText="Service Name"
                            errorText={this.state.errorService}
                            onChange={this.checkService}
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
                            floatingLabelText="All Services Offered"
                            hintText="Optional"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            floatingLabelText="Primary Service"
                            hintText="One only (Optional)"
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
