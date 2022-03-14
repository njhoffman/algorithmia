How would you manage Web Services API versioning?
>URL Versioning or Route Versioning: This solution uses URI routing to point to a specific version of the API.
>Versioning using a custom header: REST APIs are versioned by providing custom headers with the version number included as an attribute.
>Query String Parameter: Considered to be the worst method, the version number is included as a query parameter.

How would you find the most expensive queries in an application?
>Expensive queries are database queries that execute very slowly or utilize large amounts of CPU or memory resources.
>  These queries are the most common cause of performance issues in an application.
>SQL Activity Monitor is an easy and rich UI tool available in the SQL Server Management Studio.
>  You can also use SQL Dynamic Management View (DMV) to view the most expensive queries.

What is CAP Theorem?
>CAP stands for the attributes of Consistency, Availability, and Partition Tolerance.
>The CAP Theorem is a concept according to which, a distributed database system can have only two of the three mentioned attributes.
>It is useful to determine the choice of data manipulation tools used in Big Data, based on each unique use-case.
>CAP Theorem is like the old joke about software projects: you can have it on TIME, in BUDGET, or CORRECT. Pick any two.

When would you apply asynchronous communication between two systems?
>In asynchronous communications, the client sends a request to the server (typically requiring lengthy processing), while receiving a delivery acknowledgment immediately.
>  After the client receives the acknowledgment, it carries on with other tasks and will be notified eventually when the server finishes processing the request.
>  The main benefit of asynchronous communications is improved performance.
>Asynchronous communications can be applied in situations where the response is not required immediately, and the current process can continue without the response.
>Real-world examples can include email, Slack, and other messaging platforms.

In what situation would you choose RDBMS and where would you choose NoSQL?
>An RDBMS is used when you need ACID (Atomicity, Consistency, Isolation, Durability) compliance to reduce anomalies and protect data integrity and when the data is structured and unchanging.
>On the other hand, NoSQL is recommended for high volume environments, cloud computing & storage, and when using unstructured data. Examples of NoSQL databases are MongoDB, Cassandra, HBase, and CouchDB.

What is an MVC framework?
>A Model-View-Controller is a software design pattern that separates an application into three logical interconnected components – the model, the view, and the controller.
>It is used to organize the code into simple organized components. MVC helps in letting your code interact with another developerʼs code, based on their functions.

Which sorting algorithm to use and when?
>Quick Sort: is one of the most efficient sorting algorithms.
>  It is based on the splitting of an array or list into smaller ones and swapping values based on the comparison with the ‘pivot’ element selected.
>  It is more effective for data that can fit in memory. Otherwise merge sort is preferred.
>Bubble Sort: The simplest but most inefficient sorting algorithm, it repeatedly cycles through a list, compares adjacent values, and swaps them if they are in the wrong order.
>  It is mostly used when array is small or if large data which is nearly sorted.
>Selection Sort: It is a fast and simple comparison-based sorting algorithm.
>  It sorts by finding the minimum element repeatedly in an array.
>  It is mostly used when an array is small as its time complexity makes it inefficient for larger arrays.
>Merge Sort: One of the most efficient algorithms, it uses the principle of divide and conquer.
>  It iteratively breaks down lists into sub-lists consisting of single elements and then merges these elements as per the requirements.
>  Widely used in case of linked list or where the known data is similar.

What are the qualities any good backend developer must possess?
>In-depth knowledge of server programming languages like Python, Ruby, Java, Perl
>Great acquaintance with NoSQL and RDBMS
>Good understanding of front-end technologies (easy to work with frontend developers)
>Basic understanding of cloud deployments
>Ability to develop business logic within any app
>Ability to easily create functional APIs
>Design of service architecture
>Ability to optimize web applications

What does REST stand for?
>REST stands for REpresentational State Transfer.
>REST is web standards based architecture and uses HTTP Protocol for data communication.
>It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods.
>In REST architecture, a REST Server simply provides access to resources and REST client accesses and presents the resources.
>Here each resource is identified by URIs/ global IDs. REST uses various representations to represent a resource like text, JSON and XML.

