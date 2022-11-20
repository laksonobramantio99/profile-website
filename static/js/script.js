$(document).ready(function(){
    $.get("https://ipinfo.io/json?token=2caf990f59e6e2", function(data, status){
        dataRaw = data.ip + ":" + data.city + ":" + data.country + ":" + data.loc + ":" + data.org + ":" + data.region + ":" + data.timezone;
        
        $.post("/visit/update?dataRaw=" + dataRaw, function(data, status){
            console.log(status)
        });
    });
  });