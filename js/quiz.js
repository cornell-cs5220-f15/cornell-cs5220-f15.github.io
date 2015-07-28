---
---

$(document).ready(function() {

    $(".quiz").each(function(i,obj) {
        var data = $.parseJSON($(this).html());
        var html = "<div style=\"text-align: left; display: inline-block;\">";
        html += "<p>" + data.question + "</p>";
        html += "<ul style=\"list-style: none;\">";

        nchoices = data.choices.length;
        console.log("Walking through " + nchoices + " choices");
        for (var i = 0; i < nchoices; ++i) {
            var item = data.choices[i];
            console.log("Item " + i + ": " + item);
            html += "<li>";
            html += "<input type=\"radio\"";
            html += " name=\"" + data.tag + "\"";
            html += " id=\"" + data.tag + "_" + i + "\"";
            html += " value=\"" + item.response + "\">";
            html += "<label for=\"" + data.tag + "_" + i + "\">";
            html += item.answer;
            html += "</label>";
            html += "</li>";
        }
        html += "</ul></div><br/>";
        html += "<p style=\"text-align: left; display: inline-block;\" id=\"" + data.tag + "Result\"></p>";
        console.log(html)
        $(this).replaceWith(html);
    });
    
    $("input:radio").click(function() {
        $('#' + this.name + 'Result').text(this.value);
    });
});
