import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Pleaselogin() {
    const [timer, setTimer] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer >= 5) {
            router.push("/");
        }
    }, [timer, router]);

    return (
        <>
            <center>
                <h1>PLEASE LOG IN YOU PIECE OF SHIT!</h1>
                <h2>{5 - timer}</h2>
                <img src="https://media.tenor.com/TpNyYm1sXjkAAAAd/arona-blue-archive.gif" alt="california-girl" />
            </center>
        </>
    );
}