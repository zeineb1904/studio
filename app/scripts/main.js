/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneFormsEditor: {
            deps: [
                'backboneForms'
            ]
        },
        backboneFormsAdapter: {
            deps: [
                'backboneForms'
            ]
        }
    },
    paths: {
        jquery: '../libs/jquery/jquery',
        jqueryUI: '../libs/jquery-ui/ui/jquery-ui',
        backbone: '../libs/backbone/backbone',
        backboneForms: '../libs/backbone-forms/distribution.amd/backbone-forms',
        backboneFormsEditor: '../libs/backbone-forms/distribution/editors/list',
        backboneFormsAdapter: '../libs/backbone.bootstrap-modal/src/backbone.bootstrap-modal',
        underscore: '../libs/underscore/underscore',
        bootstrap: '../libs/bootstrap/dist/js/bootstrap',
        vkbeautify: '../libs/vkbeautify.0.99.00.beta/index',
        dagre: '../libs/dagre/index',
        text : '../libs/requirejs-text/text',
        pnotify : '../libs/pines-notify/jquery.pnotify',
        fileSaver : '../libs/FileSaver/FileSaver',
        codemirror: '../libs/codemirror/lib/codemirror',
        jsplumb : '../libs/jsplumb/dist/js/jquery.jsPlumb-1.5.5',
        xml2json: 'thirdparties/xml2json',
//        XRegExp: '../libs/syntaxhighlighter/scripts/XRegExp',
//        shCore: '../libs/syntaxhighlighter/scripts/shCore',
//        shBrushXml: '../libs/syntaxhighlighter/scripts/shBrushXml',
//        shBrushJScript: '../libs/syntaxhighlighter/scripts/shBrushJScript',

        StudioApp: 'proactive/app'
    }
});

require(['StudioApp'],
    function (StudioApp) {
        StudioApp.init();
    }
);