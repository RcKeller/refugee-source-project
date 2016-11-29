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
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


//    /////
//    COMPONENT
//    /////
const styles = {
    card: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    }
};
var ServiceMap = React.createClass ({
    render:function() {
        return (
            <div>
                <Card style={styles.card}>
                    <CardTitle title="Home - Map"/>
                    <CardText>
                        Language: {this.props.lang}
                        <p>
                            This is the ServiceMap component.
                            It's not called "Map" due to a namespace conflict.
                        </p>
                    </CardText>
                </Card>
            </div>
        );
    }
});

export default ServiceMap;
