/**
 * Created by Thomas on 6/13/2015.
 */

(function () {
    "use strict";

    angular
        .module("common.services")  //
        .factory("productResource",  //factory method,  name  then array
            ["$resource", productResource]  //use brackets [] as array in case file is minified, this prevents it from getting
                           // changed to a single variable character which would certainly be a problem
                         // sometimes this is called a  "Min-Safe Array"
        );

    //define the function and inject the $resource into it
    function productResource($resource) {
        return $resource("/api/products/:productId")    // return the $resource object
    }
}());
