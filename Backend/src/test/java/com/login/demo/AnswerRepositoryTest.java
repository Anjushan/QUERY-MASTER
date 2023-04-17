package com.login.demo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.login.demo.entity.Answer;
import com.login.demo.repository.AnswerRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class AnswerRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private AnswerRepository repo3;

    @Test
    public void testcreateanswer() {

        Answer a1 = new Answer();
        a1.setaid(2);
        a1.setanswer("springboot is used in backend");
        a1.increasevote();

        Answer savAnswer = repo3.save(a1);

        Answer exAnswer = entityManager.find(Answer.class, savAnswer.getaid());

        assertThat(a1.getaid()).isEqualTo(exAnswer.getaid());

    }

}
