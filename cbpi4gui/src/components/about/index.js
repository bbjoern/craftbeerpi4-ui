import { Divider, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../../images/cbpi.png";
import pythonlogo from "../../images/python-powered.png"
import reactlogo from "../../images/Reacticon.png"
import { useCBPi } from "../data";
import paypal_logo from "./paypal.png";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  const {state} = useCBPi();
  
  return (
    <Container maxWidth="lg" >
    <div>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            About
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Divider style={{ marginBottom: 10, marginTop: 10 }} />

      <Grid container spacing={2} className={classes.root}>
        <Grid item spacing={2} xs={12}>
          <Paper style={{ padding: 10 }}>
            This is CraftBeerPi Brewing Controller 4 ( Serverversion: {state.version} - Codename: {state.codename} || GUIversion: {state.guiversion} )
            <p>It's an Open Source Project founded in 2015. More than 7,000 passioned Homebrewers and commercial Craft Brewerys are using CraftBeerPi. It's an open Eco System.</p>
            Website: http://www.CraftBeerPi.com <br />
            GitHub: http://github.com/manuel83 <br />
            Pypi: https://pypi.org/project/cbpi4/ <br />
            Facebook: https://www.facebook.com/groups/craftbeerpi<br />
            <br />
            GitHub fork from Alexander Vollkopf: http://github.com/avollkopf <br />
            Pypi: https://pypi.org/project/cbpi4/ <br />
            Openbrewing Documentation: <Button color="primary" target="_blank" href="https://openbrewing.gitbook.io/craftbeerpi4_support/" rel="noreferrer noopener">Link to Documentation</Button>
            <br />
            <br />
            <br />
            <div
              style={{
              display: "flex",
              alignItems: "center",
              }}
              >
            The server is based on python: https://www.python.org/ -<img width={30} src={pythonlogo} alt="PythonLogo"/>
            </div>
            <br/>
            <div
              style={{
              display: "flex",
              alignItems: "center",
              }}
              >
            The User Interface is based on React components: https://reactjs.org/ -<img width={30} src={reactlogo} alt="ReactLogo"/>
            </div>
            <br/>
            <p>Cheers,</p>
            <p> Manuel Fritsch / Alexander Vollkopf</p>
            <img width={30} src={logo} alt="Logo" /> CraftBeerPi
          </Paper>
        </Grid>
        <Grid item spacing={2} xs={12}>
          <Paper style={{ padding: 10 }}>
            <h3>License</h3>
            <p>GNU General Public License 3</p>
          </Paper>
        </Grid>
        <Grid item spacing={2} xs={12}>
          <Paper style={{ padding: 10 }}>
            <h3>PayPal Donation</h3>
            <p>CraftBeerPi is an free an open source project. If you like this software support this project with a donation.
              The donation is used to buy hardware and software to build this product. 
            </p>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="QA2DR6FKNF6VN" />
        <input
          type="image"
          src={paypal_logo}
          border="0"
          width="200px"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img alt="" border="0" src={paypal_logo} width="1" height="1" />
      </form>
          </Paper>
        </Grid>
        
      </Grid>
      
      
    </div>
    </Container>
  );
};

export default About;
