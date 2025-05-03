"use client";

import { acquireTemplate } from "@/lib/template";
import { Template } from "@/types/template";
import { Button } from "./ui/button";
import { startTransition, useActionState } from "react";

export default function TemplateActions({ template }: { template: Template }) {
  return template.owned ? <OwnedTemplateActions template={template} /> : <UnownedTemplateActions template={template} />;
}

function OwnedTemplateActions({}: { template: Template }) {
  return <Button className="flex-1">Use</Button>;
}

function UnownedTemplateActions({ template }: { template: Template }) {
    const [, acquire, acquirePending] = useActionState(async () => acquireTemplate(template.id), null);

  const isFree = template.price === 0;

  return (
    <>
      <Button variant="outline" className="flex-1">
        Preview
      </Button>
      <Button className="flex-1"
        disabled={acquirePending}
        onClick={() => startTransition(acquire)}
      >{isFree ? "Get" : "Buy"}</Button>
    </>
  );
}
