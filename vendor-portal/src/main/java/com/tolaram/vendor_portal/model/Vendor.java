package com.tolaram.vendor_portal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;

// Lombok annotation to reduce boilerplate code
import lombok.Data;

// This annotation specifies the collection name in MongoDB
@Document(collection = "VendorInformation")
@Data // Creates getters, setters, constructors, etc. automatically
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