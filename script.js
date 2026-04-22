// ===== Data =====
const FAQ_DATA = [
  { q: "Who can vote in Indian elections?", a: "Any Indian citizen who is 18 years or older on January 1 of the qualifying year and is registered on the electoral roll can vote. You must not be disqualified under any law." },
  { q: "Can I vote without a Voter ID card?", a: "Yes! While the EPIC (Voter ID) is the primary document, you can also use other approved photo IDs such as Aadhaar, passport, driving license, PAN card, or government-issued photo ID at the polling booth." },
  { q: "What if my name is missing from the voter list?", a: "Check the electoral roll on the NVSP portal or Voter Helpline app. If missing, you can apply for inclusion by submitting Form 6. Contact your local Electoral Registration Officer for help." },
  { q: "Is voting compulsory in India?", a: "No, voting is not compulsory in India — it is a right, not a legal obligation. However, it is a civic duty and every vote counts in shaping the government." },
  { q: "How are election winners decided?", a: "India uses the First-Past-The-Post (FPTP) system. The candidate who gets the most votes in a constituency wins, even without a majority (50%+). It's a simple plurality." },
  { q: "What is NOTA?", a: "NOTA stands for 'None Of The Above.' It allows voters to officially reject all candidates. If NOTA gets the most votes, the candidate with the next highest votes still wins — but NOTA registers public dissatisfaction." },
  { q: "Can I change my vote after pressing the EVM button?", a: "No. Once you press the button on the EVM, your vote is recorded and cannot be changed. Make sure you press the button next to your chosen candidate carefully." },
  { q: "What is the Model Code of Conduct?", a: "It's a set of guidelines issued by the Election Commission that political parties and candidates must follow during elections. It ensures fair play — no hate speech, bribery, or misuse of government resources." },
  { q: "How do I find my polling station?", a: "Use the Voter Helpline app, the NVSP portal (nvsp.in), or SMS your EPIC number to 1950 to find your assigned polling station." },
  { q: "What happens if there is a tie?", a: "In the rare event of a tie, the result is decided by drawing lots (a lottery) in the presence of the Returning Officer. This is specified in election rules." }
];

const MYTH_DATA = [
  { myth: "\"My single vote doesn't matter.\"", fact: "Elections have been won by margins as small as 1 vote. In 2017, a Rajasthan local election was decided by a coin toss after a tie. Every vote truly counts." },
  { myth: "\"First-time voters need special permission to vote.\"", fact: "No special permission is needed. Once you're registered and have a valid ID, you can walk into your polling station and vote just like everyone else." },
  { myth: "\"Voting takes the whole day.\"", fact: "Voting usually takes 10–30 minutes including waiting time. Polling stations are organized efficiently, and you can vote and continue your day." },
  { myth: "\"Election results are declared instantly.\"", fact: "Vote counting typically happens a few days after polling. Counting can take several hours, with trends and final results announced progressively throughout the day." },
  { myth: "\"Someone can vote multiple times.\"", fact: "Impossible. Indelible ink on your finger, EVM controls, and strict polling booth protocols ensure each person votes exactly once." }
];

const GLOSSARY_DATA = [
  { term: "Constituency", def: "A specific geographic area whose residents elect one representative to the legislature." },
  { term: "Ballot", def: "The method or device used to cast a vote. In India, Electronic Voting Machines (EVMs) have replaced paper ballots." },
  { term: "Candidate", def: "A person who has filed nomination papers to contest an election in a constituency." },
  { term: "Polling Booth", def: "The physical location where registered voters go to cast their votes on election day." },
  { term: "Electoral Roll", def: "The official list of all registered voters in a constituency. Also called the voter list." },
  { term: "Manifesto", def: "A public document by a political party outlining its policies, promises, and plans if elected to power." },
  { term: "Counting", def: "The process of tallying votes from EVMs at designated counting centers after polling ends." },
  { term: "Majority", def: "Having more seats than all other parties combined in the legislature (e.g., 272+ seats in Lok Sabha for a simple majority)." },
  { term: "EVM", def: "Electronic Voting Machine — a portable device used in Indian elections to record votes electronically." },
  { term: "VVPAT", def: "Voter Verifiable Paper Audit Trail — a slip printed by a machine attached to the EVM that lets voters verify their choice." },
  { term: "NOTA", def: "None Of The Above — an option on the EVM allowing voters to reject all candidates." },
  { term: "EPIC", def: "Electors Photo Identity Card — the official Voter ID card issued by the Election Commission of India." },
  { term: "Returning Officer", def: "The official responsible for conducting elections in a constituency, including accepting nominations and declaring results." },
  { term: "By-election", def: "An election held to fill a seat that has become vacant between general elections, due to death, resignation, or disqualification." },
  { term: "Exit Poll", def: "A survey of voters conducted immediately after they leave the polling station, used to predict election outcomes." }
];

