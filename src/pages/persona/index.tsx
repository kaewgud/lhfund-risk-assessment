import React from "react";
import Personacard from "~/components/Personacard";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Persona() {
  const router = useRouter();
  console.log(router.query);

  const score = parseInt(router.query.score as string);
  return (
    <div className="flex justify-center mt-6 mb-6">
      <Personacard score={score} />
    </div>
  );
}
