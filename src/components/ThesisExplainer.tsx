"use client";

export function ThesisExplainer() {
  return (
    <div className="mb-10 rounded-lg bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 border border-slate-700/50">
      <div className="max-w-2xl mb-8">
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Each thesis is <span className="text-white font-medium">automatically synthesized</span> from
          dozens of sources—papers, interviews, market data—using structured extraction pipelines.
          We probe emerging patterns through <span className="text-white font-medium">targeted AI conversations</span> that
          surface non-obvious connections and stress-test assumptions.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          These are <span className="text-white font-medium">living documents</span>. Select any passage to
          suggest edits, add evidence, or challenge our reasoning. We rebuild theses weekly as new
          signal emerges—your input shapes where conviction grows.
        </p>
      </div>

      {/* Data Flow Diagram */}
      <div className="relative">
        <svg viewBox="0 0 800 140" className="w-full h-auto" aria-label="Data flow diagram">
          <defs>
            {/* Gradient for flow lines */}
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4d65ff" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#4d65ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4d65ff" stopOpacity="0.2" />
            </linearGradient>

            {/* Animated dash pattern */}
            <pattern id="flowPattern" patternUnits="userSpaceOnUse" width="20" height="1">
              <rect width="10" height="1" fill="#4d65ff" opacity="0.6">
                <animate
                  attributeName="x"
                  from="0"
                  to="20"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </rect>
            </pattern>

            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Node gradient */}
            <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Source nodes */}
          <g className="source-nodes">
            {/* Papers */}
            <g transform="translate(60, 30)">
              <rect x="-40" y="-18" width="80" height="36" rx="4" fill="url(#nodeGradient)" stroke="#334155" strokeWidth="1"/>
              <text x="0" y="1" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">PAPERS</text>
              <text x="0" y="12" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">arxiv, journals</text>
            </g>

            {/* Conversations */}
            <g transform="translate(60, 80)">
              <rect x="-40" y="-18" width="80" height="36" rx="4" fill="url(#nodeGradient)" stroke="#334155" strokeWidth="1"/>
              <text x="0" y="1" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">EXPERTS</text>
              <text x="0" y="12" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">calls, podcasts</text>
            </g>

            {/* Market Data */}
            <g transform="translate(60, 130)">
              <rect x="-40" y="-18" width="80" height="36" rx="4" fill="url(#nodeGradient)" stroke="#334155" strokeWidth="1"/>
              <text x="0" y="1" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">MARKET</text>
              <text x="0" y="12" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">deals, metrics</text>
            </g>
          </g>

          {/* Flow lines from sources to extraction */}
          <g className="flow-lines">
            <path d="M 120 30 Q 160 30, 180 50 T 220 70" fill="none" stroke="url(#flowPattern)" strokeWidth="2"/>
            <path d="M 120 80 L 220 70" fill="none" stroke="url(#flowPattern)" strokeWidth="2"/>
            <path d="M 120 130 Q 160 130, 180 90 T 220 70" fill="none" stroke="url(#flowPattern)" strokeWidth="2"/>
          </g>

          {/* Extraction node */}
          <g transform="translate(280, 70)">
            <rect x="-50" y="-25" width="100" height="50" rx="4" fill="url(#nodeGradient)" stroke="#4d65ff" strokeWidth="1.5" filter="url(#glow)"/>
            <text x="0" y="-5" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="monospace" fontWeight="600">EXTRACT</text>
            <text x="0" y="8" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">claims, quotes</text>
            <text x="0" y="18" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">structured data</text>
          </g>

          {/* Flow to synthesis */}
          <path d="M 330 70 L 380 70" fill="none" stroke="url(#flowPattern)" strokeWidth="2"/>

          {/* Synthesis node */}
          <g transform="translate(440, 70)">
            <rect x="-50" y="-25" width="100" height="50" rx="4" fill="url(#nodeGradient)" stroke="#4d65ff" strokeWidth="1.5" filter="url(#glow)"/>
            <text x="0" y="-5" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="monospace" fontWeight="600">SYNTHESIZE</text>
            <text x="0" y="8" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">pattern match</text>
            <text x="0" y="18" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">AI reasoning</text>
          </g>

          {/* Flow to thesis */}
          <path d="M 490 70 L 540 70" fill="none" stroke="url(#flowPattern)" strokeWidth="2"/>

          {/* Thesis output node */}
          <g transform="translate(600, 70)">
            <rect x="-50" y="-30" width="100" height="60" rx="4" fill="url(#nodeGradient)" stroke="#22c55e" strokeWidth="1.5" filter="url(#glow)"/>
            <text x="0" y="-8" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="700">THESIS</text>
            <text x="0" y="6" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">conviction score</text>
            <text x="0" y="17" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">evidence chain</text>
          </g>

          {/* Feedback loop */}
          <g className="feedback-loop">
            <path
              d="M 650 70 Q 700 70, 720 30 T 760 30 Q 780 30, 780 50 L 780 110 Q 780 130, 760 130 L 700 130"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-8"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </path>

            {/* Collaboration node */}
            <g transform="translate(760, 80)">
              <circle cx="0" cy="0" r="20" fill="url(#nodeGradient)" stroke="#f59e0b" strokeWidth="1"/>
              <text x="0" y="3" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace">EDIT</text>
            </g>

            <text x="700" y="137" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">your feedback refines signal</text>
          </g>

          {/* Animated pulse on thesis node */}
          <circle cx="600" cy="70" r="35" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0">
            <animate attributeName="r" from="35" to="50" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-[#4d65ff]"></div>
            <span>data flow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-[#f59e0b] opacity-60" style={{backgroundImage: 'repeating-linear-gradient(90deg, #f59e0b 0, #f59e0b 4px, transparent 4px, transparent 8px)'}}></div>
            <span>feedback loop</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full border border-[#22c55e]"></div>
            <span>live output</span>
          </div>
        </div>
      </div>
    </div>
  );
}
