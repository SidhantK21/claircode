"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#10b981"},"dark":{"cal-brand":"#10b981"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="30min"
    calLink="sidhant-singh-rathore-ias72r/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"light"}}
    
    
  />;
};
  