package com.sanatkar.usermanagement.model.repository;

import com.sanatkar.usermanagement.model.entity.User;
import org.springframework.data.repository.CrudRepository;

/**
 * @author ashkan
 * @version 1.0
 * @since 2019-03-13
 */
public interface UserRepository extends CrudRepository<User, Long> {
}