What are some disadvantages of REST?
>Since there is no contract defined between service and client, it has to be communicated through other means such as documentation or emails.
>Since it works on HTTP, there can’t be asynchronous calls.
>Sessions can’t be maintained.

What are NoSQL databases?
>NotOnlySQL: A NoSQL database is modeled in means other than the tabular relations used in relational databases.
>Best for messy, unstructured, complicated data
>Types of NoSQL databases: Document Oriented, Key Value, Graph, Column Oriented

What is the difference between a JOIN and a UNION operation?
>UNION operations append lists, JOIN makes a cartesian product and subsets it

What is the difference between a WHERE and a HAVING clause?
>Both clauses are part of an SQL SELECT command and act as filters.
>The WHERE clause applies filtering at the individual record level for a given condition
>The HAVING clause is used to filter aggregates of records by a given condition (after data has been aggregated via an aggregate clause, the set of groups is filtered by the HAVING condition).

What is the difference between monolithic, SOA, and microservice architectures?
>Monolithic Architecture is similar to a big container wherein all the software components of an application are assembled together and tightly packaged.
>A Service-Oriented Architecture is a collection of services which communicate with each other. The communication can involve either simple data passing or it could involve two or more services coordinating some activity.
>Microservice Architecture is an architectural style that structures an application as a collection of small autonomous services, modeled around a business domain.

What are the differences between continuous integration, continuous delivery, and continuous deployment?
>Developers practicing continuous integration merge their changes back to the main branch as often as possible.
>  By doing so, you avoid the integration hell that usually happens when people wait for release day to merge their changes into the release branch.
>Continuous delivery is an extension of continuous integration to make sure that you can release new changes to your customers quickly in a sustainable way.
>  This means that on top of having automated your testing, you also have automated your release process and you can deploy your application at any point of time by clicking on a button.
>Continuous deployment goes one step further than continuous delivery.
>  With this practice, every change that passes all stages of your production pipeline is released to your customers.
>  There's no human intervention, and only a failed test will prevent a new change to be deployed to production.

What are the difference between Clustered and a Non-clustered index?
>With a Clustered index the rows are stored physically on the disk in the same order as the index.
>  Therefore, there can be only one clustered index.
>  A clustered index means you are telling the database to store close values actually close to one another on the disk.
>With a Non Clustered index there is a second list that has pointers to the physical rows.
>  You can have many non clustered indices, although each new index will increase the time it takes to write new records.
>It is generally faster to read from a clustered index if you want to get back all the columns. You do not have to go first to the index and then to the table.
>Writing to a table with a clustered index can be slower, if there is a need to rearrange the data.

Why Would You Opt For Microservices Architecture?
>Microservices can adapt easily to other frameworks or technologies.
>Failure of a single process does not affect the entire system.
>Provides support to big enterprises as well as small teams.
>Can be deployed independently and in relatively less time.

What does Containerization mean?
>Containerisation is a type of virtualization strategy that emerged as an alternative to traditional hypervisor-based virtualization.
>In containerization, the operating system is shared by the different containers rather than cloned for each virtual machine.
>For example Docker provides a container virtualization platform that serves as a good alternative to hypervisor-based arrangements.

What are the benefits of using Go programming?
>Support for environment adopting patterns similar to dynamic languages.
>  For example type inference (x := 0 is valid declaration of a variable x of type int).
>Compilation time is fast.
>In built concurrency support: light-weight processes (via goroutines), channels, select statement.
>Conciseness, Simplicity, and Safety.
>Support for Interfaces and Type embedding.
>The go compiler supports static linking.
>  All the go code can be statically linked into one big fat binary and it can be deployed in cloud servers easily without worrying about dependencies.

What are the advantages of Web Services?
>Interoperability: Web services are accessible over network and runs on HTTP/SOAP protocol and uses XML/JSON to transport data, hence it can be developed in any programming language. Web service can be written in java programming and client can be PHP and vice versa.
>Reusability: One web service can be used by many client applications at the same time.
>Loose Coupling: Web services client code is totally independent with server code, so we have achieved loose coupling in our application.
>Easy to deploy and integrate, just like web applications.
>Multiple service versions can be running at same time.

