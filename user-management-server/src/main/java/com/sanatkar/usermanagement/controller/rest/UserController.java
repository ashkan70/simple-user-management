package com.sanatkar.usermanagement.controller.rest;

import com.sanatkar.usermanagement.model.entity.User;
import com.sanatkar.usermanagement.model.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * @author ashkan
 * @version 1.0
 * @since 2019-03-13
 */

@RestController
@RequestMapping("/api")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users/{id}")
    public Optional<User> getUser(@PathVariable Long id) {
        return userRepository.findById(id);
    }

    @GetMapping("/users")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }


    @PostMapping("/users")
    public void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @PutMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public void updateUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

}
