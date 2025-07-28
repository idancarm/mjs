// Centralized data for micro-journeys and related content

// Micro-journeys data for gallery
const microJourneys = [
    { 
        id: 'instant-lead', 
        title: '1. Instant Lead Enrichment', 
        category: 'Friction Remover', 
        removes: 'Manual LinkedIn profile research', 
        adds: 'Company info, job title, connections, recent activity', 
        trigger: 'New contact created in HubSpot' 
    },
    { 
        id: 'smart-connection', 
        title: '2. Smart Connection Request', 
        category: 'Friction Remover', 
        removes: 'Manual connection tracking', 
        adds: 'Templated messages based on HubSpot data', 
        trigger: 'Deal moves to "Qualified" stage' 
    },
    { 
        id: 'social-proof', 
        title: '3. Social Proof Research', 
        category: 'Experience Enhancer', 
        removes: 'Manual research before calls', 
        adds: 'Warm intro opportunities, conversation starters', 
        trigger: 'Meeting scheduled in HubSpot' 
    },
    { 
        id: 'inmail-automation', 
        title: '4. InMail Automation', 
        category: 'Funnel Accelerator', 
        removes: 'Manual follow-up tracking', 
        adds: 'Automated re-engagement sequences', 
        trigger: 'Contact inactive for 14+ days' 
    },
    { 
        id: 'account-intelligence', 
        title: '5. Account Intelligence', 
        category: 'Friction Remover', 
        removes: 'Manual company research', 
        adds: 'Team size, growth indicators, news mentions', 
        trigger: 'New company added to HubSpot' 
    },
    { 
        id: 'morning-priority', 
        title: '6. Morning Priority Queue', 
        category: 'Funnel Accelerator', 
        removes: 'Manual daily planning', 
        adds: 'AI-powered priority scoring', 
        trigger: 'Daily at 8 AM' 
    },
    { 
        id: 'real-time-engagement', 
        title: '7. Real-Time Engagement', 
        category: 'Funnel Accelerator', 
        removes: 'Manual social monitoring', 
        adds: 'Immediate engagement opportunities', 
        trigger: 'LinkedIn post interaction detected' 
    },
    { 
        id: 'deal-progress', 
        title: '8. Deal Progress Tracker', 
        category: 'Funnel Accelerator', 
        removes: 'Manual deal monitoring', 
        adds: 'Proactive stagnation alerts', 
        trigger: 'Deal stagnant for 7+ days' 
    },
    { 
        id: 'prospect-warming', 
        title: '9. Prospect Warming', 
        category: 'Experience Enhancer', 
        removes: 'Manual warming activities', 
        adds: 'Systematic prospect engagement', 
        trigger: 'New lead assigned' 
    },
    { 
        id: 'champion-id', 
        title: '10. Champion Identification', 
        category: 'Experience Enhancer', 
        removes: 'Manual network mapping', 
        adds: 'Strategic relationship leverage', 
        trigger: 'Deal moves to "Proposal" stage' 
    },
    { 
        id: 'buying-signal', 
        title: '11. Buying Signal Detection', 
        category: 'Funnel Accelerator', 
        removes: 'Manual job change monitoring', 
        adds: 'Automatic expansion opportunities', 
        trigger: 'LinkedIn job change notification' 
    },
    { 
        id: 'competitive-intel', 
        title: '12. Competitive Intelligence', 
        category: 'Funnel Accelerator', 
        removes: 'Manual competitive monitoring', 
        adds: 'Real-time market intelligence', 
        trigger: 'Competitor mention detected' 
    },
    { 
        id: 'content-amplification', 
        title: '13. Content Amplification', 
        category: 'Experience Enhancer', 
        removes: 'Disconnected marketing/sales efforts', 
        adds: 'Multi-channel campaign coordination', 
        trigger: 'HubSpot marketing email sent' 
    },
    { 
        id: 'event-outreach', 
        title: '14. Event-Based Outreach', 
        category: 'Experience Enhancer', 
        removes: 'Manual event prospecting', 
        adds: 'Contextual event-based messaging', 
        trigger: 'LinkedIn event attendance detected' 
    },
    { 
        id: 'renewal-risk', 
        title: '15. Renewal Risk Assessment', 
        category: 'Friction Remover', 
        removes: 'Manual customer health monitoring', 
        adds: 'Proactive retention signals', 
        trigger: 'Existing customer LinkedIn activity' 
    }
];

