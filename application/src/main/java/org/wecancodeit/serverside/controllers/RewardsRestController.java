package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
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
    //should I make it so people can sell their cards to increase their currency....?
    @PostMapping("/api/rewards/{id}/add-rewards")
    public Collection<Rewards> addRewards(@RequestBody String body) throws JSONException {
        JSONObject newReward = new JSONObject(body);
        String rewardsName = newReward.getString("name");
        Optional<Rewards> rewardsToAddOpt = rewardsRepo.findByName(rewardsName);

        if (rewardsToAddOpt.isEmpty()) {
            Rewards rewardsToAdd = new Rewards();
            rewardsRepo.save(rewardsToAdd);
        }
        return (Collection<Rewards>) rewardsRepo.findAll();

    }
}
