//RequireJS config
require.config({
    paths: {
        jquery: [
            'https://code.jquery.com/jquery-2.2.3.min',
            //If the CDN location fails, load from this location
            'lib/jquery-2.2.3.min'
        ],
        Chart: ['https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.0.1/Chart.min',
            //If the CDN location fails, load from this location
            'lib/Chart.min'
        ]
    },
    shim: {
        'Chart': {
            exports: 'Chart'
        }
    }
});

//create charts
require(['jquery', 'Chart'], function($, Chart) {
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.defaultFontColor = 'rgba(156,63,74, 1)';

    var chartRadarDOM = $('#chartRadar');
    var chartRadarData = {
        labels: ["HTML / CSS", "JavaScript", "Database", "C#.NET / OOP / Algorithm", "Photoshop / Illustrator", "Git"],
        datasets: [{
            label: "Skill Level",
            backgroundColor: "rgba(156,63,74,.5)",
            borderColor: "rgba(156,63,74,.8)",
            pointBackgroundColor: "rgba(156,63,74,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(156,63,74,1)",
            pointBorderWidth: 2,
            data: [9, 7, 6, 5, 10, 9]
        }]
    };
    var chartRadarOptions = {
        scale: {
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 6
            },
            pointLabels: {
                fontSize: 12
            },
            gridLines: {
                color: 'rgba(156,63,74,.1)'
            }
        }

    };
    var chartRadar = new Chart(chartRadarDOM, {
        type: 'radar',
        data: chartRadarData,
        options: chartRadarOptions
    });
});
