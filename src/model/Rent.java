package model;

public class Rent {

    private int id;
    private String studentName;
    private String month;
    private double amount;
    private String status;

    public Rent() {
    }

    public Rent(int id,
                String studentName,
                String month,
                double amount,
                String status) {

        this.id = id;
        this.studentName = studentName;
        this.month = month;
        this.amount = amount;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}