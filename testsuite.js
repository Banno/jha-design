casper.
    start('http://localhost:7777').
    then(function() {
        // Required elements
        phantomcss.screenshot('.navigation--drawer', 'Navigation Drawer');
        phantomcss.screenshot('.page-header', 'Page Header');

        // Timeline
        phantomcss.screenshot('.timeline', 'Timeline');
    });
