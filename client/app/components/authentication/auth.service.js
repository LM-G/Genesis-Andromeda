export default class AuthService {
  constructor($http, genesisCfg, tokenStorage, commonStorage, User) {
    this.$http = $http;
    this.genesisCfg = genesisCfg;
    this.tokenStorage = tokenStorage;
    this.commonStorage = commonStorage;
    this.User = User;
  }

  /**
   * Update access and refresh tokens
   * @param {String} accessToken  : JWT access token
   * @param {String} refreshToken : JWT refresh token
   */
  setTokens(accessToken, refreshToken) {
    if (accessToken) {
      this.tokenStorage.set('access_token', accessToken);
    }
    if (refreshToken) {
      this.tokenStorage.set('refresh_token', refreshToken);
    }
  }

  /**
   * Returns both access and refresh token
   * @return {Object} tokens
   */
  getTokens () {
    return {
      accessToken: this.tokenStorage.get('access_token'),
      refreshToken: this.tokenStorage.get('refresh_token')
    };
  }

  /**
   * Returns the JWT access token
   * @return {Object} access token
   */
  getAccessToken() {
    return this.tokenStorage.get('access_token');
  }

  /**
   * Returns the JWT refresh token
   * @return {Object} refresh token
   */
  getRefreshToken() {
    return this.tokenStorage.get('refresh_token');
  }

  /**
   * Get user's informations stored in the server depending on the provided access token
   * @return {Object} promise
   */
  getUser() {
    const url = this.genesisCfg.apiUrl + '/user';
    return this.$http.get(url).then((res) => {
      return res.data;
    })
  }

  /**
   * Update user status with his informations pulled from the server
   * @param  {Object} user : user informations
   * @return {Undefined}
   */
  setUser (user) {
    this.commonStorage.set('user', user);
    user.isLogged = true;
    this.User.update(user);
  };

  /**
   * Disconnect the user
   * @return {Undefined}
   */
  disconnect () {
    this.commonStorage.remove('user');
    this.tokenStorage.remove('access_token');
    this.tokenStorage.remove('refresh_token');
    this.User.update();
  };
}
AuthService.$inject = ['$http', 'genesisCfg', 'tokenStorage', 'commonStorage', 'User'];