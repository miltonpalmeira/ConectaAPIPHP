const BASE_API = "http://localhost:8080/";

export default {
    showUsers: async () => {
        const req = await fetch(`${BASE_API}/select-usuarios.php`);
        const json = await req.json();
        return json;
    } 
}