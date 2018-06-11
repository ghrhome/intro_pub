/**
 * Created by whobird on 2018/6/10.
 */


var pageView=(function ($){
    var pageView={};

    var controller;

    pageView.animateInit=function(){
        controller = new ScrollMagic.Controller();

        var _height=parseInt($("body").height())+100;
        var _dheight=_height/2+560;
        var scenePin=new ScrollMagic.Scene({

            triggerElement: "#trigger-pin",
            duration: _dheight,

            triggerHook:"onLeave"

        })
            .setPin("#js-static-ani")
            .setClassToggle("#js-static-ani", "pin")
            .addTo(controller);

        var sceneNext=new ScrollMagic.Scene({

            triggerElement: "#trigger-pin",
            offset:50,

            triggerHook:"onLeave"

        })
            .setClassToggle("#js-next", "hide")
            .addTo(controller);


        /*

          $(".section-pin").css( "height",_bodyHeight+"px");

          new ScrollMagic.Scene({

              triggerElement: "#trigger-pin",
              duration: 650,

              triggerHook:0.6

          })
              .setPin("#js-static-ani")
              .setClassToggle("#js-static-ani", "pin")
              .addTo(controller);

  */


        var $ani_0=$(".animate-0");
        var $ani_0_1=$(".animate-0-1");
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger-0", duration: _height+300, triggerHook:0.5})
            .on("enter", function () {
                // trigger animation by changing inline style.
                //animateElem.style.backgroundColor = "grey";
                $ani_0.off();
                $ani_0_1.off();

                $ani_0.removeClass("fadeOut").addClass("active animated");
                requestAnimationFrame(function(){
                    $ani_0.addClass('fadeInUp').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
                        //$ani_0.removeClass("fadeInUp");
                    });
                });

                $ani_0_1.removeClass("fadeOut").addClass("active animated");
                requestAnimationFrame(function(){
                    $ani_0_1.addClass('fadeIn').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
                        //$ani_0.removeClass("fadeInUp");
                    });
                });
            })
            .on("leave", function () {
                // reset style
                //animateElem.style.backgroundColor = "";
                if($ani_0.hasClass("active")){
                    $ani_0.addClass('fadeOut').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
                        $ani_0.removeClass("active animated fadeOut fadeInUp");
                    });
                }

                if($ani_0_1.hasClass("active")){
                    $ani_0_1.addClass('fadeOut').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
                        $ani_0_1.removeClass("active animated fadeOut fadeIn");
                    });
                }
            })
            .addTo(controller);//animate 01-


        var $ani_4_0=$(".animate-4-0");

        var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger-4", duration: _height+300, triggerHook:0.7})
            .on("enter", function () {
                // trigger animation by changing inline style.
                //animateElem.style.backgroundColor = "grey";

                $ani_4_0.off();


                $ani_4_0.removeClass("fadeOut").addClass("active animated");
                requestAnimationFrame(function(){
                    $ani_4_0.addClass('fadeIn').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
                        //$ani_0.removeClass("fadeInUp");
                    });
                });
            })
            .on("leave", function () {
                // reset style
                //animateElem.style.backgroundColor = "";
                if($ani_4_0.hasClass("active")){
                    $ani_4_0.addClass('fadeOut').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
                        $ani_4_0.removeClass("active animated fadeOut fadeIn");
                    });
                }
            })
            .addTo(controller);//animate 01-



    }

    pageView.eventInit=function(){
        $("body").on("click","#js-sys",function(e){
            e.preventDefault();

            // *代表向所有父级发送，或者可以指定地址
            var idata="closeModal";
            window.parent.postMessage(idata,"*");
        })
    };

    pageView.init=function(){

        pageView.eventInit();

       setTimeout(function(){
           var _bodyHeight=parseInt($("body").height());
           $("#js-pin").css( "height",_bodyHeight+"px");

           $("#preloader").fadeOut(
               function(){
                   pageView.animateInit();
               }
           );
       },500)

    }
    return pageView;
})(jQuery)

$(document).ready(function(){
    pageView.init();
})