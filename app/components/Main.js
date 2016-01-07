var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            NAVBAR
          </div>
        </nav>
        <div className="container">
          {this.props.children}
          CHILDREN
        </div>
      </div>
    )
  }
});

module.exports = Main;