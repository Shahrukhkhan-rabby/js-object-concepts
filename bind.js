const kibria = {
  id: 101,
  money: 5000,
  name: "RJ kibria",

  treatDey: function (expense,) {
      this.money = this.money - expense;
      console.log(this);
    return this.money;
  },
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

const normalGalam = {
  id: 102,
  money: 8000,
  name: "Normal Galam",
};



kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
const normalTreatDey = kibria.treatDey.bind(normalGalam);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
kibria.treatDey(500);
normalTreatDey(700);
