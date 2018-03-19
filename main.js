var coffeeShop = {
    beans: 40,
    money: 500,
    pricePerKilo: 12,

    drinkRequirements: {
        latte: { price: 12, beanRequirement: 10 },
        americano: { price: 10, beanRequirement: 5 },
        doubleShot: { price: 12, beanRequirement: 15 },
        frenchPress: { price: 8, beanRequirement: 12 }
    },

    // INDIVIDUAL EXERCISE (EXTENSION 1)
    makeDrink: function(drinkType) {
        let currentBeans = -1;
        if (drinkType in this.drinkRequirements) {
            currentBeans = this.beans - this.drinkRequirements[drinkType].beanRequirement;;
        } else {
            alert("Sorry, we don't make " + drinkType);
            return false;
        }

        if (currentBeans >= 0) {
            this.beans = currentBeans;
        } else {
            alert("Sorry, we're all out of beans!");
            return false;
        }

        return true;
    },

    // INDIVIDUAL EXERCISE (EXTENSION 2)
    buySupplies: function(amount) {
        if (this.money < amount) {
            alert("Cannot use " + amount + "$ - only " + this.money + "$ left. Using remailning amount.");
            this.beans += (this.money / this.pricePerKilo);
            this.money = 0;
        } else {
            this.beans += (amount / this.pricePerKilo);
            this.money -= amount;
        }
    },

    // INDIVIDUAL EXERCISE (EXTENSION 3)
    buyDrink: function(drinkType) {
        let drinkReady = this.makeDrink(drinkType);
        if (drinkReady) {
            this.money += this.drinkRequirements[drinkType].price;
            alert("Enjoy your " + drinkType);
        } else {
            alert("Sorry, please choose another drink.");
        }
    }
}

coffeeShop.buyDrink("latte");
console.log("Beans left " + coffeeShop.beans);
coffeeShop.buyDrink("americano");
console.log("Beans left " + coffeeShop.beans);
coffeeShop.buyDrink("filtered");
console.log("Beans left " + coffeeShop.beans);
coffeeShop.buySupplies(600);
coffeeShop.buyDrink("doubleShot");
console.log("Beans left " + coffeeShop.beans);
coffeeShop.buyDrink("frenchPress");
console.log("Beans left " + coffeeShop.beans);