var myPageAll = 1;


var fName = "";
var lName = "";
var Email = "";
var cantry = "";
var age = 0;
var gender = "";
var Q1 = "";
var Q2 = "";


$(document).ready(function () {
    $("#page2").hide();
    $("#page3").hide();

    $("#buttonHead").click(function () {
        $('html, body').animate({
            scrollTop: $("#myFrom").offset().top
        }, 500);
    });

    $(".btnNext").click(function () {
        fName = $("#fname").val();
        lName = $("#lname").val();
        Email = $("#Email").val();
        cantry = $("#contry option:selected").text();
        age = $("#year").val();
        gender = $(".jender input[type='radio']:checked").val();
        var myerorr = false;
        var objecterorr = "";



        if (fName != "") {
            if (lName != "") {
                if (Email != "") {
                    if (cantry != "היבשת שלך") {
                        if (gender == "זכר" || gender == "זכר") {
                            if (age > 1) {
                                if ($('input[id="AC"]:checked').val() == "true") {
                                    page2();



                                } else {
                                    myerorr = true;
                                    objecterorr = ".AC";
                                }
                            } else {
                                myerorr = true;
                                objecterorr = "#year";
                            }
                        } else {
                            myerorr = true;
                            objecterorr = ".jender";
                        }
                    } else {
                        myerorr = true;
                        objecterorr = "#contry";
                    }
                } else {
                    myerorr = true;
                    objecterorr = "#Email";
                }
            } else {
                myerorr = true;
                objecterorr = "#lname";
            }
        } else {
            myerorr = true;
            objecterorr = "#fname";

        }

        $("#fname").tooltip("hide");
        $("#fname").mouseout(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").focusout(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").hover(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").click(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").mousedown(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").mouseup(function () {
            $("#fname").tooltip("hide");
        });


        $("#lname").tooltip("hide");
        $("#lname").mouseout(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").focusout(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").hover(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").click(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").mousedown(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").mouseup(function () {
            $("#lname").tooltip("hide");
        });

        $("#Email").tooltip("hide");
        $("#Email").mouseout(function () {
            $("#Email").tooltip("hide");
        });
        $("#Email").focusout(function () {
            $("#Email").tooltip("hide");
        });
        $("#lname").hover(function () {
            $("#lname").tooltip("hide");
        });
        $("#Email").click(function () {
            $("#Email").tooltip("hide");
        });
        $("#Email").mousedown(function () {
            $("#lname").tooltip("hide");
        });
        $("#Email").mouseup(function () {
            $("#lname").tooltip("hide");
        });

        $("#contry").tooltip("hide");
        $("#contry").mouseout(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").focusout(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").hover(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").click(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").mousedown(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").mouseup(function () {
            $("#contry").tooltip("hide");
        });


        $(".jender").tooltip("hide");
        $(".jender").mouseout(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").focusout(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").hover(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").click(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").mousedown(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").mouseup(function () {
            $(".jender").tooltip("hide");
        });

        $("#year").tooltip("hide");
        $("#year").mouseout(function () {
            $("#year").tooltip("hide");
        });
        $("#year").focusout(function () {
            $("#year").tooltip("hide");
        });
        $("#year").hover(function () {
            $("#year").tooltip("hide");
        });
        $("#year").click(function () {
            $("#year").tooltip("hide");
        });
        $("#year").mousedown(function () {
            $("#year").tooltip("hide");
        });
        $("#year").mouseup(function () {
            $("#year").tooltip("hide");
        });

        $(".AC").tooltip("hide");
        $(".AC").mouseout(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").focusout(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").hover(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").click(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").mousedown(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").mouseup(function () {
            $(".AC").tooltip("hide");
        });


        if (myerorr == true) {


            $(objecterorr).tooltip("show");
            $(objecterorr).mouseout(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).focusout(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).hover(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).click(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).mousedown(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).mouseup(function () {
                $(objecterorr).tooltip("show");
            });
        }




    });

});



function page2() {
    if (myPageAll == 1) {
        $("#page1").fadeOut(500);
        var time = setInterval(function () {
            $("#page2").fadeIn(500);
            clearInterval(time)
        }, 500);
        myPageAll++;
    }

    Q1 = $("#radioinPage2 input[type='radio']:checked").val();
    $(".btnNext").click(function () {
        if (Q1 != null) {
            page3();
        } else {
            //להוסיף
        }
    });

}

function page3() {
    if (myPageAll == 2) {
        $("#page2").fadeOut(500);
        var time = setInterval(function () {
            $("#page3").fadeIn(500);
            clearInterval(time)
        }, 500);
        myPageAll++;
    }
    if ($('input[id="page3Check1"]:checked').val() == "חיפוש בגוגל" || $('input[id="page3Check2"]:checked').val() == "המלצה של חברים" || $('input[id="page3Check3"]:checked').val() == "פרסום מודפס" || $('input[id="page3Check4"]:checked').val() == "בעיתון" || $('input[id="page3Check5"]:checked').val() == "אחר") {

        page4();
    } else {
        //לחזור
    }

}

function page4() {

}