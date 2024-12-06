# AWS Cloud Practitioner Notes

This branch contains my notes from the AWS Practitioner course I am currently taking: **"Ultimate AWS Certified Cloud Practitioner CLF-C02 2025" by Stephane Maarek.** I created this repository to organize my studies, with each branch dedicated to a specific area of learning. This branch focuses entirely on my journey through the AWS Cloud Practitioner course, with notes structured by sessions to reflect my day-by-day progress.

---

## Day One: What is Cloud Computing

### 001 Traditional IT Overview

**Purpose of Section**: Introduces the basics of the Cloud and Cloud Computing. This section is theory-focused with minimal hands-on activities.

**Goal**: Provide context for understanding the usefulness of the Cloud and how it works.

#### Basics of How Websites Work:

- **Client-Server Model**:
  - Websites are hosted on servers.
  - Clients (browsers) connect to servers via a network to access websites.
  
- **Process**:
  1. Client sends a request through the network to the server.
  2. The server processes the request and sends back a response.
  
- **Role of IP Addresses**:
  - Both client and server need IP addresses for communication.
  - **Analogy**: Comparable to sending a letter:
    - The client writes a request (letter) and uses the network (post office) to send it to the server.
    - Server responds using the client’s return address.

#### Anatomy of a Server:

- **Key Components**:
  - **CPU**: Performs computations and calculations.
  - **RAM**: Fast memory for quick data storage and retrieval.
  - **Storage**: Long-term data storage (e.g., files, databases).
  - **Database**: Stores structured data for easy searching and querying.
  - **Networking**: Includes routers, switches, and DNS servers.
  
- **Analogy**:
  - **CPU + RAM = Brain**:
    - CPU handles computations (thinking).
    - RAM stores short-term memory.
    - Storage acts like long-term memory.

#### IT Terminology:

- **Network**: Composed of cables, routers, and servers interconnected.
- **Router**: Routes data packets between devices in a network, like a post office directing mail.
- **Switch**: Delivers data packets to the correct device within a local network.

#### Traditional IT Setup:

- **Before the Cloud**:
  - Companies hosted websites on physical servers purchased and set up locally (e.g., in garages).
  - Infrastructure was managed entirely in-house, requiring significant effort and resources.

---

### 002 What is Cloud Computing?

Cloud computing provides access to computing resources over the internet. Instead of owning physical hardware, you rent resources like storage, computing power, and networking from cloud providers, such as AWS, Azure, or Google Cloud.

#### Key Features of Cloud Computing:

- **On-Demand**: Resources are provided as needed.
- **Pay-As-You-Go Pricing**: Pay only for what you use, and stop paying when you no longer need it.

#### Key Benefits:

1. **Flexibility**:
   - Adjust resource size and type based on needs.
   - Example: Provision 1 or 10 servers as required, scaling up or down instantly.
   
2. **Instant Access**:
   - Resources like servers are provisioned within seconds without advance notice.
   
3. **Ease of Use**:
   - Intuitive interfaces enable access to servers, storage, databases, and application services.
   
4. **Managed Hardware**:
   - Cloud providers like AWS handle the infrastructure, while users focus on provisioning and usage.

#### Comparison to Traditional IT:

- Traditional IT required setting up and maintaining physical data centers.
- Cloud computing replaces this with shared data centers managed by providers, allowing users to focus solely on their applications.

#### Everyday Use Cases:

- **Gmail**: A cloud-based email service where you use storage without provisioning servers.
- **Cloud Storage Services**: 
  - Dropbox, Google Drive, iCloud (Dropbox was originally built on AWS).
- **Streaming Services**:
  - Netflix runs entirely on AWS, offering on-demand video streaming.

#### Types of Clouds:

1. **Private Cloud**:
   - Dedicated cloud services for a single organization.
   - Managed by a third party but not shared with others.
   - Offers better security for sensitive applications.
   
2. **Public Cloud**:
   - Services are shared and accessible over the Internet.
   - Examples: AWS, Microsoft Azure, Google Cloud.
   - Ideal for scalability and flexibility.
   
3. **Hybrid Cloud**:
   - A mix of private and public clouds.
   - Combines on-premises resources with cloud infrastructure.
   - Balances control of sensitive data with cost efficiency.

#### Characteristics of Cloud Computing:

- **On-Demand Self-Service**: Users can provision resources as needed.
- **Resource Pooling**: Providers manage pooled resources shared across multiple clients.
- **Rapid Elasticity**: Scale resources up or down quickly to match demand.
- **Measured Service**: Resource usage is monitored, controlled, and billed based on consumption.
- **Broad Network Access**: Access resources over the Internet from various devices.

#### Advantages of Cloud Computing:

- Trade capital expense (CAPEX) for operational expense (OPEX)
- **On-Demand Access**: Resources like servers, databases, and networking can be provisioned as needed.
- **Scalability**: Ensures efficient use of resources by scaling services up or down.
- **Cost-Efficiency**: Pay-as-you-go pricing eliminates large upfront investments in hardware.
- **Global Reach**: Data centers worldwide ensure low-latency access and high availability.
- **Reliability**: Built-in disaster recovery and high availability mechanisms.
- **Security**: Leading providers implement robust security measures.

