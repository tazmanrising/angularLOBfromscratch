/**
 * Created by tjsticke on 6/12/2015.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",    // controller method take in the string name of the controller and a reference to it as 2nd param
                ProductListCtrl);   //INSTEAD we will pass in a reference to the function  ,  this is a reference to our function
                //function() {
                //
                //});
        function ProductListCtrl() {     // create the function separate from our registration
            // two things to do:
            // 1. define the model for binding to the view
            // 2. implement actions with methods for the view

            // controller AS  syntax  , have to use  THIS keyword
            var vm = this;   // can be problem with child functions
            //array of products  , its in the ng-init

            vm.products = [
                {" productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2009",
                    "description": "Leaf rake with 48-inch handle.",
                    "cost": 9.00,
                    "price": 19.95,
                    "category": "garden",
                    "tags": [ "leaf", "tool" ],
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 5,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2013",
                    "description": "Curved claw steel hammer",
                    "cost": 1.00,
                    "price": 8.99,
                    "category": "toolbox",
                    "tags": ["tool"],
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                }]

            vm.showImage = false;

            vm.toggleImage = function() {
                vm.showImage = !vm.showImage;  // inverse the boolean to hide the image
            }


        }

}());