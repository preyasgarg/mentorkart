package com.project.maintenant.services;


import com.project.maintenant.model.entities.Mentee;
import com.project.maintenant.model.entities.Mentor;
import com.project.maintenant.repo.MenteeRepository;
import com.project.maintenant.repo.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class MentorEntityService {
    @Lazy
    @Autowired
    private MentorRepository mentorRepository;
    @Lazy
    @Autowired
    private MenteeRepository menteeRepository;
    @Lazy
    @Autowired
    private MenteeEntityService menteeEntityService;

    public Mentor saveMentor(Mentor mentor)
    {
        return mentorRepository.save(mentor);
    }

    public Mentor addMentor(Map<String, Object> payload)
    {
        Mentor mentor = new Mentor();
        try
        {
            System.out.println("In add mentor service");
            mentor.setUsername((String) payload.get("username"));
            mentor.setPassword((String) payload.get("password"));
            mentor.setFirstName((String) payload.get("firstName"));
            mentor.setLastName((String) payload.get("lastName"));

            System.out.println("addline1 "+(String) payload.get("addLine1"));
            System.out.println("addline2 "+(String) payload.get("addLine2"));

            String addressDetail = "{ \"addLine1\": \"" + (String) payload.get("addLine1") + "\" ,";
            addressDetail = addressDetail + "\"addLine2\": \"" + (String) payload.get("addLine2") + "\" ,";
            addressDetail = addressDetail + "\"district\": \"" + (String) payload.get("district") + "\" ,";
            addressDetail = addressDetail + "\"state\": \"" + (String) payload.get("state") + "\" ,";
            addressDetail = addressDetail + "\"pin\": \"" + (String) payload.get("pin") + "\" }";
            mentor.setAddressDetail(addressDetail);

            String companies = "{ \"company1\" : \"" + (String) payload.get("company1") + "\" ,";
            companies = companies + "\"company2\" : \"" + (String) payload.get("company2") + "\" ,";
            companies = companies + "\"company3\" : \"" + (String) payload.get("company3") + "\" ,";
            companies = companies + "\"company4\" : \"" + (String) payload.get("company4") + "\"} ";
            mentor.setCompanies(companies);

            String currentSkills = "{ \"skill1\" : \"" + (String) payload.get("skill1") + "\" ,";
            currentSkills = currentSkills + "\"skill2\" : \"" + (String) payload.get("skill2") + "\" ,";
            currentSkills = currentSkills + "\"skill3\" : \"" + (String) payload.get("skill3") + "\" ,";
            currentSkills = currentSkills + "\"skill4\" : \"" + (String) payload.get("skill4") + "\"} ";
            mentor.setCurrentskills(currentSkills);

            mentor.setEmail((String) payload.get("email"));
            mentor.setPhoneNumber((String) payload.get("phoneNumber"));
            mentor.setGender(((String) payload.get("gender")));
            mentor.setBalance(((Integer) payload.get("balance")));
            mentor.setFees((Integer) payload.get("fees"));
            mentor.setAge((Integer) payload.get("age"));
            mentor.setYearOfExperience((Integer) payload.get("yearOfExperience"));

            //menteeRepository.save(mentee);
            mentorRepository.save(mentor);
            //System.out.println(mentee1.getId());


            return mentor;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return null;
        }
    }

    public Mentor fetchMentorByEmailId(String email)
    {
        return mentorRepository.findByEmail(email);
    }

    public Mentor getMentorByEmailId1(Map<String,Object> payload)
    {
        Mentor mentor = this.mentorRepository.findByEmail((String) payload.get("email"));
        return mentorRepository.findById(mentor.getId()).get();
    }

    public Mentor fetchMentorByEmailIdAndPassword(String email, String password)
    {
        return mentorRepository.findByEmailAndPassword(email,password);
    }
    public Mentor login(Map<String, Object> payload){
        List<Mentor> mentorList = mentorRepository.getByUsername((String) payload.get("username"));
        if (mentorList.size()>0 &&
                mentorList.get(0).getPassword().equals((String) payload.get("password"))){
            return mentorList.get(0);
        }
        return null;
    }

    public List<Mentor> getMentors()
    {
        return mentorRepository.findAll();
    }
    public List<Mentor> getAllMentors(){
        List<Mentor> mentors = new ArrayList<Mentor>();
        mentorRepository.findAll().forEach(mentor ->mentors.add(mentor));
        return mentors;
    }

    public Mentor getMentorById(Long id)
    {
        return mentorRepository.findById(id).get();
    }
    public Mentor getMentorById1(Long id)
    {
        Mentor mentor = this.mentorRepository.findById(id).get();
        return mentor;
    }
    /* public Optional<Mentee> getMenteeByUsername(String username)
     {
         return menteeRepository.findMenteesByUsername(username);
     }*/
    public String deleteMentor(Long id)
    {
        mentorRepository.deleteById(id);
        return "Mentor deleted "+id;
    }
    public String deleteMentor1(Long id)
    {
        Mentor mentor = this.mentorRepository.findById(id).get();
        mentorRepository.deleteById(mentor.getId());
        return "Mentor deleted "+mentor.getId();
    }
    public Mentor updateMentor(Mentor mentor)
    {
        Mentor existingMentor = mentorRepository.findByEmail(mentor.getEmail());

        System.out.println("Inside UpdateMentor");
        if(existingMentor!=null)
        {
            existingMentor.setFirstName(mentor.getFirstName());
            existingMentor.setLastName(mentor.getLastName());
            existingMentor.setAddressDetail((mentor.getAddressDetail()));
            existingMentor.setCompanies(mentor.getCompanies());
            existingMentor.setCurrentskills(mentor.getCurrentskills());
            existingMentor.setPhoneNumber(mentor.getEmail());
            existingMentor.setPhoneNumber(mentor.getPhoneNumber());
            existingMentor.setGender(mentor.getGender());
            existingMentor.setBalance(mentor.getBalance());
            existingMentor.setAge(mentor.getAge());
            existingMentor.setYearOfExperience(mentor.getYearOfExperience());
            existingMentor.setFees(mentor.getFees());

            return  mentorRepository.save(existingMentor);
        }
        else {
            return mentorRepository.save(existingMentor);
        }


    }
    public Mentor updateMentor1(Map<String,Object> payload,Long id)
    {
        System.out.println("in Update service");
        Mentor mentor =  this.mentorRepository.findById(id).get();
        mentor.setFirstName((String) payload.get("firstName"));
        mentor.setLastName((String) payload.get("lastName"));

        String addressDetail = "{ \"addLine1\": \"" + (String) payload.get("addLine1") + "\" ,";
        addressDetail = addressDetail + "\"addLine2\": \"" + (String) payload.get("addLine2") + "\" ,";
        addressDetail = addressDetail + "\"district\": \"" + (String) payload.get("district") + "\" ,";
        addressDetail = addressDetail + "\"state\": \"" + (String) payload.get("state") + "\" ,";
        addressDetail = addressDetail + "\"pin\": \"" + (String) payload.get("pin") + "\" }";
        mentor.setAddressDetail(addressDetail);

        String companies = "{ \"company1\" : \"" + (String) payload.get("company1") + "\" ,";
        companies = companies + "\"company2\" : \"" + (String) payload.get("company2") + "\" ,";
        companies = companies + "\"company3\" : \"" + (String) payload.get("company3") + "\" ,";
        companies = companies + "\"company4\" : \"" + (String) payload.get("company4") + "\"} ";
        mentor.setCompanies(companies);

        String currentSkills = "{ \"skill1\" : \"" + (String) payload.get("skill1") + "\" ,";
        currentSkills = currentSkills + "\"skill2\" : \"" + (String) payload.get("skill2") + "\" ,";
        currentSkills = currentSkills + "\"skill3\" : \"" + (String) payload.get("skill3") + "\" ,";
        currentSkills = currentSkills + "\"skill4\" : \"" + (String) payload.get("skill4") + "\"} ";
        mentor.setCurrentskills(currentSkills);

        mentor.setEmail((String) payload.get("email"));
        mentor.setPhoneNumber((String) payload.get("phoneNumber"));
        mentor.setGender(((String) payload.get("gender")));
        mentor.setBalance(((Integer) payload.get("balance")));
        mentor.setAge(((Integer) payload.get("age")));
        mentor.setYearOfExperience((Integer) payload.get("yearOfExperience"));
        mentor.setFees((Integer) payload.get("fees"));
        //menteeRepository.save(mentee);
        mentorRepository.save(mentor);

        return mentor;

//hi i am dhher
    }
    public List<Mentee> getAllMentees(Long id)
    {
        Mentor mentor = mentorRepository.getById(id);
        return mentor.getMentees();
    }
    public List<Mentee> getAllMentees1(Long mentorid)
    {
        Mentor mentor = mentorRepository.getById(mentorid);
        return mentor.getMentees();
    }
    public Mentor addMentor(Long menteeid,Long mentorid)
    {

        Mentee mentee = menteeRepository.getById(menteeid);
        Mentor mentor = mentorRepository.getById(mentorid);
        Integer menteeBalance = mentee.getBalance();
        Integer mentorFees  = mentor.getFees();

        if(menteeBalance>mentorFees) {
            List<Mentor> mentorList = mentee.getMentors();
            List<Mentee> menteeList = mentor.getMentees();
            menteeList.add(mentee);
            mentorList.add(mentor);
            mentee.setBalance(menteeBalance-mentorFees);
            return mentorRepository.save(mentor);
        }
        else
            return mentor;
    }
    public Mentor addMentor1(Long mentorid,Long menteeid)
    {

//     Long menteeid = (Long) payload.get("menteeid");
//     Long mentorid = (Long) payload.get("mentorid");
        Mentee mentee = menteeRepository.getById(menteeid);
        Mentor mentor = mentorRepository.getById(mentorid);
        Integer menteeBalance = mentee.getBalance();
        Integer mentorFees  = mentor.getFees();
        Integer mentorBalance = mentor.getBalance();


        if(menteeBalance>mentorFees) {
            List<Mentor> mentorList = mentee.getMentors();
            List<Mentee> menteeList = mentor.getMentees();
            menteeList.add(mentee);
            mentorList.add(mentor);
            mentee.setBalance(menteeBalance-mentorFees);
            mentor.setBalance(mentorBalance+mentorFees);
            mentorRepository.save(mentor);
            menteeRepository.save(mentee);
            System.out.println("********Mentee Addition Done*************");
        }
        return mentor;
    }


//    public Mentor addMentee(Mentee mentee,Mentor mentor)
//    {
//        List<Mentee> menteeList = mentor.getMentees();
//        menteeList.add(mentee);
//        return  mentorRepository.save(mentor);
//    }
    public Mentor deleteMentorwmap(Long menteeid,Long mentorid)
    {
        Mentee mentee = menteeRepository.getById(menteeid);
        Mentor mentor = mentorRepository.getById(mentorid);
        List<Mentor> mentorList = mentee.getMentors();
        List<Mentee> menteeList = mentor.getMentees();

        menteeList.remove(mentee);
        mentorList.remove(mentor);
        return mentorRepository.save(mentor);
    }
    public String deleteMentorwmap1(Long mentorid,Long menteeid)
    {

//        Long menteeid = (Long) payload.get("menteeid");
//        Long mentorid = (Long) payload.get("mentorid");
        Mentee mentee = menteeRepository.getById(menteeid);
        Mentor mentor = mentorRepository.getById(mentorid);
        List<Mentor> mentorList = mentee.getMentors();
        List<Mentee> menteeList = mentor.getMentees();

        menteeList.remove(mentee);
        mentorList.remove(mentor);
         mentorRepository.save(mentor);
         menteeRepository.save(mentee);
         return "deleted mentor from mentee list";

    }
    public String updateFees(Long id,Integer fees)
    {
        Mentor mentor = this.mentorRepository.findById(id).get();
        Integer originalFees= mentor.getFees();
        mentor.setFees(fees+originalFees);
        mentorRepository.save(mentor);
        return "Fees is set";
    }
    public List<Mentee> getAllMenteees1(Long id)
    {
        Mentor mentor = mentorRepository.findById(id).get();
        System.out.println("mentor name "+mentor.getFirstName());
        // Mentee mentee = menteeRepository.findById(id).get();
//        List<Mentor> mentorListOfMentee = mentee.getMentors();
        List<Mentee> listOfAllMentee = menteeEntityService.getAllMentees();
        System.out.println(listOfAllMentee);
        List<Mentee> menteesListOfMentors = mentor.getMentees();
        System.out.println(menteesListOfMentors);

        List<Mentee> remainingMentees= new ArrayList<>();
        boolean flag;
        for(int i=0; i<listOfAllMentee.size(); i++){
            Mentee mentee= listOfAllMentee.get(i);
            Long menteeId = mentee.getId();
            System.out.println("******* start of loop "+menteeId+" *****");
            flag=true;
            for(int j=0; j<menteesListOfMentors.size(); j++){
                System.out.println("id of mentor in mentee "+menteesListOfMentors.get(j).getId());
                if(menteeId == menteesListOfMentors.get(j).getId()) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                System.out.println("flag is True "+menteeId);
                remainingMentees.add(mentee);
            }
        }

        return remainingMentees;
        //return mentorRepository.findAll();
    }

}
