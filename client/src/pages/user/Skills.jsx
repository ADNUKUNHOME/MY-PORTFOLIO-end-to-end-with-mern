import { Button } from "@/components/ui/button";

const Skills = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* HTML Button (Top-Left) */}
      <Button className="absolute top-10 left-10 z-10">HTML</Button>

      {/* CSS Button (Centered) */}
      <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">CSS</Button>

      {/* Dashed Twisted Line (SVG) */}
      <svg className="absolute top-0 left-0 w-full h-full z-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 60 60 Q 150 200 300 300"
          stroke="#4B5563"
          strokeWidth="3"
          strokeDasharray="10 10"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Skills;