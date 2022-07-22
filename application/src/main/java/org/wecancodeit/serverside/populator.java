package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.Rewards;
import org.wecancodeit.serverside.repositories.MathRepository;
import org.wecancodeit.serverside.repositories.RewardsRepository;

import javax.annotation.Resource;

@Component
public class populator implements CommandLineRunner {

    @Resource
    private MathRepository mathRepo;

    @Resource
    public RewardsRepository rewardsRepo;


    @Override
    public void run(String... args) throws Exception {

//        mathModel site1 = new mathModel("site1", "link?");
//        mathRepo.save(site1);

//        Rewards Common = new Rewards(1L, true,"Common", 10, "1 Star IMAGE", 1, "LOREM IPSUM");
//        rewardsRepo.save(Common);
//        Rewards Uncommon = new Rewards(2L, true, "Uncommon", 20, "2 Star IMAGE", 2, "LOREM IPSUM");
//        rewardsRepo.save(Uncommon);
//        Rewards Rare = new Rewards(3L, true,"Rare", 30, "3 Star IMAGE", 3, "LOREM IPSUM");
//        rewardsRepo.save(Rare);
        Rewards SuperRare = new Rewards(4L, true, "Super Rare", 40, "static/js/react-client/src/assets/prizes/coin.png", 4, "LOREM IPSUM");
        rewardsRepo.save(SuperRare);
        Rewards Legendary = new Rewards(5L, true, "Legendary", 50, "static/js/react-client/src/assets/prizes/cat.png", 5, "LOREM IPSUM");
        rewardsRepo.save(Legendary);
        Rewards Godly = new Rewards(6L, true, "God-Like", 60, "static/js/react-client/src/assets/prizes/doge.png", 6, "LOREM IPSUM");
        rewardsRepo.save(Godly);


    }
}
