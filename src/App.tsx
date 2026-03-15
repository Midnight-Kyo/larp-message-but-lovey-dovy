import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';

// Experience states
type ExperienceState = 'idle' | 'seal-cracking' | 'opening' | 'revealing' | 'reading';

const LETTER_TEXT = `I’ve been thinking a lot about everything that happened between us, and I wanted to come back to you properly now that I’ve had time to sit with it all and understand it better. I don’t want to leave things half-healed or vaguely understood between us, because you mean too much to me for me to let something like this just sit there and slowly turn into distance.

First of all, I want to say clearly that I’m sorry for the way my frustration came across to you. Even if my intentions were not bad, I can see that my tone, my wording, and the way I pushed at certain moments made you feel like I was angry at you, disappointed in you, or like I was treating you more harshly than lovingly. I never wanted you to feel that way, especially not when you were already nervous about telling me something important.

I understand now much more clearly that when you brought me that news, you were already carrying fear before you even told me. You had already spent time worrying that I’d be disappointed, worrying that I wouldn’t receive it well, worrying that maybe I would see you differently because of it. So by the time the conversation even started, your heart was already in a very delicate place. And because of that, the way I responded mattered even more than usual. I can see that now.

At the same time, I want to explain my side properly too, not to defend myself in a cold way, but because I want you to understand what was happening in my head and heart. When I first got the news, I was in a bad moment to receive something that important. The call quality was bad, I barely had time, I could not hear you properly, and everything felt rushed and fragmented. So instead of receiving your news in a calm, clear, present way, I received it in pieces, while busy, while frustrated with the communication itself, and while trying to make sense of something that I knew was very significant. That already put me in a bad position to respond well.
I want to add this sections thing that we had in mind because it does look like a very big blob of text. I don't know, is there a better way of representing the text within the letter?
Then once I started understanding it more, my brain immediately went into long-term mode. That is just how I am. When it comes to your future, I don’t think about things in a shallow or short-term way. I don’t just hear “okay, here is the next step” and leave it there. My mind starts going years ahead. I start thinking about the whole path, the risks, the benefits, the long-term consequences, how it works in the UAE, how it would affect your independence, your comfort, your opportunities, your confidence, and even our future together. I know that might sometimes feel intense, but it comes from how deeply I care, not from me wanting to control you or make you feel small.

What hurt me most in all of this was not the idea that you were taking a different path. It also wasn’t that I suddenly stopped believing in you. It was the feeling that all the effort I had put into thinking ahead for you, researching, caring about how your future would actually work in real life, especially here in the UAE, felt like it didn’t really matter. When I heard words that sounded like “my mind is made up already” and that it was just up to me to figure out how I feel about the news, I won’t lie, that stung me. It made me feel like all the thought and concern I had invested into your future had been pushed to the side, like I was being told to simply accept it and keep quiet.

And that feeling hurt because my concern was never casual. I have genuinely thought about your future in serious ways. I have thought about what kind of qualifications will actually help you here, what kind of career path will allow you to feel stable, welcomed, capable, and independent when you come here. I don’t want you to one day feel like you gave years of your life to something that leaves you trapped, limited, or dependent in a way that hurts you emotionally. I don’t want us to build a future where you quietly suffer because your work, your qualifications, or your place in the country do not let you breathe properly. So when I think hard about these things, it’s because I love you enough to care about the practical side of your life too, not just the romantic side.

But even with all that being true, I can also now see something important: the moment you told me the news was not the right moment for me to lead with analysis. You were not coming to me as a project to evaluate. You were coming to me as the woman I love, carrying something heavy, already scared, already emotional, and probably just wanting to feel safe with me first. And I understand now that even though my thoughts came from love, the form they came out in did not feel loving enough to you in that moment. I should have made you feel held first, and analytical second.

Another thing I’ve been thinking about is how differently we seem to handle tension and conflict. When something feels wrong between us, my instinct is to move toward it. I want to talk, understand, untangle, fix, clarify, and make sure nothing bad is left to sit there and grow. I would rather be uncomfortable for longer if it means we actually resolve something properly. I don’t like bad things being covered over, forgotten, or left vague. To me, unresolved things compound. They stay in the walls. They show up again later. So when I push, it is usually because I want closeness, clarity, and healing.

But I also understand much better now that your instinct is very different. When things start feeling tense, or when you feel anger coming at you, you shut down, pull back, or try to soften everything because arguing feels dangerous and painful to you. The more you feel pushed, the more you retreat. The more I feel you retreating, the more I push, because to me retreat feels like distance or abandonment of the issue. So we end up trapped in this horrible loop where the more I try to fix, the more overwhelmed you feel, and the more overwhelmed you feel, the more alone and shut out I feel. I can see that much more clearly now, and I don’t want us to keep hurting each other through that pattern.

I also want to say something very directly about one part that stayed with me. When you said that if I’m angry enough I might want to hurt your feelings, that really sat heavy on me. Not because I think I’m flawless, and not because I deny that I can come across harshly when I’m frustrated, but because the idea of intentionally wanting to hurt you is something that genuinely pains me. I never want to be someone you are scared of emotionally. I never want you to look at me and think that if I know more, if I hear more, if you open up more, I will just use it to wound you. That is not the kind of man I want to be to you, and not the kind of love I want us to have.

At the same time, I also understand that you did not say that out of nowhere. You said it because that is how things have felt to you before, or because that is what anger has meant in your life growing up, or because in those moments my frustration really did feel sharp enough that you expected pain instead of understanding. So instead of getting stuck only on how much that hurt me, I also want to take seriously the fact that you felt that way. That matters. Your feelings matter. The way I land on you matters. If the woman I love feels unsafe opening up to me because she expects more pain, then I need to take that seriously and not just argue with it.

I want you to know that when I asked questions, when I wanted to understand, when I pushed for more honesty, it was never because I wanted information for its own sake. It wasn’t me trying to interrogate you or corner you. It was me trying to get closer to what was actually going on between us, because when I feel distance, I panic in my own way too. Mine just doesn’t look like silence. Mine looks like insistence. Mine looks like trying to get to the core of it all right now. But I can see now that when that insistence is not softened enough with reassurance, it can feel like pressure instead of care.

So I want to say this very clearly: I love you. I support you. I am still on your side. None of this changed that. Not the news itself, not the misunderstanding, not the tension after. You are still my person. You are still the woman I think about deeply, plan around deeply, and care for deeply. My care has never been shallow, and it still isn’t.

And I also want you to know that my concern for your future is not me trying to own your life. It is me trying to be a real partner. A real partner does not only say nice things. A real partner also thinks ahead, worries ahead, prepares ahead, and tries to see around corners so the person they love does not walk into avoidable pain. That is where I was coming from. But I can still admit that I need to learn the timing of that better. I need to know when you need comfort first and strategy later. I need to know when you need me to hold you before I start building a roadmap in my head.

I don’t want us to be in a relationship where you feel like you have to hide bad news from me because you’re scared of how I’ll react. And I also don’t want to be in a relationship where I feel like my effort, my planning, and my concern do not matter. I want something better than both of those things. I want a version of us where you can come to me honestly, and I can care honestly, and even if we receive or process things differently, we still feel like we are on the same side.

That is what I want to protect here: the feeling that it’s you and me together, not you on one side and me on the other, not one of us bringing pain and the other bringing defense, but both of us trying to understand each other properly.

So if I made you feel judged, I’m sorry. If I made you feel unsupported in a moment when you needed warmth first, I’m sorry. If I made you feel pressured when you were already overwhelmed, I’m sorry. And if my frustration made you feel like I was more upset than concerned, then I understand why that hurt.

And on my side, I hope you can also understand that my frustration was never born from not caring. It came from caring so much that I struggled to stay soft while trying to process everything at once. It came from feeling like important things were happening in a rushed, unclear way. It came from feeling like something huge was being placed in front of me and I was expected to absorb it instantly while not being in the right state to do that. It came from love that was clumsy in that moment, not love that was absent.

I do not want us to continue carrying this like a bruise. I want us to clear the air properly, hold each other properly, and come out of this understanding each other better than before. I want to learn how to approach you in a way that doesn’t make you shut down. And I want you to learn that my questions, my seriousness, and my future-thinking are not signs that I love you less, but signs that I take you and us very seriously.

I’m here. I’m not going anywhere. I love you very much. And I want us back in that soft, safe, loving place with each other, not by pretending this never happened, but by understanding it well enough that it doesn’t keep hurting us again later.

If you want, we can talk about it gently and slowly. And if you need softness more than structure right now, I can do that too. I just don’t want there to be distance between us where there should be love and understanding.

I love you, baby.`;

