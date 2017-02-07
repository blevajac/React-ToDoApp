var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function(){
      var showCompleted = this.refs.showCompleted.checked;
      var searchText = this.refs.searchText.value;

      this.props.onSearch(showCompleted, searchText);
    },
    render: function() {
        return (
            <div>
                    <div>
                          <input type="search" ref="searchText" placeholder="Pronađite Todo stavke" onChange={this.handleSearch}/>
                    </div>
                    <div>
                          <lable>
                                <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
                                Prikaži završene zadatke
                          </lable>
                    </div>
            </div>
        );
    }
});

module.exports = TodoSearch;
