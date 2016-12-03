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
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import Directions from 'material-ui/svg-icons/maps/directions';
import HourglassEmpty from 'material-ui/svg-icons/action/hourglass-empty';
import Link from 'material-ui/svg-icons/content/link';
import Phone from 'material-ui/svg-icons/communication/phone';


//    /////
//    COMPONENT
//    /////
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
                        <span style={{direction: 'ltr'}}> {this.props.listing.address}
                        </span>
                    }
                    showExpandableButton={true}
                />
                <CardActions>
                    <FlatButton secondary={true}
                        icon={<Directions />}
                        label="Placeholder"
                        href={"#"}/>
                    {this.props.listing.hours &&
                        <FlatButton secondary={true}
                            disabled={true}
                            icon={<HourglassEmpty/>}
                            label={this.props.listing.hours}
                             />
                    }
                    {this.props.listing.link &&
                        <FlatButton secondary={true}
                            icon={<Link />}
                            label={this.props.listing.link}
                            href={this.props.listing.link}/>
                    }
                    {this.props.listing.phone &&
                        <FlatButton secondary={true}
                            icon={<Phone />}
                            label={this.props.listing.phone}
                            href={"tel:" + this.props.listing.phone}/>
                    }
                </CardActions>
                <CardText expandable={true}>
                    {this.props.listing.hours}
                    <Divider />
                    <p><em>
                        {this.props.listing.description}
                    </em></p>
                    <Divider />
                    {this.props.listing.services}
                </CardText>
            </Card>
        );
    }
});

export default Listing;
