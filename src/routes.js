const { addBookHandler, getAllBooksHandler, getDetailBookHandler, editIdBookHandler, deleteBookByIdHandler } = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getDetailBookHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editIdBookHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
  
];
  module.exports = routes;