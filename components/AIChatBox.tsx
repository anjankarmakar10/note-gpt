import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { Bot, Trash, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

interface Props {
  open: boolean;
  onClose: () => void;
}

const AIChatBox = ({ open, onClose }: Props) => {
  const {
    messages,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setMessages,

    error,
  } = useChat();

  // const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <section
      className={cn(
        "bottom-0 right-0 z-10 w-full max-w-md p-1 xl:right-10",
        open ? "fixed flex flex-col" : "hidden",
      )}
    >
      <Button size="icon" variant="outline" className="mb-1 ms-auto">
        <XCircle onClick={onClose} size={30} />
      </Button>

      <div className="flex h-[500px] flex-col rounded border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3">
          <ChatMessage
            message={{ role: "assistant", content: "How may i help you sir?" }}
          />
          <ChatMessage
            message={{ role: "user", content: "What is my wifi password?" }}
          />
          <ChatMessage
            message={{
              role: "assistant",
              content: "Your Wifi password is `Wi787898fi` ",
            }}
          />

          {isLoading && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Something went wrong. Please try again.",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex h-full items-center justify-center gap-3">
              <Bot />
              Ask the AI a question about your notes
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <Button
            title="Clear chat"
            variant="outline"
            size="icon"
            className="shrink-0"
            type="button"
          >
            <Trash />
          </Button>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
          />
          <Button onClick={() => isLoading} type="button">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

function ChatMessage({
  message: { role, content },
}: {
  message: Pick<Message, "role" | "content">;
}) {
  const { user } = useUser();

  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <Bot className="mr-2 shrink-0" />}
      <p
        className={cn(
          "whitespace-pre-line rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-primary text-primary-foreground",
        )}
      >
        {content}
      </p>
      {!isAiMessage && user?.imageUrl && (
        <Image
          src={user.imageUrl}
          alt="User image"
          width={100}
          height={100}
          className="ml-2 h-10 w-10 rounded-full object-cover"
        />
      )}
    </div>
  );
}

export default AIChatBox;
