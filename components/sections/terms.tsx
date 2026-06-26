"use client";
import React, { useState } from 'react';

export default function KdpHelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sidebar dynamic navigation list data according to the mockup
  const helpTopics = [
    {
      category: "Help",
      links: ["KDP Help Center Home"]
    },
    {
      category: "Account & Taxes",
      links: ["Set up your KDP account", "CreateSpace Account", "Tax Information"]
    },
    {
      category: "Book Formatting",
      links: ["Format Your Paperback", "Format Your Hardcover", "Format Your eBook", "Tools and Resources"]
    },
    {
      category: "KDP Publishing",
      links: [
        "Start publishing with KDP", 
        "Create a Book", 
        "Hardcover", 
        "Beta: Audiobooks with virtual voice", 
        "Beta: Kindle Translate", 
        "Start a Book Series"
      ]
    },
    {
      category: "Orders & Book Copies",
      links: ["Proof and Author Copies"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SIDEBAR: HELP TOPICS PANELS (3 Columns on Desktop) */}
        <aside className="lg:col-span-3 bg-[#f3f3f3] border border-gray-200 rounded-lg p-5 w-full">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-3 mb-4 text-gray-950">
            Help Topics
          </h2>

          <nav className="space-y-5">
            {helpTopics.map((topic, index) => (
              <div key={index} className="space-y-1.5">
                {/* Category Heading titles */}
                <h3 className="text-sm font-bold text-gray-950 tracking-tight">
                  {topic.category}
                </h3>
                {/* Link child items */}
                <ul className="space-y-1 pl-0.5">
                  {topic.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="text-xs sm:text-sm text-[#0066c0] hover:text-[#c45500] hover:underline transition-colors block py-0.5"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* RIGHT CORE DASHBOARD CONTENT (9 Columns on Desktop) */}
        <main className="lg:col-span-9 space-y-6 w-full">
          
          {/* SEARCH COMPONENT HEADER PANEL */}
          <div className="w-full bg-[#f3f3f3] border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full relative flex items-center bg-white border border-gray-400 rounded focus-within:ring-1 focus-within:ring-[#e77600] focus-within:border-[#e77600] transition-shadow">
              {/* Search Glass Indicator */}
              <span className="pl-3 pr-2 text-gray-400 text-sm">🔍</span>
              <input 
                type="text"
                placeholder="Topic or Keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 bg-transparent text-gray-900 text-sm focus:outline-none placeholder-gray-400"
              />
            </div>
            <button className="w-full sm:w-auto bg-[#333333] hover:bg-black text-white font-medium text-sm px-6 py-2 rounded shadow-sm whitespace-nowrap transition-colors">
              Search Help
            </button>
          </div>

          {/* BREADCRUMB INDICATORS */}
          <div className="text-xs font-semibold text-gray-800 flex flex-wrap items-center gap-1.5 pt-1">
            <span className="font-bold text-gray-900">Legal & Content Guidelines</span>
            <span className="text-gray-400 text-[10px]">&#10095;</span>
            <span className="text-[#0066c0] hover:underline cursor-pointer">Kindle Direct Publishing House Terms and Conditions</span>
          </div>

          {/* MAIN DOCUMENT HEADLINE */}
          <h1 className="text-2xl sm:text-3xl font-medium text-[#c45500] tracking-tight pt-2">
            Kindle Direct Publishing House Terms and Conditions
          </h1>

          {/* INNER CONTENT GRID BLOCK WRAPPER */}
          <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-6 pt-1">
            
            {/* Primary content documentation hook link */}
            <div className="w-full md:max-w-md">
              <a href="#terms-link" className="text-xs sm:text-sm text-[#0066c0] hover:text-[#c45500] hover:underline font-medium">
                Kindle Direct Publishing House Terms and Conditions
              </a>
            </div>

            {/* KDP JUMPSTART BRAND FLOATING PROMO BANNER BOX */}
            <div className="flex items-center border border-gray-200 rounded shadow-sm overflow-hidden bg-white max-w-sm ml-auto md:ml-0">
              <div className="p-4 flex flex-col items-end text-right space-y-0.5">
                <div className="text-sm font-medium text-gray-900">
                  <span className="font-black text-black">kdp</span> jumpstart
                </div>
                <p className="text-[11px] text-gray-500 font-medium">
                  A guide to publishing on Amazon
                </p>
              </div>
              
              {/* Call to action active banner trigger node */}
              <a 
                href="#learn-more"
                className="bg-[#e47911] hover:bg-[#d57008] text-white font-bold text-xs uppercase tracking-wider py-6 px-5 transition-colors h-full flex items-center justify-center min-h-[4.5rem]"
              >
                Learn More
              </a>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
}