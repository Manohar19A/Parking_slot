// import java.util.Scanner;

public class ParkingSystems {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        
        // Initialize base cases
        for (int i = 0; i < m; i++) {
            dp[i][0] = 1;
        }
        for (int j = 0; j < n; j++) {
            dp[0][j] = 1;
        }
        
        // Compute dynamic programming values
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
        
        // Return the final answer
        return dp[m-1][n-1];
    }
    
    // private boolean[][] parkingLot;
    // private int numFloors;
    // private int numSpacesPerFloor;
    // private int availableSpaces;

    // public ParkingSystems(int numFloors, int numSpacesPerFloor) {
    //     this.numFloors = numFloors;
    //     this.numSpacesPerFloor = numSpacesPerFloor;
    //     this.availableSpaces = numFloors * numSpacesPerFloor;
    //     this.parkingLot = new boolean[numFloors][numSpacesPerFloor];
    //     for (int i = 0; i < numFloors; i++) {
    //         for (int j = 0; j < numSpacesPerFloor; j++) {
    //             this.parkingLot[i] = new boolean[numSpacesPerFloor];
    //         }
    //     }
    // }

    // public boolean isParkingFull() {
    //     return availableSpaces == 0;
    // }

    // public boolean parkCar() {
    //     if (isParkingFull()) {
    //         return false;
    //     }
    //     for (int i = 0; i < numFloors; i++) {
    //         // for (int j = 0; j < numSpacesPerFloor; j++) {
    //             for (int k = 0; k < numSpacesPerFloor; k++) {
    //                 if (!parkingLot[i][k]) {
    //                     parkingLot[i][k] = true;
    //                     availableSpaces--;
    //                     System.out.println("Car parked at floor " + (i+1) + " space " + (k+1));
    //                     return true;
    //                 }
    //             }
    //         // }
    //     }
    //     return false;
    // }

    // public boolean leaveCar(int floor, int space) {
    //     if (floor < 1 || floor > numFloors || space < 1 || space > numSpacesPerFloor || !parkingLot[floor-1][space-1]) {
    //         return false;
    //     }
    //     parkingLot[floor-1][space-1] = false;
    //     availableSpaces++;
    //     System.out.println("Car left floor " + floor + " space " + space);
    //     return true;
    // }
    // public int getAvailable() {
    //     return availableSpaces;
    // }

    // public static void main(String[] args) {
    //     Scanner scanner = new Scanner(System.in);
    //     System.out.print("Enter number of floors: ");
    //     int numFloors = scanner.nextInt();
    //     System.out.print("Enter parking lot capacity: ");
    //     int numSpacesPerFloor = scanner.nextInt();
    //     ParkingSystems parkingSystem = new ParkingSystems(numFloors, numSpacesPerFloor);
    //     while (true) {
    //         System.out.print("Enter command (park/leave/count/exit): ");
    //         String command = scanner.next();
    //         if (command.equals("park")) {
    //             if (!parkingSystem.parkCar()) {
    //                 System.out.println("Sorry, parking lot is full.");
    //             }
    //         } else if (command.equals("leave")) {
    //             System.out.print("Enter floor number: ");
    //             int floor = scanner.nextInt();
    //             // System.out.print("Enter row number: ");
    //             // int row = scanner.nextInt();
    //             System.out.print("Enter space number: ");
    //             int space = scanner.nextInt();
    //             if (!parkingSystem.leaveCar(floor, space)) {
    //                 System.out.println("Invalid floor/row/space number or space is already empty.");
    //             }
    //         }
    //         else if (command.equals("count")) {
    //             System.out.print("Parking slots left: " + parkingSystem.getAvailable() + "\n");

    //         } else if (command.equals("exit")) {
    //             System.out.println("ThankYou!");
    //             break;
    //         } else {
    //             System.out.println("Invalid Command");
                
    //         }
    //     }
    //     scanner.close();
    // }
}

        
