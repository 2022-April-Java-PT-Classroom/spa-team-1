package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;
import java.util.Objects;


@Entity
public class Creator {

    @Id
    @GeneratedValue
    private Long id;
    private String names;
    @ManyToMany(mappedBy = "creators")
    @JsonIgnore
    private Collection<Math> math;

    public Long getId() {
        return id;
    }

    public Collection<Math> getMath(){
        return math;
    }

    public String getName() {
        return names;
    }


    public Creator(){

    }

    public Creator(String names) {
        this.names = names;

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Creator creator = (Creator) o;
        return Objects.equals(id, creator.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}