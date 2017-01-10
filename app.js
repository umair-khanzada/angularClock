/**
 * Created by UmairAhmed on 1/11/2017.
 */

angular.module('angularClock', [])
    .directive('clock', function( $interval ) {
        'ngInject';
        return{
            restrict: 'E',
            scope: {
                    color: '@?', //color code #ffffff or color name white.
                    bgColor: '@?', //color code #ffffff or color name white.
                    hourNumber: '<?', //hour-number Boolean show or hide.
                    size: '<?' //size of the clock.
            },
            templateUrl: './clock.html',
            link: function(scope){
                //set default values of component.
                scope.color = scope.color || '#000';
                scope.bgColor = scope.bgColor || '#fff';
                scope.hourNumber = scope.hourNumber || false;
                scope.size = scope.size || 100;

                //Declaration.
                var now, sec, min, hour, secAngle, minAngle, hourAngle, secHand, minHand, hourHand;

                function startClock(){
                    now = new Date();
                    sec = now.getSeconds();
                    min = now.getMinutes();
                    hour = (now.getHours() % 12) + min/60;
                    secAngle = sec*6;
                    minAngle = min*6;
                    hourAngle = hour*30;

                    //get clock handles.
                    secHand = document.getElementById('second-hand');
                    minHand = document.getElementById('minute-hand');
                    hourHand = document.getElementById('hour-hand');

                    //rotate clock handles.
                    secHand.setAttribute("transform", "rotate(" + secAngle + ",50,50)");
                    minHand.setAttribute("transform", "rotate(" + minAngle + ",50,50)");
                    hourHand.setAttribute("transform", "rotate(" + hourAngle + ",50,50)");
                }

                $interval(startClock, 1000)

            }

        }

    }
);



