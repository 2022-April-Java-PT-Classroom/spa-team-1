package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Level;

public interface LevelRepository extends CrudRepository<Level, Long> {

    Level findLevelByVolume(String volume);
}