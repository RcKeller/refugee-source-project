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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';


//    /////
//    COMPONENT
//    /////
const styles = {
    //Adding margin props to cards make their containers responsive to expanding.
    card: {
        margin: 10
    },
};
var Listing = React.createClass ({
    render:function() {
        var adaptiveDirection = {
            direction: (this.props.isRTL ? 'rtl' : 'inherit')
        };
        return (
            <Card style={adaptiveDirection}>
                <CardHeader
                    title={this.props.listing.name}
                    subtitle={
                        <span style={{direction: 'ltr !important'}}> {this.props.listing.address}
                        </span>
                    }
                    showExpandableButton={true}
                />
                <CardActions>
                    {this.props.listing.link &&
                        <FlatButton secondary={true} label={this.props.websiteTitle}
                            href={this.props.listing.link}/>
                    }
                    {this.props.listing.phone &&
                        <FlatButton secondary={true} label={this.props.phoneTitle + this.props.listing.phone}
                            href={"tel:" + this.props.listing.phone}/>
                    }
                </CardActions>
                <CardText expandable={true}>
                    <Divider />
                    <p><em>
                        {this.props.listing.description}
                    </em></p>
                </CardText>
            </Card>
        );
    }
});

export default Listing;