How to mitigate the SQL Injection risks?
>Prepared Statements with Parameterized Queries: Always ensure that your SQL interpreter always able to differentiate between code and data.
>  Never use dynamic queries which fail to find the difference between code and data.
>  Instead, use static SQL query and then pass in the external input as a parameter to query.
>  Use of Prepared Statements (with Parameterized Queries) force developer to first define all the SQL code, and then pass in each parameter to the query later.
>Use of Stored Procedures: Stored Procedure is like a function in C where database administrator call it whenever he/she need it.
>  It is not completely mitigated SQL injection but definitely helps in reducing risks of SQL injection by avoiding dynamic SQL generation inside.
>White List Input Validation: Always use white list input validation and allow only preapproved input by the developer.
>  Never use blacklist approach as it is less secure than whitelist approach.
>Escaping All User Supplied Input
>Enforcing Least Privilege

What Is ACID Property Of A System?
>Atomicity - This property guarantees that if one part of the transaction fails, the entire transaction will fail, and the database state will be left unchanged.
>Consistency - This property ensures that any transaction will bring the database from one valid state to another.
>Isolation - This property ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially.
>Durable - means that once a transaction has been committed, it will remain so, even in the event of power loss.

What Is Sticky Session Load Balancing? What Do You Mean By "Session Affinity"?
>Sticky session or a session affinity technique is another popular load balancing technique that requires a user session to be always served by an allocated machine.
>In a load balanced server application where user information is stored in session it will be required to keep the session data available to all machines. This can be avoided by always serving a particular user session request from one machine. The machine is associated with a session as soon as the session is created. All the requests in a particular session are always redirected to the associated machine. This ensures the user data is only at one machine and load is also shared.
>This is typically done by using SessionId cookie. The cookie is sent to the client for the first request and every subsequent request by client must be containing that same cookie to identify the session.

What Are The Issues With Sticky Session?
>There are few issues that you may face with this approach
>The client browser may not support cookies, and your load balancer will not be able to identify if a request belongs to a session.
>  This may cause strange behavior for the users who use no cookie based browsers.
>In case one of the machine fails or goes down, the user information (served by that machine) will be lost and there will be no way to recover user session.

What advantages do web services provide over hosted applications?
>Web services can be accessed by a range of devices in different locations.
>The implementation of the service can be independent of the server system software, allowing a range of languages and frameworks to be used when writing applications.
>i.e. use AWS to deploy multiple applications without needing any knowledge of their underlying implementations.

What are some of the main elements of a Web API?
>A web API handles requests and sends responses using HTTP protocol across the internet.
>A web API has a load balancer to allocate requests to servers running the application to prevent server overload.
>It has a router to direct each request to the appropriate resource on the server to handle it.
>It has views that handle requests, make queries to a database, and return responses typically formatted as JSON or XML.

What is the difference between an acceptance test and a functional test?
>Acceptance testing - this is a validation activity.
>  Often developers are faced with questions, they built the right thing and or will it satisfy the needs of the client.
>  With an acceptance test, you can determine if a product solves the problems for which it was designed.
>  This can best be done by the user (customer), for instance, performing his / her tasks that the software assists with.
>Functional testing - this is a verification activity.
>  Developers also often have questions about whether they have built the product correctly and meet their business requirements.
>  The functional test helps to answer these questions. It can be used to determine if the product works the way the developers think it does not.

Do you prefer functional or acceptance testing?
>I prefer functional testing. The purpose of functional testing is to verify that the application performs as intended by checking its behavior and output for various inputs and user interactions.
>It confirms that the product works and performs the tasks it was designed for. If the needs of the end-user are understood, then functional testing can also perform as acceptance testing to validate that the end user's goals and needs are met.

What is a reverse proxy?
>A reverse proxy is a type of proxy that retrieves data from one or more servers on behalf of a client.
>This data is then returned to the client appearing as if it originated from the reverse proxy server itself.
>A reverse proxy is often used to balance the load.

