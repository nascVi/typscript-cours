import { cp } from "fs";

class Vehicle{
  // public drive(): void {
    //   console.log('chugga chugga');
    // }
  // color: string = 'red';
  // color: string;

  constructor (public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
  console.log(vehicle.color);
  
//   vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) { // color belongs to Vehicle so it doesn't need to take a public definition
    super(color);
  }

  private drive(): void { // Use of private to restrict access to a function
    console.log('vroom'); 
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
// car.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();