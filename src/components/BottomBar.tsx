const BottomBar = () => {
  return (
    <div className="bg-brand-dark pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] text-center absolute bottom-0 w-full">
      <p className="font-serif text-brand-gold text-xs sm:text-sm flex items-center justify-center gap-3">
        <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
        Creating Memories That Last Forever
        <span className="w-1.5 h-1.5 bg-brand-gold rotate-45"></span>
      </p>
    </div>
  );
};

export default BottomBar;
