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
var furniture_1 = "<div class='large-3 medium-3 "
var furniture_2 = "columns' style='margin-left:20px;' onclick=draw_scene(";
var furniture_25 =  ",'furniture') ><img class='thumbnail' src=";
var furniture_3 = " alt='";
var furniture_4 = "'></div>";
var furniture_elt;
var sliced_furniture = furnitures.slice(gb_max_furniture_slider+1,gb_max_furniture_slider+4);
for (furniture_elt in sliced_furniture)
{
    console.log(furniture_elt);
    console.log(sliced_furniture[furniture_elt].path);
    if (furniture_elt == gb_min_furniture_slider)
    {
    console.log('last one here');
    $(".last-slider-"+gb_min_furniture_slider).after(furniture_1.concat(" last-slider-",String(gb_min_furniture_slider+3)," ",furniture_2,sliced_furniture[furniture_elt].name,"'",furniture_25,sliced_furniture[furniture_elt].path,furniture_3+sliced_furniture[furniture_elt].name,furniture_4));
    }
    else{
    $(".last-slider-"+gb_min_furniture_slider).after(furniture_1.concat(furniture_2,"'",sliced_furniture[furniture_elt].name,"'",furniture_25,sliced_furniture[furniture_elt].path,furniture_3,sliced_furniture[furniture_elt].name,furniture_4));
    }



}

for (furniture_elt in furnitures.slice(gb_min_furniture_slider,gb_max_furniture_slider+1))
{
$("#furniture_slider").children()[parseInt(furniture_elt)+gb_min_furniture_slider+1].style.display='none';
}
//update min and max
gb_max_furniture_slider+=3;
gb_min_furniture_slider+=3;

//remove the class last slider
//$(".last-slider")[0].className=$(".last-slider")[0].className.replace('last-slider','');
}

function get_previous_furnitures()
{
gb_max_furniture_slider
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