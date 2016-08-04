// exports.DATABASE_URL = process.env.DATABASE_URL ||
//                       global.DATABASE_URL ||
//                       (process.env.NODE_ENV === 'production' ?
//                             'mongodb://localhost/shopping-list' :
//                             'mongodb://localhost/shopping-list-dev');
// exports.PORT = process.env.PORT || 8080;
exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://Henry1425:jailyn1425@ds139645.mlab.com:39645/shopping-list-travis' :
                            'mongodb://Henry1425:jailyn1425@ds139645.mlab.com:39645/shopping-list-travis');
exports.PORT = process.env.PORT || 8080;