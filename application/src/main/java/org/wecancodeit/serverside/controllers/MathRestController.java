package org.wecancodeit.serverside.controllers;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Math;
import org.wecancodeit.serverside.repositories.MathRepository;
import javax.annotation.Resource;
import java.util.Collection;


@CrossOrigin("*")
@RequestMapping
@RestController
public class MathRestController {

    @Resource
    private MathRepository mathRepo;

//    @GetMapping("/math")
//    public String displayMath(Model model) {
//        model.addAttribute("math", mathRepo.findAll());
//        return "mathView";
//    }

    @GetMapping("/math")
    public Collection<Math> getMath(){
        return (Collection<Math>) mathRepo.findAll();
    }

    @GetMapping("/math/{id}")
    public Math getMath(@PathVariable Long mathId) {
        return mathRepo.findById(mathId).get();
    }










//    @RequestMapping("/math/{id}")
//    public String display
}

