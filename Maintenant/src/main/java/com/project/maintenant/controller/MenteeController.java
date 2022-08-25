package com.project.maintenant.controller;

import com.project.maintenant.model.entities.Mentee;
import com.project.maintenant.model.entities.Mentor;
import com.project.maintenant.model.entities.Response;
import com.project.maintenant.services.MenteeEntityService;
import com.project.maintenant.services.MentorEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins="*")
//@CrossOrigin(origins = "http://localhost:56629/")
public class MenteeController
{
    private static final Logger logger = LoggerFactory.getLogger(MenteeController.class);
@Autowired
private MenteeEntityService menteeEntityService;
@Autowired
private MentorEntityService mentorEntityService;

//    @PostMapping("/registermentee")
////    @CrossOrigin(origins="*")
//    public Mentee registerMentee(@RequestBody Map<String, Object> payload) throws Exception
//    {
//
//        String tempEmailId = (String)payload.get("email");
//
//        if(tempEmailId!=null && !"".equals(tempEmailId))
//        {
//            Mentee menteeobj = menteeEntityService.fetchMenteeByEmailId(tempEmailId);
//            if(menteeobj!=null)
//            {
//                throw new Exception("mentee with "+tempEmailId+" already present");
//            }
//        }
//
//        Mentee menteeobj=null;
//        menteeobj = menteeEntityService.addMentee(payload);
//        return menteeobj;
//    }

    @PostMapping("/registermentee")
    public ResponseEntity<?> addMentee(@RequestBody Map<String, Object> payload) throws Exception{
        System.out.println("in register mentee api: REGISTER");
        Mentee mentee = menteeEntityService.addMentee(payload);
        return  ResponseEntity.ok(mentee);
    }


//    @PostMapping("/menteelogin")
////    @CrossOrigin(origins="*")
//    public Mentee loginMentee(@RequestBody Map<String, Object> payload) throws Exception
//    {
//        String tempEmailId = (String)payload.get("email");
//        System.out.println(tempEmailId);
//        String tempPass= (String)payload.get("password");
//        System.out.println(tempPass);
//        Mentee menteeobj=null;
//        if(tempEmailId!=null && tempPass!=null)
//        {
//            menteeobj =  menteeEntityService.fetchMenteeByEmailIdAndPassword(tempEmailId,tempPass);
//        }
//        if(menteeobj==null)
//        {
//            throw new Exception("incorrect credentials");
//        }
//        return menteeobj;
//    }

    @PostMapping("/mentee/login")
    public ResponseEntity<?> login(@RequestBody Map<String,Object> payload){
        logger.info("Inside mentee logged in");
        if (menteeEntityService.login(payload)!=null){
            logger.info("Mentee logged in successfully!");
            return ResponseEntity.ok(menteeEntityService.login(payload));
        }
        else
            return null;
    }

//    @GetMapping("/allmentee")
////    @CrossOrigin(origins="*")
//   public List<Mentee> findAllMentee()
//   {
//       return menteeEntityService.getMentees();
//   }
@RequestMapping("/getallmentees")
public ResponseEntity<?> getAllMentees(){

    System.out.println("In get all mentee api");
    List<Mentee> mentees = menteeEntityService.getAllMentees();
    return ResponseEntity.ok(mentees);
}

    @RequestMapping("/getmymentors/{id}")
    public ResponseEntity<?> getMyMentors(@RequestBody Map<String,Object> payload,@PathVariable Long id){

        System.out.println("In get all mentee api");
        List<Mentor> mentorList = menteeEntityService.getMyMentors(payload, id);
        return ResponseEntity.ok(mentorList);
    }

//    @GetMapping("/allmentee/{id}")
////    @CrossOrigin(origins="*")
//   public  Mentee findMenteeById(@PathVariable Long id)
//   {
//       return menteeEntityService.getMenteeById(id);
//   }
@RequestMapping(value="/allmentee/{id}")
public ResponseEntity<?> findMenteeById(@PathVariable Long id){
    System.out.println("in get mentee with id api");
    Mentee mentee = menteeEntityService.getMenteeById1(id);
    return ResponseEntity.ok(mentee);
}

//   @GetMapping("/allmentees")
////   @CrossOrigin(origins="*")
//   public List<Mentee> getAllMentees()
//   {
//       return menteeEntityService.getMentees();
//   }
//@RequestMapping(value="/allmentees")
//public ResponseEntity<?> allMentees(@PathVariable Long id) {
//    System.out.println("in get complaint api");
//    Mentee mentee = menteeEntityService.getMenteeById(id);
//    return ResponseEntity.ok(mentee);
//}
   //doubt
//   @PutMapping("/menteeupdate")
////   @CrossOrigin(origins="*")
//   public Mentee updateMentee(@RequestBody Mentee mentee)
//   {
//       return menteeEntityService.updateMentee(mentee);
//   }
   @RequestMapping(value="/updatementee/{id}", method = RequestMethod.POST)
   public ResponseEntity<?> updateMentee(@RequestBody Map<String,Object> payload, @PathVariable Long id) throws Exception{
       System.out.println("in update mentee  api");
       System.out.println("id is "+ id);
       Mentee mentee = menteeEntityService.updateMentee1(payload,id);
       return  ResponseEntity.ok(mentee);
   }

//   @DeleteMapping("/menteedelete/{id}")
////   @CrossOrigin(origins="*")
//   public String deleteMentee(@PathVariable Long id)
//   {
//       return menteeEntityService.deleteMentee(id);
//   }
@RequestMapping(value="/deletementee/{id}")
public ResponseEntity<?> deleteMentee(@PathVariable Long id) throws Exception{
    System.out.println("in delete mentee api");
    String res = menteeEntityService.deleteMentee1(id);
    return  ResponseEntity.ok(new Response(res));
}

//    @GetMapping("/allmentors")
////    @CrossOrigin(origins="*")
//    public List<Mentor> getAllMentors()
//    {
//        return mentorEntityService.getMentors();
//    }
@RequestMapping(value="/listAllMentors/{menteeid}")
public ResponseEntity<?> getAllMentors(@PathVariable Long menteeid) {
    System.out.println("in get all mentors inside mentee api");
    List<Mentor> mentorList = menteeEntityService.getAllMentors(menteeid);
    return ResponseEntity.ok(mentorList);
}
//    @PutMapping("/addmentor/{menteeid}/{mentorid}")
//    public Mentor addMentor(@PathVariable Long menteeid,
//                            @PathVariable Long mentorid)
//    {
//        return menteeEntityService.addMentor(menteeid,mentorid);
//    }
//    @PutMapping("/deletementor/{menteeid}/{mentorid}")
//    public Mentee deleteMentor(@PathVariable Long menteeid,
//                            @PathVariable Long mentorid)
//    {
//        return menteeEntityService.deleteMentor(menteeid,mentorid);
//    }

    @RequestMapping(value="/otherthanmymentor/{menteeid}")
    public ResponseEntity<?> otherthanmymentor(@PathVariable Long menteeid)
    {
        System.out.println("here");
        List<Mentor> mentorList = menteeEntityService.getAllMentors1(menteeid);
        return ResponseEntity.ok(mentorList);
    }
    @RequestMapping(value = "/updatementeebalance/{menteeid}/{balance}")
    public ResponseEntity<?> updatementeebalance(@PathVariable Long menteeid,@PathVariable Integer balance)
    {
        String res = menteeEntityService.updateBalance(menteeid,balance);
        return ResponseEntity.ok(new Response(res));
    }




}
