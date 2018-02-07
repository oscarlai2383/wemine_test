var request=require('request');
var request2=require('request');
var sleep = require('system-sleep');
var json_1 = '[{"anzr": "Bfpne Ynv"},{"rznvy": "bfpneynv2383@tznvy.pbz"},{"cubar": "57292179"},{"pbqr": "n53haDEEDk"},{"code":"n53haDEEDk"},{"pbqr":"a53unQRRQx"},{"code":"a53unQRRQx"}]';
//var json_str = '[{"pbqr": "n53haDEEDk"},{"code":"n53haDEEDk"},{"pbqr":"a53unQRRQx"},{"code":"a53unQRRQx"}]';
var json_2 = [{"email": "oscarlai2383@gmail.com",
    "part1": "SELECT GROUP_CONCAT(str ORDER BY B.sequence ASC SEPARATOR \'\') AS B FROM (SELECT section, GROUP_CONCAT(FROM_BASE64(part_str) ORDER BY sequence ASC SEPARATOR \'\') AS str FROM A WHERE A.is_relevant = 1 GROUP BY section) AS A INNER JOIN B ON A.section = B.id",
    "part2": "Wemine 2018",
    "part3": "I use Nodejs to post",
    "other": "Linkedin at https://www.linkedin.com/in/lai-ho-pan-a33b1611b/"}];

var options = {
    headers: {"Content-Type": "application/json"},
    url: 'http://dev.career.wemine.hk/1/',
    method: 'POST',
    json:true,
    //body:{data:{"anzr": "Bfpne Ynv","rznvy": "bfpneynv2383@tznvy.pbz","cubar": "57292179","code": "n53haDEEDk"}}
    body:JSON.parse(json_1)
};

var options_2 = {
    headers: {"Content-Type": "application/json"},
    url: 'http://dev.career.wemine.hk/2/',
    method: 'POST',
    json:true,
    body:json_2
};

function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('--- part a --- ' + (new Date()).toTimeString() ,data);
    }
}

function callback2(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('--- part b --- ' + (new Date()).toTimeString(),data);
    }
}
request(options, callback);
sleep(2000);
request2(options_2, callback2);