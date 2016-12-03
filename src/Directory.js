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

import Listing from './Listing';


//    /////
//    COMPONENT
//    /////
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
                <p>
                    {this.props.content.description}
                </p>
                {listings.map((listing, i) =>
                    <Listing key={i}
                        isRTL={this.props.isRTL}
                        listing={listing}
                        phoneTitle={this.props.content.phone + ": "}
                        websiteTitle={this.props.content.website}
                        />
                )}
            </div>
        );
    }
});

export default Directory;
