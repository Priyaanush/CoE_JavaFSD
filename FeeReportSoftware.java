import java.sql.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Scanner;

public class FeeReportSoftware {
    private static final String URL = "jdbc:mysql://localhost:3306/FeeReportDB";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "root";
    private static Connection conn;
    private static final Scanner scanner = new Scanner(System.in);

    static {
        try {
            conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        } catch (SQLException e) {
            System.err.println("Database Connection Failed: " + e.getMessage());
            System.exit(1);
        }
    }

    public static void main(String[] args) {
        while (true) {
            System.out.println("\n===== Fee Report Software =====");
            System.out.println("1. Admin Login");
            System.out.println("2. Accountant Login");
            System.out.println("3. Exit");
            System.out.print("Enter choice: ");

            if (!scanner.hasNextInt()) {
                scanner.next();
                System.out.println("Invalid input. Please enter a number.");
                continue;
            }

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1 -> adminLogin();
                case 2 -> accountantLogin();
                case 3 -> {
                    System.out.println("Exiting...");
                    System.exit(0);
                }
                default -> System.out.println("Invalid choice. Try again.");
            }
        }
    }

    private static void adminLogin() {
        int attempts = 0;
        while (attempts < 3) {
            System.out.print("Enter Admin Username: ");
            String username = scanner.nextLine();
            System.out.print("Enter Admin Password: ");
            String password = hashPassword(scanner.nextLine());

            try (PreparedStatement ps = conn.prepareStatement("SELECT * FROM admin WHERE username=? AND password=?")) {
                ps.setString(1, username);
                ps.setString(2, password);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        System.out.println("Admin Login Successful!");
                        adminPanel();
                        return;
                    }
                }
            } catch (SQLException e) {
                System.err.println("Database error: " + e.getMessage());
            }

            System.out.println("Invalid Credentials. Try again.");
            attempts++;
        }
        System.out.println("Max login attempts reached. Exiting...");
        System.exit(0);
    }

    private static void adminPanel() {
        while (true) {
            System.out.println("\n===== Admin Panel =====");
            System.out.println("1. Add Accountant");
            System.out.println("2. View Accountants");
            System.out.println("3. Delete Accountant");
            System.out.println("4. Logout");
            System.out.print("Enter choice: ");

            if (!scanner.hasNextInt()) {
                scanner.next();
                System.out.println("Invalid input. Enter a number.");
                continue;
            }

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1 -> addAccountant();
                case 2 -> viewAccountants();
                case 3 -> deleteAccountant();
                case 4 -> {
                    System.out.println("Logging out...");
                    return;
                }
                default -> System.out.println("Invalid choice. Try again.");
            }
        }
    }

    private static void addAccountant() {
        System.out.print("Enter Accountant Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter Email: ");
        String email = scanner.nextLine();
        if (!email.contains("@")) {
            System.out.println("Invalid email format.");
            return;
        }

        System.out.print("Enter Phone: ");
        String phone = scanner.nextLine();
        if (!phone.matches("\\d{10}")) {
            System.out.println("Invalid phone number. Should be 10 digits.");
            return;
        }

        System.out.print("Enter Password: ");
        String password = hashPassword(scanner.nextLine());

        String sql = "INSERT INTO accountant (name, email, phone, password) VALUES (?, ?, ?, ?)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, name);
            ps.setString(2, email);
            ps.setString(3, phone);
            ps.setString(4, password);
            ps.executeUpdate();
            System.out.println("Accountant added successfully!");
        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    private static void viewAccountants() {
        String sql = "SELECT id, name, email, phone FROM accountant";
        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            System.out.println("\n===== Accountant List =====");
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") +
                        ", Name: " + rs.getString("name") +
                        ", Email: " + rs.getString("email") +
                        ", Phone: " + rs.getString("phone"));
            }
        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    private static void deleteAccountant() {
        System.out.print("Enter Accountant ID to Delete: ");
        if (!scanner.hasNextInt()) {
            scanner.next();
            System.out.println("Invalid input.");
            return;
        }
        int id = scanner.nextInt();
        scanner.nextLine();

        String sql = "DELETE FROM accountant WHERE id=?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            int rows = ps.executeUpdate();
            if (rows > 0) {
                System.out.println("Accountant deleted successfully!");
            } else {
                System.out.println("Accountant not found.");
            }
        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    private static void accountantLogin() {
        System.out.print("Enter Accountant Email: ");
        String email = scanner.nextLine();
        System.out.print("Enter Accountant Password: ");
        String password = hashPassword(scanner.nextLine());

        String sql = "SELECT * FROM accountant WHERE email=? AND password=?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, email);
            ps.setString(2, password);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    System.out.println("Accountant Login Successful!");
                    accountantPanel();
                } else {
                    System.out.println("Invalid Credentials. Try again.");
                }
            }
        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    private static void accountantPanel() {
        System.out.println("\n===== Accountant Panel =====");
        System.out.println("1. View Accountants");
        System.out.println("2. Logout");
        System.out.print("Enter choice: ");
        if (!scanner.hasNextInt()) {
            scanner.next();
            System.out.println("Invalid input.");
            return;
        }
        int choice = scanner.nextInt();
        scanner.nextLine();

        if (choice == 1) {
            viewAccountants();
        } else if (choice == 2) {
            return;
        } else {
            System.out.println("Invalid choice.");
        }
    }

    private static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(password.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : hash) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Password hashing error.");
        }
    }
}
