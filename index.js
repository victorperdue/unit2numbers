class Numbers {
    constructor(data) {
      // data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = data.split(",").map((number) => Number(number));
      } else {
        this.data = data;
      }
    }
  
    count() {
      // return the count of numbers in data
      return this.data.length;
    }
  
    printNumbers() {
      // print the numbers in data along with their indexes
      this.data.forEach((number, index) => {
        console.log(`Index ${index}: ${number}`);
      });
    }
  
    odds() {
      // return the odd numbers in data
      return this.data.filter((number) => number % 2 !== 0);
    }
  
    evens() {
      // return the even numbers in data
      return this.data.filter((number) => number % 2 === 0);
    }
  
    sum() {
      // return the sum of the numbers
      return this.data.reduce((total, number) => total + number, 0);
    }
  
    product() {
      // return the product of the numbers
      return this.data.reduce((product, number) => product * number, 1);
    }
  
    greaterThan(target) {
      // return the numbers greater than the target
      return this.data.filter((number) => number > target);
    }
  
    howMany(target) {
      // return the count of a given number
      return this.data.filter((number) => number === target).length;
    }
  }
  
  // Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  // create an instance of numbers
  const n1 = new Numbers(str);
  console.log("Count of numbers:", n1.count());
  console.log("Numbers along with their indexes:");
  n1.printNumbers();
  console.log("Odd numbers:", n1.odds());
  console.log("Even numbers:", n1.evens());
  console.log("Sum of numbers:", n1.sum());
  console.log("Product of numbers:", n1.product());
  console.log("Numbers greater than 3:", n1.greaterThan(3));
  console.log("Count of number 3:", n1.howMany(3));