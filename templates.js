// generated by Aftershave 0.6.11
(function() {
    'use strict';

    var Aftershave = {};
    Aftershave.templates = {};
    Aftershave.render = function(name, args) {
        if (Aftershave.templates[name]) {
            return Aftershave.templates[name].call(Aftershave, args || {});
        }
        return '';
    };

    Aftershave.templates.popup = function(args) {
        var _t = '<style>body { font-size: 0.75em; background: #f8f8f8; color: #111; font-family: Helvetica,Arial,sans-serif; /*text-align: center;*/ padding: 5px 10px; width: 175px;} h1 { margin: 0;} h2 { font-size: 1em; color: #333; font-weight: 600; margin: 15px 0 4px 0;} select, #input-max { width: 100px;} select { font-size: 1.3em;} #input-max { padding: 2px; font-size: 1.3em; margin: 5px 0; display: none;} label { width: 175px; text-align: left; padding: 0; display: block;} form { margin: 0;} input[type=radio] { margin-right: 5px; padding: 0;}</style><body></body><script src="raindrop.min.js"></script><script src="templates.js"></script><script src="popup.js"></script>';
        return _t;
    };

    Aftershave.templates.popup = function(args) {
        var _t = '<h1>xTab</h1><form><h2>Maximum Tabs:</h2><select id="max" name="max"> ';
        var hasMatch;
        var match;
        for (var key in args.options) {
            match = args.max == key;
            if (match) {
                hasMatch = true;
            }

            _t += ' <option value="' + key + '"';
            if (match) {
                _t += ' selected';
            }

            _t += '>' + args.options[key] + '</option> ';
        }

        _t += ' <option value="other"';
        if (!hasMatch) {
            _t += ' selected';
        }

        _t += '>Other...</option></select><input type="number" name="max" id="input-max"';
        if (!hasMatch) {
            _t += ' style="display: block;" value="' + args.max + '"';
        }

        _t += '><h2>Close existing tab:</h2><label><input type="radio" name="algo" id="algo" value="used"';
        if (args.algo == 'used') {
            _t += ' checked';
        }

        _t += '>Least recently used</label><label><input type="radio" name="algo" id="algo" value="accessed"';
        if (args.algo == 'accessed') {
            _t += ' checked';
        }

        _t += '>Least accessed</label><label><input type="radio" name="algo" id="algo" value="oldest"';
        if (args.algo == 'oldest') {
            _t += ' checked';
        }

        _t += '>Oldest</label><h2>Block new tab:</h2><label><input type="radio" name="algo" id="algo" value="block"';
        if (args.algo == 'block') {
            _t += ' checked';
        }

        _t += '>Block new tabs from opening</label><h2>Keep Tabs Opened:</h2><label><input type="checkbox" name="algo2" id="algo2" value="keep"';
        if (args.algo2 == 'keep') {
            _t += ' checked';
        }

        _t += '>Set the current number of tabs as min</label></form>';
        return _t;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Aftershave;
    }
    else {
        window.Aftershave = Aftershave;
    }
} ());