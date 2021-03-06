// Load the wasm modules/variables and make them available.
/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/
import {
    header_prefix,
    get_num_algorithms,
    get_algorithm,
    encrypt,
    decrypt,
    default as init
} from './qspm.js';

async function load_wasm() {
    await init('./wasm/qspm_bg.wasm');
    window.wasm = {
        fct_get_num_algorithms: get_num_algorithms,  // n = window.wasm.get_num_algorithms();
        fct_get_algorithm: get_algorithm,            // a = window.wasm.get_algorithm(i);  // 0 <= i < n
        fct_header_prefix: header_prefix,            // p = window.wasm.header_prefix(a);
        fct_encrypt: encrypt,                        // c = window.wasm.encrypt(a, password, plaintext);
        fct_decrypt: decrypt,                        // t = window.wasm.decrypt(a, password, c);
        algorithm: get_algorithm(0)
    };
    initFinal();
}

// On load.
window.addEventListener("load", function(_evt) {
    load_wasm();
});

// This must be done after the async load is completed.
function initFinal() {
    algorithmCreateSelectBox();
    window.doAlgorithmSet = doAlgorithmSet;

    // Make sure that "None" is selected in the ulOptions.
    setTimeout(function() {
        document.getElementById('ulOptionsSelect').selectedIndex = 2; // none
    }, 0.1);

    // If master password and text are not zero,
    // start on the records tab.
    var mp = sessionStorage.getItem('ssidMasterPasswordValue');
    if (mp) {
        var txt = sessionStorage.getItem('ssidCryptText');
        if (txt) {
            setTimeout(function() {
                document.getElementById('tabRecords').click();
            }, 0.1);
        }
    }
}

// Populate the select box.
function algorithmCreateSelectBox() {
    var anchor = document.getElementById("algorithmSpan");
    var label = document.createElement("LABEL");
    label.innerHTML = "Algorithm: ";
    anchor.appendChild(label);

    var select = document.createElement("SELECT");
    select.setAttribute("id", "algorithmSelect");
    select.setAttribute("onchange", "window.doAlgorithmSet()");

    for (var i=0; i<window.wasm.fct_get_num_algorithms(); i++) {
        var algorithm = window.wasm.fct_get_algorithm(i);
        var option = document.createElement("OPTION");
        option.value = algorithm;
        option.innerHTML = algorithm;
        if (i == 0) {
            option.setAttribute("selected", "selected");
        }
        select.appendChild(option);
    }
    anchor.appendChild(select);
}

function doAlgorithmSet() {
    var obj = document.getElementById("algorithmSelect");
    window.wasm.algorithm = obj.value;
}