const CHAT_RESPONSES = {
  register: "**How to register to vote:**\n\n1. Visit the National Voters' Service Portal (nvsp.in)\n2. Click 'New Voter Registration' and fill Form 6 online\n3. Upload a passport-size photo, age proof, and address proof\n4. Submit and note your reference number\n5. Track your application status online\n\nYou can also visit your nearest Electoral Registration Office with the same documents. Registration is free!\n\n💡 **Tip:** Use the Voter Helpline app (available on Android & iOS) for easy registration.",
  electionday: "**What happens on election day:**\n\n🕗 **Polling hours:** Usually 7 AM to 6 PM (varies by state)\n\n**Step-by-step:**\n1. Go to your assigned polling station\n2. Stand in the queue — separate lines for men, women, and senior citizens\n3. Show your Voter ID or approved photo ID at the verification desk\n4. Get your finger checked for ink (to prevent double voting)\n5. Receive a slip and proceed to the voting compartment\n6. Press the button next to your chosen candidate on the EVM\n7. Verify your choice on the VVPAT slip\n8. Get indelible ink applied to your left index finger\n9. Exit the polling station\n\nYour vote is **completely secret** — no one can see who you voted for.",
  carry: "**What to carry to the polling booth:**\n\n✅ **Must carry (any one):**\n- Voter ID card (EPIC)\n- Aadhaar card\n- Passport\n- Driving license\n- PAN card\n- Government photo ID\n\n❌ **Do NOT carry:**\n- Mobile phones (not allowed inside the voting area)\n- Cameras\n- Any campaign material\n\n💡 **Tip:** Carry a printed voter slip if you received one — it helps locate your name faster at the booth.",
  counting: "**How votes are counted:**\n\n📅 Counting happens on a designated day (usually a few days after polling)\n\n**The process:**\n1. Sealed EVMs are brought to counting centers under security\n2. Postal ballots are counted first\n3. EVM counting begins round by round\n4. Each round covers votes from a set of polling stations\n5. VVPAT slips from 5 randomly selected booths per constituency are cross-verified\n6. Trends are displayed publicly as counting progresses\n7. After all rounds, the Returning Officer declares the final result\n\nThe candidate with the **most votes wins** (First-Past-The-Post system).",
  firsttime: "**First-time voter? Here's your quick guide:**\n\n🎉 Welcome to democracy! Here's what you need to know:\n\n1. **Register:** Fill Form 6 at nvsp.in or the Voter Helpline app\n2. **Get your Voter ID:** You'll receive your EPIC after verification\n3. **Know your booth:** Check your polling station location online\n4. **Research candidates:** Read manifestos, attend debates, form your own opinion\n5. **Voting day:** Carry your ID, reach the booth, press the button for your choice\n\n**Remember:**\n- Your vote is secret — no one can see it\n- You only get to vote once — make it count\n- It takes just 10-30 minutes\n- The ink mark is a badge of pride! 🇮🇳\n\nYou don't need any special permission or prior experience.",
  evm: "**How the EVM (Electronic Voting Machine) works:**\n\n📦 The EVM has two units:\n\n**1. Ballot Unit** (in your voting compartment):\n- Shows candidate names, party symbols, and a blue button next to each\n- Press the button next to your chosen candidate\n\n**2. Control Unit** (with the polling officer):\n- The officer enables your vote from this unit\n- Records and stores all votes securely\n\n**VVPAT Machine:**\n- Attached to the EVM\n- Prints a small slip showing your chosen candidate\n- Visible for 7 seconds through a window\n- Slip drops into a sealed box (for verification if needed)\n\nEVMs are standalone devices — not connected to the internet. They run on batteries and are tamper-proof.",
  nota: "**NOTA — None Of The Above:**\n\n🗳️ NOTA is the last option on every EVM ballot unit.\n\n**What it does:**\n- Lets you formally reject all candidates\n- Your vote is counted as NOTA in the results\n\n**What it doesn't do:**\n- Even if NOTA gets the most votes, the candidate with the next highest votes still wins\n- It doesn't trigger a re-election (as of current rules)\n\n**Why use it?**\n- It's a democratic way to express dissatisfaction\n- It sends a message to parties about candidate quality\n- It was introduced by the Supreme Court of India in 2013\n\n💡 **Key point:** Pressing NOTA is better than not voting — it's still active participation in democracy.",
  missing: "**If your name is missing from the voter list:**\n\n🔍 **First, check properly:**\n1. Visit nvsp.in → 'Search in Electoral Roll'\n2. Use the Voter Helpline app\n3. SMS your EPIC number to 1950\n4. Visit your nearest Electoral Registration Office\n\n**If confirmed missing:**\n1. File Form 6 (New Registration) at nvsp.in\n2. Attach age proof, address proof, and photo\n3. Track your application with the reference ID\n\n⏰ **Important:** Apply well before elections. Last-minute additions may not be possible once the electoral roll is frozen for an election.\n\n📞 **Need help?** Call the Voter Helpline: 1950 (toll-free)"
};

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initStepper();
  initChecklist();
  initChat();
  initFAQ();
  initMyths();
  initGlossary();
  initScrollAnimations();
  initProgressBar();
  initBackToTop();
});

