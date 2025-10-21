# Vendor Engagement Portal

Full-stack sample app for managing FMCG vendors. Spring Boot backend (MongoDB) + React frontend. Includes a small data generator for CSV sample data.

## Quick links
- Backend main: [`com.tolaram.vendor_portal.VendorPortalApplication`](vendor-portal/src/main/java/com/tolaram/vendor_portal/VendorPortalApplication.java)
- REST controller: [`com.tolaram.vendor_portal.controller.VendorController`](vendor-portal/src/main/java/com/tolaram/vendor_portal/controller/VendorController.java)
- Domain model: [`com.tolaram.vendor_portal.model.Vendor`](vendor-portal/src/main/java/com/tolaram/vendor_portal/model/Vendor.java)
- Repository: [`com.tolaram.vendor_portal.repository.VendorRepository`](vendor-portal/src/main/java/com/tolaram/vendor_portal/repository/VendorRepository.java)
- Frontend service: [`vendorService.getAllVendors`](vendor-portal-ui/src/services/vendorService.js)
- Frontend components:
  - [`vendor-portal-ui/src/components/AddVendorForm.js`](vendor-portal-ui/src/components/AddVendorForm.js)
  - [`vendor-portal-ui/src/components/VendorList.js`](vendor-portal-ui/src/components/VendorList.js)
  - [`vendor-portal-ui/src/components/VendorDetails.js`](vendor-portal-ui/src/components/VendorDetails.js)
- Sample data generator: [`generate.py`](generate.py)
- Sample CSV: [sample_fmcg_vendors.csv](sample_fmcg_vendors.csv)

## Architecture (short)
- Backend: Spring Boot + Spring Data MongoDB. REST endpoints live in [`VendorController`](vendor-portal/src/main/java/com/tolaram/vendor_portal/controller/VendorController.java).
- Data model: [`Vendor`](vendor-portal/src/main/java/com/tolaram/vendor_portal/model/Vendor.java) (includes `EngagementStatus` enum).
- Persistence: [`VendorRepository`](vendor-portal/src/main/java/com/tolaram/vendor_portal/repository/VendorRepository.java) extends `MongoRepository`.
- Frontend: React (Create React App). API helper: [`vendorService`](vendor-portal-ui/src/services/vendorService.js). UI components under [`vendor-portal-ui/src/components`](vendor-portal-ui/src/components).

## Prerequisites
- Java 11+ and Maven
- Node.js (14+) and npm
- MongoDB running locally (or adjust `application.properties` in backend to point to your instance)

## Run locally

Backend
1. cd into backend:
   cd vendor-portal
2. Build & run:
   mvn spring-boot:run
   - Server listens on http://localhost:8080 by default.
   - Controller: [`/api/vendors` endpoints in VendorController](vendor-portal/src/main/java/com/tolaram/vendor_portal/controller/VendorController.java)

Frontend
1. cd vendor-portal-ui
2. Install & start:
   npm install
   npm start
   - Frontend runs at http://localhost:3000 and calls http://localhost:8080/api/vendors (see [`vendorService`](vendor-portal-ui/src/services/vendorService.js)).

Sample data (CSV)
- Generate CSV:
  python3 generate.py
  - Writes `sample_fmcg_vendors.csv` by default. See [`generate.py`](generate.py).
- Import into MongoDB (example):
  mongoimport --db yourDB --collection VendorInformation --file sample_fmcg_vendors.csv --type csv --headerline

## API (useful endpoints)
- GET /api/vendors — list all vendors (implemented in [`VendorController.getAllVendors`](vendor-portal/src/main/java/com/tolaram/vendor_portal/controller/VendorController.java))
- POST /api/vendors — create vendor
- GET /api/vendors/{id} — get vendor by id
- PUT /api/vendors/{id} — update full vendor
- PUT /api/vendors/{id}/status — update status only (see [`VendorController.updateVendorStatus`](vendor-portal/src/main/java/com/tolaram/vendor_portal/controller/VendorController.java))
- DELETE /api/vendors/{id} — delete vendor

## Running tests
- Backend unit tests:
  cd vendor-portal
  mvn test
  (See [`VendorPortalApplicationTests`](vendor-portal/src/test/java/com/tolaram/vendor_portal/VendorPortalApplicationTests.java))
- Frontend tests:
  cd vendor-portal-ui
  npm test

## Troubleshooting
- CORS: backend already configures `@CrossOrigin(origins = "http://localhost:3000")` in [`VendorController`](vendor-portal/src/main/java/com/tolaram/vendor_portal/controller/VendorController.java).
- Backend cannot connect to MongoDB: check `application.properties` / Mongo service and connection URI.
- Frontend 404s on routes when deployed: the app uses client-side routing (`BrowserRouter`) — configure your server to serve index.html for unknown routes. See [`vendor-portal-ui/public/index.html`](vendor-portal-ui/public/index.html).

## Where to look to extend features
- Add fields/validation to the model: [`com.tolaram.vendor_portal.model.Vendor`](vendor-portal/src/main/java/com/tolaram/vendor_portal/model/Vendor.java)
- Add custom repository queries: [`com.tolaram.vendor_portal.repository.VendorRepository`](vendor-portal/src/main/java/com/tolaram/vendor_portal/repository/VendorRepository.java)
- Add new UI pages or modify components in [`vendor-portal-ui/src/components`](vendor-portal-ui/src/components)
- API client utilities: [`vendor-portal-ui/src/services/vendorService.js`](vendor-portal-ui/src/services/vendorService.js)

## Contributing
- Use feature branches, keep backend and frontend changes isolated.
- Run backend and frontend locally while developing UI/backend integration.

---

This README provides the essentials to get started. For anything specific, open the files listed above to inspect implementations and extend as needed.
