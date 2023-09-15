const JOB_PATHS = [
    {
        name: "Leadership",
        description: "This is a paragraph explaining Leadership",
        jobs: [
            {
                name: "IT Supervisor",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
               </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `            },
            {
                name: "IT Team Lead",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Manager",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Sr. Manager / BRM",
                description: `
                <h3>Class Concept / Competency</h3>
                <ul>
                    <li>Serve as the IT liaison for each department in an organization. A BRM understands all business processes and provides technology guidance to ensure maximum ROI for IT business strategy requirements.</li>
                    <li>Facilitate and serve as a lead for the planning and execution of initiatives to enable the organization to achieve objectives through the effective use of technology.</li>
                    <li>Communicate decisions, priorities and relevant project information to appropriate levels of staff regarding service requests, projects and initiatives.</li>
                    <li>With the CIO & business partners, develops long-term systems & strategic growth plans. Develops & executes vision & strategy aligned with the company's business goals.</li>
                    <li>Plans & manages a respective portfolio of IT & business process work based on discipline.</li>
                    <li>Recruits, selects, coaches, & develops team leadership, engineering, & support staff within vertical team. Assists with managing professional growth & development plans along with Functional Manager.</li>
                </ul>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Builds and fosters business partnerships and maintains on-going business relationships.  Serves as the point of contact for business area relationships.</li>
                    <li>Translates high-level strategy and product direction into business solutions.</li>
                    <li>Ensures business objectives & operating model are understood & factored into IT strategy.</li>
                    <li>Defines key strategies for the IT delivery model of an organization.</li>
                    <li>Works with financial leadership on annual IT budgets and forecasts.</li>
                    <li>Works with architects to understand new technology trends and forecast future IT infrastructure requirements.</li>
                    <li>Leads stakeholder (internal and, when appropriate, external) business planning and strategy meetings.</li>
                    <li>Works with senior leadership to develop team goals in line with department objectives.</li>
                    <li>Conducts performance & development reviews per HR guidelines.  Takes corrective actions, including Performance Improvement Plans & terminations, when necessary.</li>
                    <li>Translates & champions IT functional strategy to vertical discipline.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Information Technology, Business or a related field, or equivalent work experience.</li>
                    <li>Experience successfully leading large, complex projects and/or in business/IT consulting/management roles.</li>
                    <li>Minimum of 3 years of progressive technical experience.</li>
                    <li>Minimum of 5 years of progressive leadership experience. Thorough knowledge of software development lifecycle & project management methodologies.</li>
                    <li>Broad understanding of business practices & operations.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                    <li>Ability to work autonomously.</li>
                </ul>
                `
            },
            {
                name: "IT Director",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT VP",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "CIO",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Administration",
        description: "This is a paragraph explaining Administration",
        jobs: [
            {
                name: "Business Administrator",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Admin Specialist I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Admin Specialist II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Provisioning Specialist",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Contracts Specialist",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Finance Manager",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Architecture",
        description: "",
        jobs: [
            {
                name: "Architect",
                description: `
                <h3>Class Concept / Competency</h3>
                Defines, documents, and articulates the desired future state IT vision, understands the current state, identifies the gaps between the two states, and develops strategic approaches to close those gaps.<br>This position's primary responsibility is innovation. Identifies potentially relevant trends and emerging technologies, forecasts their impact and utility, and acts accordingly, using 'out of the box' thinking and creativity to align technology with strategic department and business objectives.
                <br><br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Coaches, develops, and supports engineers and tech leads within their functional team.</li>
                    <li>Develops, communicates, and evolves functional architecture including principles, technical strategies, roadmaps, guidelines, standards, and strategic best practices.</li>
                    <li>Synchronizes technology frameworks across their function, optimizes end-to-end processes, and designs a common infrastructure needed to best achieve the functional architecture's long-term strategic direction.</li><li>Analyzes industry, technology, and market trends to determine their potential impacts on the functional strategy and architecture requirements.</li>
                    <li>Investigates new technical solutions and technologies, estimating and articulating viability, effort, and potential financial and non-financial impacts.</li><li>Explores, analyzes, and models business processes, information flows, technology patterns and services, and system and integration maps to close identified gaps.</li><li>Provides guidance, strategic best practices, and action-oriented advice to guide the selection of technologies and vendor solutions aligned with strategic goals.</li>
                    <li>Works with other architects, team leads, and subject matter experts to ensure functional alignment with the enterprise architecture and strategic direction.</li>
                    <li>Translates business needs into architectural requirements.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience.</li>
                    <li>Minimum of 10 years of experience within the Information Technology field.</li>
                    <li>Minimum of 4 years of experience in a lead technical role.</li>
                    <li>Experience working with abstract concepts and a high tolerance for ambiguity.</li>
                    <li>Ability to identify patterns and relationships between technologies, processes, business models and people.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                    <li>Experience in leading design efforts for complex information technology projects</li>
                </ul>
                `            },
            {
                name: "Enterprise Architect",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and supports the architecture team in defining, documenting, and articulating the desired future state IT vision, understanding the current state, identifying the gaps between the states, and developing strategic approaches to close those gaps.<br>
                Identifies and champions 'digital disruptors' that have the potential to advance the business. Identifies relevant trends and emerging technologies, forecasts their impact and utility, and working with all teams and across all disciplines within IT towards successfully achieving the IT strategic vision.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Works with IT leadership to plan and prioritize initiatives in line with department and business objectives.</li>
                    <li>Identifies risks, discusses challenges, and pinpoints factors that limit options for improvement, such as critical deficiencies and skill gaps.</li>
                    <li>Develops transition roadmaps, identifying specific improvement goals while balancing practical considerations such as business priorities, required resources, and the enterprise's culture and capacity for change.</li>
                    <li>Recommends, defines, and assists with initial project scope, objectives, and program charter designed to achieve the defined future state.</li>
                    <li>Collaborates with subject matter experts to holistically understand and baseline the current state, and to identify its shortfalls in terms of its ability to support the strategies of the enterprise.</li>
                    <li>Selects, coaches, develops, and supports architects within the IT department.</li>
                    <li>Develops, governs, communicates, and evolves enterprise architecture across all functions, including principles, technical strategies, roadmaps, guidelines, standards, and strategic best practices.</li>
                    <li>Synchronizes technology frameworks across the organization, optimizes end-to-end processes, designs a common infrastructure, and creates appropriate governance structures needed to best achieve the enterprise architecture's long-term strategic direction.</li>
                    <li>Analyzes industry, technology, and market trends to determine their potential impacts on the enterprise's strategy and architecture requirements.</li>
                    <li>Leads Investigation of new technical solutions and technologies, estimating and articulating viability, effort, and potential financial and non-financial impacts.</li>
                    <li>Provides guidance, strategic best practices, and action-oriented advice to help make better IT portfolio investment decisions and guide the selection of technologies and vendor solutions aligned with strategic goals.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience.</li>
                    <li>Minimum of 12 years of experience within the Information Technology field, and preferably across a variety of technical specialties.</li>
                    <li>Minimum of 4 years of experience in a functional architect role.</li>
                    <li>Ability to identify patterns and relationships between technologies, processes, business models and people.</li>
                    <li>Experience working with abstract concepts and a high tolerance for ambiguity.</li>
                    <li>Experience in leading design efforts for complex information technology projects.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Project Management",
        description: "This is a paragraph explaining Project Management",
        jobs: [
            {
                name: "Project Manager",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Sr. Project Manager",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Systems Analyst",
        description: "This is a paragraph explaining Systems Analyst",
        jobs: [
            {
                name: "Systems Analyst I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Systems Analyst II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Systems Analyst III",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Business Analyst",
        description: "",
        jobs: [
            {
                name: "Business Analyst I",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for business requirements of applications, websites, databases and systems, providing second-level technical support, testing and defect management. Participates in team initiatives while simultaneously participating in multiple IT project efforts.<br>
                Incumbent at this level has a knowledge of fundamental concepts, practices, and procedures. Works under guidance and/or on routine assignments, the problems of which can be resolved with defined guidelines and parameters.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts analysis of business processes. Defines, tests, documents and manages business requirements according to approved standards/procedures.</li>
                    <li>Leads and facilitates collaborative business requirement gathering sessions.</li>
                    <li>Provides defect management of applications, systems, databases, or websites.</li>
                    <li>Provides escalated (Tier 2) application support including on-call (after hours, weekends, holidays) for priority issues. Troubleshoots production issues. 
                    Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Participates in process improvement efforts within the Business Analysis team or IT organization.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of business analysis to equal four years.</li>
                    <li>Minimum of 2 years' experience required in a Business Analyst role. These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Business Analyst II",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides business analysis for moderately complex applications, websites, databases and systems, defect management and provides second-level technical support. Leads team initiatives and participates simultaneously participating in multiple IT project efforts.<br>
                Incumbent at this level is a learned professional responsible for business analysis on projects of moderate difficulty through analyzing possible solutions utilizing standard procedures. Works under limited guidance. Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts analysis of business processes. Defines, tests, documents and manages business requirements according to approved standards/procedures.</li>
                    <li>Serves as the product subject matter expert to lead and facilitate collaborative business requirement gathering sessions.</li>
                    <li>Performs strategic business research and defines requirements in support of simplifying and standardizing business processes and the integration of systems.</li>
                    <li>Evaluates dynamic business goals and drivers and predicts potential enhancements for applications and/or systems.</li>
                    <li>Reviews project proposals; identifies potential problem areas, and recommends optimum approaches for project path, utilizing specific area of business process expertise.</li>
                    <li>May perform project management tasks including backlog management, planning, communication, status reporting and documentation for a variety of project/product types.</li>
                    <li>Develops or modifies project business analysis artifacts using disciplined processes, procedures and standards.</li>
                    <li>Provides escalated (Tier 2) application support including on-call (after hours, weekends, holidays) for priority issues. Troubleshoots complex production issues. Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Identifies and communicates best practices, leads the Business Analysis Community of Practice sessions. Trains and provides guidance to less experienced Business Analysts.</li>
                    <li>Leads process improvement efforts within the Business Analysis team or IT organization.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of business analysis to equal four years.</li>
                    <li>Minimum of 5 years' experience required in a Business Analyst role. Demonstrated ability to exceed expectations of the BA I role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Business Analyst III",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides business analysis for highly complex applications, programs, websites, databases, and systems. Contribution is felt across a breath of development efforts within the Department. Individual is known and recognized within the Department for breadth of contributions.<br>
                Incumbent at this level is an experienced professional competent to work at the highest professional level. Considers the current and future business environment in business process analysis and supported systems. Brings Enterprise level perspective to business process driven solutions. Normally works under general guidance.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts analysis of business processes. Defines, tests, documents and manages business requirements according to approved standards/procedures.</li>
                    <li>Serves as the product subject matter expert to lead and facilitate collaborative business requirement gathering sessions.</li>
                    <li>Builds and fosters business partnerships and maintains on-going business relationships. Serves as the point of contact for business area relationships.</li>
                    <li>Proves knowledgeable of business processes and enterprise-level solutions that meet present and future business needs.</li>
                    <li>Translates high-level strategy and product direction into business solutions.</li>
                    <li>Conducts impact analysis of technology changes on business processes and current technology.</li>
                    <li>Conducts competitive product and task-level workflow analysis; identifies business process improvements and areas of business process automation.</li>
                    <li>May perform project management tasks including backlog management, planning, communication, status reporting and documentation for a variety of project/product types.</li>
                    <li>Leads the selection and evaluation of business analysis software solutions and tools.</li>
                    <li>Provides escalated (Tier 2) application support including on-call (after hours, weekends, holidays) for priority issues. Troubleshoots complex production issues. Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Advises, coaches and mentors less experienced Business Analysts.</li>
                    <li>Contributes to and champions PulteGroup Business Analysis best practices, methods, standards, and processes. 
                    Identifies and leads process improvement efforts within the Business Analysis team.</li>
                    <li>May perform any listed BA II responsibility given specific project/work assignment.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of business analysis to equal four years.</li>
                    <li>Minimum of 10 years' experience required in a Business Analyst role. Demonstrated ability to exceed expectations of the BA II role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "QA Engineer",
        description: "This is a paragraph explaining QA Engineer",
        jobs: [
            {
                name: "QA Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "QA Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "QA Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Software Development",
        description: "This is a paragraph explaining Software Development",
        jobs: [
            {
                name: "Junior Developer",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Software Developer I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Software Developer II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Software Developer III",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Senior Technologist",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Training",
        description: "This is a paragraph explaining Training",
        jobs: [
            {
                name: "IT Learning Specialist I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Learning Specialist II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Learning Specialist II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Implementation",
        description: "This is a paragraph explaining Implementation",
        jobs: [
            {
                name: "IT Implementation Specialist I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Implementation Specialist II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Security",
        description: "This is a paragraph explaining Security",
        jobs: [
            {
                name: "IT Security Analyst",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Security Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Security Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Security Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "IT Security Manager",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "CISO",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Operations / Infrastructure Engineering",
        description: "This is a paragraph explaining Operations / Infrastructure Engineering",
        jobs: [
            {
                name: "Operations Technician",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Operations Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Infrastructure Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Infrastructure Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Infrastructure Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Network Engineering",
        description: "This is a paragraph explaining Network Engineering",
        jobs: [
            {
                name: "Network Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Network Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Network Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Customer Support",
        description: "This is a paragraph explaining Customer Support",
        jobs: [
            {
                name: "Support Technician",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Support Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Support Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Field Support",
        description: "This is a paragraph explaining Field Support",
        jobs: [
            {
                name: "Field Support Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Field Support Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Field Support Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Database Administration",
        description: "This is a paragraph explaining Database Administration",
        jobs: [
            {
                name: "DBA I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "DBA II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Configuration Management",
        description: "This is a paragraph explaining Configuration Management",
        jobs: [
            {
                name: "DevOps Engineer I",
                description: `
                <h3>Summary</h3>
                PulteGroup, Inc. is looking to expand our team of talented Information Technology professionals. We have an excellent reputation as a great place to work with an open, collaborative culture. We are looking for an experienced DevOps Engineer to join our Application Delivery team. We seek a highly motivated individual with a proven track-record of delivering successful IT and business outcomes.<br>
                The DevOps Engineer will be a member of PulteGroup's Application Delivery team and will report to an IT Manager. The role will be based out of PulteGroup's corporate office extension in Tempe, AZ or corporate office in Atlanta, GA and will require collaboration and partnership with team members across multiple functions/locations.  The DevOps Engineer position will be required to work within flexible working hours with periodic evening hours necessary for deployment, support, and on-call activities.<br>
                As a DevOps Engineer, you will be responsible for the tools, frameworks, automation, processes, and services that enable the delivery of software and cloud environments to the end user.  Success in this role is defined by achieving fast and simple processes that measurably accelerate Dev to Prod cycle time.<br>
                We will help you attain your career development goals with training, mentoring, and growth opportunities.<br>
                We believe success starts with having the right people -- those who have the right attitude and aptitude. We seek out goal-oriented professionals who are creators, leaders, and pioneers. We value diversity in our workforce. By bringing together people with different backgrounds, thoughts, and life experiences, we create a competitive advantage.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Administers the tools, processes, and automation supporting cloud environments, Source Code Management, Configuration Management, Continuous Integration, Continuous Delivery, Continuous Testing, and Continuous Monitoring.</li>
                    <li>Writes automation script/code to improve build/release tools, systems, and processes.</li>
                    <li>Creates and maintains automated Continuous Integration/Continuous Delivery (CI/CD) pipelines.</li>
                    <li>Ensures project source materials are maintained in the version control system, including source code and attendant files and ensures that appropriate quality checks and approvals are adhered to prior to merges and promotions.  Ensures application team compliance to branching strategies.</li>
                    <li>Works collaboratively with teammates, management, and application development teams to automate and continuously improve software deployment processes. Provides mentoring to application development teams on DevOps standards and processes.  Participates in projects to establish and evolve DevOps practices and implement improvement plans.  Leverages understanding of IT processes and technology to provide analysis and recommendations for solutions.</li>
                    <li>Works closely with application development teams to ensure development processes follow established standards.</li>
                    <li>Helps implement the optimal cloud resources for executing workloads and optimizing cloud spend.</li>
                    <li>Automates the creation and maintenance of cloud resources and environments via scripting and templates.</li>
                    <li>Ensures the overall quality of environments.</li>
                    <li>Works with 3rd party vendors to resolve configuration and deployment issues with off-the-shelf software.</li>
                    <li>Supports and facilitates auditing and reporting of deployment activity.</li>
                    <li>Participates in planning activities for software releases. Executes Staging and Production release activities.</li>
                    <li>Monitors CI/CD tools and processes. Troubleshoots and provides quick resolution to production related issues.  Works cross functionally to resolve issues.  Communicates status /solutions of these issues to appropriate stakeholders.</li>
                    <li>May work non-business hours and weekends to avoid impact to production systems.</li>
                    <li>Participates in projects to establish and evolve DevOps practices, tools, and processes.</li>
                    <li>Updates job knowledge by studying state-of-the-art tools and best practices related to DevOps and other Information Technologies; participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>2 + years in a DevOps Engineer, Configuration Management Engineer, or similar role</li>
                    <li>Proficient in the development and maintenance of CI/CD pipelines using Azure DevOps and PowerShell</li>
                    <li>Knowledge of scripting languages and common configuration file formats (PowerShell, xml, json, Shell, etc.)</li>
                    <li>Experience with source control systems and branching strategy (Azure DevOps, Git)</li>
                    <li>1 + years' experience implementing, configuring, maintaining, and monitoring Azure PaaS cloud resources including App Services, Application Insights, Automation Accounts, Data Factory, Function Apps, Key Vault, Logic Apps, Runbooks, SQL Server/DB/Elastic Pool, Storage, Traffic Manager</li>
                    <li>Experience with configuration and deployment of applications on Windows Servers, SQL Databases, IIS, Windows Services and Scheduled Tasks</li>
                    <li>A bachelor's degree in Computer Information Systems, a field related to the position, or a combination of related education and work experience in DevOps Engineering, or Configuration management equivalent to four years</li>
                    <li>Preferred: Microsoft Certified Azure Administrator Associate</li>
                </ul>
                `
            },
            {
                name: "DevOps Engineer II",
                description: `
                <h3>Summary</h3>
                PulteGroup, Inc. is looking to expand our team of talented Information Technology professionals. We have an excellent reputation as a great place to work with an open, collaborative culture. We are looking for an experienced DevOps Engineer to join our Application Delivery team. We seek a highly motivated individual with a proven track-record of delivering successful IT and business outcomes.<br>
                The DevOps Engineer will be a member of PulteGroup's Application Delivery team and will report to an IT Manager. The role will be based out of PulteGroup's corporate office extension in Tempe, AZ or corporate office in Atlanta, GA and will require collaboration and partnership with team members across multiple functions/locations.  The DevOps Engineer position will be required to work within flexible working hours with periodic evening hours necessary for deployment, support, and on-call activities.<br>
                As a DevOps Engineer, you will be responsible for the tools, frameworks, automation, processes, and services that enable the delivery of software and cloud environments to the end user.  Success in this role is defined by achieving fast and simple processes that measurably accelerate Dev to Prod cycle time.<br>
                We will help you attain your career development goals with training, mentoring, and growth opportunities.<br>
                We believe success starts with having the right people -- those who have the right attitude and aptitude. We seek out goal-oriented professionals who are creators, leaders, and pioneers. We value diversity in our workforce. By bringing together people with different backgrounds, thoughts, and life experiences, we create a competitive advantage.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Administers the tools, processes, and automation supporting cloud environments, Source Code Management, Configuration Management, Continuous Integration, Continuous Delivery, Continuous Testing, and Continuous Monitoring.</li>
                    <li>Provides direction to junior members on and off the team.</li>
                    <li>Writes automation script/code to improve build/release tools, systems, and processes.</li>
                    <li>Creates and maintains automated Continuous Integration/Continuous Delivery (CI/CD) pipelines.</li>
                    <li>Ensures project source materials are maintained in the version control system, including source code and attendant files and ensures that appropriate quality checks and approvals are adhered to prior to merges and promotions.  Oversees branching strategies within the source control system.</li>
                    <li>Works collaboratively with teammates, management, and application development teams to automate and continuously improve software deployment processes. Provides mentoring to application development teams on DevOps standards and processes.  Leads and participates in projects to establish and evolve DevOps practices and implement improvement plans.  Leverages understanding of IT processes and technology to provide analysis and recommendations for solutions.</li>
                    <li>Works closely with application development teams to ensure development processes follow established standards.</li>
                    <li>Identifies, recommends, and helps implement the optimal cloud resources for executing workloads and optimizing cloud spend.</li>
                    <li>Automates the creation and maintenance of cloud resources and environments via scripting and templates.</li>
                    <li>Ensures the overall quality of environments.</li>
                    <li>Works with 3rd party vendors to resolve configuration and deployment issues with off-the-shelf software.</li>
                    <li>Supports and facilitates auditing and reporting of deployment activity.</li>
                    <li>Participates in planning activities for scheduled or emergency software releases. Executes Staging and Production release activities.</li>
                    <li>Monitors CI/CD tools and processes. Troubleshoots and provides quick resolution to production related issues.  Works cross functionally to resolve issues.  Communicates status /solutions of these issues to appropriate stakeholders.</li>
                    <li>May work non-business hours and weekends to avoid impact to production systems.</li>
                    <li>Leads and participates in projects to establish and evolve DevOps practices, tools, and processes.</li>
                    <li>Updates job knowledge by studying state-of-the-art tools and best practices related to DevOps and other Information Technologies; participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>5 + years in a DevOps Engineer, Configuration Management Engineer, or similar role</li>
                    <li>Highly proficient in the development and maintenance of CI/CD pipelines using Azure DevOps and PowerShell</li>
                    <li>Intimate knowledge of scripting languages and common configuration file formats (PowerShell, xml, json, Shell, etc.)</li>
                    <li>Experience with source control systems and branching strategy (Azure DevOps, Git)</li>
                    <li>3 + years' experience implementing, configuring, maintaining, and monitoring Azure PaaS cloud resources including App Services, Application Insights, Automation Accounts, Data Factory, Function Apps, Key Vault, Logic Apps, Runbooks, SQL Server/DB/Elastic Pool, Storage, Traffic Manager</li>
                    <li>Experience with configuration and deployment of applications on Windows Servers, SQL Databases, IIS, Windows Services and Scheduled Tasks</li>
                    <li>A bachelor's degree in Computer Information Systems, a field related to the position, or a combination of related education and work experience in DevOps Engineering, or Configuration management equivalent to four years</li>
                    <li>Preferred: Microsoft Certified Azure Administrator Associate or Microsoft Certified DevOps Engineer Expert</li>
                </ul>
                `
            },
            {
                name: "DevOps Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                PulteGroup, Inc. is looking to expand our team of talented Information Technology professionals. We have an excellent reputation as a great place to work with an open, collaborative culture. We are looking for an experienced DevOps Engineer to join our Application Delivery team. We seek a highly motivated individual with a proven track-record of delivering successful IT and business outcomes.<br>
                The DevOps Engineer will be a member of PulteGroup's Application Delivery team and will report to an IT Manager. The role will be based out of PulteGroup's corporate office extension in Tempe, AZ or corporate office in Atlanta, GA and will require collaboration and partnership with team members across multiple functions/locations.  The DevOps Engineer position will be required to work within flexible working hours with periodic evening hours necessary for deployment, support, and on-call activities.<br>
                As a DevOps Engineer, you will be responsible for the tools, frameworks, automation, processes, and services that enable the delivery of software and cloud environments to the end user.  Success in this role is defined by achieving fast and simple processes that measurably accelerate Dev to Prod cycle time.<br>
                We will help you attain your career development goals with training, mentoring, and growth opportunities.<br>
                We believe success starts with having the right people -- those who have the right attitude and aptitude. We seek out goal-oriented professionals who are creators, leaders, and pioneers. We value diversity in our workforce. By bringing together people with different backgrounds, thoughts, and life experiences, we create a competitive advantage.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Administers the tools, processes, and automation supporting cloud environments, Source Code Management, Configuration Management, Continuous Integration, Continuous Delivery, Continuous Testing, and Continuous Monitoring.</li>
                    <li>Provides technical leadership, direction, and mentoring to junior members on and off the team.</li>
                    <li>Designs/Develops enterprise level automation script/code to improve build/release tools, systems, and processes.</li>
                    <li>Creates and maintains automated Continuous Integration/Continuous Delivery (CI/CD) pipelines.</li>
                    <li>Ensures project source materials are maintained in the version control system, including source code and attendant files and ensures that appropriate quality checks and approvals are adhered to prior to merges and promotions.  Plans and oversees branching strategies within the source control system.</li>
                    <li>Works collaboratively with teammates, management, and application development teams to automate and continuously improve software deployment processes. Provides mentoring to application development teams on DevOps standards and processes.  Leads and participates in projects to establish and evolve DevOps practices and implement improvement plans.  Leverages understanding of IT processes and technology to provide analysis and recommendations for solutions.</li>
                    <li>Works closely with application development teams to ensure development processes follow established standards.</li>
                    <li>Identifies, recommends, and helps implement the optimal cloud resources for executing workloads and optimizing cloud spend.</li>
                    <li>Automates the creation and maintenance of cloud resources and environments via scripting and templates.</li>
                    <li>Ensures the overall quality of environments.</li>
                    <li>Leads efforts with 3rd party vendors to resolve configuration and deployment issues with off-the-shelf software.</li>
                    <li>Supports and facilitates auditing and reporting of deployment activity.</li>
                    <li>Participates in planning activities for scheduled or emergency software releases. Executes Staging and Production release activities.</li>
                    <li>Monitors CI/CD tools and processes. Troubleshoots and provides quick resolution to production related issues.  Works cross functionally to resolve issues.  Communicates status /solutions of these issues to appropriate stakeholders.</li>
                    <li>May work non-business hours and weekends to avoid impact to production systems.</li>
                    <li>Strategizes, leads, and participates in projects to establish and evolve DevOps practices, tools, and processes. Identifies and leads process improvement efforts within the team and cross-functionally within the department.</li>
                    <li>Updates job knowledge by studying state-of-the-art tools and best practices related to DevOps and other Information Technologies; participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations.</li>
                    <li>Researches new technologies that will improve efficiency and effectiveness.</li>
                    <li>Contributes to strategic vision for DevOps and IT department.  Leads, champions, implements new strategies for the team and department.</li>
                    <li>Serves as the technical subject matter expert for DevOps and is the point of escalation for the most technically challenging issues and tasks.</li>
                    <li>Contributes to and champions PulteGroup Development best practices, methods, standards, and processes.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>10 + years in a DevOps Engineer, Configuration Management Engineer, or similar role</li>
                    <li>Expertise in the development and maintenance of CI/CD pipelines using Azure DevOps and PowerShell</li>
                    <li>Expert knowledge of scripting languages and common configuration file formats (PowerShell, xml, json, Shell, etc.)</li>
                    <li>Expertise with source control systems and branching strategy (Azure DevOps, Git)</li>
                    <li>5 + years' experience implementing, configuring, maintaining, and monitoring Azure PaaS cloud resources including App Services, Application Insights, Automation Accounts, Data Factory, Function Apps, Key Vault, Logic Apps, Runbooks, SQL Server/DB/Elastic Pool, Storage, Traffic Manager</li>
                    <li>Experience with configuration and deployment of applications on Windows Servers, SQL Databases, IIS, Windows Services and Scheduled Tasks</li>
                    <li>A bachelor's degree in Computer Information Systems, a field related to the position, or a combination of related education and work experience in DevOps Engineering, or Configuration management equivalent to four years</li>
                    <li>Preferred: Microsoft Certified Azure Administrator Associate or Microsoft Certified DevOps Engineer Expert</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Release Coordination",
        description: "This is a paragraph explaining Release Coordination",
        jobs: [
            {
                name: "Release Coordinator I",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            },
            {
                name: "Release Coordinator II",
                description: `
                <h3>Class Concept / Competency</h3>
                <br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `
            }
        ]
    }
]

export default JOB_PATHS;