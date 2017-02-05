import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var output = document.getElementById("root");

 /*var header = ["Name","Profession","Salary","Position","Age"]
 var body = [
             ["Gulfam","Gardener","10,000","Seniour","32"],  
             ["Hasnain","Teacher","50,000","Seniour","28"],
             ["Fahad","Headmaster","60,000","Seniour","26"],
             ["Zain","Teacher","50,000","Seniour","22"],
             ["Salman","Officeboy","5,000","Juniour","18"],
             ["Fazal","Officeboy","6,000","Juniour","15"],
             ["Zubair","Teacher","50,000","Seniour","55"]
             ]


var Table = React.createClass({
  getInitialState:function(){
   return{
     body:this.props.body,
     sortby:null,
     descending:false,
     edit:null
  } 
  },
  
  sorting:function(e){
    var cell = e.target.cellIndex;
    var copydata = this.state.body.slice();
    copydata.sort(function(a,b){
      return(
        a[cell] > b[cell]
      )
    });
    this.setState({
      body:copydata,
    })
  },
  edit:function(e){
    this.setState({
      editit:{
        row:parseInt(e.target.dataset.row,10),
        cell:e.target.cellIndex.row
      }
    })      
  },
  render:function(){
    return(
      <table style={{backgroundColor:"lightgrey",width:"500px",margin:"15% auto",fontSize:"20px",padding:"20px",border:"1px solid black",boxShadow:"1px 1px 10px black"}}>
        <thead onClick={this.sorting}>
          <tr>
            {
              this.props.header.map(function(arry,indx){
              return(  
                <td id={indx}>{arry}</td>
              )
            })}
          </tr>
        </thead>
        <tbody onDoubleClick={this.edit}>
         {
           this.state.body.map(function(arry,indx){
             return(
                <tr id={indx}>
                  {
                    arry.map(function(arry2,indx2){
                      var data = arry2;

                      return(
                          <td id={indx2} data-row={indx2}>
                            {data}
                            </td>
                      )
                    })
                  }
                </tr>
             )
           })
         }
        </tbody>
      </table>
    )
  }
})



ReactDOM.render(
  <Table
  header = {header}
  body = {body}
  />,
    output    
  
)*/



var headers = [
"Book", "Author", "Language", "Published", "Sales"
];
var data = [
["The Lord of the Rings", "J. R. R. Tolkien",
"English", "1954–1955", "150 million"],
["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
"French", "1943", "140 million"],
["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
"English", "1997", "107 million"],
["And Then There Were None", "Agatha Christie",
"English", "1939", "100 million"],
["Dream of the Red Chamber", "Cao Xueqin",
"Chinese", "1754–1791", "100 million"],
["The Hobbit", "J. R. R. Tolkien",
"English", "1937", "100 million"],
["She: A History of Adventure", "H. Rider Haggard",
"English", "1887", "100 million"],
];
var Excel = React.createClass({
  _save: function(e) {
e.preventDefault();
var input = e.target.firstChild;
var data = this.state.data.slice();
data[this.state.edit.row][this.state.edit.cell] = input.value;
this.setState({
edit: null, 
data: data,
});
},

propTypes: {
headers: React.PropTypes.arrayOf(
React.PropTypes.string
),
initialData: React.PropTypes.arrayOf(
React.PropTypes.arrayOf(
React.PropTypes.string
)
),
},


_showEditor: function(e) {
this.setState({edit: {
row: parseInt(e.target.dataset.row, 10),
cell: e.target.cellIndex,
}});
},


getInitialState: function() {
return {
data: this.props.initialData,
sortby: null,
descending: false,
edit: null, 
};
},


_sort:function(e){
var column = e.target.cellIndex;
var data = this.state.data.slice();
var descending = this.state.sortby === column && !this.state.descending;
data.sort(function(a,b){
  return descending
  ?a[column] < b[column]
  :a[column] > b[column];
});
this.setState({
  data:data,
  sortby:column,
  descending:descending
});

},

render: function() {
return (
React.DOM.table(null,
React.DOM.thead({onClick:this._sort},
React.DOM.tr(null,
this.props.headers.map(function(title, idx) {
  if (this.state.sortby === idx) {
title += this.state.descending ? ' \u2191' : ' \u2193'
}

return React.DOM.th({key: idx}, title);
},this)
)
),
React.DOM.tbody({onDoubleClick: this._showEditor},
this.state.data.map(function(row, rowidx) {
return (
React.DOM.tr({key: rowidx},
row.map(function(cell, idx) {
  var content = cell;
  var edit = this.state.edit;
  if (edit && edit.row === rowidx && edit.cell === idx) {
  content = React.DOM.form({onSubmit: this._save},
React.DOM.input({
type: 'text',
defaultValue: content,
})
);
}

return React.DOM.td({
  key: idx,
  "data-row":rowidx
}, cell);
},this)
)
);
},this)
)


)
);
}
})

ReactDOM.render(
React.createElement(Excel, {
headers: headers,
initialData: data,
}),
output
);