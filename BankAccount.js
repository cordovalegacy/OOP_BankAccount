class BankAccount{
    constructor(intRate, balance){
        this.intRate = intRate
        this.balance = balance
    }

    depositMoney(amount){
        this.balance = this.balance + amount
        return this
    }

    withdrawMoney(amount){
        this.balance = this.balance - amount
        return this
    }

    displayAccountInfo(){
        console.log(`Interest Rate: ${this.intRate} \nAccount Balance: ${this.balance}`)
    }

    yieldInterest(){
        this.balance = this.balance * (1+this.intRate)
        return this
    }
}

accountOne = new BankAccount(0.2, 1500)
accountTwo = new BankAccount(0.25, 900)

accountOne.depositMoney(50).withdrawMoney(150).yieldInterest().displayAccountInfo()
accountOne.depositMoney(500).withdrawMoney(350).yieldInterest().displayAccountInfo()