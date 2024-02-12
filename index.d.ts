declare global {
  interface Window {
    webkit?: Webkit;
  }
}

type TEventTypes = "SIGN_OUT" | "SIGN_UP";
type PostMessageFunction = ({ event, message }: { event: TEventTypes; message: string }) => void;

export interface Webkit {
  messageHandlers: {
    signOutChannel: {
      postMessage: PostMessageFunction;
    };
    signUpChannel: {
      postMessage: PostMessageFunction;
    };
  };
}
