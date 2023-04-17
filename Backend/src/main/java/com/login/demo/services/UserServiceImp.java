package com.login.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.login.demo.entity.User;
import com.login.demo.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {

    private UserRepository userRepository;

    public UserServiceImp(UserRepository uRepository) {
        this.userRepository = uRepository;
    }

    @Override
    public List<User> findAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

    @Override
    public Optional<User> findUserById(Integer uid) {
        Optional<User> user = userRepository.findById(uid);
        new ResponseEntity<>(HttpStatus.OK);
        return user;
    }

    @Override
    public ResponseEntity<?> loginUser(String email, String password) {
        User user = userRepository.getUserByEmail(email);
        if (user != null) {
            if (user.getPassword().equals(password))

                return new ResponseEntity<>(
                        new User(
                                user.getUid(),
                                user.getFirstname(),
                                user.getLastname(),
                                user.getEmail(),
                                user.getUsertype(),
                                user.getField()
                        ),HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> registeruser(User newUser) {
        User user = userRepository.getUserByEmail(newUser.getEmail());
        if (user != null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } else {
            newUser = userRepository.save(newUser);
            return new ResponseEntity<>(newUser, HttpStatus.OK);
        }
    }

    @Override
    public List<User> selectUserByTeacher(){
        List<User> users =  userRepository.selectTeacher();
        return users;
    }
}
