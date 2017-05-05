package Converter;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class CsvToJsonConverter {
	
	public static void main(String[] args) throws IOException {

	String outputFile = args[0];
	BufferedReader buff = new BufferedReader(new FileReader(new File(outputFile)));
	String output = "";
	while (buff.ready()) {
		output += buff.readLine() + "\n";
	}
	buff.close();
    String[] lines = output.split("\n");

    // json string value
    StringBuilder builder = new StringBuilder();
    builder.append("[\n");
    String[] headers = new String[0];

    // convert the csv value to json
    
    // for every fieldValues line in the csv file
    for (int i = 0; i < lines.length; i++) {
        String[] fieldValues = lines[i].replaceAll("\"", "").split(",");

        if (i == 0) 
        {
            headers = fieldValues; // header row
            continue;
        } else {
        	builder.append('{');
        	// construct the json object from each row
            for (int j = 0; j < fieldValues.length && j < headers.length; j++) {
            	

                String jsonvalue = "\"" + headers[j] + "\":\"" + fieldValues[j] + "\"";
                if (j != fieldValues.length - 1) { //if not last value of fieldValues...
                    jsonvalue += ',';
                }
                builder.append(jsonvalue);
            }
            builder.append('}');
            if (i != lines.length - 1) {
                builder.append(',');
            }
            builder.append('\n');
        }
    }
    builder.append(']');
    builder.append('\n');
    output = builder.toString();

    System.out.println(output);
}
}
