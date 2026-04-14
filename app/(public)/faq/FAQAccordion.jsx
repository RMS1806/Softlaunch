"use client";

import { useState } from "react";

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-2 mb-12">
      {faqs.map((faq, i) => (
        <div key={faq.id} className="group">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-center justify-between p-8 bg-surface-container hover:bg-surface-container-high transition-all border-l-4 ${open === i ? "border-primary" : "border-transparent hover:border-primary"}`}
          >
            <div className="flex flex-col text-left">
              <span className="font-mono text-[10px] text-primary mb-1 tracking-widest">[ {faq.ref} ]</span>
              <h3 className={`font-headline font-bold text-xl uppercase tracking-tight transition-colors ${open === i ? "text-primary" : "text-on-surface group-hover:text-primary"}`}>
                {faq.question}
              </h3>
            </div>
            <span className={`material-symbols-outlined text-primary transition-transform ${open === i ? "rotate-45" : ""}`}>
              add
            </span>
          </button>
          {open === i && (
            <div
              className="p-8 border-t border-primary/10 text-on-surface-variant font-body leading-relaxed"
              style={{ backdropFilter: "blur(12px)", background: "rgba(30,35,67,0.4)", borderLeft: "2px solid rgba(97,244,216,0.2)" }}
            >
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
