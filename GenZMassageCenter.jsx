import React, { useState } from "react";

// GenZ Massage Center - Single-file React component
// Uses Tailwind utility classes for styling (recommended).
// If Tailwind isn't available in your project, a few fallback styles are included.

export default function GenZMassageCenter() {
  const [gender, setGender] = useState("female");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState("");
  const examplePhone = "+92 300 555 1212";
  const exampleEmail = "hello@genzmassage.example.com";

  const maleImg = "https://images.unsplash.com/photo-1533787760151-8a6b5b14b3c0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a9d8f60f0f4f3f6b8d6f59e8b6c5b9a";
  const femaleImg = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a4a4d2f3a0c5f3f9e3f9a0c7b2d6b1e";

  const proverbs = [
    "Relaxation is the key to renewal.",
    "A calm heart is the greatest possession.",
    "Wellness begins with a single breath.",
    "Take care of your body — it’s the only place you have to live.",
    "Gentle hands heal hurried lives."
  ];

  function submitBooking(e) {
    e.preventDefault();
    // Basic front-end validation
    if (!name.trim()) return setMsg("Please enter your name.");
    if (!phone.trim()) return setMsg("Please enter your phone number.");
    if (!date) return setMsg("Please pick a date.");

    // Simulate booking action
    setMsg(
      `Thanks, ${name}! Your ${gender} session is requested for ${date}. We'll contact you at ${phone} or ${email || exampleEmail}.`);

    // reset basic fields (keep contact examples)
    setName("");
    setPhone("");
    setDate("");
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 text-gray-800">
      {/* Fallback styles for users who don't have Tailwind available */}
      <style>{`
        .g-btn{background:linear-gradient(90deg,#7c3aed,#ec4899);color:white;border:none;padding:0.6rem 1.0rem;border-radius:0.6rem}
        .g-card{background:white;border-radius:1rem;box-shadow:0 6px 18px rgba(16,24,40,0.08);padding:1rem}
        @media (max-width:640px){.hero-grid{grid-template-columns:1fr}.feature-grid{grid-template-columns:1fr}}
      `}</style>

      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg">GZ</div>
          <div>
            <h1 className="text-2xl font-extrabold">GenZ Massage Center</h1>
            <p className="text-sm text-gray-600">Modern care for the busy you</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#team" className="hover:underline">Therapists</a>
          <a href="#booking" className="g-btn">Book Now</a>
        </nav>

        <div className="md:hidden">{/* mobile menu icon placeholder */}
          <button className="g-btn">Menu</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="grid hero-grid grid-cols-2 gap-8 items-center mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Relax. Reset. Rise — <span className="text-pink-500">GenZ</span> style.</h2>
            <p className="mt-4 text-gray-700">Personalized massage therapies for modern lifestyles — for both men and women. Expert therapists, calming vibes, and smart booking.</p>

            <div className="mt-6 flex gap-3">
              <button className="g-btn" onClick={() => { document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}>Reserve a Spot</button>
              <a className="inline-flex items-center px-4 py-2 rounded-lg border" href="#services">View Services</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <div>Call us: <strong>{examplePhone}</strong></div>
              <div>Email: <strong>{exampleEmail}</strong></div>
            </div>
          </div>

          <div className="g-card flex flex-col gap-4 items-center">
            <div className="w-full flex gap-3 justify-center">
              <button
                onClick={() => setGender('female')}
                className={`px-3 py-2 rounded-lg ${gender === 'female' ? 'ring-2 ring-pink-400' : 'border'}`}>
                Female
              </button>
              <button
                onClick={() => setGender('male')}
                className={`px-3 py-2 rounded-lg ${gender === 'male' ? 'ring-2 ring-indigo-400' : 'border'}`}>
                Male
              </button>
            </div>

            <img src={gender === 'female' ? femaleImg : maleImg} alt="Therapist" className="rounded-xl w-full h-56 object-cover" />

            <div className="w-full text-center">
              <p className="italic text-gray-600">"{proverbs[Math.floor(Math.random() * proverbs.length)]}"</p>
              <div className="mt-3 text-xs text-gray-500">Focused therapies • Privacy guaranteed • Certified therapists</div>
            </div>
          </div>
        </section>

        <section id="services" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Our Services</h3>
          <div className="grid feature-grid grid-cols-3 gap-6">
            <article className="g-card p-6">
              <h4 className="font-semibold">Deep Tissue Massage</h4>
              <p className="text-sm text-gray-600 mt-2">Relieves chronic muscle tension using focused pressure.</p>
              <div className="mt-3 text-sm"><strong>Duration:</strong> 60 min</div>
            </article>

            <article className="g-card p-6">
              <h4 className="font-semibold">Swedish Relax</h4>
              <p className="text-sm text-gray-600 mt-2">Gentle long strokes to relax and energize.</p>
              <div className="mt-3 text-sm"><strong>Duration:</strong> 45 min</div>
            </article>

            <article className="g-card p-6">
              <h4 className="font-semibold">Sports Recovery</h4>
              <p className="text-sm text-gray-600 mt-2">Targeted therapy for athletes and active students.</p>
              <div className="mt-3 text-sm"><strong>Duration:</strong> 30-90 min</div>
            </article>
          </div>
        </section>

        <section id="team" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Meet a few of our therapists</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="g-card p-4 flex gap-4 items-center">
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="therapist" className="w-20 h-20 rounded-lg object-cover" />
                <div>
                  <div className="font-semibold">Therapist {i}</div>
                  <div className="text-sm text-gray-500">Certified • {i === 1 ? 'Head Therapist' : 'Specialist'}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="booking" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Book a Session</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <form className="g-card p-6" onSubmit={submitBooking}>
              <label className="block text-sm font-medium">Full name</label>
              <input className="mt-1 w-full p-2 rounded-md border" value={name} onChange={(e) => setName(e.target.value)} />

              <label className="block text-sm font-medium mt-4">Phone</label>
              <input className="mt-1 w-full p-2 rounded-md border" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={examplePhone} />

              <label className="block text-sm font-medium mt-4">Email (optional)</label>
              <input className="mt-1 w-full p-2 rounded-md border" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={exampleEmail} />

              <label className="block text-sm font-medium mt-4">Preferred date</label>
              <input type="date" className="mt-1 w-full p-2 rounded-md border" value={date} onChange={(e) => setDate(e.target.value)} />

              <label className="block text-sm font-medium mt-4">Notes</label>
              <textarea className="mt-1 w-full p-2 rounded-md border" rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} />

              <div className="mt-4 flex gap-3">
                <button type="submit" className="g-btn">Request Booking</button>
                <button type="button" onClick={() => { setName(''); setPhone(''); setEmail(''); setDate(''); setMsg(''); }} className="px-4 py-2 border rounded-md">Clear</button>
              </div>

              <div className="mt-4 text-sm text-green-600">{msg}</div>
            </form>

            <div className="g-card p-6">
              <h4 className="font-semibold">Why choose GenZ?</h4>
              <ul className="mt-3 list-disc ml-5 text-sm text-gray-700">
                <li>Gender-sensitive therapists and private rooms</li>
                <li>Online booking & reminders</li>
                <li>Student discounts and packages</li>
              </ul>

              <div className="mt-6">
                <h5 className="font-medium">Contact</h5>
                <p className="text-sm mt-2">Phone: <strong>{examplePhone}</strong></p>
                <p className="text-sm">Email: <strong>{exampleEmail}</strong></p>

                <div className="mt-4">
                  <a href={`tel:${examplePhone}`} className="inline-block px-4 py-2 rounded-md border mr-2">Call</a>
                  <a href={`mailto:${exampleEmail}`} className="inline-block px-4 py-2 rounded-md border">Email</a>
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-500">Proverb: "{proverbs[Math.floor(Math.random() * proverbs.length)]}"</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="g-card p-4">
              <strong>Do you have male/female therapists?</strong>
              <p className="text-sm text-gray-600 mt-2">Yes — pick your preference when booking. We respect privacy and comfort.</p>
            </div>

            <div className="g-card p-4">
              <strong>Is it student-friendly pricing?</strong>
              <p className="text-sm text-gray-600 mt-2">Yes — show your student ID for a discount.</p>
            </div>

            <div className="g-card p-4">
              <strong>What safety measures are in place?</strong>
              <p className="text-sm text-gray-600 mt-2">All therapists are certified; rooms sanitized after each session.</p>
            </div>
          </div>
        </section>

        <footer className="text-center p-6 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} GenZ Massage Center — Peace in the palms.</div>
          <div className="mt-2">Random Contact: <strong>+92 301 234 5678</strong> • Email: <strong>contact@genzspa.example</strong></div>
        </footer>
      </main>
    </div>
  );
}