// ===== Theme =====
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const icon = toggle.querySelector('.theme-icon');
  const saved = localStorage.getItem('voteready-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.textContent = '☀️';
  }
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    icon.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('voteready-theme', isDark ? 'light' : 'dark');
  });
}

// ===== Navigation =====
function initNavigation() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  // Active section highlighting
  const sections = document.querySelectorAll('.section[id]');
  const navAnchors = links.querySelectorAll('a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}

// ===== Stepper =====
function initStepper() {
  let currentStep = 0;
  const totalSteps = 6;
  const btns = document.querySelectorAll('.step-btn');
  const panels = document.querySelectorAll('.step-panel');
  const connectors = document.querySelectorAll('.step-connector');
  const prevBtn = document.getElementById('stepPrev');
  const nextBtn = document.getElementById('stepNext');
  const indicator = document.getElementById('stepIndicator');

  function goToStep(idx) {
    currentStep = idx;
    btns.forEach((b, i) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
      if (i < idx) b.classList.add('completed');
      else b.classList.remove('completed');
      if (i === idx) { b.classList.add('active'); b.setAttribute('aria-selected', 'true'); }
    });
    panels.forEach((p, i) => p.classList.toggle('active', i === idx));
    connectors.forEach((c, i) => c.classList.toggle('active', i < idx));
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === totalSteps - 1;
    nextBtn.textContent = idx === totalSteps - 1 ? 'Done ✓' : 'Next →';
    indicator.textContent = `Step ${idx + 1} of ${totalSteps}`;
  }

  btns.forEach(b => b.addEventListener('click', () => goToStep(parseInt(b.dataset.step))));
  prevBtn.addEventListener('click', () => { if (currentStep > 0) goToStep(currentStep - 1); });
  nextBtn.addEventListener('click', () => { if (currentStep < totalSteps - 1) goToStep(currentStep + 1); });
}

// ===== Checklist =====
function initChecklist() {
  const checklist = document.getElementById('readinessChecklist');
  const progressBar = document.getElementById('checklistProgressBar');
  const progressText = document.getElementById('checklistProgressText');
  const result = document.getElementById('checklistResult');
  const total = checklist.querySelectorAll('input[type="checkbox"]').length;

  checklist.addEventListener('change', () => {
    const checked = checklist.querySelectorAll('input:checked').length;
    const pct = (checked / total) * 100;
    progressBar.style.setProperty('--progress', pct + '%');
    progressText.textContent = `${checked} of ${total} completed`;
    result.classList.toggle('show', checked === total);
  });
}

