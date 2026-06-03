package server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import dao.StudentDAO;

import java.io.IOException;
import java.io.OutputStream;

public class DeleteStudentHandler
        implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange)
            throws IOException {

        String query =
                exchange.getRequestURI().getQuery();

        String name =
                query.split("=")[1];

        StudentDAO dao =
                new StudentDAO();

        boolean result =
                dao.deleteStudent(name);

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