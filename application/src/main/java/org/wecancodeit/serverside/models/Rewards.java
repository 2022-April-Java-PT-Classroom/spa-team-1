package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Rewards {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private int price;
    private int stars;
    @ManyToMany(mappedBy = "stars")
    @JsonIgnore
    private String description;

    public Rewards(){

    }

    public Rewards(Long id, String name, int price, int stars, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stars = stars;
        this.description = description;
    }

    public Long getId() {
        return id;
    }
    public String getName(){
        return name;
    }
    public int getPrice(){
        return price;
    }

    public int getStars(){
        return stars;
    }

    public String getDescription(){
        return description;
    }

    //Make it where if they draw a 6 star item/card/box it makes an alert that showcases the item.



}
