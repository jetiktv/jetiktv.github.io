document.write("<header>");
document.write("<div id=\"menu\">");
document.write("<ul>");
document.write("<li class='active'><a href='index.html'><span>Home<\/span><\/a><\/li>");
document.write("<li><a href='blogs.html'><span>Articles<\/span><\/a><\/li>");
document.write("<li><a href='About.html'><span>About the site<\/span><\/a><\/li>");
document.write("<\/ul>");
document.write("<\/div>");
document.write("</header>");


$(function () {
    $('#menu li').each(function () {
        var href = $(this).find('a').attr('href');
        if (href === window.location.pathname.split('/').slice(-1)[0]) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});