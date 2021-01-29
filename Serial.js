// Serial.js

const strSet1 = "BCDFGHJKLMNPQRSTUVWXY23456789";
let mask = ["AAAAA", "BBBBB", "CCCCC", "DDDDD"];

const genSerial = () => {
  let serial = ["", "", "", ""];
  for (block of mask) {
    let i = mask.indexOf(block);
    for (char of block) {
      serial[i] += strSet1[Math.floor(Math.random() * strSet1.length)];
    }
  }
  return serial.join("-");
};

const si = () => {
  console.time("perfmon");
  console.log(genSerial());
  console.timeEnd("perfmon");
};