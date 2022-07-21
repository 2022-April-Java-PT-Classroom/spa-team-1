package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Creator;

public interface CreatorRepository  extends CrudRepository<Creator, Long> {
}
