var furniture_pos_x = 100;
var furniture_pos_y = 100;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var pegs_maxwidth = 60; //in pixels
var pegs_maxheight = 60; //in pixels
var furniture_maxwidth = 810; //in pixels
var furniture_maxheight = 810; //in pixels
var furniture_in_canvas = [0,0,0,0]; // [start_w,start_h,dimension_w,dimension_h]
var right_peg_in_canvas = [0,0,0,0]; // [start_w,start_h,dimension_w,dimension_h]
var lef_peg_in_canvas = [0,0,0,0];// [start_w,start_h,dimension_w,dimension_h]
//ctx.imageSmoothingQuality='high';
/*
ctx.mozImageSmoothingEnabled = true;
ctx.webkitImageSmoothingEnabled = true;
ctx.msImageSmoothingEnabled = true;
ctx.imageSmoothingEnabled = true;
*/
function scale_photo(type, img) { //type can be furniture or pegs
    natural_height = img.naturalHeight;
    natural_width = img.naturalWidth;
    if (type == 'furniture') {
        //get the max of width and height
        if (natural_height > natural_width) {
            return [(natural_width / natural_height) * furniture_maxheight, furniture_maxheight];
        } else {
            return [furniture_maxwidth, (natural_height * furniture_maxwidth) / natural_width];
        }
    } else if (type == 'pegs') {
        if (natural_height > natural_width) {
            return [(natural_width / natural_height) * pegs_maxheight, pegs_maxheight];
        } else {
            return [pegs_maxwidth, (natural_height * pegs_maxwidth) / natural_width];
        }
    }


}

function fill_furniture_canvas(furniture_big_img_src) {
    furniture_big_img = new Image();
    furniture_big_img.src = furniture_big_img_src;

    furniture_big_img.onload = function() {

        scaled_furniture_dimensions = scale_photo('furniture', this);
        console.log(scaled_furniture_dimensions);
        ctx.drawImage(furniture_big_img, 0, 0, scaled_furniture_dimensions[0], scaled_furniture_dimensions[1]);
        furniture_in_canvas = [ 0, 0, scaled_furniture_dimensions[0], scaled_furniture_dimensions[1]];
    };
    //ctx.drawImage(furniture_big_img, 0,20,370, 170);};
    //console.log(furniture_big_img.src);

    return ctx;
}


function calculate_peg_positions() {
    return "asdasd", "asdasd";
}

function fill_pegs_canvas(peg_big_img_src) {
    /*
    check the width of the furniture image to check where to put the pegs using
    naturalHeight naturalWidth width and height clientWidth clientHeight
    */
    right_peg_pos = [165, 308];
    left_peg_pos = [594, 308]; //calculate_peg_positions();
    right_peg_big_img = new Image();
    left_peg_big_img = new Image();

    left_peg_big_img.src = peg_big_img_src;
    right_peg_big_img.src = peg_big_img_src;
    left_peg_big_img.onload = function() {
    var startTime = new Date().getTime();
        scaled_peg_dimensions = scale_photo('pegs', this);
        console.log(scaled_peg_dimensions);
        ctx.drawImage(left_peg_big_img, left_peg_pos[0], left_peg_pos[1], scaled_peg_dimensions[0], scaled_peg_dimensions[1]);
        left_peg_in_canvas = [left_peg_pos[0], left_peg_pos[1], scaled_peg_dimensions[0], scaled_peg_dimensions[1]];
        var finishTime = new Date().getTime();
        event_times.push(finishTime - startTime);
        console.log('inside func time to show: '+String(finishTime - startTime))

    };

    right_peg_big_img.onload = function() {
        scaled_peg_dimensions = scale_photo('pegs', this);
        console.log(scaled_peg_dimensions);
        ctx.drawImage(right_peg_big_img, right_peg_pos[0], right_peg_pos[1], scaled_peg_dimensions[0], scaled_peg_dimensions[1]);
        right_peg_in_canvas=[ right_peg_pos[0], right_peg_pos[1], scaled_peg_dimensions[0], scaled_peg_dimensions[1]];
    };



}

function remove_element(start,dimension)
{
ctx.clearRect(start[0],start[1],start[0]+dimension[0] ,start[1]+dimension[1]);
}
