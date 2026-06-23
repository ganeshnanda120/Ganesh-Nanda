// ==========================================
// 1. DATA DICTIONARIES
// ==========================================

const skillsData = [
  {
    category: 'Programming',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Dart', level: 92 },
      { name: 'Java', level: 75 }
    ]
  },
  {
    category: 'Frontend',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
    items: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Flutter', level: 92 }
    ]
  },
  {
    category: 'Backend',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><circle cx="12" cy="5" r="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 82 },
      { name: 'Firebase', level: 85 }
    ]
  },
  {
    category: 'Tools',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    items: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'VS Code', level: 95 }
    ]
  },
  {
    category: 'Others',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'Debugging', level: 85 },
      { name: 'Testing', level: 82 }
    ]
  }
];

const projectsData = [
  {
    id: 'goalflow',
    title: 'Goalflow',
    category: 'Apps',
    desc: 'GoalFlow is a modern, premium mobile productivity and habit-tracking application designed to help users build consistency, manage daily schedules, and log personal development.',
    techs: ['Flutter', 'Dart', 'Provider', 'Hive', 'Local Notifications'],
    demoUrl: 'https://github.com/ganeshnanda120/Goalflow',
    githubUrl: 'https://github.com/ganeshnanda120/Goalflow',
    gradient: '#091b29',
    graphic: `<img src="./src/assets/goalflow.png" alt="Goalflow" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Mobile Productivity',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: GoalFlow</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              GoalFlow is a modern, premium mobile productivity and habit-tracking application designed to help users build consistency, manage daily schedules, and log personal development.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Key Features & Workflows
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 10px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Daily Challenges & Habit Tracking</strong>
                <ul style="padding-left: 16px; list-style-type: circle; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
                  <li>Consistency Streaks: Track current vs. longest check-in streaks.</li>
                  <li>Challenge Customization: Set predefined or custom durations with names and descriptions.</li>
                  <li>Gmail-style Selection Mode: Long-press challenges to select and bulk-delete them.</li>
                  <li>Daily Experience Diary: Add multiple separate chronological progress entries on the same day. Tap to read details, edit notes, or long-press to bulk-delete entries.</li>
                </ul>
              </li>
              <li><strong>Enhanced Stopwatch & Countdown Timer</strong>
                <ul style="padding-left: 16px; list-style-type: circle; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
                  <li>Autoscaling Display: Adapts dynamically to different screen widths.</li>
                  <li>Three-Button Controls: Start, Pause, and Restart actions.</li>
                  <li>Quick Presets & Custom Input: One-click presets (30s, 1m, 5m, 10m) or custom inputs for hours, minutes, and seconds.</li>
                </ul>
              </li>
              <li><strong>Alarms & Daily Reminders</strong>
                <ul style="padding-left: 16px; list-style-type: circle; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
                  <li>Dynamic Alarm Engine: Single/recurring alarms and notifications mapped to weekly or monthly goals.</li>
                </ul>
              </li>
              <li><strong>Daily Notes & Editor</strong>
                <ul style="padding-left: 16px; list-style-type: circle; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
                  <li>Write, view, search, and edit daily logs, thoughts, and memos.</li>
                </ul>
              </li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              🛠️ Technology Stack Used
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>App Framework:</strong> Flutter (Dart SDK ^3.11.4)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>State Management:</strong> provider (^6.1.0)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Local Storage & Database:</strong> hive (^2.2.3), hive_flutter (^1.1.0), and path_provider (^2.1.5)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Local Notifications:</strong> flutter_local_notifications (^17.0.0)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Unique Identifiers:</strong> uuid (^4.0.0)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Date & Time Formatting:</strong> intl (^0.19.0) & timezone (^0.9.1)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Animations:</strong> confetti (^0.7.0)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Media / Image Handling:</strong> image_picker (^1.0.4) & cupertino_icons (^1.0.8)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Development & Build Tools:</strong><br/>
                build_runner (^2.4.13)<br/>
                hive_generator (^2.0.0)<br/>
                flutter_launcher_icons (^0.13.1)<br/>
                flutter_lints (^6.0.0)
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'health-companion',
    title: 'Health Companion',
    category: 'Apps',
    desc: 'Health Companion is a premium, AI-powered health and wellness companion mobile application designed with a calming dark theme and Material 3 guidelines.',
    techs: ['Flutter', 'Dart', 'Provider', 'SharedPreferences', 'fl_chart', 'Speech-to-Text', 'TTS'],
    demoUrl: 'https://github.com/ganeshnanda120/Health-Companion',
    githubUrl: 'https://github.com/ganeshnanda120/Health-Companion',
    gradient: '#222222',
    graphic: `<img src="./src/assets/health_companion.jpg" alt="Health Companion" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Holistic Wellness',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: Health Companion</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              <strong>Health Companion</strong> is a premium, AI-powered health and wellness companion mobile application designed with a calming dark theme and Material 3 guidelines. It acts as a holistic wellness coach to help users log hydration, monitor sleep, track habits, log nutrition, and interact with a voice-based companion.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Key Features & Functionalities:
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Calm & Premium Aesthetics:</strong> Deep dark-slate backgrounds combined with glowing Aurora Borealis gradients and custom micro-animations.</li>
              <li><strong>Daily Insight Hub:</strong> A real-time contextual banner that alerts users to hydration shortages, sleep variance, and outstanding goals based on weekly logs.</li>
              <li><strong>Animated Virtual Water Bottle:</strong> Renders fluid liquid inside a bottle container using compound sine-wave equations, rising and falling dynamically based on the user's water goal.</li>
              <li><strong>Interactive Sleep Analytics:</strong> Visualizes sleep durations and quality logs using custom bar graphs and alerts users when they stray from their sleep averages.</li>
              <li><strong>Flexible Habit Checklist:</strong> Multi-state checks (Complete, Skip, Pause) with active consecutive streak tracking and category tags.</li>
              <li><strong>Mindful Nutrition Log:</strong> A macronutrients ratio analysis (Protein, Carbs, Fats) represented as a donut chart to focus on food awareness.</li>
              <li><strong>Aurora AI Voice Companion:</strong> A simulated voice-to-voice health partner that parses vocal inputs (e.g., <em>"I drank 500ml water"</em>) and records them directly into the database.</li>
              <li><strong>Offline-first Architecture:</strong> Persists sessions, configuration, conversation logs, and telemetry locally.</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              Technology Stack
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Frontend Framework:</strong> Flutter (Latest Stable)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Programming Language:</strong> Dart
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Design System:</strong> Material 3
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>State Management:</strong> Provider (provider: ^6.1.2)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Local Storage:</strong> SharedPreferences (shared_preferences: ^2.2.3)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Data Visualizations:</strong> fl_chart (fl_chart: ^0.66.0)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Voice & Text Capabilities:</strong><br/>
                - speech_to_text: ^7.3.0<br/>
                - flutter_tts: ^4.1.0
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Additional Utilities:</strong><br/>
                - intl: ^0.19.0<br/>
                - uuid: ^4.3.3<br/>
                - image_picker: ^1.2.2
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    category: 'Apps',
    desc: 'A premium, DartPad-compatible Flutter fitness logging and progress-tracking dashboard. It provides a visual interface for monitoring daily workout statistics and tracking personal health goals.',
    techs: ['Flutter', 'StatefulWidget', 'Material 3', 'shared_preferences'],
    demoUrl: 'https://github.com/ganeshnanda120/Fitness-Tracker',
    githubUrl: 'https://github.com/ganeshnanda120/Fitness-Tracker',
    gradient: '#020d13',
    graphic: `<img src="./src/assets/fitness_tracker.jpg" alt="Fitness Tracker" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Mobile Dashboard',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: Fitness Tracker</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              A premium, DartPad-compatible Flutter fitness logging and progress-tracking dashboard. It provides a visual interface for monitoring daily workout statistics and tracking personal health goals.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Key Features:
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Initial Profile & Goal Setup:</strong> Form wizard to configure name, age, height, current weight, daily calorie goal, and daily activity duration goal.</li>
              <li><strong>Calorie & Active Time Dashboard:</strong> Interactive circular progress rings that visualize real-time progress toward daily calorie and duration goals.</li>
              <li><strong>Multi-Activity Logging:</strong> Support for logging 7 workout types: Walking, Running, Cycling, Swimming, Yoga, Skipping, and Gym Workouts.</li>
              <li><strong>MET-Based Calorie Estimation:</strong> Automatically calculates burned calories using the formula: MET * weight (kg) * (duration (mins) / 60).</li>
              <li><strong>Animated Workout History:</strong> Chronological log of past workouts built with a dynamic SliverAnimatedList featuring custom entrance/exit transitions and a tap-to-delete confirmation dialog.</li>
              <li><strong>Responsive Design:</strong> Auto-scaling layout that dynamically adjusts between grid columns for desktop/tablet widths and single-column structures for mobile.</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              Technology Stack
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Framework:</strong> Flutter (Dart SDK >=3.0.0 &lt;4.0.0)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>State Management:</strong> Native stateful widget state (StatefulWidget) to maintain single-file, DartPad-compatible portability.
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Design System:</strong> Material 3 (with custom dark mode slate and teal/cyan color schemes).
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Local Storage / Persistence:</strong> shared_preferences: ^2.2.0 (for persisting user profiles, targets, and workout records).
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Development Utilities:</strong> flutter_launcher_icons: ^0.13.1 (for app launcher assets).
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'resume-builder',
    title: 'Resume Builder',
    category: 'Apps',
    desc: 'A beautiful, modern, and production-ready Flutter web application that enables users to create and customize professional resumes completely free and 100% offline.',
    techs: ['Flutter', 'Dart', 'Material 3', 'pdf', 'printing', 'image_picker', 'url_launcher'],
    demoUrl: 'https://github.com/ganeshnanda120/Resume-Builder',
    githubUrl: 'https://github.com/ganeshnanda120/Resume-Builder',
    gradient: '#ffffff',
    graphic: `<img src="./src/assets/resume_builder.jpg" alt="Resume Builder" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Mobile Productivity',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: Hero Resume Builder</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              <strong>Hero Resume Builder</strong> is a beautiful, modern, and production-ready Flutter web application that enables users to create and customize professional resumes completely free and 100% offline. It operates entirely client-side inside the browser, guaranteeing maximum user privacy.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Key Features & Workflows:
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Real-time Live Preview:</strong> Instantly displays updates on an A4 sheet layout preview as form fields are filled out.</li>
              <li><strong>Offline First & Private:</strong> Operates entirely client-side inside the browser, ensuring user data never leaves the device.</li>
              <li><strong>Modern Material 3 Theme:</strong> Styled with a clean orange UI palette adhering to the Material 3 design spec.</li>
              <li><strong>Responsive Multi-Pane Interface:</strong> Dual-column split layout for desktops that transitions to tabbed navigation for screens of smaller sizes.</li>
              <li><strong>Rich Document Sections:</strong> Pre-built panels for personal info, profile pictures, education, projects, skills, certifications, and languages.</li>
              <li><strong>High-Fidelity PDF Export:</strong> Seamless print-ready document exports with customized PDF alignments and fonts.</li>
              <li><strong>Sample Data Population:</strong> Single-click placeholder injection to quickly preview resume formatting options.</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              Technology Stack Used
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Frontend Framework:</strong> Flutter (Web Platform target)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Programming Language:</strong> Dart
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Design System:</strong> Material 3 (Orange theme preset)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Typography:</strong> Google Fonts (Outfit & Inter)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Key Packages & Libraries:</strong><br/>
                - pdf (Custom document building & A4 canvas mapping)<br/>
                - printing (Live browser previewer & print layouts)<br/>
                - image_picker (Web-compliant image selection & file browser)<br/>
                - url_launcher (Secure external redirection & social linkages)
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'quiz-app',
    title: 'Quiz App',
    category: 'Apps',
    desc: 'An interactive trivia and quiz application.',
    techs: ['Flutter', 'Dart', 'Material Design', 'vector_math', 'cupertino_icons', 'flutter_launcher_icons'],
    demoUrl: 'https://github.com/ganeshnanda120/Quiz-app',
    githubUrl: 'https://github.com/ganeshnanda120/Quiz-app',
    gradient: '#434854',
    graphic: `<img src="./src/assets/quiz_app.jpg" alt="Quiz App" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Interactive Trivia',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study Summary</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              <strong>Core Functionality:</strong> An interactive trivia and quiz application.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Key Features:
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Categorized Quizzes:</strong> Supports multiple topics including Flutter & Dart, Computer Science, and General Knowledge.</li>
              <li><strong>Question Timer:</strong> Real-time 30-second countdown timer per question with auto-navigation and automatic submission on timeout.</li>
              <li><strong>Interactive Scoring:</strong> Dynamic results page showing correctly answered questions, total score, and custom explanations for each answer.</li>
              <li><strong>Smooth Transitions:</strong> Custom dark mode UI with page transitions powered by AnimatedSwitcher and FadeTransition.</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              Exact Technology Stack
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13.5px;">
              <div style="padding: 10px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Core Framework:</strong> Flutter (Cross-platform)
              </div>
              <div style="padding: 10px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Programming Language:</strong> Dart
              </div>
              <div style="padding: 10px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Design/Theme:</strong> Material Design with a custom dark gradient theme
              </div>
              <div style="padding: 10px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Key Packages & Dependencies:</strong><br/>
                - vector_math (for mathematical/layout calculations)<br/>
                - cupertino_icons (for iOS-style UI icons)<br/>
                - flutter_launcher_icons (for asset-based launcher icon generation)
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'incredible-india',
    title: 'Incredible India',
    category: 'Apps',
    desc: 'The Incredible India application is a premium, responsive travel guide and tourism discovery app designed to showcase India’s cultural heritage, natural landscapes, and spiritual destinations.',
    techs: ['Flutter', 'Dart', 'Material 3', 'Canvas API', 'ValueNotifier'],
    demoUrl: 'https://github.com/ganeshnanda120/Incredible-India-app',
    githubUrl: 'https://github.com/ganeshnanda120/Incredible-India-app',
    gradient: 'linear-gradient(to right, #fea638, #ff4011)',
    graphic: `<img src="./src/assets/incredible_india.png" alt="Incredible India" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Mobile Travel',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: Incredible India</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              The Incredible India application is a premium, responsive travel guide and tourism discovery app designed to showcase India’s cultural heritage, natural landscapes, and spiritual destinations under the core philosophical motto of "Athithi Devo Bhava" (The guest is equivalent to God).
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Core Features
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 10px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Dynamic Travel Discovery:</strong>
                <ul style="padding-left: 16px; list-style-type: circle; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
                  <li>Search & Filters: Users can search destinations or states in real-time.</li>
                  <li>Category-Based Filtering: Places are categorized into Heritage (e.g., Taj Mahal, Hawa Mahal, Ellora Caves), Nature (e.g., Munnar Tea Gardens, Valley of Flowers, Sundarbans), and Spiritual (e.g., Golden Temple, Varanasi Ghats).</li>
                  <li>Interactive Favorites System: A stateful toggle to save favorite destinations and filter the feed to show only favorites.</li>
                </ul>
              </li>
              <li><strong>Adaptive Responsive Layouts:</strong> Dynamically adapts between a clean single-column list layout on mobile devices and a multi-column grid layout on tablets or web screens based on screen width constraint checks.</li>
              <li><strong>Advanced Destination Detail Screen:</strong>
                <ul style="padding-left: 16px; list-style-type: circle; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
                  <li>Implements a tabbed interface (TabBarView) showing Overview, History & Facts (featuring a grid layout of key-value quick facts), and Traveler Tips (rendered with custom checked icons).</li>
                  <li>Features structured destination data including ratings, best time to visit, and verification badges.</li>
                </ul>
              </li>
              <li><strong>Interactive Trip Planner:</strong> An interactive bottom sheet panel to request customized itineraries, displaying mock prices for services like heritage tours, private cabs, and local culinary experiences.</li>
              <li><strong>Zero-Asset Vector Graphics (Custom Canvas Painters):</strong> Instead of downloading external images, the app features custom Dart/Flutter vector graphics drawn programmatically on-the-fly using CustomPainter to keep the app lightweight:
                <ul style="padding-left: 16px; list-style-type: circle; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
                  <li>Ashoka Chakra Logo: A mathematically precise 24-spoked wheel drawn with custom trigonometric approximation mappings to avoid runtime math dependencies.</li>
                  <li>Heritage Archway: A custom-drawn Indian-style classical archway using cubic bezier paths.</li>
                  <li>Nature Scenery: Stylized mountains, custom radial gradient suns, and wave ripples.</li>
                  <li>Spiritual Lotus: Symmetrical lotus petals drawn utilizing quadratic bezier curves with a soft halo ring background.</li>
                </ul>
              </li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              🛠️ Technology Stack Used
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Development Framework:</strong> Flutter & Dart (Target environment SDK constraints: sdk: ^3.11.4)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>UI Design System & Styling:</strong> Material 3 Design enabled globally (useMaterial3: true). Tailored light and dark theme seed schemes representing saffron (0xFFFF9933), green (0xFF138808), and navy blue (0xFF000080).
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Custom Graphics Engine:</strong> Flutter's Canvas API (Path, Paint, RadialGradient, cubicTo, quadraticBezierTo) for all graphics.
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>State Management:</strong> ValueNotifier / ValueListenableBuilder listens and propagates theme changes; StatefulWidgets manage local queries, favorites, and filters.
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Navigation & Transitions:</strong> Hero Animations smoothly transition the card widgets; NestedScrollView & SliverAppBar enable collapsing scroll animations on details.
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'note-app',
    title: 'Note App',
    category: 'Apps',
    desc: 'This application is a modern, responsive Notes Dashboard designed to capture, organize, and filter thoughts with premium aesthetics.',
    techs: ['Flutter', 'Dart', 'shared_preferences', 'Material 3', 'cupertino_icons'],
    demoUrl: 'https://github.com/ganeshnanda120/Note-app',
    githubUrl: 'https://github.com/ganeshnanda120/Note-app',
    gradient: '#ffffff',
    graphic: `<img src="./src/assets/note_app.png" alt="Note App" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Mobile Productivity',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: Note-app (My Notes Dashboard)</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              This application is a modern, responsive Notes Dashboard designed to capture, organize, and filter thoughts with premium aesthetics.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Core Features:
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Interactive Dashboard & Stats:</strong>
                <ul style="padding-left: 16px; list-style-type: circle; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
                  <li>Real-time stat cards displaying Total Notes, Favorites, and Ideas counters.</li>
                  <li>Tapping these statistics triggers direct filtering (e.g., clicking the "Favorites" stat toggles only favorited notes).</li>
                  <li>Dynamic time-aware greetings (e.g., "Good morning", "Good evening") and formatted header date.</li>
                </ul>
              </li>
              <li><strong>Pinterest-style Staggered Grid:</strong> An emulated masonry grid that automatically splits cards into $N$ vertical columns (2 on mobile, 3 on desktop) to handle notes of variable lengths beautifully.</li>
              <li><strong>Slide-up Note Editor:</strong> A custom bottom sheet that slides up to add/modify notes. Real-time word counter and character counter updating as you type.</li>
              <li><strong>Visual Accent Customization:</strong> Color picker selection with a curated list of modern pastel tones (Sky Blue, Mint Green, Soft Yellow, Cherry Blossom Pink, Lavender Purple, Soft Peach, Cool Slate, Warm Stone).</li>
              <li><strong>Swipe-to-Delete with Undo:</strong> Integration of Gmail-style dismissible cards with horizontal swipe action and a floating Undo SnackBar to recover deleted notes instantly.</li>
              <li><strong>Smart Search & Filters:</strong> Instant search queries matching keywords inside titles and note content. Category filtering chips (All, Personal, Work, Study, Ideas, Others).</li>
              <li><strong>Animated Glassmorphic Dark Mode:</strong> Seamless dark/light theme switching with a rotating animated sun/moon icon and background glassmorphic rings.</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              🛠️ Technology Stack Used
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Core Architecture:</strong><br/>
                - Flutter Framework (Dart SDK ^3.11.4): A multi-platform codebase building native interfaces across Android, iOS, Web, macOS, Linux, and Windows.<br/>
                - Material Design 3 (Material 3): Provides modern components, color-seed generation, typography, and premium user interaction curves.
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Key Packages & Dependencies:</strong><br/>
                - shared_preferences (v2.5.5): Persists user-created notes locally on the device using serialized JSON string stores.<br/>
                - dart:convert: Handled natively within the Dart SDK to encode/decode the standard Note models.<br/>
                - cupertino_icons (v1.0.8): Used for Apple-style fallback icons.
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Development & Linting:</strong><br/>
                - flutter_launcher_icons (v0.14.4): Automated asset tool configures and generates launcher icons across Android and iOS platform folders using flutter_launcher_icons.yaml.<br/>
                - flutter_lints (v6.0.0): Code analysis tool configuring coding guidelines defined in analysis_options.yaml.
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Apps',
    desc: 'The Expense Tracker is a clean, modern, and intuitive personal finance application designed to help users track and monitor their daily expenditures.',
    techs: ['Flutter', 'Dart', 'Material 3', 'intl', 'shared_preferences'],
    demoUrl: 'https://github.com/ganeshnanda120/Expense-Tracker',
    githubUrl: 'https://github.com/ganeshnanda120/Expense-Tracker',
    gradient: '#ffffff',
    graphic: `<img src="./src/assets/expense_tracker.png" alt="Expense Tracker" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Mobile Finance',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: Expense Tracker</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              The Expense Tracker is a clean, modern, and intuitive personal finance application designed to help users track and monitor their daily expenditures. It is intended to teach or demonstrate core mobile application concepts such as CRUD (Create, Read, Update, Delete) operations, form validation, dynamic list rendering, and state management.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              👥 Primary Use Cases
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 6px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Personal Finance:</strong> Tracking individual daily spending patterns.</li>
              <li><strong>Student Expense Management:</strong> Keeping logs of expenses on food, books, transport, etc.</li>
              <li><strong>Family Budget Tracking:</strong> Monitoring overall household expenditures.</li>
              <li><strong>Small Business Records:</strong> A simple ledger to maintain basic operational expenses.</li>
            </ul>
          </div>

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ✨ Core Features
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Expense Input:</strong> Users can add new expense items with a Title and Amount.</li>
              <li><strong>Real-time Total Calculation:</strong> The top card dynamically calculates and displays total spending as items are added or removed.</li>
              <li><strong>Form Validation:</strong> Built-in form checks to prevent blank titles or negative/invalid amounts.</li>
              <li><strong>ListView Rendering:</strong> A scrollable cards-based list layout displaying each expense with its title, amount, and the timestamp it was recorded.</li>
              <li><strong>Confirmation Dialogs:</strong> Asks for confirmation before permanently deleting an expense.</li>
              <li><strong>Empty State Screen:</strong> A clean placeholder illustration and message when no expenses have been recorded yet.</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              🛠️ Technology Stack
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Framework:</strong> Flutter SDK Version ^3.0.0 (Supports Android, iOS, and Web deployment)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Language:</strong> Dart (Modern object-oriented programming language)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Design System:</strong> Material Design 3 (Enabled by default for widgets, cards, dialogs, and actions)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>State Management:</strong> StatefulWidget & setState() (Native reactive UI changes)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Date & Currency Formatting:</strong> intl Package (v0.19.0)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Icon Set:</strong> cupertino_icons (v1.0.0) iOS-style icons
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Asset / Launcher Utility:</strong> flutter_launcher_icons (v0.14.4) generates launcher icons
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Linting & Code Quality:</strong> flutter_lints (v3.0.0) enforces standards
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'ganesh-nanda-portfolio',
    title: 'Ganesh Nanda Portfolio',
    category: 'Webs',
    desc: 'A premium personal developer portfolio featuring canvas particles, dynamic light/dark modes, radar skill chart, and multi-language translation support.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'html2pdf.js', 'Canvas API'],
    demoUrl: 'https://github.com/ganeshnanda120/Ganesh-Nanda',
    githubUrl: 'https://github.com/ganeshnanda120/Ganesh-Nanda',
    gradient: '#ffffff',
    graphic: `<img src="./src/assets/ganesh_nanda_portfolio.jpg" alt="Ganesh Nanda Portfolio" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Web Application',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: Ganesh Nanda Portfolio</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              <strong>Ganesh Nanda Portfolio</strong> is a premium, interactive personal portfolio website showcasing software development expertise. It features a custom interactive particle background, multi-language toggling, a dynamic SVG radar skill chart, and an on-the-fly client-side PDF resume builder.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Key Features & Workflows:
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Interactive Particles Canvas:</strong> Uses raw HTML5 Canvas API with custom gravity/attraction physics responding to mouse movements.</li>
              <li><strong>Responsive Radar Chart:</strong> SVG-based skill radar map that plots skills dynamically onto circular grids using polar coordinates.</li>
              <li><strong>In-Browser Resume Compiler:</strong> Generates styled, print-ready PDF resumes directly from HTML elements using client-side libraries.</li>
              <li><strong>Multi-Language Support:</strong> Localized dictionary-based client translation system allowing instant toggling between English (EN) and Hindi (HI).</li>
              <li><strong>Glassmorphic Theme Engine:</strong> Sleek slate-colored theme supporting smooth transition properties and dynamic CSS variable updates.</li>
              <li><strong>Search and Filter System:</strong> Real-time keypress parsing to filter technical skills and category-based projects on-the-fly.</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              Technology Stack Used
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Markup & Structure:</strong> HTML5 (Semantic elements)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Styling System:</strong> Vanilla CSS3 (Custom variables, glassmorphism)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Logic & Interactive Systems:</strong> ES6+ JavaScript (DOM manipulation)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>PDF Generator:</strong> html2pdf.js (cdnjs release)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Layout Models:</strong> Grid Layout & Flexbox (100% responsive boundaries)
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    id: 'trading-bot',
    title: 'Trading Bot',
    category: 'Python',
    desc: 'An automated algorithmic trading assistant featuring clean architecture, direct REST integration, server time sync, and simulated dry runs.',
    techs: ['Python', 'requests', 'python-dotenv', 'pytest'],
    demoUrl: 'https://github.com/ganeshnanda120/Trading-Bot',
    githubUrl: 'https://github.com/ganeshnanda120/Trading-Bot',
    gradient: '#000000',
    graphic: `<img src="./src/assets/trading_bot.jpg" alt="Trading Bot" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`,
    caseStudy: {
      category: 'Algorithmic Tool / Python',
      htmlContent: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--accent); margin-bottom: 8px;">Case Study: Trading Bot</h3>
            <p style="color: var(--text-secondary); font-size: 14.5px; line-height: 1.6;">
              An automated algorithmic trading assistant featuring clean architecture, direct REST integration, server time sync, and simulated dry runs.
            </p>
          </div>
          
          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Core Features:
            </h4>
            <ul style="padding-left: 20px; list-style-type: disc; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); font-size: 14px; line-height: 1.5;">
              <li><strong>Clean Architecture:</strong> Strict separation between input parsing, request validation, business logic, configuration, and API communication.</li>
              <li><strong>Direct REST Integration:</strong> Handmade cryptographic signing (HMAC-SHA256) over standard requests to eliminate bloated external SDKs.</li>
              <li><strong>Server Time Sync:</strong> Synchronizes dynamically with Binance's server time (<code>/fapi/v1/time</code>) to prevent -1021 INVALID_TIMESTAMP signature latency errors.</li>
              <li><strong>Endpoint Routing:</strong> Automatically routes standard orders to <code>/order</code> and conditional orders (e.g., Stop-Limit orders) to the newer Binance Algo Order API (<code>/algoOrder</code>).</li>
              <li><strong>Simulated Dry Run:</strong> Custom mock runner to test API flow, authorization failures, and margin limits without real credentials.</li>
            </ul>
          </div>

          <hr style="border: none; border-top: 1px solid var(--card-border);" />

          <div>
            <h4 style="font-size: 16px; font-weight: 750; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              🛠️ Technology Stack
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px;">
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px;">
                <strong>Language:</strong> Python 3.10+ (Tested on Python 3.14.0)
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Dependencies:</strong><br/>
                - <code>requests</code>: HTTP client for REST calls<br/>
                - <code>python-dotenv</code>: Environment configuration management<br/>
                - <code>pytest</code>: Automated testing framework for parameter validators
              </div>
              <div style="padding: 8px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; grid-column: 1 / -1;">
                <strong>Key Files:</strong> <code>requirements.txt</code> | <code>README.md</code>
              </div>
            </div>
          </div>
        </div>
      `
    }
  }
];

