import { IconCircleDashed } from "@tabler/icons-react";
import { Slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";

export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_2s_ease-in-out_1_2s] items-center justify-center px-20 pb-20 pt-8">
      <IconCloud iconSlugs={Slugs} />
      <IconCircleDashed
        className="absolute -z-10 animate-spin"
        size={120}
        color="#4cbbd4"
        stroke={1.25}
        style={{
          animation: 'spin 6s linear infinite',
          transformOrigin: 'center',
        }}
      />
      <div
        className="absolute text-6xl -z-10 font-semibold"
        style={{ color: 'rgb(76, 187, 212)' }}
      >
        S
      </div>
    </div>
  );
}
