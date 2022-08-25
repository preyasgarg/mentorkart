// package com.project.maintenant;
//
// import com.project.maintenant.model.entities.Mentee;
// import com.project.maintenant.services.MenteeEntityService;
// import lombok.extern.slf4j.Slf4j;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.junit.jupiter.api.Test;
// import static org.junit.jupiter.api.Assertions.*;
//
// import java.util.HashMap;
//
//
// @SpringBootTest
// @Slf4j
// class MaintenantApplicationTests {
//
//     private static final Logger logger = LoggerFactory.getLogger(MaintenantApplicationTests.class);
//
//     @Autowired
//     private MenteeEntityService menteeEntityService;
//     @Test
//     void contextLoads() {
//     }
//
//     @Test
//     public void positiveTestPrimaryUserAuthentication()
//     {
//         logger.info("[INFO]: inside positiveTestPrimaryUserAuthentication()");
////         Map userdetails = new UserEntity();
////         userdetails.setUsername("admin");
//         HashMap<String, Object> userdetails = new HashMap<>();
//         userdetails.put("username", "test");
//         userdetails.put("password", "test");
//         Mentee mentee = menteeEntityService.login(userdetails);
//         if (mentee!=null)
//            logger.info("[INFO]: Admin loggin check -> Failed");
//         else
//             logger.info("[INFO] : Admin login check successful!");
//
//         assertNotEquals(mentee, null);
//     }
//
// }