const certificatesData = [
  {
    id: 'iot',
    title: 'Introduction to the Internet of Things and Embedded Systems',
    issuer: 'UCI (University of California, Irvine)',
    date: 'Jan 20, 2025',
    credentialId: 'YRISP6PVVP3M',
    color: 'var(--accent)',
    image: './src/assets/cert_iot.jpg',
    verifyUrl: 'https://coursera.org/verify/YRISP6PVVP3M'
  },
  {
    id: 'genai',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: 'Jan 14, 2025',
    credentialId: 'US1YT9IDFSJB',
    color: 'var(--accent-secondary)',
    image: './src/assets/cert_genai.jpg',
    verifyUrl: 'https://coursera.org/verify/US1YT9IDFSJB'
  },
  {
    id: 'python-ai',
    title: 'Python using AI Workshop',
    issuer: 'AI for Techies',
    date: 'Oct 26, 2025',
    credentialId: 'AIFT-PYAI-2025',
    color: 'var(--success)',
    image: './src/assets/cert_python_ai.jpg',
    verifyUrl: ''
  }
];

const locales = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navCertifications: 'Certifications',
    navContact: 'Contact',
    
    heroGreeting: "Hi, I'm",
    heroTypingPrefix: "I am a ",
    heroDesc: "I am a passionate Software Developer specializing in building full-stack web applications and cross-platform mobile apps. I love creating responsive user interfaces and practical solutions using React, Node.js, and Flutter.",
    heroBtnResume: "View Resume",
    heroBtnContact: "Get in Touch",
    
    aboutSub: "Get to know me",
    aboutTitle: "About Me",
    aboutBio: "I am a passionate developer specializing in mobile Apps and Web Development. I enjoy building practical solutions that solve real-world problems. With experience across responsive frontend interfaces (React, Flutter) and backend integration (Node.js, MongoDB), I focus on performance, cleanliness, and developer experience.",
    aboutGoalsTitle: "Career Goals",
    aboutGoals: "My goal is to construct robust software products that simplify human tasks. I am eager to join dynamic engineering teams where I can contribute my skills in Flutter, full-stack JavaScript frameworks, and efficient database management to build impactful applications.",
    aboutLoc: "Location",
    aboutMail: "Email",
    aboutDegree: "Education",
    aboutDesignation: "Interests",
    
    skillsSub: "My Technical Stack",
    skillsTitle: "Skills & Proficiency",
    skillsRadarTitle: "Skills Radar Map",
    radarHoverText: "Hover vertices to view details",
    
    projectsSub: "My Recent Work",
    projectsTitle: "Projects Showcase",
    projectsFilterAll: "All",
    projectsCaseStudy: "Case Study",
    projectsLiveDemo: "Live Demo",
    
    expSub: "Experience & Education",
    expTitle: "Professional Timeline",
    
    certSub: "Licenses & Accomplishments",
    certTitle: "Certifications",
    certClickPreview: "Click 'View' to preview certificate",
    
    contactSub: "Contact Information",
    contactTitle: "Let's Connect",
    visitorText: "Profile Visitors",

    resumeModalTitle: "Resume Preview",
    resumePrint: "Print",
    resumeDownload: "Download PDF",
    resumeDesignation: "Full Stack & Apps Developer",
    resumeSummaryTitle: "Professional Summary",
    resumeSummary: "Highly motivated and results-oriented software developer with a strong foundation in building high-performance mobile applications, responsive web applications, and backend REST APIs. Expert in writing clean, modular code, solving complex technical issues, and launching scalable digital products.",
    resumeExpTitle: "Professional Experience",
    resumeEduTitle: "Education",

    csProblem: "Problem Statement",
    csSolution: "The Solution",
    csChallenges: "Technical Bottlenecks & Decisions",
    csArchitecture: "Architecture Diagram",
    csImpact: "Impact & Key Results"
  },
  hi: {
    navHome: 'मुख्य पृष्ठ',
    navAbout: 'मेरे बारे में',
    navSkills: 'कौशल',
    navProjects: 'परियोजनाएं',
    navExperience: 'अनुभव',
    navCertifications: 'प्रमाणपत्र',
    navContact: 'संपर्क',
    heroGreeting: "नमस्ते, मैं हूँ",
    heroTypingPrefix: "मैं एक ",
    heroDesc: "मैं एक उत्साही सॉफ्टवेयर डेवलपर हूँ जो फुल-स्टैक वेब एप्लिकेशन और क्रॉस-प्लेटफॉर्म मोबाइल ऐप बनाने में विशेषज्ञता रखता हूँ। मुझे रिएक्ट, नोड.जेएस और फ्लटर का उपयोग करके उत्तरदायी यूजर इंटरफेस और व्यावहारिक समाधान बनाना पसंद है।",
    heroBtnResume: "बायोडाटा देखें",
    heroBtnContact: "संपर्क करें",
    
    aboutSub: "मुझे और जानें",
    aboutTitle: "मेरे बारे में",
    aboutBio: "मैं मोबाइल ऐप्स और वेब डेवलपमेंट में विशेषज्ञता रखने वाला एक उत्साही डेवलपर हूँ। मुझे व्यावहारिक समाधान बनाना पसंद है जो वास्तविक दुनिया की समस्याओं को हल करते हैं। उत्तरदायी फ्रंटएंड इंटरफेस (रिएक्ट, फ्लटर) और बैकएंड एकीकरण (नोड.जेएस, मोंगोडीबी) के अनुभव के साथ, मैं प्रदर्शन, स्वच्छता और डेवलपर अनुभव पर ध्यान केंद्रित करता हूँ।",
    aboutGoalsTitle: "कैरियर के लक्ष्य",
    aboutGoals: "मेरा लक्ष्य मजबूत सॉफ्टवेयर उत्पाद बनाना है जो मानव कार्यों को सरल बनाते हैं। मैं गतिशील इंजीनियरिंग टीमों में शामिल होने के लिए उत्सुक हूँ जहाँ मैं प्रभावशाली एप्लिकेशन बनाने के लिए फ्लटर, फुल-स्टैक जावास्क्रिप्ट फ्रेमवर्क और कुशल डेटाबेस प्रबंधन में अपने कौशल का योगदान दे सकूँ।",
    aboutLoc: "स्थान",
    aboutBio: "मैं मोबाइल ऐप्स और वेब डेवलपमेंट में विशेषज्ञता रखने वाला एक उत्साही डेवलपर हूँ। मुझे व्यावहारिक समाधान बनाना पसंद है जो वास्तविक दुनिया की समस्याओं को हल करते हैं। फ्रंट-एंड रेंडरिंग परतों और बैक-एंड स्केलिंग वातावरण में अनुभव के साथ, मैं प्रदर्शन, स्वच्छता और डेवलपर अनुभव पर ध्यान केंद्रित करता हूँ।",
    aboutGoalsTitle: "कैरियर के लक्ष्य",
    aboutGoals: "मेरा लक्ष्य मजबूत सॉफ़्टवेयर उत्पाद बनाना है जो मानव कार्यों को सरल बनाते हैं। मैं उन गतिशील टीमों में शामिल होने के लिए उत्सुक हूँ जो मोबाइल ऐप्स और उत्तरदायी वेब फ्रेमवर्क में सीमाओं को आगे बढ़ाती हैं।",
    aboutLoc: "स्थान",
    aboutMail: "ईमेल",
    aboutDegree: "शिक्षा",
    aboutDesignation: "रुचियां",
    
    skillsSub: "मेरा तकनीकी स्टैक",
    skillsTitle: "कौशल और दक्षता",
    skillsRadarTitle: "रडार कौशल ग्राफ",
    radarHoverText: "विवरण देखने के लिए शीर्षकों पर माउस ले जाएं",
    
    projectsSub: "मेरा हालिया काम",
    projectsTitle: "परियोजनाएं",
    projectsFilterAll: "सभी",
    projectsCaseStudy: "केस स्टडी",
    projectsLiveDemo: "लाइव डेमो",
    
    expSub: "अनुभव और शिक्षा",
    expTitle: "पेशेवर समयरेखा",
    
    certSub: "लाइसेंस और उपलब्धियां",
    certTitle: "प्रमाणपत्र",
    certClickPreview: "प्रमाणपत्र पूर्वावलोकन के लिए 'View' पर क्लिक करें",
    
    contactSub: "संपर्क जानकारी",
    contactTitle: "संपर्क करें",
    visitorText: "प्रोफ़ाइल आगंतुक",

    resumeModalTitle: "बायोडाटा पूर्वावलोकन",
    resumePrint: "प्रिंट करें",
    resumeDownload: "डाउनलोड PDF",
    resumeDesignation: "फुल स्टैक और ऐप्स डेवलपर",
    resumeSummaryTitle: "व्यावसायिक सारांश",
    resumeSummary: "अत्यधिक प्रेरित और परिणाम-उन्मुख सॉफ्टवेयर डेवलपर, जिसे मोबाइल ऐप डेवलपमेंट, उत्तरदायी वेब सिस्टम और बैकएंड REST एपीआई एकीकरण में मजबूत अनुभव है। कुशल, स्वच्छ कोड लिखने, तकनीकी समस्याओं को हल करने और स्केलेबल डिजिटल उत्पाद बनाने में कुशल।",
    resumeExpTitle: "व्यावसायिक अनुभव",
    resumeEduTitle: "शिक्षा",

    csProblem: "समस्या का विवरण",
    csSolution: "समाधान",
    csChallenges: "तकनीकी चुनौतियाँ और निर्णय",
    csArchitecture: "आर्किटेक्चर संरचना",
    csImpact: "प्रभाव और परिणाम"
  }
};

