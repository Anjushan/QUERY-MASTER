package com.login.demo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.login.demo.entity.Question;
import com.login.demo.repository.QuestionRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class QuestionRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private QuestionRepository repo2;

    @Test
    public void testcreatequestion() {

        Question q1 = new Question();
        q1.setqid(2);
        q1.setquestion("what is springboot");
        q1.increasevote();

        Question savQuestion = repo2.save(q1);

        Question exQuestion = entityManager.find(Question.class, savQuestion.getqid());

        assertThat(q1.getqid()).isEqualTo(exQuestion.getqid());

    }

}
