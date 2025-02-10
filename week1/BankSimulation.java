import java.util.Scanner;

class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public synchronized void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: $" + amount + ". New balance: $" + balance);
    }

    public synchronized void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient balance!");
        } else {
            balance -= amount;
            System.out.println("Withdrew: $" + amount + ". New balance: $" + balance);
        }
    }

    public double getBalance() {
        return balance;
    }
}

public class BankSimulation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BankAccount account = new BankAccount(1000); // Start with $1000

        while (true) {
            System.out.println("\n1. Deposit  2. Withdraw  3. Check Balance  4. Exit");
            System.out.print("Choose an option: ");
            int choice = sc.nextInt();

            if (choice == 4) {
                System.out.println("Final Balance: $" + account.getBalance());
                break;
            }

            System.out.print("Enter amount: ");
            double amount = sc.nextDouble();

            if (choice == 1) {
                new Thread(() -> account.deposit(amount)).start();
            } else if (choice == 2) {
                new Thread(() -> account.withdraw(amount)).start();
            } else if (choice == 3) {
                System.out.println("Balance: $" + account.getBalance());
            } else {
                System.out.println("Invalid choice!");
            }
        }

        sc.close();
    }
}


