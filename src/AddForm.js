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
            <Container>
                <Row>
                    <Col sm={12}>
                        <TextField
                            floatingLabelText="Service Name"
                            errorText="Required"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            floatingLabelText="Address"
                            errorText="Required"
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                    <Col sm={12}>
                        <TextField
                            floatingLabelText="Description (1 paragraph)"
                            errorText="Required"
                            multiLine={true}
                            rows={2}
                            fullWidth={true}
                            />
                        <br></br>
                    </Col>
                </Row>
                <Divider />
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
                <Divider />
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
