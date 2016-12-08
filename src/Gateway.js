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

import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

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
        display: 'inline-block',
        textAlign: 'center',
        maxWidth: 500,
        margin: 100,
        //  slight transparency
        opacity: 0.95,
        filter: 'alpha(opacity=95)',
        //  clearer text
        fontWeight: 'bold'
    },
    button: {
      margin: 5
    }

};
var Gateway = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
      return {
        text: {
          'en': 'English',
          'ar': 'Arabic',
          'sp': 'Spanish',
          'ch': 'Chinese (Simplified)',
          
          'kh': 'Khmer (Cambodia)',
          'sm': 'Somali',
          'rs': 'Russian'
        }
      }
    },
  
    componentWillMount: function() {
        var ref = firebase.database().ref('languages');
        this.bindAsObject(ref, 'text');
    },
  
    /*
    Material-UI is a bit weird. You can't pass args for buttons.
    Thus, separate anonymous functions
    */
    render:function() {
      console.log(this.state);
        return (
            <Card style={styles.card}>
                <CardTitle title="Welcome to Emerald Refuge" />
                <CardActions>
                  <RaisedButton label={this.state.text.en}
                    style={styles.button} secondary={true}
                    onTouchTap={() => this.props.setLang('en')} />
                  <RaisedButton label={this.state.text.ar}
                    style={styles.button} secondary={true}
                    onTouchTap={function() {
                      this.props.setLang('ar');
                      this.props.setRTL();
                    }.bind(this)}/>
                  <RaisedButton label={this.state.text.sp}
                    style={styles.button} secondary={true}
                    onTouchTap={() => this.props.setLang('sp')} />
                  <RaisedButton label={this.state.text.ch}
                    style={styles.button} secondary={true}
                    onTouchTap={() => this.props.setLang('ch')} />
                  <RaisedButton label={this.state.text.kh}
                    style={styles.button} secondary={true}
                    onTouchTap={() => this.props.setLang('kh')} />
                  <RaisedButton label={this.state.text.sm}
                    style={styles.button} secondary={true}
                    onTouchTap={() => this.props.setLang('sm')} />
                  <RaisedButton label={this.state.text.rs}
                    style={styles.button} secondary={true}
                    onTouchTap={() => this.props.setLang('rs')} />
                </CardActions>
            </Card>
        );
    }
});


export default Gateway;
