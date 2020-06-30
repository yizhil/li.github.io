var data = {
    "projects": [
        {
            img: 'images/nn_topo.png',
            title: 'Bankruptcy Predication via Neural Network ',
            text: '[<a href="https://github.com/yizhil/numpyBasedNeuralNetwork">code</a>][<a href="https://archive.ics.uci.edu/ml/datasets/Polish+companies+bankruptcy+data">data</a>][<a href="https://github.com/yizhil/numpyBasedNeuralNetwork/tree/master/results">pics</a>]'
        },
        {
            img: 'images/option.png',
            title: 'Scalable PDE Solver for Options Pricing',
            text: 'We show that <i>hindsight relabeling is inverse RL</i>, an observation that suggests that we can use inverse RL in tandem for RL We show that <i>hindsight relabeling is inverse RL</i>, an observation that suggests that we can use inverse RL in tandem for RL We show that <i>hindsight relabeling is inverse RL</i>, an observation that suggests that we can use inverse RL in tandem for RL We show that <i>hindsight relabeling is inverse RL</i>, an observation that suggests that we can use inverse RL in tandem for RL We show that <i>hindsight relabeling is inverse RL</i>, an observation that suggests that we can use inverse RL in tandem for RL [<a href="https://github.com/yizhil/OptionPricing">code</a>][<a href="https://github.com/yizhil/OptionPricing/tree/master/results">pics</a>]'
        },
        {
            img: 'images/trump.png',
            title: 'Trump Tweets based Trading Strategy',
            text: '[<a href="https://github.com/yizhil/TrumpTweetTradingStrategy">code</a>][<a href="https://github.com/yizhil/TrumpTweetTradingStrategy/tree/master/results">pics</a>]'
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
