var Q = require('q');
var _ = require('lodash');
var path = require('path');
var System = require(path.join(__base, 'app/models/System'));
var Planet = require(path.join(__base, 'app/models/Planet'));
var SystemConnection = require(path.join(__base, 'app/models/SystemConnection'));

module.exports = {
  generate : generate,
  getSystems: getSystems
};

function getSystems(requestParams){
  var deferred = Q.defer();


  System
    .find()
    .populate('planets')
    .populate('connections')
    .exec(function(err, systems){
      if(err){
        deferred.reject(err)
      }
      if(systems){
        deferred.resolve(systems);
      }
    });


  return deferred.promise;
}

function generate(requestParams){
  var deferred = Q.defer();
  switch(requestParams.type){
    case 'system' :
      generateSystem(requestParams.data).then(function(){
        deferred.resolve();
      });
      break;
    default : deferred.reject();
  }

  return deferred.promise;
}

function generateSystem(params){
  var deferred = Q.defer();
  var system = new System();
  system.name = params.name;
  system.coord_x = params.coord_x;
  system.coord_y = params.coord_y;
  system.save(function(err, system){
    if(err) deferred.reject();
    deferred.resolve();
  });
  return deferred.promise;
}