package Converter;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.HeaderColumnNameMappingStrategy;

public class ConvertCsvToJson {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        if (args.length > 1) {
            String pathToCsvFile = args[0];
            String javaBeanClassName = args[1];
            final File file = new File(pathToCsvFile);
            if (!file.exists()) {
                System.out.println("The file you specified does not exist. path=" + pathToCsvFile);
            }
            Class<?> type = null;
            try {
                type = Class.forName(javaBeanClassName);
            } catch (ClassNotFoundException e) {
                System.out.println("The java bean you specified does not exist. className=" + javaBeanClassName);
            }

            HeaderColumnNameMappingStrategy strat = new HeaderColumnNameMappingStrategy();
            strat.setType(type);

            CsvToBean csv = new CsvToBean();
            List list = csv.parse(strat, new InputStreamReader(new FileInputStream(file)));
            System.out.println(list.toString());
        } else {
            System.out.println("Please specify the path to the csv file.");
        }
    }
}
