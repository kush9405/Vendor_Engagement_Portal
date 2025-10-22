package com.tolaram.vendor_portal.controller;
import com.tolaram.vendor_portal.model.Vendor;
import com.tolaram.vendor_portal.repository.VendorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/vendors") // Base URL for all endpoints in this controller
@CrossOrigin(origins = "https://vendor-engagement-portal.vercel.app/") // Allows requests from  React app
public class VendorController {

    @Autowired // Spring automatically injects the repository instance
    private VendorRepository vendorRepository;

    @GetMapping
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Vendor> createVendor(@RequestBody Vendor vendor) {
        Vendor savedVendor = vendorRepository.save(vendor);
        return new ResponseEntity<>(savedVendor, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vendor> getVendorById(@PathVariable String id) {
        return vendorRepository.findById(id)
                .map(vendor -> new ResponseEntity<>(vendor, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PutMapping("/{id}/status")
    public ResponseEntity<Vendor> updateVendorStatus(@PathVariable String id, @RequestBody Vendor.EngagementStatus newStatus) {
        return vendorRepository.findById(id).map(vendor -> {
            vendor.setEngagementStatus(newStatus);
            Vendor updatedVendor = vendorRepository.save(vendor);
            return new ResponseEntity<>(updatedVendor, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteVendor(@PathVariable String id) {
        try {
            vendorRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vendor> updateVendor(@PathVariable String id, @RequestBody Vendor vendorDetails) {
        return vendorRepository.findById(id).map(vendor -> {
            vendor.setCompanyName(vendorDetails.getCompanyName());
            vendor.setPrimaryContactName(vendorDetails.getPrimaryContactName());
            vendor.setPrimaryContactEmail(vendorDetails.getPrimaryContactEmail());
            vendor.setCategory(vendorDetails.getCategory());
            vendor.setEngagementStatus(vendorDetails.getEngagementStatus());
            Vendor updatedVendor = vendorRepository.save(vendor);
            return new ResponseEntity<>(updatedVendor, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}