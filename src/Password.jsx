import { useState } from "react";

function Password() {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>

            <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />

            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
            </button>

        </div>
    );
}

export default Password;