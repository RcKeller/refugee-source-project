/* jshint esnext:true */
/*
globals
React:false, ReactDOM: false,
$:false,
firebase:false, firebaseui:false,
Materialize:false,
document:false, window:false, console:false, alert:false, user:false
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); //Soft dependancy for Material-UI

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import {
    green500, green700, grey400,
    blueA100, blueA200, blueA400,
    grey300,
    white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: green500,
        primary2Color: green700,
        primary3Color: grey400,
        accent1Color: green500,
        accent2Color: green500,
        accent3Color: green500,
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
});

import './index.css';

import App from './App';
import Home from './Home';
import Submit from './Submit';
import About from './About';

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="submit" component={Submit}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);


