package com.project.maintenant.controller;


import com.project.maintenant.model.entities.Mentee;
import com.project.maintenant.model.entities.Mentor;
import com.project.maintenant.model.entities.Response;
import com.project.maintenant.services.MentorEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins="*")
public class MentorController
{

    @Autowired
    private MentorEntityService mentorEntityService;

//    @PostMapping("/registermentor")
//    @CrossOrigin(origins="*")
//    public Mentor registerMentor(@RequestBody Mentor mentor) throws Exception
//    {
//
//        String tempEmailId = mentor.getEmail();
//
//        if(tempEmailId!=null && !"".equals(tempEmailId))
//        {
//            Mentor mentorobj = mentorEntityService.fetchMentorByEmailId(tempEmailId);
//            if(mentorobj!=null)
//            {
//                throw new Exception("mentor with "+tempEmailId+" already present");
//            }
//        }
//
//        Mentor mentorobj=null;
//        mentorobj = mentorEntityService.saveMentor(mentor);
//        return mentorobj;
//    }

    @PostMapping("/registermentor")
    public ResponseEntity<?> addMentor(@RequestBody Map<String, Object> payload) throws Exception{
        System.out.println("in register mentor api: REGISTER");
        Mentor mentor = mentorEntityService.addMentor(payload);
        return  ResponseEntity.ok(mentor);
    }

//    @PostMapping("/mentorlogin")
//    @CrossOrigin(origins="*")
//
//    public Mentor loginMentor(@RequestBody Mentor mentor) throws Exception
//    {
//        String tempEmailId=mentor.getEmail();
//        String tempPass=mentor.getPassword();
//        Mentor mentorobj=null;
//        if(tempEmailId!=null && tempPass!=null)
//        {
//            mentorobj =  mentorEntityService.fetchMentorByEmailIdAndPassword(tempEmailId,tempPass);
//        }
//        if(mentorobj==null)
//        {
//            throw new Exception("incorrect credentials");
//        }
//        return mentorobj;
//    }
@PostMapping("/mentor/login")
public ResponseEntity<?> login(@RequestBody Map<String,Object> payload){
    if (mentorEntityService.login(payload) != null){
        return ResponseEntity.ok(mentorEntityService.login(payload));
    }
    else
        return null;
    }

//    @GetMapping("/allmentor")
//    @CrossOrigin(origins="*")
//    public List<Mentor> findAllMentor()
//    {
//        return mentorEntityService.getMentors();
//    }
@RequestMapping("/getallmentors")
public ResponseEntity<?> getAllMentors(){

    System.out.println("In get all mentors api");
    List<Mentor> mentors = mentorEntityService.getAllMentors();
    return ResponseEntity.ok(mentors);
}

//    @GetMapping("/allmentor/{id}")
//    @CrossOrigin(origins="*")
//    public  Mentor findMentorById(@PathVariable Long id)
//    {
//        return mentorEntityService.getMentorById(id);
//    }
@RequestMapping(value="/allmentor/{id}")
public ResponseEntity<?> findMentorById(@PathVariable Long id){
    System.out.println("in get mentor with id api");
    Mentor mentor = mentorEntityService.getMentorById1(id);
    return ResponseEntity.ok(mentor);
}
//    @PutMapping("/mentorupdate")
//    @CrossOrigin(origins="*")
//    public Mentor updateMentor(@RequestBody Mentor mentor)
//    {
//        return mentorEntityService.updateMentor(mentor);
//    }
@RequestMapping(value="/updatementor/{id}", method = RequestMethod.POST)
public ResponseEntity<?> updateMentor(@RequestBody Map<String,Object> payload, @PathVariable Long id) throws Exception{
    System.out.println("in update mentor api");
    Mentor mentor = mentorEntityService.updateMentor1(payload,id);
    return  ResponseEntity.ok(mentor);
}
//    @DeleteMapping("/mentordelete/{id}")
//    @CrossOrigin(origins="*")
//    public String deleteMentor(@PathVariable Long id)
//    {
//        return mentorEntityService.deleteMentor(id);
//    }
@RequestMapping(value="/deletementor/{id}")
    public ResponseEntity<?> deleteMentor(@PathVariable Long id) throws Exception{
        System.out.println("in delete mentor api");
        String res = mentorEntityService.deleteMentor1(id);
        return  ResponseEntity.ok(new Response(res));
    }
//    @PutMapping("/addmentor/{mentorid}/{menteeid}")
//    @CrossOrigin(origins="*")
//    public Mentor addMentor(@PathVariable Long menteeid,
//                            @PathVariable Long mentorid)
//    {
//        return mentorEntityService.addMentor(menteeid,mentorid);
//    }
@RequestMapping(value="/addmentor/{mentorid}/{menteeid}")
public ResponseEntity<?> addmentors(@PathVariable Long mentorid,@PathVariable Long menteeid) throws Exception {
        System.out.println("******************In add mentor********************");
        Mentor mentor =  mentorEntityService.addMentor1(mentorid,menteeid);
    return ResponseEntity.ok(mentor);
}
//    @GetMapping("/mentor/{id}")
//    public  List<Mentee> findAllMentees(@PathVariable Long id)
//    {
//        return mentorEntityService.getAllMentees(id);
//    }
//    @GetMapping("/mymentees/{mentorid}")
//    @CrossOrigin(origins="*")
//    public List<Mentee> mymentees(@PathVariable Long mentorid)
//    {
//
//        List<Mentee> mymentees = mentorEntityService.getAllMentees(mentorid);
//        return mymentees;
//
//    }
@RequestMapping(value="/mymentees/{mentorid}")
public ResponseEntity<?> mymentees(@PathVariable Long mentorid){
    System.out.println("in get list of mentees of that mentor api");
    List<Mentee> mymenteess = mentorEntityService.getAllMentees1(mentorid);
     return ResponseEntity.ok(mymenteess);

}
//    @PutMapping("/deletementor/{mentorid}/{menteeid}")
//    @CrossOrigin(origins="*")
//    public Mentor deleteMentor(@PathVariable Long menteeid,
//                            @PathVariable Long mentorid)
//    {
//        return mentorEntityService.deleteMentorwmap(menteeid,mentorid);
//    }
@RequestMapping(value="/deletementor/{mentorid}/{menteeid}")
public ResponseEntity<?> deletementors(@PathVariable Long mentorid,@PathVariable Long menteeid) throws Exception {
    String res = mentorEntityService.deleteMentorwmap1(mentorid, menteeid);
    return ResponseEntity.ok(new Response(res));
}

    @RequestMapping(value = "/updatementorfees/{mentorid}/{fees}")
    public ResponseEntity<?> updatementorfees(@PathVariable Long mentorid,@PathVariable Integer fees) {
        String res = mentorEntityService.updateFees(mentorid,fees);
        return ResponseEntity.ok(new Response(res));
    }
    @RequestMapping(value="/otherthanmymentee/{mentorid}")
    public ResponseEntity<?> otherthanmymentor(@PathVariable Long mentorid)
    {
        System.out.println("here");
        List<Mentee> menteeList = mentorEntityService.getAllMenteees1(mentorid);
        return ResponseEntity.ok(menteeList);
    }

}
