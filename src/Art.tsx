import { useState, useEffect, useCallback } from "react";

const BASE = "https://hikwbsudpv0qakso.public.blob.vercel-storage.com";

interface Photo {
  id: number;
  src: string;
  title: string;
  location: string;
  collection: string;
  aspect: string;
}

const photos: Photo[] = [
  // ── INFRARED ──────────────────────────────
  { id: 8,  src: `${BASE}/DSCF9679.JPG`,         title: "Weeping",         location: "Pacific Northwest", collection: "Infrared",       aspect: "portrait"  },
  { id: 3,  src: `${BASE}/DSCF0046.jpg`,         title: "Creek",           location: "Hoh Rain Forest",   collection: "Infrared",       aspect: "portrait"  },
  { id: 4,  src: `${BASE}/DSCF0074.jpg`,         title: "Cathedral Forest",location: "Hoh Rain Forest",   collection: "Infrared",       aspect: "landscape" },
  { id: 6,  src: `${BASE}/DSCF9848(1).JPG`,      title: "Driftwood",       location: "Pacific Northwest", collection: "Infrared",       aspect: "landscape" },
  { id: 13, src: `${BASE}/DSCF9065.jpg`,         title: "Ridgeline",       location: "Pacific Northwest", collection: "Infrared",       aspect: "landscape" },
  { id: 15, src: `${BASE}/DSCF9942.jpg`,         title: "Reverie",         location: "Pacific Northwest", collection: "Infrared",       aspect: "portrait"  },

  // ── COLOR INFRARED ────────────────────────
  { id: 11, src: `${BASE}/DSCF9986(1).JPG`,      title: "Olympic",         location: "Olympic Peninsula", collection: "Color Infrared", aspect: "landscape" },
  { id: 12, src: `${BASE}/DSCF9043.jpg`,         title: "Gap",             location: "Olympic Peninsula", collection: "Color Infrared", aspect: "portrait"  },
  { id: 9,  src: `${BASE}/DSCF9246(1).jpg`,      title: "Luminance",       location: "Pacific Northwest", collection: "Color Infrared", aspect: "portrait"  },
  { id: 5,  src: `${BASE}/DSCF9353(1).jpg`,      title: "The Path",        location: "Pacific Northwest", collection: "Color Infrared", aspect: "portrait"  },

  // ── AFTER DARK ────────────────────────────
  { id: 14, src: `${BASE}/DSCF9239(1).jpg`,      title: "Light Trails",    location: "Bellevue, WA",      collection: "After Dark",     aspect: "landscape" },
  { id: 10, src: `${BASE}/DSCF9215(1).jpg`,      title: "Violet",          location: "Pacific Northwest", collection: "After Dark",     aspect: "portrait"  },
  { id: 17, src: `${BASE}/DSCF9212(1).jpg`,      title: "Bloom",           location: "Pacific Northwest", collection: "After Dark",     aspect: "portrait"  },

  // ── ARCHITECTURE ──────────────────────────
  { id: 18, src: `${BASE}/DSCF9918(1).JPG`,      title: "Victorian",       location: "Port Townsend, WA", collection: "Architecture",   aspect: "portrait"  },
  { id: 23, src: `${BASE}/APC_1926(1).JPG`,      title: "Pipework",        location: "Seattle, WA",       collection: "Architecture",   aspect: "landscape" },
  { id: 31, src: `${BASE}/IMG_1546.JPG`,          title: "Public Market",   location: "Seattle, WA",       collection: "Architecture",   aspect: "landscape" },
  { id: 32, src: `${BASE}/DSCF1516.JPG`,          title: "Red Door",        location: "Pacific Northwest", collection: "Architecture",   aspect: "landscape" },

  // ── PORTRAITS ─────────────────────────────
  { id: 22, src: `${BASE}/IMG_2571_jpg(1).JPG`,  title: "Autumn",          location: "Pacific Northwest", collection: "Portraits",      aspect: "portrait"  },
  { id: 28, src: `${BASE}/APC_0101(1).JPG`,      title: "Café",            location: "Cuenca, Ecuador",   collection: "Portraits",      aspect: "portrait"  },
  { id: 29, src: `${BASE}/DSC09353(1).JPG`,      title: "Dusk",            location: "Pacific Northwest", collection: "Portraits",      aspect: "landscape" },
  { id: 30, src: `${BASE}/DSC09357(1).JPG`,      title: "Horizon",         location: "Pacific Northwest", collection: "Portraits",      aspect: "landscape" },

  // ── FILM ──────────────────────────────────
  { id: 25, src: `${BASE}/IMG_3226.JPG`,         title: "Tulips",          location: "Pacific Northwest", collection: "Film",           aspect: "landscape" },
  { id: 26, src: `${BASE}/img008.png`,           title: "Tail Fin",        location: "Pacific Northwest", collection: "Film",           aspect: "portrait"  },
  { id: 27, src: `${BASE}/img006.png`,           title: "Chrome",          location: "Pacific Northwest", collection: "Film",           aspect: "landscape" },

// ── PERU ──────────────────────────────────
{ id: 40, src: `${BASE}/cusco-festival-dancer-ribbons.jpg`,       title: "Ribbons",          location: "Cusco, Peru",          collection: "Peru", aspect: "portrait"  },
{ id: 41, src: `${BASE}/dancer-embroidered-butterfly-vest.jpg`,   title: "Before the Dance", location: "Cusco, Peru",          collection: "Peru", aspect: "portrait"  },
{ id: 42, src: `${BASE}/military-cadets-uniform-inspection.jpg`,  title: "Ready",            location: "Cusco, Peru",          collection: "Peru", aspect: "landscape" },
{ id: 43, src: `${BASE}/ollantaytambo-quechua-elder.jpg`,         title: "Still",            location: "Ollantaytambo, Peru",  collection: "Peru", aspect: "portrait"  },
{ id: 44, src: `${BASE}/ollantaytambo-street-scene.jpg`,          title: "Plaza",            location: "Ollantaytambo, Peru",  collection: "Peru", aspect: "landscape" },
{ id: 45, src: `${BASE}/DSC_0944.jpg`,                            title: "Emergence",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 61, src: `${BASE}/inca-doorway-water-channel.jpg`,          title: "Threshold",        location: "Ollantaytambo, Peru",  collection: "Peru", aspect: "portrait"  },
{ id: 46, src: `${BASE}/inca-wall-andes-sunbeams.jpg`,            title: "The Other View",   location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 47, src: `${BASE}/intihuatana-stone-mountain.jpg`,          title: "Hitching Post",    location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 48, src: `${BASE}/llama-back-of-head.jpg`,                  title: "Elsewhere",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
{ id: 49, src: `${BASE}/llama-portrait-blue-bokeh.jpg`,           title: "Double Take",      location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
{ id: 50, src: `${BASE}/llama-stone-ledge-mist.jpg`,              title: "Resident",         location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 54, src: `${BASE}/llama-mist-profile.jpg`,                  title: "Profile",          location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
{ id: 62, src: `${BASE}/llama-ruins-photobomb.jpg`,               title: "Unimpressed",      location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
{ id: 55, src: `${BASE}/machu-picchu-morning-mist-overview.jpg`,  title: "Morning",          location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 56, src: `${BASE}/machu-picchu-overview-clearing-mist.jpg`, title: "Clearing",         location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 57, src: `${BASE}/machu-picchu-ruins-wildflowers.jpg`,      title: "Discovery",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 63, src: `${BASE}/machu-picchu-wildflower-reveal.jpg`,      title: "Reveal",           location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 58, src: `${BASE}/machu-picchu-silhouette-mist.jpg`,        title: "Above the World",  location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 64, src: `${BASE}/machu-picchu-guardhouse-mounds.jpg`,      title: "Sentinels",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 59, src: `${BASE}/machu-picchu-terraces-lone-tree.jpg`,     title: "Solitary",         location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 65, src: `${BASE}/machu-picchu-thatched-huts-dusk.jpg`,     title: "Blue Hour",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 66, src: `${BASE}/machu-picchu-inca-path-blue-hour.jpg`,    title: "The Path",         location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
{ id: 67, src: `${BASE}/machu-picchu-figure-discovery.jpg`,       title: "Found",            location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
{ id: 68, src: `${BASE}/huayna-picchu-summit-fog.jpg`,            title: "Summit",           location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 69, src: `${BASE}/huayna-picchu-clouds.jpg`,                title: "Above All",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
{ id: 70, src: `${BASE}/machu-picchu-stone-and-rock.jpg`,         title: "Foundation",       location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },

// ── ECUADOR ───────────────────────────────
{ id: 50, src: `${BASE}/IMG_2086.jpg`,          title: "Benediction",  location: "Quito, Ecuador", collection: "Ecuador", aspect: "portrait"  },
{ id: 51, src: `${BASE}/DSCF9399.JPG`,          title: "El Panecillo", location: "Quito, Ecuador", collection: "Ecuador", aspect: "landscape" },
{ id: 52, src: `${BASE}/DSCF9388.JPG`,          title: "Ascent",       location: "Quito, Ecuador", collection: "Ecuador", aspect: "portrait"  },
{ id: 53, src: `${BASE}/DSCF9430.JPG`,          title: "Cathedral",    location: "Quito, Ecuador", collection: "Ecuador", aspect: "portrait"  },
{ id: 60, src: `${BASE}/ecuador-llama.jpg`,      title: "On the Line",  location: "Mitad del Mundo, Ecuador", collection: "Ecuador", aspect: "portrait"  },
];
const COLLECTIONS = ["All", "Infrared", "Color Infrared", "After Dark", "Architecture", "Portraits", "Film", "Peru", "Ecuador"];

const TRAVEL_SECTIONS: { label: string; collection: string; meta: string }[] = [
  { label: "Peru",    collection: "Peru",    meta: "Cusco · Ollantaytambo · Machu Picchu" },
  { label: "Ecuador", collection: "Ecuador", meta: "Quito" },
];

function PlaceholderImage({ title }: { title: string }) {
  return (
    <div style={{
      width: "100%", height: "100%", minHeight: "160px",
      background: "linear-gradient(135deg, #0a0a14 0%, #141420 100%)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "10px",
    }}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.15 }}>
        <rect x="2" y="6" width="28" height="20" rx="3" stroke="#e8e8f0" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="5" stroke="#e8e8f0" strokeWidth="1.5" />
        <circle cx="24" cy="10" r="1.5" fill="#e8e8f0" />
      </svg>
      <span style={{ color: "#e8e8f0", opacity: 0.12, fontSize: "9px", letterSpacing: "0.2em", fontFamily: "inherit", textTransform: "uppercase" }}>
        {title}
      </span>
    </div>
  );
}

export default function Art() {
  const [activeCollection, setActiveCollection] = useState("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const isTravel = activeCollection === "Peru" || activeCollection === "Ecuador";

  const filtered = (() => {
    if (activeCollection === "All") {
      return photos.filter((p) => p.collection !== "Portraits");
    }
    return photos.filter((p) => p.collection === activeCollection);
  })();

  const openLightbox = useCallback((photo: Photo) => {
    setLightbox(photo);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const navigateLightbox = useCallback((dir: number) => {
    if (!lightbox) return;
    const idx = filtered.findIndex((p) => p.id === lightbox.id);
    setLightbox(filtered[(idx + dir + filtered.length) % filtered.length]);
  }, [lightbox, filtered]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox, navigateLightbox]);

  const handleImgError = (id: number) => setImgErrors(prev => ({ ...prev, [id]: true }));

  const renderPhotoGrid = (photoList: Photo[], startDelay = 0) => (
    <div className="art-grid">
      {photoList.map((photo, i) => (
        <div
          key={photo.id}
          className="art-item"
          style={{ animationDelay: `${startDelay + i * 0.05}s` }}
          onClick={() => openLightbox(photo)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && openLightbox(photo)}
          aria-label={`View ${photo.title}`}
        >
          <div className="art-item-inner">
            {photo.src && !imgErrors[photo.id] ? (
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                onError={() => handleImgError(photo.id)}
              />
            ) : (
              <div className="placeholder-wrap">
                <PlaceholderImage title={photo.title} />
              </div>
            )}
            <div className="art-caption">
              <span className="caption-title">{photo.title}</span>
              <span className="caption-meta">{photo.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTravelView = () => {
    const sections = activeCollection === "All"
      ? TRAVEL_SECTIONS
      : TRAVEL_SECTIONS.filter((s) => s.collection === activeCollection);

    let delayCounter = 0.2;
    return sections.map((section) => {
      const sectionPhotos = photos.filter((p) => p.collection === section.collection);
      const delay = delayCounter;
      delayCounter += sectionPhotos.length * 0.05 + 0.3;
      return (
        <div key={section.collection}>
          <div className="section-header" style={{ animationDelay: `${delay - 0.1}s` }}>
            <div className="section-title">{section.label}</div>
            <div className="section-meta">{section.meta}</div>
          </div>
          <div className="section-rule" style={{ animationDelay: `${delay - 0.05}s` }} />
          {renderPhotoGrid(sectionPhotos, delay)}
          <div className="section-gap" />
        </div>
      );
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,700&family=Didact+Gothic&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .art-root {
          min-height: 100vh;
          background: #080810;
          color: #c8c8d4;
          font-family: 'Didact Gothic', sans-serif;
          display: flex;
          flex-direction: column;
        }

        .art-header {
          position: relative;
          z-index: 10;
          padding: 48px 48px 32px;
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }

        .art-name {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: clamp(2.6rem, 5vw, 4rem);
          color: #f0f0f8;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .art-subtitle {
          font-size: 10px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #888899;
          margin-top: 10px;
        }

        .art-nav {
          position: relative;
          z-index: 10;
          padding: 0 48px 32px;
          display: flex;
          gap: 28px;
          align-items: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.15s forwards;
        }

        .art-nav-rule {
          flex: 1;
          height: 1px;
          background: #ffffff08;
          min-width: 20px;
        }

        .filter-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Didact Gothic', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #6a6a88;
          padding: 4px 0;
          position: relative;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        .filter-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #e0e0f0;
          transition: width 0.3s ease;
        }
        .filter-btn:hover { color: #9090b0; }
        .filter-btn:hover::after { width: 100%; }
        .filter-btn.active { color: #c8c8d4; }
        .filter-btn.active::after { width: 100%; background: #c8c8d4; }

        .section-header {
          padding: 0 48px 20px;
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }

        .section-title {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 3vw, 2rem);
          color: #f0f0f8;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .section-meta {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #444458;
          margin-top: 8px;
        }

        .section-rule {
          margin: 0 48px 32px;
          height: 1px;
          background: #ffffff08;
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }

        .section-gap { height: 64px; }

        .art-grid {
          position: relative;
          z-index: 10;
          padding: 0 48px;
          columns: 3;
          column-gap: 10px;
          flex: 1;
        }

        .art-item {
          display: inline-block;
          width: 100%;
          margin-bottom: 10px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          animation: fadeUp 0.65s ease forwards;
          vertical-align: top;
        }

        .art-item-inner {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .art-item-inner img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.5s ease;
          filter: brightness(0.85);
        }

        .art-item:hover .art-item-inner img {
          transform: scale(1.04);
          filter: brightness(1);
        }

        .placeholder-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.5s ease;
          filter: brightness(0.85);
        }

        .art-item:hover .placeholder-wrap {
          transform: scale(1.04);
          filter: brightness(1);
        }

        .art-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 32px 14px 12px;
          background: linear-gradient(to top, rgba(8,8,16,0.9) 0%, transparent 100%);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .art-item:hover .art-caption { opacity: 1; transform: translateY(0); }

        .caption-title {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: 15px;
          color: #e8e8f0;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .caption-meta {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #888899;
        }

        .art-footer {
          position: relative;
          z-index: 10;
          padding: 40px 48px 36px;
          border-top: 1px solid #ffffff06;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 48px;
        }

        .footer-name {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: 14px;
          color: #2a2a3a;
          letter-spacing: 0.05em;
        }

        .footer-back {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #2a2a3a;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-back:hover { color: #7070a0; }

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4,4,10,0.97);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.25s ease;
        }

        .lightbox-content {
          position: relative;
          max-width: 92vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .lightbox-img-wrap {
          max-height: 76vh;
          max-width: 88vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img-wrap img {
          max-height: 76vh;
          max-width: 88vw;
          object-fit: contain;
          display: block;
        }

        .lightbox-meta { display: flex; gap: 20px; align-items: center; }

        .lightbox-title {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: 22px;
          color: #e0e0ec;
          letter-spacing: 0.02em;
        }

        .lightbox-loc {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #888899;
        }

        .lightbox-close {
          position: fixed;
          top: 24px; right: 32px;
          background: none; border: none;
          color: #888899;
          cursor: pointer;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-family: 'Didact Gothic', sans-serif;
          transition: color 0.3s ease;
          z-index: 1001;
        }
        .lightbox-close:hover { color: #c8c8d4; }

        .lightbox-arrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer;
          color: #505070;
          transition: color 0.3s ease;
          padding: 16px;
          z-index: 1001;
        }
        .lightbox-arrow:hover { color: #8080a0; }
        .lightbox-arrow.prev { left: 16px; }
        .lightbox-arrow.next { right: 16px; }

        .lightbox-counter {
          position: fixed;
          bottom: 24px; left: 50%;
          transform: translateX(-50%);
          font-size: 10px;
          letter-spacing: 0.3em;
          color: #505070;
        }

        @media (max-width: 900px) {
          .art-grid { columns: 2; padding: 0 24px; }
          .art-header, .art-nav, .section-header, .section-rule, .art-footer { padding-left: 24px; padding-right: 24px; }
        }
        @media (max-width: 560px) { .art-grid { columns: 1; } }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className="art-root" onContextMenu={(e) => e.preventDefault()}>
        <header className="art-header">
          <div className="art-name">Tren Walker</div>
          <div className="art-subtitle">
            {activeCollection === "All" ? "Photography" : activeCollection}
          </div>
        </header>

        <nav className="art-nav">
  {COLLECTIONS.map((c) => (
    <button
      key={c}
      className={`filter-btn${activeCollection === c ? " active" : ""}`}
      onClick={() => setActiveCollection(c)}
    >
      {c}
    </button>
  ))}
  <div className="art-nav-rule" />
</nav>

        {activeCollection === "All" ? (
          <>
            {renderPhotoGrid(photos.filter((p) => p.collection !== "Portraits" && p.collection !== "Peru" && p.collection !== "Ecuador"))}
            {renderTravelView()}
          </>
        ) : isTravel
          ? renderTravelView()
          : renderPhotoGrid(filtered)
        }

        <footer className="art-footer">
          <span className="footer-name">Tren Walker</span>
          <a href="/" className="footer-back">trenwalker.com &rarr;</a>
        </footer>

        {lightbox && (
          <div
            className="lightbox-overlay"
            onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>Close</button>
            <button className="lightbox-arrow prev" onClick={() => navigateLightbox(-1)} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="lightbox-content">
              <div className="lightbox-img-wrap">
                {lightbox.src && !imgErrors[lightbox.id] ? (
                  <img key={lightbox.id} src={lightbox.src} alt={lightbox.title} onError={() => handleImgError(lightbox.id)} />
                ) : (
                  <div style={{ width: "400px", height: "300px" }}>
                    <PlaceholderImage title={lightbox.title} />
                  </div>
                )}
              </div>
              <div className="lightbox-meta">
                <span className="lightbox-title">{lightbox.title}</span>
                <span className="lightbox-loc">{lightbox.collection} &middot; {lightbox.location}</span>
              </div>
            </div>
            <button className="lightbox-arrow next" onClick={() => navigateLightbox(1)} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <div className="lightbox-counter">
              {filtered.findIndex((p) => p.id === lightbox.id) + 1} / {filtered.length}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
