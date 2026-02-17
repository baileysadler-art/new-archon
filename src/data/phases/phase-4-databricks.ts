import type { Phase } from "@/types";

export const phase4: Phase = {
  id: "phase-4",
  slug: "databricks-platform",
  title: "Databricks Platform",
  description:
    "Master the Databricks platform: lakehouse architecture, Unity Catalog, workspace administration, Spark basics, and security features.",
  weekRange: "Weeks 17-22",
  estimatedHours: 60,
  icon: "Database",
  color: "orange",
  modules: [
    // ==================== MODULE 1: DATABRICKS ARCHITECTURE ====================
    {
      id: "phase-4-module-1",
      slug: "databricks-architecture",
      phaseId: "phase-4",
      title: "Databricks Architecture & Lakehouse Concepts",
      description:
        "Understand the Databricks lakehouse architecture, control plane vs data plane, and how it unifies data warehousing and data lakes.",
      estimatedHours: 12,
      databricksCompanion: {
        title: "Databricks Academy - Free Courses",
        url: "https://www.databricks.com/learn/training/home",
        description:
          "Sign up for Databricks Academy and start the free lakehouse fundamentals course.",
        isFree: true,
      },
      labExercise: {
        title: "Databricks Community Edition Exploration",
        objective:
          "Set up a free Databricks Community Edition account and explore the workspace interface.",
        instructions: [
          "Go to https://community.cloud.databricks.com/ and create a free account.",
          "Explore the workspace: navigate Workspace, Repos, Data, Compute, and Workflows tabs.",
          "Create a new notebook and select Python as the language.",
          "Create a small cluster (Community Edition provides a single-node cluster).",
          "Run a simple Spark command: spark.range(10).show() to verify everything works.",
          "Explore the Data tab and look at sample datasets.",
          "Take screenshots of each area and write a paragraph about what each section does.",
        ],
        deliverable:
          "A document with screenshots and descriptions of each workspace section, plus your first Spark output.",
        estimatedMinutes: 45,
      },
      lessons: [
        {
          id: "phase-4-module-1-lesson-1",
          slug: "what-is-databricks",
          moduleId: "phase-4-module-1",
          title: "What Is Databricks?",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Databricks Overview",
                type: "text",
                body: "**Databricks** is a unified data analytics platform built around Apache Spark. Founded in 2013 by the creators of Spark, Delta Lake, and MLflow, it has become one of the most important platforms in the data and AI industry.\n\n**What Databricks does:**\n- Data engineering: Build and manage data pipelines\n- Data science: Explore data and build ML models\n- Machine learning: Train, track, and deploy models at scale\n- SQL analytics: Run SQL queries and build dashboards\n- Real-time analytics: Process streaming data\n- AI/Generative AI: Build and serve LLM-powered applications\n\n**Key insight:** Databricks aims to be the single platform where all data and AI work happens. This consolidation is why security professionals need to understand it deeply -- securing one platform secures a huge amount of an organization's data infrastructure.",
              },
              {
                heading: "The Lakehouse Architecture",
                type: "text",
                body: "Databricks pioneered the **lakehouse** -- a new architecture combining:\n\n**Data Lake benefits:**\n- Store any data format (structured, semi-structured, unstructured)\n- Cheap cloud storage (S3, ADLS, GCS)\n- Open file formats (Parquet, ORC)\n\n**Data Warehouse benefits:**\n- ACID transactions (reliable reads and writes)\n- Schema enforcement and evolution\n- High-performance SQL queries\n- Data governance and access controls\n\n**The magic:** Delta Lake, an open-source storage layer, adds warehouse-quality reliability to data lake storage. It stores data as Parquet files in your cloud storage but adds a transaction log that enables ACID transactions, time travel, schema enforcement, and audit history.\n\nBefore lakehouses, companies maintained separate data lakes AND data warehouses, duplicating data and creating governance nightmares. The lakehouse eliminates this.",
              },
              {
                heading: "Control Plane vs Data Plane",
                type: "text",
                body: "Databricks uses a split architecture that is critical for security:\n\n**Control Plane (managed by Databricks):**\n- Workspace UI and notebook interface\n- Job scheduler and cluster manager\n- User management and authentication\n- REST API endpoints\n- Notebook storage (encrypted)\n- Runs in Databricks' own cloud account\n\n**Data Plane (your cloud account):**\n- Compute clusters (VMs running Spark)\n- Your data in cloud storage (S3, ADLS, GCS)\n- VPC/VNet networking\n- Encryption keys (customer-managed option)\n- Runs entirely within YOUR cloud account\n\n**Security implication:** Your data never leaves your cloud account. Databricks orchestrates computation but does not store your data. This is a major selling point for security-conscious organizations and a key concept for your consulting work.",
              },
              {
                heading: "Cloud Deployment Models",
                type: "note",
                body: "Databricks deploys on all three major clouds:\n\n**Databricks on AWS:**\n- Data plane runs in your AWS VPC\n- Storage in S3\n- IAM roles for authentication\n- PrivateLink for control plane connectivity\n\n**Databricks on Azure:**\n- Integrated with Azure Active Directory\n- Storage in ADLS Gen2\n- Managed VNet injection\n- Private endpoints for control plane\n\n**Databricks on GCP:**\n- Storage in GCS\n- VPC Service Controls\n- Customer-managed encryption keys via Cloud KMS\n\nAs a security consultant, you may need to assess Databricks deployments on any of these clouds. The security architecture differs slightly for each.",
              },
            ],
            keyConcepts: [
              {
                term: "Lakehouse",
                definition:
                  "Architecture combining data lake flexibility and cost with data warehouse reliability and governance.",
              },
              {
                term: "Delta Lake",
                definition:
                  "Open-source storage layer adding ACID transactions, time travel, and schema enforcement to cloud data lakes.",
              },
              {
                term: "Control Plane",
                definition:
                  "Databricks-managed infrastructure handling UI, scheduling, and orchestration.",
              },
              {
                term: "Data Plane",
                definition:
                  "Customer-owned infrastructure where compute and data reside, within your cloud account.",
              },
              {
                term: "ACID Transactions",
                definition:
                  "Atomicity, Consistency, Isolation, Durability -- guarantees that data operations are reliable.",
              },
            ],
            externalResources: [
              {
                title: "Databricks Lakehouse Architecture",
                url: "https://www.databricks.com/product/data-lakehouse",
                type: "documentation",
                isFree: true,
                description:
                  "Official overview of the Databricks lakehouse architecture.",
              },
              {
                title: "Delta Lake Documentation",
                url: "https://docs.delta.io/latest/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Open-source Delta Lake documentation with technical details.",
              },
              {
                title: "What is a Data Lakehouse? - Databricks",
                url: "https://www.youtube.com/watch?v=rGxNLfsPhqA",
                type: "video",
                isFree: true,
                description:
                  "Video explanation of the lakehouse concept from Databricks.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-1-1",
            lessonId: "phase-4-module-1-lesson-1",
            questions: [
              {
                id: "q4-1-1-1",
                question:
                  "In the Databricks architecture, where does your data live?",
                options: [
                  "In Databricks' cloud account",
                  "In your own cloud account (data plane)",
                  "On Databricks' physical servers",
                  "In a shared multi-tenant database",
                ],
                correctIndex: 1,
                explanation:
                  "Your data stays in the data plane, which runs entirely in your own cloud account. Databricks never stores your data.",
              },
              {
                id: "q4-1-1-2",
                question:
                  "What does Delta Lake add to a traditional data lake?",
                options: [
                  "GPU computing",
                  "ACID transactions, time travel, and schema enforcement",
                  "Faster internet connectivity",
                  "Built-in machine learning models",
                ],
                correctIndex: 1,
                explanation:
                  "Delta Lake adds warehouse-quality reliability (ACID, schema, time travel) to cheap data lake storage.",
              },
              {
                id: "q4-1-1-3",
                question:
                  "Which cloud providers does Databricks run on?",
                options: [
                  "AWS only",
                  "AWS and Azure only",
                  "AWS, Azure, and GCP",
                  "Google Cloud only",
                ],
                correctIndex: 2,
                explanation:
                  "Databricks is cloud-agnostic and runs on all three major providers: AWS, Azure, and GCP.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-1-lesson-2",
          slug: "delta-lake-deep-dive",
          moduleId: "phase-4-module-1",
          title: "Delta Lake Deep Dive",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "How Delta Lake Works",
                type: "text",
                body: "Delta Lake stores data as **Parquet files** in your cloud storage (S3, ADLS, GCS), plus a **transaction log** (_delta_log directory) that records every change.\n\n**Transaction log:**\n- JSON files recording every commit (insert, update, delete, schema change)\n- Enables ACID transactions: operations either fully succeed or fully roll back\n- Periodic checkpoints (Parquet format) for faster log replay\n\n**Read process:**\n1. Read the transaction log to determine which Parquet files are valid\n2. Apply any pending changes\n3. Return consistent results\n\n**Write process:**\n1. Write new Parquet files\n2. Atomically update the transaction log\n3. Old files retained for time travel\n\nBecause the transaction log is the source of truth, concurrent reads and writes are safe -- this is critical for production data pipelines.",
              },
              {
                heading: "Time Travel",
                type: "text",
                body: "Delta Lake retains previous versions of data, enabling **time travel:**\n\n-- Query data as of a specific version\nSELECT * FROM my_table VERSION AS OF 5;\n\n-- Query data as of a specific timestamp\nSELECT * FROM my_table TIMESTAMP AS OF '2024-06-01';\n\n-- See the history of all changes\nDESCRIBE HISTORY my_table;\n\n-- Restore to a previous version\nRESTORE TABLE my_table TO VERSION AS OF 5;\n\n**Security implications:**\n- **Audit trail:** Time travel provides a built-in history of all data changes\n- **Data recovery:** Accidental deletes or corruptions can be reversed\n- **Forensics:** During an incident, you can see exactly what the data looked like before and after a suspicious change\n- **Compliance:** Demonstrate what data was used to train a model at a specific point in time",
              },
              {
                heading: "Medallion Architecture",
                type: "text",
                body: "Databricks recommends organizing data in three layers:\n\n**Bronze (Raw):**\n- Raw data as ingested from sources\n- Minimal or no transformation\n- Append-only, preserving original data\n- Schema may be loosely enforced\n\n**Silver (Cleaned):**\n- Filtered, cleaned, and deduplicated data\n- Schema enforced and validated\n- Joins between related datasets applied\n- Business rules implemented\n\n**Gold (Business-Ready):**\n- Aggregated, feature-engineered data\n- Ready for analytics, dashboards, and ML\n- Optimized for query performance\n- Strict access controls\n\nEach layer progressively improves data quality. Security controls typically tighten as data moves from bronze to gold -- raw data may have broad access for engineers, while gold tables containing PII have strict access controls.",
              },
              {
                heading: "Schema Enforcement and Evolution",
                type: "note",
                body: "Delta Lake provides schema management that is critical for data integrity:\n\n**Schema enforcement (schema-on-write):**\n- Rejects writes that do not match the table's schema\n- Prevents accidental data corruption from bad data\n- A new column appearing in source data is flagged rather than silently added\n\n**Schema evolution:**\n- When intentional changes are needed, schema can be evolved:\n- .option(\"mergeSchema\", \"true\") allows adding new columns\n- ALTER TABLE can modify column types and add constraints\n\n**Security relevance:** Schema enforcement prevents data injection attacks where an attacker tries to insert extra columns or change data types to exploit downstream systems.",
              },
            ],
            keyConcepts: [
              {
                term: "Transaction Log",
                definition:
                  "Delta Lake's ordered record of every change to a table, enabling ACID transactions and time travel.",
              },
              {
                term: "Time Travel",
                definition:
                  "Delta Lake feature to query or restore previous versions of data by version number or timestamp.",
              },
              {
                term: "Medallion Architecture",
                definition:
                  "Three-layer data organization: Bronze (raw), Silver (cleaned), Gold (business-ready).",
              },
              {
                term: "Schema Enforcement",
                definition:
                  "Delta Lake feature rejecting writes that do not match the defined table schema.",
              },
            ],
            externalResources: [
              {
                title: "Delta Lake Time Travel - Databricks",
                url: "https://docs.databricks.com/en/delta/history.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official documentation on Delta Lake versioning and time travel.",
              },
              {
                title: "Medallion Architecture - Databricks",
                url: "https://www.databricks.com/glossary/medallion-architecture",
                type: "article",
                isFree: true,
                description:
                  "Databricks guide to the Bronze/Silver/Gold architecture pattern.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-1-2",
            lessonId: "phase-4-module-1-lesson-2",
            questions: [
              {
                id: "q4-1-2-1",
                question:
                  "What makes Delta Lake's time travel possible?",
                options: [
                  "Cloud storage replication",
                  "The transaction log recording every change and retaining old data files",
                  "Database snapshots taken hourly",
                  "A separate backup system",
                ],
                correctIndex: 1,
                explanation:
                  "The transaction log records every commit and old Parquet files are retained, enabling queries against any previous version.",
              },
              {
                id: "q4-1-2-2",
                question:
                  "In the medallion architecture, which layer contains raw, unprocessed data?",
                options: ["Gold", "Silver", "Bronze", "Platinum"],
                correctIndex: 2,
                explanation:
                  "Bronze contains raw data as ingested from sources with minimal transformation.",
              },
              {
                id: "q4-1-2-3",
                question:
                  "How does schema enforcement help security?",
                options: [
                  "It encrypts all data",
                  "It prevents data injection by rejecting writes that do not match the defined schema",
                  "It compresses data to save space",
                  "It hides column names from users",
                ],
                correctIndex: 1,
                explanation:
                  "Schema enforcement rejects unexpected data, preventing injection of malicious extra columns or type changes.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-1-lesson-3",
          slug: "databricks-components",
          moduleId: "phase-4-module-1",
          title: "Key Databricks Components",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Workspaces",
                type: "text",
                body: "A **workspace** is the primary environment where users interact with Databricks. Think of it as a project container.\n\n**What a workspace contains:**\n- **Notebooks:** Interactive documents combining code, text, and visualizations (like Jupyter but collaborative)\n- **Repos:** Git-integrated repositories for version-controlled code\n- **Data Explorer:** Browse catalogs, schemas, and tables\n- **Workflows:** Automated job pipelines\n- **Compute:** Cluster management\n- **SQL Editor:** Write and run SQL queries\n\n**Multi-workspace strategy:** Organizations often use separate workspaces for development, staging, and production. This provides isolation boundaries -- a bug in dev cannot affect production data.\n\nEach workspace maps to a deployment in your cloud account with its own VPC, IAM roles, and security configuration.",
              },
              {
                heading: "Clusters",
                type: "text",
                body: "A **cluster** is a set of virtual machines that run your Spark computations.\n\n**Types of clusters:**\n\n**All-Purpose Clusters:** Interactive, used with notebooks. Multiple users can share them. Configurable auto-termination.\n\n**Job Clusters:** Created for a specific job, destroyed after it completes. Cost-efficient for production workloads.\n\n**SQL Warehouses:** Serverless compute optimized for SQL queries. Auto-scales based on demand.\n\n**Cluster configuration:**\n- Instance type (CPU, memory, GPU)\n- Number of workers (auto-scaling range)\n- Spark version (Databricks Runtime)\n- Libraries and init scripts\n- Access mode (shared, single-user, no isolation)\n\n**Security concern:** Cluster access mode determines isolation. In 'shared' mode, multiple users share the same Spark context. In 'single-user' mode, only one user can access the cluster, providing better isolation for sensitive workloads.",
              },
              {
                heading: "Notebooks and Repos",
                type: "text",
                body: "**Notebooks:**\n- Support Python, SQL, Scala, and R\n- Collaborative real-time editing\n- Rich visualizations and dashboards\n- Cell-by-cell execution\n- Can be scheduled as jobs\n- Stored in the control plane (encrypted at rest)\n\n**Repos (Git integration):**\n- Clone repos from GitHub, GitLab, Bitbucket, Azure DevOps\n- Branch, commit, and push directly from Databricks\n- Code review workflows supported\n- Enables CI/CD pipelines for data engineering and ML\n\n**Workflows (Jobs):**\n- Orchestrate multi-step pipelines\n- Schedule on cron or trigger on events\n- Dependency management between tasks\n- Retry logic and alerting on failure\n- Audit logs for every execution",
              },
              {
                heading: "Databricks Runtime",
                type: "note",
                body: "The **Databricks Runtime** is the environment running on each cluster. It includes:\n\n- Apache Spark (optimized by Databricks with Photon engine)\n- Delta Lake\n- Pre-installed libraries (pandas, numpy, scikit-learn, TensorFlow, PyTorch)\n- ML-specific runtimes with GPU support\n- Security patches and updates managed by Databricks\n\n**Runtime versions:** Databricks releases new runtimes regularly. As a security professional, you should ensure workloads use supported (non-EOL) runtimes with the latest security patches. Older runtimes may have known vulnerabilities.\n\n**Photon:** Databricks' native vectorized query engine. Written in C++, it dramatically accelerates SQL and DataFrame operations -- up to 12x faster than open-source Spark for certain workloads.",
              },
            ],
            keyConcepts: [
              {
                term: "Workspace",
                definition:
                  "Primary Databricks environment containing notebooks, repos, data, compute, and workflows.",
              },
              {
                term: "Cluster",
                definition:
                  "Set of virtual machines running Spark computations. Configured with instance type, workers, and access mode.",
              },
              {
                term: "SQL Warehouse",
                definition:
                  "Serverless compute endpoint optimized for SQL queries with automatic scaling.",
              },
              {
                term: "Databricks Runtime",
                definition:
                  "The software environment on clusters including Spark, Delta Lake, and pre-installed libraries.",
              },
              {
                term: "Photon",
                definition:
                  "Databricks' native C++ query engine providing dramatic performance improvements over standard Spark.",
              },
            ],
            externalResources: [
              {
                title: "Databricks Community Edition (Free)",
                url: "https://community.cloud.databricks.com/",
                type: "tool",
                isFree: true,
                description:
                  "Free Databricks environment for learning and experimentation.",
              },
              {
                title: "Databricks Documentation",
                url: "https://docs.databricks.com/en/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Complete official Databricks documentation.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-1-3",
            lessonId: "phase-4-module-1-lesson-3",
            questions: [
              {
                id: "q4-1-3-1",
                question:
                  "Why would an organization use separate workspaces for dev, staging, and production?",
                options: [
                  "To make navigation easier",
                  "To provide isolation boundaries so dev bugs cannot affect production data",
                  "Databricks requires separate workspaces",
                  "To reduce costs",
                ],
                correctIndex: 1,
                explanation:
                  "Separate workspaces provide security isolation. Each has its own VPC, IAM, and access controls.",
              },
              {
                id: "q4-1-3-2",
                question:
                  "Which cluster type is most cost-efficient for production workloads?",
                options: [
                  "All-purpose clusters",
                  "Job clusters",
                  "SQL warehouses",
                  "Single-node clusters",
                ],
                correctIndex: 1,
                explanation:
                  "Job clusters are created for a specific job and destroyed after, so you only pay for actual compute time.",
              },
              {
                id: "q4-1-3-3",
                question:
                  "Why is cluster access mode a security concern?",
                options: [
                  "It affects performance only",
                  "Shared mode lets multiple users access the same Spark context, reducing isolation",
                  "Single-user mode is more expensive",
                  "Access mode does not affect security",
                ],
                correctIndex: 1,
                explanation:
                  "In shared mode, users share resources and can potentially access each other's data. Single-user mode provides better isolation.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 2: UNITY CATALOG ====================
    {
      id: "phase-4-module-2",
      slug: "unity-catalog",
      phaseId: "phase-4",
      title: "Unity Catalog & Data Governance",
      description:
        "Learn Unity Catalog for centralized governance: managing permissions, data lineage, and access controls across the lakehouse.",
      estimatedHours: 12,
      labExercise: {
        title: "Unity Catalog Governance Lab",
        objective:
          "Design a Unity Catalog structure and access control policies for a multi-team data organization.",
        instructions: [
          "Scenario: A company has Data Engineering, Data Science, Analytics, and Security teams using Databricks.",
          "Design the 3-level namespace: create a catalog hierarchy (e.g., prod, dev, staging catalogs with schemas for each domain).",
          "Define table ownership: specify which team owns each schema and its tables.",
          "Create an access control matrix: map each team to their GRANT permissions on catalogs, schemas, and tables.",
          "Design row-level and column-level security policies for a table containing customer PII.",
          "Document a lineage scenario: trace how raw data flows from bronze through silver to a gold feature table used for ML.",
          "Write an audit checklist: 10 items a security auditor should verify in a Unity Catalog deployment.",
        ],
        deliverable:
          "A governance design document with namespace hierarchy, access matrix, security policies, lineage diagram, and audit checklist.",
        estimatedMinutes: 75,
      },
      lessons: [
        {
          id: "phase-4-module-2-lesson-1",
          slug: "unity-catalog-overview",
          moduleId: "phase-4-module-2",
          title: "Unity Catalog Overview",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "What Is Unity Catalog?",
                type: "text",
                body: "**Unity Catalog** is Databricks' unified governance solution for all data and AI assets. It is the single most important security feature of the Databricks platform.\n\n**What it governs:**\n- Tables (managed and external)\n- Views\n- Volumes (files and unstructured data)\n- Functions (UDFs)\n- ML Models\n- Feature tables\n- Connections to external data sources\n\n**Before Unity Catalog:** Each workspace had its own metastore (Hive metastore). No cross-workspace governance, no centralized access controls, no unified lineage. A security nightmare for large organizations.\n\n**With Unity Catalog:** One governance layer spans all workspaces in an account. Policies set once apply everywhere. A single place to see who has access to what.",
              },
              {
                heading: "Three-Level Namespace",
                type: "text",
                body: "Unity Catalog organizes data in a three-level hierarchy:\n\n**Catalog → Schema → Table/View/Function/Model**\n\nExample:\nprod_catalog.customer_data.transactions\ndev_catalog.ml_features.user_embeddings\n\n**Catalog:** Top-level container. Typically maps to environments (prod, dev, staging) or business domains (finance, marketing, ml).\n\n**Schema (Database):** Groups related tables. Maps to teams or data domains.\n\n**Objects:** Tables, views, functions, models within a schema.\n\n**Metastore:** The top-level container that spans all catalogs. One metastore per Databricks account per region. Contains the governance metadata, permissions, and audit logs.\n\nThis hierarchy enables granular permissions: grant access to an entire catalog, a specific schema, or a single table.",
              },
              {
                heading: "Managed vs External Tables",
                type: "text",
                body: "**Managed Tables:**\n- Unity Catalog manages both the metadata AND the data files\n- Data is stored in a managed storage location controlled by the metastore\n- Dropping the table deletes the data\n- Recommended for most use cases -- simpler governance\n\n**External Tables:**\n- Unity Catalog manages metadata only; data files are in a user-specified location\n- Dropping the table removes the metadata but NOT the data\n- Used when data must remain in a specific storage location\n- Requires storage credentials and external locations to be registered\n\n**Security implication:** External tables introduce governance gaps because the data lives outside Unity Catalog's managed storage. Access to the underlying cloud storage could bypass Unity Catalog permissions. Always audit external table configurations carefully.",
              },
              {
                heading: "Critical for Your Career",
                type: "note",
                body: "Unity Catalog is the centerpiece of Databricks security and governance. As an AI security consultant:\n\n- **Every Databricks security assessment** will involve reviewing Unity Catalog configuration\n- **Access control audits** check who has what permissions at each namespace level\n- **Data governance reviews** verify lineage, classification, and compliance\n- **Migration projects** often involve moving from legacy Hive metastore to Unity Catalog\n\nOrganizations with poorly configured Unity Catalog (or no Unity Catalog) have significant security gaps. Your ability to assess and improve their configuration is extremely valuable.",
              },
            ],
            keyConcepts: [
              {
                term: "Unity Catalog",
                definition:
                  "Databricks' unified governance layer for all data and AI assets across workspaces.",
              },
              {
                term: "Metastore",
                definition:
                  "Top-level Unity Catalog container per account per region. Holds governance metadata and permissions.",
              },
              {
                term: "Three-Level Namespace",
                definition:
                  "Catalog.Schema.Object hierarchy for organizing and governing data assets.",
              },
              {
                term: "Managed Table",
                definition:
                  "Table where Unity Catalog manages both metadata and data files in controlled storage.",
              },
              {
                term: "External Table",
                definition:
                  "Table where Unity Catalog manages metadata only; data resides in user-specified storage.",
              },
            ],
            externalResources: [
              {
                title: "Unity Catalog Documentation",
                url: "https://docs.databricks.com/en/data-governance/unity-catalog/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Complete official Unity Catalog documentation.",
              },
              {
                title: "Unity Catalog Best Practices",
                url: "https://docs.databricks.com/en/data-governance/unity-catalog/best-practices.html",
                type: "documentation",
                isFree: true,
                description:
                  "Databricks' recommended practices for Unity Catalog deployment.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-2-1",
            lessonId: "phase-4-module-2-lesson-1",
            questions: [
              {
                id: "q4-2-1-1",
                question:
                  "What is the three-level namespace in Unity Catalog?",
                options: [
                  "Database.Table.Column",
                  "Catalog.Schema.Object",
                  "Workspace.Cluster.Notebook",
                  "Account.Region.Storage",
                ],
                correctIndex: 1,
                explanation:
                  "Unity Catalog uses Catalog.Schema.Object (Table/View/Function/Model) as its hierarchy.",
              },
              {
                id: "q4-2-1-2",
                question:
                  "What happens when you drop an external table in Unity Catalog?",
                options: [
                  "Both metadata and data are deleted",
                  "Only the metadata is removed; the data files remain",
                  "The table is archived",
                  "Nothing happens",
                ],
                correctIndex: 1,
                explanation:
                  "Dropping an external table removes Unity Catalog metadata but the data files in external storage remain untouched.",
              },
              {
                id: "q4-2-1-3",
                question:
                  "Why was Unity Catalog a major security improvement over the legacy Hive metastore?",
                options: [
                  "It is faster",
                  "It provides centralized governance across all workspaces in an account",
                  "It is open source",
                  "It does not require cloud storage",
                ],
                correctIndex: 1,
                explanation:
                  "Before Unity Catalog, each workspace had isolated governance. Unity Catalog provides one governance layer across all workspaces.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-2-lesson-2",
          slug: "permissions-and-access-control",
          moduleId: "phase-4-module-2",
          title: "Permissions & Access Control in Unity Catalog",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "Unity Catalog Privileges",
                type: "text",
                body: "Unity Catalog uses SQL-based GRANT/REVOKE statements for access control:\n\n**Object-level privileges:**\n- **SELECT:** Read data from a table or view\n- **MODIFY:** Insert, update, delete data\n- **CREATE TABLE/VIEW/FUNCTION:** Create objects within a schema\n- **CREATE SCHEMA:** Create schemas within a catalog\n- **CREATE CATALOG:** Create catalogs within the metastore\n- **USAGE:** Access to navigate into a container (required at each level)\n- **ALL PRIVILEGES:** Grants all applicable privileges\n\n**Inheritance:** Privileges granted on a catalog apply to all schemas and tables within it. Privileges on a schema apply to all objects within it.\n\n**Example:**\n-- Give data scientists read access to the ML features schema\nGRANT USAGE ON CATALOG prod_catalog TO data_scientists;\nGRANT USAGE ON SCHEMA prod_catalog.ml_features TO data_scientists;\nGRANT SELECT ON SCHEMA prod_catalog.ml_features TO data_scientists;",
              },
              {
                heading: "Row-Level and Column-Level Security",
                type: "text",
                body: "Unity Catalog supports fine-grained access control:\n\n**Row-Level Security (Row Filters):**\nRestrict which rows a user can see based on their identity.\n\n-- Users can only see their own department's data\nCREATE FUNCTION row_filter(department STRING)\nRETURN IF(IS_MEMBER('all_data_access'), true, department = CURRENT_USER_DEPARTMENT());\n\nALTER TABLE employees SET ROW FILTER row_filter ON (department);\n\n**Column-Level Security (Column Masks):**\nMask sensitive column values for unauthorized users.\n\n-- Mask SSN for non-privileged users\nCREATE FUNCTION mask_ssn(ssn STRING)\nRETURN IF(IS_MEMBER('pii_access'), ssn, 'XXX-XX-' || RIGHT(ssn, 4));\n\nALTER TABLE employees ALTER COLUMN ssn SET MASK mask_ssn;\n\nThese features let you share tables broadly while protecting sensitive rows and columns -- essential for GDPR and HIPAA compliance.",
              },
              {
                heading: "Identity and Groups",
                type: "text",
                body: "Unity Catalog integrates with identity providers for user management:\n\n**Users:** Individual identities, typically synced from your IdP (Azure AD, Okta, etc.) via SCIM.\n\n**Groups:** Collections of users. Permissions should always be granted to groups, not individual users.\n\n**Service Principals:** Machine identities for automated jobs and pipelines. Like service accounts.\n\n**Best practices:**\n- Sync groups from your IdP (do not create Databricks-only groups)\n- Use group-based permissions for all data access\n- Create service principals for all automated workloads\n- Regularly review group memberships and permissions\n- Never grant ALL PRIVILEGES broadly\n- Use USAGE + SELECT as the baseline for read-only access",
              },
              {
                heading: "Auditing Permissions",
                type: "warning",
                body: "As a security auditor, your checklist for Unity Catalog permissions:\n\n1. **Overprivileged accounts:** Anyone with ALL PRIVILEGES at the catalog or metastore level?\n2. **Direct user grants:** Permissions should go to groups, not individual users\n3. **USAGE without SELECT:** Check that USAGE is granted at each level (catalog AND schema)\n4. **External table access:** Are cloud storage permissions broader than Unity Catalog permissions?\n5. **Service principal permissions:** Are automated jobs using least privilege?\n6. **Row/column security:** Is PII protected with row filters and column masks?\n7. **Stale permissions:** Do former team members still have access?\n8. **Admin users:** Who has account admin and metastore admin roles?\n\nThese are the exact checks you will perform as an AI security consultant.",
              },
            ],
            keyConcepts: [
              {
                term: "GRANT/REVOKE",
                definition:
                  "SQL statements for giving and removing permissions on Unity Catalog objects.",
              },
              {
                term: "USAGE Privilege",
                definition:
                  "Required to navigate into a catalog or schema. Must be granted at each level of the hierarchy.",
              },
              {
                term: "Row-Level Security",
                definition:
                  "Restricting which rows a user can see based on their identity or group membership.",
              },
              {
                term: "Column Masking",
                definition:
                  "Dynamically hiding or obfuscating sensitive column values for unauthorized users.",
              },
              {
                term: "Service Principal",
                definition:
                  "Machine identity for automated workloads, equivalent to a service account.",
              },
            ],
            externalResources: [
              {
                title: "Unity Catalog Privileges - Databricks",
                url: "https://docs.databricks.com/en/data-governance/unity-catalog/manage-privileges/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official guide to managing privileges in Unity Catalog.",
              },
              {
                title: "Row Filters and Column Masks",
                url: "https://docs.databricks.com/en/data-governance/unity-catalog/row-and-column-filters.html",
                type: "documentation",
                isFree: true,
                description:
                  "Documentation for fine-grained data access controls.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-2-2",
            lessonId: "phase-4-module-2-lesson-2",
            questions: [
              {
                id: "q4-2-2-1",
                question:
                  "To give a group read access to a table, which privileges are needed?",
                options: [
                  "SELECT on the table only",
                  "USAGE on catalog, USAGE on schema, and SELECT on the table",
                  "ALL PRIVILEGES on the catalog",
                  "MODIFY on the table",
                ],
                correctIndex: 1,
                explanation:
                  "USAGE must be granted at each namespace level (catalog and schema) plus SELECT on the actual table.",
              },
              {
                id: "q4-2-2-2",
                question:
                  "What does column masking do?",
                options: [
                  "Encrypts the entire column",
                  "Dynamically hides or obfuscates sensitive values for unauthorized users",
                  "Deletes the column",
                  "Renames the column",
                ],
                correctIndex: 1,
                explanation:
                  "Column masks dynamically transform values (e.g., showing 'XXX-XX-1234' instead of full SSN) for users without the required group membership.",
              },
              {
                id: "q4-2-2-3",
                question:
                  "Why should permissions be granted to groups rather than individual users?",
                options: [
                  "Groups are faster",
                  "It is easier to manage, audit, and update as people change roles",
                  "Unity Catalog does not support user-level permissions",
                  "Individual permissions are more secure",
                ],
                correctIndex: 1,
                explanation:
                  "Group-based permissions are scalable and manageable. When someone changes roles, update their groups instead of dozens of individual grants.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-2-lesson-3",
          slug: "lineage-and-classification",
          moduleId: "phase-4-module-2",
          title: "Lineage, Classification & Audit Logs",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Automated Data Lineage",
                type: "text",
                body: "Unity Catalog automatically captures data lineage as data flows through the platform:\n\n**What is tracked:**\n- Table-to-table lineage (which tables feed into which)\n- Column-level lineage (which columns map to which)\n- Notebook and job lineage (which code created or modified the data)\n- ML model lineage (which data trained which model)\n\n**How it works:** Every time a Spark job or SQL query reads from or writes to a Unity Catalog table, the lineage is automatically recorded. No manual tagging or configuration needed.\n\n**Viewing lineage:** In the Databricks UI, navigate to a table and click the 'Lineage' tab to see:\n- Upstream dependencies (what feeds this table)\n- Downstream consumers (what reads from this table)\n- Column-level mappings\n- Job/notebook execution history",
              },
              {
                heading: "Data Classification",
                type: "text",
                body: "Unity Catalog can automatically detect and tag sensitive data:\n\n**Built-in classification:**\n- Scans table contents for PII patterns\n- Detects: names, emails, phone numbers, SSNs, credit card numbers, addresses\n- Applies sensitivity tags automatically\n- Tags can be used to enforce access policies\n\n**Custom tags:**\n- Add custom tags to catalogs, schemas, tables, and columns\n- Examples: 'compliance:gdpr', 'retention:90days', 'team:finance'\n- Tags can drive automated policy enforcement\n\n**Classification workflow:**\n1. Enable classification scanning on your metastore\n2. Run a classification scan on target tables\n3. Review detected PII and sensitivity tags\n4. Apply appropriate access controls based on classifications\n5. Set up column masks for tagged PII columns\n6. Document in your compliance reports",
              },
              {
                heading: "Audit Logging",
                type: "text",
                body: "Unity Catalog records every access and administrative action:\n\n**What is logged:**\n- Every data read (SELECT) and write (INSERT/UPDATE/DELETE)\n- Permission changes (GRANT/REVOKE)\n- Object creation and deletion\n- Schema changes\n- Authentication events\n- Administrative actions (workspace, cluster, user management)\n\n**Audit log delivery:** Logs are delivered to your cloud storage account as JSON files. You can:\n- Query them with Databricks SQL\n- Feed them into a SIEM (Splunk, Sentinel)\n- Build alerting dashboards\n- Generate compliance reports\n\n**Example audit query:**\nSELECT user_identity.email, action_name, request_params.full_name_arg\nFROM audit_logs\nWHERE action_name = 'getTable'\nAND date > current_date() - 7\nORDER BY event_time DESC;",
              },
              {
                heading: "Putting It All Together",
                type: "note",
                body: "The combination of lineage, classification, and audit logs gives you complete visibility into your data estate:\n\n**Scenario: Data breach investigation**\n1. Audit logs reveal an unusual data access pattern from a specific user\n2. Classification tags show the accessed table contains PII\n3. Lineage traces which downstream models were trained on this data\n4. Row-level security logs show exactly which rows were accessed\n5. Time travel shows the data state at the time of access\n\nThis is the power of unified governance. Without Unity Catalog, this investigation would require piecing together logs from multiple disconnected systems -- if the logs exist at all.\n\nAs a consultant, you will use these capabilities to conduct security assessments, investigate incidents, and demonstrate compliance to auditors.",
              },
            ],
            keyConcepts: [
              {
                term: "Automated Lineage",
                definition:
                  "Unity Catalog's automatic tracking of data flow between tables, columns, notebooks, and models.",
              },
              {
                term: "Data Classification",
                definition:
                  "Automatic detection and tagging of sensitive data patterns like PII in table contents.",
              },
              {
                term: "Audit Log",
                definition:
                  "Record of every access, change, and administrative action in the Databricks account.",
              },
              {
                term: "Column-Level Lineage",
                definition:
                  "Tracking which specific columns in source tables map to columns in destination tables.",
              },
            ],
            externalResources: [
              {
                title: "Unity Catalog Lineage - Databricks",
                url: "https://docs.databricks.com/en/data-governance/unity-catalog/data-lineage.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official documentation on Unity Catalog data lineage.",
              },
              {
                title: "Databricks Audit Logs",
                url: "https://docs.databricks.com/en/administration-guide/account-settings/audit-logs.html",
                type: "documentation",
                isFree: true,
                description:
                  "How to configure and query Databricks audit logs.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-2-3",
            lessonId: "phase-4-module-2-lesson-3",
            questions: [
              {
                id: "q4-2-3-1",
                question:
                  "How does Unity Catalog capture data lineage?",
                options: [
                  "Users must manually tag data flows",
                  "Automatically by tracking Spark jobs and SQL queries that read/write tables",
                  "By scanning source code for table references",
                  "Through a separate ETL tool",
                ],
                correctIndex: 1,
                explanation:
                  "Lineage is captured automatically every time a Spark job or SQL query interacts with Unity Catalog tables.",
              },
              {
                id: "q4-2-3-2",
                question:
                  "What does data classification in Unity Catalog detect?",
                options: [
                  "Query performance issues",
                  "PII patterns like names, emails, SSNs, and credit card numbers",
                  "Schema compatibility",
                  "Data freshness",
                ],
                correctIndex: 1,
                explanation:
                  "Classification scans table contents for sensitive data patterns and applies sensitivity tags automatically.",
              },
              {
                id: "q4-2-3-3",
                question:
                  "During a security investigation, which three Unity Catalog features work together?",
                options: [
                  "Clusters, notebooks, and workflows",
                  "Audit logs, lineage, and classification",
                  "SQL, Python, and Scala",
                  "Compute, storage, and networking",
                ],
                correctIndex: 1,
                explanation:
                  "Audit logs show who accessed what, lineage shows data flow, and classification identifies what data is sensitive.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 3: WORKSPACE MANAGEMENT ====================
    {
      id: "phase-4-module-3",
      slug: "workspace-management",
      phaseId: "phase-4",
      title: "Workspace Management & Administration",
      description:
        "Configure and manage Databricks workspaces, clusters, jobs, and user access.",
      estimatedHours: 12,
      labExercise: {
        title: "Workspace Security Review Lab",
        objective:
          "Perform a security review of a Databricks workspace configuration using a structured checklist.",
        instructions: [
          "Using your Databricks Community Edition account (or documentation if limited features), review each area below.",
          "Check user and group management: Are there overprivileged users? Any orphaned accounts?",
          "Review cluster configurations: Are clusters using the latest runtime? Is auto-termination set?",
          "Examine networking: Is the workspace deployed in a VPC? Are IP access lists configured?",
          "Check secrets management: Are any credentials hardcoded in notebooks? Is Secrets API being used?",
          "Review audit log settings: Are audit logs being delivered? Where are they stored?",
          "Create a security findings report with: finding, risk level (H/M/L), and recommended remediation.",
        ],
        deliverable:
          "A workspace security assessment report with findings categorized by risk level and remediation steps.",
        estimatedMinutes: 60,
      },
      lessons: [
        {
          id: "phase-4-module-3-lesson-1",
          slug: "workspace-administration",
          moduleId: "phase-4-module-3",
          title: "Workspace Administration",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Admin Roles",
                type: "text",
                body: "Databricks has several administrative roles:\n\n**Account Admin:** Highest privilege. Can manage all workspaces, users, Unity Catalog metastore, and account-level settings. Should be held by very few people.\n\n**Workspace Admin:** Manages users, groups, clusters, and settings within a single workspace. Cannot manage account-level resources.\n\n**Metastore Admin:** Manages Unity Catalog metastore configuration, storage credentials, and external locations. Critical role for data governance.\n\n**Cluster Admin:** Can create and manage compute clusters. Important because clusters cost money and can access data.\n\n**Best practices:**\n- Minimize the number of account admins (2-3 people)\n- Separate workspace admin from metastore admin roles\n- Use service principals for automated admin tasks\n- Require MFA for all admin accounts\n- Regularly audit admin role assignments",
              },
              {
                heading: "User and Group Management",
                type: "text",
                body: "**Identity Provider Integration:**\n- Sync users and groups from Azure AD, Okta, or other IdPs via SCIM\n- SSO with SAML 2.0 or OIDC\n- Automated provisioning: new employees automatically get workspace access\n- Automated deprovisioning: departing employees automatically lose access\n\n**Group strategy:**\n- Map groups to organizational roles (data-engineers, data-scientists, analysts)\n- Create functional groups for access control (pii-readers, prod-deployers)\n- Nest groups for hierarchy (all-data-team > data-engineers + data-scientists)\n\n**Common pitfalls:**\n- Local-only users not synced from IdP (will not be deprovisioned automatically)\n- Groups created ad-hoc without naming conventions\n- Shared service accounts instead of proper service principals\n- No regular access reviews",
              },
              {
                heading: "Secrets Management",
                type: "text",
                body: "**Never hardcode credentials.** Databricks provides the Secrets API:\n\n**Secret Scopes:** Containers for secrets, can be backed by:\n- Databricks-backed scope: Secrets stored encrypted in Databricks\n- Azure Key Vault-backed scope: Secrets stored in Azure Key Vault\n- AWS Secrets Manager integration via init scripts\n\n**Using secrets in code:**\n# In a notebook\npassword = dbutils.secrets.get(scope=\"my-scope\", key=\"db-password\")\n\n# Secrets are redacted in notebook output -- shown as [REDACTED]\nprint(password)  # Output: [REDACTED]\n\n**ACLs on secrets:** Control who can read, write, or manage each secret scope. Data engineers might manage pipeline credentials while data scientists only need read access to specific scopes.\n\n**Security audit tip:** Search notebooks for hardcoded strings that look like passwords, API keys, or connection strings. This is a common finding in security assessments.",
              },
              {
                heading: "IP Access Lists and Network Controls",
                type: "warning",
                body: "Restrict which IP addresses can access the workspace:\n\n**IP Access Lists:**\n- Allowlist: Only specified IPs can access the workspace\n- Blocklist: Specific IPs are blocked\n- Apply to workspace UI, REST API, and DBSQL\n\n**Private Link / Private Endpoints:**\n- Connect to the Databricks control plane without going over the public internet\n- Traffic stays within the cloud provider's backbone network\n- Essential for organizations with strict network security requirements\n\n**VPC Peering:**\n- Connect your Databricks VPC to other VPCs (databases, applications)\n- No internet exposure for internal data transfers\n\nAs a security consultant, always check: Can the workspace be accessed from the public internet? If so, is it restricted by IP access lists? Are private endpoints configured?",
              },
            ],
            keyConcepts: [
              {
                term: "Account Admin",
                definition:
                  "Highest Databricks role. Manages all workspaces, users, and account settings.",
              },
              {
                term: "SCIM Provisioning",
                definition:
                  "Automated user and group sync from identity providers to Databricks.",
              },
              {
                term: "Secret Scope",
                definition:
                  "Encrypted container for storing sensitive credentials accessed via dbutils.secrets.",
              },
              {
                term: "IP Access List",
                definition:
                  "Network control restricting which IP addresses can access the Databricks workspace.",
              },
              {
                term: "Private Link",
                definition:
                  "Private network connection to Databricks control plane, avoiding the public internet.",
              },
            ],
            externalResources: [
              {
                title: "Databricks Admin Guide",
                url: "https://docs.databricks.com/en/administration-guide/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Complete guide to Databricks workspace administration.",
              },
              {
                title: "Databricks Secrets Management",
                url: "https://docs.databricks.com/en/security/secrets/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official documentation for managing secrets in Databricks.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-3-1",
            lessonId: "phase-4-module-3-lesson-1",
            questions: [
              {
                id: "q4-3-1-1",
                question:
                  "Why should the number of Account Admins be minimized?",
                options: [
                  "To reduce license costs",
                  "Account Admins have the highest privilege and can manage everything -- reducing their number reduces risk",
                  "Databricks limits the number of admins",
                  "Account Admins slow down the platform",
                ],
                correctIndex: 1,
                explanation:
                  "Account Admin is the highest privilege level. Minimizing its use reduces the blast radius of a compromised account.",
              },
              {
                id: "q4-3-1-2",
                question:
                  "What happens to secrets when printed in a Databricks notebook?",
                options: [
                  "They are displayed in plaintext",
                  "They are shown as [REDACTED]",
                  "The notebook crashes",
                  "They are encrypted in the output",
                ],
                correctIndex: 1,
                explanation:
                  "Databricks automatically redacts secret values in notebook outputs to prevent accidental exposure.",
              },
              {
                id: "q4-3-1-3",
                question:
                  "What does Private Link provide?",
                options: [
                  "Faster internet access",
                  "A private network connection to Databricks that avoids the public internet",
                  "Free compute resources",
                  "Encrypted storage",
                ],
                correctIndex: 1,
                explanation:
                  "Private Link routes traffic through the cloud provider's backbone network, never traversing the public internet.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-3-lesson-2",
          slug: "cluster-and-job-management",
          moduleId: "phase-4-module-3",
          title: "Cluster & Job Management",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Cluster Policies",
                type: "text",
                body: "**Cluster policies** are admin-defined rules that constrain how users can create clusters:\n\n**What policies control:**\n- Allowed instance types (prevent expensive GPU instances)\n- Maximum number of workers (control cost)\n- Required auto-termination timeout\n- Allowed Spark versions (enforce security patches)\n- Required tags (cost allocation, team identification)\n- Access mode restrictions (enforce shared or single-user mode)\n- Init scripts (approved scripts only)\n\n**Example policy (JSON):**\n{\n  \"spark_version\": { \"type\": \"regex\", \"pattern\": \"14\\\\.[0-9]+\\\\.x-scala.*\" },\n  \"autotermination_minutes\": { \"type\": \"range\", \"maxValue\": 120, \"defaultValue\": 30 },\n  \"num_workers\": { \"type\": \"range\", \"minValue\": 1, \"maxValue\": 10 },\n  \"custom_tags.team\": { \"type\": \"fixed\", \"value\": \"data-science\" }\n}\n\nPolicies prevent users from creating overpowered, expensive, or insecure clusters.",
              },
              {
                heading: "Cluster Security Best Practices",
                type: "text",
                body: "**Access modes:**\n- **Single User:** One identity, full isolation. Best for sensitive workloads.\n- **Shared:** Multiple users, Unity Catalog enforced. Good balance of sharing and governance.\n- **No Isolation Shared:** Legacy mode with no isolation. Should be avoided.\n\n**Init scripts security:**\n- Init scripts run when a cluster starts and can install packages or configure settings\n- Malicious init scripts could exfiltrate data or install backdoors\n- Restrict init script creation to admins\n- Store approved scripts in a controlled location\n\n**Library management:**\n- Use cluster policies to restrict which libraries can be installed\n- Scan installed libraries for vulnerabilities\n- Prefer workspace libraries (admin-managed) over notebook-scoped installs\n\n**Cost controls:**\n- Set auto-termination (30 minutes for interactive, immediate for jobs)\n- Use job clusters for production workloads\n- Set budget alerts in your cloud account",
              },
              {
                heading: "Workflow and Job Security",
                type: "text",
                body: "**Workflows** orchestrate automated data pipelines and ML training:\n\n**Security considerations:**\n- **Run-as identity:** Jobs run as the owner's identity or a service principal. Always use service principals for production jobs.\n- **Secrets in jobs:** Use secret scopes, never embed credentials in job configurations.\n- **Permissions:** Control who can view, run, and manage each job.\n- **Notifications:** Configure alerts on job failures for rapid response.\n- **Retry policies:** Define when and how failed tasks should retry.\n\n**Job audit:**\n- Every job run is logged with start time, end time, status, and the identity that triggered it\n- Failed jobs may indicate data pipeline issues or security incidents\n- Unusual job patterns (off-hours execution, unexpected data access) warrant investigation",
              },
              {
                heading: "Delta Live Tables (DLT)",
                type: "note",
                body: "**Delta Live Tables** is Databricks' declarative ETL framework:\n\n- Define data transformations as SQL or Python declarations\n- Automatic dependency management and execution ordering\n- Built-in data quality expectations (constraints that check data validity)\n- Automatic error handling and recovery\n\n**Security benefits of DLT:**\n- Declarative definitions are easier to audit than imperative code\n- Built-in data quality checks catch anomalies (potential poisoning)\n- Managed compute reduces cluster misconfiguration risk\n- Automatic lineage tracking via Unity Catalog\n\nDLT is increasingly used for production data pipelines. Understanding it helps you assess whether an organization's ETL is securely implemented.",
              },
            ],
            keyConcepts: [
              {
                term: "Cluster Policy",
                definition:
                  "Admin-defined rules constraining how users create and configure clusters.",
              },
              {
                term: "Access Mode",
                definition:
                  "Cluster isolation setting: Single User (best isolation), Shared (balanced), No Isolation (legacy).",
              },
              {
                term: "Init Script",
                definition:
                  "Script that runs at cluster startup for configuration. Must be controlled for security.",
              },
              {
                term: "Service Principal",
                definition:
                  "Machine identity used as the run-as identity for production jobs and automated workloads.",
              },
              {
                term: "Delta Live Tables",
                definition:
                  "Databricks declarative ETL framework with built-in quality checks and automatic lineage.",
              },
            ],
            externalResources: [
              {
                title: "Cluster Policies - Databricks",
                url: "https://docs.databricks.com/en/administration-guide/clusters/policies.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official documentation on creating and managing cluster policies.",
              },
              {
                title: "Delta Live Tables",
                url: "https://docs.databricks.com/en/delta-live-tables/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Complete guide to Databricks Delta Live Tables.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-3-2",
            lessonId: "phase-4-module-3-lesson-2",
            questions: [
              {
                id: "q4-3-2-1",
                question:
                  "What do cluster policies control?",
                options: [
                  "What data users can access",
                  "Constraints on cluster creation: instance types, max workers, auto-termination, Spark versions",
                  "Which notebooks users can run",
                  "SQL query syntax",
                ],
                correctIndex: 1,
                explanation:
                  "Cluster policies restrict how clusters are configured, preventing expensive, insecure, or non-compliant setups.",
              },
              {
                id: "q4-3-2-2",
                question:
                  "Why should production jobs use service principals instead of user accounts?",
                options: [
                  "Service principals are faster",
                  "User accounts cannot run jobs",
                  "Service principals follow least privilege and are not affected when employees leave",
                  "There is no difference",
                ],
                correctIndex: 2,
                explanation:
                  "Service principals are machine identities with specific, limited permissions. They are not tied to individual employees who may leave.",
              },
              {
                id: "q4-3-2-3",
                question:
                  "Why are init scripts a security concern?",
                options: [
                  "They slow down cluster startup",
                  "They run at startup and could install backdoors or exfiltrate data if malicious",
                  "They are always visible to all users",
                  "They cannot be modified",
                ],
                correctIndex: 1,
                explanation:
                  "Init scripts execute with cluster-level privileges at startup. Malicious scripts could install backdoors or steal data.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-3-lesson-3",
          slug: "monitoring-and-cost-management",
          moduleId: "phase-4-module-3",
          title: "Monitoring & Cost Management",
          estimatedMinutes: 25,
          content: {
            sections: [
              {
                heading: "System Tables for Monitoring",
                type: "text",
                body: "Databricks provides **system tables** in Unity Catalog for operational monitoring:\n\n**system.access.audit:** All audit events (data access, admin actions, authentication)\n**system.billing.usage:** Compute and storage consumption data\n**system.compute.clusters:** Cluster creation and configuration events\n**system.storage.predictive_optimization:** Storage optimization recommendations\n\n**Example monitoring queries:**\n\n-- Find all data access by a specific user in the last 7 days\nSELECT * FROM system.access.audit\nWHERE user_identity.email = 'suspect@company.com'\nAND event_date > current_date() - 7;\n\n-- Find the most expensive clusters this month\nSELECT cluster_id, SUM(usage_quantity) as dbu_total\nFROM system.billing.usage\nWHERE usage_date >= date_trunc('month', current_date())\nGROUP BY cluster_id\nORDER BY dbu_total DESC;",
              },
              {
                heading: "Security Monitoring Dashboards",
                type: "text",
                body: "Build dashboards to continuously monitor security posture:\n\n**Access monitoring:**\n- Failed authentication attempts over time\n- Unusual data access patterns (off-hours, high volume)\n- New users and permission changes\n- Service principal activity\n\n**Data monitoring:**\n- Tables accessed by unusual users or from unexpected IPs\n- Large data exports or downloads\n- Schema changes to sensitive tables\n- Row filter and column mask bypass attempts\n\n**Compute monitoring:**\n- Clusters running without policies\n- Long-running clusters (potential crypto mining)\n- Init scripts modified\n- Unusual library installations\n\n**Alerting:** Connect dashboard queries to alerting systems. Send notifications via email, Slack, or PagerDuty when thresholds are breached.",
              },
              {
                heading: "Cost Management as Security",
                type: "text",
                body: "Runaway costs can indicate security issues:\n\n**Cost anomalies that may signal incidents:**\n- Sudden spike in compute usage (unauthorized workloads, crypto mining)\n- Unexpected data transfer costs (data exfiltration)\n- New clusters in unusual regions (lateral movement)\n- Jobs running more frequently than scheduled\n\n**Cost controls:**\n- Set budget alerts in your cloud provider\n- Use cluster policies to limit instance types and sizes\n- Enforce auto-termination on all clusters\n- Use job clusters instead of long-running interactive clusters for production\n- Tag all resources for cost attribution to teams\n- Review unused clusters and warehouses monthly",
              },
              {
                heading: "Building a Security Operations Workflow",
                type: "note",
                body: "For your consulting practice, here is a security monitoring workflow you can implement for clients:\n\n1. **Enable audit logs** and deliver to a secure storage location\n2. **Create system table queries** for key security indicators\n3. **Build dashboards** visualizing access patterns, anomalies, and costs\n4. **Set up alerts** for high-priority events (admin changes, PII access, failed auth spikes)\n5. **Schedule weekly reviews** of security dashboard and alert history\n6. **Monthly access reviews** of user permissions and group memberships\n7. **Quarterly assessments** of cluster policies, network configs, and Unity Catalog permissions\n\nThis workflow is a service you can sell to Databricks customers who lack internal security expertise.",
              },
            ],
            keyConcepts: [
              {
                term: "System Tables",
                definition:
                  "Unity Catalog tables providing audit, billing, and operational data for monitoring.",
              },
              {
                term: "Security Dashboard",
                definition:
                  "Visual monitoring tool tracking access patterns, anomalies, and security events.",
              },
              {
                term: "Cost Anomaly",
                definition:
                  "Unexpected spending pattern that may indicate unauthorized workloads or security incidents.",
              },
              {
                term: "Access Review",
                definition:
                  "Periodic audit of user permissions and group memberships to ensure least privilege.",
              },
            ],
            externalResources: [
              {
                title: "Databricks System Tables",
                url: "https://docs.databricks.com/en/administration-guide/system-tables/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official documentation on system tables for monitoring and auditing.",
              },
              {
                title: "Databricks SQL Dashboards",
                url: "https://docs.databricks.com/en/sql/user/dashboards/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Guide to building dashboards with Databricks SQL.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-3-3",
            lessonId: "phase-4-module-3-lesson-3",
            questions: [
              {
                id: "q4-3-3-1",
                question:
                  "Which system table contains data access audit events?",
                options: [
                  "system.billing.usage",
                  "system.access.audit",
                  "system.compute.clusters",
                  "system.storage.tables",
                ],
                correctIndex: 1,
                explanation:
                  "system.access.audit contains all audit events including data access, admin actions, and authentication.",
              },
              {
                id: "q4-3-3-2",
                question:
                  "A sudden spike in compute costs could indicate which security issue?",
                options: [
                  "A database schema change",
                  "Crypto mining, unauthorized workloads, or compromised credentials",
                  "Normal seasonal traffic",
                  "A Spark version upgrade",
                ],
                correctIndex: 1,
                explanation:
                  "Unexpected compute spikes may indicate crypto mining on compromised clusters, unauthorized jobs, or credential abuse.",
              },
              {
                id: "q4-3-3-3",
                question:
                  "How often should user permissions and group memberships be reviewed?",
                options: [
                  "Only when a security incident occurs",
                  "Never -- permissions are set once and do not change",
                  "Monthly or quarterly as part of ongoing access reviews",
                  "Every five years",
                ],
                correctIndex: 2,
                explanation:
                  "Regular access reviews (monthly or quarterly) catch stale permissions, overprivileged accounts, and orphaned access.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 4: APACHE SPARK ====================
    {
      id: "phase-4-module-4",
      slug: "apache-spark-basics",
      phaseId: "phase-4",
      title: "Apache Spark Basics",
      description:
        "Learn the fundamentals of Apache Spark: DataFrames, transformations, actions, and Spark SQL.",
      estimatedHours: 12,
      labExercise: {
        title: "Spark Data Processing Lab",
        objective:
          "Use Spark in a Databricks notebook to load, transform, and query data.",
        instructions: [
          "Open a Databricks Community Edition notebook (Python).",
          "Create a sample DataFrame from a list of dictionaries representing security events.",
          "Use Spark transformations: filter events by severity, select specific columns, add computed columns.",
          "Group events by source_ip and count occurrences (aggregate).",
          "Sort results by count descending and display the top 10.",
          "Write the same analysis using Spark SQL instead of the DataFrame API.",
          "Write the results to a Delta table and verify with a SELECT query.",
          "Document which approach (DataFrame API vs SQL) you found more intuitive.",
        ],
        deliverable:
          "A Databricks notebook with both DataFrame API and SQL approaches, Delta table output, and your comparison notes.",
        estimatedMinutes: 60,
      },
      lessons: [
        {
          id: "phase-4-module-4-lesson-1",
          slug: "what-is-spark",
          moduleId: "phase-4-module-4",
          title: "What Is Apache Spark?",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Apache Spark Overview",
                type: "text",
                body: "**Apache Spark** is an open-source distributed computing engine for large-scale data processing. It was created at UC Berkeley in 2009 and is the engine that powers Databricks.\n\n**Why Spark matters:**\n- Processes data across clusters of machines in parallel\n- Handles petabytes of data\n- 10-100x faster than Hadoop MapReduce (predecessor)\n- Supports batch processing, streaming, ML, and graph processing\n- APIs in Python (PySpark), SQL, Scala, Java, and R\n\n**Where you will encounter Spark:**\n- Every Databricks cluster runs Spark\n- Data pipelines read and write data using Spark\n- ML training at scale uses Spark for data preparation\n- Security log analysis at scale uses Spark SQL\n- As an AI security professional, you will read Spark code in audits and write Spark queries for investigation",
              },
              {
                heading: "How Spark Works",
                type: "text",
                body: "**Architecture:**\n- **Driver:** The master program that coordinates the work. Runs your code and creates the execution plan.\n- **Executors:** Worker processes on cluster nodes that execute tasks in parallel.\n- **Cluster Manager:** Allocates resources (Databricks handles this for you).\n\n**Execution flow:**\n1. You write a transformation (e.g., filter, join, aggregate)\n2. Spark builds a logical plan (DAG -- Directed Acyclic Graph)\n3. The Catalyst optimizer optimizes the plan\n4. Spark divides the work into stages and tasks\n5. Tasks are distributed across executors and run in parallel\n6. Results are collected back to the driver\n\n**Lazy evaluation:** Transformations are not executed immediately. Spark builds up the plan and only executes when an action (show, count, write) is called. This allows optimization before execution.",
              },
              {
                heading: "DataFrames -- Spark's Core Abstraction",
                type: "text",
                body: "A **DataFrame** is a distributed collection of data organized into named columns -- like a table in a database or a pandas DataFrame, but distributed across a cluster.\n\n**Creating DataFrames:**\n\n# From a list\ndata = [(\"10.0.0.1\", \"login_failed\", \"high\"),\n        (\"10.0.0.2\", \"file_access\", \"low\"),\n        (\"10.0.0.1\", \"login_failed\", \"high\")]\ndf = spark.createDataFrame(data, [\"ip\", \"event\", \"severity\"])\n\n# From a file\ndf = spark.read.csv(\"/path/to/data.csv\", header=True)\ndf = spark.read.json(\"/path/to/data.json\")\n\n# From a Delta table\ndf = spark.read.table(\"catalog.schema.table_name\")\n\n**Viewing data:**\ndf.show()         # Display first 20 rows\ndf.printSchema()  # Show column names and types\ndf.count()        # Number of rows",
              },
              {
                heading: "Transformations vs Actions",
                type: "note",
                body: "Understanding the distinction is key to Spark:\n\n**Transformations** (lazy -- build the plan):\n- filter(), where() -- filter rows\n- select() -- choose columns\n- withColumn() -- add/modify columns\n- groupBy() -- group rows\n- join() -- combine DataFrames\n- orderBy(), sort() -- order results\n- distinct() -- remove duplicates\n\n**Actions** (eager -- trigger execution):\n- show() -- display results\n- count() -- count rows\n- collect() -- bring all data to driver (dangerous for large datasets!)\n- write -- save to storage\n- first(), head() -- get first row(s)\n\nBecause transformations are lazy, you can chain many operations and Spark optimizes the entire chain before executing.",
              },
            ],
            keyConcepts: [
              {
                term: "Apache Spark",
                definition:
                  "Open-source distributed computing engine for large-scale data processing across clusters.",
              },
              {
                term: "DataFrame",
                definition:
                  "Distributed collection of data organized in named columns, like a distributed database table.",
              },
              {
                term: "Lazy Evaluation",
                definition:
                  "Spark builds an execution plan but only runs it when an action is called, enabling optimization.",
              },
              {
                term: "Driver",
                definition:
                  "The master program that coordinates Spark work and creates execution plans.",
              },
              {
                term: "Executor",
                definition:
                  "Worker process on cluster nodes that executes tasks in parallel.",
              },
            ],
            externalResources: [
              {
                title: "PySpark Tutorial - Databricks",
                url: "https://docs.databricks.com/en/pyspark/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official PySpark documentation for Databricks.",
              },
              {
                title: "Apache Spark Explained - Databricks",
                url: "https://www.youtube.com/watch?v=znBa13Earms",
                type: "video",
                isFree: true,
                description:
                  "Visual introduction to Spark architecture and concepts.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-4-1",
            lessonId: "phase-4-module-4-lesson-1",
            questions: [
              {
                id: "q4-4-1-1",
                question:
                  "What does 'lazy evaluation' mean in Spark?",
                options: [
                  "Spark runs slowly",
                  "Transformations build a plan but only execute when an action is called",
                  "Spark skips some data for speed",
                  "Code runs in background threads",
                ],
                correctIndex: 1,
                explanation:
                  "Lazy evaluation means Spark builds an optimized execution plan and only runs it when an action (show, count, write) triggers execution.",
              },
              {
                id: "q4-4-1-2",
                question:
                  "Which is a Spark action (triggers execution)?",
                options: ["filter()", "select()", "show()", "withColumn()"],
                correctIndex: 2,
                explanation:
                  "show() is an action that triggers execution. filter(), select(), and withColumn() are lazy transformations.",
              },
              {
                id: "q4-4-1-3",
                question:
                  "Why might collect() be dangerous on large datasets?",
                options: [
                  "It deletes the data",
                  "It brings all data to the driver, potentially causing out-of-memory errors",
                  "It is deprecated",
                  "It only works with SQL",
                ],
                correctIndex: 1,
                explanation:
                  "collect() pulls ALL data to the driver's memory. On large datasets this causes crashes. Use show() or write instead.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-4-lesson-2",
          slug: "spark-transformations-and-sql",
          moduleId: "phase-4-module-4",
          title: "Spark Transformations & SQL",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "Common DataFrame Transformations",
                type: "text",
                body: "**Filtering:**\nfrom pyspark.sql.functions import col\n\n# Filter high-severity events\nhigh_severity = df.filter(col(\"severity\") == \"high\")\nhigh_severity = df.where(\"severity = 'high'\")  # SQL-style string\n\n**Selecting and renaming:**\nresult = df.select(\"ip\", \"event\")\nresult = df.select(col(\"ip\").alias(\"source_ip\"), \"event\")\n\n**Adding columns:**\nfrom pyspark.sql.functions import current_timestamp, upper\n\ndf = df.withColumn(\"processed_at\", current_timestamp())\ndf = df.withColumn(\"event_upper\", upper(col(\"event\")))\n\n**Dropping columns:**\ndf = df.drop(\"unnecessary_column\")",
              },
              {
                heading: "Aggregation and Grouping",
                type: "text",
                body: "**Group by with aggregation:**\nfrom pyspark.sql.functions import count, avg, max, min\n\n# Count events per IP\nip_counts = df.groupBy(\"ip\").agg(\n    count(\"*\").alias(\"event_count\"),\n    max(\"timestamp\").alias(\"last_seen\")\n).orderBy(col(\"event_count\").desc())\n\n**Joins:**\n# Join events with a user lookup table\nresult = events_df.join(\n    users_df,\n    events_df.user_id == users_df.id,\n    \"left\"  # left, inner, right, full, cross\n)\n\n**Window functions:**\nfrom pyspark.sql.window import Window\nfrom pyspark.sql.functions import row_number\n\nwindow = Window.partitionBy(\"ip\").orderBy(col(\"timestamp\").desc())\ndf = df.withColumn(\"rank\", row_number().over(window))\nlatest_per_ip = df.filter(col(\"rank\") == 1)",
              },
              {
                heading: "Spark SQL",
                type: "text",
                body: "Spark SQL lets you query DataFrames using standard SQL:\n\n**Register a temporary view:**\ndf.createOrReplaceTempView(\"events\")\n\n**Run SQL queries:**\nresult = spark.sql(\"\"\"\n  SELECT ip, COUNT(*) as event_count\n  FROM events\n  WHERE severity = 'high'\n  GROUP BY ip\n  HAVING COUNT(*) > 5\n  ORDER BY event_count DESC\n\"\"\")\n\n**In Databricks notebooks, use the %sql magic:**\n%sql\nSELECT * FROM catalog.schema.table_name\nWHERE event_date > current_date() - 7;\n\nSpark SQL supports the full SQL standard including CTEs, subqueries, window functions, and UDFs. For security analysts who know SQL, this is often the fastest way to investigate data.",
              },
              {
                heading: "Reading and Writing Delta Tables",
                type: "example",
                body: "**Reading from Delta:**\n# Using table name (Unity Catalog)\ndf = spark.table(\"prod_catalog.security.audit_events\")\n\n# Using path\ndf = spark.read.format(\"delta\").load(\"/path/to/delta/table\")\n\n**Writing to Delta:**\n# Create or overwrite a table\ndf.write.mode(\"overwrite\").saveAsTable(\"catalog.schema.my_table\")\n\n# Append to existing table\ndf.write.mode(\"append\").saveAsTable(\"catalog.schema.my_table\")\n\n# Merge (upsert) -- update existing rows, insert new ones\nfrom delta.tables import DeltaTable\n\ntarget = DeltaTable.forName(spark, \"catalog.schema.my_table\")\ntarget.alias(\"t\").merge(\n    df.alias(\"s\"),\n    \"t.id = s.id\"\n).whenMatchedUpdateAll().whenNotMatchedInsertAll().execute()",
              },
            ],
            keyConcepts: [
              {
                term: "filter() / where()",
                definition:
                  "Spark transformation to select rows matching a condition.",
              },
              {
                term: "groupBy().agg()",
                definition:
                  "Spark transformation to group rows and apply aggregate functions.",
              },
              {
                term: "Spark SQL",
                definition:
                  "SQL interface for querying Spark DataFrames using standard SQL syntax.",
              },
              {
                term: "Delta Merge (Upsert)",
                definition:
                  "Operation that updates existing rows and inserts new ones based on a matching condition.",
              },
              {
                term: "Temporary View",
                definition:
                  "Named reference to a DataFrame that allows SQL queries against it.",
              },
            ],
            externalResources: [
              {
                title: "Spark SQL Guide - Databricks",
                url: "https://docs.databricks.com/en/sql/language-manual/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Complete Spark SQL language reference for Databricks.",
              },
              {
                title: "PySpark Cheat Sheet",
                url: "https://www.datacamp.com/cheat-sheet/pyspark-cheat-sheet-spark-dataframes-in-python",
                type: "article",
                isFree: true,
                description:
                  "Quick reference for PySpark DataFrame operations.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-4-2",
            lessonId: "phase-4-module-4-lesson-2",
            questions: [
              {
                id: "q4-4-2-1",
                question:
                  "Which PySpark method registers a DataFrame for SQL queries?",
                options: [
                  "df.toSQL()",
                  "df.createOrReplaceTempView(\"name\")",
                  "df.registerSQL(\"name\")",
                  "spark.sql(df)",
                ],
                correctIndex: 1,
                explanation:
                  "createOrReplaceTempView registers the DataFrame as a named view that can be queried with spark.sql().",
              },
              {
                id: "q4-4-2-2",
                question:
                  "What does a Delta merge (upsert) operation do?",
                options: [
                  "Deletes all data and reloads",
                  "Updates existing rows that match and inserts new rows that do not",
                  "Only inserts new data",
                  "Creates a backup of the table",
                ],
                correctIndex: 1,
                explanation:
                  "Merge combines update and insert: matching rows are updated, non-matching rows are inserted.",
              },
              {
                id: "q4-4-2-3",
                question:
                  "In a Databricks notebook, how do you run SQL directly?",
                options: [
                  "import sql",
                  "%sql at the start of a cell",
                  "spark.execute()",
                  "SQL is not supported in notebooks",
                ],
                correctIndex: 1,
                explanation:
                  "The %sql magic command at the start of a cell lets you write and execute SQL directly in Databricks notebooks.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-4-lesson-3",
          slug: "spark-for-security-analysis",
          moduleId: "phase-4-module-4",
          title: "Spark for Security Analysis",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Security Log Analysis with Spark",
                type: "text",
                body: "Spark excels at processing massive security datasets that would overwhelm traditional tools:\n\n**Common security data sources:**\n- Firewall logs (millions of connection records per day)\n- Authentication logs (login attempts, MFA events)\n- DNS query logs (detecting C2 and exfiltration)\n- Cloud audit trails (AWS CloudTrail, Azure Activity Logs)\n- Databricks audit logs (system.access.audit)\n- Network flow logs (VPC Flow Logs)\n\n**Why Spark for security:**\n- Process billions of log records in minutes\n- Join across multiple data sources for correlation\n- Apply ML for anomaly detection at scale\n- Build reusable analysis pipelines\n- Schedule automated threat hunting jobs",
              },
              {
                heading: "Security Analysis Patterns",
                type: "example",
                body: "**Pattern 1: Failed login spike detection**\n%sql\nSELECT DATE(event_time) as day, source_ip,\n  COUNT(*) as failed_attempts\nFROM security_events\nWHERE event_type = 'login_failed'\n  AND event_time > current_timestamp() - INTERVAL 7 DAYS\nGROUP BY day, source_ip\nHAVING COUNT(*) > 100\nORDER BY failed_attempts DESC;\n\n**Pattern 2: Unusual data access**\n%sql\nSELECT user_identity.email, action_name,\n  request_params.full_name_arg as table_name,\n  COUNT(*) as access_count\nFROM system.access.audit\nWHERE action_name IN ('getTable', 'commandSubmit')\n  AND event_date > current_date() - 7\nGROUP BY 1, 2, 3\nHAVING COUNT(*) > (SELECT AVG(cnt) * 3 FROM ...)\nORDER BY access_count DESC;\n\n**Pattern 3: Data exfiltration detection**\nLook for unusually large query results or downloads from sensitive tables.",
              },
              {
                heading: "Structured Streaming for Real-Time Security",
                type: "text",
                body: "Spark Structured Streaming processes data in real-time:\n\n# Read streaming events from a Kafka topic\nstream_df = spark.readStream \\\n    .format(\"kafka\") \\\n    .option(\"kafka.bootstrap.servers\", \"host:9092\") \\\n    .option(\"subscribe\", \"security-events\") \\\n    .load()\n\n# Apply transformations (same API as batch)\nalerts = stream_df \\\n    .filter(col(\"severity\") == \"critical\") \\\n    .groupBy(window(col(\"timestamp\"), \"5 minutes\"), \"source_ip\") \\\n    .count() \\\n    .filter(col(\"count\") > 50)\n\n# Write alerts to a Delta table\nalerts.writeStream \\\n    .format(\"delta\") \\\n    .outputMode(\"append\") \\\n    .option(\"checkpointLocation\", \"/checkpoints/alerts\") \\\n    .table(\"security.realtime_alerts\")\n\nThis enables real-time threat detection on streaming security data.",
              },
              {
                heading: "Your Security Analysis Toolkit",
                type: "note",
                body: "As an AI security consultant, Spark is your power tool for investigations:\n\n**Incident response:** Query billions of log records to find indicators of compromise\n**Threat hunting:** Proactively search for patterns that indicate hidden threats\n**Compliance auditing:** Verify data access patterns match authorized use\n**Model monitoring:** Analyze inference logs for adversarial patterns\n**Data quality:** Validate training data pipelines for signs of poisoning\n\nCombine Spark's processing power with Unity Catalog's governance, Delta Lake's time travel, and Databricks' visualization capabilities, and you have a complete security analytics platform.",
              },
            ],
            keyConcepts: [
              {
                term: "Security Log Analysis",
                definition:
                  "Using Spark to process and analyze massive security event datasets for threats and anomalies.",
              },
              {
                term: "Structured Streaming",
                definition:
                  "Spark's engine for processing real-time data streams using the same DataFrame API.",
              },
              {
                term: "Threat Hunting",
                definition:
                  "Proactively searching through data for patterns indicating hidden security threats.",
              },
              {
                term: "Correlation",
                definition:
                  "Joining data from multiple security sources to identify related events and attack patterns.",
              },
            ],
            externalResources: [
              {
                title: "Structured Streaming - Databricks",
                url: "https://docs.databricks.com/en/structured-streaming/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official guide to Spark Structured Streaming on Databricks.",
              },
              {
                title: "Cybersecurity with Apache Spark - Databricks Blog",
                url: "https://www.databricks.com/blog/2019/07/18/using-databricks-for-cyber-security-use-cases.html",
                type: "article",
                isFree: true,
                description:
                  "Databricks blog post on using Spark for cybersecurity analysis.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-4-3",
            lessonId: "phase-4-module-4-lesson-3",
            questions: [
              {
                id: "q4-4-3-1",
                question:
                  "Why is Spark well-suited for security log analysis?",
                options: [
                  "It has a nice UI",
                  "It can process billions of records in parallel across a cluster",
                  "It only works with security data",
                  "It replaces firewalls",
                ],
                correctIndex: 1,
                explanation:
                  "Spark's distributed processing can handle billions of log records in minutes, essential for security at scale.",
              },
              {
                id: "q4-4-3-2",
                question:
                  "What does Structured Streaming enable for security?",
                options: [
                  "Batch processing only",
                  "Real-time threat detection on streaming security data",
                  "Offline report generation",
                  "Database backup",
                ],
                correctIndex: 1,
                explanation:
                  "Structured Streaming processes data in real-time, enabling immediate detection of security events as they happen.",
              },
              {
                id: "q4-4-3-3",
                question:
                  "Which Databricks table provides audit events for security monitoring?",
                options: [
                  "system.billing.usage",
                  "system.access.audit",
                  "system.compute.clusters",
                  "system.storage.files",
                ],
                correctIndex: 1,
                explanation:
                  "system.access.audit contains all audit events including data access, authentication, and administrative actions.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 5: DATABRICKS SECURITY FEATURES ====================
    {
      id: "phase-4-module-5",
      slug: "databricks-security-features",
      phaseId: "phase-4",
      title: "Databricks Security Features Overview",
      description:
        "Survey Databricks security capabilities: network security, encryption, audit logging, and compliance features.",
      estimatedHours: 12,
      labExercise: {
        title: "Databricks Security Assessment Lab",
        objective:
          "Create a comprehensive security assessment template for evaluating a Databricks deployment.",
        instructions: [
          "Review the Databricks Security Best Practices documentation.",
          "Create an assessment template with sections: Identity & Access, Network Security, Data Protection, Monitoring, Compliance.",
          "For each section, list 5-10 specific checks (e.g., 'Is Unity Catalog enabled?', 'Are IP access lists configured?').",
          "For each check, specify: what to verify, how to verify it, the risk if not implemented, and remediation steps.",
          "Add a scoring system: Critical (must fix immediately), High (fix within 30 days), Medium (fix within 90 days), Low (best practice).",
          "Test your template by mentally assessing a hypothetical Databricks deployment with common security gaps.",
          "Refine the template based on what you learned.",
        ],
        deliverable:
          "A Databricks Security Assessment Template document with scored checks, verification methods, and remediation guidance.",
        estimatedMinutes: 90,
      },
      lessons: [
        {
          id: "phase-4-module-5-lesson-1",
          slug: "encryption-and-key-management",
          moduleId: "phase-4-module-5",
          title: "Encryption & Key Management",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Encryption at Rest",
                type: "text",
                body: "Databricks encrypts all data at rest by default:\n\n**What is encrypted:**\n- Data in cloud storage (S3, ADLS, GCS) -- encrypted by the cloud provider (AES-256)\n- Databricks managed storage (notebook content, metadata) -- encrypted by Databricks\n- Cluster local disks -- encrypted with per-cluster ephemeral keys\n- Delta Lake table files -- inherit cloud storage encryption\n\n**Customer-Managed Keys (CMK):**\nFor maximum control, you can provide your own encryption keys:\n- **AWS:** Use AWS KMS keys for S3 and EBS encryption\n- **Azure:** Use Azure Key Vault keys for storage and managed disk encryption\n- **GCP:** Use Cloud KMS keys for GCS and persistent disk encryption\n\nWith CMK, you control the key lifecycle. Revoking the key immediately makes all encrypted data inaccessible -- a powerful kill switch for data protection.",
              },
              {
                heading: "Encryption in Transit",
                type: "text",
                body: "All data in transit within Databricks is encrypted:\n\n**Control plane ↔ Data plane:** TLS 1.2+ for all API calls, notebook operations, and cluster management.\n\n**Inter-node cluster communication:** Encrypted with per-cluster keys. Data moving between Spark executors during shuffles is encrypted.\n\n**Client ↔ Workspace:** HTTPS/TLS for all browser and API access.\n\n**Data plane ↔ Cloud storage:** TLS for all reads/writes to S3, ADLS, GCS.\n\n**JDBC/ODBC connections:** TLS for all SQL warehouse and external database connections.\n\n**What to verify as an auditor:**\n- Is TLS 1.2+ enforced (no fallback to older versions)?\n- Are customer-managed keys configured for sensitive workloads?\n- Is inter-node encryption enabled (some legacy configurations may not have it)?\n- Are JDBC connections using encrypted channels?",
              },
              {
                heading: "Double Encryption and Confidential Computing",
                type: "text",
                body: "For the highest security requirements:\n\n**Double encryption:** Some cloud providers offer an additional layer of encryption beyond the default. Data is encrypted twice with two different keys.\n\n**Confidential computing:** Data is encrypted even while being processed (in-use encryption). Uses hardware-based Trusted Execution Environments (TEEs) like Intel SGX or AMD SEV.\n\n**Databricks support:**\n- Azure Databricks supports confidential computing via Azure Confidential VMs\n- Data in Spark executors can be processed within encrypted enclaves\n- Protects against even the cloud provider's own administrators\n\nThis is relevant for the most sensitive AI workloads: models trained on healthcare data, financial data, or classified information.",
              },
              {
                heading: "Key Management Best Practices",
                type: "warning",
                body: "Key management mistakes are common security findings:\n\n**Do:**\n- Use customer-managed keys for production workloads with sensitive data\n- Implement key rotation policies (rotate at least annually)\n- Use separate keys for different environments (dev/staging/prod)\n- Store key policies in your governance documentation\n- Test key revocation procedures before you need them\n\n**Do not:**\n- Share encryption keys between unrelated workloads\n- Forget to grant Databricks service roles access to your CMK\n- Lose track of key expiration dates (can cause outages)\n- Use the same key for all environments\n\nAs a consultant, always ask: 'Who holds the encryption keys, and what happens if you revoke them?'",
              },
            ],
            keyConcepts: [
              {
                term: "Customer-Managed Keys (CMK)",
                definition:
                  "Encryption keys owned and controlled by the customer rather than the cloud provider.",
              },
              {
                term: "Encryption at Rest",
                definition:
                  "Data encrypted when stored on disk using AES-256 or equivalent algorithms.",
              },
              {
                term: "Encryption in Transit",
                definition:
                  "Data encrypted while moving over networks using TLS 1.2+.",
              },
              {
                term: "Confidential Computing",
                definition:
                  "Hardware-based encryption protecting data even while being processed in memory.",
              },
              {
                term: "Key Rotation",
                definition:
                  "Regularly replacing encryption keys to limit exposure if a key is compromised.",
              },
            ],
            externalResources: [
              {
                title: "Databricks Encryption - Security Guide",
                url: "https://docs.databricks.com/en/security/keys/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official documentation on Databricks encryption and key management.",
              },
              {
                title: "Customer-Managed Keys for Databricks",
                url: "https://docs.databricks.com/en/security/keys/customer-managed-keys.html",
                type: "documentation",
                isFree: true,
                description:
                  "Setup guide for customer-managed encryption keys.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-5-1",
            lessonId: "phase-4-module-5-lesson-1",
            questions: [
              {
                id: "q4-5-1-1",
                question:
                  "What is the advantage of customer-managed encryption keys?",
                options: [
                  "They are cheaper",
                  "The customer controls the key lifecycle and can revoke access to all data instantly",
                  "They encrypt data faster",
                  "They are easier to set up",
                ],
                correctIndex: 1,
                explanation:
                  "CMK gives the customer control over encryption keys. Revoking the key immediately makes all encrypted data inaccessible.",
              },
              {
                id: "q4-5-1-2",
                question:
                  "What does confidential computing protect against?",
                options: [
                  "Network attacks only",
                  "Data being accessed even by the cloud provider's administrators, by encrypting data in use",
                  "Slow query performance",
                  "Data duplication",
                ],
                correctIndex: 1,
                explanation:
                  "Confidential computing uses hardware enclaves to encrypt data in memory, protecting it even from the cloud host.",
              },
              {
                id: "q4-5-1-3",
                question:
                  "How often should encryption keys be rotated?",
                options: [
                  "Never",
                  "Every day",
                  "At least annually, or more frequently for high-sensitivity data",
                  "Only when a breach occurs",
                ],
                correctIndex: 2,
                explanation:
                  "Keys should be rotated at least annually to limit exposure. Some compliance frameworks require more frequent rotation.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-5-lesson-2",
          slug: "network-security-on-databricks",
          moduleId: "phase-4-module-5",
          title: "Network Security on Databricks",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "VPC / VNet Configuration",
                type: "text",
                body: "Databricks data plane runs within a cloud virtual network:\n\n**Customer-managed VPC (AWS):**\n- Deploy Databricks in your own VPC instead of a Databricks-managed VPC\n- Full control over subnets, routing, security groups, and NAT gateways\n- Required for compliance environments\n\n**VNet Injection (Azure):**\n- Deploy workspace in your own Azure Virtual Network\n- Control inbound/outbound rules via Network Security Groups\n- Integrate with Azure Firewall and other network services\n\n**Key network design decisions:**\n- Public vs private subnets for cluster nodes\n- NAT gateway for controlled internet access\n- VPC peering for internal service connectivity\n- Transit Gateway for multi-VPC architectures",
              },
              {
                heading: "Private Connectivity",
                type: "text",
                body: "**Private Link / Private Endpoints:**\nConnect to Databricks control plane and cloud storage without internet exposure:\n\n**Front-end Private Link:** User access to the workspace UI and API goes through a private endpoint. No public internet access needed.\n\n**Back-end Private Link:** Cluster communication with the Databricks control plane uses private endpoints.\n\n**Storage Private Endpoints:** Cluster access to cloud storage (S3, ADLS) uses VPC/VNet endpoints. Data never traverses the public internet.\n\n**Implementation pattern:**\n1. Create private endpoints in your VPC/VNet\n2. Configure DNS to resolve Databricks domains to private IPs\n3. Disable public access to the workspace\n4. Verify connectivity from approved networks only\n\nThis is the gold standard for secure Databricks deployments.",
              },
              {
                heading: "Outbound Controls",
                type: "text",
                body: "Control what the data plane can reach:\n\n**Why restrict outbound access:**\n- Prevent data exfiltration via unauthorized network connections\n- Block command-and-control communication from compromised clusters\n- Ensure packages are installed only from approved repositories\n\n**Implementation:**\n- Use an egress firewall or cloud NAT with destination filtering\n- Allow only necessary destinations (Databricks control plane, package repositories, your data sources)\n- Block all other outbound traffic by default\n- Log all outbound connections for monitoring\n\n**Databricks-required outbound destinations:**\n- Databricks control plane IPs\n- Cloud storage endpoints (S3, ADLS)\n- Unity Catalog metastore\n- Package repositories (PyPI, Maven) if needed\n- Databricks documentation provides the complete list per cloud provider",
              },
              {
                heading: "Network Security Checklist",
                type: "note",
                body: "Your network security assessment checklist for Databricks:\n\n1. Is the workspace deployed in a customer-managed VPC/VNet?\n2. Are Private Link endpoints configured for control plane and storage?\n3. Is public access to the workspace disabled or restricted by IP?\n4. Are IP access lists configured and maintained?\n5. Is outbound traffic restricted to only necessary destinations?\n6. Are VPC flow logs enabled for network monitoring?\n7. Are security groups / NSGs following least-privilege rules?\n8. Is DNS resolution configured for private endpoints?\n9. Are cluster subnets using private IP ranges only?\n10. Is there a documented network architecture diagram?\n\nOrganizations that skip these controls have a significantly larger attack surface. Many Databricks deployments in practice are under-secured at the network level.",
              },
            ],
            keyConcepts: [
              {
                term: "Customer-Managed VPC",
                definition:
                  "Deploying Databricks in your own virtual network for full control over networking.",
              },
              {
                term: "Private Link",
                definition:
                  "Private network connections to services without traversing the public internet.",
              },
              {
                term: "Egress Firewall",
                definition:
                  "Network control restricting outbound connections from the data plane to approved destinations.",
              },
              {
                term: "VNet Injection",
                definition:
                  "Azure feature deploying Databricks workspace within a customer's Virtual Network.",
              },
            ],
            externalResources: [
              {
                title: "Databricks Network Security",
                url: "https://docs.databricks.com/en/security/network/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official guide to Databricks network security configuration.",
              },
              {
                title: "Private Link for Databricks",
                url: "https://docs.databricks.com/en/security/network/classic/privatelink.html",
                type: "documentation",
                isFree: true,
                description:
                  "Setup guide for Private Link connectivity.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-5-2",
            lessonId: "phase-4-module-5-lesson-2",
            questions: [
              {
                id: "q4-5-2-1",
                question:
                  "What does Private Link provide for Databricks?",
                options: [
                  "Faster internet access",
                  "Private connections to Databricks without using the public internet",
                  "Free compute resources",
                  "Automatic data backup",
                ],
                correctIndex: 1,
                explanation:
                  "Private Link creates a private network path to Databricks control plane and storage, eliminating internet exposure.",
              },
              {
                id: "q4-5-2-2",
                question:
                  "Why should outbound traffic from Databricks clusters be restricted?",
                options: [
                  "To improve performance",
                  "To prevent data exfiltration and block C2 communication from compromised clusters",
                  "Outbound restrictions are not needed",
                  "To reduce cloud costs",
                ],
                correctIndex: 1,
                explanation:
                  "Restricting outbound traffic prevents compromised clusters from sending data to unauthorized destinations.",
              },
              {
                id: "q4-5-2-3",
                question:
                  "What is the benefit of deploying Databricks in a customer-managed VPC?",
                options: [
                  "Lower costs",
                  "Full control over network configuration, security groups, routing, and connectivity",
                  "Faster Spark processing",
                  "Access to more regions",
                ],
                correctIndex: 1,
                explanation:
                  "Customer-managed VPC gives you full control over network security, required for many compliance frameworks.",
              },
            ],
          },
        },
        {
          id: "phase-4-module-5-lesson-3",
          slug: "compliance-and-security-certifications",
          moduleId: "phase-4-module-5",
          title: "Compliance & Security Certifications",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Databricks Compliance Certifications",
                type: "text",
                body: "Databricks maintains numerous compliance certifications:\n\n**SOC 2 Type II:** Annual audit verifying security, availability, and confidentiality controls. The most commonly requested certification.\n\n**ISO 27001:** International information security management standard.\n\n**ISO 27017/27018:** Cloud-specific security and privacy extensions.\n\n**HIPAA:** Healthcare data protection. Databricks signs Business Associate Agreements (BAAs).\n\n**FedRAMP:** US federal government cloud security authorization (Moderate baseline).\n\n**PCI-DSS:** Payment card data protection.\n\n**GDPR:** EU data protection (data processing agreement available).\n\n**HITRUST:** Healthcare security framework.\n\n**What this means for you:** When a client asks 'Is Databricks secure enough for our data?', you can point to these certifications. But remember -- certifications cover the platform. The customer is still responsible for configuring it securely (shared responsibility).",
              },
              {
                heading: "Security Reference Architecture",
                type: "text",
                body: "Databricks provides a **Security Reference Architecture** for each cloud:\n\n**Typical secure deployment includes:**\n1. Unity Catalog for governance (enabled, metastore configured)\n2. Customer-managed VPC/VNet with private subnets\n3. Private Link for control plane connectivity\n4. Customer-managed encryption keys\n5. IP access lists restricting workspace access\n6. SCIM provisioning from corporate IdP\n7. SSO with MFA enforced\n8. Audit logs delivered to secure storage\n9. Cluster policies enforcing security standards\n10. Secret scopes for credential management\n\nThis is the configuration you will recommend and validate as a consultant. Most organizations implement only a subset of these controls, which is where your expertise adds value.",
              },
              {
                heading: "Databricks Security Best Practices Summary",
                type: "text",
                body: "**Identity & Access:**\n- Enable SSO + MFA\n- Use SCIM for automated provisioning/deprovisioning\n- Grant permissions to groups, never individuals\n- Minimize admin roles\n- Use service principals for automation\n\n**Data Protection:**\n- Enable Unity Catalog for all workspaces\n- Configure row-level and column-level security for PII\n- Use customer-managed encryption keys\n- Enable data classification scanning\n\n**Network:**\n- Deploy in customer-managed VPC\n- Enable Private Link\n- Configure IP access lists\n- Restrict outbound traffic\n\n**Monitoring:**\n- Enable audit log delivery\n- Build security monitoring dashboards\n- Set up alerting on anomalous activity\n- Conduct regular access reviews\n\n**Compute:**\n- Use cluster policies to enforce standards\n- Prefer single-user or shared access modes\n- Set auto-termination\n- Use latest Databricks Runtime versions",
              },
              {
                heading: "Your Consulting Value",
                type: "note",
                body: "You now have knowledge that combines cybersecurity fundamentals with deep Databricks platform expertise. Here is why this makes you valuable:\n\n**The gap:** Most Databricks administrators are data engineers, not security professionals. They know how to build pipelines but not how to secure them. Most security professionals know firewalls and endpoints but not data platforms.\n\n**Your niche:** You bridge both worlds. You can:\n- Assess a Databricks deployment against security best practices\n- Identify gaps in Unity Catalog configuration\n- Review network architecture for compliance\n- Audit access controls and permissions\n- Implement monitoring and alerting\n- Write security documentation for compliance audits\n\n**Phase 5 adds the AI layer** -- securing not just the platform, but the AI models, training data, and inference pipelines running on it. This combination is extremely rare and highly sought after.",
              },
            ],
            keyConcepts: [
              {
                term: "SOC 2 Type II",
                definition:
                  "Annual audit certification verifying security, availability, and confidentiality controls over time.",
              },
              {
                term: "Security Reference Architecture",
                definition:
                  "Databricks-recommended configuration for secure deployments including all major security controls.",
              },
              {
                term: "Shared Responsibility",
                definition:
                  "Databricks secures the platform; customers are responsible for configuring it securely.",
              },
              {
                term: "BAA",
                definition:
                  "Business Associate Agreement -- required for handling healthcare data under HIPAA.",
              },
            ],
            externalResources: [
              {
                title: "Databricks Security Best Practices",
                url: "https://docs.databricks.com/en/security/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Comprehensive Databricks security documentation and best practices.",
              },
              {
                title: "Databricks Trust Center",
                url: "https://www.databricks.com/trust",
                type: "documentation",
                isFree: true,
                description:
                  "Databricks compliance certifications, reports, and security documentation.",
              },
              {
                title: "Databricks Security Reference Architecture (AWS)",
                url: "https://docs.databricks.com/en/security/network/classic/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "AWS-specific security reference architecture for Databricks.",
              },
            ],
          },
          quiz: {
            id: "quiz-4-5-3",
            lessonId: "phase-4-module-5-lesson-3",
            questions: [
              {
                id: "q4-5-3-1",
                question:
                  "Databricks being SOC 2 certified means the customer's deployment is automatically secure. True or false?",
                options: [
                  "True -- certification covers everything",
                  "False -- certifications cover the platform, but customers must configure it securely (shared responsibility)",
                  "True -- no additional configuration needed",
                  "False -- SOC 2 is not a real certification",
                ],
                correctIndex: 1,
                explanation:
                  "Shared responsibility: Databricks secures the platform, but customers must properly configure access controls, networking, encryption, and monitoring.",
              },
              {
                id: "q4-5-3-2",
                question:
                  "Which of these is NOT part of a typical secure Databricks deployment?",
                options: [
                  "Unity Catalog enabled",
                  "Private Link configured",
                  "All users given Account Admin access for convenience",
                  "Customer-managed encryption keys",
                ],
                correctIndex: 2,
                explanation:
                  "Giving all users Account Admin access violates least privilege. Admin access should be limited to 2-3 people.",
              },
              {
                id: "q4-5-3-3",
                question:
                  "What makes AI security consultants especially valuable for Databricks customers?",
                options: [
                  "They can write Spark code faster",
                  "They bridge the gap between data engineering and security expertise that most teams lack",
                  "They provide free Databricks licenses",
                  "They replace the need for data engineers",
                ],
                correctIndex: 1,
                explanation:
                  "Most data engineers lack security expertise, and most security professionals lack data platform knowledge. Bridging both worlds is the value.",
              },
            ],
          },
        },
      ],
    },
  ],
};