// ==========================================
// 2. STATE MANAGER
// ==========================================

let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';
let currentLang = localStorage.getItem('portfolio_lang') || 'en';
let activeFilter = 'All';
let typingIdx = 0;
let typingSub = '';
let isDeleting = false;

// ==========================================
// 3. CORE ENGINES INITIALIZATION
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
  // Fadeout initial loader
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    }
  }, 1000);

  // Setup current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Initialize all sections & widgets
  initTheme();
  initLanguage();
  initVisitorCounter();
  initParticlesCanvas();
  initTypewriter();
  initRadarChart();
  renderSkills();
  renderProjects();
  renderCertifications();
  initScrollTracker();
  initCertificateModal();
});

// Scroll Event handlers
function initScrollTracker() {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
  const backToTopBtn = document.getElementById('back-to-top');
  const progressBar = document.getElementById('progress-bar');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // 1. Scroll Progress Bar
    if (progressBar) progressBar.style.width = scrolled + '%';

    // 2. Back to top button
    if (winScroll > 300) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }

    // 3. Scroll spy highlight
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('onclick').includes(sectionId)) {
              link.classList.add('active');
            }
          });
          break;
        }
      }
    }
  });
}

function scrollToSection(id) {
  const navLinksList = document.getElementById('nav-links');
  if (navLinksList) navLinksList.classList.remove('mobile-active');

  const element = document.getElementById(id);
  if (element) {
    const offset = 70; // Header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function toggleMobileMenu() {
  const navLinksList = document.getElementById('nav-links');
  if (navLinksList) {
    navLinksList.classList.toggle('mobile-active');
  }
}

// ==========================================
// 4. THEME & LANGUAGE SWITCHER
// ==========================================

function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  renderThemeToggleIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('portfolio_theme', currentTheme);
  renderThemeToggleIcon();
}

function renderThemeToggleIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (currentTheme === 'light') {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  } else {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
  }
}

function initLanguage() {
  translatePage();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('portfolio_lang', currentLang);
  translatePage();
}

function translatePage() {
  const dict = locales[currentLang];
  
  document.getElementById('lang-label').textContent = currentLang === 'en' ? 'HI' : 'EN';
  
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  const searchSkills = document.getElementById('skills-search');
  if (searchSkills) searchSkills.placeholder = currentLang === 'en' ? 'Search skills (e.g. React, Python)...' : 'कौशल खोजें (उदा. React, Python)...';

  const searchProjects = document.getElementById('projects-search');
  if (searchProjects) searchProjects.placeholder = currentLang === 'en' ? 'Search projects by name or technology...' : 'नाम या तकनीक द्वारा परियोजनाएं खोजें...';
}

// ==========================================
// 5. CANVAS PARTICLES
// ==========================================

function initParticlesCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let particles = [];
  let animationId;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setup();
  };

  const setup = () => {
    const density = Math.min(Math.floor((canvas.width * canvas.height) / 16000), 80);
    particles = Array.from({ length: density }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const pColor = isDark ? 'rgba(129, 140, 248, 0.3)' : 'rgba(79, 70, 229, 0.2)';
    const lColor = isDark ? 'rgba(129, 140, 248, 0.06)' : 'rgba(79, 70, 229, 0.04)';

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = pColor;
      ctx.fill();
    });

    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lColor;
          ctx.lineWidth = 1 - dist / maxDist;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize);
  resize();
  draw();
}

