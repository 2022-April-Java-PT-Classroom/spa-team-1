package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Level {

    @Id
    @GeneratedValue
    private Long id;
    private String volume;
    @OneToMany(mappedBy = "level")
    @JsonIgnore
    private Collection<Math> math;

    public Long getId() {
        return id;
    }

    public String getVolume() {
        return volume;
    }

    public Collection<Math> getMath() {
        return math;
    }
    //default no args constructor required for jpa
    public Level(){

    }

    public Level(String volume) {
        this.volume = volume;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Level level = (Level) o;
        return Objects.equals(id, level.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}