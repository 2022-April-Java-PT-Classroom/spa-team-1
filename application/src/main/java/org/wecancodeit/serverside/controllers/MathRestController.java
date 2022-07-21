package org.wecancodeit.serverside.controllers;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Math;
import org.wecancodeit.serverside.repositories.MathRepository;
import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;


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
    public Optional<Math> getMath(@PathVariable Long id){
        return mathRepo.findById(id);
    }










//    @RequestMapping("/math/{id}")
//    public String display
}
