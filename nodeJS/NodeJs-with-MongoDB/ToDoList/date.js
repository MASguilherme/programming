exports.getDate = function(){

    const today = new Date();

    const options = { 
        weekday: "long",
        day: "numeric",
        month:"long",
    }

    const day = today.toLocaleString("en-US", options);
    return day;
}