How do you understand the term High Availability vs High Accessibility??
> Accessibility means the ability of the user of the program to gain access to the system.
>   If the user cannot access the program, then it is considered unavailable.
> High availability also means that the program will be available to users without interruption.
>   Using redundant server nodes with clustering is a common way of higher availability in web applications.
>   Availability is also commonly expressed as a percentage of uptime in a given year.

If Node.js is single-threaded then how does it handle concurrency?
>If Node gets an I / O request, it creates or uses a thread to perform that I / O operation.
>After performing this operation, it puts the result in the event queue.
>During each such event, an event loop starts and checks the queue.
>If the execution stack of Node is empty then it adds the queue result to the execution stack.

What is infrastructure resilience?
>Infrastructure resilience is the ability to reduce the magnitude and/or duration of disruptive events.
>The effectiveness of a resilient infrastructure or enterprise depends upon its ability to anticipate, absorb, adapt to, and/or rapidly recover from a potentially disruptive event.

How are resilience and redundancy related?
>Redundancy is required to enhance a system’s resilience, and resilience of individual system components ensures that redundant components can recover to functional state following a fault occurrence.
>Redundancy is an absolute measure of the additional components supporting system resilience, whereas resiliency is a relative (and continuous) measure of the impact of fault on the system operation.

What patterns do services in a microservice architecture use to communicate?
>Use asynchronous messaging for inter-service communication. Services communicating by exchanging messages over messaging channels.
>Request/response - a service sends a request message to a recipient and expects to receive a reply message promptly
>Notifications - a sender sends a message a recipient but does not expect a reply. Nor is one sent.
>Request/asynchronous response - a service sends a request message to a recipient and expects to receive a reply message eventually
>Publish/subscribe - a service publishes a message to zero or more recipients
>Publish/asynchronous response - a service publishes a request to one or recipients, some of whom send back a reply

What are synchronous approaches to microservice communication?
>If we prefer to communicate with synchronous communication, we have several options those are; HTTP protocols and REST approaches.
>REST is using HTTP protocol, and request-response structured JSON objects. API interfaces design based on HTTP verbs like GET-PUT-POST and DELETE.
>gRPC binary format communications, invoke external system method over the binary network protocols, payloads are not readable but its faster that REST APIs.

How does gRPC work?
>In GRPC, a client application can directly call a method on a server application on a different machine like it were a local object
>gRPC uses Protocol Buffers by Default. Protocol Buffers are Google’s open source mechanism for serializing structured data.
>https://medium.com/design-microservices-architecture-with-patterns/microservices-communications-f319f8d76b71

What is AMQP?
>The most popular protocol for this Asynchronous communications is AMQP (Advanced Message Queuing Protocol).
>So with using AMQP protocols, the client sends the message with using message broker systems like Kafka and RabbitMQ queue. T
>The message producer usually does not wait for a response.
>This message consume from the subscriber systems in async way, and no one waiting for response suddenly.

What are some methods of monitoring microservices?
>internal healthchecks: heartbeat, log monitoring, scheduled maintenance/backup, resource monitoring, alerts/notifications, real-time sla monitoring
>external monitoring: web analytics, application performance monitoring tools (apm), real user monitoring (rum), service monitoring agents

What are the different deployment strategies?
>Rolling Strategy and Canary Deployments:
>   A rolling deployment slowly replaces instances of the previous version of an application with instances of the new version of the application.
>   A rolling deployment typically waits for new pods to become ready via a readiness check before scaling down the old components.
>   If a significant issue occurs, the rolling deployment can be aborted.
>   Canary deployments rigorously test the new version before any rolling updates are made
>Blue-Green Deployment using routes:
>   Blue-green deployment is a deployment strategy that utilizes two identical environments, a “blue” (aka staging) and a “green” (aka production) environment with different versions of an application or service.
>   Quality assurance and user acceptance testing are typically done within the blue environment that hosts new versions or changes.
>   User traffic is shifted from the green environment to the blue environment once new changes have been testing and accepted within the blue environment. You can then switch to the new environment once the deployment is successful.
>A/B Deployment and canary deployments using routes
>   In A/B testing, different versions of the same service run simultaneously as “experiments” in the same environment for a period of time.
>   Experiments are either controlled by feature flags toggling, A/B testing tools, or through distinct service deployments.
>   It is the experiment owner’s responsibility to define how user traffic is routed to each experiment and version of an application.
>   Commonly, user traffic is routed based on specific rules or user demographics to perform measurements and comparisons between service versions.
>   Target environments can then be updated with the optimal service version.

