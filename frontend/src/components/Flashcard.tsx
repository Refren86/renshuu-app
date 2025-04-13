import { cn } from "@/lib/utils";
import { TFlashcard } from "@/types";

type FlashcardProps = {
  flashcard: TFlashcard;
  isAnimating: boolean;
  onCopy: (word: string) => Promise<void>;
};

export const Flashcard = ({ flashcard, isAnimating, onCopy }: FlashcardProps) => {
  const { kanji, reading, meaning, imageUrl } = flashcard;

  return (
    <button
      onClick={() => onCopy(kanji || reading)}
      className={cn("group cursor-pointer h-96 w-96 [perspective:1000px]", {
        "pointer-events-none": isAnimating,
      })}
    >
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full flex justify-center items-center rounded-xl bg-primary [backface-visibility:hidden]">
          <p className="md:my-6 text-4xl">{kanji || reading}</p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-primary/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            {imageUrl && <img className="mb-4" src={imageUrl} alt={meaning} width={200} height={200} />}
            <h2 className="text-2xl font-bold mb-4">{reading}</h2>
            <p className="text-xl text-pretty text-center mb-4">{meaning}</p>
          </div>
        </div>
      </div>
    </button>
  );
};
