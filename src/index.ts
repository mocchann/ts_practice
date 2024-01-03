type Human = {
  height: number,
  weight: number,
};

type ReturnObj = {
  bmi: number,
};

const calcBMIObject = ({
  height, weight
}: Human): ReturnObj => ({
  bmi: weight / height ** 2
});

const uhyo: Human = {
  height: 1.84,
  weight: 72
};

console.log(calcBMIObject(uhyo));
