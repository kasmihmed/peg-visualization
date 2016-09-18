/*
function get_next_pegs()
{}

function get_next_pegs()
{
}

function change_peg_tracker()
{}

function change_furniture_tracker()
{}

*/


var range = (l,r) => new Array(r - l).fill().map((_,k) => k + l);

function get_next_furnitures(type)
{
//gb_max_furniture_slider
var furniture_elt;
if (gb_max_furniture_slider+4>furnitures.length)
{
var sliced_furniture = furnitures.slice(gb_max_furniture_slider+1,furnitures.length);
}
else
{
var sliced_furniture = furnitures.slice(gb_max_furniture_slider+1,gb_max_furniture_slider+4);
}

var img_elt;
for (furniture_elt in sliced_furniture)
{
    console.log(furniture_elt);
    console.log(sliced_furniture[furniture_elt].path);
    img_elt = $("#furniture_slider").children()[parseInt(furniture_elt)+1].children[0];
    img_elt.src = furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].path;
    img_elt.alt = furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name;
    //$("#furniture_slider").children()[parseInt(furniture_elt)+1].onclick = null;
    if(type=='canvas')
    {
        $("#furniture_slider").children()[parseInt(furniture_elt)+1].setAttribute('onclick', "draw_scene('".concat(furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name,"','furniture');"));
    }
    else if (type=='svg')
    {
        $("#furniture_slider").children()[parseInt(furniture_elt)+1].setAttribute('onclick',"select_furniture_svg('".concat(furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name,"');"));
    }
    else if (type=='z_buffer')
    {
    $("#furniture_slider").children()[parseInt(furniture_elt)+1].setAttribute('onclick',"get_z_buffer_img('".concat(furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name,"','furniture');"));
    }
    //function() {draw_scene(furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name,'furniture')};

}

if (gb_max_furniture_slider+4>furnitures.length)
{
    for (furniture_elt in range(0,gb_max_furniture_slider+4-furnitures.length))
    {
    img_elt = $("#furniture_slider").children()[(furnitures.length%3)+parseInt(furniture_elt)+1].children[0];
     img_elt.src = "";
     img_elt.alt = "";
     $("#furniture_slider").children()[4].children[0].children[0].src= "";
    }
}


//update min and max
gb_max_furniture_slider+=3;
gb_min_furniture_slider+=3;

var previous_elt=$("#furniture_slider").children()[0].children[0].children[0].src;
if (previous_elt != "/static/img/slider_images/arrow_L.svg")
{
$("#furniture_slider").children()[0].children[0].children[0].src= "/static/img/slider_images/arrow_L.svg";
}

}


function get_next_pegs(type)
{
//gb_max_peg_slider
var peg_elt;
if (gb_max_peg_slider+9>pegs.length)
{
    var sliced_peg = pegs.slice(gb_max_peg_slider+1,pegs.length);

}
else
{
var sliced_peg = pegs.slice(gb_max_peg_slider+1,gb_max_peg_slider+9);
}
var img_elt;
for (peg_elt in sliced_peg)
{
    console.log(peg_elt);
    console.log(sliced_peg[peg_elt].path);
    img_elt = $("#peg_slider").children()[parseInt(peg_elt)+1].children[0];
    img_elt.src = pegs[gb_max_peg_slider+parseInt(peg_elt)+1].path;
    img_elt.alt = pegs[gb_max_peg_slider+parseInt(peg_elt)+1].name;
    if (type == 'canvas')
    {
        $("#peg_slider").children()[parseInt(peg_elt)+1].setAttribute('onclick', "draw_scene('".concat(pegs[gb_max_peg_slider+parseInt(peg_elt)+1].name,"','peg');"));
    }
    else if (type == 'svg')
    {
        $("#peg_slider").children()[parseInt(peg_elt)+1].setAttribute('onclick', "select_peg_svg('".concat(pegs[gb_max_peg_slider+parseInt(peg_elt)+1].name,"');"));
    }
    else if (type=='z_buffer')
    {
        $("#peg_slider").children()[parseInt(peg_elt)+1].setAttribute('onclick', "get_z_buffer_img('".concat(pegs[gb_max_peg_slider+parseInt(peg_elt)+1].name,"','peg');"));
    }
    //$("#peg_slider").children()[parseInt(peg_elt)+1].addEventListener('click', function(){ draw_scene(pegs[gb_min_furniture_slider+parseInt(peg_elt)+1].name,'peg');}, false);
    //function() {draw_scene(furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name,'furniture')};

}

if (gb_max_peg_slider+9>pegs.length)
{
    for (peg_elt in range(0,gb_max_peg_slider+9-pegs.length))
    {
    img_elt = $("#peg_slider").children()[(pegs.length%8)+parseInt(peg_elt)+1].children[0];
     img_elt.src = "";
     img_elt.alt = "";
     $("#peg_slider").children()[9].children[0].children[0].src= "";
    }
}



//update min and max
gb_max_peg_slider+=8;
gb_min_peg_slider+=8;



var previous_elt=$("#peg_slider").children()[0].children[0].children[0].src;
if (previous_elt != "/static/img/slider_images/arrow_L.svg")
{
$("#peg_slider").children()[0].children[0].children[0].src= "/static/img/slider_images/arrow_L.svg";
}

}

