package org.wecancodeit.serverside.controllers;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.wecancodeit.serverside.repositories.MathRepository;
import javax.annotation.Resource;
public class MathController {
    @Resource
    private MathRepository mathRepo;
    @RequestMapping("/math")
    public String displayMath(Model model){
        model.addAttribute("math", mathRepo.findAll());
        return  "mathView";
    }
//    @RequestMapping("/math/{id}")
//    public String display
}