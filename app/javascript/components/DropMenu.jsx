import React from 'react';
import '../../assets/stylesheets/dropdown.css';


class DropMenu extends React.Component {
constructor(){
 super();
};


render() {
  return (
      <div><ul>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Tyres</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Wheels</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Group set</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Brake pads</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Bottom Bracket</button></li>
       <li><button type="button" className="list-group-item list-group-item-action active">
       Other</button></li>
        </ul>
        </div>

    );
  }
}

export default DropMenu;
