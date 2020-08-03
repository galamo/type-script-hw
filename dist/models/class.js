var AccountTypes;
(function (AccountTypes) {
    AccountTypes["business"] = "Business";
    AccountTypes["private"] = "Private";
    AccountTypes["coporate"] = "Coporate";
})(AccountTypes || (AccountTypes = {}));
class Account {
    constructor(accountId, balance, owners, type) {
        this.accountId = accountId;
        this.balance = balance;
        this.owners = owners;
        this.type = type;
    }
    deposit(amount) {
        if (amount < 0)
            return;
        this.balance += amount;
    }
    withdrawl(amount) {
        if (amount < 0)
            return;
        this.balance -= amount;
    }
}
var PieColors;
(function (PieColors) {
    PieColors["red"] = "rgba(255,125,193)";
    PieColors["blue"] = "blue";
    PieColors["green"] = "#FF98554";
    PieColors["yellow"] = "yellow";
})(PieColors || (PieColors = {}));
class BankLocation {
}
class Bank {
    constructor(_name) {
        this.name = _name;
        this.location = new BankLocation();
        this.Accounts = [];
    }
    addAccount(account) {
        this.Accounts.push(account);
    }
    removeAccount(accountId) {
        const foundIndexToDelete = this.Accounts.findIndex(account => account.accountId === accountId);
        this.Accounts.splice(foundIndexToDelete, 1);
        //Array prototype;
    }
}
const benLeumi = new Bank("Benleumi");
benLeumi.addAccount(new Account("accountid", 0, [], AccountTypes.private));
