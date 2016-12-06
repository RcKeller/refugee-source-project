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
        marginTop: 100,
        textAlign: 'center'
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
                    <RaisedButton secondary={true} label="English"
                        onTouchTap={() => this.props.setLang('en')} />
                    <RaisedButton secondary={true} label="Arabic"
                        onTouchTap={function() {
                            this.props.setLang('ar');
                            this.props.setRTL();
                        }.bind(this)}/>
                  <RaisedButton secondary={true} label="español"
                    disabled={true}
                        onTouchTap={() => this.props.setLang('sp')} />
                  <RaisedButton secondary={true} label="Chinese"
                    disabled={true}
                    onTouchTap={() => this.props.setLang('ch')} />
                  <RaisedButton secondary={true}
                    label="Khmer"
                    disabled={true}
                        onTouchTap={() => this.props.setLang('kh')} />
                  <RaisedButton secondary={true}  
                    label="Somali"
                    disabled={true}
                        onTouchTap={() => this.props.setLang('sm')} />
                    <RaisedButton secondary={true} 
                      label="Russian"
                      disabled={true}
                        onTouchTap={() => this.props.setLang('rs')} />
                </CardActions>
            </Card>
        );
    }
});


export default Gateway;
