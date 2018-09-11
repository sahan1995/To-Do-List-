
var first = 0;
var ex = 0;
var tr = 0;
function TodoList(title, listarg) {
    this._title = title;
    this._array = new Array().push(listarg)
    var length = listarg.length
    //console.log("func" + length)
    var flist = new Array();
    flist = []
    for (var x = 0; x < length; x++) {
        //console.log(listarg[x])
        flist.push(listarg[x])
    }
    // console.log("slist"+flist)

    this.getTitle = function () {
        return this._title;
    }
    this.getList = function () {
        return flist;
    }

}

$(document).ready(function cll() {

    $(".txtIn" + first).keyup(function (e) {
        if (e.keyCode == 13) {
            first++;
            var title = $(".title").val()

            var newTodolist = "<div id = tod" + first + ' class= "div' + tr + '"><h5 class = tdtitle>' + title + "</h5></div>"
            console.log("TR" + tr)
            $("#row").append(newTodolist)
            var mlist = new Array();
            var todolist = new Array();

            var getList = new Array();;
            mlist = []
            for (var x = 0; x < 1; x++) {

                mlist.push($(".txtIn0").val());
            }

            // mlist.push("sdjh")

            //   console.log("list" + mlist.length)


            todolist.push(new TodoList(title, mlist));




            todolist.forEach(mylist => {

                //console.log(mylist._getTitle())
                // console.log(mylist.getList())
                var listlen = mylist.getList().length;

                // console.log("this" + listlen)
                getList = []
                for (var a = 0; a < listlen; a++) {
                    getList.push(mylist.getList()[a])
                }

            });

            var len = getList.length;
            //console.log("lenght" + len)
            console.log("TR" + tr)
            for (var e = 0; e < len; e++) {
                console.log("ss" + tr)
                // var listss = '<div><label><input type="checkbox">' + getList[e] + '</label></div>'
                var listss = "<div id = d" + tr + " ><input type=checkbox id=ch class=check" + tr + "  value=" + getList[e] + " ><b><p class = para" + tr + ">" + getList[e] + "</b></p><br><button id = clsbtn" + tr + ">Close</button></div><br>"

                $("#tod" + first).append(listss)

                $(".div" + tr).css("display", "inline")
                $(".div" + tr).css("position", "relative")

                $(".check" + tr).css("display", "inline")
                $(".check" + tr).css("position", "relative")
                $(".check" + tr).css("left", "10px")
                $(".check" + tr).css("width", "15px")
                $(".check" + tr).css("height", "15px")

                $(".para" + tr).css("display", "inline")
                $(".para" + tr).css("position", "relative")
                $(".para" + tr).css("right", "-30px")
                $(".para" + tr).css("padding-top", "-500px")

                $("#clsbtn" + tr).css("position", "relative")
                $("#clsbtn" + tr).css("right", "-200px")
                $("#clsbtn" + tr).attr("class", "btn btn-danger")
                tr++;
            }


            //<p class = para"+tr+">"+getList[e]+"</p>
            $("#tod" + first).css("background-color", "white")
            $("#tod" + first).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)")
            $("#tod" + first).attr("class", $("#tod" + first).attr("class") + " col col-md-3 col-sm-12")

            $("#tod" + first).css("margin-left", "10px")
            $("#tod" + first).css("margin-top", "10px")
            $("#tod" + first).css("padding-bottom", "10px")
            $(".tdtitle").css("margin-left", "20px")
            $(".tdtitle").css("margin-top", "20px")
            $(".tdtitle").css("padding-bottom", "5px")
            $('input[type="checkbox"]').change(function (eventData) {
                // console.log($(this));
                //console.log(this.checked);
                var classname = eventData.target.className;
                var num = classname.split("check");
                if (this.checked) {
                    $(".para" + num[1]).css("text-decoration", "line-through")

                } else {
                    $(".para" + num[1]).css("text-decoration", "none")

                }




            })
            $("button").click(function (eventData) {
                var btnid = eventData.toElement.id
                var divclass = btnid.split("clsbtn")
                console.log(divclass[1])
                $(".div" + divclass[1]).remove()

            })
            // getList.length=0;
            // mlist.length=0;
            // todolist.length=0;

        }

    })
});
var no = 0
var trs = 1;
var clssno = tr;
$("i").mouseenter(function () {

    $("i").css("cursor", "pointer")

    $("i").off();
    $("i").click(function () {
        console.log("trs" + tr)
        //trs++
        var newitem = "<div id = di" + trs + "><i></i><input type=text class = txtIn" + trs + "> <span id=close" + trs + "></span></div>"

        //console.log(trs)

        $("#divlist").append(newitem);
        $("i").css("display", "inline-block");
        $("i").attr("class", "fas fa-plus");
        $("i").attr("class", "fas fa-plus");
        $("#close" + trs).attr("class", "glyphicon glyphicon-remove")
        $(".txtIn" + trs).attr("placeholder", "List Item");
        $(".txtIn" + trs).css("display", "inline-block");

        $("span").off()
        $("span").mouseenter(function (eventData) {
            $("span").css("cursor", "pointer")

        })

        $("span").click(function (eventData) {
            var spid = (eventData.toElement.id).split("close")
            var num = spid[1];
            console.log(num)
            console.log(tr)
            $("#di" + num).fadeOut("slow", function () {

                console.log("click")
                $("#di" + num).remove();
                trs--;
            })
        })


        $(".txtIn"+trs).off()
        $(".txtIn" + trs).keyup(function (e) {

            if (e.keyCode == 13) {
                no = no + first + 1;
                console.log("first" + first)
                console.log("no" + no)
                no++;
                var title = $(".title").val()
                //  console.log("no"+no)
            //var newTodolist = "<div id = tod" + first + ' class= "div' + tr + '"><h5 class = tdtitle>' + title + "</h5></div>"

                var newTodolist = "<div id = tod" + no +  ' class= div' + tr + '><button id = clsbtn' + tr +'>Close</button> <h5 class = tdtitle>' + title + "</h5></div>"

                $("#row").append(newTodolist)
                var mlist = new Array();
                var todolist = new Array();

                var getList = new Array();;
                mlist = []
                //console.log("noss"+no)
                for (var x = 0; x <= trs - 1; x++) {
                    console.log(x)
                    mlist.push($(".txtIn" + x).val());
                }

                $("button").click(function (eventData) {
                    var btnid = eventData.toElement.id
                    var divclass = btnid.split("clsbtn")
                    console.log(divclass[1])
                    $("#div" + divclass[1]).remove()

                })

                //   console.log("list" + mlist.length)


                todolist.push(new TodoList(title, mlist));




                todolist.forEach(mylist => {

                    //console.log(mylist._getTitle())
                    // console.log(mylist.getList())
                    var listlen = mylist.getList().length;

                    //console.log("this" + listlen)
                    getList = []
                    for (var a = 0; a < listlen; a++) {
                        getList.push(mylist.getList()[a])
                    }

                });

                var len = getList.length;
                // console.log("lenght" + len)
                console.log("apped" + no)
                for (var e = 0; e < len; e++) {
                    //console.log("ss"+tr)
                    var listss = "<input type=checkbox class=check" + tr + "  value=" + getList[e] + " ><b><p class = para" + tr + ">" + getList[e] + "</b></p><br>"

                    $("#tod" + no).append(listss)

                    $(".div" + tr).css("display", "inline")
                    $(".div" + tr).css("position", "relative")

                    $(".check" + tr).css("display", "inline")
                    $(".check" + tr).css("position", "relative")
                    $(".check" + tr).css("left", "10px")
                    $(".check" + tr).css("width", "15px")
                    $(".check" + tr).css("height", "15px")

                    $(".para" + tr).css("display", "inline")
                    $(".para" + tr).css("position", "relative")
                    $(".para" + tr).css("right", "-30px")
                    $(".para" + tr).css("padding-top", "-500px")


                    $("#clsbtn" + tr).css("position", "relative")
                    $("#clsbtn" + tr).css("right", "-180px")
                    $("#clsbtn" + tr).css("bottom", "-80px")

                    $("#clsbtn" + tr).attr("class", "btn btn-danger")
                    tr++;
                }


                //<p class = para"+tr+">"+getList[e]+"</p>
                $("#tod" + no).css("background-color", "white")
                $("#tod" + no).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)")
               // $("#tod" + no).attr("class", "col col-md-3 col-sm-12")
                $("#tod" + no).attr("class", $("#tod" + no).attr("class") + " col col-md-3 col-sm-12")
                $("#tod" + no).css("margin-left", "10px")
                $("#tod" + no).css("margin-top", "10px")
                $("#tod" + no).css("padding-bottom", "10px")
                $(".tdtitle").css("margin-left", "20px")
                $(".tdtitle").css("margin-top", "20px")
                $(".tdtitle").css("padding-bottom", "5px")

                $('input[type="checkbox"]').change(function (eventData) {

                    var classname = eventData.target.className;
                    var num = classname.split("check");
                    if (this.checked) {
                        $(".para" + num[1]).css("text-decoration", "line-through")

                    } else {
                        $(".para" + num[1]).css("text-decoration", "none")

                    }
                })

                $("button").click(function (eventData) {
                    var btnid = eventData.toElement.id
                    var divclass = btnid.split("clsbtn")
                    console.log(divclass[1])
                    $(".div" + divclass[1]).remove()
                    $("#clsbtn"+divclass[1]).remove()

                })

                getList.length = 0;
                mlist.length = 0;
                todolist.length = 0;
                console.log("trs" + tr)
            }

        })


        trs++
        $("i").mouseenter(cursor)
        $("i").click(addList)
    })
})

