"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([50,3,-5,0]);
// numbersCollection.sort();
// class Sorter {
//   constructor(public collection: number[] | string) {}
//   sort(): void {
//     const { length } = this.collection;
//     for (let i=0; i<length; i++) {
//       for(let j=0; j<length-i-1; j++) {
// If collection is an array of numbers
// With type guard instanceof... giving a collection === number[]
// if(this.collection instanceof Array)  {
//   if(this.collection[j]>this.collection[j+1]) {
//     const leftHand = this.collection[j];
//     this.collection[j] = this.collection[j+1];
//     this.collection[j+1] = leftHand;
//   }
// }
// If collection is a string, do this logic instead:
// ~~~logic to compare and swap characters in string
// not to mix up with the use of typeof which is inappropriate in typescript syntax
//         if(this.collection instanceof String) {
//           this.collection.
//         }
//       }
//     }
//   }
// }
// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
//// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('Xaayb');
//// const sorter = new Sorter(charactersCollection);
//// sorter.sort();
// charactersCollection.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
//// const sorter = new Sorter(linkedList);
//// sorter.sort();
linkedList.sort();
linkedList.print();
