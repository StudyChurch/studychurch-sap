import apiClient from './apiClient';

export default {
  getUsers(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page);
  },
  getUsersById(ids) {
    console.log('ids');
    console.log(ids);

    ids = ids.join();
    console.log(ids);
    return apiClient.get('/wp-json/studychurch/v1/users/', {
      params : {
        per_page: 100,
        include: ids
      }
    });
  },
  getUser(id) {
    return apiClient.get('/events/' + id);
  },
  getMe() {
    return apiClient.get('/wp-json/studychurch/v1/users/me/');
  },
};