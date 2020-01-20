import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>It wasn't until last year when I realized my passion was in coding and started my journey in the web development industry. After a few months of diving into javascript on my own I decided to take an extra step. So, I took a full stack web development bootcamp and became exceptional at problem solving and getting the knack of logic oriented thinking. Although it was only for 4 months, it involved 16+ hours day which simulates having experience for a lot longer. The grind of day after day was to learn all the technologies mentioned in my resume. This tells you that I am willing to take new challenges, whether is learning a new programming language in just a few weeks to getting out of my comfort zone and completely adapt to a new way of learning.</p>
      <p>In my opinion doing the bootcamp was the best thing I could've done since it skyrocketed my learning curve to learn and adapt to cutting edge technologies. I also believe that having worked and learned new stacks and technologies was much more beneficial throughout a period of 4 months, while doing, practicing, and writing code day to day, even on weekends for over 12 hours day, rather than having gone to school for it. I speak from personal experience having gone to university for an engineering degree, where you're not only focused on many other classes at a time, but social events and random distractions come along the way. Therefore I sincerely think I got the most of improving and honing my skills from the full-stack web development bootcamp as all my efforts and attention was focused on only one thing, coding.</p>
      <p>If you want to reach out to me, please do so through <Link to="/contact">here</Link>.</p>
    </Layout>
  )
}

export default About