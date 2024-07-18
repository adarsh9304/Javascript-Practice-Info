


class CustomArray extends Array {
    // New method to calculate the average of the array elements
    average() {
      if (this.length === 0) return 0;
      const sum = this.reduce((acc, val) => acc + val, 0);
      return sum / this.length;
    }
  }
  
  const myArray = new CustomArray(1, 2, 3, 4, 5);
  console.log(myArray.average()); // Output: 3
  
  myArray.push(6);
  console.log(myArray.average()); // Output: 3.5
