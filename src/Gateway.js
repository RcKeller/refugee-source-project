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
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

//    /////
//    COMPONENT
//    /////
const styles = {
    card: {
        maxWidth: 600,
        marginTop: 100,
        textAlign: 'center'
    },
    button: {
      margin: 10
    }
    
};
var Gateway = React.createClass ({
    /*
    Material-UI is a bit weird. You can't pass args for buttons.
    Thus, separate anonymous functions
    */
    render:function() {
        return (
            <Card style={styles.card}>
                <CardTitle title="Language" />
                <CardActions>
                  <RaisedButton label="English"
                    style={styles.button} secondary={true}
                    onTouchTap={() => this.props.setLang('en')} />
                  <RaisedButton label="Arabic"
                    style={styles.button} secondary={true}
                    onTouchTap={function() {
                      this.props.setLang('ar');
                      this.props.setRTL();
                    }.bind(this)}/>
                  <RaisedButton label="español"
                    style={styles.button} secondary={true} 
                    onTouchTap={() => this.props.setLang('sp')} />
                  <RaisedButton label="Chinese"
                    style={styles.button} secondary={true}
                    disabled={true}
                    onTouchTap={() => this.props.setLang('ch')} />
                  <RaisedButton label="Khmer"
                    style={styles.button} secondary={true}
                    disabled={true}
                    onTouchTap={() => this.props.setLang('kh')} />
                  <RaisedButton label="Somali"
                    style={styles.button} secondary={true}
                    disabled={true}
                    onTouchTap={() => this.props.setLang('sm')} />
                  <RaisedButton label="Russian"
                    style={styles.button} secondary={true}
                    disabled={true}
                    onTouchTap={() => this.props.setLang('rs')} />
                </CardActions>
            </Card>
        );
    }
});


export default Gateway;
