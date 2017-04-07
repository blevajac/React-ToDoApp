import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
    onLogin() {
        var {dispatch} = this.props;

        dispatch(actions.startLogin());
    },
    render () {
        return (
            <div>
                <h1 className="page-title">Todo APP</h1>

              <div className="row">
                  <div className="columns small-centered small-10 medium-6 large-4">
                      <div className="callout callout-auth">
                          <h3>Login</h3>
                          <p>
                              Logiranje uz pomoć GitHuba
                          </p>
                          <button className="button" onClick={this.onLogin}>Login pomoću GitHub</button>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
});

export default Redux.connect()(Login);
