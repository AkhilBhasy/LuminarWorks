//array of objects
var temperature = [
    { district: "tvm", temprature: 25 },
    { district: "kollam", temprature: 27 },
    { district: "kottayam", temprature: 24 },
    { district: "ekm", temprature: 27 },
    { district: "tsr", temprature: 25 },
    { district: "pkd", temprature: 30 },
    { district: "tvm", temprature: 27 },
    { district: "kollam", temprature: 25 },
    { district: "kottayam", temprature: 28 },
    { district: "ekm", temprature: 29 },
    { district: "tsr", temprature: 32 },
    { district: "pkd", temprature: 31 },

]

var weather = {};
for (let data of temperature) {
    let dist = data["district"];
    let temp = data["temprature"];
    if (dist in weather) {
        let old_temp = weather[dist];
        if (old_temp < temp) {
            weather[dist] = temp;
        }

    }
    else {
        weather[dist] = temp;
    }
}
console.log(weather);



//find dist with highest temp
console.log("District with highest temperature");
let high_temp = 0, high_dist;
for (let data of temperature) {
    let dist = data["district"];
    let temp = data["temprature"];

    if (temp > high_temp) {
        high_temp = temp;
        high_dist = dist;
    }

}
console.log(high_dist+":"+high_temp);


//sort desc order by temp
console.log("Sorted temperature");
var sorted_temp=temperature.sort((dist1,dist2)=>dist1.temprature-dist2.temprature);
console.log(sorted_temp);


function sortByTemp(data){
    return Object.entries(data).sort((dist1,dist2)=>dist1[1]-dist2[1]);
}
console.log(sortByTemp(weather));