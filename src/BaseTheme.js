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
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import {
    green500, green700, grey400,
    blueA100, blueA200, blueA400,
    grey300,
    white, darkBlack, fullBlack, fullWhite
} from 'material-ui/styles/colors';

var BaseTheme = {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    direction: 'rtl',
    isRtl: true,
    palette: {
        primary1Color: green500,
        primary2Color: green700,
        primary3Color: grey400,
        accent1Color: blueA200,
        accent2Color: blueA400,
        accent3Color: blueA100,
        textColor: darkBlack,
        secondaryTextColor: (0, fade)(darkBlack, 0.54),
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: (0, fade)(darkBlack, 0.3),
        pickerHeaderColor: green500,
        clockCircleColor: (0, fade)(darkBlack, 0.07),
        shadowColor: fullBlack
    }
};

export default BaseTheme;
