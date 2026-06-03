package server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import dao.RentDAO;
import model.Rent;

import java.io.*;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

public class AddRentHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange)
            throws IOException {

        if (!exchange.getRequestMethod()
                .equalsIgnoreCase("POST")) {

            exchange.sendResponseHeaders(405, -1);
            return;
        }

        BufferedReader br =
                new BufferedReader(
                        new InputStreamReader(
                                exchange.getRequestBody()));

        String data = br.readLine();

        String[] parts = data.split("&");

        String studentName =
                URLDecoder.decode(
                        parts[0].split("=")[1],
                        StandardCharsets.UTF_8);

        String month =
                URLDecoder.decode(
                        parts[1].split("=")[1],
                        StandardCharsets.UTF_8);

        double amount =
                Double.parseDouble(
                        URLDecoder.decode(
                                parts[2].split("=")[1],
                                StandardCharsets.UTF_8));

        String status =
                URLDecoder.decode(
                        parts[3].split("=")[1],
                        StandardCharsets.UTF_8);

        Rent rent = new Rent();

        rent.setStudentName(studentName);
        rent.setMonth(month);
        rent.setAmount(amount);
        rent.setStatus(status);

        RentDAO dao = new RentDAO();

        boolean result = dao.addRent(rent);

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