casper.
    start('http://localhost:7777').
    then(function() {
        // Required elements
        phantomcss.screenshot('.navigation', 'Navigation');
        phantomcss.screenshot('.tab-bar', 'Tab Bar');
        phantomcss.screenshot('.page-header', 'Page Header');
    });
