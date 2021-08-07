//submit
$("#submit").click(function () {
var sub="Dear, ";
sub+=document.getElementById("name").value;
sub+=", your email: ";
sub+=document.getElementById("address").value;
sub+="; Your message has been sent! Thanks!";
console.log(sub);
    alert(sub);
    document.getElementById("name").value="";
    document.getElementById("address").value="";
    document.getElementById("message").value="";
    });

    jQuery(document).ready(function() {
        jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1300);
        return false;
        });
        });