function cursor() {
    $("i").css("cursor", "pointer")

}
function addList() {


    $("i").off();
    console.log(trs)
    var newitem = "<div id = di" + trs + "><i></i><input type=text class = txtIn" + trs + "> <span id=close" + trs + "></span></i></div>"
    $("#divlist").append(newitem);
    $("i").css("display", "inline-block");
    $("i").attr("class", "fas fa-plus");
    $("i").attr("class", "fas fa-plus");
    $("#close" + trs).attr("class", "glyphicon glyphicon-remove")
    $("i").mouseenter(cursor)
    $("i").click(addList)
    $("span").mouseenter(function (eventData) {
        $("span").css("cursor", "pointer")

    })

    $("span").click(function (eventData) {
        var spid = (eventData.toElement.id).split("close")
        var num = spid[1];
        console.log(num)
        console.log(tr)
        $("#di" + num).fadeOut("slow", function () {

            console.log("click")
            $("#di" + num).remove();
            trs--;
        })
    })

    $(".txtIn" + trs).attr("placeholder", "List Item");
    $(".txtIn" + trs).css("display", "inline-block");
    $(".txtIn" + trs).keyup(function (e) {
        if (e.keyCode == 13) {
            no = no + first + 1;
            console.log("first" + first)
            console.log("no" + no)
            no++;
            var title = $(".title").val()
            //  console.log("no"+no)
            var newTodolist = "<div id = tod" + no + " class= div" + tr + "><button id = clsbtn" + tr +">Close</button> <h5 class = tdtitle>" + title + "</h5></div>"

            $("#row").append(newTodolist)
            var mlist = new Array();
            var todolist = new Array();

            var getList = new Array();;
            mlist = []
            //console.log("noss"+no)
            for (var x = 0; x <= trs - 1; x++) {
                console.log(x)
                mlist.push($(".txtIn" + x).val());
            }



            //   console.log("list" + mlist.length)


            todolist.push(new TodoList(title, mlist));




            todolist.forEach(mylist => {

                //console.log(mylist._getTitle())
                // console.log(mylist.getList())
                var listlen = mylist.getList().length;

                //console.log("this" + listlen)
                getList = []
                for (var a = 0; a < listlen; a++) {
                    getList.push(mylist.getList()[a])
                }

            });

            var len = getList.length;
            // console.log("lenght" + len)
            console.log("apped" + no)
            for (var e = 0; e < len; e++) {
                //console.log("ss"+tr)
                var listss = "<input type=checkbox class=check" + tr + "  value=" + getList[e] + " ><b><p class = para" + tr + ">" + getList[e] + "</b></p><br>"

                $("#tod" + no).append(listss)

                $(".div" + tr).css("display", "inline")
                $(".div" + tr).css("position", "relative")

                $(".check" + tr).css("display", "inline")
                $(".check" + tr).css("position", "relative")
                $(".check" + tr).css("left", "-10px")
                $(".check" + tr).css("width", "15px")
                $(".check" + tr).css("height", "15px")

                $(".para" + tr).css("display", "inline")
                $(".para" + tr).css("position", "relative")
                $(".para" + tr).css("right", "-30px")
                $(".para" + tr).css("padding-top", "-500px")

                $("#clsbtn" + tr).css("position", "relative")
                $("#clsbtn" + tr).css("right", "-180px")
                $("#clsbtn" + tr).css("bottom", "-120px")
                $("#clsbtn" + tr).attr("class", "btn btn-danger")
               
                tr++;
            }


            //<p class = para"+tr+">"+getList[e]+"</p>
            $("#tod" + no).css("background-color", "white")
            $("#tod" + no).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)")
            //$("#tod" + no).attr("class", "col col-md-3 col-sm-12")

            $("#tod" + no).attr("class", $("#tod" + no).attr("class") + " col col-md-3 col-sm-12")
            $("#tod" + no).css("margin-left", "10px")
            $("#tod" + no).css("margin-top", "10px")
            $("#tod" + no).css("padding-bottom", "10px")
            $(".tdtitle").css("margin-left", "20px")
            $(".tdtitle").css("margin-top", "20px")
            $(".tdtitle").css("padding-bottom", "5px")

           

           
            $('input[type="checkbox"]').change(function (eventData) {

                var classname = eventData.target.className;
                var num = classname.split("check");
                if (this.checked) {
                    $(".para" + num[1]).css("text-decoration", "line-through")

                } else {
                    $(".para" + num[1]).css("text-decoration", "none")

                }
            })
            $("button").click(function (eventData) {
                var btnid = eventData.toElement.id
                var divclass = btnid.split("clsbtn")
                console.log(divclass[1])
                $(".div" + divclass[1]).remove()
                $("#clsbtn"+divclass[1]).remove()

            })
            getList.length = 0;
            mlist.length = 0;
            todolist.length = 0;
            console.log("trs" + tr)
        }

    })
    trs++;

}