interface UserInputs {
    identity: {
        options: string[];
        identityLevels: {
            [identityKey: string]: string[];
        };
    };
    assigner: {
        options: {
            [identityKey: string]: string[];
        };
    };
    textType: {
        value: string;
        verb: string;
    }[];
    prose: {
        options: string[];
        details: {
            [textTypeKey: string]: {
                verb: string;
                options: string[];
            };
        };
    };
    audience: {
        options: string[];
        contextBasedAudiences: {
            [audienceKey: string]: string[];
        };
    };
    wordCount: {
        comparisonType: string[];
        wordRanges: {
            options: {
                label: string;
                range: {
                    min: number;
                    max?: number;
                };
            }[];
            customRange: {
                min: string;
                max: string;
            };
        };
    };
}

// Function to get the verb from a given value
export function getVerbByValue(value: string) {
    const foundItem = userInputs.textType.find(item => item.value === value);
    return foundItem ? foundItem.verb : null;
}

export const userInputs: UserInputs = {
    // Identity selection
    identity: {
        options: [
            "student",
            "professional",
            "researcher",
            "journalist",
            "author",
            "creative writer",
            "other"
        ],
        identityLevels: {
            // Nested levels based on identity
            student: [
                "3rd grade", "4th grade", "5th grade", "6th grade",
                "7th grade", "8th grade", "9th grade", "10th grade",
                "11th grade", "12th grade", "undergraduate", "graduate",
                "postgraduate", "doctoral", 
                // "law school", "medical school", "nursing school", "business school", "other"
            ],
            professional: [
                "new", "mid-level", "senior",
            ],
            researcher: [
                "assistant", "undergraduate",
                "graduate", "postdoc",
                "principal investigator", "senior"
            ],
            journalist: [
                "freelance", "staff", "senior",
            ],
            author: [
                "new", "self-published", "established", "bestselling author",
            ],
            "creative writer": [
                "aspiring", "poet", "short story",
                "novelist", "playwright", "screenwriter"
            ],
            other: [
                "individual contributor", "team leader", "specialist"
            ]
        }
    },

    // Assigner selection based on identity
    assigner: {
        options: {
            student: [
                "teacher", "professor", "tutor", "coach", "advisor"
            ],
            professional: [
                "boss", "supervisor", "colleague", "interviewer",
                "client", "team lead", "mentor"
            ],
            researcher: [
                "supervisor", "mentor", "research advisor", "principal investigator",
                "collaborator", "lab director", "funding agency"
            ],
            journalist: [
                "editor", "publisher", "producer", "client",
                "media outlet", "co-writer", "agency"
            ],
            author: [
                "editor", "literary agent", "publisher", "writing group",
                "book coach", "self (self-assigned)"
            ],
            creativeWriter: [
                "writing group", "editor", "publisher", "literary agent",
                "mentor", "collaborator", "self"
            ],
            other: [
                "client", "manager", "mentor", "peer", "self"
            ]
        }
    },

    // Type of text (Purpose/Goal of writing)
    textType: [
        { value: "persuasive", verb: "argue" },
        { value: "narrative", verb: "tell a story about" },
        { value: "descriptive", verb: "describe" },
        { value: "expository", verb: "explain" },
        { value: "reflective", verb: "reflect on" },
        { value: "critical analysis", verb: "analyze" },
        { value: "review", verb: "review" },
        { value: "instructional", verb: "instruct on how to" },
        { value: "procedural", verb: "provide a procedure for" },
        { value: "report", verb: "report on" }
    ],

    // Type of prose (Form/structure of the piece)
    prose: {
        options: [
            "essay", "short story", "poem", "research paper", "article", "editorial", "novel", "biography", "autobiography",
            "journal entry", "memoir", "report", "case study", "speech", "script", "press release"
        ],
        // Nested prose options for some specific text types with aligned action verbs
        details: {
            "persuasive": {
                verb: "argue",
                options: [
                    "persuasive essay", "debate speech", "op-ed", "editorial"
                ]
            },
            "narrative": {
                verb: "tell a story about",
                options: [
                    "personal narrative", "short story", "novel excerpt", "memoir"
                ]
            },
            "descriptive": {
                verb: "describe",
                options: [
                    "descriptive essay", "character sketch", "place description"
                ]
            },
            "expository": {
                verb: "explain",
                options: [
                    "research paper", "informational article", "report", "manual or guide"
                ]
            },
            "reflective": {
                verb: "reflect on",
                options: [
                    "personal reflection", "journal entry", "memoir", "reflective essay"
                ]
            },
            "critical analysis": {
                verb: "analyze",
                options: [
                    "literary analysis", "art critique", "film review", "book review"
                ]
            },
            "review": {
                verb: "review",
                options: [
                    "book review", "film review", "product review", "performance review"
                ]
            },
            "instructional": {
                verb: "instruct on how to",
                options: [
                    "how-to guide", "instructional manual", "tutorial"
                ]
            },
            "procedural": {
                verb: "provide a procedure for",
                options: [
                    "step-by-step guide", "procedure write-up", "workflow explanation"
                ]
            },
            "report": {
                verb: "report on",
                options: [
                    "lab report", "research summary", "progress report", "case study"
                ]
            }
        }
    },

    // Audience selection based on who will read the piece
    audience: {
        options: [
            "teacher", "professor", "peers/classmates", "general public",
            "colleagues", "boss", "interviewer", "team", "client",
            "editor", "research community", "specific group (custom)"
        ],
        // Different audiences based on identity
        contextBasedAudiences: {
            student: [
                "my teacher", "my professor", "my classmates", "my school"
            ],
            professional: [
                "my boss", "my team", "a colleague", "a client", "stakeholders"
            ],
            researcher: [
                "a research community", "academic journal reviewers",
                "conference attendees", "lab members"
            ],
            journalist: [
                "the editor", "general readers", "subscribers", "the audience of a media outlet"
            ],
            author: [
                "readers", "literary critics", "book club members", "editor"
            ],
            creativeWriter: [
                "readers", "fellow writers", "critique group", "potential publishers"
            ],
            other: [
                "general public", "specific group (custom)", "peer group"
            ]
        }
    },

    // Length constraints on the writing
    wordCount: {
        comparisonType: [
            "more than", "less than", "between"
        ],
        wordRanges: {
            options: [
                { label: "less than 500 words", range: { min: 0, max: 500 } },
                { label: "500-1000 words", range: { min: 500, max: 1000 } },
                { label: "1000-1500 words", range: { min: 1000, max: 1500 } },
                { label: "1500-2000 words", range: { min: 1500, max: 2000 } },
                { label: "more than 2000 words", range: { min: 2000 } }
            ],
            customRange: {
                min: "Minimum word count", // User input field
                max: "Maximum word count" // User input field
            }
        }
    }
};

export default userInputs;