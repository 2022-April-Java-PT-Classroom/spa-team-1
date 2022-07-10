package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.repositories.MathRepository;

import javax.annotation.Resource;

@Component
public class populator implements CommandLineRunner {

    @Resource
    private MathRepository mathRepo;


    @Override
    public void run(String... args) throws Exception {

//        mathModel site1 = new mathModel("site1", "link?");
//        mathRepo.save(site1);


    }
}
