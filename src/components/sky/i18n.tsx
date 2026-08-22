import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "mr";

const EN = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.membership": "Membership",
  "nav.gallery": "Gallery",
  "nav.contact": "Contact",
  "nav.join": "Join Now",
  "nav.menu": "Menu",
  "lang.label": "Language",

  "hero.eyebrow": "Sky Fitness Gym • Arali, Solapur",
  "hero.title1": "Build Your",
  "hero.title2": "Stronger Self.",
  "hero.sub":
    "Train with purpose. Build strength. Build confidence. Become the best version of yourself.",
  "hero.wa": "WhatsApp Us",
  "hero.priceBefore": "Memberships starting at just",
  "hero.priceValue": "₹600/month",
  "hero.scroll": "Scroll to explore",

  "value.1.title": "Smart Training",
  "value.1.copy": "Train with purpose.",
  "value.2.title": "Real Results",
  "value.2.copy": "Consistency creates transformation.",
  "value.3.title": "Affordable Membership",
  "value.3.copy": "Premium training experience at an accessible price.",

  "about.eyebrow": "About Sky Fitness",
  "about.title1": "Your training.",
  "about.title2": "Your goals.",
  "about.title3": "Your journey.",
  "about.body":
    "Sky Fitness Gym is a place to focus on yourself, push your limits and build consistency. Whether you're starting your fitness journey or looking to become stronger, every workout is a step forward.",
  "about.step1": "Training",
  "about.step2": "Consistency",
  "about.step3": "Progress",
  "about.cta": "Start Your Journey",

  "membership.eyebrow": "Simple membership. Serious results.",
  "membership.title1": "Choose your",
  "membership.title2": "commitment",
  "membership.oneMonth": "1 Month",
  "membership.monthly": "Monthly Membership",
  "membership.join600": "Join for ₹600",
  "membership.best": "Best Value",
  "membership.threeMonths": "3 Months",
  "membership.save": "Save ₹300",
  "membership.saveNote": "Three months paid monthly costs ₹1,800. This plan is ₹1,500.",
  "membership.join1500": "Join for ₹1,500",
  "membership.footnote": "No complicated plans. Just choose the membership that works for you.",

  "why.eyebrow": "Why choose Sky Fitness",
  "why.title1": "More than a",
  "why.title2": "workout.",
  "why.1.title": "Build Strength",
  "why.1.copy": "Push yourself beyond yesterday.",
  "why.2.title": "Build Consistency",
  "why.2.copy": "Small sessions become big results.",
  "why.3.title": "Build Confidence",
  "why.3.copy": "Feel stronger inside and out.",
  "why.4.title": "Build Your Routine",
  "why.4.copy": "Make fitness part of your lifestyle.",
  "why.5.title": "Personal Diet Plan",
  "why.5.copy": "Nutrition guidance that fuels your progress.",
  "why.6.title": "Proper Workout Plan",
  "why.6.copy": "Structured training built around your goals.",

  "gallery.eyebrow": "Gallery",
  "gallery.title1": "Inside",
  "gallery.title2": "Sky Fitness",
  "gallery.sub": "See the environment. Feel the energy.",

  "break.title1": "No excuses.",
  "break.title2": "Just progress.",
  "break.sub": "Show up. Train hard. Keep going.",
  "break.cta": "Join Sky Fitness",

  "final.title1": "Ready to",
  "final.title2": "get started?",
  "final.sub": "Your next workout can be the beginning of something better.",
  "final.call": "Call",

  "contact.eyebrow": "Contact",
  "contact.title1": "Find",
  "contact.title2": "Sky Fitness",
  "contact.call": "Call Now",
  "contact.wa": "WhatsApp",
  "contact.directions": "Get Directions",
  "contact.formTitle": "Send an enquiry",
  "contact.formSub": "Your details open in WhatsApp so we can reply quickly.",
  "contact.name": "Name",
  "contact.namePh": "Your name",
  "contact.phone": "Phone Number",
  "contact.phonePh": "Your phone number",
  "contact.message": "Message",
  "contact.messagePh": "What would you like to know?",
  "contact.submit": "Send Enquiry",

  "footer.brand1": "Sky",
  "footer.brand2": "Fitness Gym",
  "footer.credits": "Credits",
  "footer.createdBy": "Created by",
  "footer.tagline": "Show it up",

  "area": "Arali, Solapur, Maharashtra",
};

