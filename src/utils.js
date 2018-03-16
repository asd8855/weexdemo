export function getQueryVariable(variable) {
    var query = weex.config.bundleUrl;
    var num = query.indexOf('?');
    query = query.substr(num + 1);
    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
        return (false);
    }
}

export function getUrl(bundleUrl,fileName,dir,host){
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        host = host||'localhost:8081';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        nativeBase = 'http://' + host + '/' + dir + '/';
    }
    var h5Base = './index.html?page=./' + dir + '/';
    // in Native
    var base = nativeBase;
    if (typeof window === 'object') {
        base = h5Base;
    }
    return base+fileName;
}

