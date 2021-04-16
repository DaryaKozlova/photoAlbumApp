import api from './api';

export const loadPhotos = (payload) => {
  return api.get('/DaryaKozlova/photoAlbumApp/photos', { params: payload });
};
