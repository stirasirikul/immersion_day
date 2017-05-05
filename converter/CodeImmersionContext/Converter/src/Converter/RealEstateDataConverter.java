//package Converter;
//
//import java.io.FileNotFoundException;
//import java.io.FileReader;
//import java.io.IOException;
//import java.sql.Timestamp;
//import java.util.ArrayList;
//
//import DTO.RealEstateDTO;
//
//import com.opencsv.CSVReader;
//
//public class RealEstateDataConverter {
//	public static void main(String[] args) {
//		ArrayList<RealEstateDTO> dataArray = new ArrayList<RealEstateDTO>();
//
//	    String [] nextLine;
//		try {
//					
//			CSVReader reader = new CSVReader(new FileReader("Scramentorealestatetransactions.csv"));
//			reader.;
//
//			while (reader.readRecord())
//			{
//				RealEstateDTO reObj = new RealEstateDTO();
//				
//				String street = reader.get("street");
//				reObj.setStreet(street);
//				String city = reader.get("city");
//				reObj.setCity(city);
//				int zip = reader.get("zip");
//				reObj.setCity(city);
//				String state = reader.get("state");
//				reObj.setState(state);
//				int beds = reader.get("beds");
//				reObj.setBeds(beds);
//				int baths = reader.get("baths");
//				reObj.setBaths(baths);
//				int strsq__ft = reader.get("sq__ft");
//				reObj.setSq__ft(strsq__ft);
//				String type = reader.get("type");
//				reObj.setType(type);
//				Timestamp sale_date = reader.get("sale_date");
//				reObj.setSale_date(sale_date);
//				int price = reader.get("price");
//				reObj.setPrice(price);
//				double latitude = reader.get("latitude");
//				reObj.setLatitude(latitude);
//				double longitude = reader.get("longitude");
//				reObj.setLongitude(longitude);
//
//				dataArray.add(reObj);
//				
//			}
//	
//			reader.close();
//			
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		
//		dataArray.toString();
//		
//	}
//
//
//	
//	ArrayList<RealEstateDTO> dataArray = new ArrayList<RealEstateDTO>();
//
//	 CSVReader reader = new CSVReader(new FileReader("Scramentorealestatetransactions.csv"));
//     String [] nextLine;
//     while ((nextLine = reader.readNext()) != null) {
//        // nextLine[] is an array of values from the line
//        System.out.println(nextLine[0] + nextLine[1] + "etc...");
//     }
//
//	
//	JSONObject jo = new JSONObject();
//	jo.put("firstName", "John");
//	jo.put("lastName", "Doe");
//
//	JSONArray ja = new JSONArray();
//	ja.put(jo);
//
//	JSONObject mainObj = new JSONObject();
//	mainObj.put("employees", ja);
//
//
//
//}
