import React, { useState, useRef } from 'react';
import { PLAYGROUND_SHAPES } from '../data/projects';
import { PlaygroundShapeItem } from '../types';
import { RefreshCw, Move, Palette, Zap, PenTool, Layers, Grid, Sliders, Box } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ShapePlayground: React.FC = () => {
  const [shapes, setShapes] = useState<PlaygroundShapeItem[]>(PLAYGROUND_SHAPES);
  const [activeShape, setActiveShape] = useState<string | null>(null);
  const [physicsMode, setPhysicsMode] = useState<'orbit' | 'bounce' | 'magnet'>('orbit');
  const [selectedPalette, setSelectedPalette] = useState<string>('#0EA5E9');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragShapeIdRef = useRef<string | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const shape = shapes.find((s) => s.id === id);
    if (!shape) return;

    isDraggingRef.current = true;
    dragShapeIdRef.current = id;
    setActiveShape(id);

    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

    dragOffsetRef.current = {
      x: mouseX - shape.initialPos.x,
      y: mouseY - shape.initialPos.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !dragShapeIdRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

    const newX = Math.min(90, Math.max(5, mouseX - dragOffsetRef.current.x));
    const newY = Math.min(85, Math.max(5, mouseY - dragOffsetRef.current.y));

    setShapes((prev) =>
      prev.map((s) => (s.id === dragShapeIdRef.current ? { ...s, initialPos: { x: newX, y: newY } } : s))
    );
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    dragShapeIdRef.current = null;
  };

  const handleRecolorActiveShape = (color: string) => {
    setSelectedPalette(color);
    if (!activeShape) return;
    setShapes((prev) =>
      prev.map((s) => (s.id === activeShape ? { ...s, color } : s))
    );
  };

  const triggerDesignBurst = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#0EA5E9', '#D97706', '#0D9488', '#7C3AED', '#EC4899'],
    });
  };

  const resetShapes = () => {
    setShapes(PLAYGROUND_SHAPES);
  };

  return (
    <section id="playground" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#5E5963] dark:text-slate-300 font-sans block mb-2">
            Interactive Visual Architecture
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-[#16141A] dark:text-white tracking-[-0.04em] leading-[0.92]">
            Design Motifs <span className="italic font-serif font-normal text-[#E8502F]">Lab</span>
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-[#5E5963] dark:text-slate-200 leading-[1.7] font-medium">
          Drag and manipulate tactile 3D design motifs — Pen Tool Nib, Pantone Color Swatches, Layer Stacks, Bezier Nodes, Typography Grids, and Volumetric Mesh.
        </p>
      </div>

      {/* Controls Toolbar */}
      <div className="mb-6 p-4 rounded-2xl glass-card border border-[#DCCFE8] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        {/* Color / Spectrum Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#16141A] dark:text-slate-200 flex items-center gap-1">
            <Palette className="w-3.5 h-3.5 text-[#E8502F]" />
            <span className="text-[#E8502F]">Brand Hue:</span>
          </span>
          <div className="flex items-center gap-1.5">
            {['#E8502F', '#16141A', '#D97706', '#0D9488', '#7C3AED', '#EC4899'].map((hex) => (
              <button
                key={hex}
                onClick={() => handleRecolorActiveShape(hex)}
                className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                  selectedPalette === hex ? 'scale-125 border-[#E8502F] shadow-md ring-2 ring-[#E8502F]/30' : 'border-white/60 hover:scale-110'
                }`}
                style={{ backgroundColor: hex }}
                title={`Apply color hue ${hex} to active motif`}
              />
            ))}
          </div>
        </div>

        {/* Motion Modes */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#E8502F]">Motion Mode:</span>
          <div className="flex items-center gap-1 bg-[#EAE3EF] dark:bg-slate-800 p-1 rounded-xl">
            {(['orbit', 'bounce', 'magnet'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setPhysicsMode(mode)}
                className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                  physicsMode === mode
                    ? 'bg-[#16141A] text-white dark:bg-white dark:text-slate-950 shadow-xs'
                    : 'text-slate-800 dark:text-slate-300 hover:text-[#16141A] dark:hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={triggerDesignBurst}
            className="px-4 py-2 rounded-xl bg-[#E8502F] hover:bg-[#d03b07] text-white font-heading font-bold text-xs shadow-md shadow-[#E8502F]/30 flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer uppercase tracking-wider"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Scatter Palette</span>
          </button>
          <button
            onClick={resetShapes}
            className="p-2 rounded-xl bg-[#16141A] text-white hover:bg-[#25202E] transition-all cursor-pointer border border-[#16141A] shadow-md"
            title="Reset position matrix"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Drag Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative w-full h-[480px] sm:h-[540px] rounded-3xl bg-slate-950 border border-slate-700 shadow-2xl overflow-hidden cursor-crosshair select-none"
      >
        {/* Design Grid Blueprint Background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Vector Bezier Alignment Circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <div className="w-[280px] h-[280px] rounded-full border border-teal-400" />
          <div className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-teal-400" />
        </div>

        {/* Helper Instructions */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 text-xs text-teal-400 font-bold border border-teal-500/30">
          <Move className="w-3.5 h-3.5 text-teal-400" />
          <span>Click &amp; Drag design motifs across vector coordinate stage</span>
        </div>

        {/* Floating Design Motifs List */}
        {shapes.map((shape) => {
          const isActive = activeShape === shape.id;
          return (
            <div
              key={shape.id}
              onMouseDown={(e) => handleMouseDown(e, shape.id)}
              style={{
                left: `${shape.initialPos.x}%`,
                top: `${shape.initialPos.y}%`,
                perspective: '600px',
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing transition-transform duration-200 ${
                physicsMode === 'orbit' ? 'animate-float' : ''
              } ${physicsMode === 'bounce' ? 'hover:animate-bounce' : ''}`}
            >
              <div
                style={{
                  transform: isActive ? 'rotateX(15deg) rotateY(-15deg) scale(1.12)' : 'rotateX(0deg) rotateY(0deg) scale(1)',
                }}
                className={`relative group p-4 rounded-2xl bg-slate-900/95 text-white border transition-all duration-300 shadow-2xl ${
                  isActive
                    ? 'border-teal-400 ring-2 ring-teal-400/50 shadow-teal-500/20'
                    : 'border-slate-700 hover:border-teal-400/60'
                }`}
              >
                {/* 3D Motif Rendering */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2 relative">
                  {shape.type === 'pen-nib' && (
                    <div
                      className="w-16 h-16 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110 flex items-center justify-center relative overflow-hidden border border-white/20"
                      style={{
                        background: `linear-gradient(135deg, ${shape.color}, #0284c7)`,
                        boxShadow: `0 0 25px ${shape.color}66`,
                      }}
                    >
                      <PenTool className="w-8 h-8 text-white animate-pulse" />
                      <div className="absolute bottom-1 w-3 h-3 rounded-full bg-amber-400 border border-white" />
                    </div>
                  )}

                  {shape.type === 'pantone-swatch' && (
                    <div className="relative flex flex-col items-center justify-center">
                      <div
                        className="w-16 h-18 rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-110 p-1.5 bg-white text-slate-900 flex flex-col justify-between border"
                        style={{
                          borderColor: shape.color,
                          boxShadow: `0 0 20px ${shape.color}66`,
                        }}
                      >
                        <div
                          className="w-full h-10 rounded-md"
                          style={{ backgroundColor: shape.color }}
                        />
                        <span className="text-[9px] font-mono font-bold tracking-tighter">PANTONE</span>
                      </div>
                    </div>
                  )}

                  {shape.type === 'layer-stack' && (
                    <div className="relative flex items-center justify-center">
                      <div
                        className="w-14 h-14 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110 flex items-center justify-center border border-teal-400/50"
                        style={{
                          background: `linear-gradient(135deg, ${shape.color}, #0f766e)`,
                          boxShadow: `0 0 20px ${shape.color}66`,
                        }}
                      >
                        <Layers className="w-8 h-8 text-teal-200" />
                      </div>
                    </div>
                  )}

                  {shape.type === 'bezier-node' && (
                    <div
                      className="w-16 h-16 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110 flex items-center justify-center relative overflow-hidden border border-purple-400/40"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${shape.accentColor}, ${shape.color})`,
                        boxShadow: `0 0 25px ${shape.color}66`,
                      }}
                    >
                      <Sliders className="w-8 h-8 text-purple-100" />
                    </div>
                  )}

                  {shape.type === 'typography-grid' && (
                    <div
                      className="w-16 h-16 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110 flex items-center justify-center relative overflow-hidden border border-pink-400/40"
                      style={{
                        background: `linear-gradient(135deg, ${shape.color}, #be185d)`,
                        boxShadow: `0 0 25px ${shape.color}55`,
                      }}
                    >
                      <Grid className="w-8 h-8 text-pink-100" />
                    </div>
                  )}

                  {shape.type === 'prism-shader' && (
                    <div
                      className="w-16 h-16 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110 flex items-center justify-center relative overflow-hidden border border-blue-400/40"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${shape.accentColor}, ${shape.color}, #1e3a8a)`,
                        boxShadow: `0 0 25px ${shape.color}88`,
                      }}
                    >
                      <Box className="w-8 h-8 text-blue-100" />
                    </div>
                  )}
                </div>

                {/* Motif Metadata Label */}
                <div className="text-center">
                  <div className="font-heading font-black text-xs text-white tracking-wide">
                    {shape.name}
                  </div>
                  <div className="text-[10px] font-mono text-teal-400 font-bold mt-0.5">
                    {shape.diameterKm}
                  </div>
                  <div className="text-[9px] font-sans text-slate-400 line-clamp-1 mt-0.5">
                    {shape.tagline}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
