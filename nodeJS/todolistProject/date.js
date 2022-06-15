module.exports.getDate = getDate;

function getDate() {
  let today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}

module.exports.getDay = getDay;

function getDay() {
    let today = new Date();
  
    const options = {
      weekday: "long",
    };
  
    let day = today.toLocaleDateString("en-US", options);
    return day;
  }
  
  console.log(module.exports);