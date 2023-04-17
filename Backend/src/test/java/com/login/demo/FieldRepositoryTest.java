package com.login.demo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.login.demo.entity.Field;
import com.login.demo.entity.User;
import com.login.demo.repository.FieldRepository;
import com.login.demo.repository.UserRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)

public class FieldRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private FieldRepository repo1;

    @Test
    public void testcreatefield() {

        Field field1 = new Field();
        field1.setFid(7);
        field1.setFieldname("SOR");

        Field sVField = repo1.save(field1);

        Field exField = entityManager.find(Field.class, sVField.getFid());

        assertThat(field1.getFid()).isEqualTo(exField.getFid());

    }

}