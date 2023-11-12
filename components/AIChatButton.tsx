import { useState } from "react";
import AIChatBox from "./AIChatBox";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";

const AIChatButton = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setChatBoxOpen(true)}
        className="gap-2"
      >
        <Bot size={20} />
        AIChat
      </Button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
};
export default AIChatButton;
