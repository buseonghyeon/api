package com.example.project.model;

import java.util.ArrayList;
import java.util.List;

public class WeatherSearchResultVO {

    private String temperature;
    private String humidity;
    private String precipitation;
    private String windSpeed;
    private String precipitation_type;
    private String skyCondition;
    private String presentationTime;
    private List<WeatherInfoVO> items;

    public WeatherSearchResultVO() {

    }

    WeatherSearchResultVO(String precipitation_type, String temperature, String precipitation, String humidity, String windSpeed) {
        this.precipitation_type = precipitation_type;
        this.temperature = temperature;
        this.precipitation = precipitation;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.presentationTime = presentationTime;
        this.skyCondition = skyCondition;
        this.items = items;
    }

    public String getTemperature() {return temperature;}
    public void setTemperature(String temperature) {this.temperature = temperature;}
    public String getHumidity() {return humidity;}
    public void setHumidity(String humidity) {this.humidity = humidity;}
    public String getPrecipitation() {return precipitation;}
    public void setPrecipitation(String precipitation) {this.precipitation = precipitation;}
    public String getWindSpeed() {return windSpeed;}
    public void setWindSpeed(String windSpeed) {this.windSpeed = windSpeed;}
    public String getPrecipitation_type() {return precipitation_type;}
    public void setPrecipitation_type(String precipitation_type) {this.precipitation_type = precipitation_type;}
    public String getSkyCondition() {return skyCondition;}
    public void setSkyCondition(String skyCondition) {this.skyCondition = skyCondition;}
    public String getPresentationTime() {return presentationTime;}
    public void setPresentationTime(String presentationTime) {this.presentationTime = presentationTime;}
    public List<WeatherInfoVO> getItems() {return items;}
    public void setItems(List<WeatherInfoVO> items) {this.items = items;}


    public String toString() {
        return "WeatherSearchResultVO [temperature=" + temperature
                + ", humidity=" + humidity
                + ", precipitation=" + precipitation
                + ", windSpeed=" + windSpeed
                + ", precipitation_type=" + precipitation_type
                + ", skyCondition=" + skyCondition
                + ", presentationTime=" + presentationTime
                + ", items=" + items
                + ", getTemperature()=" + getTemperature()
                + ", getHumidity()=" + getHumidity()
                + ", getPrecipitation()=" + getPrecipitation()
                + ", getWindSpeed()=" + getWindSpeed()
                + ", getPrecipitation_type()=" + getPrecipitation_type()
                + ", getSkyCondition()=" + getSkyCondition()
                + ", getPresentationTime()=" + getPresentationTime()
                + ", getItems()=" + getItems()
                + ", getClass()=" + getClass()
                + ", hashCode()=" + hashCode()
                + ", toString()=" + super.toString() + "]";

    }
}
