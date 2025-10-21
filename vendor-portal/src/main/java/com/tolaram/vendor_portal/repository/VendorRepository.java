package com.tolaram.vendor_portal.repository;
import  com.tolaram.vendor_portal.model.Vendor;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

// MongoRepository gives us all standard CRUD operations (Create, Read, Update, Delete)
public interface VendorRepository extends MongoRepository<Vendor, String> {

    // You can define custom queries just by naming the method.
    // Spring Data will automatically implement this for you.
    // For example, to find all vendors in a specific bucket:
    List<Vendor> findByEngagementStatus(Vendor.EngagementStatus status);

    // Find a vendor by its company name (case-insensitive)
    Vendor findByCompanyNameIgnoreCase(String companyName);
}