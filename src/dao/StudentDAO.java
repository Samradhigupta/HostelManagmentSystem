package dao;

import database.DBConnection;
import model.Student;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class StudentDAO {

    // Add Student
    public boolean addStudent(Student student) {

        try {

            Connection con = DBConnection.getConnection();

            String sql =
                    "INSERT INTO students(name, age, room_no, contact, password) VALUES(?,?,?,?,?)";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, student.getName());
            ps.setInt(2, student.getAge());
            ps.setInt(3, student.getRoomNo());
            ps.setString(4, student.getContact());
            ps.setString(5, student.getPassword());

            return ps.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    // Student Login
    public boolean loginStudent(String name, String password) {

        try {

            Connection con = DBConnection.getConnection();

            String sql =
                    "SELECT * FROM students WHERE name=? AND password=?";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, name);
            ps.setString(2, password);

            ResultSet rs = ps.executeQuery();

            return rs.next();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    // Get Student By Name
    public Student getStudentByName(String name) {

        try {

            Connection con = DBConnection.getConnection();

            String sql =
                    "SELECT * FROM students WHERE name=?";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, name);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {

                Student student = new Student();

                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setAge(rs.getInt("age"));
                student.setRoomNo(rs.getInt("room_no"));
                student.setContact(rs.getString("contact"));
                student.setPassword(rs.getString("password"));

                return student;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    // View All Students
    public List<Student> getAllStudents() {

        List<Student> students = new ArrayList<>();

        try {

            Connection con = DBConnection.getConnection();

            String sql = "SELECT * FROM students";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                Student student = new Student();

                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setAge(rs.getInt("age"));
                student.setRoomNo(rs.getInt("room_no"));
                student.setContact(rs.getString("contact"));
                student.setPassword(rs.getString("password"));

                students.add(student);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return students;
    }

    // Update Student
    public boolean updateStudent(Student student) {

        try {

            Connection con = DBConnection.getConnection();

            String sql =
                    "UPDATE students SET age=?, room_no=?, contact=?, password=? WHERE name=?";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setInt(1, student.getAge());
            ps.setInt(2, student.getRoomNo());
            ps.setString(3, student.getContact());
            ps.setString(4, student.getPassword());
            ps.setString(5, student.getName());

            return ps.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    // Delete Student
    public boolean deleteStudent(String name) {

        try {

            Connection con = DBConnection.getConnection();

            String sql =
                    "DELETE FROM students WHERE name=?";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, name);

            return ps.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    // Total Students
    public int getStudentCount() {

        try {

            Connection con = DBConnection.getConnection();

            String sql =
                    "SELECT COUNT(*) FROM students";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return rs.getInt(1);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return 0;
    }
}