// Modal content data for matrix page
const modalContent = {
    // Micro-Journeys
    'instant-lead': { 
        title: 'Instant Lead Enrichment', 
        subtitle: 'Micro-Journey Automation', 
        text: `<p>This automation transforms manual LinkedIn research into instant, comprehensive data enrichment. When a new contact enters your CRM, this micro-journey pulls rich contextual data from LinkedIn, including company info, job titles, and networks.</p><p>It provides strategic insights like company size, growth indicators, funding news, and mutual connections for personalized outreach. By eliminating manual research, sales reps focus on high-value activities, ensuring complete, actionable data from day one.</p>`
    },
    'champion-id': { 
        title: 'Champion Identification', 
        subtitle: 'Micro-Journey Automation', 
        text: `<p>This micro-journey automates network analysis and relationship mapping to identify internal champions. Triggered at the proposal stage, it analyzes LinkedIn networks for mutual connections between your team and key stakeholders.</p><p>It maps relationship strength, identifies warm introduction paths, and suggests individuals based on role and influence. This systematic approach reduces sales cycle times and increases win rates in complex B2B deals.</p>`
    },
    'buying-signal': { 
        title: 'Buying Signal Detection', 
        subtitle: 'Micro-Journey Automation', 
        text: `<p>Job changes create high-converting sales opportunities. This micro-journey monitors LinkedIn for job change notifications, identifying expansion and new business potential.</p><p>When a contact changes roles, the system assesses opportunity potential, creates new CRM opportunities, and generates personalized outreach. It ensures you never miss these time-sensitive, high-conversion opportunities.</p>`
    },
    'post-signal': { 
        title: 'Post Signal Detection', 
        subtitle: 'Micro-Journey Automation', 
        text: `<p>Social media posts reveal buying intent. This AI-powered micro-journey analyzes LinkedIn posts for topical signals indicating interest or challenges your solution can address.</p><p>Using NLP, it detects keywords and sentiment, flagging high-priority engagement opportunities and suggesting talking points. This provides real-time insights, improving response rates and conversation quality.</p>`
    },
    'smart-connection': { 
        title: 'Smart Connection Requests', 
        subtitle: 'Micro-Journey Automation', 
        text: `<p>This micro-journey automatically generates personalized LinkedIn connection requests when deals reach qualified status, using CRM and LinkedIn data.</p><p>It analyzes mutual connections, shared experiences, and company news to craft relevant messages, significantly improving acceptance rates. It manages the entire networking workflow at scale, building high-quality professional networks efficiently.</p>`
    },
    'prospect-warming': { 
        title: 'Prospect Warming', 
        subtitle: 'Micro-Journey Automation', 
        text: `<p>This micro-journey systematically warms prospects before direct sales contact. When new leads are assigned, it initiates a sequence of profile views and content engagement to build recognition.</p><p>This process creates familiarity, leading to significantly higher response rates than cold contacts. It systematizes building trust, resulting in more positive initial conversations and faster relationship development.</p>`
    },
    'event-outreach': { 
        title: 'Event-Based Outreach', 
        subtitle: 'Micro-Journey Automation', 
        text: `<p>This micro-journey automates identifying event attendees and creating personalized outreach. It flags high-priority prospects and suggests talking points related to shared event experiences.</p><p>This shared context improves response rates and conversation quality. It maximizes ROI from events by ensuring systematic follow-up, converting interactions into meaningful business conversations and deals.</p>`
    },
    
    // Jobs-to-be-Done
    'personalize-scale': { 
        title: 'Personalize Outreach at Scale', 
        subtitle: 'Core Jobs-to-be-Done', 
        text: `<p>Sales teams need to personalize outreach at scale. Prospects expect relevant communication, but quotas demand high volume. Generic outreach fails; manual personalization doesn't scale.</p><p>Systems must automatically gather and apply contextual info to create personalized messages. AI and data integration enable rapid customization without sacrificing quality, leading to high response rates at high volume.</p>`
    },
    'prioritize-pipeline': { 
        title: 'Prioritize My Pipeline', 
        subtitle: 'Core Jobs-to-be-Done', 
        text: `<p>Sales professionals manage many prospects, needing intelligent prioritization. Without it, time is wasted on low-probability leads. This JTBD addresses the need for smart prospect ranking.</p><p>Effective prioritization synthesizes engagement history, buying signals, and timing. Sophisticated systems provide dynamic, real-time recommendations, ensuring efforts focus on high-value opportunities at optimal moments.</p>`
    },
    'leverage-network': { 
        title: 'Leverage My Network', 
        subtitle: 'Core Jobs-to-be-Done', 
        text: `<p>Professional networks are valuable assets, often underutilized. This JTBD addresses systematically activating relationships for warm introductions, competitive intel, and decision-maker access.</p><p>Effective leverage maps complex relationship webs, identifying direct and indirect connections. Modern automation analyzes LinkedIn networks at scale, ensuring every interaction benefits from strong relationship foundations.</p>`
    },
    'build-relationships': { 
        title: 'Build Stronger Relationships', 
        subtitle: 'Core Jobs-to-be-Done', 
        text: `<p>B2B sales success relies on authentic relationships. This JTBD focuses on developing genuine professional connections that build trust and loyalty for long-term competitive advantages.</p><p>Relationship building at scale requires systematic touchpoint management and personalized engagement. Automation handles maintenance, allowing humans to focus on authentic connection and value creation.</p>`
    },
    'time-outreach': { 
        title: 'Time My Outreach Perfectly', 
        subtitle: 'Core Jobs-to-be-Done', 
        text: `<p>Timing is crucial for outreach engagement. This JTBD addresses contacting prospects when they are most receptive, actively evaluating solutions, or experiencing trigger events.</p><p>Perfect timing monitors social media, company news, and engagement patterns. Sophisticated systems combine real-time monitoring with predictive analytics to anticipate optimal contact moments for maximum receptivity.</p>`
    },
    'conversation-starters': { 
        title: 'Find Conversation Starters', 
        subtitle: 'Core Jobs-to-be-Done', 
        text: `<p>Breaking through noise requires engaging opening messages. This JTBD focuses on finding relevant, timely hooks to transform cold outreach into warm dialogue.</p><p>Effective starters reference current events, shared connections, or challenges. Automation monitors data sources to identify conversation opportunities, ensuring outreach feels valuable and not intrusive.</p>`
    },
    'scale-outreach': { 
        title: 'Scale My Outreach', 
        subtitle: 'Core Jobs-to-be-Done', 
        text: `<p>Modern sales quotas demand contacting hundreds of prospects monthly, overwhelming manual processes. This JTBD addresses increasing outreach volume without sacrificing quality or compliance.</p><p>Scaling effectively automates repetitive tasks while preserving human elements. Intelligent automation handles routines, providing insights and workflows for high-quality human interactions, translating efficiency into revenue growth.</p>`
    }
};

