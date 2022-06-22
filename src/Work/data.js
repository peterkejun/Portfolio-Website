const work = [
    {
        title: 'LiveRamp',
        date: 'Apr 2022 - Aug 2022',
        position: 'Software Engineering Intern',
        location: 'San Francisco, CA',
        descriptions: [
            'Improved the LiveRamp Data Marketplace platform for data monetization, with billions of requests a day and 80+ PB of data.',
            'Enhanced data discoverability by writing custom ElasticSearch analyzers, integrating a knowledge graph, and using geolocations.',
            'Built a near real-time FluentD pipeline to ETL data from MySQL to ElasticSearch.'
        ],
        variable: 'Tech',
        object: [
            'ElasticSearch',
            'FluentD',
            'MySQL',
            'DataDog',
            'Ruby on Rails',
        ],
        fullWidth: true,
    },
    {
        title: 'Vretta',
        date: 'Sept 2021 - Dec 2021',
        position: 'Software Developer Intern',
        location: 'Toronto, ON',
        descriptions: [
            'Built a RESTful API for an e-assessment app handling 18 million requests per day.',
            'Built a QR code scanning service using the open-source zbar library.',
            'Implemented ticket tagging and time logging features to the open-source osTicket project.',
        ],
        variable: 'Tech',
        object: [
            'Express JS (Feathers)',
            'Kubernetes & Docker',
            'Python',
            'PHP',
            'MySQL',
            'DynamoDB',
        ]
    },
    {
        title: 'Horizon AI',
        date: 'Jan 2021 - May 2021',
        position: 'Software Engineering Intern',
        location: 'Waterloo, ON',
        descriptions: [
            'Built a pub/sub architecture for real-time AV data streaming with Kafka, Spark and Node.',
            'Built an OAuth2.0 service on Lambda with rotating RSA keys in AWS Secrets Manager.',
            'Built an image processing service on top of potrace that talks to a neural network API.',
        ],
        variable: 'Tech',
        object: [
            'Apache Kafka',
            'OAuth2.0',
            'Kubernetes & Docker',
            'Node',
            'React',
            'MySQL',
            'MongoDB',
        ],
    },
    {
        title: 'Intrigue Media',
        date: 'May 2020 - August 2020',
        position: 'Full-Stack Developer (Game Design) Intern',
        descriptions: [
            'Optimized a player ranking algorithm by using priority queues and MongoDB aggregations.',
            'Built a web app to monitor Docker containers, using Kubernetes API.',
        ],
        variable: 'Tech',
        object: [
            'Vue JS',
            'MongoDB',
            'Express JS',
            'Kubernetes & Docker',
        ],
    },
];

export default work;