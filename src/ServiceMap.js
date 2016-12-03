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


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {Card, CardTitle, CardText} from 'material-ui/Card';


//    /////
//    COMPONENT
//    /////
const styles = {
    card: {
        marginBottom: 10,
        marginTop: 10,
        direction: 'inherit'
    },
    header: {
        textAlign: 'center'
    }
};
var ServiceMap = React.createClass ({
    render:function() {
        return (
            <div>
                <Card style={styles.card}>
                    <CardTitle title={this.props.content.title} style={styles.header}/>
                    <CardText>
                        <p>
                            {this.props.content.description}
                        </p>
                    </CardText>
                </Card>
            </div>
        );
    }
});

export default ServiceMap;
