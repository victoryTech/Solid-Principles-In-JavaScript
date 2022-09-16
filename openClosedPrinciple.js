// **Open/Closed Principle**
/*
    Any functionality open for extension but closed for modification.
*/

/*
// BAD
let iceCreamFlavors=["chocolate","vanilla"];
let iceCreamMaker={
 makeIceCream (flavor) {
  if(iceCreamFlavors.indexOf(flavor)>-1){
   console.log("Great success. You now have ice cream.")
  }else{
   console.log("Epic fail. No ice cream for you.")
  }
 }
}
export default iceCreamMaker;
*/

// GOOD

let iceCreamFlavors = ["chocolate", "vanilla"];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log("Great success. You now have ice cream.");
    } else {
      console.log("Epic fail. No ice cream for you.");
    }
  },
  addFlavor(flavor) {
    iceCreamFlavors.push(flavor);
  },
};
export default iceCreamMaker;
