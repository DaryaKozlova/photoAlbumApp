import { Grid, makeStyles } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React from "react";
import Pagination from "@material-ui/lab/Pagination";

import { loadPhotos } from "../../api/photoApi";
import Photo from "../../components/Photo";

const defaultPhotoUrls = [
  "https://cdnimg.rg.ru/img/content/181/86/29/bely_d_850.jpg",
  "https://tlum.ru/uploads/22fa9437434982ea805c89581a59f5487dff254c222261114e9668c829225a9f.jpeg",
  "https://scandinews.fi/assets/image-cache/images/2015/4/0/1-0.246.2ee62299.jpg",
  "https://topspb.tv/768x432/uploaded/news_covers/kotes285erz.jpg",
  "https://kotiki.net/wp-content/uploads/2020/02/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%BE%D1%82%D0%BE%D0%B2-%D0%B8-%D0%9A%D0%BE%D1%88%D0%B5%D0%BA-%D0%BF%D0%BE-%D1%83%D1%85%D0%BE%D0%B4%D1%83-%D0%B7%D0%B0-%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%BE%D0%BC0-502x330.jpg",
  "https://img.pravda.com/images/doc/4/8/483a77d-2312312112.jpg",
  "https://primpress.ru/img/articles/1121191539191dp.jpg",
  "https://static.dw.com/image/38763531_303.jpg",
  "https://klike.net/uploads/posts/2020-02/1581760116_1.jpg",
  "https://avatars.mds.yandex.net/get-marketcms/475644/img-de1b3359-1c05-4e32-9e78-3e948517edb8.jpeg/optimize",
  "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/173891499_982393985834379_7088127758296105087_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=w2i7PyJJdKQAX-65DC0&edm=AP_V10EAAAAA&ccb=7-4&oh=02e6c703442d9dff0602d43a017034ea&oe=609F66B0&_nc_sid=4f375e",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfAbFvqDAVvvc_rx6eznXP2VvX7eD_P5jYQ&usqp=CAU",
];
const photosLimit = 12;

const useStyles = makeStyles((theme) => ({
  photoContainer: {
    padding: theme.spacing(3),
  },
  pagination: {
    margin: theme.spacing(3, 0),
  },
}));

const PhotosContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [photoUrls, setPhotoUrls] = React.useState(defaultPhotoUrls);
  const [page, setPage] = React.useState(0);
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    loadPhotos({ limit: photosLimit, offset: page }).then((response) => {
      setPhotos(response.data);

      const shuffledImages = photoUrls.sort(() => 0.5 - Math.random());
      setPhotoUrls(shuffledImages);
    });
  }, [page]);

  const handleDelete = (id) => {
    var newPhotos = photos.filter((photo) => photo.id !== id);

    if (photos.length !== newPhotos.length) {
      enqueueSnackbar("Photo has been deleted.", { variant: "success" });
    }

    setPhotos(newPhotos);
  };

  const classes = useStyles();

  return (
    <Grid container item xs>
      <Grid container item>
        {photos.map((photo, index) => (
          <Grid
            container
            justify="center"
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={index}
          >
            <Grid item className={classes.photoContainer}>
              <Photo
                src={photoUrls[index]}
                {...photo}
                handleDelete={handleDelete}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      {photos.length && (
        <Grid container justify="center" className={classes.pagination}>
          <Pagination
            count={Math.floor(100 / photosLimit)}
            page={page + 1}
            onChange={(_, value) => setPage(value - 1)}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default PhotosContainer;
