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
var Admin = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return {
            submissions: []
        };
    },
    componentWillMount: function() {
        var ref = firebase.database().ref('submissions/' + this.props.lang);
        this.bindAsArray(ref, 'submissions');
    },
    
    render:function() {
        var listings = this.state.submissions;
        return (
            <div>
                <p>
                    Admin View
                </p>
                {listings.map((listing, i) =>
                    <Listing key={i}
                        isRTL={false}
                        listing={listing}
                        phoneTitle={": "}
                        websiteTitle={'Website:'}
                        />
                )}
            </div>
        );
    }
});

export default Admin;
