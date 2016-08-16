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

function get_next_furnitures()
{
//gb_max_furniture_slider
var furniture_elt;
var sliced_furniture = furnitures.slice(gb_max_furniture_slider+1,gb_max_furniture_slider+4);
var img_elt;
for (furniture_elt in sliced_furniture)
{
    console.log(furniture_elt);
    console.log(sliced_furniture[furniture_elt].path);
    img_elt = $("#furniture_slider").children()[parseInt(furniture_elt)+1].children[0];
    img_elt.src = furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].path;
    img_elt.alt = furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name;
    //$("#furniture_slider").children()[parseInt(furniture_elt)+1].onclick = null;
    $("#furniture_slider").children()[parseInt(furniture_elt)+1].setAttribute('onclick', "draw_scene('".concat(furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name,"','furniture');"));
    //function() {draw_scene(furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name,'furniture')};

}

//update min and max
gb_max_furniture_slider+=3;
gb_min_furniture_slider+=3;

}


function get_next_pegs()
{
//gb_max_peg_slider
var peg_elt;
var sliced_peg = pegs.slice(gb_max_peg_slider+1,gb_max_peg_slider+9);
var img_elt;
for (peg_elt in sliced_peg)
{
    console.log(peg_elt);
    console.log(sliced_peg[peg_elt].path);
    img_elt = $("#peg_slider").children()[parseInt(peg_elt)+1].children[0];
    img_elt.src = pegs[gb_max_peg_slider+parseInt(peg_elt)+1].path;
    img_elt.alt = pegs[gb_max_peg_slider+parseInt(peg_elt)+1].name;
    $("#peg_slider").children()[parseInt(peg_elt)+1].addEventListener('click', function(){ draw_scene(pegs[gb_min_furniture_slider+parseInt(peg_elt)+1].name,'peg');}, false);
    //function() {draw_scene(furnitures[gb_max_furniture_slider+parseInt(furniture_elt)+1].name,'furniture')};

}

//update min and max
gb_max_peg_slider+=8;
gb_min_peg_slider+=8;

}

function get_previous_pegs()
{

//gb_max_furniture_slider
var peg_elt;
var sliced_peg = pegs.slice(gb_min_peg_slider-8,gb_min_peg_slider);
for (peg_elt in sliced_peg)
{
    console.log(peg_elt);
    console.log(sliced_peg[peg_elt].path);
    $("#peg_slider").children()[parseInt(peg_elt)+1].children[0].src=pegs[gb_min_peg_slider-(8-parseInt(peg_elt))].path

}

//update min and max
gb_max_peg_slider-=8;
gb_min_peg_slider-=8;

}



function get_previous_furnitures()
{

//gb_max_furniture_slider
var furniture_elt;
var sliced_furniture = furnitures.slice(gb_min_furniture_slider-3,gb_min_furniture_slider);
for (furniture_elt in sliced_furniture)
{
    console.log(furniture_elt);
    console.log(sliced_furniture[furniture_elt].path);
    $("#furniture_slider").children()[parseInt(furniture_elt)+1].setAttribute('onclick', "draw_scene('".concat(furnitures[gb_min_furniture_slider-(3-parseInt(furniture_elt))].name,"','furniture');"));
    $("#furniture_slider").children()[parseInt(furniture_elt)+1].children[0].src=furnitures[gb_min_furniture_slider-(3-parseInt(furniture_elt))].path

}

//update min and max
gb_max_furniture_slider-=3;
gb_min_furniture_slider-=3;

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
    // draw the furniture
    fill_furniture_canvas(selected_furniture.path);
    // mark the selected furniture
    gb_selected_furniture =selected_furniture.path;
    // draw the pegs
    fill_pegs_canvas(gb_selected_peg);

}

}


function select_furniture_canvas(furniture_name)
{
/*
1 : remove the previous peg
2 : remove the previous furniture
3 : draw the pegs
4 : draw the furniture
*/




}