import ChatBot from "react-chatbotify";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Products from './components/Products'
import CustomDesigner from './components/CustomDesigner'
import Support from './components/Support'
import FAQ from './components/FAQ'
import Policies from './components/Policies'
import Legal from './components/Legal'
import PaymentTerms from './components/PaymentTerms'
import QuoteForm from './components/QuoteForm'
import Merch from './components/Merch' // Import the new Merch component
import AmazonServices from './components/AmazonServices' // Import the new Amazon Services component
import Footer from './components/Footer'
import StarterPackageLandingPage from './components/StarterPackageLandingPage';
import GrowthPackageLandingPage from './components/GrowthPackageLandingPage';
import ElitePackageLandingPage from './components/ElitePackageLandingPage';
import './App.css'

function App() {
  // Chatbot configuration with conversation flow
  const flow = {
    start: {
      message: "Hello! Welcome to H.BNS LLC! 🎨 How can I assist you today?",
      options: ["Services & Pricing", "Support & Contact", "Policies & Legal", "Merchandise", "Get a Quote"],
      path: (params) => {
        const input = params.userInput.toLowerCase();
        
        // Handle greetings and common phrases
        if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("good")) {
          return "start";
        }
        if (input.includes("help") || input.includes("support")) {
          return "support";
        }
        if (input.includes("price") || input.includes("cost") || input.includes("service")) {
          return "services";
        }
        if (input.includes("quote")) {
          return "quote";
        }
        if (input.includes("policy") || input.includes("refund") || input.includes("return")) {
          return "policies";
        }
        if (input.includes("merch") || input.includes("merchandise")) {
          return "merch";
        }
        
        // Handle exact option matches
        switch (params.userInput) {
          case "Services & Pricing": return "services";
          case "Support & Contact": return "support";
          case "Policies & Legal": return "policies";
          case "Merchandise": return "merch";
          case "Get a Quote": return "quote";
          default: return "clarify";
        }
      }
    },
    services: {
      message: "We specialize in professional custom illustrations! Our services include:\n\n🎨 Logo Design - Starting at $299\n👤 Character Design - Starting at $399\n📚 Book Covers - Starting at $249\n🖼️ Custom Illustrations - Starting at $199\n📦 Branding Packages - Starting at $799\n💻 Digital Art - Starting at $149\n\nWe also offer ready-to-use digital products. What would you like to know more about?",
      options: ["Pricing Details", "Digital Products", "Get a Quote", "Back to Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Pricing Details": return "pricing";
          case "Digital Products": return "digital_products";
          case "Get a Quote": return "quote";
          case "Back to Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    pricing: {
      message: "Here are our detailed starting prices:\n\n💰 Logo Design: $299+\n💰 Character Design: $399+\n💰 Book Covers: $249+\n💰 Custom Illustrations: $199+\n💰 Branding Packages: $799+\n💰 Digital Art: $149+\n\n✨ We offer:\n• Free consultation\n• 24hr response time\n• Up to 3 revision rounds included\n• Rush orders available (+50% fee)\n\nFor a precise quote tailored to your project, please use our quote form!",
      options: ["Get a Quote", "Timeline Info", "Back to Services", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Get a Quote": return "quote";
          case "Timeline Info": return "timeline";
          case "Back to Pricing": return "pricing";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    timeline: {
      message: "Our project timelines:\n\n⚡ Rush (1-3 days) - +50% fee\n🚀 Standard (1-2 weeks) - Most popular\n📅 Extended (2-4 weeks)\n🕐 Flexible timeline\n\nTimelines may vary based on complexity and revision requirements. We provide specific timelines when you submit your request!",
      options: ["Get a Quote", "Back to Pricing", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Get a Quote": return "quote";
          case "Back to Pricing": return "pricing";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    digital_products: {
      message: "We offer ready-to-use digital illustrations, templates, and assets including:\n\n📁 Illustrations\n📖 KDP Interiors\n📚 Book Covers\n📦 Bundles\n🖼️ Mock-Ups\n\nYou can explore our collection on our Products page or visit our complete store on Gumroad for instant downloads!",
      options: ["Back to Services", "Get a Quote", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Services": return "services";
          case "Get a Quote": return "quote";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    support: {
      message: "Here's how you can reach us:\n\n📧 Email: support@h-bns.shop\n   (Response within 24 hours)\n📞 Phone: +1 (307) 205-8381\n   (Mon-Fri, 9 AM - 6 PM EST)\n\n🕒 Business Hours:\n• Monday - Friday: 9:00 AM - 6:00 PM EST\n• Saturday: 10:00 AM - 4:00 PM EST\n• Sunday: Closed\n\n📍 Address: H.BNS LLC, 30 N Gould St Ste N, Sheridan, WY 82801, USA",
      options: ["FAQ", "Contact Form", "Back to Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "FAQ": return "faq";
          case "Contact Form": return "contact_form";
          case "Back to Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    faq: {
      message: "Our FAQ covers common questions about:\n\n❓ File formats (PNG, JPG, SVG, others on request)\n⏰ Project timelines and rush orders\n📜 Commercial licenses (included with most products)\n🔄 Revisions (up to 3 rounds included)\n💳 Payment methods (major credit cards, PayPal)\n🖨️ Print-on-demand usage\n📁 Source files (available for additional fee)\n🎨 Art style matching\n💰 Bulk discounts\n\nYou can find detailed answers on our FAQ page!",
      options: ["Back to Support", "Get a Quote", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Support": return "support";
          case "Get a Quote": return "quote";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    contact_form: {
      message: "You can send us a message using our contact form on the Support page. We'll get back to you within 24 hours!",
      options: ["Back to Support", "Get a Quote", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Support": return "support";
          case "Get a Quote": return "quote";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    policies: {
      message: "Here's a summary of our key policies:\n\n🔄 Returns: Digital products - all sales final (except technical issues)\n💰 Refunds: Available for technical issues, duplicates, quality issues (within 14 days)\n❌ Cancellations: Custom projects - 24hr window, 50% refund before work starts\n🔒 Privacy: We only collect necessary info, never sell/share data\n📋 Terms: Payment required upfront, IP rights transfer on payment\n🌍 Export: Available worldwide, comply with US/international laws\n\nFor full details, check our Policies & Legal pages!",
      options: ["Refund Details", "Privacy Info", "Terms & Conditions", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Refund Details": return "refund_details";
          case "Privacy Info": return "privacy_info";
          case "Terms & Conditions": return "terms_conditions";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    refund_details: {
      message: "Refund Policy Details:\n\n💻 Digital Products:\n• All sales final due to nature of digital goods\n• Refunds for technical issues, duplicates, quality issues\n• Must request within 14 days\n\n🎨 Custom Projects:\n• Can cancel within 24 hours of order\n• 50% refund if cancelled before work begins\n• No refund once work has started\n\nFor disputes, contact refund@h-bns.shop first!",
      options: ["Back to Policies", "Contact Support", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Policies": return "policies";
          case "Contact Support": return "support";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    privacy_info: {
      message: "Privacy Policy Summary:\n\n🔒 What we collect: Only necessary info (contact, project details, payment)\n🎯 How we use it: Project communication and support only\n🚫 What we don't do: Sell or share personal data with third parties\n🛡️ Security: Secure payment processors, appropriate data protection\n✅ Your rights: Request access, correction, or deletion anytime\n\nContact support@hbnsllc.com for data requests!",
      options: ["Back to Policies", "Contact Support", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Policies": return "policies";
          case "Contact Support": return "support";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    terms_conditions: {
      message: "Terms & Conditions Summary:\n\n💼 Services: Custom illustrations and digital products\n💳 Payment: Required before work begins, secure processors\n📝 IP Rights: Transfer to client upon full payment\n⏱️ Timelines: Estimates, may vary with complexity\n🎁 Promotions: Subject to terms, can't combine unless stated\n🌍 Compliance: Governed by US laws\n\nFull terms available on our Legal page!",
      options: ["Back to Policies", "Contact Support", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Policies": return "policies";
          case "Contact Support": return "support";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },
    merch: {
      message: "Check out our official H.BNS merchandise! 🛍️\n\nWe have best-selling Amazon products with various unique designs including:\n• Tacos Fiesta Cinco De Mayo\n• Frog Art Cottagecore\n• Cat Lovers\n• Funny Crochet Pun\n• And more!\n\nYou can find all our merchandise on our Merch page, with direct links to Amazon!",
      options: ["Back to Main Menu", "Get a Quote", "Contact Support"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Main Menu": return "start";
          case "Get a Quote": return "quote";
          case "Contact Support": return "support";
          default: return "clarify";
        }
      }
    },
    quote: {
      message: "Great! Ready to bring your vision to life? 🎨✨\n\nOur 'Get Your Custom Quote' form includes:\n• Free consultation\n• 24-hour response time\n• No commitment required\n\nThe form asks for:\n📝 Contact information\n🎯 Project type and budget\n⏰ Preferred timeline\n💭 Detailed project description\n\nYou can find the quote form on our website. We're excited to work with you!",
      options: ["Back to Main Menu", "Contact Support", "Services Info"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Main Menu": return "start";
          case "Contact Support": return "support";
          case "Services Info": return "services";
          default: return "clarify";
        }
      }
    },
    clarify: {
      message: "I'm sorry, I didn't quite understand that. Could you please choose from the available options or try asking about:\n\n• Services and pricing\n• Support and contact info\n• Policies and legal info\n• Merchandise\n• Getting a quote\n\nOr feel free to type your question! 🤔",
      options: ["Services & Pricing", "Support & Contact", "Policies & Legal", "Merchandise", "Get a Quote"],
      path: (params) => {
        const input = params.userInput.toLowerCase();
        
        // Handle common phrases in clarify as well
        if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("good")) {
          return "start";
        }
        if (input.includes("help") || input.includes("support")) {
          return "support";
        }
        if (input.includes("price") || input.includes("cost") || input.includes("service")) {
          return "services";
        }
        if (input.includes("quote")) {
          return "quote";
        }
        if (input.includes("policy") || input.includes("refund") || input.includes("return")) {
          return "policies";
        }
        if (input.includes("merch") || input.includes("merchandise")) {
          return "merch";
        }
        
        switch (params.userInput) {
          case "Services & Pricing": return "services";
          case "Support & Contact": return "support";
          case "Policies & Legal": return "policies";
          case "Merchandise": return "merch";
          case "Get a Quote": return "quote";
          default: return "start";
        }
      }
    }
  };

  const settings = {
    chatInput: {
      enabledPlaceholderText: "What can we help you with ?",
      showCharacterCount: false
    },
    general: {
      primaryColor: "#E39A97",
      secondaryColor: "#B85340",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontSize: 14,
      showFooter: false
    },
    chatHistory: {
      storageKey: "hbns_chat_history"
    },
    header: {
      title: "H.BNS Support",
      showAvatar: false,
      avatar: "🎨"
    },
    chatButton: {
      icon: "💬"
    },
    userBubble: {
      animate: true,
      showAvatar: false,
      backgroundColor: "#E39A97",
      color: "#FFFFFF",
      borderRadius: "18px 18px 4px 18px",
      boxShadow: "0px 4px 4px #00000040"
    },
    botBubble: {
      animate: true,
      showAvatar: true,
      avatar: "🎨",
      color: "#FFFFFF",
      borderRadius: "18px 18px 18px 4px",
      backgroundColor: "#E39A97",
      padding: "10px 14px",
      boxShadow: "0px 4px 4px #00000040"
    },
    theme: {
      primaryColor: "#E39A97",
      secondaryColor: "#B85340",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    chatWindowStyle: {
      backgroundImage: "linear-gradient(to bottom, #823b42, #823b42, #823b42, #823b42, #b14956, #b14956, #b14956, #B85340)"
    },
    headerStyle: {
      backgroundImage: "linear-gradient(to bottom, #723053, #723053, #723053, #723053, #723053, #823b42)",
      color: "#FFFFFF",
      borderBottom: "none"
    },
    chatInputContainerStyle: {
      backgroundColor: "#B85340",
      borderTopColor: "#B85340",
      backdropFilter: "blur(8px)"
    },
    chatInputAreaStyle: {
      minHeight: 25,
      padding: "8px 15px",
      backgroundColor: "#EEEEEE",
      color: "#333333",
      fontSize: "14px",
      outlineColor: "transparent",
      borderRadius: "20px"
    },
    sendButtonStyle: {
      backgroundColor: "#B85340",
      border: "none",
      boxShadow: "none",
      color: "#EEEEEE"
    },
    sendButtonHoveredStyle: {
      backgroundColor: "#E39A97"
    },
    chatHistoryButtonStyle: {
      color: "#E39A97",
      backgroundColor: "#FFFFFF",
      border: "1px solid #DAEDF2"
    },
    chatHistoryButtonHoveredStyle: {
      color: "#FFFFFF",
      backgroundColor: "#E39A97"
    }
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Products />
            <CustomDesigner />
            <Support />
            <FAQ />
            <Policies />
            <Legal />
            <PaymentTerms />
            <QuoteForm />
            <Merch />
          </>
        } />
        <Route path="/amazon-services" element={<AmazonServices />} />
        <Route path="/starter-package" element={<StarterPackageLandingPage />} />
        <Route path="/growth-package" element={<GrowthPackageLandingPage />} />
        <Route path="/elite-package" element={<ElitePackageLandingPage />} />
      </Routes>
      <Footer />
      <ChatBot settings={settings} flow={flow} />
    </Router>
  );
}

export default App;


