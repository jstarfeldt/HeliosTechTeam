import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    minWidth: 530,
    maxWidth: 530,
  },
  image: {
    width: 256,
    height: 256,
  },
  img: {
    margin: 'auto',
    display: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const CustomCard = props => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const project = props.project

  // console.log(project.imgUrl)

  let image = project.imgUrl == "" ? 'heliosIcon' : project.imgUrl;


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require('../static/images/' + image + '.jpg')} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  {project.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {project.summary}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Maybe a date here or something
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
};

export default CustomCard;
