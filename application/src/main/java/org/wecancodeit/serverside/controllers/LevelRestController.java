package org.wecancodeit.serverside.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.Level;
import org.wecancodeit.serverside.repositories.LevelRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class LevelRestController {

    @Resource
    private LevelRepository levelRepo;

    @GetMapping("/levels")
    public Collection<Level> getLevels() {
        return (Collection<Level>) levelRepo.findAll();
    }

    @GetMapping("/levels/{levelId}")
    public Level getLevel(@PathVariable Long levelId){
        return levelRepo.findById(levelId).get();
    }
}

