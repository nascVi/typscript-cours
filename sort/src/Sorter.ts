import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
  length: number;
  // Don't have to match up the NumbersCollection's paramaters
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    
    for (let i=0; i<length; i++) {
      for(let j=0; j<length-i-1; j++) {
        if(this.compare(j, j+1)) {
          this.swap(j, j+1);
        }

        // If collection is a string, do this logic instead:
        // ~~~logic to compare and swap characters in string
        // not to mix up with the use of typeof which is inappropriate in typescript syntax
      }
    }
  }
}
