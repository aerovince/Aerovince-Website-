// 'use client';

// import React from 'react';
// import PageHero from '@/components/ui/PageHero';
// import ContactForm from '@/components/contact/ContactForm';
// import FAQSection from '@/components/contact/FAQSection';

// export default function ContactPage() {
//     return (
//         <div className="bg-white min-h-screen">
//             <PageHero
//                 title="Contact Us"
//                 subtitle="Let's Talk"
//                 description="Have a project in mind? Let's discuss how we can help you achieve your goals."
//             />
//             <ContactForm />
//             <FAQSection />
//         </div>
//     );
// }

'use client';

import React from 'react';
// import ContactHero from '@/components/contact/ContactHero';
// import ContactCards from '@/components/contact/ContactCards';
// import ContactForm from '@/components/contact/ContactForm';
// import StatsSection from '@/components/contact/StateSection';
// import MeetingCard from '@/components/contact/MeetingCard';
// import FAQSection from '@/components/contact/FAQSection';

import Contactpagecontent  from '@/components/contact/Contactpagecontent';


export default function ContactPage() {
  return (
    <main className="bg-black">
      {/* <ContactHero />
      <ContactCards />
      <ContactForm />
      <StatsSection />
      <MeetingCard />
      <FAQSection /> */}
      <Contactpagecontent/>
    </main>
  );
}