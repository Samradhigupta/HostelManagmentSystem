package server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import dao.StudentDAO;
import model.Student;

import java.io.*;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

public class UpdateStudentHandler
        implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange)
            throws IOException {

        BufferedReader br =
                new BufferedReader(
                        new InputStreamReader(
                                exchange.getRequestBody()));

        String data =
                br.readLine();

        String[] parts =
                data.split("&");

        String name =
                URLDecoder.decode(
                        parts[0].split("=")[1],
                        StandardCharsets.UTF_8);

        int age =
                Integer.parseInt(
                        parts[1].split("=")[1]);

        int roomNo =
                Integer.parseInt(
                        parts[2].split("=")[1]);

        String contact =
                URLDecoder.decode(
                        parts[3].split("=")[1],
                        StandardCharsets.UTF_8);

        String password =
                URLDecoder.decode(
                        parts[4].split("=")[1],
                        StandardCharsets.UTF_8);

        Student student =
                new Student();

        student.setName(name);
        student.setAge(age);
        student.setRoomNo(roomNo);
        student.setContact(contact);
        student.setPassword(password);

        StudentDAO dao =
                new StudentDAO();

        boolean result =
                dao.updateStudent(student);

        String response =
                result ? "SUCCESS" : "FAILED";

        exchange.sendResponseHeaders(
                200,
                response.length());

        OutputStream os =
                exchange.getResponseBody();

        os.write(response.getBytes());

        os.close();
    }
}