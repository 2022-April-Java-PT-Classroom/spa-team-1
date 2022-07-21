package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Math {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private boolean isSelected;
    @ManyToOne
    private Level level;
    @ManyToMany
    private Collection<Creator> creators;
    @ManyToMany
    @JsonIgnore
//    private Collection<Math> math;

    public Long getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public String getDescription(){return description;}

    public boolean getSelected(){
        return isSelected;
    }

    public Level getLevel(){
        return level;
    }

    public Collection<Creator> getCreators(){
        return creators;
    }

    public void setSelected(boolean itemIsSelected) {
        this.isSelected = itemIsSelected;
    }
//
//    public Collection<Math> getMath(){
//        return math;
//    }

    public Math(){}

//    public Math(String name){
//        this.name = name;
//    }

//    public Math(Long id) {this.id = id; }

    public Math( Long id, String name, String description, boolean isSelected, Level level, Creator...creators){
        this.id = id;
        this.name = name;
        this.description = description;
        this.isSelected = isSelected;
        this.level = level;
        this.creators = new ArrayList<>(Arrays.asList(creators));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if(o == null || getClass() !=o.getClass()) return false;
        Math math =(Math) o;
        return Objects.equals(id, math.id);
    }




}

