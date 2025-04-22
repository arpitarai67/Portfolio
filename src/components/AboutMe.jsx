import "../styles/AboutMe.css"
import { motion } from 'framer-motion';
function AboutMe() {
  return (
    <section className="about-section">
      <h2>About Me</h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        I’m Arpita Rai, a passionate and self-driven Computer Science Engineering student at Lovely Professional University...
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        With strong proficiency in Java, C++, JavaScript, and Python...
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Beyond coding, I’m actively involved in social outreach and communication initiatives...
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Driven by curiosity and a constant desire to learn...
      </motion.p>
    </section>
  );

}

export default AboutMe