// ==========================================
// 6. TYPEWRITER EFFECT
// ==========================================

function initTypewriter() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const titles = [
    'Full Stack Web Developer',
    'App Developer'
  ];

  const tick = () => {
    const active = titles[typingIdx];
    
    // Dynamic a/an prefix update for English language
    const prefixEl = document.querySelector('[data-i18n="heroTypingPrefix"]');
    if (prefixEl && currentLang === 'en') {
      if (active.toLowerCase().startsWith('a')) {
        prefixEl.textContent = 'I am an';
      } else {
        prefixEl.textContent = 'I am a';
      }
    }

    if (!isDeleting) {
      typingSub = active.substring(0, typingSub.length + 1);
      el.textContent = typingSub;
      if (typingSub.length === active.length) {
        isDeleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      typingSub = active.substring(0, typingSub.length - 1);
      el.textContent = typingSub;
      if (typingSub.length === 0) {
        isDeleting = false;
        typingIdx = (typingIdx + 1) % titles.length;
        setTimeout(tick, 300);
        return;
      }
    }

    const speed = isDeleting ? 30 : 70;
    setTimeout(tick, speed);
  };

  tick();
}

// ==========================================
// 7. SVG RADAR CHART
// ==========================================

const radarSkills = [
  { subject: 'Flutter', value: 92, category: 'Frontend' },
  { subject: 'Web Dev', value: 88, category: 'Frontend' },
  { subject: 'REST APIs', value: 86, category: 'Backend' },
  { subject: 'Node.js', value: 80, category: 'Backend' },
  { subject: 'Database', value: 75, category: 'Backend' },
  { subject: 'Git & Tools', value: 90, category: 'Tools' }
];