#### Problems Cloud Computing Solves:

- High capital costs, complex infrastructure management, limited scalability, geographical constraints, disaster recovery, and barriers to innovation.

---

### 003 The Different Types of Cloud Computing

Cloud computing can be categorized into three main types, each offering different levels of management and responsibility. These are **Infrastructure as a Service (IaaS)**, **Platform as a Service (PaaS)**, and **Software as a Service (SaaS)**.

#### 1. Infrastructure as a Service (IaaS)
- **Definition**: Provides foundational building blocks for IT infrastructure.
- **Components**: Includes raw computing resources like networking, data storage, and virtual machines.
- **Flexibility**: Similar to building with LEGO blocks, allowing users to create custom IT environments.
- **Responsibilities**: Users manage:
  - Application
  - Data
  - Runtime
  - Middleware
  - Operating System  
  Providers manage:
  - Virtualization
  - Servers
  - Storage
  - Networking  
- **Examples**: Amazon EC2, Google Cloud, Microsoft Azure, Rackspace, DigitalOcean, Linode.

#### 2. Platform as a Service (PaaS)
- **Definition**: Removes the need to manage the underlying infrastructure.
- **Focus**: Enables users to focus on application deployment and management.
- **Responsibilities**: Providers manage:
  - Infrastructure
  - Operating System
  - Middleware
  - Networking  
  Users manage:
  - Applications
  - Data  
- **Examples**: AWS Elastic Beanstalk, Heroku, Google App Engine, Windows Azure.

#### 3. Software as a Service (SaaS)
- **Definition**: Fully managed service where the provider manages both the application and infrastructure.
- **Usage**: Users access a complete product through a web interface without maintenance or updates.
- **Responsibilities**: Providers manage:
  - Infrastructure
  - Platform
  - Software  
  Users interact with:
  - The software application  
- **Examples**: AWS Rekognition, Google Apps (e.g., Gmail, Google Drive), Dropbox, Zoom.

<img src="/resources/1.png" alt="Types of Cloud Computing" width="700"/>

#### Cloud Pricing Models

**Pay-As-You-Go:**  

AWS offers a pay-as-you-go model based on three pricing fundamentals:  

- **Compute:** Pay for the exact compute time used.  
- **Storage:** Pay for the amount of data stored.  
- **Networking:** Pay only when data leaves the cloud (data entering the cloud is free).  

**Benefits:**  

This model reduces the need for costly investments in physical IT infrastructure, allowing for significant cost savings. Organizations pay only for what they actually need, avoiding over-provisioning and unused resources.  

---
## 004 AWS Cloud Overview

### History of AWS Cloud
- **2002**: Launched internally at Amazon for IT operations.
- **2004**: Publicly launched with Simple Queue Service (SQS).
- **2006**: Expanded services to include S3 (Storage) and EC2 (Compute).
- **Expansion**: Grew globally, enabling companies like Netflix, Dropbox, Airbnb, and NASA to utilize AWS.

### Current AWS Market Position
- **Leader**: Dominates Gartner's Magic Quadrant for 13 consecutive years.
- **Revenue (2023)**: $90 billion.
- **Market Share (Q1 2024)**:
  - AWS: **31%**
  - Microsoft: **25%**
- **Active Users**: Over 1 million.

### Applications on AWS
AWS supports a variety of industries and use cases:
- **Enterprise IT**
- **Backup and Storage**
- **Big Data Analytics**
- **Website Hosting**
- **Mobile and Social App Backends**
- **Gaming Servers**

### Global Infrastructure
AWS operates globally, leveraging:
- **Regions**: Clusters of data centers (e.g., US-East-1, EU-West-3).
- **Availability Zones**: Localized areas within regions for redundancy.
- **Edge Locations & Points of Presence**: Enable content delivery and low-latency access.

#### Key Insights
- Regions have unique codes (e.g., "US-East-1").
- Most services are region-specific.
- AWS regions are interconnected through a private network.

### Choosing an AWS Region
#### Factors to Consider:
1. **Compliance**: Ensure data residency adheres to government regulations.
2. **Latency**: Optimize for regions close to your user base.
3. **Service Availability**: Some services are region-specific.
4. **Pricing**: Costs may vary across regions.

---

### 007 Shared Responsibility Model & AWS Acceptable Policy

#### 1. Shared Responsibility Model
- **Definition**: Divides responsibilities between AWS and customers.
- **Customer Responsibility (Security in the Cloud)**:
  - Data protection and encryption.
  - Operating system management.
  - Network and firewall configuration.
  - Application security settings.
- **AWS Responsibility (Security of the Cloud)**:
  - Underlying infrastructure (hardware, software).
  - Data centers and physical security.
  - Network and host-level security.
 
<img src="/resources/2.png" alt="Shared Responsibility Model" width="700"/>


#### 2. Exam Relevance
- Expect questions distinguishing customer vs. AWS responsibilities in the AWS Certified Cloud Practitioner exam.

