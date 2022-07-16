package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Rewards;

import java.util.Optional;

public interface RewardsRepository extends CrudRepository<Rewards, Long> {
    Optional<Rewards> findByName(String rewardsName);


}
