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

import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Delete from 'material-ui/svg-icons/action/delete';

import Listing from './Listing';


//    /////
//    COMPONENT
//    /////
var Admin = React.createClass ({
  mixins: [ReactFireMixin],
  getInitialState:function() {
    return {
      submissions: [],
      approvals: [],
      origin: '',
      destination: ''
    };
  },
  componentWillMount: function() {
    var origin = 'submissions/' + this.props.lang;
    var destination = 'resources/' + this.props.lang;
    //Set paths for future reference and creating unique paths.
    this.setState({
      origin: origin,
      destination: destination
    });
    //Binding two firebase nodes
    var originRef = firebase.database().ref(origin);
    var destinationRef = firebase.database().ref(destination);
    this.bindAsArray(originRef, 'submissions');
    this.bindAsArray(destinationRef, 'approvals');
    
  },
  
  approve: function(key) {
    console.log("KEY", key);
    var ref = firebase.database().ref(this.state.origin + '/' + key);
    ref.once('value').then((snapshot) => {
      var approval = snapshot.val();
      console.log(approval);
      //firebaseRefs refers to nodes bound by reactfire.
      this.firebaseRefs.approvals.push(approval);
    });
  },
  delete: function(key) {
    console.log(key);
  },

  render:function() {
    var listings = this.state.submissions;
    return (
      <Paper>
        <h1>Directory Submissions for Approval</h1>
        {listings.map((listing, i) => (
          <Card key={i}>
            <CardHeader
              title={'Submission language: ' + this.props.lang }
              />
            <CardText>
              <Listing key={i}
                isRTL={false}
                listing={listing}
                phoneTitle={": "}
                websiteTitle={'Website:'}
                />
            </CardText>
            <CardActions>
              <FlatButton
                icon={<CheckCircle color={'green'} />}
                onTouchTap={this.approve.bind(this, listing['.key'])}
                />
              <FlatButton
                icon={<Delete color={'red'} />}
                onTouchTap={this.delete.bind(this, listing['.key'])}
                />
            </CardActions>
          </Card>
        )
                     )}
      </Paper>
    );
  }
});

export default Admin;