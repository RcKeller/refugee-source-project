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

import CircularProgress from 'material-ui/CircularProgress';

import Listing from './Listing';


//    /////
//    COMPONENT
//    /////

const styles = {
  loader: {
    textAlign: 'center'
  },
  progress: {
    display: 'inline-block'
  }
};

var Directory = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return {
            resources: []
        };
    },
    componentWillMount: function() {
        var ref = firebase.database().ref('resources/' + this.props.lang);
        this.bindAsArray(ref, 'resources');
    },
    
    render:function() {
        var listings = this.state.resources;
        return (
            <div>
              {listings.length > 0 ?
                <div>
                  {listings.map((listing, i) =>
                      <Listing key={i}
                          isRTL={this.props.isRTL}
                          listing={listing}
                          />
                  )}
                </div>
              :
                <div style={styles.loader}>
                  <CircularProgress size={80} thickness={7} style={styles.progress}/>
                </div>
              }
          </div>
                
        );
    }
});

export default Directory;
