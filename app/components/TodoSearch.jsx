var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  /*
    handleSearch: function(){
      var showCompleted = this.refs.showCompleted.checked;
      var searchText = this.refs.searchText.value;

      this.props.onSearch(showCompleted, searchText);
    },
  */  //maknuto radi reduxa i dodan
    render: function() {
        var {dispatch, showCompleted, searchText} = this.props;
        return (
            <div className="container__header">
                    <div>
                          <input type="search" ref="searchText" placeholder="Pronađite Todo stavke" value={searchText} onChange={() => {
                                  var searchText = this.refs.searchText.value;
                                  dispatch(actions.setSearchText(searchText));
                            }}/>
                    </div>
                    <div>
                          <lable>
                                <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                                      dispatch(actions.toggleShowCompleted());
                                  }} />
                                Prikaži završene zadatke
                          </lable>
                    </div>
            </div>
        );
    }
});

export default connect (
  (state) => {
      return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
      }
  }
)(TodoSearch);
