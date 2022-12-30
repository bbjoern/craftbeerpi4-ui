import { Container } from "@material-ui/core";
//import AppBar from "@material-ui/core/AppBar";
//import Badge from "@material-ui/core/Badge";
import CssBaseline from "@material-ui/core/CssBaseline";
//import Drawer from "@material-ui/core/Drawer";
//import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
//import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
//import MenuIcon from "@material-ui/icons/Menu";
//import NotificationsIcon from "@material-ui/icons/Notifications";
import React, {useRef, useLayoutEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CompatRouter, CompatRoute} from "react-router-dom-v5-compat";
import "./App.css";
import About from "./components/about";
//import { configapi } from "./components/data/configapi";
import Upload from "./components/upload";
import CBPiSystem from "./components/system";
import {Dashboard2 , FixDashboard} from "./components/dashboard/Dashboard";
import Hardware from "./components/hardware";
import ActorForm from "./components/hardware/ActorForm";
import KettleForm from "./components/hardware/KettleForm";
import FermenterForm from "./components/hardware/FermenterForm";
import SensorForm from "./components/hardware/SensorForm";
import Plugins from "./components/plugins";
import MashProfile from "./components/mashprofile";
import FermenterProfile from "./components/fermenterprofile";
import Settings from "./components/settings";
//import Menu from "./components/util/Menu";
//import PrivateRoute from "./components/util/PrivateRoute";
//import logo from "./images/cbpi_no_border.png";
import StepForm from "./components/mashprofile/StepForm";
import FermenterStepForm from "./components/fermenterprofile/FermenterStepForm";
import Recipes from "./components/recipes";
import FermenterRecipes from "./components/fermenterrecipes";
import RecipeEditor from "./components/recipes/RecipeEditor";
import FermenterRecipeEditor from "./components/fermenterrecipes/FermenterRecipeEditor";
import { Charting } from "./components/charting";
import MainMenu from "./components/MainMenu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,

    height: "100vh",
//    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    position: "absolute",
//	top: "64px",
	bottom: 0,
	overflowY: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  dashoard: {
    data: theme.mixins.toolbar,
  },
  snack: {
    position: "absolute",
    bottom: 10,
    right: 30,
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const CraftBeerPiApp = () => {
  const classes = useStyles();
  const navBarRef = useRef();
  const [appBarHeight, setAppBarHeight] = useState(64);
    
 
  useLayoutEffect(() => {
    const updateNavBarHeight = () => {
      if (!navBarRef.current)
        return;
      const newHeight = navBarRef.current.clientHeight;
//	  console.log("Navbar height = " + newHeight);
      setAppBarHeight(newHeight);
    };
    window.addEventListener("resize", updateNavBarHeight);
    updateNavBarHeight();
    return () => window.removeEventListener("resize", updateNavBarHeight);
  }, []);

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <CompatRouter>
        <Switch>
          <Route path="/" >
              <MainMenu />
            {/* <Container maxWidth={false} className={classes.container} style={{ top: appBarHeight }}>*/}
                  <CompatRoute exact path="/" component={Dashboard2}/> 
                  <CompatRoute exact path="/fixdash/:dashboardid" component={FixDashboard} />
                  <CompatRoute path="/plugins" component={Plugins} />
                  <CompatRoute path="/about" component={About} />
                  <CompatRoute path="/upload" component={Upload} />
                  <CompatRoute path="/system" component={CBPiSystem}/>
                  <CompatRoute path="/hardware" component={Hardware}/>
                  <CompatRoute exact path="/kettle/:id" component={KettleForm}/>
                  <CompatRoute exact path="/kettle" component={KettleForm}/>
                  <CompatRoute exact path="/fermenter/:id" component={FermenterForm}/>
                  <CompatRoute exact path="/fermenter" component={FermenterForm}/>
                  <CompatRoute exact path="/actor/:id" component={ActorForm}/>
                  <CompatRoute exact path="/actor" component={ActorForm}/>
                  <CompatRoute exact path="/sensor/:id" component={SensorForm}/>
                  <CompatRoute exact path="/sensor" component={SensorForm}/>
                  <CompatRoute path="/settings" component={Settings}/>
                  <CompatRoute path="/mashprofile" component={MashProfile}/>
                  <CompatRoute exact path="/fermenterprofile/:fermenterid" component={FermenterProfile}/>  
                  <CompatRoute exact path="/fermenterprofile" component={FermenterProfile}/>       
                  <CompatRoute path="/recipes" component={Recipes}/>
                  <CompatRoute path="/fermenterrecipes" component={FermenterRecipes}/>
                  <CompatRoute path="/recipe/:id" component={RecipeEditor}/>
                  <CompatRoute path="/fermenterrecipe/:id" component={FermenterRecipeEditor}/>
                  <CompatRoute exact path="/step/:id" component={StepForm}/>
                  <CompatRoute exact path="/step" component={StepForm}/>
                  <CompatRoute exact path="/fermenterstep/:id/:fermenterid" component={FermenterStepForm}/>
                  <CompatRoute exact path="/fermenterstep/:fermenterid" component={FermenterStepForm}/>
                  <CompatRoute exact path="/fermenterstep" component={FermenterStepForm}/>
                  <CompatRoute path="/charting" component={Charting}/>
                  
              {/*/Container>*/}
            

          </Route>
          
        </Switch>
        </CompatRouter>
      </Router>
    </div>
  );
};

export default CraftBeerPiApp;

/*

*/
