package com.example.secondproject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "login";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/admin-dashboard")
    public String adminDashboard() {
        return "admin-dashboard";
    }

    @GetMapping("/user-dashboard")
    public String userDashboard() {
        return "user-dashboard";
    }
    
    @GetMapping("/signup")
    public String signup() {
        return "signup";
    }
    @GetMapping("/student-portal")
    public String studentPortal() {
        return "student-portal";
    }

    @GetMapping("/student-login")
    public String studentLogin() {
    return "student-login";
    }

}