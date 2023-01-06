import { Button, Container, Divider, IconButton, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../util/Header";
import ActorTable from "./ActorTable";
import KettleTable from "./KettleTable";
import SensorTable from "./SensorTable";
import FermenterTable from "./FermenterTable";

const useStyles = makeStyles((theme) => ({
  table: {},
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Hardware() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
    <Container maxWidth="lg">
      <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Hardware
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>

      <Divider style={{ marginBottom: 10, marginTop: 10 }} />
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Header title="Kettle">
              <IconButton
                variant="contained"
                onClick={() => {
                  navigate("/kettle");
                }}
              >
                <AddIcon />
              </IconButton>
            </Header>
            <KettleTable />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Header title="Fermenter">
              <IconButton
                variant="contained"
                onClick={() => {
                  navigate("/fermenter");
                }}
              >
                <AddIcon />
              </IconButton>
            </Header>
            <FermenterTable />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Header title="Sensor">
              

              <IconButton
                variant="contained"
                onClick={() => {
                  navigate("/sensor");
                }}
              >
                <AddIcon />
              </IconButton>
            </Header>
            <SensorTable />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Header title="Actor">
            <IconButton
                variant="contained"
                onClick={() => {
                  navigate("/actor");
                }}
              >
                <AddIcon />
              </IconButton>
            </Header>
            <ActorTable />
          </Paper>
        </Grid>
      </Grid>
      </Container>
    </>
  );
}
