import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Server, Database, Atom, Leaf, Paintbrush2, TerminalSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const icons = {
  "Node.JS": <Server className="w-5 h-5" />,
  "Express": <Database className="w-5 h-5" />,
  "MongoDB": <Leaf className="w-5 h-5" />,
  "ReactJS": <Atom className="w-5 h-5" />,
  "Tailwind CSS": <Paintbrush2 className="w-5 h-5" />,
  "Next.js": <TerminalSquare className="w-5 h-5" />,
};

export default function AdminSkillsPanel() {
  const [skills, setSkills] = useState([]);
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    level: "Expert",
    bgColor: "bg-gray-500",
    textColor: "text-white",
    projects: "/user/projects",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddSkill = () => {
    if (!form.name) {
      toast({ title: "Skill name is required" });
      return;
    }

    const existing = skills.find(s => s.name === form.name);
    if (existing) {
      // Update
      const updated = skills.map(s => s.name === form.name ? { ...s, ...form } : s);
      setSkills(updated);
      toast({ title: "Skill updated" });
    } else {
      // Add new
      const newSkill = {
        ...form,
        icon: icons[form.name] || <Server className="w-5 h-5" />, // default icon
      };
      setSkills([...skills, newSkill]);
      toast({ title: "Skill added" });
    }

    // Reset form
    setForm({
      name: "",
      level: "Expert",
      bgColor: "bg-gray-500",
      textColor: "text-white",
      projects: "/user/projects",
    });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Admin Skill Panel</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input placeholder="Skill Name" name="name" value={form.name} onChange={handleChange} />
        <Input placeholder="Level (e.g., Expert)" name="level" value={form.level} onChange={handleChange} />
        <Input placeholder="Tailwind Color (e.g., bg-red-500)" name="bgColor" value={form.bgColor} onChange={handleChange} />
        <Input placeholder="Text Color (e.g., text-white)" name="textColor" value={form.textColor} onChange={handleChange} />
        <Input placeholder="Project URL" name="projects" value={form.projects} onChange={handleChange} />
      </div>

      <Button onClick={handleAddSkill}>Save Skill</Button>

      <div className="pt-8">
        <h3 className="text-lg font-semibold mb-4">All Skills</h3>
        {skills.length === 0 && <p className="text-gray-500">No skills added yet.</p>}
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className={`flex items-center gap-4 p-4 rounded-xl shadow ${skill.bgColor} ${skill.textColor}`}>
              <span>{skill.icon}</span>
              <div>
                <p className="font-bold">{skill.name}</p>
                <p className="text-sm">Level: {skill.level}</p>
                <a href={skill.projects} className="text-sm underline" target="_blank" rel="noreferrer">Projects</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
