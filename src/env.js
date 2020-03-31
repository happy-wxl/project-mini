let baseURL;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL='http://dev-mall-pre.springboot.cm/api';
        break;
    case 'test':
        baseURL='http://test-mall-pre.springboot.cm/api';
        break;
    case 'production':
        baseURL='http://mall-pre.springboot.cm/api';
        break;
    default:
        baseURL='http://mall-pre.springboot.cm/api';
        break;
}
export default {
    baseURL
}