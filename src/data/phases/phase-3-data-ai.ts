import type { Phase } from "@/types";

export const phase3: Phase = {
  id: "phase-3",
  slug: "data-ai-fundamentals",
  title: "Data & AI Fundamentals",
  description:
    "Learn data engineering concepts, SQL, machine learning fundamentals, ML pipelines, and data governance.",
  weekRange: "Weeks 11-16",
  estimatedHours: 60,
  icon: "BrainCircuit",
  color: "violet",
  modules: [
    // ==================== MODULE 1: DATA ENGINEERING & SQL ====================
    {
      id: "phase-3-module-1",
      slug: "data-engineering-and-sql",
      phaseId: "phase-3",
      title: "Data Engineering Concepts & SQL",
      description:
        "Understand databases, data warehouses, ETL pipelines, and essential SQL for querying and managing data.",
      estimatedHours: 15,
      labExercise: {
        title: "SQL Querying Lab",
        objective:
          "Write SQL queries against a sample dataset to practice data retrieval, filtering, aggregation, and joins.",
        instructions: [
          "Go to SQLiteOnline (https://sqliteonline.com/) or install DB Browser for SQLite.",
          "Create tables: users (id, name, email, role, created_at), logins (id, user_id, ip_address, login_time, success).",
          "Insert at least 20 sample rows into each table.",
          "Write a SELECT query to find all failed login attempts in the last 24 hours.",
          "Write a JOIN query to find which users had failed logins along with their email addresses.",
          "Write an aggregation query to find the top 5 IP addresses with the most failed logins.",
          "Write a subquery to find users who have never logged in successfully.",
        ],
        deliverable:
          "A SQL file with all your CREATE TABLE, INSERT, and SELECT statements along with their results.",
        estimatedMinutes: 60,
      },
      lessons: [
        {
          id: "phase-3-module-1-lesson-1",
          slug: "databases-and-data-storage",
          moduleId: "phase-3-module-1",
          title: "Databases & Data Storage",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Why Data Engineering Matters for Security",
                type: "text",
                body: "AI security begins with data. Every machine learning model is only as good -- and as secure -- as its data. Understanding how data is stored, moved, and processed is essential because:\n\n- **Data poisoning attacks** corrupt training data to manipulate model behavior\n- **Data exfiltration** is the ultimate goal of many breaches\n- **Compliance regulations** (GDPR, HIPAA) dictate how data must be handled\n- **Access control** to data determines who can train models on what\n\nAs an AI security consultant, you will audit data pipelines, review access controls on data stores, and ensure data integrity throughout the ML lifecycle.",
              },
              {
                heading: "Types of Databases",
                type: "text",
                body: "**Relational Databases (SQL):**\nData organized in tables with rows and columns. Relationships defined by foreign keys. Strong consistency and ACID transactions.\n\nExamples: PostgreSQL, MySQL, SQL Server, Oracle\n\n**NoSQL Databases:**\n- **Document stores:** JSON-like documents (MongoDB, Firestore)\n- **Key-value stores:** Simple lookups (Redis, DynamoDB)\n- **Column-family stores:** Wide columns for analytics (Cassandra, HBase)\n- **Graph databases:** Relationships between entities (Neo4j)\n\n**When to use which:** Relational for structured data with relationships. NoSQL for flexibility, scale, and specific access patterns.",
              },
              {
                heading: "Data Warehouses vs Data Lakes",
                type: "text",
                body: "**Data Warehouse:**\nOptimized for analytical queries on structured, cleaned data. Data is transformed before loading (schema-on-write). Used for BI dashboards and reporting.\n\nExamples: Snowflake, Amazon Redshift, Google BigQuery\n\n**Data Lake:**\nStores raw data in any format (structured, semi-structured, unstructured). Data is transformed when read (schema-on-read). Cheaper storage, more flexible.\n\nExamples: Amazon S3, Azure Data Lake, Google Cloud Storage\n\n**Data Lakehouse (Databricks):**\nCombines the best of both: the flexibility and low cost of a data lake with the performance and reliability of a data warehouse. Databricks Delta Lake is the pioneer of this architecture. It adds ACID transactions, schema enforcement, and time travel to data lake storage.",
              },
              {
                heading: "ETL vs ELT Pipelines",
                type: "text",
                body: "Data pipelines move data from sources to destinations:\n\n**ETL (Extract, Transform, Load):**\n1. **Extract** data from sources (APIs, databases, files)\n2. **Transform** it (clean, filter, aggregate, join)\n3. **Load** into the destination (data warehouse)\n\nTraditional approach. Transform happens in a separate ETL tool before loading.\n\n**ELT (Extract, Load, Transform):**\n1. **Extract** from sources\n2. **Load** raw data into the destination (data lake)\n3. **Transform** inside the destination using its compute power\n\nModern approach used with cloud data platforms like Databricks. Raw data lands first, then transformations happen using Spark or SQL.",
              },
              {
                heading: "Data Pipeline Security",
                type: "warning",
                body: "Data pipelines are high-value attack targets:\n\n- **Injection points:** Where external data enters your pipeline is where poisoning happens\n- **Credentials:** Pipelines need credentials to connect to sources -- these must be stored in secrets managers, never in code\n- **Data in transit:** All pipeline connections should use encrypted channels (TLS)\n- **Logging:** Every data movement should be logged for audit trails\n- **Access control:** Not everyone who can query the warehouse should be able to modify the pipeline\n\nIn Databricks, Unity Catalog provides lineage tracking so you can see exactly where data came from and how it was transformed.",
              },
            ],
            keyConcepts: [
              {
                term: "Relational Database",
                definition:
                  "Database organizing data in tables with rows and columns, using SQL for queries.",
              },
              {
                term: "Data Lake",
                definition:
                  "Storage repository holding raw data in any format until needed. Schema-on-read.",
              },
              {
                term: "Data Lakehouse",
                definition:
                  "Architecture combining data lake flexibility with data warehouse reliability. Pioneered by Databricks.",
              },
              {
                term: "ETL",
                definition:
                  "Extract, Transform, Load -- a data pipeline pattern where transformation happens before loading.",
              },
              {
                term: "ACID Transactions",
                definition:
                  "Atomicity, Consistency, Isolation, Durability -- guarantees for reliable database operations.",
              },
            ],
            externalResources: [
              {
                title: "Data Engineering Explained - Fireship",
                url: "https://www.youtube.com/watch?v=qWru-b6m030",
                type: "video",
                isFree: true,
                description:
                  "Fast overview of data engineering concepts and tools.",
              },
              {
                title: "Delta Lake Documentation",
                url: "https://docs.delta.io/latest/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official docs for Delta Lake, the foundation of the Databricks lakehouse.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-1-1",
            lessonId: "phase-3-module-1-lesson-1",
            questions: [
              {
                id: "q3-1-1-1",
                question:
                  "What architecture combines data lake flexibility with data warehouse reliability?",
                options: [
                  "NoSQL database",
                  "Data lakehouse",
                  "ETL pipeline",
                  "Graph database",
                ],
                correctIndex: 1,
                explanation:
                  "The data lakehouse (pioneered by Databricks/Delta Lake) combines the best of data lakes and data warehouses.",
              },
              {
                id: "q3-1-1-2",
                question:
                  "In ETL, when does transformation happen?",
                options: [
                  "After loading into the destination",
                  "Before loading into the destination",
                  "During extraction only",
                  "Transformation is optional",
                ],
                correctIndex: 1,
                explanation:
                  "In ETL, data is transformed in a staging area before being loaded into the target. In ELT, it happens after loading.",
              },
              {
                id: "q3-1-1-3",
                question:
                  "Why are data pipelines a security concern for AI systems?",
                options: [
                  "They are too slow",
                  "They are where data poisoning, credential exposure, and exfiltration risks exist",
                  "They only affect non-AI systems",
                  "They do not handle sensitive data",
                ],
                correctIndex: 1,
                explanation:
                  "Data pipelines are where external data enters the system, making them vulnerable to poisoning, credential theft, and data exfiltration.",
              },
            ],
          },
        },
        {
          id: "phase-3-module-1-lesson-2",
          slug: "sql-fundamentals",
          moduleId: "phase-3-module-1",
          title: "SQL Fundamentals",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "What Is SQL?",
                type: "text",
                body: "**SQL (Structured Query Language)** is the standard language for interacting with relational databases. As a security professional, you will use SQL to:\n\n- Query security logs and audit trails\n- Investigate incidents by searching event data\n- Analyze access patterns for anomalies\n- Validate data integrity in AI pipelines\n- Write data governance policies\n\nSQL is used in Databricks notebooks, data warehouses, SIEM systems, and virtually every data platform.",
              },
              {
                heading: "Core SQL Statements",
                type: "text",
                body: "**SELECT -- Retrieve data:**\nSELECT name, email, role FROM users;\nSELECT * FROM users WHERE role = 'admin';\nSELECT * FROM logins WHERE success = false ORDER BY login_time DESC;\n\n**INSERT -- Add data:**\nINSERT INTO users (name, email, role) VALUES ('Alice', 'alice@company.com', 'analyst');\n\n**UPDATE -- Modify data:**\nUPDATE users SET role = 'admin' WHERE id = 42;\n\n**DELETE -- Remove data:**\nDELETE FROM logins WHERE login_time < '2024-01-01';",
              },
              {
                heading: "Filtering and Sorting",
                type: "text",
                body: "**WHERE -- Filter rows:**\nSELECT * FROM logins WHERE success = false AND login_time > '2024-06-01';\nSELECT * FROM users WHERE email LIKE '%@company.com';\nSELECT * FROM logins WHERE ip_address IN ('10.0.0.1', '10.0.0.2');\n\n**ORDER BY -- Sort results:**\nSELECT * FROM logins ORDER BY login_time DESC;\n\n**LIMIT -- Restrict result count:**\nSELECT * FROM logins ORDER BY login_time DESC LIMIT 100;\n\n**DISTINCT -- Unique values:**\nSELECT DISTINCT ip_address FROM logins WHERE success = false;",
              },
              {
                heading: "Aggregation and Grouping",
                type: "text",
                body: "**Aggregate functions:** COUNT, SUM, AVG, MIN, MAX\n\n-- How many failed logins total?\nSELECT COUNT(*) FROM logins WHERE success = false;\n\n-- Failed logins per IP address\nSELECT ip_address, COUNT(*) as attempts\nFROM logins\nWHERE success = false\nGROUP BY ip_address\nORDER BY attempts DESC;\n\n-- Only IPs with more than 10 failures (HAVING filters groups)\nSELECT ip_address, COUNT(*) as attempts\nFROM logins\nWHERE success = false\nGROUP BY ip_address\nHAVING COUNT(*) > 10\nORDER BY attempts DESC;",
              },
              {
                heading: "SQL Injection Revisited",
                type: "warning",
                body: "Remember from Phase 2: SQL injection happens when user input is concatenated directly into SQL queries.\n\n**Never do this:**\nquery = \"SELECT * FROM users WHERE name = '\" + user_input + \"'\"\n\n**Always use parameterized queries:**\ncursor.execute(\"SELECT * FROM users WHERE name = %s\", (user_input,))\n\nAs a security auditor, you will look for SQL injection vulnerabilities in code reviews. They remain one of the most common and impactful web vulnerabilities.",
              },
            ],
            keyConcepts: [
              {
                term: "SQL",
                definition:
                  "Structured Query Language -- standard language for querying and managing relational databases.",
              },
              {
                term: "SELECT",
                definition:
                  "SQL command to retrieve data from one or more tables.",
              },
              {
                term: "WHERE",
                definition:
                  "SQL clause to filter rows based on conditions.",
              },
              {
                term: "GROUP BY",
                definition:
                  "SQL clause to group rows and apply aggregate functions (COUNT, SUM, AVG).",
              },
              {
                term: "JOIN",
                definition:
                  "SQL operation combining rows from two or more tables based on a related column.",
              },
            ],
            externalResources: [
              {
                title: "SQL Tutorial - W3Schools",
                url: "https://www.w3schools.com/sql/",
                type: "article",
                isFree: true,
                description:
                  "Interactive SQL tutorial with a built-in query editor.",
              },
              {
                title: "SQLBolt - Interactive SQL Lessons",
                url: "https://sqlbolt.com/",
                type: "course",
                isFree: true,
                description:
                  "Learn SQL with interactive exercises, no setup required.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-1-2",
            lessonId: "phase-3-module-1-lesson-2",
            questions: [
              {
                id: "q3-1-2-1",
                question:
                  "Which SQL clause filters the results of an aggregation?",
                options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
                correctIndex: 2,
                explanation:
                  "HAVING filters groups after aggregation. WHERE filters individual rows before aggregation.",
              },
              {
                id: "q3-1-2-2",
                question:
                  "What does SELECT DISTINCT ip_address FROM logins return?",
                options: [
                  "All IP addresses including duplicates",
                  "Only unique IP addresses",
                  "IP addresses sorted alphabetically",
                  "A count of IP addresses",
                ],
                correctIndex: 1,
                explanation:
                  "DISTINCT removes duplicate values, returning only unique IP addresses.",
              },
              {
                id: "q3-1-2-3",
                question:
                  "Why are parameterized queries important?",
                options: [
                  "They run faster",
                  "They prevent SQL injection by separating code from data",
                  "They are required by all databases",
                  "They encrypt the query results",
                ],
                correctIndex: 1,
                explanation:
                  "Parameterized queries treat user input as data, never as executable SQL, preventing injection attacks.",
              },
            ],
          },
        },
        {
          id: "phase-3-module-1-lesson-3",
          slug: "joins-and-advanced-queries",
          moduleId: "phase-3-module-1",
          title: "JOINs & Advanced Queries",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "SQL JOINs",
                type: "text",
                body: "JOINs combine data from multiple tables based on a related column:\n\n**INNER JOIN:** Returns only rows that match in both tables.\nSELECT users.name, logins.login_time\nFROM users\nINNER JOIN logins ON users.id = logins.user_id\nWHERE logins.success = false;\n\n**LEFT JOIN:** Returns all rows from the left table plus matching rows from the right. Non-matching rows get NULL.\nSELECT users.name, COUNT(logins.id) as login_count\nFROM users\nLEFT JOIN logins ON users.id = logins.user_id\nGROUP BY users.name;\n\n**RIGHT JOIN:** Opposite of LEFT JOIN -- all right table rows.\n\n**FULL OUTER JOIN:** All rows from both tables, with NULLs where there is no match.",
              },
              {
                heading: "Subqueries",
                type: "text",
                body: "A **subquery** is a query nested inside another query:\n\n-- Find users who have never logged in\nSELECT name, email FROM users\nWHERE id NOT IN (\n  SELECT DISTINCT user_id FROM logins\n);\n\n-- Find users with above-average login attempts\nSELECT user_id, COUNT(*) as attempts\nFROM logins\nGROUP BY user_id\nHAVING COUNT(*) > (\n  SELECT AVG(cnt) FROM (\n    SELECT COUNT(*) as cnt FROM logins GROUP BY user_id\n  )\n);",
              },
              {
                heading: "Window Functions",
                type: "text",
                body: "Window functions perform calculations across a set of rows related to the current row:\n\n-- Rank users by number of failed logins\nSELECT user_id,\n  COUNT(*) as failures,\n  RANK() OVER (ORDER BY COUNT(*) DESC) as risk_rank\nFROM logins\nWHERE success = false\nGROUP BY user_id;\n\n-- Running total of logins per day\nSELECT DATE(login_time) as day,\n  COUNT(*) as daily_logins,\n  SUM(COUNT(*)) OVER (ORDER BY DATE(login_time)) as running_total\nFROM logins\nGROUP BY DATE(login_time);\n\nWindow functions are powerful for security analytics: detecting trends, ranking risks, and identifying anomalies.",
              },
              {
                heading: "SQL in Databricks",
                type: "note",
                body: "Databricks SQL (formerly Databricks SQL Analytics) provides:\n\n- **SQL Warehouses:** Serverless compute for SQL queries against your lakehouse\n- **SQL Editor:** Write and run queries in a notebook-like interface\n- **Dashboards:** Build visualizations from query results\n- **Unity Catalog integration:** Row and column-level security applied to SQL queries automatically\n\nAs an AI security professional, you will use Databricks SQL to audit data access, investigate incidents, and validate data governance policies. The SQL you are learning here transfers directly.",
              },
            ],
            keyConcepts: [
              {
                term: "INNER JOIN",
                definition:
                  "Returns only rows that have matching values in both tables.",
              },
              {
                term: "LEFT JOIN",
                definition:
                  "Returns all rows from the left table and matching rows from the right. Non-matching rows get NULL.",
              },
              {
                term: "Subquery",
                definition:
                  "A query nested inside another query, used for complex filtering and calculations.",
              },
              {
                term: "Window Function",
                definition:
                  "Performs calculations across a set of rows related to the current row (RANK, SUM OVER, etc.).",
              },
            ],
            externalResources: [
              {
                title: "SQL JOINs Visualized",
                url: "https://joins.spathon.com/",
                type: "tool",
                isFree: true,
                description:
                  "Interactive visual tool for understanding SQL JOIN types.",
              },
              {
                title: "Window Functions Explained - Mode Analytics",
                url: "https://mode.com/sql-tutorial/sql-window-functions",
                type: "article",
                isFree: true,
                description:
                  "Comprehensive guide to SQL window functions with examples.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-1-3",
            lessonId: "phase-3-module-1-lesson-3",
            questions: [
              {
                id: "q3-1-3-1",
                question:
                  "Which JOIN returns all rows from the left table even if there is no match in the right table?",
                options: [
                  "INNER JOIN",
                  "LEFT JOIN",
                  "RIGHT JOIN",
                  "CROSS JOIN",
                ],
                correctIndex: 1,
                explanation:
                  "LEFT JOIN returns all left table rows. Non-matching rows get NULL values for right table columns.",
              },
              {
                id: "q3-1-3-2",
                question:
                  "What is a subquery?",
                options: [
                  "A query that runs in the background",
                  "A query nested inside another query",
                  "A query that only returns one column",
                  "A query optimized for speed",
                ],
                correctIndex: 1,
                explanation:
                  "A subquery is a query embedded inside another query, often used in WHERE or FROM clauses.",
              },
              {
                id: "q3-1-3-3",
                question:
                  "What is RANK() OVER (ORDER BY ...) an example of?",
                options: [
                  "A subquery",
                  "An aggregate function",
                  "A window function",
                  "A stored procedure",
                ],
                correctIndex: 2,
                explanation:
                  "RANK() OVER is a window function that assigns a rank to each row within a result set partition.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 2: ML / AI FUNDAMENTALS ====================
    {
      id: "phase-3-module-2",
      slug: "machine-learning-fundamentals",
      phaseId: "phase-3",
      title: "Machine Learning / AI Fundamentals",
      description:
        "Learn what ML is, supervised vs unsupervised learning, neural networks basics, and how AI models work.",
      estimatedHours: 15,
      databricksCompanion: {
        title: "Generative AI Fundamentals Accreditation",
        url: "https://www.databricks.com/training/catalog/generative-ai-fundamentals-accreditation-1811",
        description:
          "Free Databricks accreditation. Complete alongside this module to earn your first credential.",
        isFree: true,
      },
      labExercise: {
        title: "ML Model Exploration Lab",
        objective:
          "Train a simple classification model using scikit-learn and understand each step of the process.",
        instructions: [
          "Install scikit-learn: pip install scikit-learn pandas matplotlib.",
          "Load the Iris dataset: from sklearn.datasets import load_iris.",
          "Split data into training (80%) and testing (20%) sets using train_test_split.",
          "Train a Decision Tree classifier on the training data.",
          "Evaluate the model on the test set -- print accuracy, precision, and recall.",
          "Visualize the confusion matrix using matplotlib.",
          "Try a Random Forest classifier and compare its accuracy to the Decision Tree.",
          "Write a summary: What did each metric tell you? Which model performed better and why?",
        ],
        deliverable:
          "A Python notebook with your code, model metrics, confusion matrix visualization, and written summary.",
        estimatedMinutes: 75,
      },
      lessons: [
        {
          id: "phase-3-module-2-lesson-1",
          slug: "what-is-machine-learning",
          moduleId: "phase-3-module-2",
          title: "What Is Machine Learning?",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "AI, ML, and Deep Learning",
                type: "text",
                body: "These terms are often used interchangeably but have distinct meanings:\n\n**Artificial Intelligence (AI):** The broadest term. Any system that exhibits intelligent behavior -- playing chess, recognizing speech, driving a car.\n\n**Machine Learning (ML):** A subset of AI. Systems that learn patterns from data without being explicitly programmed. Instead of writing rules, you provide data and the algorithm discovers the rules.\n\n**Deep Learning (DL):** A subset of ML using neural networks with many layers. Powers image recognition, language translation, and generative AI (ChatGPT, DALL-E).\n\n**Generative AI:** A subset of deep learning that creates new content -- text, images, code, music. LLMs (Large Language Models) like GPT-4 and Claude are generative AI.",
              },
              {
                heading: "How Machine Learning Works",
                type: "text",
                body: "Traditional programming: **Rules + Data → Answers**\nYou write explicit rules: IF temperature > 100 THEN alert.\n\nMachine learning: **Data + Answers → Rules**\nYou provide examples (data) with known outcomes (labels). The algorithm discovers the rules.\n\n**Example:** Instead of writing rules to detect spam emails, you give the algorithm 10,000 emails labeled 'spam' or 'not spam.' It learns patterns (certain words, sender patterns, formatting) and can then classify new emails it has never seen.\n\nThe key insight: ML models are statistical pattern matchers. They find correlations in data. They do not understand the data the way humans do.",
              },
              {
                heading: "Types of Machine Learning",
                type: "text",
                body: "**Supervised Learning:**\nTraining data includes both inputs AND correct outputs (labels).\n- **Classification:** Predict a category (spam/not spam, malware/benign, fraud/legitimate)\n- **Regression:** Predict a number (house price, risk score, time to failure)\n\n**Unsupervised Learning:**\nTraining data has inputs but NO labels. The algorithm finds hidden structure.\n- **Clustering:** Group similar items (customer segments, network traffic patterns)\n- **Anomaly detection:** Find unusual data points (potential security threats)\n- **Dimensionality reduction:** Simplify complex data while preserving patterns\n\n**Reinforcement Learning:**\nAn agent learns through trial and error, receiving rewards or penalties. Used in robotics, game AI, and recommendation systems.",
              },
              {
                heading: "ML and Security -- Two Sides",
                type: "note",
                body: "Machine learning intersects with security in two ways:\n\n**ML FOR security:** Using ML to improve security\n- Anomaly detection to identify network intrusions\n- Malware classification from behavioral patterns\n- Spam and phishing detection\n- User behavior analytics (UEBA)\n\n**Security FOR ML:** Protecting ML systems from attack\n- Preventing training data poisoning\n- Protecting model intellectual property\n- Defending against adversarial inputs\n- Securing ML infrastructure\n\nAs an AI security professional, you must understand both directions. This module covers the fundamentals; Phase 5 goes deep into security FOR ML.",
              },
            ],
            keyConcepts: [
              {
                term: "Machine Learning",
                definition:
                  "Systems that learn patterns from data rather than being explicitly programmed with rules.",
              },
              {
                term: "Supervised Learning",
                definition:
                  "Training with labeled data (inputs paired with correct outputs).",
              },
              {
                term: "Unsupervised Learning",
                definition:
                  "Training without labels -- the algorithm discovers hidden patterns and structure.",
              },
              {
                term: "Classification",
                definition:
                  "Predicting which category an input belongs to (spam/not spam, malware/benign).",
              },
              {
                term: "Generative AI",
                definition:
                  "AI that creates new content (text, images, code) by learning patterns from training data.",
              },
            ],
            externalResources: [
              {
                title: "Machine Learning for Everybody - freeCodeCamp",
                url: "https://www.youtube.com/watch?v=i_LwzRVP7bg",
                type: "video",
                isFree: true,
                description:
                  "Beginner-friendly ML course with no coding required.",
              },
              {
                title: "Google Machine Learning Crash Course",
                url: "https://developers.google.com/machine-learning/crash-course",
                type: "course",
                isFree: true,
                description:
                  "Google's practical introduction to machine learning concepts.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-2-1",
            lessonId: "phase-3-module-2-lesson-1",
            questions: [
              {
                id: "q3-2-1-1",
                question:
                  "How does machine learning differ from traditional programming?",
                options: [
                  "ML uses faster computers",
                  "In ML, you provide data and answers; the algorithm learns the rules",
                  "ML does not use any data",
                  "Traditional programming is always better",
                ],
                correctIndex: 1,
                explanation:
                  "Traditional: Rules + Data → Answers. ML: Data + Answers → Rules. ML discovers patterns from examples.",
              },
              {
                id: "q3-2-1-2",
                question:
                  "Detecting unusual network traffic patterns without labeled examples is which type of learning?",
                options: [
                  "Supervised learning",
                  "Unsupervised learning",
                  "Reinforcement learning",
                  "Transfer learning",
                ],
                correctIndex: 1,
                explanation:
                  "Anomaly detection without labels is unsupervised learning -- the algorithm finds unusual patterns on its own.",
              },
              {
                id: "q3-2-1-3",
                question:
                  "What is generative AI?",
                options: [
                  "AI that detects objects in images",
                  "AI that creates new content like text, images, or code",
                  "AI that only works on structured data",
                  "AI that requires no training data",
                ],
                correctIndex: 1,
                explanation:
                  "Generative AI creates new content by learning patterns from training data. LLMs like GPT-4 and Claude are examples.",
              },
            ],
          },
        },
        {
          id: "phase-3-module-2-lesson-2",
          slug: "neural-networks-and-deep-learning",
          moduleId: "phase-3-module-2",
          title: "Neural Networks & Deep Learning",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "What Is a Neural Network?",
                type: "text",
                body: "A **neural network** is a computing system loosely inspired by biological brains. It consists of layers of interconnected nodes (neurons):\n\n**Input Layer:** Receives the raw data (pixel values, text tokens, numerical features)\n\n**Hidden Layers:** Process and transform the data. Each node applies a mathematical function to its inputs, applies weights, adds a bias, and passes the result through an activation function.\n\n**Output Layer:** Produces the final prediction (a classification label, a number, a probability distribution)\n\nThe word 'deep' in deep learning simply means many hidden layers. A network with 2 hidden layers is shallow. GPT-4 has hundreds of layers with billions of parameters.",
              },
              {
                heading: "How Neural Networks Learn",
                type: "text",
                body: "Neural networks learn through a process called **training:**\n\n1. **Forward pass:** Input data flows through the network, producing a prediction\n2. **Loss calculation:** The prediction is compared to the correct answer using a loss function (how wrong was it?)\n3. **Backpropagation:** The error is propagated backward through the network\n4. **Weight update:** Each connection weight is adjusted slightly to reduce the error (using gradient descent)\n5. **Repeat:** This process runs millions of times across the training dataset\n\n**Epoch:** One complete pass through the entire training dataset.\n**Batch:** A subset of training data processed at once (for efficiency).\n**Learning rate:** How much to adjust weights each step. Too high = unstable. Too low = slow learning.",
              },
              {
                heading: "Types of Neural Networks",
                type: "text",
                body: "**CNNs (Convolutional Neural Networks):** Specialized for images and spatial data. Detect patterns like edges, textures, and shapes. Used in image classification, object detection, facial recognition.\n\n**RNNs (Recurrent Neural Networks):** Process sequential data by maintaining memory of previous inputs. Used for time series, speech recognition.\n\n**Transformers:** The architecture behind modern AI breakthroughs. Process entire sequences in parallel using 'attention mechanisms.' Powers GPT, Claude, BERT, and all modern LLMs.\n\n**GANs (Generative Adversarial Networks):** Two networks compete -- a generator creates fake data while a discriminator tries to detect fakes. Used for generating realistic images (and deepfakes).",
              },
              {
                heading: "Large Language Models (LLMs)",
                type: "text",
                body: "LLMs are transformer-based models trained on massive text datasets:\n\n**Scale:** GPT-4 has hundreds of billions of parameters. Training costs tens of millions of dollars.\n\n**How they work:** Given a sequence of text, predict the next token (word/subword). Through this simple objective, they learn grammar, facts, reasoning, and even code.\n\n**Capabilities:** Text generation, summarization, translation, code writing, question answering, reasoning.\n\n**Limitations:** Hallucinations (generating false information), no true understanding, biases from training data, inability to learn after training (without fine-tuning).\n\n**Examples:** GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta), DBRX (Databricks).",
              },
              {
                heading: "Why This Matters for Security",
                type: "warning",
                body: "Understanding how neural networks work helps you understand how they can be attacked:\n\n- **Adversarial examples:** Tiny, carefully crafted perturbations to input data that cause misclassification (a stop sign classified as a speed limit sign)\n- **Model extraction:** Querying a model API thousands of times to reverse-engineer the model's behavior\n- **Training data extraction:** Prompting LLMs to reveal memorized training data (personal information, code, etc.)\n- **Prompt injection:** Manipulating LLM inputs to bypass safety guardrails\n\nKnowing the internals helps you think like an attacker and design better defenses.",
              },
            ],
            keyConcepts: [
              {
                term: "Neural Network",
                definition:
                  "Computing system of layered, interconnected nodes that learns patterns from data.",
              },
              {
                term: "Backpropagation",
                definition:
                  "Algorithm propagating error backward through a network to update connection weights.",
              },
              {
                term: "Transformer",
                definition:
                  "Neural network architecture using attention mechanisms. Foundation of modern LLMs.",
              },
              {
                term: "LLM",
                definition:
                  "Large Language Model -- a transformer trained on massive text data that can generate and understand text.",
              },
              {
                term: "Adversarial Example",
                definition:
                  "Input carefully crafted to cause a model to make an incorrect prediction.",
              },
            ],
            externalResources: [
              {
                title: "Neural Networks Explained - 3Blue1Brown",
                url: "https://www.youtube.com/watch?v=aircAruvnKk",
                type: "video",
                isFree: true,
                description:
                  "Beautiful visual explanation of how neural networks work.",
              },
              {
                title: "Attention Is All You Need (Transformers Paper)",
                url: "https://arxiv.org/abs/1706.03762",
                type: "article",
                isFree: true,
                description:
                  "The original paper that introduced the transformer architecture.",
              },
              {
                title:
                  "Databricks Generative AI Fundamentals",
                url: "https://www.databricks.com/training/catalog/generative-ai-fundamentals-accreditation-1811",
                type: "course",
                isFree: true,
                description:
                  "Free Databricks course covering generative AI concepts. Earn a credential.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-2-2",
            lessonId: "phase-3-module-2-lesson-2",
            questions: [
              {
                id: "q3-2-2-1",
                question:
                  "What architecture powers modern LLMs like GPT-4 and Claude?",
                options: [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformers",
                  "Generative Adversarial Networks",
                ],
                correctIndex: 2,
                explanation:
                  "Transformers, using attention mechanisms, are the foundation of all modern LLMs.",
              },
              {
                id: "q3-2-2-2",
                question:
                  "What is backpropagation?",
                options: [
                  "Sending data from output back to input",
                  "An algorithm that propagates error backward through the network to update weights",
                  "Backing up the model",
                  "Reversing the training process",
                ],
                correctIndex: 1,
                explanation:
                  "Backpropagation calculates how much each weight contributed to the error and adjusts weights to reduce it.",
              },
              {
                id: "q3-2-2-3",
                question:
                  "What is an adversarial example?",
                options: [
                  "A training example that is too difficult",
                  "Input carefully crafted to fool a model into making a wrong prediction",
                  "An example from a competing company's dataset",
                  "A test that measures model accuracy",
                ],
                correctIndex: 1,
                explanation:
                  "Adversarial examples are inputs designed to cause models to make incorrect predictions, a key AI security concern.",
              },
            ],
          },
        },
        {
          id: "phase-3-module-2-lesson-3",
          slug: "model-evaluation-and-bias",
          moduleId: "phase-3-module-2",
          title: "Model Evaluation & Bias",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Evaluating Model Performance",
                type: "text",
                body: "You need to measure how well a model performs before trusting it:\n\n**Accuracy:** Percentage of correct predictions overall.\nAccuracy = Correct Predictions / Total Predictions\n\nBut accuracy can be misleading. If 99% of emails are legitimate, a model that always says 'not spam' has 99% accuracy but catches zero spam.\n\n**Precision:** Of all items the model predicted as positive, how many were actually positive?\nPrecision = True Positives / (True Positives + False Positives)\nHigh precision means few false alarms.\n\n**Recall (Sensitivity):** Of all actual positive items, how many did the model catch?\nRecall = True Positives / (True Positives + False Negatives)\nHigh recall means few missed detections.\n\n**F1 Score:** Harmonic mean of precision and recall. Balances both metrics.\nF1 = 2 × (Precision × Recall) / (Precision + Recall)",
              },
              {
                heading: "Confusion Matrix",
                type: "example",
                body: "A confusion matrix shows all four outcomes:\n\n                    Predicted Positive | Predicted Negative\nActual Positive  |  True Positive (TP)  |  False Negative (FN)\nActual Negative  |  False Positive (FP)  |  True Negative (TN)\n\n**Security example (malware detection):**\n- TP: Correctly identified malware (good)\n- FP: Flagged a safe file as malware (annoying, but safe)\n- FN: Missed actual malware (dangerous!)\n- TN: Correctly identified a safe file (good)\n\nIn security, **false negatives are usually worse than false positives.** Missing a real threat is worse than a false alarm. This means we often prioritize recall over precision.",
              },
              {
                heading: "Training, Validation, and Test Sets",
                type: "text",
                body: "Data is split into three sets to ensure honest evaluation:\n\n**Training set (70-80%):** The model learns from this data.\n\n**Validation set (10-15%):** Used during training to tune hyperparameters and detect overfitting. The model does not learn from this data.\n\n**Test set (10-15%):** Used only once at the end to evaluate final performance. Never used during training or tuning.\n\n**Overfitting:** The model memorizes training data instead of learning general patterns. Performs great on training data but poorly on new data.\n\n**Underfitting:** The model is too simple to capture patterns. Poor performance on both training and test data.\n\n**Cross-validation:** Rotating which data serves as validation across multiple rounds, providing a more robust performance estimate.",
              },
              {
                heading: "Bias and Fairness in AI",
                type: "warning",
                body: "AI models can perpetuate and amplify biases from their training data:\n\n**Types of bias:**\n- **Historical bias:** Training data reflects past discrimination (hiring data biased against women)\n- **Representation bias:** Certain groups are underrepresented in training data (facial recognition less accurate for dark skin)\n- **Measurement bias:** Data collection methods favor certain groups\n- **Aggregation bias:** Treating diverse populations as one group\n\n**Real-world consequences:**\n- Loan approval models discriminating by race\n- Hiring algorithms filtering out female candidates\n- Criminal risk scores biased against minorities\n- Medical AI performing worse for underrepresented populations\n\n**As an AI security professional, bias auditing is part of your job.** You will assess whether models are fair across protected groups and recommend mitigations. The EU AI Act requires bias assessments for high-risk AI systems.",
              },
            ],
            keyConcepts: [
              {
                term: "Precision",
                definition:
                  "Of all positive predictions, the fraction that were actually correct. Low false positives.",
              },
              {
                term: "Recall",
                definition:
                  "Of all actual positives, the fraction the model correctly identified. Low false negatives.",
              },
              {
                term: "Overfitting",
                definition:
                  "Model memorizes training data rather than learning general patterns. Fails on new data.",
              },
              {
                term: "Confusion Matrix",
                definition:
                  "Table showing True Positives, False Positives, True Negatives, and False Negatives.",
              },
              {
                term: "AI Bias",
                definition:
                  "Systematic errors in AI predictions that unfairly disadvantage certain groups.",
              },
            ],
            externalResources: [
              {
                title: "Precision vs Recall - StatQuest",
                url: "https://www.youtube.com/watch?v=vP06aMoz4v8",
                type: "video",
                isFree: true,
                description:
                  "Clear, visual explanation of precision, recall, and F1 score.",
              },
              {
                title: "AI Fairness 360 - IBM",
                url: "https://aif360.mybluemix.net/",
                type: "tool",
                isFree: true,
                description:
                  "Open-source toolkit for detecting and mitigating bias in AI models.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-2-3",
            lessonId: "phase-3-module-2-lesson-3",
            questions: [
              {
                id: "q3-2-3-1",
                question:
                  "A malware detector catches 95% of malware but has many false alarms. Which metric is high?",
                options: [
                  "Precision",
                  "Recall",
                  "Accuracy",
                  "F1 Score",
                ],
                correctIndex: 1,
                explanation:
                  "High recall (95% of actual malware caught) but low precision (many false positives/alarms).",
              },
              {
                id: "q3-2-3-2",
                question:
                  "What is overfitting?",
                options: [
                  "The model is too simple",
                  "The model memorizes training data and performs poorly on new data",
                  "The model runs too slowly",
                  "The model has too many features",
                ],
                correctIndex: 1,
                explanation:
                  "Overfitting means the model learned training data noise rather than general patterns, failing to generalize.",
              },
              {
                id: "q3-2-3-3",
                question:
                  "A facial recognition system works well on light skin but poorly on dark skin. What type of bias is this?",
                options: [
                  "Measurement bias",
                  "Aggregation bias",
                  "Representation bias",
                  "Confirmation bias",
                ],
                correctIndex: 2,
                explanation:
                  "Representation bias occurs when certain groups are underrepresented in training data, leading to worse performance for those groups.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 3: ML PIPELINE BASICS ====================
    {
      id: "phase-3-module-3",
      slug: "ml-pipeline-basics",
      phaseId: "phase-3",
      title: "ML Pipeline Basics",
      description:
        "Understand the end-to-end ML workflow: data prep, feature engineering, training, evaluation, and deployment.",
      estimatedHours: 15,
      labExercise: {
        title: "End-to-End ML Pipeline Lab",
        objective:
          "Build a complete ML pipeline from data loading to model evaluation, documenting each step.",
        instructions: [
          "Choose a dataset from Kaggle (recommended: 'Credit Card Fraud Detection' for security relevance).",
          "Load and explore the data: check shape, data types, missing values, class distribution.",
          "Perform data preprocessing: handle missing values, normalize features, split into train/test.",
          "Engineer at least 2 new features (e.g., transaction amount ratios, time-based features).",
          "Train 2 different models (e.g., Logistic Regression and Random Forest).",
          "Evaluate both models using accuracy, precision, recall, F1, and a confusion matrix.",
          "Document the entire pipeline: what you did at each step and why.",
          "Write a final recommendation: which model would you deploy and why?",
        ],
        deliverable:
          "A Python notebook with the complete pipeline, metrics comparison, and written analysis.",
        estimatedMinutes: 90,
      },
      lessons: [
        {
          id: "phase-3-module-3-lesson-1",
          slug: "ml-lifecycle-overview",
          moduleId: "phase-3-module-3",
          title: "The ML Lifecycle",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "End-to-End ML Workflow",
                type: "text",
                body: "Building a production ML system involves much more than training a model. The complete lifecycle:\n\n**1. Problem Definition:** What business problem are we solving? What metric defines success?\n\n**2. Data Collection:** Gathering data from databases, APIs, logs, sensors, or third-party sources.\n\n**3. Data Preparation:** Cleaning, transforming, and formatting data for model consumption.\n\n**4. Feature Engineering:** Creating informative input variables from raw data.\n\n**5. Model Training:** Selecting an algorithm, training on data, tuning hyperparameters.\n\n**6. Model Evaluation:** Testing performance using held-out data and appropriate metrics.\n\n**7. Model Deployment:** Making the model available for production use (API, batch processing, edge).\n\n**8. Monitoring:** Tracking model performance over time, detecting drift, logging predictions.\n\n**9. Retraining:** Updating the model when performance degrades or new data is available.\n\nIn practice, ML teams spend 80% of their time on data preparation and only 20% on actual modeling.",
              },
              {
                heading: "MLOps -- ML Operations",
                type: "text",
                body: "**MLOps** applies DevOps principles to machine learning:\n\n- **Version control** for code, data, and models\n- **CI/CD pipelines** that automatically test and deploy models\n- **Experiment tracking** to compare different approaches\n- **Model registry** to manage model versions and staging\n- **Monitoring dashboards** to track production performance\n- **Automated retraining** when performance dips\n\n**Key MLOps tools:**\n- **MLflow (Databricks):** Experiment tracking, model registry, deployment\n- **Kubeflow:** ML pipelines on Kubernetes\n- **Weights & Biases:** Experiment tracking and visualization\n- **DVC:** Data version control",
              },
              {
                heading: "Data Preparation Deep Dive",
                type: "text",
                body: "Data preparation is where most security-relevant decisions happen:\n\n**Data cleaning:**\n- Handle missing values (remove, impute, or flag)\n- Remove duplicates\n- Fix inconsistent formats (dates, currencies, units)\n- Validate data ranges (age cannot be negative)\n\n**Data transformation:**\n- **Normalization:** Scale features to 0-1 range\n- **Standardization:** Transform to mean=0, std=1\n- **Encoding:** Convert categories to numbers (one-hot encoding, label encoding)\n- **Text preprocessing:** Tokenization, lowercasing, stop word removal\n\n**Data splitting:** Training (70-80%), validation (10-15%), test (10-15%). Always split before any transformation to prevent data leakage.",
              },
              {
                heading: "Data Leakage -- A Critical Risk",
                type: "warning",
                body: "**Data leakage** occurs when information from outside the training set influences the model, leading to overly optimistic performance that does not hold in production.\n\n**Common causes:**\n- Using test data during feature scaling or encoding\n- Including features derived from the target variable\n- Training data containing future information not available at prediction time\n- Duplicate records appearing in both train and test sets\n\n**Example:** A fraud detection model that includes 'was_fraud_investigation_opened' as a feature -- this is determined AFTER the transaction, so it would not be available at prediction time.\n\nData leakage creates models that appear excellent in testing but fail in production. It is one of the most common and dangerous ML mistakes.",
              },
            ],
            keyConcepts: [
              {
                term: "ML Lifecycle",
                definition:
                  "Complete workflow from problem definition through deployment and monitoring.",
              },
              {
                term: "MLOps",
                definition:
                  "Practices applying DevOps principles to ML: versioning, CI/CD, monitoring, and automated retraining.",
              },
              {
                term: "Data Leakage",
                definition:
                  "When information from outside the training set inappropriately influences the model, causing false performance.",
              },
              {
                term: "Feature Engineering",
                definition:
                  "Creating informative input variables from raw data to improve model performance.",
              },
              {
                term: "MLflow",
                definition:
                  "Databricks open-source platform for experiment tracking, model registry, and deployment.",
              },
            ],
            externalResources: [
              {
                title: "MLOps Explained - Databricks",
                url: "https://www.databricks.com/glossary/mlops",
                type: "article",
                isFree: true,
                description:
                  "Databricks' guide to MLOps concepts and practices.",
              },
              {
                title: "MLflow Documentation",
                url: "https://mlflow.org/docs/latest/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official docs for MLflow, the most popular open-source MLOps platform.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-3-1",
            lessonId: "phase-3-module-3-lesson-1",
            questions: [
              {
                id: "q3-3-1-1",
                question:
                  "Which phase of the ML lifecycle do teams typically spend the most time on?",
                options: [
                  "Model training",
                  "Data preparation",
                  "Model deployment",
                  "Problem definition",
                ],
                correctIndex: 1,
                explanation:
                  "Data preparation typically takes 80% of the time in an ML project. Clean, quality data is the foundation.",
              },
              {
                id: "q3-3-1-2",
                question:
                  "What is data leakage?",
                options: [
                  "Data being stolen by hackers",
                  "Information from outside the training set improperly influencing the model",
                  "Data being lost due to hardware failure",
                  "Data flowing between tables in a database",
                ],
                correctIndex: 1,
                explanation:
                  "Data leakage means information that should not be available at prediction time leaks into training, giving falsely optimistic results.",
              },
              {
                id: "q3-3-1-3",
                question:
                  "What does MLflow provide?",
                options: [
                  "Cloud computing resources",
                  "Experiment tracking, model registry, and deployment tools",
                  "Data storage only",
                  "Network security monitoring",
                ],
                correctIndex: 1,
                explanation:
                  "MLflow is an open-source MLOps platform by Databricks for tracking experiments, managing model versions, and deployment.",
              },
            ],
          },
        },
        {
          id: "phase-3-module-3-lesson-2",
          slug: "feature-engineering-and-training",
          moduleId: "phase-3-module-3",
          title: "Feature Engineering & Model Training",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "What Is Feature Engineering?",
                type: "text",
                body: "**Features** are the input variables a model uses to make predictions. Feature engineering transforms raw data into features that better represent the underlying problem.\n\n**Example: Credit card fraud detection**\nRaw data: transaction amount, timestamp, merchant name\n\nEngineered features:\n- Average transaction amount for this user (past 30 days)\n- Number of transactions in the last hour\n- Distance from user's typical location\n- Is this a new merchant for this user?\n- Time since last transaction\n- Ratio of this amount to user's average\n\nGood features capture the signal that helps the model distinguish between legitimate and fraudulent transactions.",
              },
              {
                heading: "Feature Engineering Techniques",
                type: "text",
                body: "**Numerical features:**\n- Binning: Group continuous values into ranges (age → age_group)\n- Log transform: Reduce skewness in data (income, transaction amounts)\n- Polynomial features: Create interaction terms (x1 * x2, x1²)\n\n**Categorical features:**\n- One-hot encoding: Create binary columns for each category\n- Label encoding: Assign numbers to categories (low=0, medium=1, high=2)\n- Target encoding: Replace categories with mean of target variable (use carefully -- leakage risk)\n\n**Time-based features:**\n- Hour of day, day of week, month\n- Time since last event\n- Rolling averages and counts\n\n**Text features:**\n- Bag of words, TF-IDF\n- Word embeddings (Word2Vec, BERT embeddings)\n- Sentiment scores",
              },
              {
                heading: "Model Training Process",
                type: "text",
                body: "**1. Choose an algorithm:**\n- Logistic Regression: Simple, interpretable, good baseline\n- Decision Trees: Easy to understand, handles non-linear data\n- Random Forest: Ensemble of trees, robust and accurate\n- Gradient Boosting (XGBoost, LightGBM): State-of-the-art for tabular data\n- Neural Networks: Best for images, text, and complex patterns\n\n**2. Set hyperparameters:**\n- Learning rate, number of trees, max depth, regularization\n- These control the model's complexity and learning behavior\n\n**3. Train the model:**\n- Feed training data through the algorithm\n- The algorithm adjusts internal parameters to minimize error\n\n**4. Tune hyperparameters:**\n- Grid search: Try all combinations\n- Random search: Try random combinations (faster)\n- Bayesian optimization: Intelligently choose next parameters to try",
              },
              {
                heading: "Feature Stores",
                type: "note",
                body: "A **feature store** is a centralized repository for storing, sharing, and serving features across an organization.\n\n**Why feature stores matter:**\n- Teams reuse features instead of recreating them\n- Consistent feature computation between training and serving\n- Point-in-time correct features prevent data leakage\n- Access controls on features (security relevance!)\n\n**Databricks Feature Store** is integrated with Unity Catalog, providing:\n- Feature tables with governance and access control\n- Automatic feature lineage tracking\n- Online and offline serving\n- Point-in-time lookups for training data\n\nAs an AI security professional, you will audit feature store access controls to ensure sensitive features are properly protected.",
              },
            ],
            keyConcepts: [
              {
                term: "Feature",
                definition:
                  "An input variable used by a model to make predictions.",
              },
              {
                term: "One-Hot Encoding",
                definition:
                  "Converting categorical variables into binary columns (one per category).",
              },
              {
                term: "Hyperparameter",
                definition:
                  "A configuration set before training that controls model behavior (learning rate, tree depth).",
              },
              {
                term: "Feature Store",
                definition:
                  "Centralized repository for storing, sharing, and serving ML features with governance.",
              },
              {
                term: "Gradient Boosting",
                definition:
                  "Ensemble technique building trees sequentially, each correcting errors of the previous one.",
              },
            ],
            externalResources: [
              {
                title: "Feature Engineering Techniques - Kaggle",
                url: "https://www.kaggle.com/learn/feature-engineering",
                type: "course",
                isFree: true,
                description:
                  "Hands-on Kaggle course on feature engineering with real datasets.",
              },
              {
                title: "Databricks Feature Store",
                url: "https://docs.databricks.com/en/machine-learning/feature-store/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official Databricks Feature Store documentation.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-3-2",
            lessonId: "phase-3-module-3-lesson-2",
            questions: [
              {
                id: "q3-3-2-1",
                question:
                  "What is feature engineering?",
                options: [
                  "Building hardware for ML",
                  "Transforming raw data into informative input variables for a model",
                  "Optimizing neural network architecture",
                  "Deploying models to production",
                ],
                correctIndex: 1,
                explanation:
                  "Feature engineering creates input variables that help models better understand the underlying patterns in data.",
              },
              {
                id: "q3-3-2-2",
                question:
                  "Which algorithm is generally considered state-of-the-art for tabular/structured data?",
                options: [
                  "Logistic Regression",
                  "Neural Networks",
                  "Gradient Boosting (XGBoost, LightGBM)",
                  "K-Nearest Neighbors",
                ],
                correctIndex: 2,
                explanation:
                  "Gradient boosting algorithms like XGBoost and LightGBM consistently win competitions on tabular data.",
              },
              {
                id: "q3-3-2-3",
                question:
                  "Why are feature stores important for security?",
                options: [
                  "They make models faster",
                  "They provide access controls, lineage tracking, and governance for ML features",
                  "They store passwords securely",
                  "They are not related to security",
                ],
                correctIndex: 1,
                explanation:
                  "Feature stores provide governance: who can access which features, how features were computed, and lineage tracking.",
              },
            ],
          },
        },
        {
          id: "phase-3-module-3-lesson-3",
          slug: "model-deployment-and-monitoring",
          moduleId: "phase-3-module-3",
          title: "Model Deployment & Monitoring",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Deployment Patterns",
                type: "text",
                body: "Once a model is trained and evaluated, it needs to serve predictions in production:\n\n**Real-time serving (Online):**\nModel runs as an API endpoint. Receives a request, returns a prediction in milliseconds.\nUse case: Fraud detection during a credit card transaction.\n\n**Batch inference (Offline):**\nModel processes large datasets on a schedule (hourly, daily).\nUse case: Scoring all customers for churn risk overnight.\n\n**Edge deployment:**\nModel runs on the device itself (phone, IoT sensor, camera).\nUse case: On-device image classification without internet.\n\n**Streaming:**\nModel processes data in real-time as it arrives (Kafka, Spark Streaming).\nUse case: Anomaly detection on network traffic streams.",
              },
              {
                heading: "Model Serving Infrastructure",
                type: "text",
                body: "**Containerization:** Models are packaged in Docker containers with all dependencies. This ensures consistent behavior across environments.\n\n**API Gateway:** Handles authentication, rate limiting, and routing for model endpoints.\n\n**Load Balancing:** Distributes inference requests across multiple model replicas.\n\n**Model Registry:** Tracks model versions, stages (Staging, Production, Archived), and metadata.\n\n**Databricks Model Serving:** Managed infrastructure for deploying MLflow models as REST APIs. Handles scaling, versioning, and A/B testing automatically. Integrates with Unity Catalog for access control.",
              },
              {
                heading: "Model Monitoring",
                type: "text",
                body: "Models degrade over time as the real world changes. Monitoring detects problems:\n\n**Data Drift:** Input data distribution changes from what the model was trained on. Example: Customer behavior shifts during a pandemic.\n\n**Concept Drift:** The relationship between inputs and outputs changes. Example: New fraud techniques emerge that the model has not seen.\n\n**Performance Monitoring:** Track accuracy, latency, throughput, and error rates in production.\n\n**Alerting:** Set thresholds for metrics and trigger alerts when breached.\n\n**Monitoring tools:** Databricks Lakehouse Monitoring, Evidently AI, Fiddler, WhyLabs.\n\n**When to retrain:** When drift is detected, performance drops below threshold, or new labeled data becomes available.",
              },
              {
                heading: "Security Considerations for Deployment",
                type: "warning",
                body: "Model deployment introduces significant security concerns:\n\n**API Security:**\n- Model endpoints need authentication (API keys, OAuth tokens)\n- Rate limiting prevents model extraction attacks\n- Input validation rejects malformed or adversarial inputs\n\n**Model Artifacts:**\n- Model files contain learned weights -- treat as intellectual property\n- Store in encrypted storage with access controls\n- Sign model artifacts to prevent tampering\n\n**Inference Data:**\n- Prediction inputs and outputs may contain sensitive data\n- Log predictions for audit but consider privacy implications\n- Encrypt logs at rest and in transit\n\n**Supply Chain:**\n- Verify integrity of model dependencies (libraries, frameworks)\n- Scan container images for vulnerabilities\n- Use minimal base images (distroless, Alpine) to reduce attack surface",
              },
            ],
            keyConcepts: [
              {
                term: "Real-time Serving",
                definition:
                  "Deploying a model as an API that returns predictions on individual requests in milliseconds.",
              },
              {
                term: "Batch Inference",
                definition:
                  "Processing large datasets through a model on a schedule (hourly, daily).",
              },
              {
                term: "Data Drift",
                definition:
                  "Change in input data distribution from what the model was trained on.",
              },
              {
                term: "Concept Drift",
                definition:
                  "Change in the relationship between inputs and outputs over time.",
              },
              {
                term: "Model Registry",
                definition:
                  "System tracking model versions, stages, metadata, and lineage for governance.",
              },
            ],
            externalResources: [
              {
                title: "ML System Design - Stanford CS 329S",
                url: "https://stanford-cs329s.github.io/",
                type: "course",
                isFree: true,
                description:
                  "Stanford course on ML systems design covering deployment and monitoring.",
              },
              {
                title: "Databricks Model Serving",
                url: "https://docs.databricks.com/en/machine-learning/model-serving/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official docs for deploying models as endpoints on Databricks.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-3-3",
            lessonId: "phase-3-module-3-lesson-3",
            questions: [
              {
                id: "q3-3-3-1",
                question:
                  "A fraud detection model that scores transactions in real-time uses which deployment pattern?",
                options: [
                  "Batch inference",
                  "Real-time serving",
                  "Edge deployment",
                  "Manual scoring",
                ],
                correctIndex: 1,
                explanation:
                  "Real-time serving provides instant predictions via an API, essential for time-sensitive decisions like fraud detection.",
              },
              {
                id: "q3-3-3-2",
                question:
                  "Customer behavior changes after a major world event, causing model accuracy to drop. What is this called?",
                options: [
                  "Overfitting",
                  "Data drift",
                  "Data leakage",
                  "Underfitting",
                ],
                correctIndex: 1,
                explanation:
                  "Data drift occurs when the distribution of real-world data changes from what the model was trained on.",
              },
              {
                id: "q3-3-3-3",
                question:
                  "Why should model API endpoints have rate limiting?",
                options: [
                  "To save electricity",
                  "To prevent model extraction attacks where an attacker queries the model thousands of times",
                  "Rate limiting is not needed for ML",
                  "To make the model more accurate",
                ],
                correctIndex: 1,
                explanation:
                  "Rate limiting prevents attackers from systematically querying a model to extract its behavior or steal its functionality.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 4: DATA GOVERNANCE ====================
    {
      id: "phase-3-module-4",
      slug: "data-governance-concepts",
      phaseId: "phase-3",
      title: "Data Governance Concepts",
      description:
        "Learn data quality, data lineage, metadata management, compliance requirements, and governance frameworks.",
      estimatedHours: 15,
      labExercise: {
        title: "Data Governance Assessment Lab",
        objective:
          "Create a data governance plan for a fictional AI startup handling customer data.",
        instructions: [
          "Scenario: An AI startup collects user behavior data to train recommendation models. They serve users in the US and EU.",
          "Create a data inventory: list all data types collected, their sensitivity level, and where they are stored.",
          "Define a data classification scheme: Public, Internal, Confidential, Restricted.",
          "Write data handling policies for each classification level (who can access, how it must be stored, retention period).",
          "Identify which regulations apply (GDPR, CCPA) and list 5 specific requirements they must meet.",
          "Design a data lineage diagram showing how data flows from collection through processing to model training.",
          "Define roles and responsibilities: Data Owner, Data Steward, Data Consumer.",
        ],
        deliverable:
          "A data governance plan document with inventory, classification scheme, policies, compliance requirements, and lineage diagram.",
        estimatedMinutes: 75,
      },
      lessons: [
        {
          id: "phase-3-module-4-lesson-1",
          slug: "data-governance-fundamentals",
          moduleId: "phase-3-module-4",
          title: "Data Governance Fundamentals",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "What Is Data Governance?",
                type: "text",
                body: "**Data governance** is the framework of policies, processes, roles, and standards that ensure data is managed as a valuable organizational asset. It answers questions like:\n\n- Who owns this data?\n- Who is allowed to access it?\n- How accurate and complete is it?\n- Where did it come from and how was it transformed?\n- How long should we keep it?\n- Are we compliant with regulations?\n\nData governance is not optional -- it is required by law (GDPR, HIPAA), expected by customers, and essential for trustworthy AI. Without governance, AI models can be trained on incorrect, biased, or illegally obtained data.",
              },
              {
                heading: "Core Pillars of Data Governance",
                type: "text",
                body: "**Data Quality:** Is the data accurate, complete, consistent, and timely?\n- Accuracy: Does it reflect reality?\n- Completeness: Are there missing values?\n- Consistency: Does the same data match across systems?\n- Timeliness: Is it current enough for its purpose?\n\n**Data Security:** Is the data protected from unauthorized access?\n- Encryption at rest and in transit\n- Access controls (RBAC)\n- Audit logging\n\n**Data Privacy:** Is personal data handled according to regulations and user consent?\n- Data minimization: collect only what you need\n- Purpose limitation: use data only for stated purposes\n- Consent management: track what users agreed to\n\n**Data Lifecycle Management:** How is data managed from creation to deletion?\n- Retention policies: how long data is kept\n- Archival: moving old data to cheaper storage\n- Deletion: securely removing data when no longer needed",
              },
              {
                heading: "Roles in Data Governance",
                type: "text",
                body: "**Data Owner:** Business stakeholder responsible for data decisions. Determines who can access the data and how it should be used. Usually a department head.\n\n**Data Steward:** Ensures data quality and compliance on a day-to-day basis. Implements the data owner's policies. Often a technical role.\n\n**Data Custodian:** IT/engineering team managing the technical infrastructure. Implements storage, security, and backup.\n\n**Data Consumer:** Anyone who uses data -- analysts, data scientists, ML engineers. Must follow governance policies.\n\n**Data Protection Officer (DPO):** Required by GDPR for organizations processing personal data at scale. Oversees compliance with privacy regulations.",
              },
              {
                heading: "Why AI Makes Governance Harder",
                type: "note",
                body: "AI creates unique governance challenges:\n\n- **Training data origin:** Where did each data point come from? Was consent given for AI use?\n- **Data mixing:** Training combines data from many sources, complicating lineage\n- **Derived data:** Model predictions create new data that also needs governance\n- **Model as data:** Model weights encode information from training data -- is the model itself regulated?\n- **Right to be forgotten:** If a user requests deletion under GDPR, do you need to retrain the model?\n\nThese questions are at the forefront of AI regulation (EU AI Act, NIST AI RMF). Your ability to answer them is what makes you valuable as an AI security consultant.",
              },
            ],
            keyConcepts: [
              {
                term: "Data Governance",
                definition:
                  "Framework of policies, processes, and roles ensuring data is managed as a valuable, compliant asset.",
              },
              {
                term: "Data Quality",
                definition:
                  "The degree to which data is accurate, complete, consistent, and timely for its intended use.",
              },
              {
                term: "Data Owner",
                definition:
                  "Business stakeholder responsible for decisions about data access, usage, and policies.",
              },
              {
                term: "Data Steward",
                definition:
                  "Technical role ensuring data quality and compliance with governance policies on a daily basis.",
              },
              {
                term: "Data Minimization",
                definition:
                  "GDPR principle: collect and process only the minimum personal data necessary for the stated purpose.",
              },
            ],
            externalResources: [
              {
                title: "Data Governance Explained - Databricks",
                url: "https://www.databricks.com/glossary/data-governance",
                type: "article",
                isFree: true,
                description:
                  "Databricks' overview of data governance concepts and best practices.",
              },
              {
                title: "DAMA-DMBOK2 Framework",
                url: "https://www.dama.org/cpages/body-of-knowledge",
                type: "documentation",
                isFree: false,
                description:
                  "The industry-standard body of knowledge for data management and governance.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-4-1",
            lessonId: "phase-3-module-4-lesson-1",
            questions: [
              {
                id: "q3-4-1-1",
                question:
                  "Who is responsible for deciding who can access a dataset?",
                options: [
                  "Data Custodian",
                  "Data Consumer",
                  "Data Owner",
                  "Data Engineer",
                ],
                correctIndex: 2,
                explanation:
                  "The Data Owner is the business stakeholder who makes decisions about data access and usage policies.",
              },
              {
                id: "q3-4-1-2",
                question:
                  "What does data minimization mean?",
                options: [
                  "Compressing data to save storage",
                  "Collecting only the minimum personal data necessary for the stated purpose",
                  "Deleting all old data",
                  "Using the smallest database possible",
                ],
                correctIndex: 1,
                explanation:
                  "Data minimization is a GDPR principle: only collect and process the minimum personal data needed for the stated purpose.",
              },
              {
                id: "q3-4-1-3",
                question:
                  "Why does AI make data governance harder?",
                options: [
                  "AI does not use data",
                  "Training combines data from many sources, model weights encode training data, and right-to-be-forgotten is complex",
                  "AI systems are too fast for governance",
                  "Data governance does not apply to AI",
                ],
                correctIndex: 1,
                explanation:
                  "AI complicates governance through data mixing, derived data, model-as-data questions, and erasure requests.",
              },
            ],
          },
        },
        {
          id: "phase-3-module-4-lesson-2",
          slug: "data-lineage-and-catalogs",
          moduleId: "phase-3-module-4",
          title: "Data Lineage & Catalogs",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "What Is Data Lineage?",
                type: "text",
                body: "**Data lineage** tracks the complete journey of data from its origin through every transformation to its final destination.\n\nFor a given dataset, lineage answers:\n- **Where did this data come from?** (source systems, APIs, uploads)\n- **What transformations were applied?** (joins, filters, aggregations)\n- **Who accessed or modified it?** (users, jobs, pipelines)\n- **Where does it go next?** (models, dashboards, exports)\n\n**Lineage is a directed acyclic graph (DAG):**\nSource A → Transform 1 → Table X → Transform 2 → Feature Y → Model Z\n\nWith lineage, if a data quality issue is discovered in Table X, you can trace backward to find the root cause and forward to find everything affected.",
              },
              {
                heading: "Why Lineage Matters for AI Security",
                type: "text",
                body: "Data lineage is critical for AI security because:\n\n**Data poisoning detection:** If a model starts producing bad results, lineage lets you trace which training data was used and investigate whether it was tampered with.\n\n**Compliance audits:** Regulators require you to demonstrate where personal data goes. Lineage provides this evidence.\n\n**Impact analysis:** Before changing a data pipeline, lineage shows which downstream models and reports will be affected.\n\n**Incident response:** During a breach, lineage reveals which data was exposed and which systems were affected.\n\n**Root cause analysis:** When a model degrades, trace backward through lineage to find where data quality broke down.",
              },
              {
                heading: "Data Catalogs",
                type: "text",
                body: "A **data catalog** is a searchable inventory of all data assets in an organization. Think of it as a library catalog for data.\n\n**What a catalog contains:**\n- Dataset name, description, and schema\n- Owner and steward\n- Classification (sensitivity level)\n- Tags and categories\n- Lineage information\n- Quality metrics\n- Usage statistics (who queries it, how often)\n- Related assets (upstream sources, downstream consumers)\n\n**Popular data catalog tools:**\n- **Unity Catalog (Databricks):** Unified governance for data, ML models, and AI assets\n- **Apache Atlas:** Open-source metadata management\n- **Collibra:** Enterprise data intelligence\n- **Alation:** Data catalog with built-in collaboration",
              },
              {
                heading: "Unity Catalog -- Databricks Governance",
                type: "note",
                body: "**Unity Catalog** is Databricks' unified governance solution. It is central to AI security on the Databricks platform:\n\n**Key capabilities:**\n- **Fine-grained access control:** Row-level and column-level security on tables\n- **Automated lineage:** Tracks data flow across notebooks, jobs, and ML pipelines automatically\n- **Data classification:** Automatic tagging of PII and sensitive data\n- **Audit logging:** Records every data access for compliance\n- **AI asset governance:** Manages not just data, but models, features, and functions\n- **Cross-workspace:** Governance policies apply across all workspaces in the account\n\nUnity Catalog is the single most important tool you will learn for Databricks AI security. Phase 4 covers it in depth.",
              },
            ],
            keyConcepts: [
              {
                term: "Data Lineage",
                definition:
                  "Tracking the complete journey of data from origin through every transformation to final use.",
              },
              {
                term: "Data Catalog",
                definition:
                  "Searchable inventory of all data assets with metadata, ownership, and classification.",
              },
              {
                term: "Unity Catalog",
                definition:
                  "Databricks' unified governance solution for data, ML models, and AI assets.",
              },
              {
                term: "Impact Analysis",
                definition:
                  "Using lineage to understand what downstream systems are affected by changes to upstream data.",
              },
              {
                term: "PII",
                definition:
                  "Personally Identifiable Information -- data that can identify an individual (name, SSN, email).",
              },
            ],
            externalResources: [
              {
                title: "Unity Catalog Documentation",
                url: "https://docs.databricks.com/en/data-governance/unity-catalog/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Complete documentation for Databricks Unity Catalog.",
              },
              {
                title: "Data Lineage Explained",
                url: "https://www.youtube.com/watch?v=wPgJsBfYgCU",
                type: "video",
                isFree: true,
                description:
                  "Visual explanation of data lineage concepts and tools.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-4-2",
            lessonId: "phase-3-module-4-lesson-2",
            questions: [
              {
                id: "q3-4-2-1",
                question:
                  "Data lineage helps with AI security by:",
                options: [
                  "Making models faster",
                  "Tracing data poisoning, supporting compliance audits, and enabling incident response",
                  "Encrypting all data automatically",
                  "Replacing the need for access controls",
                ],
                correctIndex: 1,
                explanation:
                  "Lineage enables tracing poisoned data, proving compliance to regulators, and understanding breach impact.",
              },
              {
                id: "q3-4-2-2",
                question:
                  "What is a data catalog?",
                options: [
                  "A database for storing raw data",
                  "A searchable inventory of all data assets with metadata, ownership, and classification",
                  "A backup of all databases",
                  "A log of all SQL queries",
                ],
                correctIndex: 1,
                explanation:
                  "A data catalog is a metadata repository that helps users discover, understand, and govern data assets.",
              },
              {
                id: "q3-4-2-3",
                question:
                  "What makes Unity Catalog unique compared to other data catalogs?",
                options: [
                  "It only works with SQL",
                  "It provides unified governance for data, ML models, features, and AI assets",
                  "It is the only open-source catalog",
                  "It only tracks data lineage",
                ],
                correctIndex: 1,
                explanation:
                  "Unity Catalog governs not just data tables, but ML models, feature tables, and AI functions -- unified AI governance.",
              },
            ],
          },
        },
        {
          id: "phase-3-module-4-lesson-3",
          slug: "privacy-and-compliance-for-ai",
          moduleId: "phase-3-module-4",
          title: "Privacy & Compliance for AI",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "Data Privacy Regulations",
                type: "text",
                body: "Privacy regulations directly impact how AI systems collect, process, and store personal data:\n\n**GDPR (EU General Data Protection Regulation):**\n- Applies to any organization processing EU citizens' data\n- Requires lawful basis for processing (consent, legitimate interest, contract, etc.)\n- Grants data subject rights: access, rectification, erasure, portability\n- Data Protection Impact Assessments (DPIAs) required for high-risk processing\n- 72-hour breach notification requirement\n- Fines up to 4% of global annual revenue or 20 million euros\n\n**CCPA/CPRA (California):**\n- Right to know what data is collected\n- Right to delete personal data\n- Right to opt out of data selling\n- Applies to businesses meeting certain thresholds\n\n**HIPAA (US Healthcare):**\n- Protects health information (PHI)\n- Requires encryption, access controls, and audit trails\n- Business Associate Agreements for third parties",
              },
              {
                heading: "AI-Specific Regulations",
                type: "text",
                body: "**EU AI Act (2024):**\nThe world's first comprehensive AI regulation. Classifies AI systems by risk:\n\n- **Unacceptable risk:** Banned (social scoring, real-time biometric surveillance)\n- **High risk:** Strict requirements (healthcare, law enforcement, hiring, credit scoring)\n  - Mandatory risk assessments\n  - Data governance requirements\n  - Transparency and explainability\n  - Human oversight\n  - Accuracy and robustness testing\n- **Limited risk:** Transparency obligations (chatbots must identify as AI)\n- **Minimal risk:** No special requirements (spam filters, game AI)\n\n**NIST AI Risk Management Framework (AI RMF):**\nVoluntary US framework with four functions: Govern, Map, Measure, Manage.\n\n**ISO 42001:** International standard for AI management systems.\n\nThese regulations create massive demand for AI security professionals who can help organizations comply.",
              },
              {
                heading: "Privacy-Enhancing Technologies",
                type: "text",
                body: "Technologies that enable data use while protecting privacy:\n\n**Anonymization:** Irreversibly removing identifying information. Once anonymized, GDPR no longer applies. But true anonymization is extremely hard -- most 'anonymized' datasets can be re-identified.\n\n**Pseudonymization:** Replacing identifiers with pseudonyms. Data can be re-identified with a key. GDPR still applies but with relaxed requirements.\n\n**Differential Privacy:** Adding calibrated noise to data or query results. Provides mathematical guarantees that individual records cannot be identified. Used by Apple, Google, and the US Census.\n\n**Federated Learning:** Training models on decentralized data without collecting it centrally. Each device trains locally and only shares model updates, not raw data.\n\n**Homomorphic Encryption:** Computing on encrypted data without decrypting it. The computation results are encrypted and only the data owner can decrypt them. Currently slow but rapidly improving.",
              },
              {
                heading: "Practical Compliance Checklist for AI",
                type: "example",
                body: "When auditing an AI system for compliance, check:\n\n**Data collection:**\n- Is there a lawful basis for collecting this data?\n- Has informed consent been obtained where required?\n- Is data collection minimized to what is necessary?\n\n**Data processing:**\n- Are access controls in place (who can see what)?\n- Is PII detected and appropriately protected?\n- Is data lineage tracked end-to-end?\n\n**Model training:**\n- Was training data vetted for bias?\n- Were privacy-enhancing techniques considered?\n- Is there documentation of training data sources?\n\n**Model deployment:**\n- Are model outputs monitored for fairness?\n- Is there a process for human review of high-stakes decisions?\n- Are data subject rights (erasure, access) supported?\n\n**Documentation:**\n- Risk assessments, DPIAs, model cards\n- Incident response procedures\n- Regular compliance audits scheduled",
              },
              {
                heading: "Your Competitive Advantage",
                type: "note",
                body: "The intersection of AI and compliance is where the talent gap is widest. Most security professionals do not understand AI. Most AI engineers do not understand regulations. You are learning both.\n\nAs an AI security consultant, your ability to:\n- Conduct AI risk assessments per the EU AI Act\n- Implement data governance using tools like Unity Catalog\n- Design privacy-preserving ML pipelines\n- Write compliance documentation\n\n...makes you extremely valuable. This is exactly the kind of work companies desperately need and cannot find enough people to do.",
              },
            ],
            keyConcepts: [
              {
                term: "GDPR",
                definition:
                  "EU regulation protecting personal data with strict requirements for collection, processing, and storage.",
              },
              {
                term: "EU AI Act",
                definition:
                  "World's first comprehensive AI regulation, classifying AI systems by risk level with corresponding requirements.",
              },
              {
                term: "Differential Privacy",
                definition:
                  "Technique adding calibrated noise to protect individual records while preserving overall data utility.",
              },
              {
                term: "Federated Learning",
                definition:
                  "Training ML models on decentralized data without collecting it centrally.",
              },
              {
                term: "DPIA",
                definition:
                  "Data Protection Impact Assessment -- required by GDPR before high-risk processing of personal data.",
              },
            ],
            externalResources: [
              {
                title: "EU AI Act Summary",
                url: "https://artificialintelligenceact.eu/",
                type: "documentation",
                isFree: true,
                description:
                  "Comprehensive summary of the EU AI Act with practical guidance.",
              },
              {
                title: "NIST AI Risk Management Framework",
                url: "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
                type: "documentation",
                isFree: true,
                description:
                  "NIST's framework for managing AI risks.",
              },
              {
                title: "Differential Privacy Explained - Simply Explained",
                url: "https://www.youtube.com/watch?v=gI0wk1CXlsQ",
                type: "video",
                isFree: true,
                description:
                  "Accessible explanation of differential privacy concepts.",
              },
            ],
          },
          quiz: {
            id: "quiz-3-4-3",
            lessonId: "phase-3-module-4-lesson-3",
            questions: [
              {
                id: "q3-4-3-1",
                question:
                  "Under the EU AI Act, which category of AI is banned?",
                options: [
                  "Minimal risk",
                  "High risk",
                  "Unacceptable risk",
                  "Limited risk",
                ],
                correctIndex: 2,
                explanation:
                  "Unacceptable risk AI (like social scoring and real-time biometric surveillance) is banned under the EU AI Act.",
              },
              {
                id: "q3-4-3-2",
                question:
                  "What is federated learning?",
                options: [
                  "Training one large model on a central server",
                  "Training models on decentralized data without collecting it centrally",
                  "A type of reinforcement learning",
                  "Learning from federated databases only",
                ],
                correctIndex: 1,
                explanation:
                  "Federated learning trains on local data and only shares model updates -- the raw data never leaves the device.",
              },
              {
                id: "q3-4-3-3",
                question:
                  "A user requests deletion of their personal data under GDPR. What AI-specific challenge does this create?",
                options: [
                  "No challenge -- just delete the database row",
                  "The model may have learned from that data, raising questions about whether retraining is needed",
                  "GDPR does not apply to AI",
                  "The user cannot request deletion of AI data",
                ],
                correctIndex: 1,
                explanation:
                  "Model weights encode information from training data. Deleting the source data may not remove its influence from the model, creating complex right-to-erasure challenges.",
              },
            ],
          },
        },
      ],
    },
  ],
};
