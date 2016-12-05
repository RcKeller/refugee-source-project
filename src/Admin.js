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

import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';
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
                {listings.map((listing, i) => (
                    <Card>
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
                        />
                        <FlatButton
                          icon={<Delete color={'red'} />}
                        />
                      </CardActions>
                    </Card>
                    )
                )}
            </div>
        );
    }
});

export default Admin;