const LETTER_PARAGRAPHS = LETTER_TEXT
  .split('\n\n')
  .map((paragraph) => paragraph.replace(/\n/g, ' ').trim())
  .map((paragraph) =>
    paragraph.replace(
      /I want to add this sections thing that we had in mind because it does look like a very big blob of text\.\s*I don't know, is there a better way of representing the text within the letter\?/g,
      ''
    ).trim()
  )
  .filter(Boolean);

const SECTION_ORDER = ['opening', 'apology', 'longTerm', 'hurt', 'reconnection'] as const;
type SectionId = (typeof SECTION_ORDER)[number];

function App() {
  const [experienceState, setExperienceState] = useState<ExperienceState>('idle');
  const [showLetter, setShowLetter] = useState(false);
  const [envelopeExiting, setEnvelopeExiting] = useState(false);
  const [sealCracked, setSealCracked] = useState(false);
  const [sealRemoved, setSealRemoved] = useState(false);
  const [signatureInView, setSignatureInView] = useState(false);
  const [visibleSections, setVisibleSections] = useState<SectionId[]>([]);

  const waxCrackAudioRef = useRef<HTMLAudioElement | null>(null);
  const envelopeOpenAudioRef = useRef<HTMLAudioElement | null>(null);
  const readingRustleAudioRef = useRef<HTMLAudioElement | null>(null);
  const readingFadeIntervalRef = useRef<number | null>(null);
  const sequenceTimeoutsRef = useRef<number[]>([]);
  const signatureSectionRef = useRef<HTMLDivElement | null>(null);
  const readingSectionRefs = useRef<Partial<Record<SectionId, HTMLElement | null>>>({});

  const schedule = useCallback((fn: () => void, delayMs: number) => {
    const timeout = window.setTimeout(() => {
      fn();
      sequenceTimeoutsRef.current = sequenceTimeoutsRef.current.filter((id) => id !== timeout);
    }, delayMs);
    sequenceTimeoutsRef.current.push(timeout);
  }, []);

  useEffect(() => {
    waxCrackAudioRef.current = new Audio('/audio/wax-opening.mp3');
    envelopeOpenAudioRef.current = new Audio('/audio/envelope-flap-open.wav');
    readingRustleAudioRef.current = new Audio('/audio/paper-rustle-reading.wav');

    if (waxCrackAudioRef.current) {
      waxCrackAudioRef.current.preload = 'auto';
      waxCrackAudioRef.current.volume = 0.42;
    }
    if (envelopeOpenAudioRef.current) {
      envelopeOpenAudioRef.current.preload = 'auto';
      envelopeOpenAudioRef.current.volume = 0.28;
    }
    if (readingRustleAudioRef.current) {
      readingRustleAudioRef.current.preload = 'auto';
      readingRustleAudioRef.current.volume = 0;
      readingRustleAudioRef.current.loop = true;
    }

    return () => {
      if (readingFadeIntervalRef.current !== null) {
        window.clearInterval(readingFadeIntervalRef.current);
      }
      sequenceTimeoutsRef.current.forEach((id) => window.clearTimeout(id));
      sequenceTimeoutsRef.current = [];

      [waxCrackAudioRef.current, envelopeOpenAudioRef.current, readingRustleAudioRef.current].forEach(
        (audio) => {
          if (!audio) return;
          audio.pause();
          audio.currentTime = 0;
        }
      );
    };
  }, []);

  // Handle seal click/tap
  const handleSealInteraction = useCallback(() => {
    if (experienceState !== 'idle') return;

    setExperienceState('seal-cracking');
    setVisibleSections([]);
    setSignatureInView(false);
    waxCrackAudioRef.current?.play().catch(() => {
      // Ignore browsers blocking playback before a gesture.
    });

    // Crack appears quickly, wax peels off shortly after.
    schedule(() => {
      setSealCracked(true);
    }, 70);
    schedule(() => {
      setSealRemoved(true);
    }, 560);

    // After crack delay, open the envelope flap and start paper opening sound.
    schedule(() => {
      setExperienceState('opening');

      schedule(() => {
        envelopeOpenAudioRef.current?.play().catch(() => {
          // Ignore playback interruptions.
        });
      }, 70);

      // After flap opens, reveal letter
      schedule(() => {
        setExperienceState('revealing');
        setShowLetter(true);

        // Envelope exits
        schedule(() => {
          setEnvelopeExiting(true);

          // Final reading state
          schedule(() => {
            setExperienceState('reading');
          }, 620);
        }, 820);
      }, 680);
    }, 420);
  }, [experienceState, schedule]);

  useEffect(() => {
    if (experienceState !== 'reading') return;

    const rustle = readingRustleAudioRef.current;
    if (!rustle) return;

    rustle.currentTime = 0;
    rustle.volume = 0;
    rustle.play().catch(() => {
      // Playback is user-gesture gated and should work after click.
    });

    if (readingFadeIntervalRef.current !== null) {
      window.clearInterval(readingFadeIntervalRef.current);
    }

    readingFadeIntervalRef.current = window.setInterval(() => {
      const nextVolume = Math.min(0.14, rustle.volume + 0.008);
      rustle.volume = nextVolume;
      if (nextVolume >= 0.14 && readingFadeIntervalRef.current !== null) {
        window.clearInterval(readingFadeIntervalRef.current);
        readingFadeIntervalRef.current = null;
      }
    }, 160);

    return () => {
      if (readingFadeIntervalRef.current !== null) {
        window.clearInterval(readingFadeIntervalRef.current);
        readingFadeIntervalRef.current = null;
      }
    };
  }, [experienceState]);

  useEffect(() => {
    if (experienceState !== 'reading') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('data-section-id') as SectionId | null;
          if (!id) return;
          setVisibleSections((prev) => (prev.includes(id) ? prev : [...prev, id]));
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    SECTION_ORDER.forEach((id) => {
      const node = readingSectionRefs.current[id];
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [experienceState]);

  useEffect(() => {
    if (experienceState !== 'reading' || !signatureSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSignatureInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(signatureSectionRef.current);
    return () => observer.disconnect();
  }, [experienceState]);

  // Handle keyboard interaction
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleSealInteraction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSealInteraction]);

  const isIdle = experienceState === 'idle';
  const isCracking = experienceState === 'seal-cracking';
  const isOpening = experienceState === 'opening' || experienceState === 'revealing';
  const isReading = experienceState === 'reading';
  const previewParagraphs = LETTER_PARAGRAPHS.slice(0, 3);
  const readingSections = ([
    {
      id: 'opening' as SectionId,
      tagline: 'Why I am writing',
      paragraphs: LETTER_PARAGRAPHS.slice(0, 1)
    },
    {
      id: 'apology' as SectionId,
      tagline: 'What I regret',
      paragraphs: LETTER_PARAGRAPHS.slice(1, 4)
    },
    {
      id: 'longTerm' as SectionId,
      tagline: 'What I was trying to protect',
      paragraphs: LETTER_PARAGRAPHS.slice(4, 7)
    },
    {
      id: 'hurt' as SectionId,
      tagline: 'What hurt and what I learned',
      paragraphs: LETTER_PARAGRAPHS.slice(7, 14)
    },
    {
      id: 'reconnection' as SectionId,
      tagline: 'Where I hope we go next',
      paragraphs: LETTER_PARAGRAPHS.slice(14)
    }
  ]).filter((section) => section.paragraphs.length > 0);
  const firstParagraph = readingSections[0]?.paragraphs[0] ?? '';
  const firstParagraphCap = firstParagraph.charAt(0);
  const firstParagraphRest = firstParagraph.slice(1).trimStart();
  const hasSection = (id: SectionId) => visibleSections.includes(id);
  const [leadPreviewParagraph, ...remainingPreviewParagraphs] = previewParagraphs;
  const leadCap = leadPreviewParagraph ? leadPreviewParagraph.charAt(0) : '';
  const leadRest = leadPreviewParagraph ? leadPreviewParagraph.slice(1).trimStart() : '';

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f5f2ed] via-[#ebe6de] to-[#e5dfd5] overflow-hidden">
      {/* Subtle background texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='bgNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23bgNoise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Main Scene */}
      <div className="envelope-scene relative w-full h-screen flex items-center justify-center">
        
        {/* Envelope Wrapper */}
        <div 
          className={`envelope-wrapper ${isIdle ? 'idle' : ''} ${envelopeExiting ? 'exit' : ''}`}
          style={{
            opacity: isReading ? 0 : 1,
            pointerEvents: isReading ? 'none' : 'auto',
            transition: 'opacity 0.6s ease',
          }}
        >
          {/* 3D Envelope Container */}
          <div className="envelope-container">
            
            {/* Envelope Body */}
            <div className="envelope-body">
              {/* Edge thickness effects */}
              <div className="envelope-edge envelope-edge-top" />
              <div className="envelope-edge envelope-edge-bottom" />
              
              {/* Side flaps (visible when main flap opens) */}
              <div 
                className="envelope-side-flap-left"
                style={{
                  opacity: isOpening ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
              />
              <div 
                className="envelope-side-flap-right"
                style={{
                  opacity: isOpening ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
              />
              
              {/* Bottom flap */}
              <div 
                className="envelope-bottom-flap"
                style={{
                  opacity: isOpening ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
              />
              
              {/* Letter Paper (inside envelope) */}
              <div 
                className={`letter-paper ${showLetter ? 'visible' : ''}`}
                style={{
                  transform: showLetter 
                    ? 'translate(-50%, -140%) translateZ(20px)' 
                    : 'translate(-50%, -50%) translateZ(-10px)',
                }}
              >
                <div className={`letter-content preview-letter-content ${showLetter ? 'preview-visible' : ''}`}>
                  <div className="preview-letter-heading">
                    <p className="preview-letter-kicker">A personal letter</p>
                    <h3 className="preview-letter-title">Aurora</h3>
                  </div>

                  {leadPreviewParagraph && (
                    <p className="letter-body preview-paragraph preview-paragraph-lead">
                      <span className="drop-cap-preview">{leadCap}</span>
                      {leadRest}
                    </p>
                  )}
                  {remainingPreviewParagraphs.map((paragraph, index) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="letter-body preview-paragraph"
                      style={{ animationDelay: `${0.26 + index * 0.18}s` }}
                    >
                      {paragraph}
                    </p>
                  ))}

                  <p className="letter-closing preview-closing">With all my affection,</p>
                </div>
              </div>
              
              {/* Envelope Flap */}
              <div 
                className={`envelope-flap ${isOpening ? 'open' : ''}`}
                style={{
                  transformOrigin: 'top center',
                }}
              >
                <div className="envelope-flap-inner" />
                <div className="envelope-flap-shadow" />
              </div>
              
              {/* Wax Seal */}
              {!sealRemoved && (
                <div 
                  className={`wax-seal ${isCracking ? 'cracking' : ''} ${sealCracked ? 'cracked' : ''}`}
                  onClick={isIdle ? handleSealInteraction : undefined}
                  onTouchStart={isIdle ? handleSealInteraction : undefined}
                  role="button"
                  tabIndex={0}
                  aria-label="Break the wax seal to open the letter"
                >
                  <div className="wax-seal-body">
                    <div className="seal-shine" />
                    <div className="seal-impression" />
                  </div>
                  
                  {/* Crack lines SVG */}
                  <svg 
                    className="crack-lines" 
                    viewBox="0 0 56 56"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <path
                      d="M28 10 L26 20 L30 25 L24 35 L28 40 L26 48"
                      stroke="rgba(0,0,0,0.4)"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 28 L22 26 L28 28 L36 24"
                      stroke="rgba(0,0,0,0.3)"
                      strokeWidth="0.8"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M42 18 L38 25 L44 30 L40 38"
                      stroke="rgba(0,0,0,0.35)"
                      strokeWidth="0.9"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Hint text */}
            {isIdle && (
              <p className="hint-text">
                Tap the seal to open
              </p>
            )}
          </div>
        </div>
        
        {/* Full-screen Letter (reading phase) */}
        {isReading && (
          <div 
            className="fixed inset-0 reading-scroll-shell flex items-start justify-center overflow-y-auto py-12 px-6"
            style={{
              animation: 'fadeIn 0.8s ease forwards',
            }}
          >
            <div 
              className="relative max-w-3xl w-full"
              style={{
                animation: 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              }}
            >
              {/* Letter content */}
              <article className="letter-content reading-letter-sheet reading-letter-body">
                <p className="letter-salutation letter-salutation-centered text-2xl">Aurora,</p>

                {readingSections.map((section, sectionIndex) => (
                  <section
                    key={section.id}
                    data-section-id={section.id}
                    ref={(node) => {
                      readingSectionRefs.current[section.id] = node;
                    }}
                    className={`reading-section ${hasSection(section.id) ? 'reading-section-visible' : ''}`}
                  >
                    <p className="reading-section-tagline">{section.tagline}</p>
                    {section.paragraphs.map((paragraph, paragraphIndex) => {
                      const isFirstOverall = sectionIndex === 0 && paragraphIndex === 0;
                      return (
                        <p key={paragraph.slice(0, 28)} className="letter-reading-paragraph">
                          {isFirstOverall ? (
                            <>
                              <span className="drop-cap-reading">{firstParagraphCap}</span>
                              {firstParagraphRest}
                            </>
                          ) : (
                            paragraph
                          )}
                        </p>
                      );
                    })}
                    {sectionIndex < readingSections.length - 1 && (
                      <div className="reading-section-divider" aria-hidden="true">
                        <span className="reading-section-divider-line" />
                        <span className="reading-section-divider-dot">•</span>
                        <span className="reading-section-divider-line" />
                      </div>
                    )}
                  </section>
                ))}

                <div
                  ref={signatureSectionRef}
                  className={`signature-section ${signatureInView ? 'signature-ready' : ''}`}
                >
                  <p className="letter-closing text-xl">With all my affection,</p>
                  <p className={`letter-signature text-3xl mt-3 ${signatureInView ? 'signature-reveal' : ''}`}>
                    Wahab Yaseen
                  </p>
                  <span
                    className={`reading-heart-mark ${signatureInView ? 'reading-heart-visible' : ''}`}
                    aria-hidden="true"
                  >
                    ♥
                  </span>
                </div>
              </article>
              
            </div>
          </div>
        )}
      </div>
      
      {/* Global animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
