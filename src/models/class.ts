

enum AccountTypes {
    business = "Business",
    private = "Private",
    coporate = "Coporate"
}

class Account {
    constructor(public accountId: string,
        public balance: number,
        public owners: Array<User>,
        public type: AccountTypes) { }


    deposit(amount: number) {
        if (amount < 0) return;
        this.balance += amount
    }
    withdrawl(amount: number) {
        if (amount < 0) return;
        this.balance -= amount
    }

}


enum PieColors {
    red = "rgba(255,125,193)",
    blue = "blue",
    green = "#FF98554",
    yellow = "yellow"
}



class BankLocation {
    address: string;
    country: string;
    zipCode: string | number;
}

class Bank {
    public name: string;
    public location: BankLocation;
    public Manager: User;
    private Accounts: Array<Account>

    constructor(_name: string) {
        this.name = _name
        this.location = new BankLocation();
        this.Accounts = [];
    }

    addAccount(account: Account) {
        this.Accounts.push(account)
    }

    removeAccount(accountId: string) {
        const foundIndexToDelete = this.Accounts.findIndex(account => account.accountId === accountId)
        this.Accounts.splice(foundIndexToDelete, 1);
        //Array prototype;
    }

}

const benLeumi = new Bank("Benleumi");
benLeumi.addAccount(new Account("accountid", 0, [], AccountTypes.private))



















