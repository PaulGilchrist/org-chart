const JOB_PATHS = [
    {
        name: "Leadership",
        description: "This is a paragraph explaining Leadership",
        jobs: [
            {
                name: "IT Supervisor",
                description: "This is a paragraph explaining IT Supervisor"
            },
            {
                name: "IT Team Lead",
                description: "This is a paragraph explaining IT Team Lead"
            },
            {
                name: "IT Manager",
                description: "This is a paragraph explaining IT Manager"
            },
            {
                name: "IT Sr. Manager / BRM",
                description: "This is a paragraph explaining IT Sr. Manager / BRM"
            },
            {
                name: "IT Director",
                description: "This is a paragraph explaining IT Director"
            },
            {
                name: "IT VP",
                description: "This is a paragraph explaining IT VP"
            },
            {
                name: "CIO",
                description: "This is a paragraph explaining CIO"
            }
        ]
    },
    {
        name: "Administration",
        description: "This is a paragraph explaining Administration",
        jobs: [
            {
                name: "Business Administrator",
                description: "This is a paragraph explaining Business Administrator"
            },
            {
                name: "IT Admin Specialist I",
                description: "This is a paragraph explaining IT Admin Specialist I"
            },
            {
                name: "IT Admin Specialist II",
                description: "This is a paragraph explaining IT Admin Specialist II"
            },
            {
                name: "IT Provisioning Specialist",
                description: "This is a paragraph explaining IT Provisioning Specialist"
            },
            {
                name: "IT Contracts Specialist",
                description: "This is a paragraph explaining IT Contracts Specialist"
            },
            {
                name: "IT Finance Manager",
                description: "This is a paragraph explaining Finance Manager"
            }
        ]
    },
    {
        name: "Architecture",
        description: "This is a paragraph explaining Architecture",
        jobs: [
            {
                name: "Architect",
                description: "This is a paragraph explaining Architect"
            },
            {
                name: "Enterprise Architect",
                description: "This is a paragraph explaining Enterprise Architect"
            }
        ]
    },
    {
        name: "Project Management",
        description: "This is a paragraph explaining Project Management",
        jobs: [
            {
                name: "Project Manager",
                description: "This is a paragraph explaining Project Manager"
            },
            {
                name: "Sr. Project Manager",
                description: "This is a paragraph explaining Sr. Project Manager"
            }
        ]
    },
    {
        name: "Systems Analyst",
        description: "This is a paragraph explaining Systems Analyst",
        jobs: [
            {
                name: "Systems Analyst I",
                description: "This is a paragraph explaining Systems Analyst I"
            },
            {
                name: "Systems Analyst II",
                description: "This is a paragraph explaining Systems Analyst II"
            },
            {
                name: "Systems Analyst III",
                description: "This is a paragraph explaining Systems Analyst III"
            }
        ]
    },
    {
        name: "Business Analyst",
        description: "This is a paragraph explaining Business Analyst",
        jobs: [
            {
                name: "Business Analyst I",
                description: "This is a paragraph explaining Business Analyst I"
            },
            {
                name: "Business Analyst II",
                description: "This is a paragraph explaining Business Analyst II"
            },
            {
                name: "Business Analyst III",
                description: "This is a paragraph explaining Business Analyst III"
            }
        ]
    },
    {
        name: "QA Engineer",
        description: "This is a paragraph explaining QA Engineer",
        jobs: [
            {
                name: "QA Engineer I",
                description: "This is a paragraph explaining QA Engineer I"
            },
            {
                name: "QA Engineer II",
                description: "This is a paragraph explaining QA Engineer II"
            },
            {
                name: "QA Engineer III",
                description: "This is a paragraph explaining QA Engineer III"
            }
        ]
    },
    {
        name: "Software Development",
        description: "This is a paragraph explaining Software Development",
        jobs: [
            {
                name: "Junior Developer",
                description: "This is a paragraph explaining Junior Developer"
            },
            {
                name: "Software Developer I",
                description: "This is a paragraph explaining Software Developer I"
            },
            {
                name: "Software Developer II",
                description: "This is a paragraph explaining Software Developer II"
            },
            {
                name: "Software Developer III",
                description: "This is a paragraph explaining Software Developer III"
            },
            {
                name: "Senior Technologist",
                description: "This is a paragraph explaining Senior Technologist"
            }
        ]
    },
    {
        name: "Training",
        description: "This is a paragraph explaining Training",
        jobs: [
            {
                name: "IT Learning Specialist I",
                description: "This is a paragraph explaining IT Learning Specialist I"
            },
            {
                name: "IT Learning Specialist II",
                description: "This is a paragraph explaining IT Learning Specialist II"
            },
            {
                name: "IT Learning Specialist II",
                description: "This is a paragraph explaining IT Learning Specialist II"
            }
        ]
    },
    {
        name: "Implementation",
        description: "This is a paragraph explaining Implementation",
        jobs: [
            {
                name: "IT Implementation Specialist I",
                description: "This is a paragraph explaining IT Implementation Specialist I"
            },
            {
                name: "IT Implementation Specialist II",
                description: "This is a paragraph explaining IT Implementation Specialist II"
            }
        ]
    },
    {
        name: "Security",
        description: "This is a paragraph explaining Security",
        jobs: [
            {
                name: "IT Security Analyst",
                description: "This is a paragraph explaining IT Security Analyst"
            },
            {
                name: "IT Security Engineer I",
                description: "This is a paragraph explaining IT Security Engineer I"
            },
            {
                name: "IT Security Engineer II",
                description: "This is a paragraph explaining IT Security Engineer II"
            },
            {
                name: "IT Security Engineer III",
                description: "This is a paragraph explaining IT Security Engineer III"
            },
            {
                name: "IT Security Manager",
                description: "This is a paragraph explaining IT Security Manager"
            },
            {
                name: "CISO",
                description: "This is a paragraph explaining CISO"
            }
        ]
    },
    {
        name: "Operations / Infrastructure Engineering",
        description: "This is a paragraph explaining Operations / Infrastructure Engineering",
        jobs: [
            {
                name: "Operations Technician",
                description: "This is a paragraph explaining Operations Technician"
            },
            {
                name: "Operations Engineer I",
                description: "This is a paragraph explaining Operations Engineer I"
            },
            {
                name: "Infrastructure Engineer I",
                description: "This is a paragraph explaining Infrastructure Engineer I"
            },
            {
                name: "Infrastructure Engineer II",
                description: "This is a paragraph explaining Infrastructure Engineer II"
            },
            {
                name: "Infrastructure Engineer III",
                description: "This is a paragraph explaining Infrastructure Engineer III"
            }
        ]
    },
    {
        name: "Network Engineering",
        description: "This is a paragraph explaining Network Engineering",
        jobs: [
            {
                name: "Network Engineer I",
                description: "This is a paragraph explaining Network Engineer I"
            },
            {
                name: "Network Engineer II",
                description: "This is a paragraph explaining Network Engineer II"
            },
            {
                name: "Network Engineer III",
                description: "This is a paragraph explaining Network Engineer III"
            }
        ]
    },
    {
        name: "Customer Support",
        description: "This is a paragraph explaining Customer Support",
        jobs: [
            {
                name: "Support Technician",
                description: "This is a paragraph explaining Support Technician"
            },
            {
                name: "Support Engineer I",
                description: "This is a paragraph explaining Support Engineer I"
            },
            {
                name: "Support Engineer II",
                description: "This is a paragraph explaining Support Engineer II"
            }
        ]
    },
    {
        name: "Field Support",
        description: "This is a paragraph explaining Field Support",
        jobs: [
            {
                name: "Field Support Engineer I",
                description: "This is a paragraph explaining Field Support Engineer I"
            },
            {
                name: "Field Support Engineer II",
                description: "This is a paragraph explaining Field Support Engineer II"
            },
            {
                name: "Field Support Engineer III",
                description: "This is a paragraph explaining Field Support Engineer III"
            }
        ]
    },
    {
        name: "Database Administration",
        description: "This is a paragraph explaining Database Administration",
        jobs: [
            {
                name: "DBA I",
                description: "This is a paragraph explaining DBA I"
            },
            {
                name: "DBA II",
                description: "This is a paragraph explaining DBA II"
            }
        ]
    },
    {
        name: "Configuration Management",
        description: "This is a paragraph explaining Configuration Management",
        jobs: [
            {
                name: "DevOps Engineer I",
                description: "This is a paragraph explaining DevOps Engineer I"
            },
            {
                name: "DevOps Engineer II",
                description: "This is a paragraph explaining DevOps Engineer II"
            },
            {
                name: "DevOps Engineer III",
                description: "This is a paragraph explaining DevOps Engineer III"
            }
        ]
    },
    {
        name: "Release Coordination",
        description: "This is a paragraph explaining Release Coordination",
        jobs: [
            {
                name: "Release Coordinator I",
                description: "This is a paragraph explaining Release Coordinator I"
            },
            {
                name: "Release Coordinator II",
                description: "This is a paragraph explaining Release Coordinator II"
            }
        ]
    }
]

export default JOB_PATHS;