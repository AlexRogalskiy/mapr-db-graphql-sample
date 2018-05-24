package com.mapr.music.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

/**
 * Data Transfer Object for {@link com.mapr.music.model.Artist} model class.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ArtistDto {

    @JsonProperty("_id")
    private String id;

    @NotNull
    private String name;
    private String gender;
    private String area;

    @JsonProperty("slug")
    private String slug;

    @JsonProperty("IPI")
    private String ipi;

    @JsonProperty("ISNI")
    private String isni;

    @JsonProperty("MBID")
    private String mbid;

    @JsonProperty("disambiguation_comment")
    private String disambiguationComment;

    @JsonProperty("albums")
    private List<AlbumDto> albums;

    @JsonProperty("profile_image_url")
    private String profileImageUrl;

    @JsonProperty("images_urls")
    private List<String> imagesUrls;

    @JsonProperty("begin_date")
    private Date beginDateDay;

    @JsonProperty("end_date")
    private Date endDateDay;

    @JsonProperty("rating")
    private Double rating;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getIpi() {
        return ipi;
    }

    public void setIpi(String ipi) {
        this.ipi = ipi;
    }

    public String getIsni() {
        return isni;
    }

    public void setIsni(String isni) {
        this.isni = isni;
    }

    public String getMbid() {
        return mbid;
    }

    public void setMbid(String mbid) {
        this.mbid = mbid;
    }

    public String getDisambiguationComment() {
        return disambiguationComment;
    }

    public void setDisambiguationComment(String disambiguationComment) {
        this.disambiguationComment = disambiguationComment;
    }

    public List<AlbumDto> getAlbums() {
        return albums;
    }

    public void setAlbums(List<AlbumDto> albums) {
        this.albums = albums;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public List<String> getImagesUrls() {
        return imagesUrls;
    }

    public void setImagesUrls(List<String> imagesUrls) {
        this.imagesUrls = imagesUrls;
    }

    public Date getBeginDateDay() {
        return beginDateDay;
    }

    public void setBeginDateDay(Date beginDateDay) {
        this.beginDateDay = beginDateDay;
    }

    public Date getEndDateDay() {
        return endDateDay;
    }

    public void setEndDateDay(Date endDateDay) {
        this.endDateDay = endDateDay;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }
}
