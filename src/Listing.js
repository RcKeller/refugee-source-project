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

import Directions from 'material-ui/svg-icons/maps/directions';
import HourglassEmpty from 'material-ui/svg-icons/action/hourglass-empty';
import Link from 'material-ui/svg-icons/content/link';
import Phone from 'material-ui/svg-icons/communication/phone';

const directions = 'https://www.google.com/maps/dir//'

//    /////
//    COMPONENT
//    /////
const styles = {
    phoneNumber: {
        textDecoration: 'none'
    }
}
var Listing = React.createClass ({
    render:function() {
        var adaptiveDirection = {
            direction: (this.props.isRTL ? 'rtl' : 'inherit'),
            margin: 10
        };
        return (
          <div>
          {this.props.listing ?
            <Card style={adaptiveDirection}>
                <CardHeader
                    title={this.props.listing.name}
                    subtitle={this.props.listing.address}
                    showExpandableButton={true}
                />
                <CardActions>
                    <FlatButton secondary={true}
                        icon={<Directions />}
                        href={directions + this.props.listing.address}
                    />  
                    {this.props.listing.link &&
                        <FlatButton secondary={true}
                            icon={<Link />}
                            href={this.props.listing.link}/>
                    }
                    {this.props.listing.phone &&
                        <FlatButton secondary={true}
                            icon={<Phone />}
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
                  <p>
                      {this.props.listing.description}
                  </p>
                </CardText>
            </Card>
           :
           <div></div>
            }
          </div>
        );
    }
});

export default Listing;
