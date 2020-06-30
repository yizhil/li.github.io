var data = {
    "projects": [
        {
            img: 'images/nn_topo.png',
			
            title: 'Bankruptcy Predication via Neural Network',
            text: 'We implement a neural network from scratch. The classifier is dependent soly on NumPy and has epoch, learning rate, and neuron structure as hyperparameters. We extend its functionality by incorporating 2 learning techniques, momentum gradient descent and neural pruning, and 2 activation functions, ReLu and tanh. We work with Polish Companies Bankruptcy dataset, test and compare the effects of hyper-parameters and learning method on prediction accuracy and run-time. One major observation suggests that more complicated neuron structure does not always lead to higher accuracy, but does take significant more time to train.[<a href="https://github.com/yizhil/numpyBasedNeuralNetwork">code</a>][<a href="https://archive.ics.uci.edu/ml/datasets/Polish+companies+bankruptcy+data">data</a>][<a href="https://github.com/yizhil/numpyBasedNeuralNetwork/tree/master/results">pics</a>]'
        },
        {
            img: 'images/option.png',
			authors: 'aaa',
            title: 'Scalable PDE Solver for Options Pricing',
            text: 'Design, build and implement a PDE solver using finite difference method. The solver aims to compute value and Greeks for Call/Put, Eur/Ame/Bermuda, Vanilla/Barrier options, a total of 24 type combinations. The solver takes great advantage of polymorphimsm and inheriance, thus can be easily expanded to price other option with its payoff provided. [<a href="https://github.com/yizhil/OptionPricing">code</a>][<a href="https://github.com/yizhil/OptionPricing/tree/master/results">pics</a>]'
        },
        {
            img: 'images/trump.png',
			
            title: 'Trump Tweets based Trading Strategy',
            text: 'The phenomenan that President Trump announced increased tariff on China and S&P500 index dropped dramatically in the next two days, inspire us to explore the influence Trump has on the market and develop a model to predict the market movement based on the president\'s words. We collect 8 years tweets starting 2010, visualize with a word cloud, and connect them with S&P500 index to create the dataset. The model trained with Naive Bayes algorithm ends up with a predication accuracy of 54.6% in 2018. Based on this, we devise two trading strategies that outperform the index.[<a href="https://github.com/yizhil/TrumpTweetTradingStrategy">code</a>][<a href="https://github.com/yizhil/TrumpTweetTradingStrategy/tree/master/results">pics</a>]'
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
