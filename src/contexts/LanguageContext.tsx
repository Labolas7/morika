"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "th" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  th: {
    // Navbar
    "nav.products": "สินค้า",
    "nav.story": "เรื่องราว",
    "nav.contact": "ติดต่อ",
    "nav.orderLine": "ทักไลน์สั่งทำ",
    
    // Hero
    "hero.tag": "Natural · Cozy · Wild",
    "hero.title": "ให้ทุกมื้อของน้อง",
    "hero.subtitle": "อบอุ่นเหมือนอยู่บ้าน",
    "hero.description": "โต๊ะวางชามไม้แท้ ออกแบบจากแรงบันดาลใจของป่าเขียวและความเรียบง่าย สลักชื่อน้องลงบนเนื้อไม้ เพื่อให้ทุกมุมในบ้านเป็นพื้นที่พักผ่อนของเขาจริงๆ",
    "hero.viewCollection": "ดูคอลเลกชัน",
    "hero.aboutMorika": "รู้จัก Morika",
    "hero.realOak": "ไม้โอ๊คแท้",
    "hero.handmade": "ทำด้วยมือ",
    "hero.petSafe": "ปลอดภัยสำหรับสัตว์เลี้ยง",
    "hero.startingFrom": "เริ่มต้นเพียง",
    
    // Collection
    "collection.tag": "เลือกที่ใช่สำหรับน้อง",
    "collection.title": "คอลเลกชันของเรา",
    "collection.description": "ไม้โอ๊คแท้ทุกชิ้น ขัดมือ เคลือบเงาปลอดภัย พร้อมชามเซรามิกที่ถอดล้างได้",
    "collection.solo.name": "Morika Solo",
    "collection.solo.desc": "โต๊ะวาง 1 ชาม · เหมาะกับน้องตัวเดียว",
    "collection.solo.tag": "ยอดนิยม",
    "collection.solo.detail": "ไม้โอ๊ค · ชามเซรามิก 1 ใบ · ขนาด S/M/L",
    "collection.duo.name": "Morika Duo",
    "collection.duo.desc": "โต๊ะวาง 2 ชาม · สำหรับบ้านที่มีน้องหลายตัว",
    "collection.duo.tag": "แนะนำ",
    "collection.duo.detail": "ไม้โอ๊ค · ชามเซรามิก 2 ใบ · ขนาด S/M/L",
    "collection.engraved.name": "Morika Engraved",
    "collection.engraved.desc": "สลักชื่อน้อง + ลายใบไม้ · ของขวัญสำหรับน้องๆ",
    "collection.engraved.tag": "ของขวัญ",
    "collection.engraved.detail": "ไม้โอ๊ค · สลักชื่อฟรี · ลายใบไม้",
    "collection.inquire": "สอบถาม",
    
    // Story
    "story.tag": "จากป่า สู่บ้านคุณ",
    "story.title": "ความรักที่ดีที่สุด",
    "story.subtitle": "คือความเรียบง่าย",
    "story.p1": "เราเลือกไม้จากแหล่งปลูกทดแทน ขัดและเคลือบด้วยมือทุกชิ้น เพราะเชื่อว่าของที่ดีไม่ต้องเสียงดัง",
    "story.p2": "แค่ทำหน้าที่ของมันให้ดีที่สุด — ให้น้องกินอย่างสบาย และให้บ้านอบอุ่นขึ้นอีกนิด",
    "story.step1.title": "ไม้โอ๊คจากป่าปลูกทดแทน",
    "story.step1.desc": "คัดเฉพาะแผ่นที่ไม่มีตำหนิ ลายไม้สวยเป็นธรรมชาติ",
    "story.step2.title": "เคลือบเงาปลอดสารพิษ",
    "story.step2.desc": "ปลอดภัยแม้น้องจะเลียหรือกัดเล่นบ้าง",
    "story.step3.title": "สลักชื่อทีละชิ้น",
    "story.step3.desc": "แต่ละโต๊ะมีชื่อน้องเป็นของตัวเอง ไม่ซ้ำใคร",
    "story.stat1": "ครอบครัวที่ไว้วางใจ",
    "story.stat2": "ไม้โอ๊คแท้",
    "story.stat3": "รุ่นให้เลือก",
    
    // Contact
    "contact.tag": "พร้อมเริ่มทำให้น้องแล้ว",
    "contact.title": "อยากให้น้องมีโต๊ะของตัวเอง?",
    "contact.description": "ทักมาบอกชื่อน้อง สีไม้ที่ชอบ และขนาดที่ต้องการ ทีมเราจะแนะนำรุ่นที่เหมาะที่สุดให้ค่ะ",
    "contact.line": "ทักไลน์",
    "contact.facebook": "Inbox Facebook",
    "contact.shipping": "📦 ส่งทั่วไทย",
    "contact.days": "⏱️ ผลิต 3–5 วันทำการ",
    "contact.gift": "🎁 ห่อของขวัญฟรี",
    
    // Footer
    "footer.description": "โต๊ะวางชามไม้แท้สำหรับสัตว์เลี้ยง ออกแบบให้ทุกมื้ออาหารอบอุ่นเหมือนอยู่บ้าน",
    "footer.explore": "สำรวจ",
    "footer.collection": "คอลเลกชัน",
    "footer.story": "เรื่องราวของเรา",
    "footer.contact": "ติดต่อสั่งทำ",
    "footer.contactTitle": "ติดต่อ",
    "footer.copyright": "made with love, for every fur baby — © 2026",
  },
  en: {
    // Navbar
    "nav.products": "Products",
    "nav.story": "Story",
    "nav.contact": "Contact",
    "nav.orderLine": "Order on LINE",
    
    // Hero
    "hero.tag": "Natural · Cozy · Wild",
    "hero.title": "Every meal for your furry friend",
    "hero.subtitle": "Warm and cozy like home",
    "hero.description": "Real wooden pet bowl stands, inspired by green forests and simplicity Engrave your pet's name on the wood, making every corner of your home their true sanctuary",
    "hero.viewCollection": "View Collection",
    "hero.aboutMorika": "About Morika",
    "hero.realOak": "Real Oak Wood",
    "hero.handmade": "Handmade",
    "hero.petSafe": "Pet Safe",
    "hero.startingFrom": "Starting from",
    
    // Collection
    "collection.tag": "Choose the perfect one for your pet",
    "collection.title": "Our Collection",
    "collection.description": "Real oak wood, hand-polished, safe finish, with removable ceramic bowls",
    "collection.solo.name": "Morika Solo",
    "collection.solo.desc": "1-bowl stand · Perfect for single pets",
    "collection.solo.tag": "Popular",
    "collection.solo.detail": "Oak wood · 1 ceramic bowl · Size S/M/L",
    "collection.duo.name": "Morika Duo",
    "collection.duo.desc": "2-bowl stand · For multi-pet homes",
    "collection.duo.tag": "Recommended",
    "collection.duo.detail": "Oak wood · 2 ceramic bowls · Size S/M/L",
    "collection.engraved.name": "Morika Engraved",
    "collection.engraved.desc": "Engraved name & leaf · Unique gift",
    "collection.engraved.tag": "Gift",
    "collection.engraved.detail": "Oak wood · Free engraving · Leaf pattern",
    "collection.inquire": "Inquire",
    
    // Story
    "story.tag": "From Forest to Your Home",
    "story.title": "The best love",
    "story.subtitle": "is simplicity",
    "story.p1": "We source wood from sustainable plantations, hand-polish and finish each piece, believing that good things don't need to be loud",
    "story.p2": "Just doing its job perfectly — letting your pet eat comfortably, and making your home a little warmer",
    "story.step1.title": "Oak from sustainable plantations",
    "story.step1.desc": "Only flawless boards selected, natural wood grain patterns",
    "story.step2.title": "Non-toxic clear finish",
    "story.step2.desc": "Safe even if your pet licks or chews on it",
    "story.step3.title": "Hand-engraved names",
    "story.step3.desc": "Each stand has your pet's name, truly one-of-a-kind",
    "story.stat1": "Families trust us",
    "story.stat2": "Real Oak",
    "story.stat3": "Models to choose",
    
    // Contact
    "contact.tag": "Ready to make one for your pet",
    "contact.title": "Want your pet to have their own stand?",
    "contact.description": "Tell us your pet's name, preferred wood color, and size Our team will recommend the perfect model for you",
    "contact.line": "Contact on LINE",
    "contact.facebook": "Facebook Inbox",
    "contact.shipping": "📦 Nationwide shipping",
    "contact.days": "⏱️ 3–5 business days",
    "contact.gift": "🎁 Free gift wrapping",
    
    // Footer
    "footer.description": "Real wooden pet bowl stands, designed to make every meal warm and cozy like home",
    "footer.explore": "Explore",
    "footer.collection": "Collection",
    "footer.story": "Our Story",
    "footer.contact": "Contact",
    "footer.contactTitle": "Contact",
    "footer.copyright": "made with love, for every fur baby — © 2026",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("th");
  const [isAnimating, setIsAnimating] = useState(false);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang: Language) => {
    if (lang === language) return;
    setIsAnimating(true);
    setTimeout(() => {
      setLanguage(lang);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => setIsAnimating(false), 100);
    }, 200);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      <div className={isAnimating ? "opacity-0 transition-opacity duration-200" : "opacity-100 transition-opacity duration-200"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
