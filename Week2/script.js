function iPhone() {} // constructor

iPhone.prototype.faceId = function () {
  console.log("Unlock my phone with FaceID");
};

iPhone.prototype.video = function () {
  console.log("Take a 4K video");
};

iPhone.prototype.stocksApp = () => {
  console.log("Find out what the stock market is doing");
};

let myPhone = new iPhone();
myPhone.faceId();
myPhone.stocksApp();
myPhone.video();

myPhone.app = "Instagram";
myPhone.stocksApp = function () {
  console.log("Updated stocks app");
};
console.log(myPhone);
myPhone.stocksApp();

let newPhone = new iPhone();

console.log(newPhone);
