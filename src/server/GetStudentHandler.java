package server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import dao.StudentDAO;
import model.Student;

import java.io.IOException;
import java.io.OutputStream;

public class GetStudentHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange)
            throws IOException {

        String query =
                exchange.getRequestURI().getQuery();

        String name =
                query.split("=")[1];

        StudentDAO dao =
                new StudentDAO();

        Student student =
                dao.getStudentByName(name);

        String response = "";

        if(student != null) {

            response =
                    student.getId() + "," +
                    student.getName() + "," +
                    student.getAge() + "," +
                    student.getRoomNo() + "," +
                    student.getContact() + "," +
                    student.getPassword();
        }

        exchange.sendResponseHeaders(
                200,
                response.length());

        OutputStream os =
                exchange.getResponseBody();

        os.write(response.getBytes());

        os.close();
    }
}