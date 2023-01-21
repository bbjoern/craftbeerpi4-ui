import { Collapse, ListItemIcon, Paper, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AppsIcon from "@mui/icons-material/Apps";
import React, { useContext } from "react";
import "../../App.css";
import { CBPiPipeIcon } from "../util/icons/CBPiSensorIcon";
import { DashboardContext } from "./DashboardContext";
const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: "red",
  },
  icon: {
    minWidth: "30px",
  },
  largeIcon: {
    width: 60,
    height: 60,
  },

}));

const Icon = ({ icon }) => {
  const WidgetIcon = icon;
  return <WidgetIcon />;
};

const DashboardSidebarListItem = ({ item }) => {
  const { state, actions } = useContext(DashboardContext);
  const selected = state.selected === item.id;

  const classes = useStyles();
  return (
    <Tooltip title={item.name} placement="right">
    <ListItem
      key={item.id}
      button
      selected={selected}
      onClick={() => {
        actions.add(item);
      }}
    >
      <ListItemIcon className={classes.icon}>{item.icon ? <Icon icon={item.icon} /> : null}</ListItemIcon>
    
    </ListItem></Tooltip>
  );
};

const DashboardWidgetList = () => {
  const { actions, state } = useContext(DashboardContext);
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper >
      <List component="nav" disableGutters={true} dense aria-label="">
        <ListItem disablePadding key="path" button onClick={handleClick} innerDivStyle={{ paddingLeft: 10 }} selected={open}>
          <ListItemIcon className={classes.icon}>
            <AppsIcon />
          </ListItemIcon>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" dense disablePadding>
            {state.widget_list.map((item) => (
              <DashboardSidebarListItem key={item.name} item={item} />
            ))}
            <Tooltip title="Pipe" placement="right"><ListItem
              key="path"
              button
              onClick={() => {
                actions.add_path();
              }}
            >
              <ListItemIcon className={classes.icon}><CBPiPipeIcon/></ListItemIcon>
              
            </ListItem>
           </Tooltip> 
          </List>
        </Collapse>
      </List>
      
    </Paper>
  );
};

export default DashboardWidgetList;
