import Image from "next/image";
import NotFound from ""; 

export default function NotFound() {
    return(
        <main>
            <Image src={NotFound} width={} height={} alt="not found" />
            <h1>404 - Not Found</h1>
        </main>
    );
}