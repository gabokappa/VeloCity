import React from 'react';
import '../../assets/stylesheets/dropdown.css';


class DropDownMenu extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

hideDropdownMenu() {
  this.setState({ displayMenu: false }, () => {
    document.removeEventListener('click', this.hideDropdownMenu);
  });

  }

render() {
  return (
      <div className="dropdown" style={{width:"200px"}} >
       <div className="button" onClick={this.showDropdownMenu}> Choose Component Type </div>

        { this.state.displayMenu ? (
        <ul>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Tyres</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Wheels</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Group set (chain + cogs)</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Brake pads</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Bottom Bracket</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       For a bespoke component please enter your own data</button></li>
        </ul>






      ):
      (
        null
      )
      }

     </div>

    );
  }
}

export default DropDownMenu;
