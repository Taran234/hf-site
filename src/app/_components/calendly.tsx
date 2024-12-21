'use client'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Calen() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": true, "layout": "month_view" });
        })();
    }, [])
    return <Cal namespace="30min"
        calLink="harbourfront-webs-designs/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ "layout": "month_view" }}


    />;
};
