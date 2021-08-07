jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1300);
    return false;
    });
});

$("#submit").click(function () {
var sub="Dear, Your message has been sent! Thanks!";
console.log(sub);
    alert(sub);
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("message").value="";
    });
