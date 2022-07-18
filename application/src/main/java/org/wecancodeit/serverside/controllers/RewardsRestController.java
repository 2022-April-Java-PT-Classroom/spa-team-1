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

    @GetMapping("/rewards")
    public Collection<Rewards> getRewards(){
        return (Collection<Rewards>) rewardsRepo.findAll();
    }

//    @GetMapping("/api/reward/{id}")
//    public Optional<Rewards> getRewards(@PathVariable Long id) {return rewardsRepo.findById(id);
//    }
    //should I make it so people can sell their cards to increase their currency....?
    @PostMapping("/api/rewards/add-rewards")
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
    //doesn't request body function the same as a RestController?
    @PutMapping ("/api/rewards/{id}/select-item")
    public Collection<Rewards> selectRewards(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newRewards = new JSONObject(body);
        boolean rewardIsSelected = newRewards.getBoolean("isSelected");
        Optional<Rewards> rewardsToSelectOpt = rewardsRepo.findById(id);

        if (rewardsToSelectOpt.isPresent()) {
            rewardsToSelectOpt.get().setSelected(rewardIsSelected);
            rewardsRepo.save(rewardsToSelectOpt.get());
        }
        return (Collection<Rewards>) rewardsRepo.findAll();
    }
    @DeleteMapping("/api/rewards/{id}/delete-item")
    public Collection<Rewards> deleteRewards(@PathVariable Long id) throws JSONException {
        Optional<Rewards> rewardsToRemoveOpt = rewardsRepo.findById(id);
        if(rewardsToRemoveOpt.isPresent()){
            rewardsRepo.delete(rewardsToRemoveOpt.get());
        }
        return (Collection<Rewards>) rewardsRepo.findAll();
    }
}
