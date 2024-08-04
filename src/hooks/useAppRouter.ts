import { Url } from "next/dist/shared/lib/router/router";
import useWebView from "./useWebView";
import { useRouter } from "next/router";

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
  unstable_skipClientCache?: boolean;
}

const sendRouterEvent = async (params: Record<string, string | Record<string, unknown>>) => {
  window.webkit?.messageHandlers.IOSbridge.postMessage(JSON.stringify({ type: "ROUTER_EVENT", ...params }));
};

const BASE_URL = "http://192.168.200.103:3000";

export default function useAppRouter() {
  const { device, isWebView } = useWebView();
  const router = useRouter();

  const push = async (url: string, as?: Url, options?: TransitionOptions) => {
    if (!isWebView) {
      return await router.push(url, as, options);
    }

    if (device === "IOS") {
      sendRouterEvent({ path: `${BASE_URL}${url}` });
    }
  };

  return {
    push,
    asPath: router.asPath,
    events: router.events,
    pathname: router.pathname,
    query: router.query,
  };
}
