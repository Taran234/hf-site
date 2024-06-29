import * as React from "react";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";
import { Step5 } from "./steps/step5";

export function Howitworks() {
    return (
        <div className="flex flex-col items-center p-5 mx-5">
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
        </div>
    );
}
