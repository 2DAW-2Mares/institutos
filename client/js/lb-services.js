// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }
  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.
  var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Email#modelName
        * @propertyOf lbServices.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$verify
             * @methodOf lbServices.User
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Users/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#changePassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#setPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Users/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Grupo
 * @header lbServices.Grupo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Grupo` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Grupo",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Grupos/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Grupo.materiasimpartidas.findById() instead.
            "prototype$__findById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasimpartidas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.destroyById() instead.
            "prototype$__destroyById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasimpartidas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.updateById() instead.
            "prototype$__updateById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasimpartidas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.findById() instead.
            "prototype$__findById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasmatriculadas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.destroyById() instead.
            "prototype$__destroyById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasmatriculadas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.updateById() instead.
            "prototype$__updateById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasmatriculadas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Grupo.nivelId() instead.
            "prototype$__get__nivelId": {
              url: urlBase + "/Grupos/:id/nivelId",
              method: "GET",
            },

            // INTERNAL. Use Grupo.alumnos.findById() instead.
            "prototype$__findById__alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Grupo.alumnos.destroyById() instead.
            "prototype$__destroyById__alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.alumnos.updateById() instead.
            "prototype$__updateById__alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Grupo.alumnos.link() instead.
            "prototype$__link__alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Grupo.alumnos.unlink() instead.
            "prototype$__unlink__alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.alumnos.exists() instead.
            "prototype$__exists__alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Grupo.userId() instead.
            "prototype$__get__userId": {
              url: urlBase + "/Grupos/:id/userId",
              method: "GET",
            },

            // INTERNAL. Use Grupo.anyoescolarId() instead.
            "prototype$__get__anyoescolarId": {
              url: urlBase + "/Grupos/:id/anyoescolarId",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasimpartidas() instead.
            "prototype$__get__materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Grupos/:id/materiasimpartidas",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.create() instead.
            "prototype$__create__materiasimpartidas": {
              url: urlBase + "/Grupos/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.destroyAll() instead.
            "prototype$__delete__materiasimpartidas": {
              url: urlBase + "/Grupos/:id/materiasimpartidas",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.count() instead.
            "prototype$__count__materiasimpartidas": {
              url: urlBase + "/Grupos/:id/materiasimpartidas/count",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas() instead.
            "prototype$__get__materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Grupos/:id/materiasmatriculadas",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.create() instead.
            "prototype$__create__materiasmatriculadas": {
              url: urlBase + "/Grupos/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.destroyAll() instead.
            "prototype$__delete__materiasmatriculadas": {
              url: urlBase + "/Grupos/:id/materiasmatriculadas",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.count() instead.
            "prototype$__count__materiasmatriculadas": {
              url: urlBase + "/Grupos/:id/materiasmatriculadas/count",
              method: "GET",
            },

            // INTERNAL. Use Grupo.alumnos() instead.
            "prototype$__get__alumnos": {
              isArray: true,
              url: urlBase + "/Grupos/:id/alumnos",
              method: "GET",
            },

            // INTERNAL. Use Grupo.alumnos.create() instead.
            "prototype$__create__alumnos": {
              url: urlBase + "/Grupos/:id/alumnos",
              method: "POST",
            },

            // INTERNAL. Use Grupo.alumnos.destroyAll() instead.
            "prototype$__delete__alumnos": {
              url: urlBase + "/Grupos/:id/alumnos",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.alumnos.count() instead.
            "prototype$__count__alumnos": {
              url: urlBase + "/Grupos/:id/alumnos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#create
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Grupos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#createMany
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Grupos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#patchOrCreate
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Grupos",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#replaceOrCreate
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Grupos/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#upsertWithWhere
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Grupos/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#exists
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Grupos/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#findById
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Grupos/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#replaceById
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Grupos/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#find
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Grupos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#findOne
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Grupos/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#updateAll
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Grupos/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#deleteById
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Grupos/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#count
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Grupos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#prototype$patchAttributes
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Grupos/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#createChangeStream
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Grupos/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Grupo#validar_grupo
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Valida un grupo. Lo debe hacer un coordinador
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `idgrupo` – `{integer}` -
             *
             *  - `access_token` – `{object}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `msg` – `{string=}` -
             */
            "validar_grupo": {
              url: urlBase + "/Grupos/validar-grupo",
              method: "PUT",
            },

            // INTERNAL. Use Materiaimpartida.grupoId() instead.
            "::get::Materiaimpartida::grupoId": {
              url: urlBase + "/Materiaimpartidas/:id/grupoId",
              method: "GET",
            },

            // INTERNAL. Use Materiamatriculada.grupoId() instead.
            "::get::Materiamatriculada::grupoId": {
              url: urlBase + "/Materiamatriculadas/:id/grupoId",
              method: "GET",
            },

            // INTERNAL. Use Matricula.grupoId() instead.
            "::get::Matricula::grupoId": {
              url: urlBase + "/Matriculas/:id/grupoId",
              method: "GET",
            },

            // INTERNAL. Use Nivel.grupos.findById() instead.
            "::findById::Nivel::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/grupos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Nivel.grupos.destroyById() instead.
            "::destroyById::Nivel::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/grupos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Nivel.grupos.updateById() instead.
            "::updateById::Nivel::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/grupos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Nivel.grupos() instead.
            "::get::Nivel::grupos": {
              isArray: true,
              url: urlBase + "/Nivels/:id/grupos",
              method: "GET",
            },

            // INTERNAL. Use Nivel.grupos.create() instead.
            "::create::Nivel::grupos": {
              url: urlBase + "/Nivels/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Nivel.grupos.createMany() instead.
            "::createMany::Nivel::grupos": {
              isArray: true,
              url: urlBase + "/Nivels/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Nivel.grupos.destroyAll() instead.
            "::delete::Nivel::grupos": {
              url: urlBase + "/Nivels/:id/grupos",
              method: "DELETE",
            },

            // INTERNAL. Use Nivel.grupos.count() instead.
            "::count::Nivel::grupos": {
              url: urlBase + "/Nivels/:id/grupos/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.grupos.findById() instead.
            "::findById::Usuario::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/grupos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.grupos.destroyById() instead.
            "::destroyById::Usuario::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/grupos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.grupos.updateById() instead.
            "::updateById::Usuario::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/grupos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.matriculas.findById() instead.
            "::findById::Usuario::matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.matriculas.destroyById() instead.
            "::destroyById::Usuario::matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.matriculas.updateById() instead.
            "::updateById::Usuario::matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.matriculas.link() instead.
            "::link::Usuario::matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.matriculas.unlink() instead.
            "::unlink::Usuario::matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.matriculas.exists() instead.
            "::exists::Usuario::matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Usuario.tutoria.findById() instead.
            "::findById::Usuario::tutoria": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutoria/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutoria.destroyById() instead.
            "::destroyById::Usuario::tutoria": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutoria/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutoria.updateById() instead.
            "::updateById::Usuario::tutoria": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutoria/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.gruposcreados.findById() instead.
            "::findById::Usuario::gruposcreados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/gruposcreados/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.gruposcreados.destroyById() instead.
            "::destroyById::Usuario::gruposcreados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/gruposcreados/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.gruposcreados.updateById() instead.
            "::updateById::Usuario::gruposcreados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/gruposcreados/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.grupos() instead.
            "::get::Usuario::grupos": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/grupos",
              method: "GET",
            },

            // INTERNAL. Use Usuario.grupos.create() instead.
            "::create::Usuario::grupos": {
              url: urlBase + "/Usuarios/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Usuario.grupos.createMany() instead.
            "::createMany::Usuario::grupos": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Usuario.grupos.destroyAll() instead.
            "::delete::Usuario::grupos": {
              url: urlBase + "/Usuarios/:id/grupos",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.grupos.count() instead.
            "::count::Usuario::grupos": {
              url: urlBase + "/Usuarios/:id/grupos/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.matriculas() instead.
            "::get::Usuario::matriculas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/matriculas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.matriculas.create() instead.
            "::create::Usuario::matriculas": {
              url: urlBase + "/Usuarios/:id/matriculas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.matriculas.createMany() instead.
            "::createMany::Usuario::matriculas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/matriculas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.matriculas.destroyAll() instead.
            "::delete::Usuario::matriculas": {
              url: urlBase + "/Usuarios/:id/matriculas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.matriculas.count() instead.
            "::count::Usuario::matriculas": {
              url: urlBase + "/Usuarios/:id/matriculas/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutoria() instead.
            "::get::Usuario::tutoria": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/tutoria",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutoria.create() instead.
            "::create::Usuario::tutoria": {
              url: urlBase + "/Usuarios/:id/tutoria",
              method: "POST",
            },

            // INTERNAL. Use Usuario.tutoria.createMany() instead.
            "::createMany::Usuario::tutoria": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/tutoria",
              method: "POST",
            },

            // INTERNAL. Use Usuario.tutoria.destroyAll() instead.
            "::delete::Usuario::tutoria": {
              url: urlBase + "/Usuarios/:id/tutoria",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutoria.count() instead.
            "::count::Usuario::tutoria": {
              url: urlBase + "/Usuarios/:id/tutoria/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.gruposcreados() instead.
            "::get::Usuario::gruposcreados": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/gruposcreados",
              method: "GET",
            },

            // INTERNAL. Use Usuario.gruposcreados.create() instead.
            "::create::Usuario::gruposcreados": {
              url: urlBase + "/Usuarios/:id/gruposcreados",
              method: "POST",
            },

            // INTERNAL. Use Usuario.gruposcreados.createMany() instead.
            "::createMany::Usuario::gruposcreados": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/gruposcreados",
              method: "POST",
            },

            // INTERNAL. Use Usuario.gruposcreados.destroyAll() instead.
            "::delete::Usuario::gruposcreados": {
              url: urlBase + "/Usuarios/:id/gruposcreados",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.gruposcreados.count() instead.
            "::count::Usuario::gruposcreados": {
              url: urlBase + "/Usuarios/:id/gruposcreados/count",
              method: "GET",
            },

            // INTERNAL. Use Anyoescolar.grupos.findById() instead.
            "::findById::Anyoescolar::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Anyoescolars/:id/grupos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Anyoescolar.grupos.destroyById() instead.
            "::destroyById::Anyoescolar::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Anyoescolars/:id/grupos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Anyoescolar.grupos.updateById() instead.
            "::updateById::Anyoescolar::grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Anyoescolars/:id/grupos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Anyoescolar.grupos() instead.
            "::get::Anyoescolar::grupos": {
              isArray: true,
              url: urlBase + "/Anyoescolars/:id/grupos",
              method: "GET",
            },

            // INTERNAL. Use Anyoescolar.grupos.create() instead.
            "::create::Anyoescolar::grupos": {
              url: urlBase + "/Anyoescolars/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Anyoescolar.grupos.createMany() instead.
            "::createMany::Anyoescolar::grupos": {
              isArray: true,
              url: urlBase + "/Anyoescolars/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Anyoescolar.grupos.destroyAll() instead.
            "::delete::Anyoescolar::grupos": {
              url: urlBase + "/Anyoescolars/:id/grupos",
              method: "DELETE",
            },

            // INTERNAL. Use Anyoescolar.grupos.count() instead.
            "::count::Anyoescolar::grupos": {
              url: urlBase + "/Anyoescolars/:id/grupos/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Grupo#upsert
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Grupo#updateOrCreate
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Grupo#patchOrCreateWithWhere
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Grupo#update
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Grupo#destroyById
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Grupo#removeById
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Grupo#prototype$updateAttributes
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Grupo#modelName
        * @propertyOf lbServices.Grupo
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Grupo`.
        */
        R.modelName = "Grupo";

    /**
     * @ngdoc object
     * @name lbServices.Grupo.materiasimpartidas
     * @header lbServices.Grupo.materiasimpartidas
     * @object
     * @description
     *
     * The object `Grupo.materiasimpartidas` groups methods
     * manipulating `Materiaimpartida` instances related to `Grupo`.
     *
     * Call {@link lbServices.Grupo#materiasimpartidas Grupo.materiasimpartidas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Grupo#materiasimpartidas
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Queries materiasimpartidas of Grupo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::get::Grupo::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasimpartidas#count
             * @methodOf lbServices.Grupo.materiasimpartidas
             *
             * @description
             *
             * Counts materiasimpartidas of Grupo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.materiasimpartidas.count = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::count::Grupo::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasimpartidas#create
             * @methodOf lbServices.Grupo.materiasimpartidas
             *
             * @description
             *
             * Creates a new instance in materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.create = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::create::Grupo::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasimpartidas#createMany
             * @methodOf lbServices.Grupo.materiasimpartidas
             *
             * @description
             *
             * Creates a new instance in materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.createMany = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::createMany::Grupo::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasimpartidas#destroyAll
             * @methodOf lbServices.Grupo.materiasimpartidas
             *
             * @description
             *
             * Deletes all materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasimpartidas.destroyAll = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::delete::Grupo::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasimpartidas#destroyById
             * @methodOf lbServices.Grupo.materiasimpartidas
             *
             * @description
             *
             * Delete a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasimpartidas.destroyById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::destroyById::Grupo::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasimpartidas#findById
             * @methodOf lbServices.Grupo.materiasimpartidas
             *
             * @description
             *
             * Find a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.findById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::findById::Grupo::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasimpartidas#updateById
             * @methodOf lbServices.Grupo.materiasimpartidas
             *
             * @description
             *
             * Update a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.updateById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::updateById::Grupo::materiasimpartidas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Grupo.materiasmatriculadas
     * @header lbServices.Grupo.materiasmatriculadas
     * @object
     * @description
     *
     * The object `Grupo.materiasmatriculadas` groups methods
     * manipulating `Materiamatriculada` instances related to `Grupo`.
     *
     * Call {@link lbServices.Grupo#materiasmatriculadas Grupo.materiasmatriculadas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Grupo#materiasmatriculadas
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Queries materiasmatriculadas of Grupo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::get::Grupo::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasmatriculadas#count
             * @methodOf lbServices.Grupo.materiasmatriculadas
             *
             * @description
             *
             * Counts materiasmatriculadas of Grupo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.materiasmatriculadas.count = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::count::Grupo::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasmatriculadas#create
             * @methodOf lbServices.Grupo.materiasmatriculadas
             *
             * @description
             *
             * Creates a new instance in materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.create = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::create::Grupo::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasmatriculadas#createMany
             * @methodOf lbServices.Grupo.materiasmatriculadas
             *
             * @description
             *
             * Creates a new instance in materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.createMany = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::createMany::Grupo::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasmatriculadas#destroyAll
             * @methodOf lbServices.Grupo.materiasmatriculadas
             *
             * @description
             *
             * Deletes all materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasmatriculadas.destroyAll = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::delete::Grupo::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasmatriculadas#destroyById
             * @methodOf lbServices.Grupo.materiasmatriculadas
             *
             * @description
             *
             * Delete a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasmatriculadas.destroyById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::destroyById::Grupo::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasmatriculadas#findById
             * @methodOf lbServices.Grupo.materiasmatriculadas
             *
             * @description
             *
             * Find a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.findById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::findById::Grupo::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.materiasmatriculadas#updateById
             * @methodOf lbServices.Grupo.materiasmatriculadas
             *
             * @description
             *
             * Update a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.updateById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::updateById::Grupo::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo#nivelId
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Fetches belongsTo relation nivelId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R.nivelId = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::get::Grupo::nivelId"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Grupo.alumnos
     * @header lbServices.Grupo.alumnos
     * @object
     * @description
     *
     * The object `Grupo.alumnos` groups methods
     * manipulating `Usuario` instances related to `Grupo`.
     *
     * Call {@link lbServices.Grupo#alumnos Grupo.alumnos()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Grupo#alumnos
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Queries alumnos of Grupo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.alumnos = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#count
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Counts alumnos of Grupo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.alumnos.count = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::count::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#create
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Creates a new instance in alumnos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.alumnos.create = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::create::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#createMany
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Creates a new instance in alumnos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.alumnos.createMany = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::createMany::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#destroyAll
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Deletes all alumnos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.alumnos.destroyAll = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::delete::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#destroyById
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Delete a related item by id for alumnos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for alumnos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.alumnos.destroyById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::destroyById::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#exists
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Check the existence of alumnos relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for alumnos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.alumnos.exists = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::exists::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#findById
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Find a related item by id for alumnos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for alumnos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.alumnos.findById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::findById::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#link
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Add a related item by id for alumnos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `fk` – `{*}` - Foreign key for alumnos
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.alumnos.link = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::link::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#unlink
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Remove the alumnos relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for alumnos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.alumnos.unlink = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::unlink::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo.alumnos#updateById
             * @methodOf lbServices.Grupo.alumnos
             *
             * @description
             *
             * Update a related item by id for alumnos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `fk` – `{*}` - Foreign key for alumnos
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.alumnos.updateById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::updateById::Grupo::alumnos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo#userId
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Fetches belongsTo relation userId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.userId = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Grupo::userId"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Grupo#anyoescolarId
             * @methodOf lbServices.Grupo
             *
             * @description
             *
             * Fetches belongsTo relation anyoescolarId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Grupo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R.anyoescolarId = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::get::Grupo::anyoescolarId"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Materia
 * @header lbServices.Materia
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Materia` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Materia",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Materia/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Materia.materiasimpartidas.findById() instead.
            "prototype$__findById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasimpartidas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasimpartidas.destroyById() instead.
            "prototype$__destroyById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasimpartidas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Materia.materiasimpartidas.updateById() instead.
            "prototype$__updateById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasimpartidas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.findById() instead.
            "prototype$__findById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasmatriculadas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.destroyById() instead.
            "prototype$__destroyById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasmatriculadas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.updateById() instead.
            "prototype$__updateById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasmatriculadas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Materia.materiasimpartidas() instead.
            "prototype$__get__materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Materia/:id/materiasimpartidas",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasimpartidas.create() instead.
            "prototype$__create__materiasimpartidas": {
              url: urlBase + "/Materia/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Materia.materiasimpartidas.destroyAll() instead.
            "prototype$__delete__materiasimpartidas": {
              url: urlBase + "/Materia/:id/materiasimpartidas",
              method: "DELETE",
            },

            // INTERNAL. Use Materia.materiasimpartidas.count() instead.
            "prototype$__count__materiasimpartidas": {
              url: urlBase + "/Materia/:id/materiasimpartidas/count",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasmatriculadas() instead.
            "prototype$__get__materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Materia/:id/materiasmatriculadas",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.create() instead.
            "prototype$__create__materiasmatriculadas": {
              url: urlBase + "/Materia/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.destroyAll() instead.
            "prototype$__delete__materiasmatriculadas": {
              url: urlBase + "/Materia/:id/materiasmatriculadas",
              method: "DELETE",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.count() instead.
            "prototype$__count__materiasmatriculadas": {
              url: urlBase + "/Materia/:id/materiasmatriculadas/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#create
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Materia",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#createMany
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Materia",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#patchOrCreate
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Materia",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#replaceOrCreate
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Materia/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#upsertWithWhere
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Materia/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#exists
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Materia/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#findById
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Materia/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#replaceById
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Materia/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#find
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Materia",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#findOne
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Materia/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#updateAll
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Materia/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#deleteById
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Materia/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#count
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Materia/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#prototype$patchAttributes
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Materia/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materia#createChangeStream
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Materia/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Materiaimpartida.materiaId() instead.
            "::get::Materiaimpartida::materiaId": {
              url: urlBase + "/Materiaimpartidas/:id/materiaId",
              method: "GET",
            },

            // INTERNAL. Use Materiamatriculada.materiaId() instead.
            "::get::Materiamatriculada::materiaId": {
              url: urlBase + "/Materiamatriculadas/:id/materiaId",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Materia#upsert
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Materia#updateOrCreate
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Materia#patchOrCreateWithWhere
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Materia#update
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Materia#destroyById
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Materia#removeById
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Materia#prototype$updateAttributes
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Materia#modelName
        * @propertyOf lbServices.Materia
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Materia`.
        */
        R.modelName = "Materia";

    /**
     * @ngdoc object
     * @name lbServices.Materia.materiasimpartidas
     * @header lbServices.Materia.materiasimpartidas
     * @object
     * @description
     *
     * The object `Materia.materiasimpartidas` groups methods
     * manipulating `Materiaimpartida` instances related to `Materia`.
     *
     * Call {@link lbServices.Materia#materiasimpartidas Materia.materiasimpartidas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Materia#materiasimpartidas
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Queries materiasimpartidas of Materia.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::get::Materia::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasimpartidas#count
             * @methodOf lbServices.Materia.materiasimpartidas
             *
             * @description
             *
             * Counts materiasimpartidas of Materia.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.materiasimpartidas.count = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::count::Materia::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasimpartidas#create
             * @methodOf lbServices.Materia.materiasimpartidas
             *
             * @description
             *
             * Creates a new instance in materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.create = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::create::Materia::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasimpartidas#createMany
             * @methodOf lbServices.Materia.materiasimpartidas
             *
             * @description
             *
             * Creates a new instance in materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.createMany = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::createMany::Materia::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasimpartidas#destroyAll
             * @methodOf lbServices.Materia.materiasimpartidas
             *
             * @description
             *
             * Deletes all materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasimpartidas.destroyAll = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::delete::Materia::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasimpartidas#destroyById
             * @methodOf lbServices.Materia.materiasimpartidas
             *
             * @description
             *
             * Delete a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasimpartidas.destroyById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::destroyById::Materia::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasimpartidas#findById
             * @methodOf lbServices.Materia.materiasimpartidas
             *
             * @description
             *
             * Find a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.findById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::findById::Materia::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasimpartidas#updateById
             * @methodOf lbServices.Materia.materiasimpartidas
             *
             * @description
             *
             * Update a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.updateById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::updateById::Materia::materiasimpartidas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Materia.materiasmatriculadas
     * @header lbServices.Materia.materiasmatriculadas
     * @object
     * @description
     *
     * The object `Materia.materiasmatriculadas` groups methods
     * manipulating `Materiamatriculada` instances related to `Materia`.
     *
     * Call {@link lbServices.Materia#materiasmatriculadas Materia.materiasmatriculadas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Materia#materiasmatriculadas
             * @methodOf lbServices.Materia
             *
             * @description
             *
             * Queries materiasmatriculadas of Materia.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::get::Materia::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasmatriculadas#count
             * @methodOf lbServices.Materia.materiasmatriculadas
             *
             * @description
             *
             * Counts materiasmatriculadas of Materia.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.materiasmatriculadas.count = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::count::Materia::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasmatriculadas#create
             * @methodOf lbServices.Materia.materiasmatriculadas
             *
             * @description
             *
             * Creates a new instance in materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.create = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::create::Materia::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasmatriculadas#createMany
             * @methodOf lbServices.Materia.materiasmatriculadas
             *
             * @description
             *
             * Creates a new instance in materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.createMany = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::createMany::Materia::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasmatriculadas#destroyAll
             * @methodOf lbServices.Materia.materiasmatriculadas
             *
             * @description
             *
             * Deletes all materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasmatriculadas.destroyAll = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::delete::Materia::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasmatriculadas#destroyById
             * @methodOf lbServices.Materia.materiasmatriculadas
             *
             * @description
             *
             * Delete a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasmatriculadas.destroyById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::destroyById::Materia::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasmatriculadas#findById
             * @methodOf lbServices.Materia.materiasmatriculadas
             *
             * @description
             *
             * Find a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.findById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::findById::Materia::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materia.materiasmatriculadas#updateById
             * @methodOf lbServices.Materia.materiasmatriculadas
             *
             * @description
             *
             * Update a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materia id
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.updateById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::updateById::Materia::materiasmatriculadas"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Materiaimpartida
 * @header lbServices.Materiaimpartida
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Materiaimpartida` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Materiaimpartida",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Materiaimpartidas/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Materiaimpartida.grupoId() instead.
            "prototype$__get__grupoId": {
              url: urlBase + "/Materiaimpartidas/:id/grupoId",
              method: "GET",
            },

            // INTERNAL. Use Materiaimpartida.materiaId() instead.
            "prototype$__get__materiaId": {
              url: urlBase + "/Materiaimpartidas/:id/materiaId",
              method: "GET",
            },

            // INTERNAL. Use Materiaimpartida.userId() instead.
            "prototype$__get__userId": {
              url: urlBase + "/Materiaimpartidas/:id/userId",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#create
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Materiaimpartidas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#createMany
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Materiaimpartidas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#patchOrCreate
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Materiaimpartidas",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#replaceOrCreate
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Materiaimpartidas/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#upsertWithWhere
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Materiaimpartidas/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#exists
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Materiaimpartidas/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#findById
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Materiaimpartidas/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#replaceById
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Materiaimpartidas/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#find
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Materiaimpartidas",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#findOne
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Materiaimpartidas/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#updateAll
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Materiaimpartidas/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#deleteById
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Materiaimpartidas/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#count
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Materiaimpartidas/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#prototype$patchAttributes
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiaimpartida id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Materiaimpartidas/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#createChangeStream
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Materiaimpartidas/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#materiasImpartidas_Centro_get
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Lista de materias impartidas por un centro
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{integer}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `msg` – `{string=}` -
             */
            "materiasImpartidas_Centro_get": {
              url: urlBase + "/Materiaimpartidas/:id/materiaimpartida_en_Centro",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.findById() instead.
            "::findById::Grupo::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasimpartidas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.destroyById() instead.
            "::destroyById::Grupo::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasimpartidas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.updateById() instead.
            "::updateById::Grupo::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasimpartidas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Grupo.materiasimpartidas() instead.
            "::get::Grupo::materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Grupos/:id/materiasimpartidas",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.create() instead.
            "::create::Grupo::materiasimpartidas": {
              url: urlBase + "/Grupos/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.createMany() instead.
            "::createMany::Grupo::materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Grupos/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.destroyAll() instead.
            "::delete::Grupo::materiasimpartidas": {
              url: urlBase + "/Grupos/:id/materiasimpartidas",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.materiasimpartidas.count() instead.
            "::count::Grupo::materiasimpartidas": {
              url: urlBase + "/Grupos/:id/materiasimpartidas/count",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasimpartidas.findById() instead.
            "::findById::Materia::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasimpartidas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasimpartidas.destroyById() instead.
            "::destroyById::Materia::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasimpartidas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Materia.materiasimpartidas.updateById() instead.
            "::updateById::Materia::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasimpartidas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Materia.materiasimpartidas() instead.
            "::get::Materia::materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Materia/:id/materiasimpartidas",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasimpartidas.create() instead.
            "::create::Materia::materiasimpartidas": {
              url: urlBase + "/Materia/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Materia.materiasimpartidas.createMany() instead.
            "::createMany::Materia::materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Materia/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Materia.materiasimpartidas.destroyAll() instead.
            "::delete::Materia::materiasimpartidas": {
              url: urlBase + "/Materia/:id/materiasimpartidas",
              method: "DELETE",
            },

            // INTERNAL. Use Materia.materiasimpartidas.count() instead.
            "::count::Materia::materiasimpartidas": {
              url: urlBase + "/Materia/:id/materiasimpartidas/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.findById() instead.
            "::findById::Usuario::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasimpartidas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.destroyById() instead.
            "::destroyById::Usuario::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasimpartidas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.updateById() instead.
            "::updateById::Usuario::materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasimpartidas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.materiasimpartidas() instead.
            "::get::Usuario::materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/materiasimpartidas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.create() instead.
            "::create::Usuario::materiasimpartidas": {
              url: urlBase + "/Usuarios/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.createMany() instead.
            "::createMany::Usuario::materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.destroyAll() instead.
            "::delete::Usuario::materiasimpartidas": {
              url: urlBase + "/Usuarios/:id/materiasimpartidas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.count() instead.
            "::count::Usuario::materiasimpartidas": {
              url: urlBase + "/Usuarios/:id/materiasimpartidas/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#upsert
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#updateOrCreate
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#patchOrCreateWithWhere
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#update
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#destroyById
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#removeById
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#prototype$updateAttributes
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiaimpartida id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Materiaimpartida#modelName
        * @propertyOf lbServices.Materiaimpartida
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Materiaimpartida`.
        */
        R.modelName = "Materiaimpartida";


            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#grupoId
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Fetches belongsTo relation grupoId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiaimpartida id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupoId = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Materiaimpartida::grupoId"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#materiaId
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Fetches belongsTo relation materiaId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiaimpartida id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
        R.materiaId = function() {
          var TargetResource = $injector.get("Materia");
          var action = TargetResource["::get::Materiaimpartida::materiaId"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materiaimpartida#userId
             * @methodOf lbServices.Materiaimpartida
             *
             * @description
             *
             * Fetches belongsTo relation userId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiaimpartida id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.userId = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Materiaimpartida::userId"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Materiamatriculada
 * @header lbServices.Materiamatriculada
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Materiamatriculada` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Materiamatriculada",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Materiamatriculadas/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Materiamatriculada.grupoId() instead.
            "prototype$__get__grupoId": {
              url: urlBase + "/Materiamatriculadas/:id/grupoId",
              method: "GET",
            },

            // INTERNAL. Use Materiamatriculada.materiaId() instead.
            "prototype$__get__materiaId": {
              url: urlBase + "/Materiamatriculadas/:id/materiaId",
              method: "GET",
            },

            // INTERNAL. Use Materiamatriculada.userId() instead.
            "prototype$__get__userId": {
              url: urlBase + "/Materiamatriculadas/:id/userId",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#create
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Materiamatriculadas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#createMany
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Materiamatriculadas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#patchOrCreate
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Materiamatriculadas",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#replaceOrCreate
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Materiamatriculadas/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#upsertWithWhere
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Materiamatriculadas/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#exists
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Materiamatriculadas/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#findById
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Materiamatriculadas/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#replaceById
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Materiamatriculadas/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#find
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Materiamatriculadas",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#findOne
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Materiamatriculadas/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#updateAll
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Materiamatriculadas/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#deleteById
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Materiamatriculadas/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#count
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Materiamatriculadas/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#prototype$patchAttributes
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiamatriculada id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Materiamatriculadas/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#createChangeStream
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Materiamatriculadas/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.findById() instead.
            "::findById::Grupo::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasmatriculadas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.destroyById() instead.
            "::destroyById::Grupo::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasmatriculadas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.updateById() instead.
            "::updateById::Grupo::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/materiasmatriculadas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas() instead.
            "::get::Grupo::materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Grupos/:id/materiasmatriculadas",
              method: "GET",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.create() instead.
            "::create::Grupo::materiasmatriculadas": {
              url: urlBase + "/Grupos/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.createMany() instead.
            "::createMany::Grupo::materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Grupos/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.destroyAll() instead.
            "::delete::Grupo::materiasmatriculadas": {
              url: urlBase + "/Grupos/:id/materiasmatriculadas",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.materiasmatriculadas.count() instead.
            "::count::Grupo::materiasmatriculadas": {
              url: urlBase + "/Grupos/:id/materiasmatriculadas/count",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.findById() instead.
            "::findById::Materia::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasmatriculadas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.destroyById() instead.
            "::destroyById::Materia::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasmatriculadas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.updateById() instead.
            "::updateById::Materia::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Materia/:id/materiasmatriculadas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Materia.materiasmatriculadas() instead.
            "::get::Materia::materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Materia/:id/materiasmatriculadas",
              method: "GET",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.create() instead.
            "::create::Materia::materiasmatriculadas": {
              url: urlBase + "/Materia/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.createMany() instead.
            "::createMany::Materia::materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Materia/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.destroyAll() instead.
            "::delete::Materia::materiasmatriculadas": {
              url: urlBase + "/Materia/:id/materiasmatriculadas",
              method: "DELETE",
            },

            // INTERNAL. Use Materia.materiasmatriculadas.count() instead.
            "::count::Materia::materiasmatriculadas": {
              url: urlBase + "/Materia/:id/materiasmatriculadas/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.findById() instead.
            "::findById::Usuario::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasmatriculadas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.destroyById() instead.
            "::destroyById::Usuario::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasmatriculadas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.updateById() instead.
            "::updateById::Usuario::materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasmatriculadas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas() instead.
            "::get::Usuario::materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/materiasmatriculadas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.create() instead.
            "::create::Usuario::materiasmatriculadas": {
              url: urlBase + "/Usuarios/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.createMany() instead.
            "::createMany::Usuario::materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.destroyAll() instead.
            "::delete::Usuario::materiasmatriculadas": {
              url: urlBase + "/Usuarios/:id/materiasmatriculadas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.count() instead.
            "::count::Usuario::materiasmatriculadas": {
              url: urlBase + "/Usuarios/:id/materiasmatriculadas/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#upsert
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#updateOrCreate
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#patchOrCreateWithWhere
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#update
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#destroyById
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#removeById
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#prototype$updateAttributes
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiamatriculada id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Materiamatriculada#modelName
        * @propertyOf lbServices.Materiamatriculada
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Materiamatriculada`.
        */
        R.modelName = "Materiamatriculada";


            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#grupoId
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Fetches belongsTo relation grupoId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiamatriculada id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupoId = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Materiamatriculada::grupoId"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#materiaId
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Fetches belongsTo relation materiaId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiamatriculada id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materia` object.)
             * </em>
             */
        R.materiaId = function() {
          var TargetResource = $injector.get("Materia");
          var action = TargetResource["::get::Materiamatriculada::materiaId"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Materiamatriculada#userId
             * @methodOf lbServices.Materiamatriculada
             *
             * @description
             *
             * Fetches belongsTo relation userId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Materiamatriculada id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.userId = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Materiamatriculada::userId"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Matricula
 * @header lbServices.Matricula
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Matricula` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Matricula",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Matriculas/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Matricula.grupoId() instead.
            "prototype$__get__grupoId": {
              url: urlBase + "/Matriculas/:id/grupoId",
              method: "GET",
            },

            // INTERNAL. Use Matricula.userId() instead.
            "prototype$__get__userId": {
              url: urlBase + "/Matriculas/:id/userId",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#create
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Matriculas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#createMany
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Matriculas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#patchOrCreate
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Matriculas",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#replaceOrCreate
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Matriculas/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#upsertWithWhere
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Matriculas/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#exists
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Matriculas/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#findById
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Matriculas/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#replaceById
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Matriculas/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#find
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Matriculas",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#findOne
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Matriculas/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#updateAll
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Matriculas/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#deleteById
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Matriculas/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#count
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Matriculas/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#prototype$patchAttributes
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Matricula id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Matriculas/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Matricula#createChangeStream
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Matriculas/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Matricula#upsert
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Matricula#updateOrCreate
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Matricula#patchOrCreateWithWhere
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Matricula#update
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Matricula#destroyById
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Matricula#removeById
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Matricula#prototype$updateAttributes
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Matricula id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Matricula` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Matricula#modelName
        * @propertyOf lbServices.Matricula
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Matricula`.
        */
        R.modelName = "Matricula";


            /**
             * @ngdoc method
             * @name lbServices.Matricula#grupoId
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Fetches belongsTo relation grupoId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Matricula id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupoId = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Matricula::grupoId"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Matricula#userId
             * @methodOf lbServices.Matricula
             *
             * @description
             *
             * Fetches belongsTo relation userId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Matricula id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.userId = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Matricula::userId"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Nivel
 * @header lbServices.Nivel
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Nivel` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Nivel",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Nivels/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Nivel.grupos.findById() instead.
            "prototype$__findById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/grupos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Nivel.grupos.destroyById() instead.
            "prototype$__destroyById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/grupos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Nivel.grupos.updateById() instead.
            "prototype$__updateById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/grupos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Nivel.subniveles.findById() instead.
            "prototype$__findById__subniveles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/subniveles/:fk",
              method: "GET",
            },

            // INTERNAL. Use Nivel.subniveles.destroyById() instead.
            "prototype$__destroyById__subniveles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/subniveles/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Nivel.subniveles.updateById() instead.
            "prototype$__updateById__subniveles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/subniveles/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Nivel.grupos() instead.
            "prototype$__get__grupos": {
              isArray: true,
              url: urlBase + "/Nivels/:id/grupos",
              method: "GET",
            },

            // INTERNAL. Use Nivel.grupos.create() instead.
            "prototype$__create__grupos": {
              url: urlBase + "/Nivels/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Nivel.grupos.destroyAll() instead.
            "prototype$__delete__grupos": {
              url: urlBase + "/Nivels/:id/grupos",
              method: "DELETE",
            },

            // INTERNAL. Use Nivel.grupos.count() instead.
            "prototype$__count__grupos": {
              url: urlBase + "/Nivels/:id/grupos/count",
              method: "GET",
            },

            // INTERNAL. Use Nivel.subniveles() instead.
            "prototype$__get__subniveles": {
              isArray: true,
              url: urlBase + "/Nivels/:id/subniveles",
              method: "GET",
            },

            // INTERNAL. Use Nivel.subniveles.create() instead.
            "prototype$__create__subniveles": {
              url: urlBase + "/Nivels/:id/subniveles",
              method: "POST",
            },

            // INTERNAL. Use Nivel.subniveles.destroyAll() instead.
            "prototype$__delete__subniveles": {
              url: urlBase + "/Nivels/:id/subniveles",
              method: "DELETE",
            },

            // INTERNAL. Use Nivel.subniveles.count() instead.
            "prototype$__count__subniveles": {
              url: urlBase + "/Nivels/:id/subniveles/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#create
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Nivels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#createMany
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Nivels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#patchOrCreate
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Nivels",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#replaceOrCreate
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Nivels/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#upsertWithWhere
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Nivels/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#exists
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Nivels/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#findById
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Nivels/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#replaceById
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Nivels/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#find
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Nivels",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#findOne
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Nivels/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#updateAll
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Nivels/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#deleteById
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Nivels/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#count
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Nivels/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#prototype$patchAttributes
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Nivels/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Nivel#createChangeStream
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Nivels/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Grupo.nivelId() instead.
            "::get::Grupo::nivelId": {
              url: urlBase + "/Grupos/:id/nivelId",
              method: "GET",
            },

            // INTERNAL. Use Nivel.subniveles.findById() instead.
            "::findById::Nivel::subniveles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/subniveles/:fk",
              method: "GET",
            },

            // INTERNAL. Use Nivel.subniveles.destroyById() instead.
            "::destroyById::Nivel::subniveles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/subniveles/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Nivel.subniveles.updateById() instead.
            "::updateById::Nivel::subniveles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Nivels/:id/subniveles/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Nivel.subniveles() instead.
            "::get::Nivel::subniveles": {
              isArray: true,
              url: urlBase + "/Nivels/:id/subniveles",
              method: "GET",
            },

            // INTERNAL. Use Nivel.subniveles.create() instead.
            "::create::Nivel::subniveles": {
              url: urlBase + "/Nivels/:id/subniveles",
              method: "POST",
            },

            // INTERNAL. Use Nivel.subniveles.createMany() instead.
            "::createMany::Nivel::subniveles": {
              isArray: true,
              url: urlBase + "/Nivels/:id/subniveles",
              method: "POST",
            },

            // INTERNAL. Use Nivel.subniveles.destroyAll() instead.
            "::delete::Nivel::subniveles": {
              url: urlBase + "/Nivels/:id/subniveles",
              method: "DELETE",
            },

            // INTERNAL. Use Nivel.subniveles.count() instead.
            "::count::Nivel::subniveles": {
              url: urlBase + "/Nivels/:id/subniveles/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Nivel#upsert
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Nivel#updateOrCreate
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Nivel#patchOrCreateWithWhere
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Nivel#update
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Nivel#destroyById
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Nivel#removeById
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Nivel#prototype$updateAttributes
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Nivel#modelName
        * @propertyOf lbServices.Nivel
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Nivel`.
        */
        R.modelName = "Nivel";

    /**
     * @ngdoc object
     * @name lbServices.Nivel.grupos
     * @header lbServices.Nivel.grupos
     * @object
     * @description
     *
     * The object `Nivel.grupos` groups methods
     * manipulating `Grupo` instances related to `Nivel`.
     *
     * Call {@link lbServices.Nivel#grupos Nivel.grupos()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Nivel#grupos
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Queries grupos of Nivel.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Nivel::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.grupos#count
             * @methodOf lbServices.Nivel.grupos
             *
             * @description
             *
             * Counts grupos of Nivel.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.grupos.count = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::count::Nivel::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.grupos#create
             * @methodOf lbServices.Nivel.grupos
             *
             * @description
             *
             * Creates a new instance in grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.create = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::create::Nivel::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.grupos#createMany
             * @methodOf lbServices.Nivel.grupos
             *
             * @description
             *
             * Creates a new instance in grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.createMany = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::createMany::Nivel::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.grupos#destroyAll
             * @methodOf lbServices.Nivel.grupos
             *
             * @description
             *
             * Deletes all grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.grupos.destroyAll = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::delete::Nivel::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.grupos#destroyById
             * @methodOf lbServices.Nivel.grupos
             *
             * @description
             *
             * Delete a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.grupos.destroyById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::destroyById::Nivel::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.grupos#findById
             * @methodOf lbServices.Nivel.grupos
             *
             * @description
             *
             * Find a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.findById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::findById::Nivel::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.grupos#updateById
             * @methodOf lbServices.Nivel.grupos
             *
             * @description
             *
             * Update a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.updateById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::updateById::Nivel::grupos"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Nivel.subniveles
     * @header lbServices.Nivel.subniveles
     * @object
     * @description
     *
     * The object `Nivel.subniveles` groups methods
     * manipulating `Nivel` instances related to `Nivel`.
     *
     * Call {@link lbServices.Nivel#subniveles Nivel.subniveles()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Nivel#subniveles
             * @methodOf lbServices.Nivel
             *
             * @description
             *
             * Queries subniveles of Nivel.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R.subniveles = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::get::Nivel::subniveles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.subniveles#count
             * @methodOf lbServices.Nivel.subniveles
             *
             * @description
             *
             * Counts subniveles of Nivel.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.subniveles.count = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::count::Nivel::subniveles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.subniveles#create
             * @methodOf lbServices.Nivel.subniveles
             *
             * @description
             *
             * Creates a new instance in subniveles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R.subniveles.create = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::create::Nivel::subniveles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.subniveles#createMany
             * @methodOf lbServices.Nivel.subniveles
             *
             * @description
             *
             * Creates a new instance in subniveles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R.subniveles.createMany = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::createMany::Nivel::subniveles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.subniveles#destroyAll
             * @methodOf lbServices.Nivel.subniveles
             *
             * @description
             *
             * Deletes all subniveles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subniveles.destroyAll = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::delete::Nivel::subniveles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.subniveles#destroyById
             * @methodOf lbServices.Nivel.subniveles
             *
             * @description
             *
             * Delete a related item by id for subniveles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for subniveles
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subniveles.destroyById = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::destroyById::Nivel::subniveles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.subniveles#findById
             * @methodOf lbServices.Nivel.subniveles
             *
             * @description
             *
             * Find a related item by id for subniveles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for subniveles
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R.subniveles.findById = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::findById::Nivel::subniveles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Nivel.subniveles#updateById
             * @methodOf lbServices.Nivel.subniveles
             *
             * @description
             *
             * Update a related item by id for subniveles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Nivel id
             *
             *  - `fk` – `{*}` - Foreign key for subniveles
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Nivel` object.)
             * </em>
             */
        R.subniveles.updateById = function() {
          var TargetResource = $injector.get("Nivel");
          var action = TargetResource["::updateById::Nivel::subniveles"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Usuario
 * @header lbServices.Usuario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Usuario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Usuario",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Usuarios/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__findById__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__updateById__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.grupos.findById() instead.
            "prototype$__findById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/grupos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.grupos.destroyById() instead.
            "prototype$__destroyById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/grupos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.grupos.updateById() instead.
            "prototype$__updateById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/grupos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.matriculas.findById() instead.
            "prototype$__findById__matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.matriculas.destroyById() instead.
            "prototype$__destroyById__matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.matriculas.updateById() instead.
            "prototype$__updateById__matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.matriculas.link() instead.
            "prototype$__link__matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.matriculas.unlink() instead.
            "prototype$__unlink__matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.matriculas.exists() instead.
            "prototype$__exists__matriculas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/matriculas/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.findById() instead.
            "prototype$__findById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasimpartidas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.destroyById() instead.
            "prototype$__destroyById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasimpartidas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.updateById() instead.
            "prototype$__updateById__materiasimpartidas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasimpartidas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.findById() instead.
            "prototype$__findById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasmatriculadas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.destroyById() instead.
            "prototype$__destroyById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasmatriculadas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.updateById() instead.
            "prototype$__updateById__materiasmatriculadas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/materiasmatriculadas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.tutoria.findById() instead.
            "prototype$__findById__tutoria": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutoria/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutoria.destroyById() instead.
            "prototype$__destroyById__tutoria": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutoria/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutoria.updateById() instead.
            "prototype$__updateById__tutoria": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutoria/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.gruposcreados.findById() instead.
            "prototype$__findById__gruposcreados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/gruposcreados/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.gruposcreados.destroyById() instead.
            "prototype$__destroyById__gruposcreados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/gruposcreados/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.gruposcreados.updateById() instead.
            "prototype$__updateById__gruposcreados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/gruposcreados/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.coordina() instead.
            "prototype$__get__coordina": {
              url: urlBase + "/Usuarios/:id/coordina",
              method: "GET",
            },

            // INTERNAL. Use Usuario.coordina.create() instead.
            "prototype$__create__coordina": {
              url: urlBase + "/Usuarios/:id/coordina",
              method: "POST",
            },

            // INTERNAL. Use Usuario.coordina.update() instead.
            "prototype$__update__coordina": {
              url: urlBase + "/Usuarios/:id/coordina",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.coordina.destroy() instead.
            "prototype$__destroy__coordina": {
              url: urlBase + "/Usuarios/:id/coordina",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutorizados.findById() instead.
            "prototype$__findById__tutorizados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutorizados/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutorizados.destroyById() instead.
            "prototype$__destroyById__tutorizados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutorizados/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutorizados.updateById() instead.
            "prototype$__updateById__tutorizados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutorizados/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__get__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries accessTokens of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__create__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Usuarios/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__delete__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Usuarios/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__count__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Counts accessTokens of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Usuarios/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.grupos() instead.
            "prototype$__get__grupos": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/grupos",
              method: "GET",
            },

            // INTERNAL. Use Usuario.grupos.create() instead.
            "prototype$__create__grupos": {
              url: urlBase + "/Usuarios/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Usuario.grupos.destroyAll() instead.
            "prototype$__delete__grupos": {
              url: urlBase + "/Usuarios/:id/grupos",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.grupos.count() instead.
            "prototype$__count__grupos": {
              url: urlBase + "/Usuarios/:id/grupos/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.matriculas() instead.
            "prototype$__get__matriculas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/matriculas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.matriculas.create() instead.
            "prototype$__create__matriculas": {
              url: urlBase + "/Usuarios/:id/matriculas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.matriculas.destroyAll() instead.
            "prototype$__delete__matriculas": {
              url: urlBase + "/Usuarios/:id/matriculas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.matriculas.count() instead.
            "prototype$__count__matriculas": {
              url: urlBase + "/Usuarios/:id/matriculas/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasimpartidas() instead.
            "prototype$__get__materiasimpartidas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/materiasimpartidas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.create() instead.
            "prototype$__create__materiasimpartidas": {
              url: urlBase + "/Usuarios/:id/materiasimpartidas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.destroyAll() instead.
            "prototype$__delete__materiasimpartidas": {
              url: urlBase + "/Usuarios/:id/materiasimpartidas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.materiasimpartidas.count() instead.
            "prototype$__count__materiasimpartidas": {
              url: urlBase + "/Usuarios/:id/materiasimpartidas/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas() instead.
            "prototype$__get__materiasmatriculadas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/materiasmatriculadas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.create() instead.
            "prototype$__create__materiasmatriculadas": {
              url: urlBase + "/Usuarios/:id/materiasmatriculadas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.destroyAll() instead.
            "prototype$__delete__materiasmatriculadas": {
              url: urlBase + "/Usuarios/:id/materiasmatriculadas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.materiasmatriculadas.count() instead.
            "prototype$__count__materiasmatriculadas": {
              url: urlBase + "/Usuarios/:id/materiasmatriculadas/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutoria() instead.
            "prototype$__get__tutoria": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/tutoria",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutoria.create() instead.
            "prototype$__create__tutoria": {
              url: urlBase + "/Usuarios/:id/tutoria",
              method: "POST",
            },

            // INTERNAL. Use Usuario.tutoria.destroyAll() instead.
            "prototype$__delete__tutoria": {
              url: urlBase + "/Usuarios/:id/tutoria",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutoria.count() instead.
            "prototype$__count__tutoria": {
              url: urlBase + "/Usuarios/:id/tutoria/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.gruposcreados() instead.
            "prototype$__get__gruposcreados": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/gruposcreados",
              method: "GET",
            },

            // INTERNAL. Use Usuario.gruposcreados.create() instead.
            "prototype$__create__gruposcreados": {
              url: urlBase + "/Usuarios/:id/gruposcreados",
              method: "POST",
            },

            // INTERNAL. Use Usuario.gruposcreados.destroyAll() instead.
            "prototype$__delete__gruposcreados": {
              url: urlBase + "/Usuarios/:id/gruposcreados",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.gruposcreados.count() instead.
            "prototype$__count__gruposcreados": {
              url: urlBase + "/Usuarios/:id/gruposcreados/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutorizados() instead.
            "prototype$__get__tutorizados": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/tutorizados",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutorizados.create() instead.
            "prototype$__create__tutorizados": {
              url: urlBase + "/Usuarios/:id/tutorizados",
              method: "POST",
            },

            // INTERNAL. Use Usuario.tutorizados.destroyAll() instead.
            "prototype$__delete__tutorizados": {
              url: urlBase + "/Usuarios/:id/tutorizados",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutorizados.count() instead.
            "prototype$__count__tutorizados": {
              url: urlBase + "/Usuarios/:id/tutorizados/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#create
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Usuarios",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#createMany
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Usuarios",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#patchOrCreate
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Usuarios",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#replaceOrCreate
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Usuarios/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#upsertWithWhere
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Usuarios/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#exists
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Usuarios/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#findById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Usuarios/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#replaceById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Usuarios/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#find
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Usuarios",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#findOne
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Usuarios/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#updateAll
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Usuarios/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#deleteById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Usuarios/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#count
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Usuarios/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$patchAttributes
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Usuarios/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#createChangeStream
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Usuarios/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#login
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Usuarios/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#logout
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Usuarios/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$verify
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Usuarios/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#confirm
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Usuarios/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#resetPassword
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Usuarios/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#changePassword
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Usuarios/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#setPassword
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Usuarios/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#request_password_reset
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Solicita el reseteo de la contraseña.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `email` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `msg` – `{string=}` -
             */
            "request_password_reset": {
              url: urlBase + "/Usuarios/request_password_reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#reset_password_get
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Mostrar el formulario para el cambio de contraseña.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `access_token` – `{object}` -
             *
             *  - `res` – `{object}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `tokenId` – `{string=}` -
             */
            "reset_password_get": {
              url: urlBase + "/Usuarios/reset_password",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#reset_password_post
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Permite generar una nueva contraseña para un usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `passwords` – `{object}` -
             *
             *  - `access_token` – `{object}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `msg` – `{string=}` -
             */
            "reset_password_post": {
              url: urlBase + "/Usuarios/reset_password",
              method: "POST",
            },

            // INTERNAL. Use Grupo.alumnos.findById() instead.
            "::findById::Grupo::alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Grupo.alumnos.destroyById() instead.
            "::destroyById::Grupo::alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.alumnos.updateById() instead.
            "::updateById::Grupo::alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Grupo.alumnos.link() instead.
            "::link::Grupo::alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Grupo.alumnos.unlink() instead.
            "::unlink::Grupo::alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.alumnos.exists() instead.
            "::exists::Grupo::alumnos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Grupos/:id/alumnos/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Grupo.userId() instead.
            "::get::Grupo::userId": {
              url: urlBase + "/Grupos/:id/userId",
              method: "GET",
            },

            // INTERNAL. Use Grupo.alumnos() instead.
            "::get::Grupo::alumnos": {
              isArray: true,
              url: urlBase + "/Grupos/:id/alumnos",
              method: "GET",
            },

            // INTERNAL. Use Grupo.alumnos.create() instead.
            "::create::Grupo::alumnos": {
              url: urlBase + "/Grupos/:id/alumnos",
              method: "POST",
            },

            // INTERNAL. Use Grupo.alumnos.createMany() instead.
            "::createMany::Grupo::alumnos": {
              isArray: true,
              url: urlBase + "/Grupos/:id/alumnos",
              method: "POST",
            },

            // INTERNAL. Use Grupo.alumnos.destroyAll() instead.
            "::delete::Grupo::alumnos": {
              url: urlBase + "/Grupos/:id/alumnos",
              method: "DELETE",
            },

            // INTERNAL. Use Grupo.alumnos.count() instead.
            "::count::Grupo::alumnos": {
              url: urlBase + "/Grupos/:id/alumnos/count",
              method: "GET",
            },

            // INTERNAL. Use Materiaimpartida.userId() instead.
            "::get::Materiaimpartida::userId": {
              url: urlBase + "/Materiaimpartidas/:id/userId",
              method: "GET",
            },

            // INTERNAL. Use Materiamatriculada.userId() instead.
            "::get::Materiamatriculada::userId": {
              url: urlBase + "/Materiamatriculadas/:id/userId",
              method: "GET",
            },

            // INTERNAL. Use Matricula.userId() instead.
            "::get::Matricula::userId": {
              url: urlBase + "/Matriculas/:id/userId",
              method: "GET",
            },

            // INTERNAL. Use Centro.userId() instead.
            "::get::Centro::userId": {
              url: urlBase + "/Centros/:id/userId",
              method: "GET",
            },

            // INTERNAL. Use Tutorizado.tutorado() instead.
            "::get::Tutorizado::tutorado": {
              url: urlBase + "/Tutorizados/:id/tutorado",
              method: "GET",
            },

            // INTERNAL. Use Tutorizado.tutor() instead.
            "::get::Tutorizado::tutor": {
              url: urlBase + "/Tutorizados/:id/tutor",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#getCurrent
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Usuarios" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Usuario#upsert
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#updateOrCreate
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#patchOrCreateWithWhere
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#update
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#destroyById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#removeById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$updateAttributes
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#getCachedCurrent
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Usuario#login} or
         * {@link lbServices.Usuario#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Usuario instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#isAuthenticated
         * @methodOf lbServices.Usuario
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#getCurrentId
         * @methodOf lbServices.Usuario
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Usuario#modelName
        * @propertyOf lbServices.Usuario
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Usuario`.
        */
        R.modelName = "Usuario";

    /**
     * @ngdoc object
     * @name lbServices.Usuario.grupos
     * @header lbServices.Usuario.grupos
     * @object
     * @description
     *
     * The object `Usuario.grupos` groups methods
     * manipulating `Grupo` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#grupos Usuario.grupos()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#grupos
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries grupos of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Usuario::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.grupos#count
             * @methodOf lbServices.Usuario.grupos
             *
             * @description
             *
             * Counts grupos of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.grupos.count = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::count::Usuario::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.grupos#create
             * @methodOf lbServices.Usuario.grupos
             *
             * @description
             *
             * Creates a new instance in grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.create = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::create::Usuario::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.grupos#createMany
             * @methodOf lbServices.Usuario.grupos
             *
             * @description
             *
             * Creates a new instance in grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.createMany = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::createMany::Usuario::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.grupos#destroyAll
             * @methodOf lbServices.Usuario.grupos
             *
             * @description
             *
             * Deletes all grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.grupos.destroyAll = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::delete::Usuario::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.grupos#destroyById
             * @methodOf lbServices.Usuario.grupos
             *
             * @description
             *
             * Delete a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.grupos.destroyById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::destroyById::Usuario::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.grupos#findById
             * @methodOf lbServices.Usuario.grupos
             *
             * @description
             *
             * Find a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.findById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::findById::Usuario::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.grupos#updateById
             * @methodOf lbServices.Usuario.grupos
             *
             * @description
             *
             * Update a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.updateById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::updateById::Usuario::grupos"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.matriculas
     * @header lbServices.Usuario.matriculas
     * @object
     * @description
     *
     * The object `Usuario.matriculas` groups methods
     * manipulating `Grupo` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#matriculas Usuario.matriculas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#matriculas
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries matriculas of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.matriculas = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#count
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Counts matriculas of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.matriculas.count = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::count::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#create
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Creates a new instance in matriculas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.matriculas.create = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::create::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#createMany
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Creates a new instance in matriculas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.matriculas.createMany = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::createMany::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#destroyAll
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Deletes all matriculas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.matriculas.destroyAll = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::delete::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#destroyById
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Delete a related item by id for matriculas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for matriculas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.matriculas.destroyById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::destroyById::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#exists
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Check the existence of matriculas relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for matriculas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.matriculas.exists = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::exists::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#findById
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Find a related item by id for matriculas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for matriculas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.matriculas.findById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::findById::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#link
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Add a related item by id for matriculas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for matriculas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.matriculas.link = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::link::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#unlink
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Remove the matriculas relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for matriculas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.matriculas.unlink = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::unlink::Usuario::matriculas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.matriculas#updateById
             * @methodOf lbServices.Usuario.matriculas
             *
             * @description
             *
             * Update a related item by id for matriculas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for matriculas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.matriculas.updateById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::updateById::Usuario::matriculas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.materiasimpartidas
     * @header lbServices.Usuario.materiasimpartidas
     * @object
     * @description
     *
     * The object `Usuario.materiasimpartidas` groups methods
     * manipulating `Materiaimpartida` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#materiasimpartidas Usuario.materiasimpartidas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#materiasimpartidas
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries materiasimpartidas of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::get::Usuario::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasimpartidas#count
             * @methodOf lbServices.Usuario.materiasimpartidas
             *
             * @description
             *
             * Counts materiasimpartidas of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.materiasimpartidas.count = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::count::Usuario::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasimpartidas#create
             * @methodOf lbServices.Usuario.materiasimpartidas
             *
             * @description
             *
             * Creates a new instance in materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.create = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::create::Usuario::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasimpartidas#createMany
             * @methodOf lbServices.Usuario.materiasimpartidas
             *
             * @description
             *
             * Creates a new instance in materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.createMany = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::createMany::Usuario::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasimpartidas#destroyAll
             * @methodOf lbServices.Usuario.materiasimpartidas
             *
             * @description
             *
             * Deletes all materiasimpartidas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasimpartidas.destroyAll = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::delete::Usuario::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasimpartidas#destroyById
             * @methodOf lbServices.Usuario.materiasimpartidas
             *
             * @description
             *
             * Delete a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasimpartidas.destroyById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::destroyById::Usuario::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasimpartidas#findById
             * @methodOf lbServices.Usuario.materiasimpartidas
             *
             * @description
             *
             * Find a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.findById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::findById::Usuario::materiasimpartidas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasimpartidas#updateById
             * @methodOf lbServices.Usuario.materiasimpartidas
             *
             * @description
             *
             * Update a related item by id for materiasimpartidas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for materiasimpartidas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiaimpartida` object.)
             * </em>
             */
        R.materiasimpartidas.updateById = function() {
          var TargetResource = $injector.get("Materiaimpartida");
          var action = TargetResource["::updateById::Usuario::materiasimpartidas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.materiasmatriculadas
     * @header lbServices.Usuario.materiasmatriculadas
     * @object
     * @description
     *
     * The object `Usuario.materiasmatriculadas` groups methods
     * manipulating `Materiamatriculada` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#materiasmatriculadas Usuario.materiasmatriculadas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#materiasmatriculadas
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries materiasmatriculadas of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::get::Usuario::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasmatriculadas#count
             * @methodOf lbServices.Usuario.materiasmatriculadas
             *
             * @description
             *
             * Counts materiasmatriculadas of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.materiasmatriculadas.count = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::count::Usuario::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasmatriculadas#create
             * @methodOf lbServices.Usuario.materiasmatriculadas
             *
             * @description
             *
             * Creates a new instance in materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.create = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::create::Usuario::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasmatriculadas#createMany
             * @methodOf lbServices.Usuario.materiasmatriculadas
             *
             * @description
             *
             * Creates a new instance in materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.createMany = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::createMany::Usuario::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasmatriculadas#destroyAll
             * @methodOf lbServices.Usuario.materiasmatriculadas
             *
             * @description
             *
             * Deletes all materiasmatriculadas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasmatriculadas.destroyAll = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::delete::Usuario::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasmatriculadas#destroyById
             * @methodOf lbServices.Usuario.materiasmatriculadas
             *
             * @description
             *
             * Delete a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.materiasmatriculadas.destroyById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::destroyById::Usuario::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasmatriculadas#findById
             * @methodOf lbServices.Usuario.materiasmatriculadas
             *
             * @description
             *
             * Find a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.findById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::findById::Usuario::materiasmatriculadas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.materiasmatriculadas#updateById
             * @methodOf lbServices.Usuario.materiasmatriculadas
             *
             * @description
             *
             * Update a related item by id for materiasmatriculadas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for materiasmatriculadas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Materiamatriculada` object.)
             * </em>
             */
        R.materiasmatriculadas.updateById = function() {
          var TargetResource = $injector.get("Materiamatriculada");
          var action = TargetResource["::updateById::Usuario::materiasmatriculadas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.tutoria
     * @header lbServices.Usuario.tutoria
     * @object
     * @description
     *
     * The object `Usuario.tutoria` groups methods
     * manipulating `Grupo` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#tutoria Usuario.tutoria()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#tutoria
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries tutoria of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.tutoria = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Usuario::tutoria"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutoria#count
             * @methodOf lbServices.Usuario.tutoria
             *
             * @description
             *
             * Counts tutoria of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.tutoria.count = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::count::Usuario::tutoria"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutoria#create
             * @methodOf lbServices.Usuario.tutoria
             *
             * @description
             *
             * Creates a new instance in tutoria of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.tutoria.create = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::create::Usuario::tutoria"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutoria#createMany
             * @methodOf lbServices.Usuario.tutoria
             *
             * @description
             *
             * Creates a new instance in tutoria of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.tutoria.createMany = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::createMany::Usuario::tutoria"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutoria#destroyAll
             * @methodOf lbServices.Usuario.tutoria
             *
             * @description
             *
             * Deletes all tutoria of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tutoria.destroyAll = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::delete::Usuario::tutoria"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutoria#destroyById
             * @methodOf lbServices.Usuario.tutoria
             *
             * @description
             *
             * Delete a related item by id for tutoria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tutoria
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tutoria.destroyById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::destroyById::Usuario::tutoria"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutoria#findById
             * @methodOf lbServices.Usuario.tutoria
             *
             * @description
             *
             * Find a related item by id for tutoria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tutoria
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.tutoria.findById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::findById::Usuario::tutoria"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutoria#updateById
             * @methodOf lbServices.Usuario.tutoria
             *
             * @description
             *
             * Update a related item by id for tutoria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for tutoria
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.tutoria.updateById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::updateById::Usuario::tutoria"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.gruposcreados
     * @header lbServices.Usuario.gruposcreados
     * @object
     * @description
     *
     * The object `Usuario.gruposcreados` groups methods
     * manipulating `Grupo` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#gruposcreados Usuario.gruposcreados()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#gruposcreados
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries gruposcreados of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.gruposcreados = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Usuario::gruposcreados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.gruposcreados#count
             * @methodOf lbServices.Usuario.gruposcreados
             *
             * @description
             *
             * Counts gruposcreados of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.gruposcreados.count = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::count::Usuario::gruposcreados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.gruposcreados#create
             * @methodOf lbServices.Usuario.gruposcreados
             *
             * @description
             *
             * Creates a new instance in gruposcreados of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.gruposcreados.create = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::create::Usuario::gruposcreados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.gruposcreados#createMany
             * @methodOf lbServices.Usuario.gruposcreados
             *
             * @description
             *
             * Creates a new instance in gruposcreados of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.gruposcreados.createMany = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::createMany::Usuario::gruposcreados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.gruposcreados#destroyAll
             * @methodOf lbServices.Usuario.gruposcreados
             *
             * @description
             *
             * Deletes all gruposcreados of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.gruposcreados.destroyAll = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::delete::Usuario::gruposcreados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.gruposcreados#destroyById
             * @methodOf lbServices.Usuario.gruposcreados
             *
             * @description
             *
             * Delete a related item by id for gruposcreados.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for gruposcreados
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.gruposcreados.destroyById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::destroyById::Usuario::gruposcreados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.gruposcreados#findById
             * @methodOf lbServices.Usuario.gruposcreados
             *
             * @description
             *
             * Find a related item by id for gruposcreados.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for gruposcreados
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.gruposcreados.findById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::findById::Usuario::gruposcreados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.gruposcreados#updateById
             * @methodOf lbServices.Usuario.gruposcreados
             *
             * @description
             *
             * Update a related item by id for gruposcreados.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for gruposcreados
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.gruposcreados.updateById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::updateById::Usuario::gruposcreados"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.coordina
     * @header lbServices.Usuario.coordina
     * @object
     * @description
     *
     * The object `Usuario.coordina` groups methods
     * manipulating `Centro` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#coordina Usuario.coordina()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#coordina
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Fetches hasOne relation coordina.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R.coordina = function() {
          var TargetResource = $injector.get("Centro");
          var action = TargetResource["::get::Usuario::coordina"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.coordina#create
             * @methodOf lbServices.Usuario.coordina
             *
             * @description
             *
             * Creates a new instance in coordina of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R.coordina.create = function() {
          var TargetResource = $injector.get("Centro");
          var action = TargetResource["::create::Usuario::coordina"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.coordina#createMany
             * @methodOf lbServices.Usuario.coordina
             *
             * @description
             *
             * Creates a new instance in coordina of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R.coordina.createMany = function() {
          var TargetResource = $injector.get("Centro");
          var action = TargetResource["::createMany::Usuario::coordina"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.coordina#destroy
             * @methodOf lbServices.Usuario.coordina
             *
             * @description
             *
             * Deletes coordina of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.coordina.destroy = function() {
          var TargetResource = $injector.get("Centro");
          var action = TargetResource["::destroy::Usuario::coordina"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.coordina#update
             * @methodOf lbServices.Usuario.coordina
             *
             * @description
             *
             * Update coordina of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R.coordina.update = function() {
          var TargetResource = $injector.get("Centro");
          var action = TargetResource["::update::Usuario::coordina"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.tutorizados
     * @header lbServices.Usuario.tutorizados
     * @object
     * @description
     *
     * The object `Usuario.tutorizados` groups methods
     * manipulating `Tutorizado` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#tutorizados Usuario.tutorizados()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#tutorizados
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries tutorizados of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R.tutorizados = function() {
          var TargetResource = $injector.get("Tutorizado");
          var action = TargetResource["::get::Usuario::tutorizados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutorizados#count
             * @methodOf lbServices.Usuario.tutorizados
             *
             * @description
             *
             * Counts tutorizados of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.tutorizados.count = function() {
          var TargetResource = $injector.get("Tutorizado");
          var action = TargetResource["::count::Usuario::tutorizados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutorizados#create
             * @methodOf lbServices.Usuario.tutorizados
             *
             * @description
             *
             * Creates a new instance in tutorizados of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R.tutorizados.create = function() {
          var TargetResource = $injector.get("Tutorizado");
          var action = TargetResource["::create::Usuario::tutorizados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutorizados#createMany
             * @methodOf lbServices.Usuario.tutorizados
             *
             * @description
             *
             * Creates a new instance in tutorizados of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R.tutorizados.createMany = function() {
          var TargetResource = $injector.get("Tutorizado");
          var action = TargetResource["::createMany::Usuario::tutorizados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutorizados#destroyAll
             * @methodOf lbServices.Usuario.tutorizados
             *
             * @description
             *
             * Deletes all tutorizados of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tutorizados.destroyAll = function() {
          var TargetResource = $injector.get("Tutorizado");
          var action = TargetResource["::delete::Usuario::tutorizados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutorizados#destroyById
             * @methodOf lbServices.Usuario.tutorizados
             *
             * @description
             *
             * Delete a related item by id for tutorizados.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tutorizados
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.tutorizados.destroyById = function() {
          var TargetResource = $injector.get("Tutorizado");
          var action = TargetResource["::destroyById::Usuario::tutorizados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutorizados#findById
             * @methodOf lbServices.Usuario.tutorizados
             *
             * @description
             *
             * Find a related item by id for tutorizados.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for tutorizados
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R.tutorizados.findById = function() {
          var TargetResource = $injector.get("Tutorizado");
          var action = TargetResource["::findById::Usuario::tutorizados"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.tutorizados#updateById
             * @methodOf lbServices.Usuario.tutorizados
             *
             * @description
             *
             * Update a related item by id for tutorizados.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for tutorizados
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R.tutorizados.updateById = function() {
          var TargetResource = $injector.get("Tutorizado");
          var action = TargetResource["::updateById::Usuario::tutorizados"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Centro
 * @header lbServices.Centro
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Centro` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Centro",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Centros/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Centro.userId() instead.
            "prototype$__get__userId": {
              url: urlBase + "/Centros/:id/userId",
              method: "GET",
            },

            // INTERNAL. Use Centro.cursosescolares.findById() instead.
            "prototype$__findById__cursosescolares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Centros/:id/cursosescolares/:fk",
              method: "GET",
            },

            // INTERNAL. Use Centro.cursosescolares.destroyById() instead.
            "prototype$__destroyById__cursosescolares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Centros/:id/cursosescolares/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Centro.cursosescolares.updateById() instead.
            "prototype$__updateById__cursosescolares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Centros/:id/cursosescolares/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Centro.cursosescolares() instead.
            "prototype$__get__cursosescolares": {
              isArray: true,
              url: urlBase + "/Centros/:id/cursosescolares",
              method: "GET",
            },

            // INTERNAL. Use Centro.cursosescolares.create() instead.
            "prototype$__create__cursosescolares": {
              url: urlBase + "/Centros/:id/cursosescolares",
              method: "POST",
            },

            // INTERNAL. Use Centro.cursosescolares.destroyAll() instead.
            "prototype$__delete__cursosescolares": {
              url: urlBase + "/Centros/:id/cursosescolares",
              method: "DELETE",
            },

            // INTERNAL. Use Centro.cursosescolares.count() instead.
            "prototype$__count__cursosescolares": {
              url: urlBase + "/Centros/:id/cursosescolares/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#create
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Centros",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#createMany
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Centros",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#patchOrCreate
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Centros",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#replaceOrCreate
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Centros/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#upsertWithWhere
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Centros/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#exists
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Centros/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#findById
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Centros/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#replaceById
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Centros/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#find
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Centros",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#findOne
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Centros/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#updateAll
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Centros/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#deleteById
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Centros/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#count
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Centros/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#prototype$patchAttributes
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Centros/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#createChangeStream
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Centros/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#alumnosMatriculados
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Devuelve el número de alumnos matriculados, en un centro, en el año actual
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{integer}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `msg` – `{string=}` -
             */
            "alumnosMatriculados": {
              url: urlBase + "/Centros/:id/alumnosMatriculados",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Centro#validar_centro
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Valida un centro. Lo debe hacer un administrador
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `idCentro` – `{integer}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `msg` – `{string=}` -
             */
            "validar_centro": {
              url: urlBase + "/Centros/validar-centro",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.coordina() instead.
            "::get::Usuario::coordina": {
              url: urlBase + "/Usuarios/:id/coordina",
              method: "GET",
            },

            // INTERNAL. Use Usuario.coordina.create() instead.
            "::create::Usuario::coordina": {
              url: urlBase + "/Usuarios/:id/coordina",
              method: "POST",
            },

            // INTERNAL. Use Usuario.coordina.createMany() instead.
            "::createMany::Usuario::coordina": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/coordina",
              method: "POST",
            },

            // INTERNAL. Use Usuario.coordina.update() instead.
            "::update::Usuario::coordina": {
              url: urlBase + "/Usuarios/:id/coordina",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.coordina.destroy() instead.
            "::destroy::Usuario::coordina": {
              url: urlBase + "/Usuarios/:id/coordina",
              method: "DELETE",
            },

            // INTERNAL. Use Anyoescolar.centroId() instead.
            "::get::Anyoescolar::centroId": {
              url: urlBase + "/Anyoescolars/:id/centroId",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Centro#upsert
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Centro#updateOrCreate
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Centro#patchOrCreateWithWhere
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Centro#update
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Centro#destroyById
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Centro#removeById
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Centro#prototype$updateAttributes
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Centro#modelName
        * @propertyOf lbServices.Centro
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Centro`.
        */
        R.modelName = "Centro";


            /**
             * @ngdoc method
             * @name lbServices.Centro#userId
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Fetches belongsTo relation userId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.userId = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Centro::userId"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Centro.cursosescolares
     * @header lbServices.Centro.cursosescolares
     * @object
     * @description
     *
     * The object `Centro.cursosescolares` groups methods
     * manipulating `Anyoescolar` instances related to `Centro`.
     *
     * Call {@link lbServices.Centro#cursosescolares Centro.cursosescolares()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Centro#cursosescolares
             * @methodOf lbServices.Centro
             *
             * @description
             *
             * Queries cursosescolares of Centro.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R.cursosescolares = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::get::Centro::cursosescolares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Centro.cursosescolares#count
             * @methodOf lbServices.Centro.cursosescolares
             *
             * @description
             *
             * Counts cursosescolares of Centro.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.cursosescolares.count = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::count::Centro::cursosescolares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Centro.cursosescolares#create
             * @methodOf lbServices.Centro.cursosescolares
             *
             * @description
             *
             * Creates a new instance in cursosescolares of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R.cursosescolares.create = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::create::Centro::cursosescolares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Centro.cursosescolares#createMany
             * @methodOf lbServices.Centro.cursosescolares
             *
             * @description
             *
             * Creates a new instance in cursosescolares of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R.cursosescolares.createMany = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::createMany::Centro::cursosescolares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Centro.cursosescolares#destroyAll
             * @methodOf lbServices.Centro.cursosescolares
             *
             * @description
             *
             * Deletes all cursosescolares of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cursosescolares.destroyAll = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::delete::Centro::cursosescolares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Centro.cursosescolares#destroyById
             * @methodOf lbServices.Centro.cursosescolares
             *
             * @description
             *
             * Delete a related item by id for cursosescolares.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for cursosescolares
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cursosescolares.destroyById = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::destroyById::Centro::cursosescolares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Centro.cursosescolares#findById
             * @methodOf lbServices.Centro.cursosescolares
             *
             * @description
             *
             * Find a related item by id for cursosescolares.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for cursosescolares
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R.cursosescolares.findById = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::findById::Centro::cursosescolares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Centro.cursosescolares#updateById
             * @methodOf lbServices.Centro.cursosescolares
             *
             * @description
             *
             * Update a related item by id for cursosescolares.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Centro id
             *
             *  - `fk` – `{*}` - Foreign key for cursosescolares
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R.cursosescolares.updateById = function() {
          var TargetResource = $injector.get("Anyoescolar");
          var action = TargetResource["::updateById::Centro::cursosescolares"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Anyoescolar
 * @header lbServices.Anyoescolar
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Anyoescolar` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Anyoescolar",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Anyoescolars/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Anyoescolar.centroId() instead.
            "prototype$__get__centroId": {
              url: urlBase + "/Anyoescolars/:id/centroId",
              method: "GET",
            },

            // INTERNAL. Use Anyoescolar.grupos.findById() instead.
            "prototype$__findById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Anyoescolars/:id/grupos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Anyoescolar.grupos.destroyById() instead.
            "prototype$__destroyById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Anyoescolars/:id/grupos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Anyoescolar.grupos.updateById() instead.
            "prototype$__updateById__grupos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Anyoescolars/:id/grupos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Anyoescolar.grupos() instead.
            "prototype$__get__grupos": {
              isArray: true,
              url: urlBase + "/Anyoescolars/:id/grupos",
              method: "GET",
            },

            // INTERNAL. Use Anyoescolar.grupos.create() instead.
            "prototype$__create__grupos": {
              url: urlBase + "/Anyoescolars/:id/grupos",
              method: "POST",
            },

            // INTERNAL. Use Anyoescolar.grupos.destroyAll() instead.
            "prototype$__delete__grupos": {
              url: urlBase + "/Anyoescolars/:id/grupos",
              method: "DELETE",
            },

            // INTERNAL. Use Anyoescolar.grupos.count() instead.
            "prototype$__count__grupos": {
              url: urlBase + "/Anyoescolars/:id/grupos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#create
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Anyoescolars",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#createMany
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Anyoescolars",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#patchOrCreate
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Anyoescolars",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#replaceOrCreate
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Anyoescolars/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#upsertWithWhere
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Anyoescolars/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#exists
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Anyoescolars/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#findById
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Anyoescolars/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#replaceById
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Anyoescolars/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#find
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Anyoescolars",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#findOne
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Anyoescolars/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#updateAll
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Anyoescolars/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#deleteById
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Anyoescolars/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#count
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Anyoescolars/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#prototype$patchAttributes
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Anyoescolars/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#createChangeStream
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Anyoescolars/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Grupo.anyoescolarId() instead.
            "::get::Grupo::anyoescolarId": {
              url: urlBase + "/Grupos/:id/anyoescolarId",
              method: "GET",
            },

            // INTERNAL. Use Centro.cursosescolares.findById() instead.
            "::findById::Centro::cursosescolares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Centros/:id/cursosescolares/:fk",
              method: "GET",
            },

            // INTERNAL. Use Centro.cursosescolares.destroyById() instead.
            "::destroyById::Centro::cursosescolares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Centros/:id/cursosescolares/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Centro.cursosescolares.updateById() instead.
            "::updateById::Centro::cursosescolares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Centros/:id/cursosescolares/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Centro.cursosescolares() instead.
            "::get::Centro::cursosescolares": {
              isArray: true,
              url: urlBase + "/Centros/:id/cursosescolares",
              method: "GET",
            },

            // INTERNAL. Use Centro.cursosescolares.create() instead.
            "::create::Centro::cursosescolares": {
              url: urlBase + "/Centros/:id/cursosescolares",
              method: "POST",
            },

            // INTERNAL. Use Centro.cursosescolares.createMany() instead.
            "::createMany::Centro::cursosescolares": {
              isArray: true,
              url: urlBase + "/Centros/:id/cursosescolares",
              method: "POST",
            },

            // INTERNAL. Use Centro.cursosescolares.destroyAll() instead.
            "::delete::Centro::cursosescolares": {
              url: urlBase + "/Centros/:id/cursosescolares",
              method: "DELETE",
            },

            // INTERNAL. Use Centro.cursosescolares.count() instead.
            "::count::Centro::cursosescolares": {
              url: urlBase + "/Centros/:id/cursosescolares/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#upsert
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#updateOrCreate
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#patchOrCreateWithWhere
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#update
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#destroyById
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#removeById
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#prototype$updateAttributes
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Anyoescolar` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Anyoescolar#modelName
        * @propertyOf lbServices.Anyoescolar
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Anyoescolar`.
        */
        R.modelName = "Anyoescolar";


            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#centroId
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Fetches belongsTo relation centroId.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Centro` object.)
             * </em>
             */
        R.centroId = function() {
          var TargetResource = $injector.get("Centro");
          var action = TargetResource["::get::Anyoescolar::centroId"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Anyoescolar.grupos
     * @header lbServices.Anyoescolar.grupos
     * @object
     * @description
     *
     * The object `Anyoescolar.grupos` groups methods
     * manipulating `Grupo` instances related to `Anyoescolar`.
     *
     * Call {@link lbServices.Anyoescolar#grupos Anyoescolar.grupos()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar#grupos
             * @methodOf lbServices.Anyoescolar
             *
             * @description
             *
             * Queries grupos of Anyoescolar.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::get::Anyoescolar::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar.grupos#count
             * @methodOf lbServices.Anyoescolar.grupos
             *
             * @description
             *
             * Counts grupos of Anyoescolar.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.grupos.count = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::count::Anyoescolar::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar.grupos#create
             * @methodOf lbServices.Anyoescolar.grupos
             *
             * @description
             *
             * Creates a new instance in grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.create = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::create::Anyoescolar::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar.grupos#createMany
             * @methodOf lbServices.Anyoescolar.grupos
             *
             * @description
             *
             * Creates a new instance in grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.createMany = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::createMany::Anyoescolar::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar.grupos#destroyAll
             * @methodOf lbServices.Anyoescolar.grupos
             *
             * @description
             *
             * Deletes all grupos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.grupos.destroyAll = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::delete::Anyoescolar::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar.grupos#destroyById
             * @methodOf lbServices.Anyoescolar.grupos
             *
             * @description
             *
             * Delete a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.grupos.destroyById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::destroyById::Anyoescolar::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar.grupos#findById
             * @methodOf lbServices.Anyoescolar.grupos
             *
             * @description
             *
             * Find a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.findById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::findById::Anyoescolar::grupos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Anyoescolar.grupos#updateById
             * @methodOf lbServices.Anyoescolar.grupos
             *
             * @description
             *
             * Update a related item by id for grupos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Anyoescolar id
             *
             *  - `fk` – `{*}` - Foreign key for grupos
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Grupo` object.)
             * </em>
             */
        R.grupos.updateById = function() {
          var TargetResource = $injector.get("Grupo");
          var action = TargetResource["::updateById::Anyoescolar::grupos"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Tutorizado
 * @header lbServices.Tutorizado
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tutorizado` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Tutorizado",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Tutorizados/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Tutorizado.tutorado() instead.
            "prototype$__get__tutorado": {
              url: urlBase + "/Tutorizados/:id/tutorado",
              method: "GET",
            },

            // INTERNAL. Use Tutorizado.tutor() instead.
            "prototype$__get__tutor": {
              url: urlBase + "/Tutorizados/:id/tutor",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#create
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Tutorizados",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#createMany
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Tutorizados",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#patchOrCreate
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Tutorizados",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#replaceOrCreate
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Tutorizados/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#upsertWithWhere
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Tutorizados/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#exists
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Tutorizados/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#findById
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Tutorizados/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#replaceById
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Tutorizados/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#find
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Tutorizados",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#findOne
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Tutorizados/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#updateAll
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Tutorizados/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#deleteById
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Tutorizados/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#count
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Tutorizados/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#prototype$patchAttributes
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tutorizado id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Tutorizados/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#createChangeStream
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Tutorizados/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Usuario.tutorizados.findById() instead.
            "::findById::Usuario::tutorizados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutorizados/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutorizados.destroyById() instead.
            "::destroyById::Usuario::tutorizados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutorizados/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutorizados.updateById() instead.
            "::updateById::Usuario::tutorizados": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/tutorizados/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.tutorizados() instead.
            "::get::Usuario::tutorizados": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/tutorizados",
              method: "GET",
            },

            // INTERNAL. Use Usuario.tutorizados.create() instead.
            "::create::Usuario::tutorizados": {
              url: urlBase + "/Usuarios/:id/tutorizados",
              method: "POST",
            },

            // INTERNAL. Use Usuario.tutorizados.createMany() instead.
            "::createMany::Usuario::tutorizados": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/tutorizados",
              method: "POST",
            },

            // INTERNAL. Use Usuario.tutorizados.destroyAll() instead.
            "::delete::Usuario::tutorizados": {
              url: urlBase + "/Usuarios/:id/tutorizados",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.tutorizados.count() instead.
            "::count::Usuario::tutorizados": {
              url: urlBase + "/Usuarios/:id/tutorizados/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#upsert
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#updateOrCreate
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#patchOrCreateWithWhere
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#update
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#destroyById
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#removeById
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#prototype$updateAttributes
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tutorizado id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Tutorizado` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Tutorizado#modelName
        * @propertyOf lbServices.Tutorizado
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Tutorizado`.
        */
        R.modelName = "Tutorizado";


            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#tutorado
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Fetches belongsTo relation tutorado.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tutorizado id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.tutorado = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Tutorizado::tutorado"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Tutorizado#tutor
             * @methodOf lbServices.Tutorizado
             *
             * @description
             *
             * Fetches belongsTo relation tutor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Tutorizado id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.tutor = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Tutorizado::tutor"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && config.url.indexOf(urlBaseHost) === -1) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
