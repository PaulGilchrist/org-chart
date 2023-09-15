const JOB_PATHS = [
    {
        name: "Leadership",
        description: "",
        jobs: [
            {
                name: "IT Supervisor",
                description: `
                <h3>Class Concept / Competency</h3>
                Plans, directs, & coordinates activities pertaining to functional area team members in supporting roles for the IT department.<br>
                Primary function is to provide day-to-day coaching of team members.<br>
                Assists functional Manager with people management & staffing, & may lead internal team initiatives.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Leads internal team initiatives of low-to-moderate complexity: develops informal project plans & manages risk.</li>
                    <li>Supports recruiting with Manager. May assist in identifying resource needs & crafting job postings; may work with recruiters on vetting candidates; participates in interview process.</li>
                    <li>Provides first-level supervisory oversight of support team members.</li>
                    <li>Works with individuals to develop goals in line with department & team objectives.</li>
                    <li>Provides input to mid-year & year-end performance reviews. Assists Manager with delivering reviews to team members. Monitors day-to-day performance to Performance Improvement Plans when one exists.</li>
                    <li>Facilitates meetings to effectively build consensus or solve issues across functional &/or geographical areas.</li>
                    <li>Approves & tracks PTO/Vacation requests in accordance with HR policies.</li>
                    <li>Retains system access & performs technical support duties within functional area.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience.</li>
                    <li>Minimum of 3 years of experience in at least two distinct technical areas.</li>
                    <li>Working knowledge of a variety of systems & technical specialties.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Team Lead",
                description: `
                <h3>Class Concept / Competency</h3>
                Plans, directs, & coordinates activities pertaining to functional area team members in engineering & development roles for the IT department.<br>
                Provides day-to-day coaching of team members.<br>
                Assists functional Manager with people management & staffing & leads team initiatives.<br>
                Assigns & assures team members meet commitments that impact key milestones for critical business projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Leads internal team initiatives of moderate-to-high complexity: develops formal project plans & manages risk.</li>
                    <li>Supports recruiting with Manager. Assists in identifying resource needs & crafting job postings; may work with recruiters on vetting candidates; participates in interview process including making recommendations on hiring.</li>
                    <li>Works with individuals to develop goals in line with department & team objectives.</li> 
                    <li>Writes mid-year & year-end performance review for Manager's approval & delivers review to team members with Manager. Drafts Performance Improvement Plans as needed for Manager approval & monitors performance to plan.</li>
                    <li>Leads problem management teams comprised of senior engineering resources in solving high-complexity, high-impact enterprise issues</li>
                    <li>Approves & tracks PTO/Vacation requests in accordance with HR policies.</li>
                    <li>May retain system access & perform limited technical support &/or development duties within functional area.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience.</li>
                    <li>Minimum of 3 years of experience in at least two distinct technical areas, at least one directly related to engineering or development.</li>
                    <li>Minimum of 2 years of leadership experience.</li>
                    <li>Working knowledge of a variety of systems & technical specialties.</li>
                    <li>Working knowledge of software development lifecycle &/or project management methodologies.</li>
                    <li>Broad understanding of business practices & operations.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Manager",
                description: `
                <h3>Class Concept / Competency</h3>
                Contributes to information technology strategies by managing staff & directing the implementation of technological solutions across diverse teams.<br>
                Recommends & implements information technology strategies, policies, & procedures within functional unit; participates in implementation across functional units.<br>
                A key focus of this position is managing & developing staff & unit budget to achieve strategic department & team goals.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>This position manages work across multiple information systems & projects.</li>
                    <li>Recruits, selects, coaches, & develops team leadership, engineering, & support staff within the IT department. Manages professional growth & develop plans.</li>
                    <li>Works with senior leadership to develop team goals in line with department objectives.</li>
                    <li>Conducts performance & development reviews per HR guidelines. Takes corrective actions, including Performance Improvement Plans & terminations, when necessary.</li>
                    <li>May lead problem management teams comprised of senior engineering resources in solving high-complexity, high-impact enterprise issues.</li>
                    <li>Translates & champions IT strategy to functional unit.</li>
                    <li>Achieves financial objectives by forecasting requirements, preparing an annual budget, scheduling expenditures, analyzing variances & initiating corrective action within functional unit.</li>
                    <li>Maintains organization's effectiveness & efficiency by supporting strategic plans for implementing & supporting information technologies.</li>
                    <li>Assists with defining enterprise IT policies & procedures to ensure the protection of information assets.</li>
                    <li>Approves & tracks PTO/Vacation requests in accordance with HR policies.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience.</li>
                    <li>Minimum of 3 years of progressive technical experience.</li>
                    <li>Minimum of 5 years of progressive leadership experience.</li>
                    <li>Thorough knowledge of software development lifecycle & project management methodologies.</li>
                    <li>Broad understanding of business practices & operations.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Sr. Manager / BRM",
                description: `
                <h3>Class Concept / Competency</h3>
                Maintains information technology strategies by managing staff & researching & directing the implementation of technologically strategic solutions across technically diverse teams.<br>
                Recommends & implements information technology strategies, policies, & procedures by evaluating organization outcomes identifying problems, evaluating trends, & anticipating requirements.<br>
                The senior management position is defined by the depth & complexity of the areas of responsibility along with the strategic responsibilities to the company's success.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>This position manages multiple strategic information systems & projects for the organization & ensures the continuous delivery & operation of integrated information systems.</li>
                    <li>Recruits, selects, coaches & develops team leadership, project managers, architects, engineering & support staff within the IT department. Manages professional growth & develop plans. Mentors other leaders within the department.</li>
                    <li>Works with senior leadership to develop team goals in line with department objectives.</li>
                    <li>Conducts performance & development reviews per HR guidelines.  Takes corrective actions, including Performance Improvement Plans & terminations, when necessary.</li>
                    <li>Remains continuously aware of major business, technical, & infrastructure issues, & provides guidance & support.</li>
                    <li>Interacts with business stakeholders, IT Architects, Project Managers & leadership groups to ensure outcomes align with & enable business strategy.</li>
                    <li>Achieves financial objectives by forecasting requirements, preparing an annual budget, scheduling expenditures, analyzing variances & initiating corrective action within functional unit.</li>
                    <li>Contributes to the planning of the overall IT budget.</li>
                    <li>Maintains organization's effectiveness & efficiency by defining, delivering, & supporting strategic plans for implementing information technologies.</li>
                    <li>Collaborates with business stakeholders to define & maintain enterprise IT policies & procedures to ensure the protection of information assets.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience.</li>
                    <li>Minimum of 5 years of progressive technical experience.</li>
                    <li>Minimum of 10 years of progressive leadership experience, managing in a large department.</li>
                    <li>Thorough knowledge of software development lifecycle & project management methodologies.</li>
                    <li>In-depth understanding of business practices & operations.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Director",
                description: `
                <h3>Class Concept / Competency</h3>
                With the CIO & business partners, develops long-term systems & strategic growth plans. Develops & executes vision & strategy aligned with the company's business goals.<br>
                Responsible for capitalizing on opportunities for solutions-oriented thinking with a focus on collaborative processes & relationship structures.<br>
                Plans & manages the full portfolio of IT & business process work.<br>
                Acts as a visionary & proactively assists in defining direction for future projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Plans, directs, & coordinates activities pertaining to technology & business unit projects on an enterprise-wide level.</li>
                    <li>Recruits, selects & develops managers (functional &/or business relationship), project managers, architects & other leadership roles within the IT department.</li>
                    <li>Remains continuously aware of major business, technical, & infrastructure issues, & provides guidance & support.</li>
                    <li>Provides strategic input to the Executive Management team for the technology direction for business functions & geographic business segments. Ensures business objectives & operating model are understood & factored into IT strategy.</li>
                    <li>Develops & oversees annual & ongoing IT budgets for functional business units within the department.</li>
                    <li>Establishes alignment between business objectives, IT objectives, financials, & organization.</li>
                    <li>Ensures the currency, quality, & integrity of information & provides consistency across the organization.</li>
                    <li>Integrates knowledge & trends from the market into a strategy with elements that will benefit PulteGroup.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience.</li>
                    <li>Minimum of 12 years of progressive leadership experience, managing in a large department.</li>
                    <li>Thorough knowledge of IT governance & IT operations with a clear understanding of how an IT organization operates in alignment with business processes.</li>
                    <li>Superior ability to clearly articulate strategic benefits & value propositions to Executive Management.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
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
        description: "",
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
                Entry-level specialist is responsible for processing, coding, and analyzing vendor invoices and maintaining excellent relationships with internal customers and vendors.  May also include office management responsibilities.<br>
                Incumbent at this level has a knowledge of fundamental concepts, practices, and procedures.  Works under direct supervision and/or on routine assignments, the problems of which can be resolved with defined guidelines and parameters.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Serves as a specialist in the area of processing orders, invoices and inquiries for one or more of the following: cellular, data, voice, computers, equipment, maintenance, etc.</li>
                    <li>May handle daily office-related responsibilities.</li>
                    <li>Handles external vendor inquiries and internal questions regarding process or status.</li>
                    <li>Research billing disputes with external and internal accounting departments for successful resolution.</li>
                    <li>With guidance, participates in process improvement efforts within the Finance & Administration team.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Minimum of 1 – 3 years processing invoices preferred.  Knowledge of auditing and accounting principles required.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Admin Specialist II",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for processing, coding, analyzing and auditing vendor invoices and maintaining excellent relationships with internal customers and vendors.<br>
                Incumbent at this level is a learned professional responsible for resolving problems of moderate difficulty through analyzing possible solutions utilizing standard procedures. Works under limited supervision. Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Serves as the lead in the area of processing orders, invoices and inquiries for one or more of the following:  cellular, data, voice, computers, equipment, maintenance, etc.</li>
                    <li>Handles external vendor inquiries and internal questions regarding process or status.</li>
                    <li>Research billing disputes with external and internal accounting departments for successful resolution.</li>
                    <li>May provide training and technical guidance to less experienced staff.</li>
                    <li>Participates in process improvement efforts within the Finance & Administration team.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of processing invoices for 3 – 5 years, knowledge of auditing and accounting.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Provisioning Specialist",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for the provisioning of data and voice connectivity and other products and services for the company.<br>
                Incumbent at this level is a learned professional responsible for resolving problems of moderate to severe difficulty through analyzing possible solutions utilizing standard procedures. Works under limited supervision. Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Serves as an expert in the area of provisioning services for the field and for the company.</li>
                    <li>Coordinates installs, moves and disconnects with local and national vendors for all data and voice services for Pulte sites.</li>
                    <li>Create assets and maintains them in our tracking software.</li>
                    <li>Partner with Field SE's to ensure services and products are ordered and installed in a timely fashion.</li>
                    <li>Technical knowledge of support applications.</li>
                    <li>Participates in process improvement efforts within the Finance & Administration team.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of provisioning for 3 -5 years.</li>
                    <li>Prefer knowledge of procurement and asset tracking applications.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Contracts Specialist",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for the IT function of contract administration and vendor management.<br>
                Incumbent at this level is a technical expert in a critical service.  Work is often driven by strategic business or strategic internal projects.  Guidance generally provided through members of the Leadership team.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Responsible for monitoring, negotiating and tracking all functions of IT contract administration.</li>
                    <li>Perform reviews of the following:  purchases, software licenses, professional services, and maintenance and support agreements.</li>
                    <li>Work with Legal to ensure adherence to language and terms.</li>
                    <li>Track and project costs for maintenance agreements to ensure the costs are correctly recorded in the IT budget.</li>
                    <li>Manage relationships with external vendors.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of IT contract management.</li>
                    <li>Minimum of 5 plus years' experience working with contracts with proven ability to interpret complex policy, legal and contractual or regulatory procurement requirements.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
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
        description: "",
        jobs: [
            {
                name: "Project Manager",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for planning, organizing, facilitating and managing the activities of a project team throughout the solution delivery lifecycle.<br>
                Is an educated professional responsible for managing a portfolio of projects of moderate complexity and enterprise-scale impact.  Organizes and monitors teams of medium to large size.<br>
                Works under limited supervision. Professional guidance required for unusual or complex problems or projects.<br>
                Has enough technical insight to be considered a credible leader for development or engineering teams, to facilitate resolution of product issues, and to evaluate complex project issues and risks.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Manages project initiation activities including development of project management and communication plans, identify stakeholders, secure project resources, and facilitate project kick-off</li>
                    <li>Interacts with cross-functional teams to plan solution releases, testing coordination and implementation of final product.</li>
                    <li>Manages project risk, issues and activities to ensure project goals, budget, deadline, scope and quality are achieved. Remove blocks and assists with problem resolution or risk mitigation as needed.</li>
                    <li>Establishes vendor relationships through product evaluation, selection, and creation of Request for Proposal (RFP).</li>
                    <li>Participates in the creation and maintenance of budget throughout the project lifecycle</li>
                    <li>Actively contributes in the expansion of the PM discipline across the organization through various learning and development initiatives and provides guidance to other PMs.</li>
                    <li>Ensures project is progressing as planned through constant prioritization, cost, scope, change and quality management</li>
                    <li>Completes project closure activities to formalize and communicate the project acceptance. Hands over documentation and ongoing activities to accountable teams.</li>
                    <li>Conducts a retrospective project review to identify areas of improvement</li>
                    <li>Applies and holds team accountable to the use of Pulte's standard project and functional practices, procedures, and use of tools</li>
                    <li>Identifies and implements the methodology, tools and templates used and sets expectations on how the project will be executed</li>
                    <li>Oversees and supports the creation of the WBS (Work Breakdown Structure) for the project</li>
                    <li>May participate in the discovery and selection of external staffing resources</li>
                    <li>Ensures project deliverables are in alignment with compliance objectives and participates in audit processes.</li>
                    <li>Oversees escalated product support including on-call (after-hours, weekends, and holidays) for high priority issues.</li>
                    <li>Participates in the continuous employee review process by providing specific input regarding team member performance</li>
                    <li>Within project team, identifies process gaps or areas for improvement and recommends or implements solutions.</li>
                    <li>Coordinates and oversees onboarding of new project team members including system, tools and project methodology training</li>
                    <li>Provides project status and KPI reports to IT leadership</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of project management equal to four years.</li>
                    <li>Minimum of 5 years of experience required in a Project Manager, Project Coordinator or equivalent role.</li>
                    <li>PMI-PMP, PMI-ACP or equivalent strongly preferred</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Sr. Project Manager",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for planning, organizing, facilitating and managing a broad range of highly complex and enterprise-scale projects and/or solution implementations.<br>
                Contribution is felt across a wide array of project and program efforts within the IT department. Individual is known and recognized within the department for breadth of knowledge and contributions.<br>
                Is an educated and highly experienced professional competent to work at the highest professional level. Manages a portfolio of projects and programs involving medium and large teams.<br>
                Considers the current and future business environment in the planning and delivery of a project/solution. Brings enterprise-level perspective to planning and organization of projects.  Normally works under general guidance without direct oversight.<br>
                Has considerable technical insight and is considered a credible leader for development or engineering teams, to facilitate resolution of product issues, and to evaluate complex project issues and risks.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Manages project initiation activities including development of project management and communication plans, identify stakeholders, secure project resources, and facilitate project kick-off</li>
                    <li>Interacts with cross-functional teams to plan solution releases, testing coordination and implementation of final product.</li>
                    <li>Manages project risk, issues and activities to ensure project goals, budget, deadline, scope and quality are achieved. Remove blocks and assists with problem resolution or risk mitigation as needed.</li>
                    <li>Holistically manages vendor relationships through product evaluation, selection, creation of Request for Proposal (RFP), negotiation, and closure.</li>
                    <li>Produces project budgets and submits to leadership for rollup into department budgets; manages project budget throughout the project lifecycle</li>
                    <li>Contributes to the development of the Project Manager competency, drives the expansion of the PM discipline across the organization through various learning and development initiatives, and formally mentors other PMs.</li>
                    <li>Ensures project/program is progressing as planned through constant prioritization, cost, scope, change and quality management</li>
                    <li>Completes project/program closure activities to formalize and communicate the project acceptance. Hands over documentation and ongoing activities to accountable teams.</li>
                    <li>Conducts a retrospective project/program review to identify areas of improvement</li>
                    <li>Applies and holds team accountable to the use of Pulte's standard project and functional practices, procedures, and use of tools</li>
                    <li>Identifies, implements, and adapts the methodology, tools, and templates used for a project and sets expectations on how the project will be executed based on the team's dynamic, personnel, and context</li>
                    <li>Oversees and supports the creation of the WBS (Work Breakdown Structure) for the project</li>
                    <li>Collaborates with leadership to identify and select external staffing partners and helps manage the partner relationship</li>
                    <li>Ensures project deliverables are in alignment with compliance objectives and participates in audit processes.</li>
                    <li>Oversees escalated product support including on-call (after-hours, weekends, and holidays) for high priority issues.</li>
                    <li>Participates in the continuous employee review process by providing specific input regarding team member performance</li>
                    <li>Within project/program team, identifies process gaps or areas for improvement across all functional areas and drives solution implementation</li>
                    <li>Coordinates and oversees onboarding of new project team members including system, tools and project methodology training</li>
                    <li>Defines and implements project KPI's in addition to providing project/program status and KPI reports to IT and business leadership</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of project management equal to four years.</li>
                    <li>PMI-PMP, PMI-ACP, PMI-PfMP, PMI-PgMP or recognized equivalent required.</li>
                    <li>Minimum of 10 years of experience required in a Project Manager, Program Manager, Portfolio Manager or equivalent role.</li>
                    <li>Demonstrated ability to exceed expectations of the Project Manager role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Systems Analyst",
        description: "",
        jobs: [
            {
                name: "Systems Analyst I",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for functional requirements of applications, websites, databases and systems, providing second-level technical support, testing and defect management.  Participates in team initiatives while simultaneously participating in multiple IT project efforts.<br>
                Incumbent at this level has a knowledge of fundamental concepts, practices, and procedures. Works under guidance and/or on routine assignments, the problems of which can be resolved with defined guidelines and parameters.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts analysis of business and functional requirements.</li>
                    <li>Designs, tests, implements and documents system solutions according to approved standards/procedures.</li>
                    <li>Conducts analysis of system data, integration, reporting and processes.</li>
                    <li>Provides recommendations and documents solutions according to approved standards/procedures.</li>
                    <li>Prepares, maintains and archives detailed systems design specifications according to approved standards/procedures.</li>
                    <li>Provides defect management of applications, systems, databases, or websites.</li>
                    <li>Provides escalated (Tier 2) application support including on-call (after hours, weekends, holidays) for priority issues.  Troubleshoots production issues.</li>
                    <li>Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Participates in process improvement efforts within the Systems Analysis team or IT organization.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of systems analysis to equal four years.</li>
                    <li>Minimum of 2 years' experience required in a Systems Analyst role.</li> 
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Systems Analyst II",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides systems analysis for moderately complex applications, websites, databases and systems, defect management and provides second-level technical support.  Leads team initiatives and participates simultaneously participating in multiple IT project efforts.<br>
                Incumbent at this level is a learned professional responsible for systems analysis on projects of moderate difficulty through analyzing possible solutions utilizing standard procedures. Works under limited guidance.  Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts analysis of business and functional requirements.</li>
                    <li>Designs, tests, implements and documents system solutions according to approved standards/procedures.</li>
                    <li>Conducts analysis of system data, integration, reporting and processes.</li>
                    <li>Provides recommendations and documents solutions according to approved standards/procedures.</li>
                    <li>Serves as the application subject matter expert, researches and implements functional design solutions of applications, systems, databases, or websites.</li>
                    <li>Predicts potential problems for delivered applications and/or systems and provides recommended solutions.</li>
                    <li>Reviews project proposals; identifies potential problem areas, and recommends optimum approaches for project path, utilizing specific area of technical expertise.</li>
                    <li>Prepares, maintains and archives detailed systems design specifications according to approved standards/procedures.</li>
                    <li>Develops or modifies project systems analysis artifacts using disciplined processes, procedures and standards.</li>
                    <li>Provides escalated (Tier 2) application support including on-call (after hours, weekends, holidays) for priority issues.</li>
                    <li>Troubleshoots complex production issues. Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Conducts analysis for the evaluation and selection of new analysis solutions and tools.</li>
                    <li>Leads training and provides functional guidance to less experienced Systems Analysts.</li>
                    <li>Leads process improvement efforts within the Systems Analysis team or IT organization.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of systems analysis to equal four years.</li>
                    <li>Minimum of 5 years' experience required in a Systems Analyst role.  Demonstrated ability to exceed expectations of the SA I role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Systems Analyst III",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides systems analysis for highly complex applications, programs, websites, databases, and systems.  Contribution is felt across a breath of development efforts within the Department. Individual is known and recognized within the Department for breadth of contributions.<br>
                Incumbent at this level is an experienced professional competent to work at the highest technical level. Considers the current and future business environment in the design and maintenance of systems. Brings Enterprise level perspective to the business process and system functions.  Normally works under general guidance.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts analysis of business and functional requirements. Designs, tests, implements and documents system solutions according to approved standards/procedures.</li>
                    <li>Conducts analysis of system data, integration, reporting and processes.</li>
                    <li>Provides recommendations and documents solutions according to approved standards/procedures.</li>
                    <li>Serves as the application and technical subject matter expert.</li>
                    <li>Provides expertise on the resolution of the most complex system design and integration problems, which often requires analysis of unique issues and/or adapting non-traditional approaches.</li>
                    <li>Implements functional and technical solutions of applications, systems, databases, or websites.</li>
                    <li>Leads forward-looking, long-term application function, integration and maintenance strategies.</li>
                    <li>Anticipates and leads change in specific technical areas of focus.</li>
                    <li>Provides functional training, procedural and technical guidance to less experienced staff.</li>
                    <li>Leads the selection and evaluation of systems analysis software solutions and tools.</li>
                    <li>Provides escalated (Tier 2) application support including on-call (after hours, weekends, holidays) for priority issues.</li>
                    <li>Troubleshoots complex production issues. Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Contributes to and champions PulteGroup Systems Analysis best practices, methods, standards, and processes.</li>
                    <li>Identifies and leads process improvement efforts within the Systems Analysis team.</li>
                    <li>May perform any listed SA II responsibility given specific project/work assignment.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of systems analysis to equal four years.</li>
                    <li>Minimum of 10 years' experience required in a Systems Analyst role.  Demonstrated ability to exceed expectations of the SA II role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
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
        description: "",
        jobs: [
            {
                name: "QA Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for verifying applications, websites, databases and systems, defect management and providing second-level technical support.  Participates in team initiatives while simultaneously participating in multiple IT project efforts.<br>
                Incumbent at this level has a knowledge of fundamental quality assurance concepts, practices, and procedures. Works under guidance and/or on routine assignments, the problems of which can be resolved with defined guidelines and parameters.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts analysis of business and functional requirements.</li>
                    <li>Conducts a full range of testing tasks including test strategy, plan and script design, execution and quality documentation for a variety of applications, systems, databases, or websites.</li>
                    <li>Provides defect management of applications, systems, databases, or websites.</li>
                    <li>Reviews application features and functions.  Recommends test automation candidates.</li>
                    <li>Provides escalated (Tier 2) application support including on-call (after hours, weekends, holidays) for priority issues.  Troubleshoots production issues.</li>
                    <li>Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Develops or modifies project quality artifacts using quality disciplined processes, procedures and standards.</li>
                    <li>Participates in process improvement efforts within the Quality team or IT organization.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of software testing to equal four years.</li>
                    <li>Minimum of 2 years' experience required in a Software Quality Assurance role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "QA Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides quality assurance for moderately complex applications, websites, databases and systems, defect management and provides second-level technical support.  Leads team initiatives and participates simultaneously participating in multiple IT project efforts.<br>
                Incumbent at this level is a learned professional responsible for quality assurance on projects of moderate difficulty through analyzing possible solutions utilizing standard procedures. Works under limited guidance. Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts analysis of business and functional requirements.</li>
                    <li>Conducts a full range of testing tasks including test strategy, plan and script design, execution and quality documentation for a variety of applications, systems, databases, or websites.</li>
                    <li>Leads and implements defect management solutions of applications, systems, databases, or websites.</li>
                    <li>Reviews application features and functions and verifies test automation solutions.</li> 
                    <li>Provides expertise on the quality methodology and recommends testing approaches.</li>
                    <li>Provides escalated (Tier 2) application support including on-call (after hours, weekends, holidays) for priority issues.</li>
                    <li>Troubleshoots complex production issues. Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Conducts analysis for the evaluation and selection of new quality software solutions and tools.</li>
                    <li>May function as project Quality Lead. May provide training and technical guidance to less experienced QA Engineers.</li>
                    <li>May perform test automation tasks under the guidance of the QAE III.</li>
                    <li>Participates in process improvement efforts within the Quality team or IT organization.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of software testing to equal four years.</li>
                    <li>Minimum of 5 years' experience required in a Software Quality Assurance role.</li>
                    <li>Demonstrated ability to exceed expectations of the QAE I role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "QA Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for developing, coding, testing, debugging, and documenting quality automation tests for highly complex applications, programs, websites, databases, and systems.  Contribution is felt across a breath of development efforts within the Department. Individual is known and recognized within the Department for breadth of contributions.<br>
                Incumbent at this level is an experienced professional competent to work at the highest technical level. Considers the current and future business environment in the design and maintenance of systems. Brings Enterprise level perspective to quality solutions.  Normally works under general guidance.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts a full range of testing tasks including test automation design, development, debugging, and documentation for a variety of applications, systems, databases, or websites.</li>
                    <li>Serves as a technical subject matter expert through all phases of quality assurance.</li>
                    <li>Designs and develops test automation, performance, API and regression solutions that meet present and future business needs.</li>
                    <li>Reviews application test automation for quality assurance and checks compliance with development standards.</li>
                    <li>Determines the quality testing methodology and provides expertise on the quality methodology and recommends testing approaches</li>
                    <li>Leads the selection and evaluation of quality software solutions and tools.</li>
                    <li>Provides training, procedural and technical guidance to less experienced staff.</li>
                    <li>Contributes to and champions PulteGroup Quality best practices, methods, standards, and processes per the IT Strategy.</li>
                    <li>Identifies and leads process improvement efforts within the Quality team.</li>
                    <li>May perform any listed QAE II responsibility given specific project/work assignment.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the area of software testing to equal four years.</li>
                    <li>Minimum of 10 years' experience required in a Software Quality Assurance role.</li>
                    <li>Demonstrated ability to exceed expectations of the QAE II role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Software Development",
        description: "",
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
                Responsible for developing, coding, testing, debugging, and documenting applications, programs, websites, databases, and systems.<br>
                Performs work associated with the design, implementation or delivery of processes, programs and policies using specialized knowledge and skills typically acquired through advanced education and work experience.<br>
                Works independently with general supervision. Problems faced are difficult but typically not complex. May influence others within the job area through explanation of facts, policies, and practices.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts a range of programming tasks including development, debugging, estimating, unit testing, and documentation for a variety of applications, systems, databases, or websites.</li>
                    <li>Provides ongoing maintenance of applications, systems, databases, or websites.</li>
                    <li>Provides application support including on-call (after hours, weekends, holidays) for priority issues.</li>
                    <li>Troubleshoots production issues. Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Assists with systems analysis and preparation of detailed systems design specifications.</li>
                    <li>Participates in process improvement efforts within teams.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the areas of application/web /systems/database development to equal four years.</li>
                    <li>Minimum of 2 years of experience required in a Software Developer role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Software Developer II",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for developing, coding, testing, debugging, and documenting moderately complex applications, programs, websites, databases, and systems.<br>
                Manages or performs work associated with the design, implementation or delivery of processes, programs and policies using advanced knowledge of job area typically obtained through advanced education and work experience.<br>
                Responsibilities may include managing projects or processes, coaching, and reviewing the work of lower-level professionals.<br>
                May lead projects or project steps within a broader project.  May direct the work of other lower-level professionals and act as a resource for colleagues with less experience.<br>
                Individual may serve as a subject matter expert for certain areas of the application, for technologies and integrations, or business processes.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts a full range of programming tasks including program design, development, debugging, estimating, unit testing, and documentation for a variety of applications, systems, databases, or websites.</li>
                    <li>Gathers and interprets system requirements and develops detailed system specifications.</li>
                    <li>Formulates and documents design alternatives and recommendations.</li>
                    <li>Designs, implements, and executes test plans. Prepares systems test data and prepares program documentation.</li>
                    <li>Reviews application modules and checks compliance with application architecture standards.</li>
                    <li>Provides ongoing maintenance of applications, systems, databases, or websites.</li>
                    <li>Provides application support including on-call (after hours, weekends, holidays) for priority issues.</li>
                    <li>Troubleshoots complex production issues. Evaluates and follows through on issues and problems until resolved or escalated.</li>
                    <li>Conducts analysis to determine and plan for new programs, system integrations, or system upgrades.</li>
                    <li>Conducts analysis for the evaluation and selection of new vendor software solutions and packages.</li>
                    <li>May provide training and technical guidance to less experienced staff.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the areas of application/web /systems/database development to equal four years.</li>
                    <li>Minimum of 5-7 years of experience required in a Software Developer role.</li>
                    <li>Demonstrated ability to exceed expectations of the SD I role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Software Developer III",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for developing, coding, testing, debugging, and documenting a broad range of highly complex applications, programs, websites, databases, and systems.<br>
                Most of the time is spent managing the design, implementation or delivery of processes, programs and policies using advanced knowledge of job area typically obtained through advanced education and work experience.<br>
                Responsibilities typically include managing large projects or processes with limited oversight from manager, coaching, reviewing, and delegating work to lower-level professionals.<br>
                Leads development efforts within team, has expert understanding of critical software development efforts across team, and supports the software development function within the organization. Considers the current and future business environment of systems bringing enterprise-level perspective to designs and solutions.<br>
                Contribution is felt across a breath of development efforts within the solutions delivery team. Individual is often utilized as a subject matter expert.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Conducts a full range of programming tasks including program design, development, debugging, estimating, unit testing, and documentation for a variety of applications, systems, databases, or websites.</li>
                    <li>Serves as a technical subject matter expert through all phases of system analysis and development.</li>
                    <li>Collaborates with team leadership to design and develop well-integrated, enterprise-level solutions that meet present and future business needs.</li>
                    <li>Determines testing methodology and manages the development and execution of comprehensive test plan.</li>
                    <li>Reviews application modules and checks compliance with application architecture standards.</li>
                    <li>Provides application support including on-call (after hours, weekends, holidays) for priority issues.</li>
                    <li>Serves as escalation point for resolving highly complex and non-routine production, application, or website issues.</li>
                    <li>Leads the selection and evaluation of vendor software solutions and packages.</li>
                    <li>Typically functions as project development Lead.</li>
                    <li>Leads knowledge sharing and shared understanding amongst development team.</li>
                    <li>Provides mentoring, training, procedural and technical guidance to less experienced staff.  This includes documentation of technical designs and decisions and assuring technical knowledge is shared with all development team members.</li>
                    <li>Works with software development manager, senior technologists, and business relationship manager to set and track delivery and development goals for individuals on team.</li>
                    <li>Contributes to and champions PulteGroup Development best practices, methods, standards, and processes.</li>
                    <li>Identifies and leads process improvement efforts within teams.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the areas of application/web /systems/database development to equal four years.</li>
                    <li>Minimum of 10 years of experience required in a Software Developer role.</li>
                    <li>Demonstrated ability to exceed expectations of the SD II role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Senior Technologist",
                description: `
                <h3>Class Concept / Competency</h3>
                Serves as the top-level technical expert for mission-critical, strategically focused applications, programs, websites, databases, and systems.  Responsible for developing, coding, testing, debugging, and documenting these systems.<br>
                Individual is a thought leader and technical expert in a critical service or technology and has comprehensive knowledge in specific or multiple functional/technical areas.<br>
                Work is often driven by strategic business or strategic internal projects.  Guidance generally provided through members of the Executive and/or Architecture team.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Responsible for providing architectural guidance to application development teams that result in team's ability to address key architectural drivers including performance, scalability, maintainability, and security.</li>
                    <li>Responsible for knowledge sharing efforts including active participation in the software development community COE and developer community documentation.</li>
                    <li>Conducts a full range of programming tasks including program design, development, debugging, estimating, unit testing, and documentation for a variety of applications, systems, databases, or websites.</li>
                    <li>Leads forward-looking, long-term application development, integration, upgrades, and maintenance strategies. Collaborates across teams to effectively identify and mitigate cross-team impacts of application features and data flow.</li>
                    <li>Anticipates and leads change in specific technical area of focus.</li>
                    <li>Reviews system requirements, design, and business processes to ensure alignment with IT and business strategies and architectural standards.</li>
                    <li>Works closely with Architects on development of POC's.</li>
                    <li>Provides oversight for contracting teams to evaluate and assure effective use of resources.</li>
                    <li>Provides expertise on the resolution of the most complex technical design and system integration problems, which often requires analysis of unique issues and/or adapting non-traditional approaches.</li>
                    <li>Works with software development manager and enterprise architect to set architectural and development goals for individuals on teams of supported applications.</li>
                    <li>Regularly provides technical leadership for large-scale and cross-functional projects with great latitude on project execution.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position or a combination of related education and work experience in the areas of application/web /systems/database development to equal four years.</li>
                    <li>Minimum of 10 years of experience required in a Software Developer role.</li>
                    <li>Demonstrated ability to exceed expectations of the SD III role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Training",
        description: "",
        jobs: [
            {
                name: "IT Learning Specialist I",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for the development of training plans, determining instructional strategies and methods and developing learning materials.<br>
                Participates in team initiatives while simultaneously participating in multiple IT efforts.<br>
                Has working knowledge of instructional strategy, techniques and design.  Strong written and verbal communication skills.  Ability to engage users and provide a valuable learning experience.<br>
                Works under direct supervision and routine assignments.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Defines project goals and objectives based on the training plan.</li>
                    <li>Participates on project teams.</li>
                    <li>Develops learning materials, including self-guided training material, instructor-led presentations and web-based e-learning modules and documentation.</li>
                    <li>Keeps learning materials up to date.</li>
                    <li>Coordinates scheduling and manages logistics of all learning sessions and materials in alignment with the training plans.</li>
                    <li>Delivers training across markets per project and implementation schedules.</li>
                    <li>Provides support for all training related questions.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position.</li>
                    <li>Minimum of 2 years' experience required in a related role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Learning Specialist II",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for leading the development of training plans, determining instructional strategies and methods and developing learning materials.<br>
                Leads team initiatives while simultaneously participating in multiple IT efforts.<br>
                Learned professional of instructional strategy, techniques and design.  Strong written and verbal communication skills.<br>
                Ability to engage users and provide a valuable learning experience and to mentor others on these methods.<br>
                Works under limited supervision.  Guidance required for more complex assignments.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Defines project goals and objectives based on the training plan.  Participates on project teams.</li>
                    <li>Develops learning materials, including self-guided training material, instructor-led presentations and web-based e-learning modules and documentation.</li>
                    <li>Keeps learning materials up to date.</li>
                    <li>Reviews materials for less experienced Learning Specialists.</li>
                    <li>Coordinates scheduling and manages logistics of all learning sessions and materials in alignment with the training plans.</li>
                    <li>Delivers training across markets per project and implementation schedules.</li>
                    <li>Provides support for all training related questions.</li>
                    <li>Assesses training effectiveness and user competency, identifies gaps and recommends solutions for continued improvement.</li>
                    <li>Utilizes complex and modern tools, technologies and methods.</li>
                    <li>Participates in creating and updating of team best practices, methods, standards and processes.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position.</li>
                    <li>Minimum of 5 years' experience required in a related role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "IT Learning Specialist III",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for leading the development of training plans, determining instructional strategies and methods and developing learning materials.<br>
                Anticipates, creates and leads team initiatives while simultaneously participating in multiple IT efforts. Individual is known and recognized within the department for breadth of contributions.<br>
                Experienced professional of instructional strategy, techniques and design.  Strong written and verbal communication skills with all levels of the organization.<br>
                Ability to engage users and provide a valuable learning experience and to mentor others on these methods.  Strong leadership skills.<br>
                Works under general guidance without supervision.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Defines project goals and objectives based on the training plan.</li>
                    <li>Participates on project teams. Reviews training plans for less experienced Learning Specialists.</li>
                    <li>Develops learning materials, including self-guided training material, instructor-led presentations and web-based e-learning modules and documentation.</li>
                    <li>Keeps learning materials up to date.</li>
                    <li>Reviews materials for less experienced Learning Specialists.</li>
                    <li>Coordinates scheduling and manages logistics of all learning sessions and materials in alignment with the training plans.</li>
                    <li>Delivers training across markets per project and implementation schedules.</li>
                    <li>Provides support for all training related questions.</li>
                    <li>Assesses training effectiveness and user competency, identifies gaps and recommends solutions for continued improvement.</li>
                    <li>Assists less experienced Learning Specialists with this task.</li>
                    <li>Leads evaluation and selection of training tools, technologies and methods that meet present and future business needs.</li>
                    <li>Serves as an expert of these tools, technologies and methods.</li>
                    <li>Facilitates and champions team best practices, methods, standards and processes.</li>
                    <li>Train, coach and mentor other Learning Specialists.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>A bachelor's degree in a field related to the position.</li>
                    <li>Minimum of 10 years' experience required in a related role.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Implementation",
        description: "",
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
        description: "",
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
                Responsible for engineering, technical support, and technology integration services for all aspects of security-related infrastructure and software. Participates in team initiatives while simultaneously participating in multiple IT security project implementations.<br>
                Has knowledge of fundamental security concepts, practices, and procedures. Works under direct supervision and/or on routine assignments, the problems of which can be resolved with defined guidelines and parameters.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Daily support of engineering services to scope, design, test and deploy various security-focused infrastructure components to include next generation firewalls, network access control (NAC) solutions, spam filtering, security information event monitoring (SIEM) tools, and encryption technology.</li>
                    <li>Maintains knowledge of security best practices, compliance requirements, and threats and trends in information security.</li>
                    <li>Uses fundamental knowledge of attack techniques to develop and implement detection capabilities for indicators of compromise; correlates data to build effective SIEM alerts.</li>
                    <li>Researches and implements system hardening procedures. With guidance, configures basic firewall rules, content filtering, and security policies that work within PulteGroup's security framework.</li>
                    <li>Administers and maintains security infrastructure hardware and software, performing upgrades when appropriate.</li>
                    <li>Responds to alerts from SIEM and performs forensic analysis and escalation for identified threats. Evaluates vulnerabilities published by third party vendors or other media, and assesses risk to the company.</li>
                    <li>Participates in regularly scheduled vulnerability assessments and remediates as necessary.</li>
                    <li>Performs basic troubleshooting and diagnostics gathering to resolve moderately complex security issues as needed.</li>
                    <li>Participates in rotational on-call support.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum of 1 year of experience supporting enterprise-class security infrastructure in a datacenter environment.</li>
                    <li>Minimum of 1 year of experience working in an Information Security role.</li>
                </ul>
                `
            },
            {
                name: "IT Security Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides engineering, second level technical support, and technology integration services for all aspects of security-related infrastructure and software. Leads team initiatives and participates simultaneously in multiple IT security project implementations.<br>
                Has knowledge of advanced security concepts, practices, and procedures. Learned professional responsible for resolving security problems of moderate difficulty through analyzing possible solutions utilizing standard procedures. Works under limited supervision. Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Daily support of engineering services to scope, design, test and deploy various security-focused infrastructure components to include next generation firewalls, network access control (NAC) solutions, spam filtering, security information event monitoring (SIEM) tools, and encryption technology.</li>
                    <li>Maintains advanced knowledge of security best practices, compliance requirements, and threats and trends in information security and applies that when recommending technology solutions within the security framework.</li>
                    <li>Uses strong knowledge of attack techniques to develop and implement detection capabilities for indicators of compromise; correlates data to build effective SIEM alerts.</li>
                    <li>Researches and implements system hardening procedures.</li>
                    <li>Configures firewall rules, content filtering, and security policies that work within PulteGroup's security framework.</li>
                    <li>Administers, maintains, and optimizes security infrastructure hardware and software, performing upgrades when appropriate.</li>
                    <li>Responds to alerts from SIEM and independently performs forensic analysis and escalation for identified threats.</li>
                    <li>Evaluates vulnerabilities published by third party vendors or other media, assesses risk to the company and determines best course of action.</li>
                    <li>Participates and/or leads regularly scheduled vulnerability assessments and remediates as necessary.</li>
                    <li>Performs advanced troubleshooting and diagnostics gathering to resolve moderately complex to complex security issues as needed.</li>
                    <li>Participates in rotational on-call support.</li>
                    <li>Provides technical leadership and mentoring to less senior members on and off the team.</li>
                    <li>Consults with other teams regarding technology solutions for business needs and/or problem resolution.</li>
                    <li>Proactively seeks out opportunities to collaborate with other IT teams on project assignments and problem escalation.</li>
                    <li>Participates in, or leads, internal security initiatives for the implementation, use, and improvement of processes, procedures, guidelines, and metrics for security systems.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum of 5 years of experience in deploying and supporting enterprise-class security infrastructure in a datacenter environment.</li>
                    <li>Minimum of 2 years of experience working in an Information Security role with exposure to mobility and cloud technologies. ISC or GIAC certification strongly preferred.</li>
                </ul>
                `
            },
            {
                name: "IT Security Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides engineering, advanced level technical support for the most complex issues, and technology integration services for security aspects of enterprise-class datacenter server, storage and virtualization infrastructure.  Leads team initiatives and participates simultaneously in multiple IT security project implementations.<br>
                Has knowledge of advanced security concepts, practices, and procedures. Experienced professional competent to work at the highest technical level. Considers the current and future business environment in the design and upgrade of systems. Brings Enterprise level security perspective to designs and solutions.  Normally works under general guidance without technical supervision.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Takes a lead role on the engineering services to scope, design, test and deploy the most complex security-focused infrastructure components to include next generation firewalls, network access control (NAC) solutions, spam filtering, security information event monitoring (SIEM) tools, and encryption technology.</li>
                    <li>Maintains expert knowledge of security best practices, compliance requirements, and threats and trends in information security and applies that when recommending technology solutions within the security framework.</li>
                    <li>Uses expert knowledge of attack techniques to develop and implement detection capabilities for indicators of compromise; correlates data to build effective SIEM alerts.</li>
                    <li>Independently researches and implements system hardening procedures.</li>
                    <li>Configures advanced firewall rules, content filtering, and security policies that work within PulteGroup's security framework.</li>
                    <li>Works with Infrastructure and Network Architects to evaluate and recommend security solutions that fit within the enterprise architecture strategy and improve the Company's security posture.</li>
                    <li>Administers, maintains, and optimizes security infrastructure hardware and software, performing upgrades when appropriate.</li>
                    <li>Responds to alerts from SIEM and independently performs forensic analysis and escalation for identified threats.</li>
                    <li>Evaluates vulnerabilities published by third party vendors or other media, assesses risk to the company and determines best course of action.</li>
                    <li>Leads regularly scheduled vulnerability assessments and remediates as necessary.</li>
                    <li>Performs advanced troubleshooting and diagnostics gathering to resolve the most complex security issues as needed.</li>
                    <li>Participates in rotational on-call support.</li>
                    <li>Leads internal initiatives for the implementation, use, and improvement of processes, procedures, guidelines, and metrics for security systems.</li>
                    <li>Provides technical leadership and mentoring to less senior members on and off the team.</li>
                    <li>Consults with other teams regarding technology solutions for business needs and/or problem resolution.</li>
                    <li>Proactively seeks out opportunities to collaborate with other IT teams on project assignments and problem escalation.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum of 10 years of experience designing, deploying, and supporting enterprise-class security infrastructure in a datacenter environment.</li>
                    <li>Experience building and maturing an enterprise Information Security program and related processes.</li>
                    <li>Minimum of 5 years of experience in an Information Security role with mobility and cloud technology experience required. ISC or GIAC certification required.</li>
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
        description: "",
        jobs: [
            {
                name: "Operations Technician",
                description: `
                <h3>Class Concept / Competency</h3>
                Provides entry-level Data Center Operations (DCO) monitoring, Wide Area Network (WAN) support, & first-level server alert response.<br>
                Also serves as a backup resource to Technical Support Center (TSC) during weekend & after-hours time periods.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Serves as generalist responsible for providing the majority of server & networking support for issues of low complexity.</li>
                    <li>Completes daily, weekly & monthly checklists for routine tasks.</li>
                    <li>Monitors tape & disk backups of servers; & responds appropriately to failures. Manages backup tape inventory & offsite tape rotation.</li> 
                    <li>Troubleshoots first-level WAN & server issues working from existing knowledge databases.</li>
                    <li>Supplements other support teams by performing customer access provisioning for new hires following documented procedures.</li>
                    <li>Monitors AS/400 jobs; performs backups & tests restores; manages tapes.</li>
                    <li>Configures, tracks & ships routers & AP's to field locations using documented procedures.</li>
                    <li>Liaises with vendors for the servicing of hardware in the data center.</li>
                    <li>Monitors access to Data Center & responds to facilities alerts on UPS, CRAC & other in-room equipment.</li>
                    <li>Racks & tracks devices & cabling; monitors rack capacity.</li>
                    <li>Installs iDRAC cards, monitors temperature, & responds to hardware alerts.</li>
                    <li>Must be willing to maintain flexible schedule including rotating evenings, nights, holidays & weekends.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Experience with wireless infrastructure, Windows Operating System (OS), user administration &/or enterprise-level monitoring software is preferred.</li>
                    <li>High school graduate or equivalent required.</li> 
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>                    
                </ul>
                `
            },
            {
                name: "Operations Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                Provides second-level Data Center Operations (DCO) monitoring, Wide Area Network (WAN) support & response to server alerts.<br>
                Serves as day-to-day administrator of system monitoring applications.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Serves as generalist responsible for providing the majority of server & networking support for issues of low-to-moderate complexity.</li>
                    <li>Specializes in the administration of one or more systems monitoring / management applications such as SCOM, Solarwinds, NetBackup or Lumension.</li>
                    <li>Troubleshoots second-level WAN & server issues working from existing knowledge databases.</li>
                    <li>Creates, documents & maintains procedures for configuring metro routers & AP's including dhcp scopes, security lockdowns, & Zscaler settings.</li>
                    <li>Proactively leads process improvements to automate processes such as site connectivity turn-ups, & configuration updates.</li>
                    <li>Manages Pulte's inventory of broadband & wireless site routers including configures, tracks & ships routers & AP's to field locations.</li>
                    <li>Create documented procedures for less senior team members.</li>
                    <li>Liaises with vendors for ordering, installation & servicing equipment & systems in the data center.</li>
                    <li>Configures new monitoring & establishes standardized settings & names for systems they administer & track.</li>
                    <li>Manages server refresh & decommissioning processes.</li>
                    <li>Must be willing to maintain flexible schedule including rotating evenings, nights, holidays & weekends.</li>
                    <li>Rotating on-call required for limited hours when the DCO is not staffed on site.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Familiarity with PowerShell required; proficiency desired.</li>
                    <li>Minimum of 1-3 years of experience in one technical specialty area such as user administration, server backups or networking required.</li>
                    <li>Associate's degree in Computer Information Systems or equivalent experience required; Bachelor's degree or equivalent experience preferred.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Infrastructure Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for engineering, second-level technical support, and technology integration services for all aspects of enterprise-class datacenter server, storage and virtualization infrastructure.  Participates in team initiatives while simultaneously participating in multiple IT project implementations.<br>
                Has knowledge of fundamental concepts, practices, and procedures. Works under direct supervision and/or on routine assignments, the problems of which can be resolved with defined guidelines and parameters.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Daily support of private and public cloud infrastructure, including enterprise servers, email systems, Storage Area Networks (SAN), and Network-Attached Storage (NAS).</li>
                    <li>Deploys virtualization solutions using private, public, and hybrid cloud technologies.</li>
                    <li>Implements proactive management and monitoring solutions using enterprise-class tools.</li>
                    <li>Builds high availability solutions for the Company's key infrastructure, including public-facing web infrastructure in a demilitarized zone (DMZ).</li>
                    <li>Implements disaster recovery solutions which includes the company's backup and recovery solution architectures.</li>
                    <li>Optimizes moderately complex infrastructure components to meet performance requirements.</li>
                    <li>Participates in internal initiatives for the implementation, use, and improvement of processes, procedures, guidelines, and metrics for infrastructure systems.</li>
                    <li>Serves as escalation point for resolving moderately complex infrastructure issues. Gathers diagnostics and troubleshoots infrastructure issues as needed. Participates in rotational on-call support.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum of 2 years of experience in deploying and supporting enterprise-class infrastructure in a large datacenter and/or cloud environment.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Infrastructure Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides engineering, third-level technical support, and technology integration services for all aspects of enterprise-class datacenter server, storage and virtualization infrastructure.  Leads team initiatives and participates simultaneously in multiple IT project implementations.<br>
                Has knowledge of advanced concepts, practices, and procedures. Learned professional responsible for resolving problems of moderate difficulty through analyzing possible solutions utilizing standard procedures. Works under limited supervision. Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Daily support of private and public cloud infrastructure, including enterprise servers, email systems, Storage Area Networks (SAN), and Network-Attached Storage (NAS).</li>
                    <li>Builds, deploys, and maintains enterprise-class datacenter server and storage infrastructure.</li>
                    <li>Plans and deploys virtualization solutions using private, public, and hybrid cloud technologies.</li>
                    <li>Plans and implements proactive management and monitoring solutions using enterprise-class tools.</li>
                    <li>Plans and builds high availability solutions for the Company's key infrastructure, including public-facing web infrastructure in a demilitarized zone (DMZ).</li>
                    <li>Plans and implements disaster recovery solutions which includes the company's backup and recovery solution architectures.</li>
                    <li>Optimizes complex infrastructure components to meet performance requirements.</li>
                    <li>Provides technical leadership and mentoring to less senior members on and off the team.</li>
                    <li>Leads internal initiatives for the implementation, use, and improvement of processes, procedures, guidelines, and metrics for Infrastructure systems.</li>
                    <li>Serves as escalation point for resolving moderately complex to complex infrastructure issues. Gathers diagnostics and troubleshoots infrastructure issues as needed. Participates in rotational on-call support.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum of 5 years of experience in deploying and supporting enterprise-class infrastructure in a large datacenter and/or cloud environment.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Infrastructure Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides engineering, advanced-level technical support for the most complex issues, and technology integration services for all aspects of enterprise-class datacenter server, storage, and virtualization infrastructure.  Leads team initiatives and participates simultaneously in multiple IT project implementations.<br>
                Has knowledge of advanced concepts, practices, and procedures. Experienced professional competent to work at the highest technical level. Considers the current and future business environment in the design and upgrade of systems. Brings Enterprise level perspective to designs and solutions.  Normally works under general guidance without technical supervision.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Escalated support of private and public cloud infrastructure, including enterprise servers, email systems, Storage Area Networks (SAN), and Network-Attached Storage (NAS).</li>
                    <li>Leads the build, deployment, and maintenance of enterprise-class datacenter server and storage infrastructure.</li>
                    <li>Independently plans and deploys virtualization solutions using private, public, and hybrid cloud technologies.</li>
                    <li>Serves as a technical subject matter expert through all phases of infrastructure support and project implementation.</li>
                    <li>Leads the selection and evaluation of core infrastructure solutions that meet present and future business needs.</li>
                    <li>Contributes to and champions PulteGroup Infrastructure best practices, methods, standards, and processes.</li>
                    <li>Designs and implements proactive management and monitoring solutions using enterprise-class tools.</li>
                    <li>Designs and builds high-availability solutions for the Company's key infrastructure, including public-facing web infrastructure in a demilitarized zone (DMZ).</li>
                    <li>Designs and implements disaster recovery solutions which includes the company's backup and recovery solution architectures.</li>
                    <li>Optimizes highly complex infrastructure components to meet performance requirements.</li>
                    <li>Provides technical leadership, guidance, and mentoring to less senior members on and off the team.</li>
                    <li>Serves as escalation point for the most complex infrastructure issues. Gathers diagnostics and troubleshoots as needed. Participates in rotational on-call support.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum of 10 years of experience in deploying and supporting enterprise-class infrastructure in a large datacenter and/or cloud environment.</li>
                    <li>These minimum requirements will also include additional criteria specific to the position.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Network Engineering",
        description: "",
        jobs: [
            {
                name: "Network Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for engineering, second-level technical support, and technology integration services for moderately complex network infrastructure including wide area networks (WAN), local area networks (LAN), secure wireless networks, firewalls, load balancers, and related devices. Participates in team initiatives while simultaneously participating in multiple IT project implementations.<br>
                Has a knowledge of fundamental concepts, practices, and procedures. Works under direct supervision and/or on routine assignments, the problems of which can be resolved with defined guidelines and parameters.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Daily support and engineering services to deploy and test various network infrastructure components and platforms to support company applications and projects, including secure wireless solutions, local and wide area networks, and enterprise-class datacenter network architecture.</li>
                    <li>Participates in implementation of disaster recovery solutions and implements proactive management and monitoring systems.</li>
                    <li>Deploys network components for private and public cloud technologies in a highly virtualized environment.</li>
                    <li>Ensures network is appropriately optimized to meet performance requirements and follow architectural standards.</li>
                    <li>Participates in internal initiatives for the implementation, use, and improvement of processes, procedures, guidelines, and metrics for network infrastructure.</li>
                    <li>Serves as escalation point for resolving moderately complex network issues. Gathers diagnostics and troubleshoots network issues as needed. Participates in rotational on-call support.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum 2 years of experience in deploying and supporting enterprise-class network infrastructure in a datacenter and large-scale WAN environment.</li>
                    <li>Minimum 1 year of experience supporting network infrastructure in a public, private, and hybrid cloud environment.</li>
                </ul>
                `
            },
            {
                name: "Network Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides engineering, second-level technical support, and technology integration services for moderately complex to complex network infrastructure including wide area networks (WAN), local area networks (LAN), secure wireless networks, firewalls, load balancers and related devices. Leads team initiatives and participates simultaneously in multiple IT project implementations.<br>
                Learned professional responsible for resolving problems of moderate difficulty through analyzing possible solutions utilizing standard procedures. Works under limited supervision. Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Uses expert knowledge to provide engineering services to scope, design, test, and deploy various network infrastructure components and platforms to support company applications and projects, including secure wireless solutions, local and wide area networks, and enterprise-class datacenter network architecture.</li>
                    <li>Implements disaster recovery solutions and proactive management and monitoring systems.</li>
                    <li>Participates in the design and deploys network components for private and public cloud technologies in a highly virtualized environment.</li>
                    <li>Ensures network is appropriately optimized to meet performance requirements in alignment with technology roadmap.</li>
                    <li>Provides mentoring to less senior members on and off the team.</li>
                    <li>Participates in, or leads, internal initiatives for the implementation, use, and improvement of processes, procedures, guidelines, and metrics for network infrastructure.</li>
                    <li>Serves as escalation point for resolving moderately complex to complex network issues. Gathers diagnostics and troubleshoots complex network issues as needed. Participates in rotational on-call support.</li>
                    <li>Analyzes metrics from complex technical security and network configurations to ensure stability, responsiveness, and efficiency of the Company's network infrastructure.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum 5 years of experience in deploying and supporting enterprise-class network infrastructure in a datacenter and large-scale WAN environment.</li>
                    <li>Minimum 2 years of experience supporting network infrastructure in a public, private, and hybrid cloud environment.</li>
                    <li>Minimum 2 years of experience implementing enterprise-class network monitoring tools.</li>
                    <li>Multi-protocol Label Switching (MPLS) experience required.</li>
                    <li>Cisco Certified Network Associate (CCNA)/ Cisco certified network professional (CCNP) or other network professional level certifications highly preferred.</li>
                </ul>
                `
            },
            {
                name: "Network Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides engineering, advanced technical support, and technology integration services for the most complex network infrastructure including wide area networks (WAN), local area networks (LAN), secure wireless networks, firewalls, load balancers and related devices. Leads team initiatives and participates simultaneously in multiple IT project implementations.<br>
                Experienced professional competent to work at the highest technical level. Considers the current and future business environment in the design and upgrade of systems. Brings Enterprise level perspective to designs and solutions.  Normally works under general guidance without technical supervision.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Takes lead role on the engineering services to scope, design, test, and deploy various network infrastructure components and platforms to support company applications and projects, including secure wireless solutions, local and wide area networks, and enterprise-class datacenter network architecture.</li>
                    <li>Designs and implements disaster recovery solutions and proactive management and monitoring systems.</li>
                    <li>Leads the design and deployment of network components for private and public cloud technologies in a highly virtualized environment.</li>
                    <li>In collaboration with Architects, ensures network strategy is optimized to meet both current and future business needs.</li>
                    <li>Provides technical leadership and mentoring to less senior members on and off the team.</li>
                    <li>Leads internal initiatives for the implementation, use, and improvement of processes, procedures, guidelines, and metrics for network infrastructure.</li>
                    <li>Serves as escalation point for resolving the most complex network issues. Gathers diagnostics and troubleshoots as needed. Participates in rotational on-call support.</li>
                    <li>Analyzes metrics from complex technical security and network configurations to ensure stability, responsiveness, and efficiency of the Company's network infrastructure.</li>
                    <li>Evaluates, recommends and leads implementation of networking components and solutions that align with the goals of Enterprise Architecture.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum 10 years of experience in deploying and supporting enterprise-class network infrastructure in a datacenter and large-scale WAN environment.</li>
                    <li>Minimum 5 years of experience supporting network infrastructure in a public, private, and hybrid cloud environment.</li>
                    <li>Minimum 5 years of experience implementing enterprise-class network monitoring tools.</li>
                    <li>Multi-protocol Label Switching (MPLS) experience required.</li>
                    <li>Cisco Certified Network Associate (CCNA)/ Cisco certified network professional (CCNP) or other network professional level certifications required.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Customer Support",
        description: "",
        jobs: [
            {
                name: "Support Technician",
                description: `
                <h3>Class Concept / Competency</h3>
                Provides entry-level customer support to end users on technical problem resolution & request management.<br>
                Processes provisioning & de-provisioning of user access to systems, utilizing tracking & documented approval procedures.<br>
                Maintains knowledgebase documentation & trains end users on resolving common issues.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Serves as generalist responsible for providing the majority of direct customer support through multiple methods including email, phone & in-person.</li>
                    <li>Primarily responsible for working incoming phones & team case queue. Ensures proper call categorization, triage, & routing.</li>
                    <li>Ensures adherence to service level agreements.</li>
                    <li>Troubleshoots issues working from existing knowledge databases & performs additional research as needed.</li>
                    <li>Learns fundamental operation of applications & hardware commonly used at Pulte.</li>
                    <li>With guidance, participates in team projects &/or represents support team on new application projects for tasks to transition from project mode to support mode.</li>
                    <li>Orders, receives, configures & repairs end user hardware including desktops & laptops.</li>
                    <li>Backs up & migrates data.</li>
                    <li>Provides primary troubleshooting support on mobile devices such as smartphones & tablets.</li>
                    <li>Must be willing to maintain flexible schedule including rotating evenings, holidays & weekends.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Proficiency with at least one operating system (OS), Windows or Mac, is required & both are strongly preferred.</li>
                    <li>Basic familiarity with Android, Apple iOS & Windows Mobile are needed.</li>
                    <li>Associate's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>A+ or other client hardware certification preferred.</li>
                    <li>Microsoft system certifications or equivalent 1-3 years' client technical support required.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Support Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                Provides second-level customer support & system administration assistance to end users on technical problem resolution & request management.<br>
                Serves as primary subject matter expert on at least one Pulte application, supporting other team members.<br>
                Participates in IT project implementations.<br>
                Maintains user access tracking & approval procedures.<br>
                Provides expertise on client workstation hardware & software management.<br>
                Provides leadership & mentoring to Support Technicians.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Provides supplementary customer support as well as second-level support on moderately-to-highly complex cases escalated by Support Technicians.</li>
                    <li>Specializes in at least two technologies in use at Pulte.</li>
                    <li>Helps define service level agreements & associated procedures.</li>
                    <li>Leads team process improvement initiatives to enhance service delivery.</li>
                    <li>Leads internal team projects &/or represents support team on new application projects for tasks to transition from project mode to support mode. Provides guidance on user administration, security standards & compliance requirements.</li>
                    <li>Creates communications for large (1000+) customer audiences.</li>
                    <li>Provides troubleshooting support on mobile devices such as smartphones & tablets.</li>
                    <li>Orders, receives, configures & repairs end user hardware including desktops & laptops. Backs up & migrates data.</li>
                    <li>May participate in cross-functional incident management initiatives including root-cause analysis.</li>
                    <li>Must be willing to maintain flexible schedule including rotating evenings, holidays & weekends.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Expertise with Windows or Mac Operating Systems (OS) is required; expertise with both is strongly preferred.</li>
                    <li>Proficiency with Android, Apple iOS & Windows Mobile are required; expertise is preferred.</li>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Microsoft system certifications or equivalent 3-5 years' client technical support required.</li>
                    <li>Clear, professional written & verbal communications skills are required.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                </ul>
                `
            },
            {
                name: "Support Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads third-level customer support & provides system administration assistance to other support personnel on technical problem resolution & request management.<br>
                Serves as primary subject matter expert on multiple Pulte applications.<br>
                Serves as liaison to IT & business teams to ensure standard audit controls are developed and implemented in applications and systems.<br>
                Leads team initiatives & participates simultaneously in multiple IT projects.<br>
                Sets strategy on client workstation hardware & software management & plans implementations.<br>
                Provides leadership & mentoring to less senior team members including SE I's.<br>
                Leads efforts in performing regular system/application audit as outlined in annual audit plans. Documents and communicates audit findings with internal/external audit teams.<br>
                Provides technical leadership & support of enterprise systems in scope for the TSC.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Provides third-level support on highly complex cases escalated by other team members.</li>
                    <li>Specializes in at least two technologies in use at Pulte including independently managing at least one enterprise-wide management system (e.g., WSUS, Cherwell, SCCM, D.A.).</li>
                    <li>Helps evaluate performance to service level agreements & procedures; recommends corrections; leads implementation of changes.</li>
                    <li>May be responsible for preparing & communicating case analytics for the department.</li>
                    <li>Leads multiple internal initiatives while simultaneously contributing to other critical projects.</li>
                    <li>Creates communications for large (1000+) customer audiences; as well as polished communications for IT & non-IT leadership audiences.</li>
                    <li>Participates in cross-functional, critical incident management initiatives including root-cause analysis.</li>
                    <li>Provides direction in evaluating the adequacy of IT controls for achieving business objectives in compliance with company policies & standards</li>
                    <li>Provides guidance and direction in areas of application and systems access controls to business clients in support of existing controls framework.</li>
                    <li>Travel may be required (typically quarterly or less).</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Microsoft system certifications or equivalent 5-7 years' client technical support in at least one technical specialty area is required.</li>
                    <li>A broad understanding of a variety of system & technical specialty areas is required.</li>
                    <li>Strong professional written & verbal communications skills including the ability to clearly communicate technical concepts to a non-technical audience are required.</li>
                    <li>These minimum requirements may also include additional criteria specific to the position.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Field Support",
        description: "",
        jobs: [
            {
                name: "Field Support Engineer I",
                description: `
                <h3>Class Concept / Competency</h3>
                Responsible for engineering, second-level technical support, technology integration services for all aspects of Field server, O/S, hardware, storage, and network and virtualization infrastructure.<br>
                Participates in team initiatives while simultaneously participating in multiple IT/Business project efforts.<br>
                Incumbent at this level has a knowledge of fundamental concepts, practices, and procedures. Works under limited supervision and/or on routine assignments, the problems of which can be resolved with defined guidelines and parameters.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>Uses basic knowledge of technology and desktop operating systems to provide and implement developed solutions for division-specific needs. Plans, coordinates and schedules all aspects of IT for new community startups, moves and closures.</li>
                    <li>Works with senior technical team members to optimize local infrastructure components to meet performance requirements.</li>
                    <li>Participates in department-wide projects & the support turnover process. Interfaces with all levels of the division-based hierarchy & all IT functional groups. Must provide exceptional customer service & translate technical concepts for non-technical audiences.</li>
                    <li>Participates in internal initiatives for the implementation, use, and improvement of processes, procedures, guidelines, and metrics for infrastructure systems.</li>
                    <li>Manages ordering & disposal of assets including compliance with Legal Holds processes. Responds to escalated alerts & cases from the Technical Support Center (TSC) & Data Center Operations (DCO) teams to resolve simple to moderately complex issues. With guidance, performs site-based troubleshooting & diagnostics gathering as needed. Participates in on-call support.</li>
                    <li>Provides basic technical training on IT-sponsored applications following a provided curriculum. Implements internal initiatives for the improvement of field-based processes. Serves as the primary integration point among centralized corporate infrastructure processes & field locations.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Experience in developing client &/or supplier relationships is preferred.</li>
                    <li>Minimum of 3 years of experience in supporting Microsoft products & related technologies.</li>
                    <li>Basic knowledge of troubleshooting server, wide area networking (WAN), local area networking (LAN) & virtual infrastructure preferred.</li>
                    <li>Ability to travel up to 40% required.</li>
                    <li>Relevant certifications such as Microsoft Certified Professional (MCP) preferred.</li>
                </ul>
                `
            },
            {
                name: "Field Support Engineer II",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides engineering, third-level technical support, and technology integration services for all aspects of Field server, O/S, hardware, storage, network and virtualization infrastructure.<br>
                Leads team initiatives and participates simultaneously in multiple IT/Business project efforts.<br>
                Incumbent at this level is a learned professional responsible for resolving problems of moderate difficulty through analyzing possible solutions utilizing standard procedures. Works under limited supervision.<br>
                Technical guidance required for unusual and/or complex problems/projects.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>All Engineer I responsibilities</li>
                    <li>Demonstrates an intermediate level of technical knowledge  and a fundamental understanding of key business processes in their market and the enterprise</li>
                    <li>Tests & identifies workstation & laptop models for service catalog; manages ordering & disposal of assets including compliance with Legal Holds processes. Responds to escalated alerts & cases from the Technical Support Center (TSC) & Data Center Operations (DCO) teams to resolve moderately complex to complex issues. Performs advanced, site-based troubleshooting & diagnostics gathering as needed. Participates in on-call support.</li>
                    <li>Provides technical leadership & mentoring to Field Server Engineer I's, Operation Technicians & Support Technicians. Leads internal initiatives for the implementation & improvement of field-based processes. Serves as the primary integration point among centralized corporate infrastructure processes & field locations. Identifies support processes that can be migrated from the Field support team to the TSC.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum of 2 years of experience in developing client &/or supplier relationships.</li>
                    <li>Minimum of 5 years of experience in supporting Microsoft servers & related technologies.</li>
                    <li>Intermediate knowledge of troubleshooting server, wide area networking (WAN), local area networking (LAN) & virtual infrastructure strongly preferred.</li>
                    <li>Ability to travel up to 40% required.</li>
                    <li>Relevant certifications such as Microsoft Certified Systems Engineer (MCSE) preferred.</li>
                </ul>
                `
            },
            {
                name: "Field Support Engineer III",
                description: `
                <h3>Class Concept / Competency</h3>
                Leads and provides engineering, advanced level technical support for the most complex issues, and technology integration services for all aspects of Field server, O/S, hardware, storage, network and virtualization infrastructure.<br>
                Provides strategy, guidance and direction to team initiatives that support both Business and IT priorities. Participates simultaneously in multiple project efforts.<br>
                Incumbent at this level is an experienced professional competent to work at the highest technical level. In depth knowledge of business processes and practices. Considers the current and future business environment in the design and upgrade of systems and future technology. Provides Enterprise level perspective to designs and solutions.  Normally works under general guidance of team lead and manager without technical supervision.<br>
                <br>
                <h3>Typical Responsibilities</h3>
                <ul>
                    <li>All Engineer I & II responsibilities</li>
                    <li>Uses advanced knowledge of server OS, networking technologies, tools and software along with business process experience to develop and implement strategies that align with Business goals</li>                    
                    <li>Researches and determines the most effective use of technology in support of business strategic goals across diverse market requirements.</li>                    
                    <li>Works in conjunction with IT   architects to design optimized network and local infrastructure components to meet performance requirements across diverse networks.</li>
                    <li>Effectively transitions work to appropriate teams to consistently  implement across the enterprise</li>
                    <li>Participates in department-wide projects & the support turnover process. Interfaces with all levels of the division-based hierarchy & all IT functional groups. Must provide exceptional customer service & translate technical concepts for non-technical audiences.</li>
                    <li>Sets the parameters for the build, deployment, and maintenance of Field technologies in coordination with business and IT goals and standards. Ensures effective implementation across the team</li>
                    <li>Cohesively plans and develops strategies with IT, Business Verticals and Market Leadership using business knowledge and technical experience</li>
                    <li>Serves as a business and technical subject matter expert through all phases of Field Services support and project implementation.</li>
                    <li>Leads the selection and evaluation of core Field Services solutions that meet present and future business needs.</li>
                    <li>Contributes to and champions PulteGroup Field Services best practices, methods, standards, and processes.</li>
                    <li>Provides technical leadership, guidance, and mentoring to less senior members on and off the team.</li>
                    <li>Responds to escalated system monitor alerts to resolve the most complex Field infrastructure issues. Performs advanced troubleshooting and diagnostics gathering as needed. Participates in rotational on-call support.</li>
                </ul>
                <h3>Education / Experience</h3>
                <ul>
                    <li>Bachelor's degree in Computer Information Systems or equivalent experience required.</li>
                    <li>Minimum of 5 years of experience in developing client &/or supplier relationships.</li>
                    <li>Minimum of 7 years of experience in home building environment.</li>
                    <li>Advanced knowledge of troubleshooting servers, wide area networking (WAN), local area networking (LAN) & virtual infrastructures required.</li>
                    <li>Ability to travel up to 40% required.</li>
                    <li>Minimum of 10 years of experience in supporting Microsoft servers, software and related technologies.</li>
                    <li>Minimum of 4 years of experience designing and implementing solutions using technical and business knowledge.</li>
                    <li>Able to demonstrate advanced working knowledge of Field, IT and Business processes, policies and practices.</li>
                    <li>Microsoft Certified Systems Engineer (MCSE) certification and PMP preferred.</li>
                </ul>
                `
            }
        ]
    },
    {
        name: "Database Administration",
        description: "",
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
        description: "",
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
        description: "",
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