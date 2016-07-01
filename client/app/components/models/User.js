export default class User {
  constructor(accessLevelCst){
    this.accessLevelCst = accessLevelCst;
    this.initValues = {
      isLogged: false,
      username: 'Visitor',
      role: 'visitor'
    };
  }

  update(values){
    angular.merge(this, this.initValues, values);
  }

  getRoleAccess(){
    return this.accessLevelCst[this.role];
  }
}