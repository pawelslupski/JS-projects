class Wallet {

    constructor(money) {
        let _money = money;

        this.getWalletValue = () => _money;

        // checking if user has enough money to play
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false;
        }

        this.changeWallet = (value, type = "-") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Invalid action type");
                }
            } else {
                throw new Error("Incorrect number");
            }
        }

    }
}