const MR: Record<keyof typeof EN, string> = {
  "nav.home": "मुख्यपृष्ठ",
  "nav.about": "आमच्याविषयी",
  "nav.membership": "सदस्यत्व",
  "nav.gallery": "गॅलरी",
  "nav.contact": "संपर्क",
  "nav.join": "आजच जॉईन करा",
  "nav.menu": "मेनू",
  "lang.label": "भाषा",

  "hero.eyebrow": "स्काय फिटनेस जिम • अरळी, सोलापूर",
  "hero.title1": "घडवा तुमचं",
  "hero.title2": "बलवान रूप.",
  "hero.sub":
    "ध्येय ठेवून व्यायाम करा. ताकद वाढवा. आत्मविश्वास वाढवा. स्वतःची सर्वोत्तम आवृत्ती बना.",
  "hero.wa": "व्हॉट्सअ‍ॅप करा",
  "hero.priceBefore": "सदस्यत्व सुरू फक्त",
  "hero.priceValue": "₹६००/महिना",
  "hero.scroll": "खाली स्क्रोल करा",

  "value.1.title": "स्मार्ट ट्रेनिंग",
  "value.1.copy": "ध्येय ठेवून व्यायाम.",
  "value.2.title": "खरे परिणाम",
  "value.2.copy": "सातत्यातूनच बदल घडतो.",
  "value.3.title": "परवडणारे सदस्यत्व",
  "value.3.copy": "उत्तम ट्रेनिंगचा अनुभव, कमी किमतीत.",

  "about.eyebrow": "स्काय फिटनेसविषयी",
  "about.title1": "तुमचं ट्रेनिंग.",
  "about.title2": "तुमची ध्येयं.",
  "about.title3": "तुमचा प्रवास.",
  "about.body":
    "स्काय फिटनेस जिम ही स्वतःवर लक्ष केंद्रित करण्याची, मर्यादा ओलांडण्याची आणि सातत्य निर्माण करण्याची जागा आहे. तुम्ही नुकतीच सुरुवात करत असाल किंवा अधिक ताकदवान होऊ इच्छित असाल, प्रत्येक व्यायाम एक पाऊल पुढे नेतो.",
  "about.step1": "ट्रेनिंग",
  "about.step2": "सातत्य",
  "about.step3": "प्रगती",
  "about.cta": "प्रवास सुरू करा",

  "membership.eyebrow": "साधे सदस्यत्व. ठोस परिणाम.",
  "membership.title1": "निवडा तुमची",
  "membership.title2": "बांधिलकी",
  "membership.oneMonth": "१ महिना",
  "membership.monthly": "मासिक सदस्यत्व",
  "membership.join600": "₹६०० मध्ये जॉईन करा",
  "membership.best": "सर्वोत्तम मूल्य",
  "membership.threeMonths": "३ महिने",
  "membership.save": "₹३०० वाचवा",
  "membership.saveNote": "तीन महिने महिन्याने भरल्यास ₹१,८०० होतात. या प्लॅनमध्ये ₹१,५००.",
  "membership.join1500": "₹१,५०० मध्ये जॉईन करा",
  "membership.footnote": "गुंतागुंतीचे प्लॅन नाहीत. तुम्हाला योग्य वाटेल ते सदस्यत्व निवडा.",

  "why.eyebrow": "स्काय फिटनेस का निवडावे",
  "why.title1": "फक्त व्यायामापेक्षा",
  "why.title2": "अधिक.",
  "why.1.title": "ताकद वाढवा",
  "why.1.copy": "कालच्यापेक्षा पुढे जा.",
  "why.2.title": "सातत्य निर्माण करा",
  "why.2.copy": "छोटे सेशन्स मोठे परिणाम देतात.",
  "why.3.title": "आत्मविश्वास वाढवा",
  "why.3.copy": "आतून आणि बाहेरून मजबूत वाटा.",
  "why.4.title": "स्वतःची दिनचर्या बनवा",
  "why.4.copy": "फिटनेस जीवनशैलीचा भाग बनवा.",
  "why.5.title": "वैयक्तिक डायट प्लॅन",
  "why.5.copy": "प्रगतीला बळ देणारे आहार मार्गदर्शन.",
  "why.6.title": "योग्य वर्कआउट प्लॅन",
  "why.6.copy": "तुमच्या ध्येयांनुसार रचलेले ट्रेनिंग.",

  "gallery.eyebrow": "गॅलरी",
  "gallery.title1": "आतून पाहा",
  "gallery.title2": "स्काय फिटनेस",
  "gallery.sub": "वातावरण पाहा. ऊर्जा अनुभवा.",

  "break.title1": "सबब नको.",
  "break.title2": "फक्त प्रगती.",
  "break.sub": "हजर राहा. जोरात व्यायाम करा. थांबू नका.",
  "break.cta": "स्काय फिटनेस जॉईन करा",

  "final.title1": "सुरुवात करायला",
  "final.title2": "तयार आहात?",
  "final.sub": "तुमचा पुढचा व्यायाम एका चांगल्या बदलाची सुरुवात ठरू शकतो.",
  "final.call": "कॉल करा",

  "contact.eyebrow": "संपर्क",
  "contact.title1": "शोधा",
  "contact.title2": "स्काय फिटनेस",
  "contact.call": "आता कॉल करा",
  "contact.wa": "व्हॉट्सअ‍ॅप",
  "contact.directions": "रस्ता दाखवा",
  "contact.formTitle": "चौकशी पाठवा",
  "contact.formSub": "तुमची माहिती व्हॉट्सअ‍ॅपमध्ये उघडेल, आम्ही लगेच उत्तर देतो.",
  "contact.name": "नाव",
  "contact.namePh": "तुमचे नाव",
  "contact.phone": "मोबाईल नंबर",
  "contact.phonePh": "तुमचा मोबाईल नंबर",
  "contact.message": "संदेश",
  "contact.messagePh": "तुम्हाला काय जाणून घ्यायचे आहे?",
  "contact.submit": "चौकशी पाठवा",

  "footer.brand1": "स्काय",
  "footer.brand2": "फिटनेस जिम",
  "footer.credits": "श्रेय",
  "footer.createdBy": "निर्मिती",
  "footer.tagline": "Show it up",

  "area": "अरळी, सोलापूर, महाराष्ट्र",
};

export type TKey = keyof typeof EN;

const DICT: Record<Lang, Record<TKey, string>> = { en: EN, mr: MR };

const STORAGE_KEY = "sky-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => EN[k],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "mr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
  }, [lang]);

  const t = (k: TKey) => DICT[lang][k] ?? EN[k];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
