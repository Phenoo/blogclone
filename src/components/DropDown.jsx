import React from 'react'

import "../style/drop.scss"

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
      <div className="drop-down">
        <div className="dropdown">
            {React.cloneElement(trigger, {
              onClick: handleOpen,
            })}
            {open ? (
              <ul className="menu" onClick={handleOpen}>
                {menu.map((menuItem, index) => (
                  <li key={index} className="menu-item">
                    {React.cloneElement(menuItem, {
                      onClick: () => {
                        menuItem.props.onClick();
                        setOpen(false);
                      },
                    })}
                  </li>
                ))}
              </ul>
            ) : null}
        </div>
      </div>
  );
};

export default Dropdown