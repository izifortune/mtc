'use strict';

define([],function() {
    var mtc = function(formula) {
        var a=0;
        var t=0;
        var g=0;
        var c=0;
        for (var i in formula) {
            var r = formula[i];
            if (r === 'a' || r === 'A') {
                a += 1;
            }
            else if ( r === 'c' || r === 'C') {
                c += 1;
            }
            else if ( r === 'g' || r === 'G') {
                g += 1;
            }
            else if ( r === 't' || r ===  'T') {
                t += 1;
            }
        }
        //Count delle lettere
        var res = {};
        res.a_count = a;
        res.c_count = c;
        res.g_count = g;
        res.t_count = t;
        var mtc_res = ((a * t) * 2) + ((g * c) * 4);
        res.mtc = mtc_res;
        res.formula = formula;
        return res;
    }

    return mtc;
});
