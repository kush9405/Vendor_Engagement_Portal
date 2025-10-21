import csv
from faker import Faker
import random
from datetime import datetime, timedelta

# Initialize the Faker library to generate fake data
fake = Faker()

# Define the possible statuses or 'buckets' for vendors
vendor_statuses = [
    "YET_TO_RESPOND",
        "OPEN_IN_PROGRESS",
        "COMPLETED_ONBOARDED"
]

# Define FMCG-specific vendor categories
fmcg_categories = [
    "Raw Materials (Produce)", "Packaging Solutions", "Logistics & Distribution",
    "Marketing & Advertising", "IT Services", "Manufacturing Equipment",
    "Ingredients & Additives", "Contract Manufacturing"
]

def generate_vendor_data(num_vendors):
    """
    Generates a list of sample vendor data.

    Args:
        num_vendors (int): The number of vendor records to generate.

    Returns:
        list: A list of dictionaries, where each dictionary represents a vendor.
    """
    vendor_list = []
    for i in range(1, num_vendors + 1):
        company_name = fake.company()
        vendor_data = {
            "vendorId": f"V{1000 + i}",
            "companyName": company_name,
            "primaryContactName": fake.name(),
            "primaryContactEmail": f"{company_name.lower().replace(' ','.').replace(',','')}{random.randint(1,50)}@example.com",
            "phoneNumber": fake.phone_number(),
            "address": fake.address().replace('\n', ', '),
            "category": random.choice(fmcg_categories),
            "engagementStatus": random.choice(vendor_statuses),
            "registrationDate": fake.date_between(start_date="-3y", end_date="today").isoformat(),
            "lastInteractionDate": (datetime.now() - timedelta(days=random.randint(1, 365))).isoformat(),
            "performanceRating": round(random.uniform(1.0, 5.0), 1),
            "contractEndDate": fake.date_between(start_date="today", end_date="+2y").isoformat(),
            "notes": fake.sentence(nb_words=15)
        }
        vendor_list.append(vendor_data)
    return vendor_list

def save_to_csv(data, filename="sample_fmcg_vendors.csv"):
    """
    Saves the generated vendor data to a CSV file.

    Args:
        data (list): The list of vendor dictionaries.
        filename (str): The name of the output CSV file.
    """
    if not data:
        print("No data to save.")
        return

    # Use the keys from the first dictionary as headers
    headers = data[0].keys()

    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=headers)
        writer.writeheader()
        writer.writerows(data)
    print(f"Successfully saved {len(data)} records to {filename}")


# --- Main execution ---
if __name__ == "__main__":
    # Specify the number of sample vendor records you want to generate
    number_of_vendors_to_generate = 500
    
    # Generate the data
    generated_vendors = generate_vendor_data(number_of_vendors_to_generate)
    
    # Save the data to a CSV file
    save_to_csv(generated_vendors)

    # Optional: Print the first 5 records to the console for a quick preview
    print("\n--- Sample of Generated Data ---")
    for vendor in generated_vendors[:5]:
        print(vendor)