export default async function AboutPage(){

    console.log("rendering AboutPage...");

    //simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    
    return (
        <div>
            <h3>About</h3>
            <p>This is a Next.js 15 Application</p>
        </div>
    )
}