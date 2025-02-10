public class StringProcessor {

    // Method to reverse the string
    public static String reverseString(String str) {
        StringBuilder reversed = new StringBuilder(str);
        return reversed.reverse().toString();
    }

    // Method to count occurrences of a substring in a given text
    public static int countOccurrences(String text, String sub) {
        int count = 0;
        int index = 0;
        while ((index = text.indexOf(sub, index)) != -1) {
            count++;
            index += sub.length();
        }
        return count;
    }

    // Method to split the string by spaces and capitalize each word
    public static String splitAndCapitalize(String str) {
        String[] words = str.split(" ");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            if (!word.isEmpty()) {
                result.append(word.substring(0, 1).toUpperCase()) // Capitalize first letter
                      .append(word.substring(1).toLowerCase()) // Make the rest lowercase
                      .append(" ");
            }
        }
        return result.toString().trim(); // Remove trailing space
    }

    public static void main(String[] args) {
        String str = "hello world, welcome to string handling!";
        
        // Test reverseString method
        String reversed = reverseString(str);
        System.out.println("Reversed String: " + reversed);
        
        // Test countOccurrences method
        String sub = "string";
        int occurrences = countOccurrences(str, sub);
        System.out.println("Occurrences of '" + sub + "': " + occurrences);
        
        // Test splitAndCapitalize method
        String capitalized = splitAndCapitalize(str);
        System.out.println("Capitalized String: " + capitalized);
    }
}
