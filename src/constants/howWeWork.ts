import { FaCalendarAlt, FaClipboardList, FaLayerGroup, FaMobileAlt, FaSyncAlt } from "react-icons/fa"

export const howWeWork = {
    title: "How We Work",
    mainTitle: "Our Process for Personalized Support",
    steps: [
        {
            icon: FaClipboardList,
            title: "Case Study",
            description: "We analyze each client to understand their unique needs.",
        },
        {
            icon: FaLayerGroup,
            title: "Customized Modules",
            description: "Sessions are tailored based on individual requirements.",
        },
        {
            icon: FaCalendarAlt,
            title: "Monthly Sessions",
            description: "Structured sessions ensure consistent progress.",
        },
        {
            icon: FaMobileAlt,
            title: "MIB App Updates",
            description: "Get real-time updates via the MIB Application.",
        },
        //   {
        //     icon: FaSyncAlt,
        //     title: "Follow-Up & Reflection",
        //     description: "Continuous follow-ups allow clients to reflect, ask questions, and implement solutions for their well-being.",
        //   },
    ]
}
