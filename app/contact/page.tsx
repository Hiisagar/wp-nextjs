export default function Contact() {
  return (
    <main>
      <section>
        <h1>Contact Us</h1>

        <p>
          Have a question, suggestion, or want to work with us? Feel free
          to get in touch.
        </p>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message..."
            />
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div>
          <h2>Get In Touch</h2>
          <p>Email: hello@example.com</p>
          <p>We usually respond within 24–48 hours.</p>
        </div>
      </section>
    </main>
  );
}
