package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.Creator;
import org.wecancodeit.serverside.models.Level;
import org.wecancodeit.serverside.models.Rewards;
import org.wecancodeit.serverside.models.Math;

import org.wecancodeit.serverside.repositories.CreatorRepository;
import org.wecancodeit.serverside.repositories.LevelRepository;
import org.wecancodeit.serverside.repositories.MathRepository;
import org.wecancodeit.serverside.repositories.RewardsRepository;

import javax.annotation.Resource;
import javax.persistence.OneToMany;

@Component
public class populator implements CommandLineRunner {

    @Resource
    private LevelRepository levelRepo;

    @Resource
    private CreatorRepository creatorRepo;

    @Resource
    private MathRepository mathRepo;

    @Resource
    public RewardsRepository rewardsRepo;


    @Override
    public void run(String... args) throws Exception {

//        mathModel site1 = new mathModel("site1", "link?");
//        mathRepo.save(site1);

        Rewards Common = new Rewards(1L, true,"Common", 10, "1 Star IMAGE", 1, "LOREM IPSUM");
        Rewards Uncommon = new Rewards(2L, true, "Uncommon", 20, "2 Star IMAGE", 2, "LOREM IPSUM");
        Rewards Rare = new Rewards(3L, true,"Rare", 30, "3 Star IMAGE", 3, "LOREM IPSUM");
        Rewards SuperRare = new Rewards(4L, true, "Super Rare", 40, "4 Star IMAGE", 4, "LOREM IPSUM");
        Rewards Legendary = new Rewards(5L, true, "Legendary", 50, "5 Star IMAGE", 5, "LOREM IPSUM");
        Rewards Godly = new Rewards(6L, true, "God-Like", 60, "6 Star IMAGE", 6, "LOREM IPSUM");
        rewardsRepo.save(new Rewards());


        Level one = new Level("One");
        Level two = new Level("Two");
        levelRepo.save(one);
        levelRepo.save(two);

        Creator egyptians = new Creator("Egyptians");
        Creator johannes = new Creator("Johannes Widman");
        Creator babylonians = new Creator("Babylonians");
        Creator johan = new Creator("Johan Heinrich Rahn");
        creatorRepo.save(egyptians);
        creatorRepo.save(johannes);
        creatorRepo.save(babylonians);
        creatorRepo.save(johan);

        Math add = new Math(1L,"Add", "1+0=1; 1+1=2; 2+1=3; 3+1=4; 4+1=5", true, one, egyptians );
        Math subtract = new Math (2L, "Subtract", "1-0=1; 2-1=1; 3-1=2; 4-1=3; 5-1=4;",true, one, johannes );
        Math multiply = new Math (3L, "Multiply","1x1=1; 2x2=4; 3x3=9; 4x4=16; 5x5=25" ,true, two, babylonians );
        Math divide  = new Math (4L, "Divide","1/1=1; 4/2=2; 9/3=3; 16/4=4; 25/5=5" ,true, two, johan);
        mathRepo.save(add);
        mathRepo.save(subtract);
        mathRepo.save(multiply);
        mathRepo.save(divide);


    }
}
