
import { useState } from "react";

export default function CalmFocusApp() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [tasks, setTasks] = useState([""]);
  const [journal, setJournal] = useState("");
  const [timer] = useState(25 * 60);

  const quotes = [
    "Small steps, big focus.",
    "Distraction is natural, refocus is a skill.",
    "Breathe. Begin again.",
  ];

  const musicTips = [
    { category: "Lo-fi & Chillhop", tips: [
        { name: "LoFi Girl (YouTube)", link: "https://www.youtube.com/@lofigirl" },
        { name: "Chillhop Music (Spotify)", link: "https://open.spotify.com/user/chillhopmusic" },
    ]},
    { category: "Instrumental Focus", tips: [
        { name: "Peaceful Piano (Spotify)", link: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO" },
        { name: "Focus Flow (Spotify)", link: "https://open.spotify.com/playlist/37i9dQZF1DXc2aPBXGmXrt" },
    ]},
    { category: "Nature Sounds", tips: [
        { name: "Rainy Mood", link: "https://rainymood.com" },
        { name: "A Soft Murmur", link: "https://asoftmurmur.com" },
    ]},
    { category: "Binaural Beats", tips: [
        { name: "Binaural Beats Focus (YouTube)", link: "https://www.youtube.com/watch?v=WPni755-Krg" },
    ]},
  ];

  const nutritionTips = [
    "Eat more Omega-3 rich foods like salmon or walnuts.",
    "Keep blood sugar stable: pair carbs with protein.",
    "Avoid artificial colorings and processed sugars.",
    "Hydrate well—dehydration reduces focus.",
    "Try green leafy vegetables daily for brain support."
  ];

  const nextQuote = () => setQuoteIndex((quoteIndex + 1) % quotes.length);

  const handleTaskChange = (index, value) => {
    const updated = [...tasks];
    updated[index] = value;
    setTasks(updated);
  };

  const addTask = () => setTasks([...tasks, ""]);

  const formatTime = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${m}:${sec}`;
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: 20 }}>CalmFocus</h1>

      <div style={{ marginBottom: 20, padding: 20, border: '1px solid #ddd', borderRadius: 12 }}>
        <p style={{ fontStyle: 'italic' }}>{quotes[quoteIndex]}</p>
        <button onClick={nextQuote} style={{ marginTop: 10 }}>New Quote</button>
      </div>

      <div style={{ marginBottom: 20, padding: 20, border: '1px solid #ddd', borderRadius: 12 }}>
        <h2>📝 Daily Planner</h2>
        {tasks.map((task, i) => (
          <input
            key={i}
            value={task}
            onChange={e => handleTaskChange(i, e.target.value)}
            placeholder={`Task ${i + 1}`}
            style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
          />
        ))}
        <button onClick={addTask}>Add Task</button>
      </div>

      <div style={{ marginBottom: 20, padding: 20, border: '1px solid #ddd', borderRadius: 12, textAlign: 'center' }}>
        <h2>⏳ Pomodoro Timer</h2>
        <p style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>{formatTime(timer)}</p>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>* Visual timer only – use it for 25 min focus sessions</p>
      </div>

      <div style={{ marginBottom: 20, padding: 20, border: '1px solid #ddd', borderRadius: 12 }}>
        <h2>🍎 Nutrition Tips</h2>
        <ul>
          {nutritionTips.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>
      </div>

      <div style={{ marginBottom: 20, padding: 20, border: '1px solid #ddd', borderRadius: 12 }}>
        <h2>🎧 Focus Music Tips</h2>
        {musicTips.map((section) => (
          <div key={section.category} style={{ marginBottom: 10 }}>
            <h4>{section.category}</h4>
            <ul>
              {section.tips.map((tip) => (
                <li key={tip.name}>
                  <a href={tip.link} target="_blank" rel="noopener noreferrer">{tip.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ padding: 20, border: '1px solid #ddd', borderRadius: 12 }}>
        <h2>📔 Daily Journal</h2>
        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          placeholder="Write your thoughts, reflections, or ideas..."
          style={{ width: '100%', height: 100, padding: 10 }}
        />
      </div>
    </div>
  );
}