function initRadarChart() {
  const svg = document.getElementById('radar-chart-svg');
  if (!svg) return;

  const size = 320;
  const center = size / 2;
  const radius = 110;
  const total = radarSkills.length;

  const getCoord = (idx, percent) => {
    const angle = (idx * 2 * Math.PI) / total - Math.PI / 2;
    const r = radius * (percent / 100);
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  let html = '';

  const gridLevels = [20, 40, 60, 80, 100];
  gridLevels.forEach(level => {
    const pts = radarSkills.map((_, i) => {
      const { x, y } = getCoord(i, level);
      return `${x},${y}`;
    }).join(' ');
    html += `<polygon points="${pts}" fill="none" stroke="var(--timeline-line)" stroke-width="1" stroke-dasharray="${level === 100 ? 'none' : '4,4'}" opacity="0.5" />`;
  });

  radarSkills.forEach((_, i) => {
    const outer = getCoord(i, 100);
    html += `<line x1="${center}" y1="${center}" x2="${outer.x}" y2="${outer.y}" stroke="var(--timeline-line)" stroke-width="1.5" opacity="0.6" />`;
  });

  const filledPts = radarSkills.map((s, i) => {
    const { x, y } = getCoord(i, s.value);
    return `${x},${y}`;
  }).join(' ');
  html += `<polygon points="${filledPts}" fill="var(--accent-glow-strong)" stroke="var(--accent)" stroke-width="2.5" />`;

  radarSkills.forEach((s, i) => {
    const coord = getCoord(i, s.value);
    const labelCoord = getCoord(i, 115);
    const anchor = labelCoord.x > center ? 'start' : labelCoord.x < center ? 'end' : 'middle';

    html += `
      <g class="radar-node" onmouseenter="showRadarTooltip(${i})" onmouseleave="hideRadarTooltip()">
        <circle cx="${coord.x}" cy="${coord.y}" r="5" fill="var(--accent)" stroke="var(--bg-primary)" stroke-width="1.5" style="cursor:pointer;" />
        <text x="${labelCoord.x}" y="${labelCoord.y + 4}" text-anchor="${anchor}" fill="var(--text-primary)" font-size="11px" font-weight="700">${s.subject}</text>
      </g>
    `;
  });

  svg.innerHTML = html;
}

function showRadarTooltip(idx) {
  const tooltip = document.getElementById('radar-tooltip');
  if (!tooltip) return;
  const s = radarSkills[idx];
  tooltip.innerHTML = `
    <span style="font-size: 14px; font-weight: 800; color: var(--text-primary);">${s.subject} (${s.category})</span>
    <span style="font-size: 13px; color: var(--accent); font-weight: 700;">Proficiency: ${s.value}%</span>
  `;
  tooltip.style.opacity = '1';
}

function hideRadarTooltip() {
  const tooltip = document.getElementById('radar-tooltip');
  if (!tooltip) return;
  tooltip.innerHTML = `<span style="font-size: 13px; color: var(--text-muted);">${locales[currentLang].radarHoverText}</span>`;
  tooltip.style.opacity = '0.6';
}

// ==========================================
// 8. RENDER LISTS & CARDS
// ==========================================

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const query = document.getElementById('skills-search').value.toLowerCase();

  let html = '';
  skillsData.forEach(cat => {
    const filtered = cat.items.filter(s => s.name.toLowerCase().includes(query));
    if (filtered.length === 0) return;

    html += `
      <div class="glass-card" style="text-align: left;">
        <h3 class="skill-category-title">
          ${cat.icon}
          ${cat.category}
        </h3>
        <div class="skills-list">
          ${filtered.map(s => `
            <div class="skill-item">
              <div class="skill-info">
                <span style="color: var(--text-primary);">${s.name}</span>
                <span style="color: var(--accent);">${s.level}%</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" style="width: ${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  if (html === '') {
    html = `<div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p style="color: var(--text-muted)">No skills match search query</p></div>`;
  }
  container.innerHTML = html;
}

function filterSkills() {
  renderSkills();
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const searchQuery = document.getElementById('projects-search').value.toLowerCase();

  let html = '';
  projectsData.forEach(p => {
    const matchesTab = activeFilter === 'All' || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery) || p.techs.some(t => t.toLowerCase().includes(searchQuery));
    if (!matchesTab || !matchesSearch) return;

    html += `
      <div class="glass-card project-card">
        <div class="project-img-wrapper" style="background: ${p.gradient}; display: flex; align-items: center; justify-content: center;">
          ${p.graphic}
          <div class="project-tags">
            <span class="project-tag">${p.category}</span>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-techs">
            ${p.techs.map(t => `<span class="project-tech">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="project-btn btn-secondary" onclick="openCaseStudy('${p.id}')" style="flex: 1;">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              <span>Case Study</span>
            </button>
            <a href="${p.githubUrl}" target="_blank" class="project-btn btn-primary" style="padding: 8px; flex-shrink: 0; width: 36px; display: inline-flex; justify-content: center; align-items: center;" title="Source Code">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  });

  if (html === '') {
    html = `<div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p style="color: var(--text-muted)">No projects match filters</p></div>`;
  }
  container.innerHTML = html;
}

function filterProjectsTab(tab) {
  activeFilter = tab;
  document.querySelectorAll('.projects-filter-bar button').forEach(b => b.classList.remove('active'));
  
  if (tab === 'All') document.getElementById('filter-all').classList.add('active');
  if (tab === 'Apps') document.getElementById('filter-apps').classList.add('active');
  if (tab === 'Webs') document.getElementById('filter-web').classList.add('active');
  if (tab === 'Python') document.getElementById('filter-python').classList.add('active');

  renderProjects();
}

function filterProjectsSearch() {
  renderProjects();
}

function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  container.innerHTML = certificatesData.map(c => `
    <div class="glass-card" style="border-left: 4px solid ${c.color}; text-align: left; display: flex; flex-direction: column; justify-content: space-between; min-height: 160px;">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award" style="margin-bottom: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        <h3 style="font-size: 16px; font-weight: 750; margin-bottom: 6px;">${c.title}</h3>
        <p style="font-size: 13px; color: var(--text-muted);">${c.issuer}</p>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 12px;">
        <span style="color: var(--text-muted); font-weight: 600;">${c.date}</span>
        <button onclick="openCertificate('${c.id}')" style="background: none; border: none; color: ${c.color}; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-size: 12px; padding: 4px 8px; border-radius: 4px; transition: all 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">
          View
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 9. MODALS SYSTEM
// ==========================================

function scaleResume() {
  const sheet = document.getElementById('resume-sheet');
  const container = document.getElementById('resume-scroll-container');
  if (!sheet || !container) return;

  sheet.style.transform = 'none';
  
  const pad = 32;
  const containerWidth = container.clientWidth - pad;
  const containerHeight = container.clientHeight - pad;

  const baseWidth = 800;
  const baseHeight = 1130;

  const scaleX = containerWidth / baseWidth;
  const scaleY = containerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY, 1);

  sheet.style.transform = `scale(${scale})`;
  sheet.style.transformOrigin = 'center center';
}

// Add event listener for resizing to ensure scaling is maintained
window.addEventListener('resize', () => {
  const modal = document.getElementById('resume-modal');
  if (modal && modal.style.display === 'flex') {
    scaleResume();
  }
});

function openResume() {
  document.getElementById('resume-modal').style.display = 'flex';
  setTimeout(scaleResume, 50);
}

function closeResume() {
  document.getElementById('resume-modal').style.display = 'none';
}

function downloadResume() {
  const element = document.getElementById('resume-sheet');
  element.classList.add('print-force-light');
  const opt = {
    margin:       [5, 5, 5, 5],
    filename:     'Ganesh_Nanda_Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save().then(() => {
    element.classList.remove('print-force-light');
  }).catch((err) => {
    console.error('PDF generation error', err);
    element.classList.remove('print-force-light');
  });
}

function openCaseStudy(id) {
  const p = projectsData.find(item => item.id === id);
  if (!p) return;
  const cs = p.caseStudy;

  document.getElementById('cs-title').textContent = `${p.title} Case Study`;
  document.getElementById('cs-category').textContent = cs.category;

  const contentBody = document.getElementById('cs-content-body');
  if (cs.htmlContent) {
    contentBody.innerHTML = cs.htmlContent;
  } else {
    // Fallback: render the original structured format
    contentBody.innerHTML = `
      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="width: 40px; height: 40px; border-radius: 8px; background-color: var(--accent-glow); display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <div>
          <h4 style="font-size: 16px; font-weight: 750; margin-bottom: 6px; color: var(--text-primary);" data-i18n="csProblem">Problem Statement</h4>
          <p id="cs-problem" style="color: var(--text-secondary); font-size: 14px; line-height: 1.6;">${cs.problem}</p>
        </div>
      </div>

      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="width: 40px; height: 40px; border-radius: 8px; background-color: var(--accent-glow); display: flex; align-items: center; justify-content: center; color: var(--accent-secondary); flex-shrink: 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <h4 style="font-size: 16px; font-weight: 750; margin-bottom: 6px; color: var(--text-primary);" data-i18n="csSolution">The Solution</h4>
          <p id="cs-problem-solution" style="color: var(--text-secondary); font-size: 14px; line-height: 1.6;">${cs.solution}</p>
        </div>
      </div>

      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="width: 40px; height: 40px; border-radius: 8px; background-color: var(--accent-glow); display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>
        </div>
        <div style="width: 100%;">
          <h4 style="font-size: 16px; font-weight: 750; margin-bottom: 8px; color: var(--text-primary);" data-i18n="csChallenges">Technical Bottlenecks & Decisions</h4>
          <ul id="cs-challenges-list" style="padding-left: 16px; margin: 0 0 16px; font-size: 14px; line-height: 1.6;">
            ${cs.challenges.map(c => `<li style="margin-bottom: 6px; color: var(--text-secondary);">${c}</li>`).join('')}
          </ul>

          <h5 style="font-size: 13px; font-weight: 750; margin-bottom: 8px; text-transform: uppercase; color: var(--text-muted);" data-i18n="csArchitecture">Architecture Diagram</h5>
          <div id="cs-architecture-flow" style="background-color: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 6px; padding: 16px; font-family: monospace; font-size: 12px; color: var(--text-primary); display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; align-items: center;">
            ${cs.architecture.map((a, i) => `
              <div style="padding: 6px 12px; background: var(--card-bg); border: 1px solid var(--accent); border-radius: 4px; font-weight: bold;">${a}</div>
              ${i < cs.architecture.length - 1 ? '<span style="color: var(--accent);">➡</span>' : ''}
            `).join('')}
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="width: 40px; height: 40px; border-radius: 8px; background-color: var(--accent-glow); display: flex; align-items: center; justify-content: center; color: var(--success); flex-shrink: 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        </div>
        <div>
          <h4 style="font-size: 16px; font-weight: 750; margin-bottom: 6px; color: var(--text-primary);" data-i18n="csImpact">Impact & Key Results</h4>
          <div id="cs-metrics-container" style="display: flex; gap: 12px; flex-wrap: wrap; marginTop: 8px;">
            ${cs.metrics.map(m => `<div style="padding: 8px 12px; border-radius: 6px; background-color: var(--accent-glow); color: var(--accent); font-weight: 700; font-size: 13px;">${m}</div>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById('case-study-modal').style.display = 'flex';
}

function closeCaseStudy() {
  document.getElementById('case-study-modal').style.display = 'none';
}

function openCertificate(id) {
  const cert = certificatesData.find(c => c.id === id);
  if (!cert) return;

  // Set the image src
  const imgEl = document.getElementById('cert-preview-img');
  if (imgEl) imgEl.src = cert.image;

  // Set modal title
  const titleEl = document.getElementById('cert-modal-title');
  if (titleEl) titleEl.textContent = cert.title;

  // Set verify link
  const verifyLink = document.getElementById('cert-verify-link');
  if (verifyLink) {
    if (cert.verifyUrl) {
      verifyLink.href = cert.verifyUrl;
      verifyLink.style.display = 'inline-flex';
    } else {
      verifyLink.style.display = 'none';
    }
  }

  // Store current cert for download
  window._currentCert = cert;

  document.getElementById('certificate-modal').style.display = 'flex';
}

function closeCertificate() {
  document.getElementById('certificate-modal').style.display = 'none';
}

function downloadCertificate() {
  const cert = window._currentCert;
  if (!cert || !cert.image) return;

  const link = document.createElement('a');
  link.href = cert.image;
  link.download = cert.title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '_') + '.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function initCertificateModal() {
  // Modal event listeners are now handled via inline onclick in HTML
}

// ==========================================
// 10. METRICS & COUNTERS
// ==========================================

function initVisitorCounter() {
  const visitorCountEl = document.getElementById('visitor-count-el');
  if (!visitorCountEl) return;

  const currentCount = parseInt(localStorage.getItem('portfolio_visitors') || '0') + 1;
  localStorage.setItem('portfolio_visitors', currentCount.toString());
  visitorCountEl.textContent = currentCount;
}

// Export functions to window to guarantee global access
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
window.filterSkills = filterSkills;
window.filterProjectsTab = filterProjectsTab;
window.filterProjectsSearch = filterProjectsSearch;
window.openResume = openResume;
window.scaleResume = scaleResume;
window.closeResume = closeResume;
window.downloadResume = downloadResume;
window.openCaseStudy = openCaseStudy;
window.closeCaseStudy = closeCaseStudy;
window.openCertificate = openCertificate;
window.closeCertificate = closeCertificate;
window.downloadCertificate = downloadCertificate;
