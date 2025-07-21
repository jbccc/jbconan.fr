import type { ProjectsData } from '../types';

export const projectsData: ProjectsData = {
    "projects": [
        {
            "id": "masters-thesis",
            "title": "Master's Thesis - Mechanistic Interpretability",
            "description": "Researching mechanistic interpretability of deep neural networks for biostatistics use cases.",
            "location": "Berkeley, CA",
            "projectType": "research",
            "domainTags": ["deep learning", "biostatistics", "interpretability", "causal inference"],
            "techStack": ["Python", "PyTorch", "Seaborn"],
            "startDate": "2024-11",
            "endDate": "2025-05",
            "company": {
                "name": "CTML @ UC Berkeley",
                "website": "https://ctml.berkeley.edu"
            },
            "links": {
                "external": "https://arxiv.org/abs/2505.00555"
            },
            "dedicatedPage": "masters-thesis.md"
        },
        {
            "id": "vezmir-ai",
            "title": "VezmirAI",
            "description": "Cofounded VezmirAI, a pay-as-you-go solution for using common AI chat services like ChatGPT, Claude, and Perplexity. Grew to over 100 active users.",
            "location": "Remote",
            "projectType": "startup",
            "domainTags": ["startup", "ai", "saas", "web development"],
            "techStack": ["React", "Stripe", "Django", "DRF"],
            "startDate": "2024-06",
            "endDate": "2024-12",
            "company": {
                "name": "VezmirAI",
                "website": "https://vezmir.ai"
            },
            "links": {
                "external": "https://vezmir.ai"
            },
            "dedicatedPage": "vezmir-ai.md"
        },
        {
            "id": "sefira-ai",
            "title": "LLM Engineer - Data Leakage Prevention",
            "description": "Freelance for EF startup on LLM security for enterprise chat, preventing biases; developed data leakage prevention by fine-tuning GPT and prompt engineering to 93% accuracy on private benchmark; deployed to POC, securing 70+ VC contacts.",
            "location": "Zürich, Switzerland",
            "projectType": "freelance",
            "domainTags": ["llm", "ai security", "prompt engineering", "finetuning"],
            "techStack": ["Python", "OpenAI sdk", "Langchain"],
            "startDate": "2024-03",
            "endDate": "2024-08",
            "company": {
                "name": "Sefira AI",
                "website": "https://sefira.ai"
            },
            "links": {},
            "dedicatedPage": "sefira-ai.md"
        },
        {
            "id": "genai-poc-capgemini",
            "title": "GenAI for Pharma Clinical Trials PoC",
            "description": "Developed the offering for GenAI projects in clinical trials for Pharma. Researched technology and market trends and created a Proof of Concept in Python to interact with LLMs.",
            "location": "Zürich, Switzerland",
            "projectType": "internship",
            "domainTags": ["genai", "pharma", "llm", "consulting"],
            "techStack": ["Python", "Streamlit"],
            "startDate": "2023-06",
            "endDate": "2023-09",
            "company": {
                "name": "Capgemini",
                "website": "https://www.capgemini.com"
            },
            "links": {
                "external": "https://github.com/jbccc/capgemini-llm-poc"
            },
        },
        {
            "id": "infosys-graphical-database",
            "title": "ML Intern - Algorithms for Graphical Database",
            "description": "Developed algorithms for a graphical database to highlight links in a set of entity documents. Used NLP techniques to automatically retrieve topics of interest within each entity.",
            "location": "Bangalore, India",
            "projectType": "internship",
            "domainTags": ["graph databases", "nlp", "data science"],
            "techStack": ["Python", "Spacy", "Dgraph"],
            "startDate": "2022-06",
            "endDate": "2022-08",
            "company": {
                "name": "Infosys",
                "website": "https://www.infosys.com"
            },
            "links": {}
        },
        {
            "id": "je-epfl-website",
            "title": "Junior Entreprise EPFL - Website Development",
            "description": "Developed the new public-facing website for Junior Entreprise EPFL, the student-run consultancy at EPFL.",
            "location": "Lausanne, Switzerland",
            "projectType": "pro-bono",
            "domainTags": ["web development", "ui/ux"],
            "techStack": ["Vue", "Nuxt"],
            "startDate": "2023-01",
            "endDate": "2023-05",
            "company": {
                "name": "Junior Entreprise EPFL",
                "website": "https://je.epfl.ch"
            },
            "links": {
                "external": "https://je.epfl.ch"
            },
        },
        {
            "id": "nlp-prospecting",
            "title": "Automated Business Prospecting WebApp",
            "description": "Created a WebApp for automated business prospecting that generates personalized emails to newly registered Swiss companies using NLP techniques. Sold the website for 5 figures.",
            "location": "Lausanne, Switzerland",
            "projectType": "freelance",
            "domainTags": ["web development", "nlp", "automation", "lead generation"],
            "techStack": ["Python", "Django", "NLTK"],
            "startDate": "2022-10",
            "endDate": "2023-01",
            "links": {},
        },
        {
            "id": "orangepi-llm",
            "title": "OrangePI LLM Infrastructure",
            "description": "Self-hosted infrastructure for inference of Large Language Models on an ARM-based single-board computer.",
            "location": "Personal Lab",
            "projectType": "personal",
            "domainTags": ["self-hosting", "llm", "infrastructure", "ARM", "edge computing"],
            "techStack": ["Linux", "Docker", "Python", "FastAPI", "rkllm"],
            "startDate": "2023-12",
            "endDate": "Present",
            "links": {},
            "dedicatedPage": "orangepi-llm.md"
        },
        {
            "id": "teaching-ethz-fourier",
            "title": "Teaching Assistant - Fourier Theory & Hilbert Spaces",
            "description": "Served as a Teaching Assistant for the master's level course 'Fourier Theory & Hilbert Spaces'. Responsible for leading weekly 2-hour exercise sessions and grading homework.",
            "location": "Zürich, Switzerland",
            "projectType": "teaching",
            "domainTags": ["teaching", "mathematics", "analysis"],
            "techStack": ["LaTeX"],
            "startDate": "2024-02",
            "endDate": "2024-06",
            "company": {
                "name": "ETH Zurich",
                "website": "https://ethz.ch"
            },
            "links": {}
        },
        {
            "id": "algebraic-topology-ml",
            "title": "Algebraic Topology & ML Research",
            "description": "Extended Raindrop, a GNN algorithm that infers graph relations from multivariate time series, to higher-order dimensions using algebraic topology and topological deep learning with [TopoModelX](https://github.com/pyt-team/TopoModelX) and [TopoNetX](https://github.com/pyt-team/TopoNetX), as part of the ICML Topological Deep Learning Challenge 2024.",
            "location": "Zürich, Switzerland",
            "projectType": "research",
            "domainTags": ["algebraic topology", "machine learning", "algorithms"],
            "techStack": ["PyTorch", "TopoModelX", "TopoNetX"],
            "startDate": "2023-09",
            "endDate": "2024-01",
            "company": {
                "name": "ETH Zurich",
                "website": "https://ethz.ch"
            },
            "links": {
                "external": "https://drive.google.com/file/d/1jPf-i9P8StAT3jSlKBIKI0g7z8c81xV_/view?usp=sharing"
            },
            "dedicatedPage": "algebraic-topology-ml.md"
        },
        {
            "id": "deep-learning-sound-texture",
            "title": "Deep Learning - Sound Texture Generation",
            "description": "Project focused on learning sound texture with neural networks and generating new audio with modified sound textures.",
            "location": "Zürich, Switzerland",
            "projectType": "research",
            "domainTags": ["deep learning", "audio processing", "generative models"],
            "techStack": ["Python", "PyTorch", "cuda"],
            "startDate": "2023-02",
            "endDate": "2023-06",
            "company": {
                "name": "ETH Zurich",
                "website": "https://ethz.ch"
            },
            "links": {
                "external": "https://github.com/jbccc/audio_style_transfer"
            }
        },
        {
            "id": "noteless",
            "title": "Noteless",
            "description": "Minimalist note-taking application designed for researchers and academics, with support for mathematical notation and cross-referencing.",
            "location": "Zurich, Switzerland",
            "projectType": "startup",
            "domainTags": ["tech", "software engineering"],
            "techStack": ["Vue", "TypeScript", "Electron", "LaTeX"],
            "startDate": "2022-09",
            "endDate": "2023-03",
            "company": {
                "name": "Noteless"
            }
        },
        {
            "id": "je-epfl-vp",
            "title": "VP of HR & IT - Junior Entreprise EPFL",
            "description": "Co-managed a team of 44 student members in a non-profit consultancy. Led recruitment cycles (50+ applications), organized member trainings, and handled customer relations and legal contract drafting.",
            "location": "Lausanne, Switzerland",
            "projectType": "pro-bono",
            "domainTags": ["management", "hr", "recruitment", "leadership", "it"],
            "techStack": ["automation", "infra"],
            "startDate": "06-2022",
            "endDate": "06-2023",
            "links": {
                "external": "https://je.epfl.ch"
            },
        },
        {
            "id": "je-epfl-pm",
            "title": "Project Manager - Junior Entreprise EPFL",
            "description": "Personally managed 29 consulting projects with a total turnover of CHF 146K. Oversaw project execution from client acquisition to final delivery, ensuring student consultant performance and client satisfaction.",
            "location": "Lausanne, Switzerland",
            "projectType": "pro-bono",
            "domainTags": ["project management", "consulting", "client relations", "sales"],
            "techStack": [],
            "startDate": "2020",
            "endDate": "2022",
            "links": {
                "external": "https://je.epfl.ch"
            },
        },

        {
            "id": "deep-learning-piano-diffusion",
            "title": "Deep Learning - Piano Music Generation",
            "description": "Generated piano notes using diffusion models.",
            "location": "Zürich, Switzerland",
            "projectType": "research",
            "domainTags": ["deep learning", "music generation", "diffusion models"],
            "techStack": ["Python", "PyTorch"],
            "startDate": "2022-10",
            "endDate": "2023-02",
            "company": {
                "name": "ETH Zurich",
                "website": "https://ethz.ch"
            },
            "links": {
                "external": "https://gitlab.ethz.ch/jconan/ddpm-music-generation"
            }
        },
        {
            "id": "epfl-meme-page",
            "title": "EPFL Meme Page",
            "description": "Created and managed the Instagram meme page 'EPFL Meme', growing the community to over 7,000 followers.",
            "location": "Lausanne, Switzerland",
            "projectType": "community",
            "domainTags": ["social media", "community management", "content creation"],
            "techStack": ["Instagram"],
            "startDate": "2018",
            "endDate": "2022",
            "company": {
                "name": "EPFL",
                "website": "https://epfl.ch"
            },
            "links": {}
        },
        {
            "id": "french-olympiad-award",
            "title": "French National Olympiad in Mathematics",
            "description": "Awarded First Accessit (runner-up prize) in the French national mathematics olympiad contest.",
            "location": "France",
            "projectType": "award",
            "domainTags": ["mathematics", "competition"],
            "techStack": [],
            "startDate": "2017",
            "company": {
                "name": "Animath",
                "website": "https://www.animath.fr"
            },
            "links": {}
        },
        {
            "id": "paris-marathon-2024",
            "title": "2024 Paris Marathon - From Zero to 42K",
            "description": "Completed the 2024 Paris Marathon in 5h15min after transforming in 6 months from zero fitness following 6 years of heavy smoking.",
            "location": "Paris, France",
            "projectType": "competition",
            "domainTags": ["athletics", "marathon",],
            "techStack": [],
            "startDate": "2024",
            "links": {}
        }

    ]
};