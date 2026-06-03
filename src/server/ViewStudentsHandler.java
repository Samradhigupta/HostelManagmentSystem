package server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import dao.StudentDAO;
import model.Student;

import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

public class ViewStudentsHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange)
            throws IOException {

        StudentDAO dao =
                new StudentDAO();

        List<Student> students =
                dao.getAllStudents();

        StringBuilder response =
                new StringBuilder();

        for(Student s : students) {

            response.append(
                    s.getId()).append(",")

                    .append(
                            s.getName()).append(",")

                    .append(
                            s.getAge()).append(",")

                    .append(
                            s.getRoomNo()).append(",")

                    .append(
                            s.getContact())

                    .append("\n");
        }

        exchange.sendResponseHeaders(
                200,
                response.toString().length());

        OutputStream os =
                exchange.getResponseBody();

        os.write(
                response.toString().getBytes());

        os.close();
    }
}