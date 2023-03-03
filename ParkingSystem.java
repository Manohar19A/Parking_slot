import java.util.Scanner;
import java.io.*;
import java.nio.file.Paths;
import java.util.*;

public class ParkingSystem {
    private boolean[] parkingLot;
    private int capacity;
    private int availableSpaces;

    public ParkingSystem(int capacity) {
        this.capacity = capacity;
        this.availableSpaces = capacity;
        this.parkingLot = new boolean[capacity];
    }

    public boolean isParkingFull() {
        return availableSpaces == 0;
    }

    public boolean parkCar() {
        if (isParkingFull()) {
            return false;
        }
        for (int i = 0; i < capacity; i++) {
            if (!parkingLot[i]) {
                parkingLot[i] = true;
                availableSpaces--;
                System.out.println("Car parked at space " + (i + 1));
                return true;
            }
        }
        return false;
    }

    public boolean leaveCar(int space) {
        if (space < 1 || space > capacity || !parkingLot[space - 1]) {
            return false;
        }
        parkingLot[space - 1] = false;
        availableSpaces++;
        System.out.println("Car left space " + space);
        return true;
    }

    public int getAvailable() {
        return availableSpaces;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter parking lot capacity: ");
        int capacity = scanner.nextInt();
        ParkingSystem parkingSystem = new ParkingSystem(capacity);
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        map.put("length", capacity);
        map.put("available", parkingSystem.getAvailable());
        File file = new File("./data.txt");
        BufferedWriter bf = null;
        try {
            bf = new BufferedWriter(new FileWriter(file));
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                bf.write(entry.getKey() + "=" + entry.getValue());
                bf.newLine();
            }
            bf.flush();

        } catch (IOException e) {
            System.out.println("Exception1");
        } finally {
            try {
                bf.close();
            } catch (IOException e) {
                System.out.println("Exception2");
            }
        }
        
        // String extractedLine = Files.readAllLines(Paths.get("./data.txt")).get(4);
        BufferedReader br = null;
        try{
            br = new BufferedReader(new FileReader(file));
            String line = null;
            
            while((line= br.readLine()) != null){
                System.out.println(line.length());
                // String line32 = (String) FileUtils.readLines(file).get(31);
                // String extractedLine = br.readAllLines(Paths.get("./data.txt")).get(1);
                // String[] parts = line.split("=");

                // // String line32 = (String) FileUtils .readLines(file).get(31);
                // // System.out.println("line 81"+line.charAt(7));
                // System.out.println("line 83 "+parts[1]);
                // br.n
            }
            
        }
        catch(IOException e){
            System.out.println("Exception3");
        }
        while (true) {
            System.out.print("Enter command (park/leave/count/exit): ");
            String command = scanner.next();
            if (command.equals("park")) {
                if (!parkingSystem.parkCar()) {
                    System.out.println("Sorry, parking lot is full.");
                }
            } else if (command.equals("leave")) {
                System.out.print("Enter space number: ");
                int space = scanner.nextInt();
                if (!parkingSystem.leaveCar(space)) {
                    System.out.println("Invalid space number or space is already empty.");
                }
            } else if (command.equals("count")) {
                System.out.print("Park slots left: " + parkingSystem.getAvailable() + "\n");

            } else if (command.equals("exit")) {
                break;
            } else {
                System.out.println("Invalid command.");
            }
        }
        scanner.close();
    }
}
