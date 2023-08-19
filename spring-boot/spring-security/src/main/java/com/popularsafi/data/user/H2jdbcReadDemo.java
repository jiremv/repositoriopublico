package com.popularsafi.data.user;
import com.popularsafi.data.Conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class H2jdbcReadDemo {

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try {
            conn = Conexion.getConnection();
            // STEP 3: Execute a query
            System.out.println("Connected database successfully...");
            stmt = conn.createStatement();
            String sql = "SELECT id, email, password, username FROM USERS";
            ResultSet rs = stmt.executeQuery(sql);

            // STEP 4: Extract data from result set
            while(rs.next()) {
                // Retrieve by column name
                int id  = rs.getInt("id");
                String first = rs.getString("EMAIL");
                String last = rs.getString("PASSWORD");
                String username = rs.getString("USERNAME");

                // Display values
                System.out.print("ID: " + id);
                System.out.print(", EMAIL: " + first);
                System.out.println(", PASSWORD: " + last);
                System.out.println(", username: " + username);
            }
            // STEP 5: Clean-up environment
            rs.close();
        } catch(SQLException se) {
            // Handle errors for JDBC
            se.printStackTrace();
        } catch(Exception e) {
            // Handle errors for Class.forName
            e.printStackTrace();
        } finally {
            // finally block used to close resources
            try {
                if(stmt!=null) stmt.close();
            } catch(SQLException se2) {
            } // nothing we can do
            try {
                if(conn!=null) conn.close();
            } catch(SQLException se) {
                se.printStackTrace();
            } // end finally try
        } // end try
        System.out.println("Goodbye!");
    }
}