// Pricing data
const pricingPlans = [
    {
        id: 'single',
        name: 'Single',
        description: 'Perfect for focused LinkedIn outreach.',
        price: 50,
        annualPrice: 37.50,
        setupFee: 95,
        features: [
            '1 RevOps-engineered micro-journey',
            '500 credits/month',
            'Custom business configuration',
            'HubSpot Pro optimization',
            'Basic support included'
        ],
        featured: false
    },
    {
        id: 'duet',
        name: 'Duet',
        description: 'Complete LinkedIn connection & messaging.',
        price: 100,
        annualPrice: 75,
        setupFee: 95,
        features: [
            '2 RevOps-engineered micro-journeys',
            '1,200 credits/month',
            'Custom business configuration',
            'HubSpot Pro optimization',
            'Complete LinkedIn workflow',
            'Basic support included'
        ],
        featured: true
    },
    {
        id: 'trio',
        name: 'Trio',
        description: 'Full LinkedIn-to-CRM automation pipeline.',
        price: 150,
        annualPrice: 112.50,
        setupFee: 95,
        features: [
            '3 RevOps-engineered micro-journeys',
            '2,000 credits/month',
            'Custom business configuration',
            'HubSpot Pro optimization',
            'Complete automation pipeline',
            'Advanced GTM tracking & insights',
            'Basic support included'
        ],
        featured: false
    }
];

// Export data for use in other files
if (typeof window !== 'undefined') {
    window.GoEnvyData = {
        microJourneys,
        modalContent,
        pricingPlans
    };
}

// Module export for build systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        microJourneys,
        modalContent,
        pricingPlans
    };
}