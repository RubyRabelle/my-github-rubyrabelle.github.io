var tax_rate = 8.25;
var housework = 10*(1+tax_rate/100);
var lawn = 35 * (1+tax_rate/100);
var moving = 25 * (1+tax_rate/100);
var errands = 12 * (1+tax_rate/100);
var selling = 20;


document.write("<ul>");
document.write("<li>Basic Housework - $" + housework.toFixed(2) + "/hour</li>");
document.write("<li>Lawn and Weeding Service - $" + lawn.toFixed(2) + "/yard</li>");
document.write("<li>Furniture Moving - $" + moving.toFixed(2) + "/hour</li>");
document.write("<li>Running local errands - $" + errands.toFixed(2) +"/hour </li>");                       
document.write("<li>Selling your stuff for you - " + selling + "% of goods sold<br> + tax**</li>");
document.write("</ul>");

                        