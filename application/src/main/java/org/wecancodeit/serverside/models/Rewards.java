package org.wecancodeit.serverside.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Rewards {

    @Id
    @GeneratedValue
    public Long id;
    public boolean isSelected;
    public String name;
    public int price;
    public String urlImg;
    public int stars;
//    @OneToMany(mappedBy = "stars")
//    @JsonIgnore
    public String description;

    public Rewards(){

    }

    public Rewards(Long id, boolean isSelected, String name, int price, String urlImg, int stars, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.urlImg = urlImg;
        this.stars = stars;
        this.isSelected = isSelected;
        this.description = description;
    }

    public Long getId() {
        return id;
    }
    public boolean setSelected(boolean rewardIsSelected){
        return isSelected;
    }
    public String getName(){
        return name;
    }
    public int getPrice(){
        return price;
    }
    public String getUrlImg(){
        return urlImg;
    }

    public int getStars(){
        return stars;
    }

    public String getDescription(){
        return description;
    }

    //Make it where if they draw a 6 star item/card/box it makes an alert that showcases the item.
    
}
