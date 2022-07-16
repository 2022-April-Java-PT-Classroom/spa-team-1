package org.wecancodeit.serverside.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.Rewards;
import org.wecancodeit.serverside.repositories.RewardsRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
public class RewardsRestController {

    @Resource
    private RewardsRepository rewardsRepo;

    @GetMapping("/api/rewards")
    public Collection<Rewards> getRewards(){
        return (Collection<Rewards>) rewardsRepo.findAll();
    }

    @GetMapping("/api/rewards/{id}")
    public Optional<Rewards> getRewards(@PathVariable Long id) {return rewardsRepo.findById(id);
    }

    
}
