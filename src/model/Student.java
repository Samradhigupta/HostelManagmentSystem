package model;

public class Student{

    private int id;
    private String name;
    private int age;
    private int roomNo;
    private String contact;
    private String password;


    public Student() {}

    public Student(int id, String name, int age, int roomNo, String contact) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.roomNo = roomNo;
        this.contact = contact;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public int getRoomNo() { return roomNo; }
    public void setRoomNo(int roomNo) { this.roomNo = roomNo; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }
    public String getPassword() {
    return password;
}

public void setPassword(String password) {
    this.password = password;
}
}

