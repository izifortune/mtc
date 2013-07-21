require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        underscore: '../bower_components/underscore/underscore'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require([
        'app',
        'jquery',
        'bootstrap',
        'underscore',
        'mtc',
], function (app, $, bootstrap, _, mtc) {
    'use strict';
    var tpl = [
'<div class="row-fluid">',
'    <div class="span12" style="text-align: center">',
'        <p>Result for: <input type="text" style="width: 80%" disabled value="<%= formula %>"/></p>',
'    </div>',
'</div>',
'<div class="row-fluid">',
'    <div class="span12">',
'        <h2 class="text-center text-success">MT: <%= mtc %></h2>',
'    </div>',
'</div>',
'<div class="row-fluid">',
'    <div class="span3">',
'        <div class="text-center text-info">#A: <%= a_count %></div>',
'    </div>',
'    <div class="span3">',
'        <div class="text-center text-info">#T: <%= t_count %></div>',
'    </div>',
'    <div class="span3">',
'        <div class="text-center text-info">#G: <%= g_count %></div>',
'    </div>',
'    <div class="span3">',
'        <div class="text-center text-info">#C: <%= c_count %></div>',
'    </div>',
'</div>',
'<hr/>',
    ]


    $('#res').hide();
    $('#main').addClass('animated bounceIn');
    $('#main').show();
    $('#input').on('click',function(e) {
        this.select();
    });
    $('#input').on('keypress',function(e) {
        var input = $("#input").val();
        if (e.which == 13) {
            $('#res').removeClass('animated bounceInDown');
            $('#res').hide();
            setTimeout(function() {
                var res = mtc(input);
                $("#res").addClass('animated bounceInDown');
                $('#res').show();
                $('#input').attr('disabled',true);
                var rend = _.template(tpl.join(''), res);
                $('#res .well').html(rend);
            },1);
            setTimeout(function() {
                $('#input').attr('disabled',false);
            },1000)
        }
    });
});
