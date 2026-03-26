import { Button } from "@radix-ui/react-primitive";
import { getLoginUrl } from "@/const";
import { MessageCircle } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-primary/10 rounded-2xl">
            <MessageCircle className="w-12 h-12 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-2">ChatGPT Clone</h1>
        <p className="text-muted-foreground mb-8">
          Powered by Manus AI. Sign in to start chatting.
        </p>

        <a
          href={getLoginUrl()}
          className="inline-block w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Sign In with Manus
        </a>

        <p className="text-sm text-muted-foreground mt-6">
          Your conversations are private and secure.
        </p>
      </div>
    </div>
  );
}
