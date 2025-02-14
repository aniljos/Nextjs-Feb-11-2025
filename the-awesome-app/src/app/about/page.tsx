
import { headers } from "next/headers";
export default async function AboutPage(){

    const contenType = (await headers()).get("Content-Type");
    console.log("rendering AboutPage...", contenType);

    //simulate a delay
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    
    return (
        <div>
            <h3>About</h3>
            <p>This is a Next.js 15 Application</p>
        </div>
    )
}