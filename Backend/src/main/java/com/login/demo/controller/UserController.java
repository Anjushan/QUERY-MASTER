package com.login.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.login.demo.entity.User;
import com.login.demo.services.UserService;

@RestController
@RequestMapping("demo")
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    private UserService userservice;

    @GetMapping(value = "/users")
    public List<User> GetUsers() {
        return userservice.findAllUsers();
    }

    @GetMapping(value = "/users/{uid}")
    public Optional<User> FindUserById(@PathVariable Integer uid){
        Optional<User> user = userservice.findUserById(uid);
        return user;
    }

    @GetMapping(value = "/users/teachers")
    public List<User> selectUserByType(){
        return userservice.selectUserByTeacher();
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> signinAdmin(@RequestBody User body) {
        return userservice.loginUser(body.getEmail(), body.getPassword());
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> adduser(@RequestBody User user) {
        return userservice.registeruser(user);
    }

}
