package com.login.demo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.login.demo.entity.User;
import com.login.demo.repository.UserRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository repo;

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setUid(5);
        user.setFirstname("kMl");
        user.setLastname("dhfhfhh");
        user.setEmail("hshshsh@gmail.com");
        user.setField(1);
        user.setUsertype("student");

        User savedUser = repo.save(user);

        User existUser = entityManager.find(User.class, savedUser.getUid());

        assertThat(user.getUid()).isEqualTo(existUser.getUid());

    }

}
