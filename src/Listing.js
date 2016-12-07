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
import {Row, Col} from 'react-grid-system';

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import {green500} from 'material-ui/styles/colors';
import Directions from 'material-ui/svg-icons/maps/directions';
import HourglassEmpty from 'material-ui/svg-icons/action/hourglass-empty';
import Link from 'material-ui/svg-icons/content/link';
import Phone from 'material-ui/svg-icons/communication/phone';

const directions = 'https://www.google.com/maps/dir//'

//    /////
//    COMPONENT
//    /////
const styles = {
  actions: {
    textAlign: 'center'
  },
  iconButton: {
    width: 50
  },
    phoneNumber: {
        textDecoration: 'none',
        color: green500
    }
}
const iconColor = green500;

var Listing = React.createClass ({
    render:function() {
        var adaptiveDirection = {
            direction: (this.props.isRTL ? 'rtl' : 'inherit'),
            margin: 10
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
                        icon={<Directions color={iconColor} />}
                        href={directions + this.props.listing.address}
                    />  
                    {this.props.listing.link &&
                        <FlatButton secondary={true}
                            icon={<Link color={iconColor} />}
                            href={this.props.listing.link}/>
                    }
                    {this.props.listing.phone &&
                        <FlatButton secondary={true}
                            icon={<Phone color={iconColor} />}
                            label={<span style={styles.phoneNumber}>{this.props.listing.phone}</span>}
                            href={"tel:" + this.props.listing.phone}/>
                    }
                    
                </CardActions>
                <CardText expandable={true}>
                  {this.props.listing.hours &&
                    <FlatButton secondary={true}
                      disabled={true}
                      icon={<HourglassEmpty/>}
                      label={this.props.listing.hours}
                      />
                  }
                    <Divider />
                    <p><em>
                        {this.props.listing.description}
                    </em></p>
                    {this.props.listing.services &&
                      <div>
                        <Divider />
                        <br></br>
                        <span>{this.props.listing.services}</span>
                      </div>
                    }
                </CardText>
            </Card>
        );
    }
});

export default Listing;
