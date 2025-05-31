import React, { useState } from 'react';
import { VoiceButton } from '@/components/VoiceButton';
import { VibeButton } from '@/components/VibeButton';
import { ActionButton } from '@/components/ActionButton';

const Index = () => {
  const [selectedVoice, setSelectedVoice] = useState('Coral');
  const [selectedVibe, setSelectedVibe] = useState('Calm');
  const [vibeText, setVibeText] = useState(`Voice Affect: Calm, composed, and reassuring; project quiet authority and confidence.

Tone: Sincere, empathetic, and gently authoritative—express genuine apology while conveying competence.

Pacing: Steady and moderate; unhurried enough to communicate care, yet efficient enough to demonstrate professionalism.

Emotion: Genuine empathy and understanding; speak with warmth, especially during apologies ("I'm very sorry for any disruption...").

Pronunciation: Clear and precise, emphasizing key reassurances ("smoothly," "quickly," "promptly") to reinforce confidence.

Pauses: Brief pauses after offering assistance or requesting details, highlighting willingness to listen and support.`);
  
  const [scriptText, setScriptText] = useState(`Thank you for contacting us. I completely understand your frustration with the canceled flight, and I'm here to help you get rebooked quickly.

I just need a few details from your original reservation, like your booking confirmation number or passenger info. Once I have those, I'll find the next available flight and make sure you reach your destination smoothly.`);

  const voices = [
    { name: 'Alloy', hasStar: false },
    { name: 'Ash', hasStar: true },
    { name: 'Ballad', hasStar: true },
    { name: 'Coral', hasStar: true },
    { name: 'Echo', hasStar: false },
    { name: 'Fable', hasStar: false },
    { name: 'Onyx', hasStar: false },
    { name: 'Nova', hasStar: false },
    { name: 'Sage', hasStar: true },
    { name: 'Shimmer', hasStar: false },
    { name: 'Verse', hasStar: true }
  ];

  const vibes = [
    'Calm',
    'Dramatic', 
    'Cowboy',
    'Mad Scientist',
    'Cheerleader'
  ];

  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      <div className="flex flex-col gap-x-3 min-h-screen px-5 pt-6 pb-32 md:pb-24">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-gray-900">OpenAI.fm</h1>
            <p className="text-sm text-gray-600">
              An interactive demo for developers to try the new text-to-speech model in the OpenAI API.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3h4a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4m0-2v6m0 0L9 9m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              START BUILDING
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col gap-x-3 w-full max-w-7xl mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-1 flex-col shrink-0 mb-10">
              {/* Voice Section */}
              <div className="flex flex-row justify-between -mb-[1px] relative items-center gap-2">
                <div className="flex uppercase py-1 text-gray-500 text-sm font-medium">Voice</div>
                <div className="flex flex-1 h-[1px] bg-gray-200"></div>
              </div>
              
              <div className="flex flex-1 flex-col pt-3 rounded-md">
                <div className="grid grid-cols-12 gap-3">
                  {voices.map((voice) => (
                    <div key={voice.name} className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1 relative">
                      <VoiceButton
                        name={voice.name}
                        isSelected={selectedVoice === voice.name}
                        hasStar={voice.hasStar}
                        onClick={() => setSelectedVoice(voice.name)}
                      />
                    </div>
                  ))}
                  <div className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1">
                    <VoiceButton
                      name=""
                      isRandom={true}
                      onClick={() => {
                        const randomVoice = voices[Math.floor(Math.random() * voices.length)];
                        setSelectedVoice(randomVoice.name);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            {/* Vibe Section */}
            <div className="flex flex-1 flex-col shrink-0 mb-10">
              <div className="flex flex-row justify-between -mb-[1px] relative items-center gap-2">
                <div className="flex uppercase py-1 text-gray-500 text-sm font-medium">Vibe</div>
                <div className="flex flex-1 h-[1px] bg-gray-200"></div>
              </div>
              
              <div className="flex flex-1 flex-col pt-3 rounded-md">
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {vibes.map((vibe) => (
                      <VibeButton
                        key={vibe}
                        name={vibe}
                        isSelected={selectedVibe === vibe}
                        onClick={() => setSelectedVibe(vibe)}
                      />
                    ))}
                    <VibeButton
                      name=""
                      isRefresh={true}
                      onClick={() => {
                        // Generate new vibes logic here
                        console.log('Generate new vibes');
                      }}
                    />
                  </div>
                  
                  <textarea
                    value={vibeText}
                    onChange={(e) => setVibeText(e.target.value)}
                    rows={8}
                    maxLength={999}
                    className="w-full resize-none outline-none focus:outline-none bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-[16px] md:text-[14px] focus:border-orange-500 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Script Section */}
            <div className="flex flex-1 flex-col shrink-0 mb-10">
              <div className="flex flex-row justify-between -mb-[1px] relative items-center gap-2">
                <div className="flex uppercase py-1 text-gray-500 text-sm font-medium">Script</div>
                <div className="flex flex-1 h-[1px] bg-gray-200"></div>
              </div>
              
              <div className="flex flex-1 flex-col pt-3 rounded-md">
                <div className="relative flex flex-col h-full w-full">
                  <textarea
                    value={scriptText}
                    onChange={(e) => setScriptText(e.target.value)}
                    rows={8}
                    maxLength={999}
                    className="w-full h-full min-h-[220px] resize-none outline-none focus:outline-none bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-[16px] md:text-[14px] focus:border-orange-500 transition-colors"
                  />
                  <span className="absolute bottom-3 right-4 z-10 opacity-30 hidden sm:block text-sm">
                    {scriptText.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <ActionButton variant="download" onClick={() => console.log('Download')}>
              DOWNLOAD
            </ActionButton>
            <ActionButton variant="share" onClick={() => console.log('Share')}>
              SHARE
            </ActionButton>
            <ActionButton variant="play" onClick={() => console.log('Play')}>
              PLAY
            </ActionButton>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;