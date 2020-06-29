var data = {
    "projects": [
        {
            img: 'images/6882.png',
            title: 'a',
            text: 'a'
        },
        {
            img: 'images/6882.png',
            title: 'b',
            text: 'b'
        },
        {
            img: 'images/6882.png',
            title: 'c',
            text: 'c'
        },
        {
            img: 'images/6882.png',
            title: 'd',
            text: 'd'
        },
        {
            img: 'images/6882.png',
            title: 'e',
            text: 'e'
        }],

}

$('document').ready(function() {
    // Add projects
    for (var i = 0; i < data.projects.length; i++) {
        var proj = data.projects[i];
        var html = getProjectHTML(proj);
        $('table#projects-table').append(html);
    }

    // Change photo on hover
    
    // var serious_img = 'images/me/ben eysenbach_0139.jpg';
    // var goofy_img = 'images/me/mustache.jpg';
        
    // $('img#profile-img').attr('src', serious_img);
    //$('td#profile-img-td').hover(
    //    function() {
    //        $('img#profile-img').attr('src', goofy_img);
    //    },
    //
    //    function() {
    //        $('img#profile-img').attr('src', serious_img);
    //    });

});


function getProjectHTML(proj) {
    var html = '<tr>';
    // Add image
    html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';
    // Add title and description
    html += '<td class="description-td"><h3>' + proj.title + '</h3>'
    if ('authors' in proj) {
        html += '<p><i>' + proj.authors + '</i></p>'
    }
    html += '<p>' + proj.text + '</p></td>';
    html += '</tr>';
    return html;
}
