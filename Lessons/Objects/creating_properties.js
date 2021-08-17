var path = require('path');
console.log(path.basename(__filename));

/** Creating Properties with defineProperty() */
var account = {
  cash: 12000,
  _name2: 'Default',
  withdraw: function(amount) {
    this.cash -= amount;
    console.log('withdrew ' + amount + ', new cash reserve is: ' + this.cash);
  }
};
// account.withdraw(1000);

// account.deposit = function () ...
Object.defineProperty(account, 'deposit', {
  value: function(amount) {
    this.cash += amount;
  }
});

account.deposit(3000);
account.withdraw(1000);

/** defineProperty makes property readable only by default, you should pass writable if you want to overwrite it later */
Object.defineProperty(account, 'name', {
  // enumerable: true,
  value: 'ID000-1',
  writable: true
});

console.log(account.name);
account.name = 'ID000-3';
console.log(account.name);

Object.defineProperty(account, 'name2', {
  // enumerable: true,
  get: function() {
    return 'Hello';
  },
  set: function(name2) {
    if (name2 == 'Max') {
      this._name2 = name2;
    }
  }
});

console.log(account.name2);
account.name = 'ID000-4';
console.log(account.name2);
console.log(account._name2);
