package server;

import com.sun.net.httpserver.HttpServer;

import java.net.InetSocketAddress;

public class HostelServer {

    public static void main(String[] args) {

        try {

            HttpServer server =
                    HttpServer.create(
                            new InetSocketAddress(8080),
                            0);

            // Login
            server.createContext(
                    "/login",
                    new LoginHandler());

            // Student Profile
            server.createContext(
                    "/student",
                    new StudentHandler());

            // Add Student
            server.createContext(
                    "/addStudent",
                    new AddStudentHandler());
                    //Add employee

            server.createContext(
                  "/addEmployee",
                  new AddEmployeeHandler());
                 //Add Room
                  server.createContext(
        "/addRoom",
        new AddRoomHandler());
        //Add Facility
        server.createContext(
        "/addFacility",
        new AddFacilityHandler());
        //Add Notice
        server.createContext(
        "/addNotice",
        new AddNoticeHandler());
        //Get Notice
        server.createContext(
        "/notices",
        new NoticeHandler());
        //Add Rent
        server.createContext(
        "/addRent",
        new AddRentHandler());
        //Get Rent
        server.createContext(
        "/rent",
        new RentHandler());
        //View Students
        server.createContext(
        "/viewStudents",
        new ViewStudentsHandler());
        //Get Student
        server.createContext(
        "/getStudent",
        new GetStudentHandler());
        //Update Student

server.createContext(
        "/updateStudent",
        new UpdateStudentHandler());
        //Delete Student

server.createContext(
        "/deleteStudent",
        new DeleteStudentHandler());
        //View Employees
        server.createContext(
        "/viewEmployees",
        new ViewEmployeesHandler());
        //Delete Employees
        server.createContext(
        "/deleteEmployee",
        new DeleteEmployeeHandler());
        //Get Employees
        server.createContext(
        "/getEmployee",
        new GetEmployeeHandler());
        //Update Employees
        server.createContext(
        "/updateEmployee",
        new UpdateEmployeeHandler());
        //Veiw Facilities
        server.createContext(
        "/viewFacilities",
        new ViewFacilitiesHandler());
        //Get Facility
server.createContext(
        "/getFacility",
        new GetFacilityHandler());
        //Update Facility
        server.createContext(
        "/updateFacility",
        new UpdateFacilityHandler());
        //Delete Facility

server.createContext(
        "/deleteFacility",
        new DeleteFacilityHandler());
        //View Rooms
        server.createContext(
        "/viewRooms",
        new ViewRoomsHandler());
        //Get Room

server.createContext(
        "/getRoom",
        new GetRoomHandler());
        //Update Room
        server.createContext(
        "/updateRoom",
        new UpdateRoomHandler());
        //Delete Room
server.createContext(
        "/deleteRoom",
        new DeleteRoomHandler());
        //View Notices
        server.createContext(
        "/viewNotices",
        new ViewNoticesHandler());
        //Get Notice

server.createContext(
        "/getNotice",
        new GetNoticeHandler());
        //Update Notice
        server.createContext(
        "/updateNotice",
        new UpdateNoticeHandler());
        //Delete Notice

server.createContext(
        "/deleteNotice",
        new DeleteNoticeHandler());
        //View Rent
        server.createContext(
        "/viewRents",
        new ViewRentsHandler());
        //Get Rent

server.createContext(
        "/getRent",
        new GetRentHandler());
        //Update Rent

server.createContext(
        "/updateRent",
        new UpdateRentHandler());
        //Delete Rent

server.createContext(
        "/deleteRent",
        new DeleteRentHandler());
        

            server.setExecutor(null);


            server.start();

            System.out.println(
                    "Server Running On Port 8080");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}