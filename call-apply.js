const kibria = {
  id: 101,
  money: 5000,
  name: "RJ kibria",

  treatDey: function (expense, boksis, tax) {
    this.money = this.money - expense - boksis-tax;
    console.log(this);
    return this.money;
  },
};
const heroBalam = {
  id: 102,
  money: 6000,
  name: "Hero Balam",
};

const normalGalam = {
  id: 102,
  money: 8000,
  name: "Normal Galam",
};

kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [1000, 200, 150]);
kibria.treatDey.apply(normalGalam, [1000, 200, 150]);

// kibria.treatDey.call(heroBalam, 500, 100, 50);
// kibria.treatDey.call(heroBalam, 300, 70, 30)

// const heroTreatDey = kibria.treatDey.bind(heroBalam);
// const normalTreatDey = kibria.treatDey.bind(normalGalam);

// heroTreatDey(500);
// heroTreatDey(300);
// heroTreatDey(500);
// kibria.treatDey(500);
// normalTreatDey(700);
