import java.util.Scanner;

public class ExceptionHandlingExample {
    public static void processInput() {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter a number: ");
            double number = scanner.nextDouble(); // Read user input

            double reciprocal = 1 / number; // Calculate reciprocal
            System.out.println("Reciprocal: " + reciprocal);

        } catch (java.util.InputMismatchException e) {
            System.out.println("Error: Please enter a valid number!");
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero!");
        } finally {
            scanner.close(); // Close scanner
            System.out.println("Process completed.");
        }
    }

    public static void main(String[] args) {
        processInput(); // Call method to process user input
    }
}
