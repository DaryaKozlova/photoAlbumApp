import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Grid } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = ({ liked }) =>
  makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    avatar: {
      backgroundColor: red[500],
    },
    favouriteIcon: {
      color: liked ? "#F73145" : "rgba(0, 0, 0, 0.54)",
    },
    counter: {
      fontSize: "1rem",
    },
  }));

const Photo = ({
  src,
  title,
  description,
  views,
  published,
  id,
  handleDelete,
}) => {
  const [liked, setLiked] = React.useState(false);

  const classes = useStyles({ liked })();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={published}
      />
      <CardMedia className={classes.media} image={src} title={title} />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardContent>
        <Grid container alignItems="center">
          <Grid item>
            <VisibilityIcon
              color="disabled"
              style={{ paddingTop: 2, marginRight: 8 }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              component="p"
              className={classes.counter}
            >
              {views}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          classes={{ root: classes.favouriteIcon }}
          onClick={() => setLiked(!liked)}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton
          style={{
            marginLeft: "auto",
            marginRight: 2
          }}
          edge="end"
          classes={{ root: classes.deleteIcon }}
          onClick={() => handleDelete(id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Photo;
