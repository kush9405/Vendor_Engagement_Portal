package com.tolaram.vendor_portal.repository;
import  com.tolaram.vendor_portal.model.Vendor;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;


public interface VendorRepository extends MongoRepository<Vendor, String> {
    List<Vendor> findByEngagementStatus(Vendor.EngagementStatus engagementStatus);

    // Find a vendor by its company name (case-insensitive)
    Vendor findByCompanyNameIgnoreCase(String companyName);
}