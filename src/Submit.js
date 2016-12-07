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



//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import Paper from 'material-ui/Paper';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import AddForm from './AddForm';
import LoginForm from './LoginForm';
import Admin from './Admin';

//    /////
//    COMPONENT
//    /////
const styles = {
    center: {
        textAlign: 'center'
    }
};
var Submit = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return({
            user: false,
            content: {
                title: '',
                description: '',
                form: {
                    field1: ''
                }
            },
            languages: ['en', 'ar', 'sp', 'ch', 'kh', 'sm', 'rs']
        });
    },

    componentWillMount:function() {
        var path = 'main/' + this.props.lang + '/submit';
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },
  
  login:function(creds) {
    console.log("CREDS:", creds);
    firebase.auth().signInWithEmailAndPassword(creds.form.email, creds.form.password)
    .then(() => {
      console.log("AUTH:", firebase.auth());
      if (firebase.auth()) {
        this.setState({user: true});
      }
    })
    .catch((e) => console.log(e));
  },

    render:function() {
        return (
          <div>
            {!this.state.user ?
            <div>
              <Card>
                  <CardTitle title={this.state.content.title}
                      style={styles.center}/>
                  <CardText>
                      {this.state.content.description}
                      <Paper>
                          <AddForm />
                      </Paper>
                  </CardText>
              </Card>
              <div>
                  <LoginForm login={this.login}/>
              </div>
            </div>
            :
            <div>
              {this.state.languages.map((language, i) => (
                <Card key={i}>
                  <Admin lang={language}/>
                </Card>
              ))}
            </div>
            }
          </div>
        );
    }
});

export default Submit;
