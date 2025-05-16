export const orders = [
  {
    id: 1,
    orderNumber: "ORD-12345",
    fullName: "John Doe",
    email: "john.doe@example.com",
    status: "Processing",
    shippingDetails: {
      address: "123 Main St, Apt 4B, New York, NY 10001",
      lastUpdated: new Date(Date.now() - 60000), // 1 minute ago
      handler: "Sarah Johnson",
      packingSlipPrinted: false,
      shipper: "FedEx",
      trackingNumber: "FX123456789"
    }
  },
  {
    id: 2,
    orderNumber: "ORD-67890",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Shipped",
    shippingDetails: {
      address: "456 Oak Ave, Suite 200, Los Angeles, CA 90015",
      lastUpdated: new Date(Date.now() - 3600000), // 1 hour ago
      handler: "Michael Brown",
      packingSlipPrinted: true,
      shipper: "UPS",
      trackingNumber: "1Z123456789"
    }
  },
  {
    id: 3,
    orderNumber: "ORD-54321",
    fullName: "Robert Johnson",
    email: "robert.j@example.com",
    status: "Delivered",
    shippingDetails: {
      address: "789 Pine Rd, Unit 5, Chicago, IL 60601",
      lastUpdated: new Date(Date.now() - 86400000), // 1 day ago
      handler: "Emily Davis",
      packingSlipPrinted: true,
      shipper: "USPS",
      trackingNumber: "9400100000000000000000"
    }
  },
  {
    id: 4,
    orderNumber: "ORD-98765",
    fullName: "Alice Williams",
    email: "alice.w@example.com",
    status: "Cancelled",
    shippingDetails: {
      address: "321 Elm Blvd, Apt 12, Seattle, WA 98101",
      lastUpdated: new Date(Date.now() - 172800000), // 2 days ago
      handler: "David Wilson",
      packingSlipPrinted: false,
      shipper: "DHL",
      trackingNumber: "1234567890"
    }
  },
  {
    id: 5,
    orderNumber: "ORD-13579",
    fullName: "Michael Brown",
    email: "michael.b@example.com",
    status: "Returned",
    shippingDetails: {
      address: "654 Maple St, Unit 3, Boston, MA 02108",
      lastUpdated: new Date(Date.now() - 259200000), // 3 days ago
      handler: "Jessica Taylor",
      packingSlipPrinted: true,
      shipper: "FedEx",
      trackingNumber: "FX987654321"
    }
  },
  {
    id: 6,
    orderNumber: "ORD-24680",
    fullName: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "Processing",
    shippingDetails: {
      address: "987 Cedar Ln, Apt 7, Austin, TX 78701",
      lastUpdated: new Date(Date.now() - 300000), // 5 minutes ago
      handler: "Thomas Anderson",
      packingSlipPrinted: false,
      shipper: "UPS",
      trackingNumber: "1Z987654321"
    }
  },
  {
    id: 7,
    orderNumber: "ORD-11223",
    fullName: "David Wilson",
    email: "david.w@example.com",
    status: "Shipped",
    shippingDetails: {
      address: "753 Birch Ave, Suite 15, Denver, CO 80202",
      lastUpdated: new Date(Date.now() - 7200000), // 2 hours ago
      handler: "Lisa Martinez",
      packingSlipPrinted: true,
      shipper: "USPS",
      trackingNumber: "9400111111111111111111"
    }
  },
  {
    id: 8,
    orderNumber: "ORD-33445",
    fullName: "Emily Davis",
    email: "emily.d@example.com",
    status: "Delivered",
    shippingDetails: {
      address: "159 Willow Way, Unit 9, Miami, FL 33101",
      lastUpdated: new Date(Date.now() - 432000000), // 5 days ago
      handler: "Robert Johnson",
      packingSlipPrinted: true,
      shipper: "FedEx",
      trackingNumber: "FX112233445"
    }
  },
  {
    id: 9,
    orderNumber: "ORD-55667",
    fullName: "Thomas Anderson",
    email: "thomas.a@example.com",
    status: "Processing",
    shippingDetails: {
      address: "852 Redwood Dr, Apt 22, Phoenix, AZ 85001",
      lastUpdated: new Date(Date.now() - 120000), // 2 minutes ago
      handler: "Alice Williams",
      packingSlipPrinted: false,
      shipper: "DHL",
      trackingNumber: "9876543210"
    }
  },
  {
    id: 10,
    orderNumber: "ORD-77889",
    fullName: "Jessica Taylor",
    email: "jessica.t@example.com",
    status: "Shipped",
    shippingDetails: {
      address: "369 Spruce Ct, Suite 5, Philadelphia, PA 19102",
      lastUpdated: new Date(Date.now() - 14400000), // 4 hours ago
      handler: "Michael Brown",
      packingSlipPrinted: true,
      shipper: "UPS",
      trackingNumber: "1Z334455667"
    }
  }
];