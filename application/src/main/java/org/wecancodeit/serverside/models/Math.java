package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Math {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String equation;
    private boolean isSelected;
    @OneToMany(mappedBy = "math")
    @JsonIgnore
    private Collection<Math> math;

    public Long getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public String getEquation(){return equation;}

    public boolean getSelected(){
        return isSelected;
    }

    public void setSelected(boolean itemIsSelected) {
        this.isSelected = itemIsSelected;
    }

    public Collection<Math> getMath(){
        return math;
    }

    public Math(){}

    public Math(String name){
        this.name = name;
    }

    public Math(Long id, String name, String equation, boolean isSelected){
        this.id= id;
        this.name = name;
        this.equation = equation;
        this.isSelected = isSelected;
    }




}
