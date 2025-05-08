function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }


  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays); 
  }
  

  class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); 
      this.model = model;
    }
  
    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let maxProduct = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > maxProduct.price) {
        maxProduct = products[i];
      }
    }
  
    return maxProduct;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    }
    return "Weekday";
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000); 
    });
  }
