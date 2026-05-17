// ===== BUD CHATBOT =====
(function(){

// ===== KNOWLEDGE BASE =====
const KB = {
  greetings: ['hi','hello','hey','good morning','good evening','good afternoon','howdy','hiya','sup','yo'],
  farewells: ['bye','goodbye','see you','cya','take care','farewell','later','good night'],
  thanks: ['thank','thanks','thank you','thx','ty','appreciate','grateful'],

  food: {
    keywords: ['food','eat','menu','short eat','beverage','drink','cake','snack','item','price','cost','how much','lkr','order food','what food','available food'],
    response: `🍽️ Our BiteBox menu has 3 categories:\n\n🥟 **Short Eats** — Crispy snacks & quick bites\n🥤 **Beverages** — Refreshing drinks\n🎂 **Cakes** — Delicious cakes & desserts\n\nVisit our menu to see all items with prices and photos! You can also search and filter by category.`
  },

  fashion: {
    keywords: ['fashion','cloth','clothing','dress','wear','outfit','shirt','trouser','ladies','gents','daily wear','marigold','style','size','custom','fabric','design','pattern'],
    response: `👗 Welcome to **Marigold Soul** — our fashion collection!\n\nWe have 3 categories:\n👗 Ladies Wear\n👔 Gents Wear\n👕 Daily Wear\n\nSizes available: S, M, L, XL, XXL and **Custom Size** (we design for your exact measurements!)\n\nVisit the Marigold Soul page from the navigation bar to browse our collection.`
  },

  order: {
    keywords: ['order','how to order','buy','purchase','add to cart','cart','checkout','how to buy','place order','ordering'],
    response: `🛒 Ordering is easy!\n\n1️⃣ **Sign In** — Create an account or log in\n2️⃣ **Browse Menu** — Explore our food or fashion items\n3️⃣ **Add to Cart** — Click "+ Add" on any item\n4️⃣ **Checkout** — Enter your delivery address\n5️⃣ **Pay** — Choose Cash on Delivery or Card\n\nThat's it! We'll start preparing right away! 🎉`
  },

  payment: {
    keywords: ['pay','payment','cash','card','credit','debit','how to pay','payment method','payhere','visa','mastercard','money','lkr'],
    response: `💳 We offer 2 payment methods:\n\n💵 **Cash on Delivery** — Pay when your order arrives\n💳 **Card Payment** — Sri Lankan credit & debit cards only (Visa, Mastercard, AMEX issued by Sri Lankan banks)\n\nPayments are processed securely through PayHere. 🔒`
  },

  delivery: {
    keywords: ['deliver','delivery','shipping','where','location','area','how long','when','arrive','fee','charge','distance'],
    response: `🚚 For delivery details, area coverage and fees, please contact us directly on WhatsApp!\n\n📱 **WhatsApp:** +94 76 077 4055\n\nWe'll get back to you quickly! 😊`
  },

  account: {
    keywords: ['account','sign up','signup','register','login','log in','sign in','profile','password','email','create account','my account','my order','past order','order history'],
    response: `👤 Managing your account is simple!\n\n• Click **"Sign In"** in the top navigation\n• New customer? Click **"Create Account"**\n• Fill in your name, email, phone & address\n• Once signed in, click **"Profile"** to see your order history and current order status!`
  },

  contact: {
    keywords: ['contact','reach','whatsapp','instagram','social','message','call','phone','number','email','get in touch','support','help','talk'],
    response: `📞 You can reach us here:\n\n💬 **WhatsApp:** +94 76 077 4055\n📸 **Instagram:** @seneshindeewara\n📧 **Contact Form:** Visit our Contact Us page\n\nWe're always happy to help! 😊`
  },

  about: {
    keywords: ['about','who','company','business','brand','bitebox','story','what is','what are you','team','owner'],
    response: `✨ **BiteBox** is a Sri Lankan food & fashion brand!\n\n🍽️ **BiteBox Food** — Fresh short eats, beverages and cakes made with love\n👗 **Marigold Soul** — Beautifully crafted clothing for ladies and gents\n\nEverything is made fresh and handcrafted with care, right here in Sri Lanka 🇱🇰`
  },

  custom: {
    keywords: ['custom','customize','tailor','measurement','chest','waist','height','fit','made to measure','personal','specific size'],
    response: `📏 Yes! We offer **Custom Sizing** for our fashion items!\n\nSimply select **"Custom Size"** when ordering and enter your measurements (chest, waist, height etc.)\n\nFor more details about custom orders, contact us on WhatsApp:\n📱 **+94 76 077 4055**`
  },

  fresh: {
    keywords: ['fresh','daily','made','quality','ingredient','homemade','handmade','handcraft'],
    response: `🌟 Everything at BiteBox is **100% fresh and handcrafted daily!**\n\nOur food is made fresh every day with quality ingredients. Our fashion items are uniquely designed and crafted with care.\n\nWe take pride in delivering the best to our customers! 😊`
  }
};

// ===== RESPONSES =====
function getResponse(input){
  const msg = input.toLowerCase().trim();

  // Greetings
  if(KB.greetings.some(g=>msg.includes(g))){
    const greets = [
      "Hey there! 👋 I'm Bud, your BiteBox assistant! How can I help you today?",
      "Hello! 😊 I'm Bud! Ask me anything about BiteBox or Marigold Soul!",
      "Hi! 🌟 Welcome to BiteBox! I'm Bud — here to help you out!"
    ];
    return greets[Math.floor(Math.random()*greets.length)];
  }

  // Farewells
  if(KB.farewells.some(f=>msg.includes(f))){
    return "Bye bye! 👋 Hope to see you again soon! Enjoy your BiteBox experience! 😊";
  }

  // Thanks
  if(KB.thanks.some(t=>msg.includes(t))){
    return "You're most welcome! 😊 Is there anything else I can help you with?";
  }

  // Check knowledge base
  for(const[key,data] of Object.entries(KB)){
    if(Array.isArray(data)) continue;
    if(data.keywords && data.keywords.some(k=>msg.includes(k))){
      return data.response;
    }
  }

  // Default
  const defaults = [
    "Hmm, I'm not sure about that! 🤔 Try asking me about our menu, fashion, ordering, payment or delivery!",
    "I didn't quite get that! 😅 You can ask me about food, clothing, how to order, or how to contact us!",
    "Not sure about that one! 🙈 Try asking about our menu, Marigold Soul fashion, or how to place an order!"
  ];
  return defaults[Math.floor(Math.random()*defaults.length)];
}

// ===== UI =====
function buildBud(){
  const style = document.createElement('style');
  style.textContent = `
    #bud-btn{
      position:fixed;bottom:1.5rem;left:1.5rem;z-index:9990;
      width:60px;height:60px;border-radius:50%;
      background:linear-gradient(135deg,#E8C96A,#D4A843);
      border:none;cursor:pointer;
      box-shadow:0 4px 20px rgba(212,168,67,0.5);
      transition:all 0.3s cubic-bezier(0.4,0,0.2,1);
      display:flex;align-items:center;justify-content:center;
      font-size:1.75rem;
      animation:budBounce 2s ease-in-out infinite;
    }
    #bud-btn:hover{
      transform:scale(1.12);
      box-shadow:0 6px 28px rgba(212,168,67,0.7);
    }
    @keyframes budBounce{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-6px)}
    }
    #bud-btn:hover{animation:none}

    #bud-bubble{
      position:fixed;bottom:1.5rem;left:1.5rem;z-index:9989;
      background:#1A2E45;
      border:1px solid rgba(212,168,67,0.3);
      border-radius:16px 16px 4px 16px;
      padding:0.6rem 1rem;
      font-family:'DM Sans',sans-serif;
      font-size:0.82rem;
      color:#F0EBE3;
      max-width:180px;
      box-shadow:0 4px 16px rgba(0,0,0,0.3);
      animation:budPop 0.3s ease;
      bottom:5.5rem;
      white-space:nowrap;
    }
    @keyframes budPop{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}

    #bud-window{
      position:fixed;bottom:5.5rem;left:1.5rem;z-index:9991;
      width:320px;max-width:calc(100vw - 3rem);
      background:#0D1B2A;
      border:1px solid rgba(212,168,67,0.25);
      border-radius:20px;
      box-shadow:0 8px 40px rgba(0,0,0,0.5);
      display:none;flex-direction:column;
      overflow:hidden;
      animation:budSlideUp 0.3s cubic-bezier(0.4,0,0.2,1);
      max-height:480px;
    }
    #bud-window.open{display:flex}
    @keyframes budSlideUp{
      from{opacity:0;transform:translateY(20px) scale(0.95)}
      to{opacity:1;transform:translateY(0) scale(1)}
    }

    #bud-header{
      background:linear-gradient(135deg,#D4A843,#E8C96A);
      padding:0.875rem 1rem;
      display:flex;align-items:center;gap:0.625rem;
    }
    #bud-avatar{
      width:36px;height:36px;border-radius:50%;
      background:rgba(255,255,255,0.3);
      display:flex;align-items:center;justify-content:center;
      font-size:1.25rem;
    }
    #bud-header-info{flex:1}
    #bud-name{
      font-family:'Playfair Display',serif;
      font-weight:700;font-size:1rem;color:#0D1B2A;
    }
    #bud-status{font-size:0.72rem;color:rgba(13,27,42,0.7);margin-top:1px}
    #bud-close{
      background:none;border:none;cursor:pointer;
      color:rgba(13,27,42,0.6);font-size:1.25rem;
      padding:0.25rem;line-height:1;
      transition:color 0.2s;
    }
    #bud-close:hover{color:#0D1B2A}

    #bud-messages{
      flex:1;overflow-y:auto;padding:1rem;
      display:flex;flex-direction:column;gap:0.625rem;
      max-height:320px;
      scrollbar-width:thin;
      scrollbar-color:rgba(212,168,67,0.3) transparent;
    }

    .bud-msg{
      max-width:85%;padding:0.625rem 0.875rem;
      border-radius:12px;font-size:0.85rem;
      line-height:1.5;word-break:break-word;
      white-space:pre-line;
    }
    .bud-msg.bot{
      background:#1A2E45;
      border:1px solid rgba(74,127,165,0.2);
      color:#F0EBE3;
      align-self:flex-start;
      border-radius:4px 12px 12px 12px;
    }
    .bud-msg.user{
      background:linear-gradient(135deg,#8B1A2B,#C4374F);
      color:#fff;
      align-self:flex-end;
      border-radius:12px 4px 12px 12px;
    }
    .bud-msg strong{color:#E8C96A}

    .bud-typing{
      background:#1A2E45;
      border:1px solid rgba(74,127,165,0.2);
      color:#9BA8B4;
      align-self:flex-start;
      border-radius:4px 12px 12px 12px;
      padding:0.625rem 0.875rem;
      font-size:0.85rem;
      display:flex;gap:4px;align-items:center;
    }
    .bud-dot{
      width:6px;height:6px;border-radius:50%;
      background:#D4A843;
      animation:budDot 1.2s ease-in-out infinite;
    }
    .bud-dot:nth-child(2){animation-delay:0.2s}
    .bud-dot:nth-child(3){animation-delay:0.4s}
    @keyframes budDot{
      0%,80%,100%{transform:scale(0.6);opacity:0.4}
      40%{transform:scale(1);opacity:1}
    }

    #bud-quick{
      display:flex;gap:0.4rem;flex-wrap:wrap;
      padding:0.5rem 1rem 0;
    }
    .bud-q{
      padding:0.3rem 0.7rem;
      background:rgba(212,168,67,0.1);
      border:1px solid rgba(212,168,67,0.25);
      border-radius:100px;
      font-size:0.75rem;color:#D4A843;
      cursor:pointer;font-family:'DM Sans',sans-serif;
      transition:all 0.2s;white-space:nowrap;
    }
    .bud-q:hover{background:rgba(212,168,67,0.2)}

    #bud-input-row{
      display:flex;gap:0.5rem;
      padding:0.75rem;
      border-top:1px solid rgba(74,127,165,0.15);
    }
    #bud-input{
      flex:1;padding:0.6rem 0.875rem;
      background:#1A2E45;
      border:1px solid rgba(74,127,165,0.25);
      border-radius:100px;
      color:#F0EBE3;font-family:'DM Sans',sans-serif;
      font-size:0.875rem;outline:none;
      transition:border-color 0.2s;
    }
    #bud-input:focus{border-color:#D4A843}
    #bud-input::placeholder{color:#9BA8B4}
    #bud-send{
      width:36px;height:36px;border-radius:50%;
      background:linear-gradient(135deg,#D4A843,#E8C96A);
      border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      font-size:0.9rem;color:#0D1B2A;
      transition:all 0.2s;flex-shrink:0;
    }
    #bud-send:hover{transform:scale(1.1)}

    @media(max-width:480px){
      #bud-window{width:calc(100vw - 3rem)}
    }
  `;
  document.head.appendChild(style);

  // Bubble hint
  const bubble = document.createElement('div');
  bubble.id = 'bud-bubble';
  bubble.textContent = 'Hi! Ask me anything 👋';
  document.body.appendChild(bubble);

  // Chat button
  const btn = document.createElement('button');
  btn.id = 'bud-btn';
  btn.innerHTML = '🟡';
  btn.setAttribute('aria-label','Open Bud chatbot');
  document.body.appendChild(btn);

  // Chat window
  const win = document.createElement('div');
  win.id = 'bud-window';
  win.innerHTML = `
    <div id="bud-header">
      <div id="bud-avatar">😊</div>
      <div id="bud-header-info">
        <div id="bud-name">Bud</div>
        <div id="bud-status">● Online — BiteBox Assistant</div>
      </div>
      <button id="bud-close">✕</button>
    </div>
    <div id="bud-messages"></div>
    <div id="bud-quick">
      <span class="bud-q" onclick="budSend('Menu')">Menu</span>
      <span class="bud-q" onclick="budSend('How to order?')">How to order?</span>
      <span class="bud-q" onclick="budSend('Fashion')">Fashion</span>
      <span class="bud-q" onclick="budSend('Contact us')">Contact</span>
    </div>
    <div id="bud-input-row">
      <input id="bud-input" type="text" placeholder="Ask Bud anything…" maxlength="200">
      <button id="bud-send">➤</button>
    </div>
  `;
  document.body.appendChild(win);

  // Hide bubble after 4 seconds
  setTimeout(()=>{
    bubble.style.transition='opacity 0.5s';
    bubble.style.opacity='0';
    setTimeout(()=>bubble.remove(),500);
  },4000);

  // Events
  btn.onclick = ()=>toggleBud();
  document.getElementById('bud-close').onclick = ()=>closeBud();
  document.getElementById('bud-send').onclick = ()=>sendFromInput();
  document.getElementById('bud-input').addEventListener('keydown',e=>{
    if(e.key==='Enter')sendFromInput();
  });

  // Welcome message
  setTimeout(()=>{
    addMsg("Hey there! 😊 I'm **Bud**, your BiteBox assistant!\n\nAsk me about our menu, fashion, how to order, payment or anything else!", 'bot');
  }, 300);
}

let budOpen = false;

function toggleBud(){
  budOpen ? closeBud() : openBud();
}
function openBud(){
  budOpen = true;
  document.getElementById('bud-window').classList.add('open');
  document.getElementById('bud-input').focus();
}
function closeBud(){
  budOpen = false;
  document.getElementById('bud-window').classList.remove('open');
}

function addMsg(text, who){
  const msgs = document.getElementById('bud-messages');
  const div = document.createElement('div');
  div.className = `bud-msg ${who}`;
  // Convert **text** to bold
  div.innerHTML = text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping(){
  const msgs = document.getElementById('bud-messages');
  const div = document.createElement('div');
  div.className = 'bud-typing';
  div.id = 'bud-typing';
  div.innerHTML = '<div class="bud-dot"></div><div class="bud-dot"></div><div class="bud-dot"></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function hideTyping(){
  const el = document.getElementById('bud-typing');
  if(el) el.remove();
}

function budSend(text){
  if(!text.trim()) return;
  addMsg(text,'user');
  const input = document.getElementById('bud-input');
  if(input) input.value = '';
  showTyping();
  setTimeout(()=>{
    hideTyping();
    const reply = getResponse(text);
    addMsg(reply,'bot');
  }, 700 + Math.random()*400);
}

function sendFromInput(){
  const input = document.getElementById('bud-input');
  const text = input.value.trim();
  if(!text) return;
  input.value = '';
  budSend(text);
}

// Make budSend global
window.budSend = budSend;

// Init
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded', buildBud);
} else {
  buildBud();
}

})();