function get_previous_pegs(type)
{

//gb_max_furniture_slider
var peg_elt;
var sliced_peg = pegs.slice(gb_min_peg_slider-8,gb_min_peg_slider);
for (peg_elt in sliced_peg)
{
    console.log(peg_elt);
    console.log(sliced_peg[peg_elt].path);
    $("#peg_slider").children()[parseInt(peg_elt)+1].children[0].src=pegs[gb_min_peg_slider-(8-parseInt(peg_elt))].path
    if (type == 'canvas')
    {
        $("#peg_slider").children()[parseInt(peg_elt)+1].setAttribute('onclick', "draw_scene('".concat(pegs[gb_min_peg_slider+parseInt(peg_elt)-8].name,"','peg');"));
    }
    else if (type == 'svg')
    {
        $("#peg_slider").children()[parseInt(peg_elt)+1].setAttribute('onclick', "select_peg_svg('".concat(pegs[gb_min_peg_slider+parseInt(peg_elt)-8].name,"');"));
    }
    else if (type=='z_buffer')
    {
    $("#peg_slider").children()[parseInt(peg_elt)+1].setAttribute('onclick', "get_z_buffer_img('".concat(pegs[gb_min_peg_slider+parseInt(peg_elt)-8].name,"','peg');"));
    }


}

//update min and max
gb_max_peg_slider-=8;
gb_min_peg_slider-=8;


if (gb_min_peg_slider==0)
{
$("#peg_slider").children()[0].children[0].children[0].src= "";
}

if ($("#peg_slider").children()[9].children[0].children[0].src != "/static/img/slider_images/arrow_R.svg")
{
$("#peg_slider").children()[9].children[0].children[0].src= "/static/img/slider_images/arrow_R.svg";
}

}



function get_previous_furnitures(type)
{

//gb_max_furniture_slider
var furniture_elt;
var sliced_furniture = furnitures.slice(gb_min_furniture_slider-3,gb_min_furniture_slider);
for (furniture_elt in sliced_furniture)
{
    console.log(furniture_elt);
    console.log(sliced_furniture[furniture_elt].path);
    if (type == 'canvas')
    {
        $("#furniture_slider").children()[parseInt(furniture_elt)+1].setAttribute('onclick', "draw_scene('".concat(furnitures[gb_min_furniture_slider-(3-parseInt(furniture_elt))].name,"','furniture');"));
    }
    else if (type == 'svg')
    {
        $("#furniture_slider").children()[parseInt(furniture_elt)+1].setAttribute('onclick', "select_furniture_svg('".concat(furnitures[gb_min_furniture_slider-(3-parseInt(furniture_elt))].name,"');"));
    }
    else if (type=='z_buffer')
    {
    $("#furniture_slider").children()[parseInt(furniture_elt)+1].setAttribute('onclick', "get_z_buffer_img('".concat(furnitures[gb_min_furniture_slider-(3-parseInt(furniture_elt))].name,"','furniture');"));
    }

    $("#furniture_slider").children()[parseInt(furniture_elt)+1].children[0].src=furnitures[gb_min_furniture_slider-(3-parseInt(furniture_elt))].path



}

//update min and max
gb_max_furniture_slider-=3;
gb_min_furniture_slider-=3;


if (gb_min_furniture_slider==0)
{
$("#furniture_slider").children()[0].children[0].children[0].src= "";
}

if ($("#furniture_slider").children()[4].children[0].children[0].src!= "/static/img/slider_images/arrow_R.svg")
{
$("#furniture_slider").children()[4].children[0].children[0].src= "/static/img/slider_images/arrow_R.svg";
}

}


function select_furniture_svg(furniture_name)
{
selected_furniture = furnitures.filter(function (v){ return v.name == furniture_name ;})[0];
console.log('selected :'+selected_furniture.name);
change_furniture_svg(selected_furniture.path)

}

function select_peg_svg(peg_name)
{
selected_peg = pegs.filter(function (v){ return v.name == peg_name ;})[0];
console.log('selected :'+selected_peg.name);
change_peg_svg(selected_peg.path)
}



function draw_scene(object_name,type)
{

/*
1 : remove the previous peg
2 : remove the previous furniture
3 : draw the pegs
4 : draw the furniture
*/
var startTime = new Date().getTime();

// remove previous peg
remove_element([165,308],[52,60]);
remove_element([594,308],[52,60]);

// remove the furniture since we have to respect the order of drawing
remove_element([0,0],[710,312]);

if (type=='peg')
{
    // draw the pegs
    selected_peg = pegs.filter(function (v){ return v.name == object_name ;})[0];
    console.log('selected :'+selected_peg.name);
    fill_pegs_canvas(selected_peg.path)

    // draw the furniture
    fill_furniture_canvas(gb_selected_furniture);
    // mark the selected peg
    gb_selected_peg = selected_peg.path;
}

else if (type=='furniture')
{
    selected_furniture = furnitures.filter(function (v){ return v.name == object_name ;})[0];
    console.log('selected :'+selected_furniture.name);
    // draw the pegs
    fill_pegs_canvas(gb_selected_peg);
    // draw the furniture
    fill_furniture_canvas(selected_furniture.path);
    // mark the selected furniture
    gb_selected_furniture =selected_furniture.path;


}
var finishTime = new Date().getTime();
event_times.push(finishTime - startTime);

console.log('time to show: '+String(finishTime - startTime))
}


function get_z_buffer_img(object_name,type)
{

if (type=='peg')
{
    selected_peg = pegs.filter(function (v){ return v.name == object_name ;})[0];
    gb_selected_peg = selected_peg.name;
    if (gb_selected_furniture=='')
    {
    gb_selected_furniture=furnitures[0].name
    }
}

if (type=='furniture')
{
    selected_furniture = furnitures.filter(function (v){ return v.name == object_name ;})[0];
    gb_selected_furniture = selected_furniture.name;
    if (gb_selected_peg=='')
    {
    gb_selected_peg=pegs[0].name
    }
}


$("#z_buffer_img").children()[0].children[0].src = "/z_buffer/algo/furniture/"+gb_selected_furniture+"/peg/"+gb_selected_peg+"/";


}
