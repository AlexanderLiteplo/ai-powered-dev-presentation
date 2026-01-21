import { useState, useEffect } from 'react'
import './App.css'

const slides = [
  {
    id: 'title',
    title: '🤖 AI-Powered Development',
    subtitle: 'How I Use Claude Code & AI in Daily Workflows',
    content: null,
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'skeptics',
    title: '🤔 Skeptical About AI Coding?',
    subtitle: 'Race the AI!',
    content: (
      <div className="content-box">
        <div className="challenge-box">
          <h3>💡 The Challenge</h3>
          <p>Next time you have a bug, try this:</p>
          <ol>
            <li>Open <span className="highlight">Cursor IDE</span></li>
            <li>Press <kbd>⌘ + L</kbd> to open AI chat</li>
            <li>Race the AI to fix it!</li>
          </ol>
        </div>
        <div className="tip-box">
          <h3>💰 Pro Tip: Model Selection</h3>
          <p>For smaller, precise edits in Cursor:</p>
          <p className="recommendation">
            <span className="model-badge gemini">Gemini 3 Flash</span>
            <span className="badge-desc">Fast, cheap, great for quick fixes</span>
          </p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'costs',
    title: '💵 Model Cost Comparison',
    subtitle: 'Choose the right tool for the job',
    content: (
      <div className="cost-comparison">
        <div className="cost-card gemini-card">
          <div className="cost-header">
            <span className="model-icon">⚡</span>
            <h3>Gemini 3 Flash</h3>
          </div>
          <div className="cost-price">~$0.01-0.05</div>
          <div className="cost-desc">per task</div>
          <ul>
            <li>Quick fixes</li>
            <li>Small edits</li>
            <li>Code snippets</li>
          </ul>
        </div>
        <div className="cost-card sonnet-card">
          <div className="cost-header">
            <span className="model-icon">🎵</span>
            <h3>Sonnet 4.5</h3>
          </div>
          <div className="cost-price">~$0.10-0.50</div>
          <div className="cost-desc">per task</div>
          <ul>
            <li>Medium complexity</li>
            <li>Good balance</li>
            <li>Daily tasks</li>
          </ul>
        </div>
        <div className="cost-card opus-card featured">
          <div className="featured-badge">⭐ My Pick</div>
          <div className="cost-header">
            <span className="model-icon">🎭</span>
            <h3>Opus 4.5</h3>
          </div>
          <div className="cost-price">~$1-5+</div>
          <div className="cost-desc">per task</div>
          <ul>
            <li>Complex tasks</li>
            <li>Long agents</li>
            <li>Best results</li>
          </ul>
        </div>
        <div className="cost-card gpt-card">
          <div className="cost-header">
            <span className="model-icon">🧠</span>
            <h3>GPT 5.2 High</h3>
          </div>
          <div className="cost-price">~$0.50-2</div>
          <div className="cost-desc">per task</div>
          <ul>
            <li>Alternative</li>
            <li>Good reasoning</li>
            <li>Mixed results</li>
          </ul>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'my-workflow',
    title: '🔄 My Model Workflow',
    subtitle: 'Strategic model selection',
    content: (
      <div className="workflow-box">
        <div className="workflow-item">
          <div className="workflow-icon gemini-bg">⚡</div>
          <div className="workflow-content">
            <h3>Gemini 3 Flash</h3>
            <p>Quick tasks in Cursor</p>
            <span className="use-case">Bug fixes, small refactors, code questions</span>
          </div>
        </div>
        <div className="workflow-arrow">→</div>
        <div className="workflow-item featured-workflow">
          <div className="workflow-icon opus-bg">🎭</div>
          <div className="workflow-content">
            <h3>Opus 4.5</h3>
            <p>Complex & long-running tasks</p>
            <span className="use-case">Feature development, architecture, agents</span>
          </div>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 'long-running',
    title: '⏱️ Long-Running Agents',
    subtitle: 'AI can now work autonomously for hours',
    content: (
      <div className="graph-container">
        <img src="/images/graph.jpeg" alt="Time horizon of software engineering tasks" className="graph-image" />
        <div className="graph-caption">
          <p>📈 Claude Opus 4.5 leads with <span className="highlight">~5 hours</span> of autonomous work!</p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'tweet',
    title: '🐦 AI Building AI Tools',
    subtitle: 'Cowork built with Claude Code in ~1.5 weeks',
    content: (
      <div className="tweet-container">
        <img src="/images/tweet.jpeg" alt="Tweet about Claude Code building Cowork" className="tweet-image" />
        <div className="tweet-caption">
          <p>🔥 "How much of it did Claude Code write?" — <strong>"All of it"</strong></p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'ralph-loop',
    title: '🔁 The Ralph Wiggum Loop',
    subtitle: 'Autonomous agentic development pattern',
    content: (
      <div className="ralph-container">
        <img src="/images/ralph-diagram.png" alt="Ralph Wiggum Loop Diagram" className="ralph-image" />
        <div className="ralph-caption">
          <p>📝 Write PRD → 🔄 Convert to stories → 🤖 AI implements → ✅ Tests pass → 🔁 Repeat</p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 'ralph-repo',
    title: '📦 Ralph Repository',
    subtitle: 'github.com/snarktank/ralph',
    content: (
      <div className="repo-box">
        <a href="https://github.com/snarktank/ralph" target="_blank" rel="noopener noreferrer" className="repo-link">
          <span className="github-icon">🔗</span>
          github.com/snarktank/ralph
        </a>
        <ul className="feature-list">
          <li><span className="bullet">📋</span> Write a PRD (Product Requirements Document) defining your app</li>
          <li><span className="bullet">🔧</span> Converts PRD into small, actionable user stories (prd.json)</li>
          <li><span className="bullet">🤖</span> Runs autonomous loop: picks story → implements → tests → commits</li>
          <li><span className="bullet">📝</span> Logs progress and learnings to progress.txt</li>
          <li><span className="bullet">🧠</span> Updates AGENTS.md with patterns for future iterations</li>
          <li><span className="bullet">✅</span> Continues until all stories are complete</li>
        </ul>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'review-process',
    title: '👀 My Review Process',
    subtitle: 'Building without reading code',
    content: (
      <div className="content-box">
        <div className="demo-box">
          <h3>🌐 Demo: library.uma.xyz</h3>
          <p>Built this entire site <span className="highlight">without writing a single line of code</span> or even looking at the repository!</p>
          <p className="subtitle-text">Complete black box development ✨</p>
        </div>
        <div className="warning-box">
          <h3>⚠️ Important Caveat</h3>
          <p>This approach works because:</p>
          <ul>
            <li>It's a <span className="highlight">CRUD app</span> (Create, Read, Update, Delete)</li>
            <li>No critical security considerations</li>
            <li>Low stakes if something breaks</li>
          </ul>
          <p className="warning-text">❌ Don't do this for production systems with security requirements!</p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'ui-reality',
    title: '🎨 The Reality of AI UI Work',
    subtitle: "It's not all magic",
    content: (
      <div className="content-box">
        <div className="reality-box">
          <h3>😅 What to Expect</h3>
          <ul className="reality-list">
            <li><span className="emoji-bullet">📐</span> Still need to instruct <strong>every little UI adjustment</strong></li>
            <li><span className="emoji-bullet">🔁</span> Some bugs will <strong>recur</strong> across different parts of the codebase</li>
            <li><span className="emoji-bullet">🎯</span> AI doesn't always understand <strong>design intent</strong></li>
            <li><span className="emoji-bullet">💬</span> Requires <strong>constant communication</strong> about visual details</li>
          </ul>
        </div>
        <div className="quote-box">
          <p>"AI is a 10x developer that still needs a project manager"</p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'stuck-bugs',
    title: '🐛 Tackling Stuck Bugs',
    subtitle: 'When the AI keeps going in circles',
    content: (
      <div className="bug-strategy">
        <div className="strategy-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>📝 Define Success Clearly</h3>
            <p>Write a <strong>crystal clear definition</strong> of what "fixed" looks like</p>
          </div>
        </div>
        <div className="strategy-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>✅ Write the Test First</h3>
            <p>Create a test that <strong>only passes when the bug is fixed</strong></p>
          </div>
        </div>
        <div className="strategy-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>🔁 Recursive Loop</h3>
            <p>Let AI work until the test passes — <strong>no shortcuts, no exceptions!</strong></p>
          </div>
        </div>
        <div className="strategy-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>🎯 Let It Run</h3>
            <p>Step back and let the AI iterate autonomously</p>
          </div>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 'grounding',
    title: '⚓ Grounding LLMs',
    subtitle: 'Essential guardrails for reliable AI coding',
    content: (
      <div className="grounding-grid">
        <div className="ground-item">
          <span className="ground-icon">🔄</span>
          <h3>CI/CD Pipeline</h3>
          <p>Must have automated checks</p>
        </div>
        <div className="ground-item">
          <span className="ground-icon">📦</span>
          <h3>Commit Often</h3>
          <p>Small, incremental commits as they work</p>
        </div>
        <div className="ground-item">
          <span className="ground-icon">🧪</span>
          <h3>Run Tests</h3>
          <p>After each small task completion</p>
        </div>
        <div className="ground-item good">
          <span className="ground-icon">✅</span>
          <h3>TypeScript</h3>
          <p>Types force failures = faster debugging</p>
        </div>
        <div className="ground-item bad">
          <span className="ground-icon">⚠️</span>
          <h3>Avoid: JS/Python</h3>
          <p>Lacking types = wild runtime errors</p>
        </div>
        <div className="ground-item">
          <span className="ground-icon">🔒</span>
          <h3>Type Safety</h3>
          <p>Catch errors at compile time, not runtime</p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'claude-md',
    title: '📄 claude.md Setup',
    subtitle: 'Teaching the AI about your project',
    content: (
      <div className="claude-md-box">
        <div className="md-section">
          <h3>📋 What to Include:</h3>
          <ul className="md-list">
            <li><span className="md-icon">👤</span> <strong>Who</strong> is being assisted (your role, team)</li>
            <li><span className="md-icon">📍</span> <strong>Where</strong> your projects are located</li>
            <li><span className="md-icon">🏢</span> <strong>What company</strong> you work for</li>
            <li><span className="md-icon">🛠️</span> <strong>Tech stack</strong> (languages, frameworks, tools)</li>
            <li><span className="md-icon">📂</span> <strong>Repo responsibilities</strong> (what each repo does)</li>
          </ul>
        </div>
        <div className="code-example">
          <pre>{`# CLAUDE.md Example
## Context
- Developer at Acme Corp
- Working on: web app + API
- Stack: TypeScript, React, Node.js

## Repos
- /app - Frontend React app
- /api - Backend Node service
- /shared - Shared types`}</pre>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'personal-prefs',
    title: '✨ Personal Preferences',
    subtitle: 'Making AI work for your workflow',
    content: (
      <div className="prefs-container">
        <div className="pref-card">
          <div className="pref-icon">🌐</div>
          <h3>open command</h3>
          <p>AI opens links/files when it wants you to test or see something</p>
          <code>open https://localhost:3000</code>
        </div>
        <div className="pref-card">
          <div className="pref-icon">🔊</div>
          <h3>say command</h3>
          <p>Audible alerts when AI needs attention or hits an issue</p>
          <code>say "Build failed, need help"</code>
        </div>
        <div className="pref-card special">
          <div className="pref-icon">📱</div>
          <h3>SMS Notifications</h3>
          <p>For personal projects: Claude texts me to unblock it or get design feedback</p>
          <p className="pref-quote">"Enjoy your weekend while AI works!"</p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'end',
    title: '🙏 Thanks!',
    subtitle: 'Questions?',
    content: (
      <div className="end-content">
        <div className="summary-points">
          <p>🏁 Race the AI to believe it</p>
          <p>💰 Use the right model for the task</p>
          <p>⚓ Ground your AI with tests & types</p>
          <p>📱 Integrate it into your life</p>
        </div>
        <div className="resources">
          <h3>🔗 Resources</h3>
          <p><a href="https://github.com/snarktank/ralph" target="_blank">github.com/snarktank/ralph</a></p>
          <p><a href="https://library.uma.xyz" target="_blank">library.uma.xyz</a></p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  }
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length && !isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const nextSlide = () => goToSlide(currentSlide + 1)
  const prevSlide = () => goToSlide(currentSlide - 1)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const slide = slides[currentSlide]

  return (
    <div className="presentation" style={{ background: slide.bgGradient }}>
      <div className={`slide ${isAnimating ? 'animating' : ''}`}>
        <div className="slide-number">
          {currentSlide + 1} / {slides.length}
        </div>

        <div className="slide-content">
          <div className="title-area">
            <h1 className="slide-title">{slide.title}</h1>
            {slide.subtitle && <h2 className="slide-subtitle">{slide.subtitle}</h2>}
          </div>

          {slide.content && (
            <div className="content-area">
              {slide.content}
            </div>
          )}
        </div>

        <div className="navigation">
          <button
            className="nav-btn prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ← Previous
          </button>

          <div className="slide-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <button
            className="nav-btn next"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