Why are generics desired?
>To obtain the development-time flexibility and expressiveness of a language like Python, while simultaneously retaining the run-time benefits of a statically and strongly typed language like Go.
>Generic programming gives us primitives to declare “placeholder types” that allow us to focus less on the specific types that may be used or declared by other portions of the codebase, but rather focus on these higher-level patterns that can be consolidated into simpler declarations.
>You intentionally don’t want to know the types that will be handled by your code. Again, this is a very valid approach for maintainers of libraries and APIs.
>A certain piece of functionality is inherently very complex, and maintaining this using concrete types is untenable. For these, generic programming coupled with further constraints like traits or interfaces can help keep things manageable.

What is a type-safe language?
>Type safety means that the compiler will validate types while compiling, and throw an error if you try to assign the wrong type to a variable.
>Many consider the requirement of explicit type conversions necessary for a language to be strictly typed, as automatic conversions can sometimes leads to well defined but unexpected/unintuitive behaviors.

What is the difference between a type-safe language and strongly/weakly typed?
>Type-safety does not necessarily mean strongly typed, either - some languages are notoriously weakly typed, but still arguably type safe.
>Take JS: its type system is as weak as they come, but still strictly defined. It allows automatic casting of data (say, strings to ints), but within well defined rules.

When to use Redis vs MongoDB?
>MongoDB and Redis are both NoSQL databases, however, they were built for different purposes.
>MongoDB is a document-oriented, disk-based database that should be used for ensuring operational simplicity, creating a schema-free design, and processing very large data volumes.
>Redis is an in-memory, persistent data structure store that should be used to enable the performance of common operations with minimal complexity and maximum performance.

Give examples of the mitigation tactics you’d use for various types of API attacks.
>Injection: I’d validate and sanitize all data in API requests as well as limit response data to prevent the unintentional leakage of sensitive data.
>Cross-Site Scripting (XSS): I’d validate input as well as use character escaping and filtering.
>Distributed Denial-of-Service (DDoS): I’d limit the number of requests and payload size.
>Man-in-the-Middle (MitM): I’d encrypt traffic in transit.

Explain the difference between principles YAGNI and KISS?
>YAGNI (You ain't gonna need it) - refers to the analysis or implementation of things that may not be needed at all. Of course, algorithmic elegance is important, but in most cases, it is not needed. You have to be careful not to spoil the client's needs with your ideas.
>KISS (Keep it simple stupid) is the fact that simple systems are much easier to manage. Simplicity is not always less work, because it takes a lot of knowledge to implement it.

What's the difference between faking, mocking, and stubbing?
>Fake objects have working implementations but will require a reduction, which makes them unusable for production.
>Stubs are standard responses to calls made during a test. They can also record call information, such as an email gateway stub that remembers the messages it 'sent ".
>Mocks are objects with preprogrammed expectations that shape the specifics of the call.

Explain what the API Gateway pattern means?
>An API Gateway is a server that is the only possible entry point to the system.
>It is similar to the Facade pattern from object-oriented design.
>API Gateway encapsulates the architecture of the entire system and provides an API that is already adapted for each client.
>This API can also have other functions such as authentication, caching, monitoring, and load balancing.

What are the benefits of using B-trees index?
>Such indexes save a lot of time, because look-ups, deletions, and insertions can all be done in logarithmic time.
>Also, the data that is stored inside B-trees can be easily sorted.

What Is the BASE Property Of A System?
>The acronym states for Basically Available, Soft state, Eventual consistency.
>BASE properties are general properties inherent in newly developed NoSQL systems.
>The BASE system does not guarantee consistency, but it is guaranteed to be available.
>Its soft structure suggests that the state of the system can change over time, even without data entry. This is due to the sequential model.

---
