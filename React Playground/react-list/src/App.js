import React, { Component } from "react";

const items = [
  { label: 'About Us', class: null },
  { label: 'Products', class: null },
  { label: 'Support', class: null },
  { label: 'Contacts', class: null },
];

function List({ items }) {
  return (
    <ul>
      {
        items.map((item, index) => {
          return <li key={index} className={item.class}>{item.label}</li>
        })
      }
    </ul>
  );
}

function SideBar({children}) {
  return (
    <div className="SideBar">
      {children}
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    }
  }

  componentDidMount() {
    items.map((element, index) => {
      this.setState(prevState => ({
        menuItems: prevState.menuItems.concat(element)
      }));

      if((index + 1) >= items.length) {
        items.map((item, index) => {
          const test = setTimeout(() => {
            item.class = 'show';
            
            this.setState(prevState => ({
              menuItems: items
            }));
          }, 200 * (index + 1));
        });
      }
    });
  }

  render() {
    const { menuItems, fadeIn } = this.state;

    return (
      <SideBar>
        <List items={menuItems} />
      </SideBar>
    );
  }
}

export default App;