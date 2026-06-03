package database;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {

    public static Connection getConnection() {
        try {
            String url = "jdbc:mysql://localhost:3306/hostel_management";
            String user = "root";
            String password = "Samradhi@19";

            Connection con = DriverManager.getConnection(url, user, password);

            System.out.println("Database Connected Successfully!");
            return con;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
