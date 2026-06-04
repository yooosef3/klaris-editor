"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  const auth = useConvexAuth();

  console.log("auth", auth);
  return (
    <div>
      <Button
        onClick={() =>
          createProject({
            name: "ali",
          })
        }
      >
        add new
      </Button>
      {projects?.map((project) => (
        <div className="border border-gray-300 p-4 m-2" key={project._id}>
          <h2>{project.name}</h2>
          <p>ownerid: {project.ownerId}</p>
        </div>
      ))}
    </div>
  );
}
