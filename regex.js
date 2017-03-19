function checkUsername() {
    alert(/[a-z0-9-_]{3,20}/.exec("_9asakwarnmarkasa_kwarnmarktjosan"));
}

function checkIP() {
    alert(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.exec("192.168.0.255"));
}

function checkNumber() {
    alert(/^[^0]/.test("0"));
}

function getColours(string) {
    return /#[a-f0-9]{3}|#[a-f0-9]{6}/gi.exec(string);
}

function checkEmail(string) {
    return /^([a-z0-9]+([.a-z0-9]+))@[a-z0-9\.]^[\.]$/i.test(string);
}