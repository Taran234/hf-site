import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Calen() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": true, "layout": "month_view" });
        })();
    }, [])
    return <Cal namespace="15min"
        calLink="harbourfront-web-designs/15min"
        style={{ width: "100%", height: "100%", overflow: "visible", flex: 1 }}
        config={{ "layout": "month_view" }}


    />;
};
