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

import {Card, CardTitle, CardText} from 'material-ui/Card';


import Listing from './Listing';


//    /////
//    COMPONENT
//    /////

const styles = {
  header: {
    textAlign: 'center'
  },
  description: {
    padding: 20
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
                          phoneTitle={this.props.content.phone + ": "}
                          websiteTitle={this.props.content.website}
                          />
                  )}
                </div>
              :
              <span>Loading...</span>
              }
          </div>
                
        );
    }
});

export default Directory;
