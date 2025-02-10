import java.io.*;
import java.util.*;

public class LogFileAnalyzer {

    // Method to analyze log file and write results to the output file
    public static void analyzeLogFile(String inputFile, String outputFile, List<String> keywords) {
        Map<String, Integer> keywordCounts = new HashMap<>();
        
        // Initialize keyword counts to 0
        for (String keyword : keywords) {
            keywordCounts.put(keyword, 0);
        }

        // Reading the input file and processing each line
        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
            String line;
            while ((line = reader.readLine()) != null) {
                // Check each keyword in the line
                for (String keyword : keywords) {
                    if (line.contains(keyword)) {
                        // Increment the count for the matched keyword
                        keywordCounts.put(keyword, keywordCounts.get(keyword) + 1);
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Writing the analysis results to the output file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
            writer.write("Log File Analysis Report\n");
            writer.write("---------------------------\n");

            for (Map.Entry<String, Integer> entry : keywordCounts.entrySet()) {
                writer.write(entry.getKey() + ": " + entry.getValue() + " occurrences\n");
            }

            System.out.println("Log file analysis complete. Results written to: " + outputFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        // Define the input and output file paths
        String inputFile = "input_log.txt";
        String outputFile = "output_report.txt";

        // Define the keywords to search for
        List<String> keywords = Arrays.asList("ERROR", "WARNING");

        // Analyze the log file
        analyzeLogFile(inputFile, outputFile, keywords);
    }
}
