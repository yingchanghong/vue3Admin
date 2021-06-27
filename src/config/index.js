/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
  development: {
    baseApi: '', //开发环境
    mockApi:
      'https://www.fastmock.site/mock/8c16c4d24fe061e6d2af780071b9b671/api',
  },
  test: {
    baseApi: '//test.ych.com/api', //测试环境
    mockApi:
      'https://www.fastmock.site/mock/8c16c4d24fe061e6d2af780071b9b671/api',
  },
  production: {
    baseApi: '//pro.com/api', //正式
    mockApi:
      'https://www.fastmock.site/mock/8c16c4d24fe061e6d2af780071b9b671/api',
  },
};
export default {
  namespace: 'vue3UserInfo', //缓存名称，每个项目区分开来，避免相同
  env,
  mock: true,
  ...EnvConfig[env],
};