// ===== Chat Assistant =====
function initChat() {
  const messages = document.getElementById('chatMessages');
  const prompts = document.getElementById('chatPrompts');
  const searchInput = document.getElementById('chatSearchInput');
  const searchBtn = document.getElementById('chatSearchBtn');

  function addMessage(text, isUser) {
    const div = document.createElement('div');
    div.className = `chat-message ${isUser ? 'user' : 'bot'}`;
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? '👤' : '🗳️';
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerHTML = isUser ? `<p>${text}</p>` : formatMarkdown(text);
    div.appendChild(avatar);
    div.appendChild(bubble);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function formatMarkdown(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n(\d+\.)/g, '<br>$1')
      .replace(/\n- /g, '<br>• ')
      .replace(/\n([✅❌💡📅📦🕗📞⏰🔍🎉🗳️📣])/g, '<br>$1')
      .replace(/\n/g, '<br>')
      .replace(/^/, '<p>')
      .replace(/$/, '</p>');
  }

  prompts.addEventListener('click', (e) => {
    const btn = e.target.closest('.prompt-btn');
    if (!btn) return;
    const key = btn.dataset.prompt;
    addMessage(btn.textContent, true);
    setTimeout(() => {
      addMessage(CHAT_RESPONSES[key] || "I don't have an answer for that yet. Try another question!", false);
    }, 400);
  });

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;
    addMessage(searchInput.value.trim(), true);
    searchInput.value = '';
    // Find best match
    const promptBtns = prompts.querySelectorAll('.prompt-btn');
    let bestKey = null;
    let bestScore = 0;
    promptBtns.forEach(btn => {
      const label = btn.textContent.toLowerCase();
      const words = query.split(' ');
      const score = words.filter(w => label.includes(w)).length;
      if (score > bestScore) { bestScore = score; bestKey = btn.dataset.prompt; }
    });
    // Also check FAQ data
    let faqMatch = null;
    FAQ_DATA.forEach(item => {
      const words = query.split(' ');
      const score = words.filter(w => item.q.toLowerCase().includes(w) || item.a.toLowerCase().includes(w)).length;
      if (score > bestScore) { bestScore = score; faqMatch = item; bestKey = null; }
    });

    setTimeout(() => {
      if (bestKey && bestScore > 0) {
        addMessage(CHAT_RESPONSES[bestKey], false);
      } else if (faqMatch) {
        addMessage(`**${faqMatch.q}**\n\n${faqMatch.a}`, false);
      } else {
        addMessage("I'm not sure about that. Try clicking one of the suggested questions below, or search for keywords like \"register\", \"EVM\", \"polling\", or \"NOTA\".", false);
      }
    }, 400);
  }

  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSearch(); });
}

// ===== FAQ =====
function initFAQ() {
  const container = document.getElementById('faqAccordion');
  const searchInput = document.getElementById('faqSearchInput');
  const emptyState = document.getElementById('faqEmpty');

  function renderFAQ(data) {
    container.innerHTML = '';
    if (data.length === 0) { emptyState.hidden = false; return; }
    emptyState.hidden = true;
    data.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'accordion-item';
      div.innerHTML = `
        <button class="accordion-header" aria-expanded="false" id="faqBtn${i}" aria-controls="faqBody${i}">
          <span>${item.q}</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-body" id="faqBody${i}" role="region" aria-labelledby="faqBtn${i}">
          <div class="accordion-body-inner">${item.a}</div>
        </div>
      `;
      div.querySelector('.accordion-header').addEventListener('click', () => {
        const isOpen = div.classList.contains('open');
        container.querySelectorAll('.accordion-item').forEach(el => {
          el.classList.remove('open');
          el.querySelector('.accordion-body').style.maxHeight = null;
          el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          div.classList.add('open');
          const body = div.querySelector('.accordion-body');
          body.style.maxHeight = body.scrollHeight + 'px';
          div.querySelector('.accordion-header').setAttribute('aria-expanded', 'true');
        }
      });
      container.appendChild(div);
    });
  }

  renderFAQ(FAQ_DATA);

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) { renderFAQ(FAQ_DATA); return; }
    renderFAQ(FAQ_DATA.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)));
  });
}

// ===== Myths =====
function initMyths() {
  const container = document.getElementById('mythCards');
  MYTH_DATA.forEach(item => {
    const card = document.createElement('div');
    card.className = 'myth-card';
    card.innerHTML = `
      <div class="myth-side myth">
        <span class="myth-label">Myth</span>
        <p>${item.myth}</p>
      </div>
      <div class="myth-side fact">
        <span class="myth-label">Fact</span>
        <p>${item.fact}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===== Glossary =====
function initGlossary() {
  const grid = document.getElementById('glossaryGrid');
  const searchInput = document.getElementById('glossarySearchInput');
  const emptyState = document.getElementById('glossaryEmpty');

  function renderGlossary(data) {
    grid.innerHTML = '';
    if (data.length === 0) { emptyState.hidden = false; return; }
    emptyState.hidden = true;
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'glossary-card';
      card.innerHTML = `<div class="glossary-term">${item.term}</div><div class="glossary-def">${item.def}</div>`;
      grid.appendChild(card);
    });
  }

  renderGlossary(GLOSSARY_DATA);

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) { renderGlossary(GLOSSARY_DATA); return; }
    renderGlossary(GLOSSARY_DATA.filter(item => item.term.toLowerCase().includes(q) || item.def.toLowerCase().includes(q)));
  });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

// ===== Progress Bar =====
function initProgressBar() {
  const fill = document.getElementById('progressFill');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0%';
  }, { passive: true });
}

// ===== Back to Top =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
