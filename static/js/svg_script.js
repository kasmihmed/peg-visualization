function change_furniture_svg(img_src)
{
$("#mysvg").children()[0].setAttributeNS(null,"href",img_src);
}

function change_peg_svg(img_src)
{
$("#mysvg").children()[1].setAttributeNS(null,"href",img_src);
$("#mysvg").children()[2].setAttributeNS(null,"href",img_src);
}