#### 3. AWS Acceptable Use Policy
- **Prohibited Actions**:
  - Illegal, harmful, or offensive activities.
  - Security violations (e.g., unauthorized access).
  - Network abuse.
  - Email and messaging abuse.
- **Purpose**: Ensures ethical and secure use of AWS services.
---
---

## Day 2: Understanding IAM in AWS  


### **1. Introduction to IAM**  
- **What is IAM?**  
  - Stands for **Identity and Access Management**.  
  - A **global service** for managing access to AWS resources.  
  - **Root account** is created by default:  
    - Should **not** be shared or frequently used.  
  - Users:  
    - Represent people within an organization.  
    - Can belong to **groups** but do not have to.  
    - A user can belong to **multiple groups**.  
  - Groups:  
    - Contain **users only** (not other groups).  

---

### **2. IAM Permissions**  
- **Policies**:  
  - JSON documents defining user permissions.  
  - Examples of policy elements:  
    ```json
    {
      "Effect": "Allow",
      "Action": "ec2:Describe*",
      "Resource": "*"
    }
    ```
  - Follow the **principle of least privilege**: Grant only necessary permissions.  

---

### **3. IAM Policy Structure**  
- Components of a Policy:  
  - **Version**: Defines the policy language (e.g., `2012-10-17`).  
  - **Id** (optional): Policy identifier.  
  - **Statement**: Main block with the following elements:  
    - **Sid** (optional): Statement identifier.  
    - **Effect**: Either **Allow** or **Deny**.  
    - **Principal**: The entity (user/role) the policy applies to.  
    - **Action**: List of allowed/denied actions.  
    - **Resource**: List of resources the actions apply to.  
    - **Condition** (optional): Conditions for applying the policy.  

---

### **4. IAM Password Policies**  
- Characteristics:  
  - Set a **minimum password length**.  
  - Require:  
    - Uppercase and lowercase letters.  
    - Numbers.  
    - Non-alphanumeric characters.  
  - Additional Features:  
    - Allow users to **change passwords**.  
    - Enforce **password expiration**.  
    - Prevent **password reuse**.  

---

### **5. Multi-Factor Authentication (MFA)**  
- Combines:  
  - Something you **know** (password).  
  - Something you **own** (security device).  
- Purpose:  
  - Protect accounts if passwords are compromised.  
- Supported MFA Devices:  
  - **Virtual MFA Devices**:  
    - Examples: Google Authenticator, Authy.  
  - **Hardware Key Fobs**:  
    - Providers: Gemalto, SurePassID.  
  - **U2F Security Keys**:  
    - Example: YubiKey.  

---

### **6. Accessing AWS**  
- Methods:  
  1. **AWS Management Console**:  
     - Protected by password + MFA.  
  2. **AWS Command Line Interface (CLI)**:  
     - Requires **Access Keys**.  
  3. **AWS SDK**:  
     - Allows programmatic access.  
- Access Key Components:  
  - **Access Key ID**: Like a username.  
  - **Secret Access Key**: Like a password.  
  - Both are sensitive and **should not be shared**.  

---

### **7. AWS CLI and SDK**  
- **AWS CLI**:  
  - Command-line tool to interact with AWS services.  
  - Directly accesses AWS public APIs.  
  - Enables automation via scripts.  
- **AWS SDK**:  
  - Provides language-specific APIs.  
  - Integrates AWS into applications.  
  - Supports multiple languages (Python, Java, Node.js, etc.).  

---

### **8. IAM Roles**  
- Used by AWS services to perform actions on your behalf.  
- Common examples:  
  - **EC2 Instance Roles**.  
  - **Lambda Function Roles**.  
  - **Roles for CloudFormation**.  

---

### **9. IAM Security Tools**  
- **IAM Credentials Report**:  
  - Lists all account users and their credential status.  
- **IAM Last Accessed**:  
  - Shows service permissions granted to a user and last access time.  

---

### **10. Best Practices**  
- Do **not** use the root account except for initial setup.  
- Follow these guidelines:  
  - One physical user = One AWS user.  
  - Use **groups** to manage user permissions.  
  - Enforce a **strong password policy**.  
  - Enable and enforce **MFA**.  
  - Use **roles** for granting permissions to AWS services.  
  - Regularly **audit permissions** using IAM tools.  
  - Never share IAM credentials.  

---

### **11. Shared Responsibility Model**  
- AWS is responsible for:  
  - **Infrastructure security**.  
  - **Vulnerability analysis**.  
  - **Compliance validation**.  
- You are responsible for:  
  - Managing **users, groups, roles, and policies**.  
  - Enabling **MFA**.  
  - Rotating and securing keys.  
  - Auditing and revising access permissions.  

---

### **12. Summary**  
- **Users**: Physical people with passwords.  
- **Groups**: Collections of users.  
- **Policies**: JSON documents for permissions.  
- **Roles**: Allow AWS services to act on your behalf.  
- **Security**: MFA and password policies.  
- **Access**:  
  - AWS Console: Password + MFA.  
  - CLI and SDK: Access Keys.  
- **Auditing**: Credentials Report and Access Advisor.  

---
---

