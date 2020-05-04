/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./dashboard-menu.styles.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export const DashboardMenu = ({ items, changePage }) => (
  
  <div id="dashboard-menu" className="dashboard-menu-container">
    <List disablePadding dense>
      {items.map(({ label, name, route, items: subItems, ...rest }) => {
        return (
          <React.Fragment key={name}>
            <ListItem style={{ paddingLeft: 18 }} onClick={() => changePage(route)} button {...rest}>
              <ListItemText>{label}</ListItemText>
            </ListItem>
            {Array.isArray(subItems) ? (
              <List disablePadding dense>
                {subItems.map((subItem) => {
                  return (
                    <ListItem
                      key={subItem.name}
                      style={{ paddingLeft: 36 }}
                      button
                      dense
                    >
                      <ListItemText>
                        <span className="sidebar-subitem-text">
                          {subItem.label}
                        </span>
                      </ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            ) : null}
          </React.Fragment>
        );
      })}
    </List>
  </div>
);

export default DashboardMenu;
