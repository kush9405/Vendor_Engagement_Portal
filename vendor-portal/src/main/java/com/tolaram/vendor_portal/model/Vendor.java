package com.tolaram.vendor_portal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;


import lombok.Data;

@Document(collection = "VendorInformation")
@Data
public class Vendor {

    @Id
    private String id;
    private String vendorId;
    private String companyName;
    private String primaryContactName;
    private String primaryContactEmail;
    private String phoneNumber;
    private String address;
    private String category;

    private EngagementStatus engagementStatus;

    private LocalDate registrationDate;
    private LocalDateTime lastInteractionDate;
    private LocalDate contractEndDate;
    private double performanceRating;

    public enum EngagementStatus {
        YET_TO_RESPOND,
        OPEN_IN_PROGRESS,
        COMPLETED_ONBOARDED
    }
}