import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
// import java.io.CSV;

// import java.io.File;
// import java.io.FileWriter;
// import java.io.IOException;
// import java.util.Scanner;

// public class Files {
//     private static Scanner input;

//     public static void main(String[] args) {
//         try{
//             FileWriter f = new FileWriter(new File("outfile"));
//             int x = 6;
//             f.write("Hello " + x + "\n");
//             f.write(1234 + "  goodbye\n");
//             f.close();

//         }
//         catch(IOException e)
//         {
//             System.err.println("Cannot write to file ");
//         }
       

//     //     if(args.length == 0) {
//     //         System.out.println("File name not specified.");
//     //         System.exit(1);
//     //     }

//     //     try {
//     //         File file = new File(args[0]);
//     //         input = new Scanner(file);
//     //     } catch (IOException ioException) {
//     //         System.err.println("Cannot open file.");
//     //         System.exit(1);
//     //     }

//     //     int total = 0;
//     //     while (input.hasNext()) {
//     //         total += 1;
//     //         input.next();
//     //     }

//     //     System.out.printf("The total number of words is: %d", total);

//     //     input.close();
//     }
// }
class Files {
    public static void writeDataLineByLine(String filePath)
{
	// first create file object for file placed at location
	// specified by filepath
	File file = new File(filePath);
	try {
		// create FileWriter object with file as parameter
		FileWriter outputfile = new FileWriter(file);

		// create CSVWriter object filewriter object as parameter
		CSVWriter writer = new CSVWriter(outputfile);

		// adding header to csv
		String[] header = { "Name", "Class", "Marks" };
		writer.writeNext(header);

		// add data to csv
		String[] data1 = { "Aman", "10", "620" };
		writer.writeNext(data1);
		String[] data2 = { "Suraj", "10", "630" };
		writer.writeNext(data2);

		// closing writer connection
		writer.close();
	}
	catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}

}
