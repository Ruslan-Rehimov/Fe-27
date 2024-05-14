// 1. Car adinda constructor function yaradın,
//  marka,model,year,engine deyə key-ləri olsun.
// Bu constructor vasitəsi ilə 3 fərqli obyekt yaradın.
function Car(marka,model, year, engine) {
    this.marka = marka;
    this.lastName = model;
    this.year = year;
    this.engine = engine;
  }
  const firstCar = new Car("Bmw", "M5 E39", 2002, "5.0");
  const secondCar = new Car("Mercedes-Benz", "W212 AMG Brabus", 2015, "7.2");
  const thirdCar = new Car("Lexus", "LX570 Limited", 2018, "5.7");

  console.log(Car);
  console.log(firstCar);
  console.log(secondCar);
  console.log(thirdCar);