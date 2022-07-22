package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.MathModel;

import java.util.Optional;

public interface MathRepository extends CrudRepository<MathModel, Long> {
    Optional<MathModel> findByName(String MathName);
//    this will stop duplication
}
