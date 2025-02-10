import java.util.*;
import java.util.Scanner;

public class AnagramFinder {

    public static List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        
        // Edge case: if p is longer than s, no anagram can exist
        if (s.length() < p.length()) {
            return result;
        }

        // Frequency array for p
        int[] pCount = new int[26];
        for (char c : p.toCharArray()) {
            pCount[c - 'a']++;
        }

        // Frequency array for the current window in s
        int[] windowCount = new int[26];
        int left = 0;

        // Slide the window over string s
        for (int right = 0; right < s.length(); right++) {
            // Include the current character in the window
            windowCount[s.charAt(right) - 'a']++;

            // If the window size is greater than p's size, shrink the window
            if (right - left + 1 > p.length()) {
                windowCount[s.charAt(left) - 'a']--;
                left++;
            }

            // If the window matches the frequency of p, we found an anagram
            if (Arrays.equals(pCount, windowCount)) {
                result.add(left);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get input strings from the user
        System.out.print("Enter the string s: ");
        String s = scanner.nextLine();

        System.out.print("Enter the string p: ");
        String p = scanner.nextLine();

        // Find the anagrams
        List<Integer> anagramIndices = findAnagrams(s, p);

        // Output the results
        System.out.println("Anagram start indices: " + anagramIndices);
        
        scanner.close();
    }
}
