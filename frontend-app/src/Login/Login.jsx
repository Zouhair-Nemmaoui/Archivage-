import React, { useState } from "react";
import { axiosMember } from "../api/axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axiosMember.post("/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);
            window.location.href = "/dashboard";
        } catch (err) {
            setError("Email ou mot de passe incorrect");
        }
    };

    return (
        <div className="login-container">
            <h2>Connexion</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email"
                    value={email} onChange={e => setEmail(e.target.value)} />

                <input type="password" placeholder="Mot de passe"
                    value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}
